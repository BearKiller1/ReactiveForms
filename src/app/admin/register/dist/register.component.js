"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(Obj, route, router) {
        this.Obj = Obj;
        this.route = route;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.msg = this.route.snapshot.paramMap.get('msg');
    };
    RegisterComponent.prototype.register = function (user) {
        if (user.repeat == user.password) {
            this.Obj.AddUser(user.username, user.password); //adding user
            var msg = "You registered now you can use admin panel dashboard"; //sending to dashboard
            this.router.navigate(//navigate dashboard
            ['../dashboard', msg], { relativeTo: this.route });
        }
        else {
            var msg = "Registration Failed pleas try again";
            this.router.navigate(//navigate back and msg for failing and tryhing again
            ['../register', msg], { relativeTo: this.route });
        }
        ;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
