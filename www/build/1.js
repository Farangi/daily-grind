webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.submitForm = function () {
        console.log(this.item);
    };
    LoginPage.prototype.showSignup = function () {
        this.navCtrl.push("SignupPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\FreeLancing\DailyGrind\DailyGrind\src\pages\login\login.html"*/'<ion-content padding text-center>\n\n	<img margin-bottom src="../assets/imgs/logo-md.png" alt="Logo" />\n\n	<form (ngSubmit)="submitForm()">\n\n		<ion-row>\n			<ion-col col-12>\n				<ion-item margin-bottom class="grind-item-input">\n			    	<ion-input type="text" placeholder="Username" [(ngModel)]="item.userName" name="username"></ion-input>\n			  	</ion-item>\n		  	</ion-col>\n	    </ion-row>\n\n	    <ion-row>\n		    <ion-col col-12>\n			  	<ion-item margin-bottom class="grind-item-input">\n			    	<ion-input type="password" placeholder="Password" [(ngModel)]="item.password" name="password"></ion-input>\n			  	</ion-item>\n		  	</ion-col>\n	  	</ion-row>\n\n	  	<ion-row margin-bottom>\n	  		<ion-col col-6>\n				<ion-item class="grind-clear-item">\n		    		<ion-label ion-text color="dark">Remember me</ion-label>\n		    		<ion-checkbox [(ngModel)]="item.rememberMe" name="rememberme" class="grind-checkbox"></ion-checkbox>\n				</ion-item>\n			</ion-col>\n			<ion-col col-6>\n				<ion-item class="grind-clear-item" text-right>\n					<a ion-text color="dark">Forgot Password?</a>\n				</ion-item>\n			</ion-col>\n	  	</ion-row>\n\n		<ion-row>\n			<ion-col col-12>\n			  	<button ion-button block round margin-bottom color="primary" type="submit" class="grind-btn-icon-right">\n			  		<ion-icon class="invisible" name="arrow-round-forward"></ion-icon>\n			  		Sign In\n			  		<ion-icon name="arrow-round-forward"></ion-icon>\n			  	</button>\n			</ion-col>\n		</ion-row>\n\n	</form>\n\n	<div text-center margin-bottom>\n		<h5 ion-text color="primary">OR</h5>\n	</div>\n\n	<ion-row>\n		<ion-col col-12>\n			<button ion-button block round outline margin-bottom color="primary" type="button" (click)="showSignup()" class="grind-btn-icon-right">\n				<ion-icon class="invisible" name="arrow-round-forward"></ion-icon>\n				Sign Up\n				<ion-icon name="arrow-round-forward"></ion-icon>\n			</button>\n		</ion-col>\n    </ion-row>\n\n	<div text-center>\n		<p class="text-grind-dark-gray text-mutated">By signing up, I agree to the \n			<a class="text-grind-dark-gray">Terms of Use</a>\n		</p>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"E:\FreeLancing\DailyGrind\DailyGrind\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map