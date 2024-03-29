webpackJsonp([1],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_item_collapse_menu_item_collapse__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_3__components_menu_item_collapse_menu_item_collapse__["a" /* MenuItemCollapseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_menu_item_collapse_menu_item_collapse__["a" /* MenuItemCollapseComponent */]
            ]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, loadingCtrl, app, alertCtrl, itemService, alertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.itemService = itemService;
        this.alertService = alertService;
        this.menu = "wanted";
        this.items = [];
        this.orderItems = [];
        this.orderItemCount = 0;
        this.uniqueOrderItemCount = 0;
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading();
        this.itemService.getAll().subscribe(function (data) {
            _this.items = data;
            _this.prepareItems();
            _this.loader.dismiss();
        }, function (error) {
            _this.loader.dismiss();
            _this.alertService.error(error);
        });
    };
    MenuPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    };
    MenuPage.prototype.prepareItems = function () {
        this.items.map(function (item) {
            item.expanded = false;
            item.selected = false;
            item.quantity = 0;
            item.itemOrderNum = 0;
            item.orderItemsHelper = [];
            item.category = 'wanted';
            return item;
        });
        this.items[2].category = 'all';
        this.items[3].category = 'all';
        this.items[4].category = 'snacks';
        this.items[5].category = 'snacks';
        this.items = this.items.filter(function (item) {
            return !item.outofstock;
        });
    };
    MenuPage.prototype.expandItem = function (item) {
        var _this = this;
        this.items.map(function (listItem) {
            if (item == listItem) {
                listItem.expanded = !listItem.expanded;
                if (listItem.quantity == 0) {
                    listItem.selected = true;
                    listItem.quantity = 1;
                    _this.uniqueOrderItemCount++;
                    listItem.itemOrderNum = _this.uniqueOrderItemCount;
                    _this.addOrderItem(listItem);
                }
            }
            else {
                listItem.expanded = false;
            }
            return listItem;
        });
    };
    MenuPage.prototype.expandOrderItem = function (item, orderIdx) {
        item.orderItemsHelper.map(function (orderItem, idx) {
            if (idx == orderIdx) {
                item.orderItemsHelper[idx].expanded = !item.orderItemsHelper[idx].expanded;
            }
            else {
                item.orderItemsHelper[idx].expanded = false;
            }
            return orderItem;
        });
    };
    MenuPage.prototype.addOrderItem = function (item) {
        var orderItem = { _id: item._id, name: item.name, price: item.price, description: item.description, orderItemsHelper: item.orderItemsHelper };
        if (item.servings) {
            orderItem.servings = item.servings;
        }
        if (item.variants) {
            orderItem.variants = item.variants;
        }
        if (item.addons) {
            orderItem.addons = item.addons;
        }
        item.orderItemsHelper.push({ _id: item._id, expanded: false, index: this.orderItemCount });
        this.orderItems.push(orderItem);
        this.orderItemCount++;
    };
    MenuPage.prototype.removeOrderItem = function (item) {
        var removeIdx = -1;
        this.orderItems.map(function (orderItem, idx) {
            if (orderItem._id == item._id) {
                removeIdx = idx;
            }
            return orderItem;
        });
        if (removeIdx > -1) {
            this.orderItems.splice(removeIdx, 1);
            item.orderItemsHelper.splice(-1, 1);
            this.orderItemCount--;
        }
    };
    MenuPage.prototype.increment = function (item) {
        if (item.quantity >= 5) {
            item.quantity = 5;
        }
        else {
            item.quantity++;
            this.addOrderItem(item);
        }
    };
    MenuPage.prototype.decrement = function (item) {
        if (item.quantity <= 1) {
            item.quantity = 1;
        }
        else {
            item.quantity--;
            this.removeOrderItem(item);
        }
    };
    MenuPage.prototype.getordersOfItem = function (id) {
        var ordersOfItem = [];
        this.orderItems.map(function (orderItem) {
            if (orderItem._id == id) {
                ordersOfItem.push(orderItem);
            }
            return orderItem;
        });
        return ordersOfItem;
    };
    MenuPage.prototype.removeItemOfOrder = function (item) {
        item.expanded = false;
        item.selected = false;
        item.quantity = 0;
        var idx = this.orderItems.length - 1;
        for (; idx >= 0; idx--) {
            if (this.orderItems[idx]._id == item._id) {
                this.orderItems.splice(idx, 1);
                item.orderItemsHelper.splice(-1, 1);
                this.orderItemCount--;
            }
        }
    };
    MenuPage.prototype.showRemoveConfirmDialogue = function (item) {
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
                        _this.removeItemOfOrder(item);
                    }
                }
            ]
        });
        alert.present();
    };
    MenuPage.prototype.getPreparedOrder = function () {
        var preparedOrder = JSON.parse(JSON.stringify(this.orderItems));
        preparedOrder.map(function (preparedOrderItem) {
            delete preparedOrderItem.orderItemsHelper;
            delete preparedOrderItem.itemOrderNum;
        });
        return { order: { items: preparedOrder } };
    };
    MenuPage.prototype.placeOrder = function () {
        if (this.orderItems.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'No Item',
                subTitle: 'No item is added in the order. Please click on an item from the list to place the order.',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else {
            this.presentLoading();
            var preparedOrder = this.getPreparedOrder();
            this.loader.dismiss();
            this.app.getRootNav().push("LocationPage", preparedOrder);
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\User\Desktop\elfarangi-daily-grind-81f73a782558\daily-grind\src\pages\menu\menu.html"*/'<ion-header no-border>\n\n\n\n  <ion-navbar>\n\n  	<ion-buttons start>\n\n        <button ion-button color="dark" menuToggle>\n\n      		<ion-icon name="menu"></ion-icon>\n\n    	</button>\n\n    </ion-buttons>\n\n    <ion-title>Menu</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="menu">\n\n      <ion-segment-button value="wanted">\n\n        Wanted\n\n      </ion-segment-button>\n\n      <ion-segment-button value="all">\n\n        All\n\n      </ion-segment-button>\n\n      <ion-segment-button value="snacks">\n\n        Snacks\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="menu">\n\n    <ion-list *ngSwitchCase="\'wanted\'">\n\n\n\n      <div *ngFor="let item of items; let itemIdx= index">\n\n        <ion-item detail-none no-lines class="bottom-border" *ngIf="item.category === \'wanted\'" [class.selected]="item.selected">\n\n          \n\n          <ion-row (click)="expandItem(item)" (press)="showRemoveConfirmDialogue(item)" [class.mb-10]="item.expanded">\n\n            <ion-col col-4 class="centered-col">\n\n                <ion-avatar class="grind-avatar">\n\n                  <img src="../assets/imgs/food-img.jpg">\n\n                </ion-avatar>\n\n            </ion-col>  \n\n            <ion-col col-6>\n\n              <h2 class="grind-menu-list-item-p">{{item.name}}</h2>\n\n                <p class="grind-menu-list-item-p">{{item.description}}</p>\n\n              <p ion-text color="primary" class="bold">RS {{item.price}}/-</p>\n\n            </ion-col>\n\n            <ion-col col-2 class="centered-col">\n\n              <button ion-button clear icon-only color="dark">\n\n                <ion-icon class="text-grind-light-gray collapse-icon" [name]="item.expanded ? \'ios-arrow-down\' : \'ios-arrow-forward\'"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <menu-item-collapse [expanded]="item.expanded">\n\n            <div class="collapse-content">\n\n\n\n              <ion-item [class.selected-inner]="item.selected">\n\n                <div item-start>\n\n                  <ion-badge>Item {{item.itemOrderNum}}</ion-badge>\n\n                </div>\n\n                <div item-content text-center>\n\n                  <button ion-button clear icon-only class="text-grind-light-gray" (click)="showRemoveConfirmDialogue(item)">\n\n                    <ion-icon name="close"></ion-icon>\n\n                  </button>\n\n                </div>\n\n              </ion-item>\n\n\n\n              <ion-item [class.selected-inner]="item.selected">\n\n                <div item-start>\n\n                    <p ion-text color="dark" class="bold">Quantity</p>\n\n                  </div>\n\n                <div item-content text-center>\n\n                    <ion-icon name="remove-circle" color="primary" class="quantity-control" (click)="decrement(item)"></ion-icon>\n\n                    <span class="quantity-text">{{item.quantity}}</span>\n\n                    <ion-icon name="add-circle" color="secondary" class="quantity-control" (click)="increment(item)"></ion-icon>\n\n                  </div>\n\n              </ion-item>\n\n\n\n              <div *ngIf="item.servings || item.variants || item.addons">\n\n                <ion-item *ngFor="let orderItem of getordersOfItem(item._id); let orderItemidx= index" [class.selected-inner]="item.selected">\n\n                  \n\n                  <ion-item (click)="expandOrderItem(item, orderItemidx)" [class.selected-inner]="item.selected">\n\n                    <div item-start>\n\n                        <p ion-text class="bold">Options for {{item.name}} {{orderItemidx+1}}</p>\n\n                      </div>\n\n                    <div item-end text-center>\n\n                        <button ion-button outline icon-only color="primary">\n\n                          <ion-icon [name]="orderItem.orderItemsHelper[orderItemidx].expanded ? \'remove\' : \'add\'"></ion-icon>\n\n                        </button>\n\n                      </div>\n\n                  </ion-item>\n\n\n\n                  <menu-item-collapse [expanded]="orderItem.orderItemsHelper[orderItemidx].expanded">\n\n\n\n                    <ion-list radio-group *ngIf="item.servings" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].serving">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Servings\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let serving of orderItem.servings" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{serving.id}}" name="serving"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{serving.name}}</p>\n\n                        </div>\n\n                        <div item-end text-center>\n\n                          <p ion-text color="primary">{{serving.price}}/-</p>\n\n                        </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                    <ion-list radio-group *ngIf="orderItem.variants" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].variant">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Variants\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let variant of orderItem.variants" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{variant.id}}" name="variant"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{variant.name}}</p>\n\n                          </div>\n\n                          <div item-end text-center>\n\n                            <p ion-text color="primary">{{variant.price}}/-</p>\n\n                          </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                    <ion-list radio-group *ngIf="orderItem.addons" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].addon">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Addons\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let addon of orderItem.addons" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{addon.id}}" name="addon"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{addon.name}}</p>\n\n                          </div>\n\n                          <div item-end text-center>\n\n                            <p ion-text color="primary">{{addon.price}}/-</p>\n\n                          </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                  </menu-item-collapse>\n\n                \n\n                </ion-item>\n\n              </div>\n\n\n\n            </div>\n\n\n\n          </menu-item-collapse>\n\n        </ion-item>\n\n      </div>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'all\'">\n\n\n\n      <div *ngFor="let item of items; let itemIdx= index">\n\n        <ion-item detail-none no-lines class="bottom-border" *ngIf="item.category === \'all\'" [class.selected]="item.selected">\n\n          \n\n          <ion-row (click)="expandItem(item)" (press)="showRemoveConfirmDialogue(item)" [class.mb-10]="item.expanded">\n\n            <ion-col col-4 class="centered-col">\n\n                <ion-avatar class="grind-avatar">\n\n                  <img src="../assets/imgs/food-img.jpg">\n\n                </ion-avatar>\n\n            </ion-col>  \n\n            <ion-col col-6>\n\n              <h2 class="grind-menu-list-item-p">{{item.name}}</h2>\n\n                <p class="grind-menu-list-item-p">{{item.description}}</p>\n\n              <p ion-text color="primary" class="bold">RS {{item.price}}/-</p>\n\n            </ion-col>\n\n            <ion-col col-2 class="centered-col">\n\n              <button ion-button clear icon-only color="dark">\n\n                <ion-icon class="text-grind-light-gray collapse-icon" [name]="item.expanded ? \'ios-arrow-down\' : \'ios-arrow-forward\'"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <menu-item-collapse [expanded]="item.expanded">\n\n            <div class="collapse-content">\n\n\n\n              <ion-item [class.selected-inner]="item.selected">\n\n                <div item-start>\n\n                  <ion-badge>Item {{item.itemOrderNum}}</ion-badge>\n\n                </div>\n\n                <div item-content text-center>\n\n                  <button ion-button clear icon-only class="text-grind-light-gray" (click)="showRemoveConfirmDialogue(item)">\n\n                    <ion-icon name="close"></ion-icon>\n\n                  </button>\n\n                </div>\n\n              </ion-item>\n\n\n\n              <ion-item [class.selected-inner]="item.selected">\n\n                <div item-start>\n\n                    <p ion-text color="dark" class="bold">Quantity</p>\n\n                  </div>\n\n                <div item-content text-center>\n\n                    <ion-icon name="remove-circle" color="primary" class="quantity-control" (click)="decrement(item)"></ion-icon>\n\n                    <span class="quantity-text">{{item.quantity}}</span>\n\n                    <ion-icon name="add-circle" color="secondary" class="quantity-control" (click)="increment(item)"></ion-icon>\n\n                  </div>\n\n              </ion-item>\n\n\n\n              <div *ngIf="item.servings || item.variants || item.addons">\n\n                <ion-item *ngFor="let orderItem of getordersOfItem(item._id); let orderItemidx= index" [class.selected-inner]="item.selected">\n\n                  \n\n                  <ion-item (click)="expandOrderItem(item, orderItemidx)" [class.selected-inner]="item.selected">\n\n                    <div item-start>\n\n                        <p ion-text class="bold">Options for {{item.name}} {{orderItemidx+1}}</p>\n\n                      </div>\n\n                    <div item-end text-center>\n\n                        <button ion-button outline icon-only color="primary">\n\n                          <ion-icon [name]="orderItem.orderItemsHelper[orderItemidx].expanded ? \'remove\' : \'add\'"></ion-icon>\n\n                        </button>\n\n                      </div>\n\n                  </ion-item>\n\n\n\n                  <menu-item-collapse [expanded]="orderItem.orderItemsHelper[orderItemidx].expanded">\n\n\n\n                    <ion-list radio-group *ngIf="item.servings" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].serving">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Servings\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let serving of orderItem.servings" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{serving.id}}" name="serving"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{serving.name}}</p>\n\n                        </div>\n\n                        <div item-end text-center>\n\n                          <p ion-text color="primary">{{serving.price}}/-</p>\n\n                        </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                    <ion-list radio-group *ngIf="orderItem.variants" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].variant">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Variants\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let variant of orderItem.variants" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{variant.id}}" name="variant"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{variant.name}}</p>\n\n                          </div>\n\n                          <div item-end text-center>\n\n                            <p ion-text color="primary">{{variant.price}}/-</p>\n\n                          </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                    <ion-list radio-group *ngIf="orderItem.addons" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].addon">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Addons\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let addon of orderItem.addons" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{addon.id}}" name="addon"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{addon.name}}</p>\n\n                          </div>\n\n                          <div item-end text-center>\n\n                            <p ion-text color="primary">{{addon.price}}/-</p>\n\n                          </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                  </menu-item-collapse>\n\n                \n\n                </ion-item>\n\n              </div>\n\n\n\n            </div>\n\n\n\n          </menu-item-collapse>\n\n        </ion-item>\n\n      </div>\n\n      \n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'snacks\'">\n\n\n\n      <div *ngFor="let item of items; let itemIdx= index">\n\n        <ion-item detail-none no-lines class="bottom-border" *ngIf="item.category === \'snacks\'" [class.selected]="item.selected">\n\n          \n\n          <ion-row (click)="expandItem(item)" (press)="showRemoveConfirmDialogue(item)" [class.mb-10]="item.expanded">\n\n            <ion-col col-4 class="centered-col">\n\n                <ion-avatar class="grind-avatar">\n\n                  <img src="../assets/imgs/food-img.jpg">\n\n                </ion-avatar>\n\n            </ion-col>  \n\n            <ion-col col-6>\n\n              <h2 class="grind-menu-list-item-p">{{item.name}}</h2>\n\n                <p class="grind-menu-list-item-p">{{item.description}}</p>\n\n              <p ion-text color="primary" class="bold">RS {{item.price}}/-</p>\n\n            </ion-col>\n\n            <ion-col col-2 class="centered-col">\n\n              <button ion-button clear icon-only color="dark">\n\n                <ion-icon class="text-grind-light-gray collapse-icon" [name]="item.expanded ? \'ios-arrow-down\' : \'ios-arrow-forward\'"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <menu-item-collapse [expanded]="item.expanded">\n\n            <div class="collapse-content">\n\n\n\n              <ion-item [class.selected-inner]="item.selected">\n\n                <div item-start>\n\n                  <ion-badge>Item {{item.itemOrderNum}}</ion-badge>\n\n                </div>\n\n                <div item-content text-center>\n\n                  <button ion-button clear icon-only class="text-grind-light-gray" (click)="showRemoveConfirmDialogue(item)">\n\n                    <ion-icon name="close"></ion-icon>\n\n                  </button>\n\n                </div>\n\n              </ion-item>\n\n\n\n              <ion-item [class.selected-inner]="item.selected">\n\n                <div item-start>\n\n                    <p ion-text color="dark" class="bold">Quantity</p>\n\n                  </div>\n\n                <div item-content text-center>\n\n                    <ion-icon name="remove-circle" color="primary" class="quantity-control" (click)="decrement(item)"></ion-icon>\n\n                    <span class="quantity-text">{{item.quantity}}</span>\n\n                    <ion-icon name="add-circle" color="secondary" class="quantity-control" (click)="increment(item)"></ion-icon>\n\n                  </div>\n\n              </ion-item>\n\n\n\n              <div *ngIf="item.servings || item.variants || item.addons">\n\n                <ion-item *ngFor="let orderItem of getordersOfItem(item._id); let orderItemidx= index" [class.selected-inner]="item.selected">\n\n                  \n\n                  <ion-item (click)="expandOrderItem(item, orderItemidx)" [class.selected-inner]="item.selected">\n\n                    <div item-start>\n\n                        <p ion-text class="bold">Options for {{item.name}} {{orderItemidx+1}}</p>\n\n                      </div>\n\n                    <div item-end text-center>\n\n                        <button ion-button outline icon-only color="primary">\n\n                          <ion-icon [name]="orderItem.orderItemsHelper[orderItemidx].expanded ? \'remove\' : \'add\'"></ion-icon>\n\n                        </button>\n\n                      </div>\n\n                  </ion-item>\n\n\n\n                  <menu-item-collapse [expanded]="orderItem.orderItemsHelper[orderItemidx].expanded">\n\n\n\n                    <ion-list radio-group *ngIf="item.servings" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].serving">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Servings\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let serving of orderItem.servings" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{serving.id}}" name="serving"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{serving.name}}</p>\n\n                        </div>\n\n                        <div item-end text-center>\n\n                          <p ion-text color="primary">{{serving.price}}/-</p>\n\n                        </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                    <ion-list radio-group *ngIf="orderItem.variants" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].variant">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Variants\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let variant of orderItem.variants" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{variant.id}}" name="variant"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{variant.name}}</p>\n\n                          </div>\n\n                          <div item-end text-center>\n\n                            <p ion-text color="primary">{{variant.price}}/-</p>\n\n                          </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                    <ion-list radio-group *ngIf="orderItem.addons" [(ngModel)]="orderItems[orderItem.orderItemsHelper[orderItemidx].index].addon">\n\n\n\n                      <ion-list-header [class.selected-inner]="item.selected">\n\n                          Addons\n\n                      </ion-list-header>\n\n\n\n                      <ion-item *ngFor="let addon of orderItem.addons" [class.selected-inner]="item.selected">\n\n                        <div item-start>\n\n                            <ion-radio value="{{addon.id}}" name="addon"></ion-radio>\n\n                          </div>\n\n                        <div item-content>\n\n                            <p>{{addon.name}}</p>\n\n                          </div>\n\n                          <div item-end text-center>\n\n                            <p ion-text color="primary">{{addon.price}}/-</p>\n\n                          </div>\n\n                      </ion-item>\n\n\n\n                    </ion-list>\n\n\n\n                  </menu-item-collapse>\n\n                \n\n                </ion-item>\n\n              </div>\n\n\n\n            </div>\n\n\n\n          </menu-item-collapse>\n\n        </ion-item>\n\n      </div> \n\n    </ion-list>\n\n\n\n  </div>\n\n	<!-- <ion-tabs tabsPlacement="top">\n\n	  <ion-tab [root]="wantedRoot" tabTitle="Wanted Deals"></ion-tab>\n\n	  <ion-tab [root]="allRoot" tabTitle="All"></ion-tab>\n\n	  <ion-tab [root]="snacksRoot" tabTitle="Snacks"></ion-tab>\n\n	</ion-tabs> -->\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button block color="primary" type="button" class="grind-block-btn grind-btn-icon-right" (click)="placeOrder()">\n\n    <ion-icon class="invisible" name="arrow-round-forward"></ion-icon>\n\n    Place Order\n\n    <ion-icon name="arrow-round-forward"></ion-icon>\n\n  </button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\User\Desktop\elfarangi-daily-grind-81f73a782558\daily-grind\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__services__["c" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_0__services__["a" /* AlertService */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 311:
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