webpackJsonp([1],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuallPageModule", function() { return MenuallPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menuall__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_item_collapse_menu_item_collapse__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuallPageModule = (function () {
    function MenuallPageModule() {
    }
    MenuallPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menuall__["a" /* MenuallPage */],
                __WEBPACK_IMPORTED_MODULE_3__components_menu_item_collapse_menu_item_collapse__["a" /* MenuItemCollapseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menuall__["a" /* MenuallPage */]),
            ],
        })
    ], MenuallPageModule);
    return MenuallPageModule;
}());

//# sourceMappingURL=menuall.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuallPage = (function () {
    function MenuallPage(navCtrl, navParams, alertCtrl, itemService, alertService) {
        //        this.items = [
        //            {
        //	            id: 1,name:'Omelete', description: 'Served with complimentary two slices of milk bread', price:40,
        //	            servings:[
        //         			{id:1,name:'Two egg',price:0},
        //         			{id:2,name:'Three egg',price:15}
        //	            ],
        //	         	variants:[
        //     	 			{id:1,name:'Plain',price:0},
        //     	 			{id:2,name:'Mushroom',price:10},
        //     	 			{id:3,name:'Cheese',price:20}
        //	         	],
        //	         	addons:[
        //	 	 			{id:1,name:'Mushroom',price:10},
        //	 	 			{id:2,name:'Cheese',price:20},
        //	 	 			{id:3,name:'Olives',price:30}
        //	         	]
        //         	},
        //            {
        //	            id: 2,name:'Omelete', description: 'Served with complimentary two slices of milk bread', price:40,
        //	         	variants:[
        //     	 			{id:1,name:'Plain',price:0},
        //     	 			{id:2,name:'Mushroom',price:10},
        //     	 			{id:3,name:'Cheese',price:20}
        //	         	],
        //	         	addons:[
        //	 	 			{id:1,name:'Mushroom',price:10},
        //	 	 			{id:2,name:'Cheese',price:20},
        //	 	 			{id:3,name:'Olives',price:30}
        //	         	]
        //         	},
        //            {
        //	            id: 3,name:'Omelete', description: 'Served with complimentary two slices of milk bread', price:40,
        //	            servings:[
        //         			{id:1,name:'Two egg',price:0},
        //         			{id:2,name:'Three egg',price:15}
        //	            ],
        //	         	variants:[
        //     	 			{id:1,name:'Plain',price:0},
        //     	 			{id:2,name:'Mushroom',price:10},
        //     	 			{id:3,name:'Cheese',price:20}
        //	         	],
        //	         	addons:[
        //	 	 			{id:1,name:'Mushroom',price:10},
        //	 	 			{id:2,name:'Cheese',price:20},
        //	 	 			{id:3,name:'Olives',price:30}
        //	         	]
        //         	},
        //            {
        //	            id: 4,name:'Omelete', description: 'Served with complimentary two slices of milk bread', price:40,
        //	            servings:[
        //         			{id:1,name:'Two egg',price:0},
        //         			{id:2,name:'Three egg',price:15}
        //	            ],
        //	         	variants:[
        //     	 			{id:1,name:'Plain',price:0},
        //     	 			{id:2,name:'Mushroom',price:10},
        //     	 			{id:3,name:'Cheese',price:20}
        //	         	],
        //	         	addons:[
        //	 	 			{id:1,name:'Mushroom',price:10},
        //	 	 			{id:2,name:'Cheese',price:20},
        //	 	 			{id:3,name:'Olives',price:30}
        //	         	]
        //         	},
        //            {
        //	            id: 5,name:'Omelete', description: 'Served with complimentary two slices of milk bread', price:40,
        //	            servings:[
        //         			{id:1,name:'Two egg',price:0},
        //         			{id:2,name:'Three egg',price:15}
        //	            ],
        //	         	variants:[
        //     	 			{id:1,name:'Plain',price:0},
        //     	 			{id:2,name:'Mushroom',price:10},
        //     	 			{id:3,name:'Cheese',price:20}
        //	         	],
        //	         	addons:[
        //	 	 			{id:1,name:'Mushroom',price:10},
        //	 	 			{id:2,name:'Cheese',price:20},
        //	 	 			{id:3,name:'Olives',price:30}
        //	         	]
        //         	},
        //            {
        //	            id: 6,name:'Omelete', description: 'Served with complimentary two slices of milk bread', price:40,
        //	            servings:[
        //         			{id:1,name:'Two egg',price:0},
        //         			{id:2,name:'Three egg',price:15}
        //	            ],
        //	         	variants:[
        //     	 			{id:1,name:'Plain',price:0},
        //     	 			{id:2,name:'Mushroom',price:10},
        //     	 			{id:3,name:'Cheese',price:20}
        //	         	],
        //	         	addons:[
        //	 	 			{id:1,name:'Mushroom',price:10},
        //	 	 			{id:2,name:'Cheese',price:20},
        //	 	 			{id:3,name:'Olives',price:30}
        //	         	]
        //         	}
        //        ];
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.itemService = itemService;
        this.alertService = alertService;
        this.items = [];
        this.itemsUiHelper = [];
        this.orderItems = [];
        this.orderItemCount = 0;
    }
    MenuallPage.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getAll().subscribe(function (data) {
            _this.items = data;
            _this.prepareItems();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    MenuallPage.prototype.prepareItems = function () {
        var _this = this;
        this.items.map(function () {
            _this.itemsUiHelper.push({ expanded: false, quantity: 0, orderItemsHelper: [] });
        });
    };
    MenuallPage.prototype.addOrderItem = function (itemId, helperIdx) {
        this.orderItems.push({ itemId: itemId });
        this.orderItemCount++;
        this.itemsUiHelper[helperIdx].orderItemsHelper.push({ itemId: itemId, expanded: false });
    };
    MenuallPage.prototype.removeOrderItem = function (itemId, helperIdx) {
        var removeIdx = -1;
        this.orderItems.map(function (orderItem, idx) {
            if (orderItem.itemId == itemId) {
                removeIdx = idx;
            }
            return orderItem;
        });
        if (removeIdx > -1) {
            this.orderItems.splice(removeIdx, 1);
            this.orderItemCount--;
            this.itemsUiHelper[helperIdx].orderItemsHelper.splice(-1, 1);
        }
    };
    MenuallPage.prototype.expandItem = function (item) {
        var _this = this;
        this.items.map(function (listItem, idx) {
            if (item == listItem) {
                _this.itemsUiHelper[idx].expanded = !_this.itemsUiHelper[idx].expanded;
                if (_this.itemsUiHelper[idx].quantity == 0) {
                    _this.itemsUiHelper[idx].quantity = 1;
                    _this.addOrderItem(listItem._id, idx);
                }
            }
            else {
                _this.itemsUiHelper[idx].expanded = false;
            }
            return listItem;
        });
    };
    MenuallPage.prototype.expandOrderItem = function (itemIdx, helperIdx) {
        var _this = this;
        this.itemsUiHelper[itemIdx].orderItemsHelper.map(function (orderItem, idx) {
            if (idx == helperIdx) {
                _this.itemsUiHelper[itemIdx].orderItemsHelper[helperIdx].expanded = !_this.itemsUiHelper[itemIdx].orderItemsHelper[helperIdx].expanded;
            }
            else {
                _this.itemsUiHelper[itemIdx].orderItemsHelper[idx].expanded = false;
            }
            return orderItem;
        });
    };
    MenuallPage.prototype.increment = function (itemId, helperIdx) {
        var _this = this;
        this.items.map(function (item, idx) {
            if (item._id == itemId) {
                if (_this.itemsUiHelper[idx].quantity >= 5) {
                    _this.itemsUiHelper[idx].quantity = 5;
                }
                else {
                    _this.itemsUiHelper[idx].quantity++;
                    _this.addOrderItem(itemId, helperIdx);
                }
            }
            return item;
        });
    };
    MenuallPage.prototype.decrement = function (itemId, helperIdx) {
        var _this = this;
        this.items.map(function (item, idx) {
            if (item._id == itemId) {
                if (_this.itemsUiHelper[idx].quantity <= 1) {
                    _this.itemsUiHelper[idx].quantity = 1;
                }
                else {
                    _this.itemsUiHelper[idx].quantity--;
                    _this.removeOrderItem(itemId, helperIdx);
                }
            }
            return item;
        });
    };
    MenuallPage.prototype.getordersOfItem = function (itemId) {
        var ordersOfItem = [];
        this.orderItems.map(function (orderItem) {
            if (orderItem.itemId == itemId) {
                ordersOfItem.push(orderItem);
            }
            return orderItem;
        });
        return ordersOfItem;
    };
    MenuallPage.prototype.removeItemOfOrder = function (itemId, itemIndex) {
        var _this = this;
        this.itemsUiHelper[itemIndex].expanded = false;
        this.itemsUiHelper[itemIndex].quantity = 0;
        this.orderItems.map(function (orderItem, idx) {
            if (orderItem.itemId == itemId) {
                _this.orderItems.splice(idx, 1);
            }
            return orderItem;
        });
    };
    MenuallPage.prototype.showRemoveConfirmDialogue = function (itemId, itemIndex) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm removal',
            message: 'Are you sure you want to remove this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.removeItemOfOrder(itemId, itemIndex);
                    }
                }
            ]
        });
        alert.present();
    };
    MenuallPage.prototype.placeOrder = function () {
        if (this.orderItems.length == 0) {
            var alert = this.alertCtrl.create({
                title: 'No Item',
                subTitle: 'No item is added in the order. Please click on an item from the list to place the order.',
                buttons: ['Dismiss']
            });
            alert.present();
        }
        else {
            console.log(this.orderItems);
        }
    };
    MenuallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-menuall',template:/*ion-inline-start:"D:\User\Desktop\elfarangi-daily-grind-81f73a782558\daily-grind\src\pages\menuall\menuall.html"*/'<ion-content padding>\n\n\n\n	<ion-list>\n\n      <ion-item detail-none no-lines class="bottom-border" *ngFor="let item of items; let itemIdx= index">\n\n      	\n\n      	<ion-row (click)="expandItem(item)" [class.mb-10]="itemsUiHelper[itemIdx].expanded">\n\n		   <ion-col col-4 class="centered-col">\n\n		       <ion-avatar class="grind-avatar">\n\n			      <img src="http://lorempixel.com/100/100/">\n\n			    </ion-avatar>\n\n		   </ion-col>  \n\n		   <ion-col col-6>\n\n		      <h2>{{item.name}}</h2>\n\n		        <p class="grind-menu-list-item-p">{{item.description}}</p>\n\n			    <p ion-text color="primary" class="bold">RS {{item.price}}/-</p>\n\n		   </ion-col>\n\n		   <ion-col col-2 class="centered-col">\n\n		        <button ion-button clear icon-only color="dark">\n\n				  <ion-icon [name]="itemsUiHelper[itemIdx].expanded ? \'ios-arrow-down\' : \'ios-arrow-forward\'"></ion-icon>\n\n				</button>\n\n		   </ion-col>\n\n		</ion-row>\n\n\n\n        <menu-item-collapse [expanded]="itemsUiHelper[itemIdx].expanded">\n\n        	<div class="collapse-content">\n\n\n\n        		<ion-item>\n\n        			<div item-start>\n\n				    	<p>Item {{itemIdx+1}}</p>\n\n				    </div>\n\n		   			<div item-content text-center>\n\n				    	<button ion-button clear icon-only color="dark" (click)="showRemoveConfirmDialogue(item._id, itemIdx)">\n\n						  <ion-icon name="close"></ion-icon>\n\n						</button>\n\n				    </div>\n\n				</ion-item>\n\n\n\n        		<ion-item>\n\n					<div item-start>\n\n				    	<p ion-text color="dark" class="bold">Quantity</p>\n\n				    </div>\n\n					<div item-content text-center>\n\n				    	<ion-icon name="remove-circle" color="primary" class="quantity-control" (click)="decrement(item._id, itemIdx)"></ion-icon>\n\n	    				<span class="quantity-text">{{itemsUiHelper[itemIdx].quantity}}</span>\n\n	    				<ion-icon name="add-circle" color="secondary" class="quantity-control" (click)="increment(item._id, itemIdx)"></ion-icon>\n\n				    </div>\n\n				</ion-item>\n\n\n\n				<div *ngIf="item.servings || item.variants || item.addons">\n\n					<ion-item *ngFor="let orderItem of getordersOfItem(item._id); let orderItemidx= index">\n\n						\n\n						<ion-item (click)="expandOrderItem(itemIdx, orderItemidx)">\n\n							<div item-start>\n\n						    	<p ion-text class="bold">Options for {{item.name}} {{orderItemidx+1}}</p>\n\n						    </div>\n\n							<div item-end text-center>\n\n						    	<button ion-button outline icon-only color="primary">\n\n								  <ion-icon [name]="itemsUiHelper[itemIdx].orderItemsHelper[orderItemidx].expanded ? \'remove\' : \'add\'"></ion-icon>\n\n								</button>\n\n						    </div>\n\n						</ion-item>\n\n\n\n					    <menu-item-collapse [expanded]="itemsUiHelper[itemIdx].orderItemsHelper[orderItemidx].expanded">\n\n\n\n					    	<ion-list radio-group *ngIf="item.servings" [(ngModel)]="orderItems[orderItemCount-1].serving">\n\n\n\n								<ion-list-header>\n\n								    Serving\n\n								</ion-list-header>\n\n\n\n								<!-- <ion-item *ngFor="let serving of item.servings">\n\n								    <ion-label>{{serving.name}}}</ion-label>\n\n								    <ion-radio value="serving.id"></ion-radio>\n\n								</ion-item> -->\n\n								<ion-item *ngFor="let serving of item.servings">\n\n									<div item-start>\n\n								    	<ion-radio value="{{serving.id}}" name="serving"></ion-radio>\n\n								    </div>\n\n									<div item-content>\n\n								    	<p>{{serving.name}}</p>\n\n								    </div>\n\n								    <div item-end text-center>\n\n								    	<p ion-text color="primary">{{serving.price}}/-</p>\n\n								    </div>\n\n								    <!-- <ion-row item-content>\n\n					   					<ion-col col-4>\n\n					   						<ion-radio item-end value="{{serving.id}}" name="serving"></ion-radio>\n\n					   					</ion-col>\n\n					   					<ion-col col-4>\n\n					   						<p>{{serving.name}}</p>\n\n					   					</ion-col>\n\n					   					<ion-col col-4>\n\n					   						<p>{{serving.price}}</p>\n\n					   					</ion-col>\n\n					   				</ion-row> -->\n\n								</ion-item>\n\n							</ion-list>\n\n\n\n							<ion-list radio-group *ngIf="item.variants" [(ngModel)]="orderItems[orderItemCount-1].variant">\n\n\n\n								<ion-list-header>\n\n								    Variants\n\n								</ion-list-header>\n\n\n\n								<ion-item *ngFor="let variant of item.variants">\n\n									<div item-start>\n\n								    	<ion-radio value="{{variant.id}}" name="variant"></ion-radio>\n\n								    </div>\n\n									<div item-content>\n\n								    	<p>{{variant.name}}</p>\n\n								    </div>\n\n								    <div item-end text-center>\n\n								    	<p ion-text color="primary">{{variant.price}}/-</p>\n\n								    </div>\n\n								</ion-item>\n\n\n\n							</ion-list>\n\n\n\n							<ion-list radio-group *ngIf="item.addons" [(ngModel)]="orderItems[orderItemCount-1].addons">\n\n\n\n								<ion-list-header>\n\n								    Addons\n\n								</ion-list-header>\n\n\n\n								<ion-item *ngFor="let addon of item.addons">\n\n									<div item-start>\n\n								    	<ion-radio value="{{addon.id}}" name="addon"></ion-radio>\n\n								    </div>\n\n									<div item-content>\n\n								    	<p>{{addon.name}}</p>\n\n								    </div>\n\n								    <div item-end text-center>\n\n								    	<p ion-text color="primary">{{addon.price}}/-</p>\n\n								    </div>\n\n								</ion-item>\n\n\n\n							</ion-list>\n\n\n\n					    </menu-item-collapse>\n\n						\n\n					</ion-item>\n\n				</div>\n\n\n\n			</div>\n\n\n\n        </menu-item-collapse>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar>\n\n	    <button ion-button block color="primary" type="button" class="grind-block-btn grind-btn-icon-right" (click)="placeOrder()">\n\n			<ion-icon class="invisible" name="arrow-round-forward"></ion-icon>\n\n			Place Order\n\n			<ion-icon name="arrow-round-forward"></ion-icon>\n\n		</button>\n\n	</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\User\Desktop\elfarangi-daily-grind-81f73a782558\daily-grind\src\pages\menuall\menuall.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services__["c" /* ItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services__["c" /* ItemService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services__["a" /* AlertService */]) === "function" && _e || Object])
    ], MenuallPage);
    return MenuallPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=menuall.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemCollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuItemCollapseComponent = (function () {
    function MenuItemCollapseComponent(renderer) {
        this.renderer = renderer;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], MenuItemCollapseComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expanded'),
        __metadata("design:type", Object)
    ], MenuItemCollapseComponent.prototype, "expanded", void 0);
    MenuItemCollapseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-item-collapse',template:/*ion-inline-start:"D:\User\Desktop\elfarangi-daily-grind-81f73a782558\daily-grind\src\components\menu-item-collapse\menu-item-collapse.html"*/'<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n\n    <ng-content></ng-content>\n\n</div>'/*ion-inline-end:"D:\User\Desktop\elfarangi-daily-grind-81f73a782558\daily-grind\src\components\menu-item-collapse\menu-item-collapse.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], MenuItemCollapseComponent);
    return MenuItemCollapseComponent;
}());

//# sourceMappingURL=menu-item-collapse.js.map

/***/ })

});
//# sourceMappingURL=1.js.map