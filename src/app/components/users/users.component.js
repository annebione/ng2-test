"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../services/user.service");
var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
    }
    ;
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { _this.users = users;});
    };
    ;
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    ;
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    ;
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'my-users',
        providers: [user_service_1.UserService],
        template: "\n    <h2>Users List</h2>\n    <ul class=\"users\">\n      <li *ngFor=\"let user of users\"  [routerLink]=\"['/profile']\" [class.selected]=\"user === selectedUser\" (click)=\"onSelect(user)\">\n         {{user.name.title}} \n   {{user.name.first}} \n </li>\n    </ul>\n    ",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map