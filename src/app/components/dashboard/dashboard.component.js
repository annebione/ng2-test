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
var http_1 = require("@angular/http");
var user_service_1 = require("../../services/user.service");
var DashboardComponent = (function () {
    function DashboardComponent(userService, http) {
        this.userService = userService;
        this.users = [];
        var data1 = Number(window.localStorage.getItem('mr'));
        var data2 = Number(window.localStorage.getItem('mrs'));
        var data3 = Number(window.localStorage.getItem('ms'));
        this.options = {
            chart: {
                backgroundColor: '#212322',
                type: 'column'
            },
            xAxis: {
                categories: [
                    'Mr.',
                    'Mrs.',
                    'Ms.',
                ]
            },
            title: { text: 'Top titles' },
            series: [
                {
                    name: 'Mr.',
                    data: [data1],
                },
                {
                    name: 'Mrs.',
                    data: [data2],
                },
                {
                    name: 'Ms.',
                    data: [data3],
                }
            ]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .then(function (users) {
            var mr = 0;
            var mrs = 0;
            var ms = 0;
            _this.users = users.slice(0, 5);
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i].name.title == 'mr') {
                    mr++;
                }
                if (_this.users[i].name.title == 'ms') {
                    ms++;
                }
                if (_this.users[i].name.title == 'mrs') {
                    mrs++;
                }
                window.localStorage.setItem('mr', mr);
                window.localStorage.setItem('ms', ms);
                window.localStorage.setItem('mrs', mrs);
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        providers: [user_service_1.UserService],
        templateUrl: './dashboard.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, http_1.Http])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map