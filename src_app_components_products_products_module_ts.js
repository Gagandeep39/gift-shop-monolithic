"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_components_products_products_module_ts"],{

/***/ 2622:
/*!********************************************************************!*\
  !*** ./src/app/components/products/about-us/about-us.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutUsComponent {
  constructor() {}
  ngOnInit() {}
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
  return new (t || AboutUsComponent)();
};
AboutUsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutUsComponent,
  selectors: [["app-about-us"]],
  decls: 2,
  vars: 0,
  template: function AboutUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-us works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 142:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/products/cart-new/cart-item-card/cart-item-card.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItemCardComponent": () => (/* binding */ CartItemCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-06 22:41:33
 * @modify date 2021-02-06 22:41:33
 * @desc [description]
 */




function CartItemCardComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx_r0.productPrice, " ");
  }
}
function CartItemCardComponent_img_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemCardComponent_img_16_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.deleteProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CartItemCardComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
  }
}
const _c0 = function (a1) {
  return ["/products", a1];
};
class CartItemCardComponent {
  constructor() {
    this.removeItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  discountPrice() {
    return this.discountPercent <= 0 ? this.productPrice : this.productPrice - this.productPrice * 0.01 * this.discountPercent;
  }
  deleteProduct() {
    this.removeItemEvent.emit(this.productId);
  }
}
CartItemCardComponent.ɵfac = function CartItemCardComponent_Factory(t) {
  return new (t || CartItemCardComponent)();
};
CartItemCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CartItemCardComponent,
  selectors: [["app-cart-item-card"]],
  inputs: {
    productId: "productId",
    productName: "productName",
    productDescription: "productDescription",
    productIcon: "productIcon",
    productPrice: "productPrice",
    productQuantity: "productQuantity",
    discountPercent: "discountPercent",
    loadingState: "loadingState"
  },
  outputs: {
    removeItemEvent: "removeItemEvent"
  },
  decls: 18,
  vars: 12,
  consts: [[1, "product-item"], [1, "product-img", 3, "src", "alt", "error"], [1, "product-details"], [1, "product-data"], [1, "product-name"], ["src", "assets/images/info.svg", "alt", "", 1, "detail", 3, "routerLink"], [1, "product-description"], [1, "product-quantity"], ["src", "assets/images/basket.svg", "alt", ""], [1, "product-price"], ["class", "strike", 4, "ngIf"], ["class", "product-delete", "src", "assets/images/delete.svg", "alt", "", 3, "click", 4, "ngIf"], ["class", "spinner-border", 4, "ngIf"], [1, "strike"], ["src", "assets/images/delete.svg", "alt", "", 1, "product-delete", 3, "click"], [1, "spinner-border"]],
  template: function CartItemCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function CartItemCardComponent_Template_img_error_1_listener($event) {
        return $event.target.src = "^assets/images/celebration2.jpg";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartItemCardComponent_span_15_Template, 2, 1, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CartItemCardComponent_img_16_Template, 1, 0, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CartItemCardComponent_span_17_Template, 1, 0, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.productIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.productName);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.productId));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productQuantity, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.discountPrice(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.discountPercent > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loadingState == null ? null : ctx.loadingState.productId) !== ctx.productId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingState.loading && ctx.loadingState.productId === ctx.productId);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".product-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1%;\n  border-radius: 4px;\n  overflow: auto;\n  margin-left: 10%;\n  margin-right: 10%;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  transition: 0.2s transform;\n  outline: none;\n  cursor: pointer;\n}\n\n.product-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.product-details[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.product-name[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n\n.product-name[_ngcontent-%COMP%], .product-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #24b7d8;\n  letter-spacing: 2px;\n  font-size: 200%;\n  margin: 4% 0;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.product-details[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.product-img[_ngcontent-%COMP%] {\n  width: 15%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  font-size: x-large;\n  display: flex;\n  flex-direction: column;\n  padding: 0 24px;\n  vertical-align: middle;\n  margin-top: 5%;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  color: rgb(92, 92, 92);\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  letter-spacing: 1px;\n  font-size: large;\n  max-width: 300px;\n}\n\n.product-data[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.product-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.product-quantity[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .product-price[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 32px;\n  text-align: center;\n}\n\n.product-quantity[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: larger;\n  margin-top: 30%;\n  font-size: x-large;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.strike[_ngcontent-%COMP%] {\n  font-size: large;\n  text-decoration: line-through;\n  font-weight: normal;\n}\n\n.detail[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n\n.product-delete[_ngcontent-%COMP%] {\n  width: 24px;\n  cursor: pointer;\n  vertical-align: middle;\n  margin-right: 4%;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9jYXJ0LW5ldy9jYXJ0LWl0ZW0tY2FyZC9jYXJ0LWl0ZW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQcm9kdWN0IEl0ZW0gKi9cbi5wcm9kdWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4ycyB0cmFuc2Zvcm07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3QtaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9kdWN0LW5hbWUgPiBpbWcge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ucHJvZHVjdC1uYW1lLFxuLnByb2R1Y3QtcHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgbWFyZ2luOiA0JSAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzID4gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9kdWN0LWltZyB7XG4gIHdpZHRoOiAxNSU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLnByb2R1Y3QtZGF0YSB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5wcm9kdWN0LXF1YW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtcXVhbnRpdHkgPiBpbWcsXG4ucHJvZHVjdC1wcmljZSA+IGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LXF1YW50aXR5ID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnN0cmlrZSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZGV0YWlsIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucHJvZHVjdC1kZWxldGUge1xuICB3aWR0aDogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uc3Bpbm5lci1ib3JkZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4634:
/*!********************************************************************!*\
  !*** ./src/app/components/products/cart-new/cart-new.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartNewComponent": () => (/* binding */ CartNewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cart_item_card_cart_item_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-item-card/cart-item-card.component */ 142);







const _c0 = function () {
  return ["/"];
};
function CartNewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Its Seems Empty Around Here, Lets start by adding few items in the cart. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Show Catalog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function CartNewComponent_div_7_app_cart_item_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-cart-item-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removeItemEvent", function CartNewComponent_div_7_app_cart_item_card_1_Template_app_cart_item_card_removeItemEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.removeItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("productId", item_r3.productId)("productName", item_r3.productName)("productDescription", item_r3.productDescription)("productIcon", item_r3.productIcon)("productQuantity", item_r3.productStock)("productPrice", item_r3.productPrice)("discountPercent", item_r3.discountPercent)("loadingState", ctx_r2.loadingState);
  }
}
function CartNewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CartNewComponent_div_7_app_cart_item_card_1_Template, 1, 8, "app-cart-item-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.cart == null ? null : ctx_r1.cart.products);
  }
}
const _c1 = function () {
  return ["/products/checkout"];
};
class CartNewComponent {
  constructor(location, loadingService, cartService) {
    this.location = location;
    this.loadingService = loadingService;
    this.cartService = cartService;
    this.loadingState = {
      loading: false,
      productId: null
    };
  }
  ngOnInit() {
    this.fetchCart();
  }
  fetchCart() {
    this.cartService.fetchCartByUserId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: res => {
        this.cart = res;
        this.calculateOrderSummary(res.products);
      },
      complete: () => this.loadingService.disableLoading()
    });
  }
  goBack() {
    this.location.back();
  }
  calculateOrderSummary(productsInOrder) {
    let discountPrice = 0;
    let totalBeforeDiscount = 0;
    for (const key in productsInOrder) {
      totalBeforeDiscount += productsInOrder[key].productPrice;
      if (productsInOrder[key].discountPercent === 0) discountPrice = productsInOrder[key].productPrice;else discountPrice += this.calculatePrice(productsInOrder[key]);
    }
    this.totalBeforeDiscount = totalBeforeDiscount;
    this.totalAfterDiscount = discountPrice;
  }
  calculatePrice(currentProduct) {
    return currentProduct.productPrice - currentProduct.productPrice * 0.01 * currentProduct.discountPercent;
  }
  removeItem(productId) {
    this.loadingState = {
      productId: productId,
      loading: true
    };
    this.cartService.removeItemFromCart(productId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: () => {
        this.fetchCart();
      },
      complete: () => this.loadingState = {
        loading: false,
        productId: null
      }
    });
  }
}
CartNewComponent.ɵfac = function CartNewComponent_Factory(t) {
  return new (t || CartNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
};
CartNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CartNewComponent,
  selectors: [["app-cart-new"]],
  decls: 28,
  vars: 9,
  consts: [[1, "parent", "px-1", "px-md-4", "py-5", "mx-auto"], [1, "card"], [1, "logo-container"], [1, "title-main"], ["class", "section-empty", 4, "ngIf"], ["class", "product-list", 4, "ngIf"], [1, "summary"], [1, "item"], [2, "margin-left", "10%"], [1, "primary-btn", 3, "routerLink"], [1, "secondary-btn", 3, "disabled", "routerLink"], [1, "section-empty"], [1, "product-list"], [3, "productId", "productName", "productDescription", "productIcon", "productQuantity", "productPrice", "discountPercent", "loadingState", "removeItemEvent", 4, "ngFor", "ngForOf"], [3, "productId", "productName", "productDescription", "productIcon", "productQuantity", "productPrice", "discountPercent", "loadingState", "removeItemEvent"]],
  template: function CartNewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Cart Items");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CartNewComponent_div_6_Template, 4, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CartNewComponent_div_7_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br")(10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Estimated Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " TOTAL \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " TOTAL AFTER DISCOUNT \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8)(24, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Continue Shopping ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Checkout ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.cart == null ? null : ctx.cart.products.length) === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.cart == null ? null : ctx.cart.products.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.totalBeforeDiscount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.totalAfterDiscount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", (ctx.cart == null ? null : ctx.cart.products.length) === 0)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _cart_item_card_cart_item_card_component__WEBPACK_IMPORTED_MODULE_2__.CartItemCardComponent],
  styles: [".parent[_ngcontent-%COMP%] {\n  padding: 10%;\n  overflow-x: hidden;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  padding: 20px;\n  margin: 4% 8%;\n}\n\n.delivery-icon-container[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-left: 13% !important;\n  padding-right: 13% !important;\n}\n\n\n.delivery-container[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n\n.delivery-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n\n.step0[_ngcontent-%COMP%]:before {\n  transition: 0.2s;\n}\n\n.step0[_ngcontent-%COMP%]:hover:before {\n  transform: scale(1.3);\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 70px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.title[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: scale(1.2);\n}\n\n.summary[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  text-transform: uppercase;\n  font-size: 150%;\n  width: 100%;\n  transition: 0.2s;\n}\n\n.summary[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.02);\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  letter-spacing: 1.2px;\n  font-weight: 600;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.back-btn[_ngcontent-%COMP%], .cancel-btn[_ngcontent-%COMP%] {\n  background: #1f9db9;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n  margin-left: 10%;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n  background: #fb5a69;\n}\n\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  color: #fb5a69;\n  background: white;\n  transform: scale(1.1);\n}\n\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #1f9db9;\n  transform: scale(1.1);\n}\n\n.title-main[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 200%;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n\n.logs-container[_ngcontent-%COMP%] {\n  margin: 0 10%;\n}\n\n.logs-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logs-heading[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.log-img[_ngcontent-%COMP%] {\n  background-color: blue;\n  border-radius: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transform: scale(0.9);\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  padding-top: 24px;\n}\n\n.log-entry[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.log-item[_ngcontent-%COMP%] {\n  \n  font-size: 150%;\n  vertical-align: middle;\n  letter-spacing: 1px;\n}\n\n.log-status[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.log-date[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.router[_ngcontent-%COMP%] {\n  \n}\n\n.section-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: x-large;\n  margin: 24px 10%;\n  font-weight: 300;\n  letter-spacing: 2px;\n  line-height: 30px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9jYXJ0LW5ldy9jYXJ0LW5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUEsOEJBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUNBLHdCQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBOztFQUVFLGFBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLHVCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBOztFQUVFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUtGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkEsa0JBQUE7QUFDQTtFQUNFLGFBQUE7QUFLRjs7QUFGQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBRkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtBQUtGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFGQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFGQTtFQUNFLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFLRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xuICBwYWRkaW5nOiAxMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDQlIDglO1xufVxuXG4uZGVsaXZlcnktaWNvbi1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMyUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTMlICFpbXBvcnRhbnQ7XG59XG5cbi8qIFJlc3BvbnNpdmUgZGVsaXZlcnkgaWNvbnMgKi9cbi5kZWxpdmVyeS1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmRlbGl2ZXJ5LWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogUmVzcG9uc2l2ZSB0aW1lbGluZSAqL1xuLnN0ZXAwOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uc3RlcDA6aG92ZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRpdGxlIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi50aXRsZTpob3Zlcixcbi50aXRsZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnN1bW1hcnkge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnN1bW1hcnk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjAyKTtcbn1cblxuLml0ZW0ge1xuICBjb2xvcjogIzFmOWRiOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubG9nby1jb250YWluZXIgaHIge1xuICB3aWR0aDogMTAlO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZiNWE2OTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmxvZ28tY29udGFpbmVyOmhvdmVyIGhyIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5iYWNrLWJ0bixcbi5jYW5jZWwtYnRuIHtcbiAgYmFja2dyb3VuZDogIzFmOWRiOTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmI1YTY5O1xufVxuXG4uY2FuY2VsLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjZmI1YTY5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYmFjay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMxZjlkYjk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnRpdGxlLW1haW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBMb2cgY29udGlhbmVyICovXG4ubG9ncy1jb250YWluZXIge1xuICBtYXJnaW46IDAgMTAlO1xufVxuXG4ubG9ncy1jb250YWluZXIgaHIge1xuICB3aWR0aDogMTAlO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZiNWE2OTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmxvZ3MtaGVhZGluZzpob3ZlciBociB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5sb2ctaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuLmxvZy1lbnRyeSB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuXG4ubG9nLWVudHJ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ubG9nLWl0ZW0ge1xuICAvKiBtYXJnaW46IDAgMTJweDsgKi9cbiAgZm9udC1zaXplOiAxNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubG9nLXN0YXR1cyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nLWRhdGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yb3V0ZXIge1xuICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG59XG5cblxuLnNlY3Rpb24tZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luOiAyNHB4IDEwJTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2580:
/*!*************************************************************************************!*\
  !*** ./src/app/components/products/checkout/cart-summary/cart-summary.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartSummaryComponent": () => (/* binding */ CartSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CartSummaryComponent {
  constructor() {}
  ngOnInit() {}
}
CartSummaryComponent.ɵfac = function CartSummaryComponent_Factory(t) {
  return new (t || CartSummaryComponent)();
};
CartSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CartSummaryComponent,
  selectors: [["app-cart-summary"]],
  decls: 2,
  vars: 0,
  template: function CartSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cart-summary works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4345:
/*!********************************************************************!*\
  !*** ./src/app/components/products/checkout/checkout.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _shared_order_cancel_modal_order_cancel_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/order-cancel-modal/order-cancel-modal.component */ 8163);







function CheckoutComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 14);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", item_r2.title);
  }
}
function CheckoutComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 15);
  }
}
const _c0 = function () {
  return ["/"];
};
const _c1 = function () {
  return [];
};
class CheckoutComponent {
  constructor(location, loadingService, router) {
    this.location = location;
    this.loadingService = loadingService;
    this.router = router;
    this.stages = [{
      title: 'Shipping Details',
      color: '#24b7d8',
      path: 'shipping'
    }, {
      title: 'Payment',
      color: '#20a5c2',
      path: 'payment'
    }, {
      title: 'Success',
      color: '#1d92ad',
      path: 'success'
    }];
    this.activeStages = [];
    this.title = 'Shipping Details';
    this.routeChangeSubscription();
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
  ngOnInit() {}
  goBack() {
    this.location.back();
  }
  cancelOrder() {}
  routeChangeSubscription() {
    this.routeSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(val => this.updateFlow(val['urlAfterRedirects']));
  }
  updateFlow(url) {
    if (url.includes('/shipping')) {
      this.activeStages = this.stages.slice(0, 1);
      this.title = this.stages[0].title;
    } else if (url.includes('/payment')) {
      this.activeStages = this.stages.slice(0, 2);
      this.title = this.stages[1].title;
    } else if (url.includes('/success')) {
      this.activeStages = this.stages.slice(0, 3);
      this.title = this.stages[2].title;
    }
  }
  getActiveStages() {
    return this.activeStages;
  }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
  return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
CheckoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CheckoutComponent,
  selectors: [["app-checkout"]],
  decls: 18,
  vars: 6,
  consts: [[1, "parent", "px-1", "px-md-4", "py-5", "mx-auto"], [1, "card"], [1, "row", "d-flex", "justify-content-between", "px-3", "top"], [1, "logo-container"], ["src", "assets/images/logo-text.png", 1, "title", 3, "routerLink"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12"], ["id", "progressbar", 1, "text-center"], ["class", "active step0", "data-toggle", "tooltip", "data-placement", "top", "onmouseenter", "$(this).tooltip('show')", "onmouseout", "$(this).tooltip('hide')", 3, "title", 4, "ngFor", "ngForOf"], ["class", "step0", 4, "ngFor", "ngForOf"], [1, "logs-container"], [1, "logs-heading"], [1, "title-main"], [1, "router"], ["data-toggle", "tooltip", "data-placement", "top", "onmouseenter", "$(this).tooltip('show')", "onmouseout", "$(this).tooltip('hide')", 1, "active", "step0", 3, "title"], [1, "step0"]],
  template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CheckoutComponent_li_8_Template, 1, 1, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CheckoutComponent_li_9_Template, 1, 0, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "h1", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-order-cancel-modal");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.activeStages);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1).constructor(3 - ctx.activeStages.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_order_cancel_modal_order_cancel_modal_component__WEBPACK_IMPORTED_MODULE_1__.OrderCancelModalComponent],
  styles: [".parent[_ngcontent-%COMP%] {\n  padding: 10%;\n  overflow-x: hidden;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  z-index: 0;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  padding: 20px;\n  margin: 4% 8%;\n}\n\n.delivery-icon-container[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-left: 13% !important;\n  padding-right: 13% !important;\n}\n\n#progressbar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #455a64;\n  justify-content: center;\n  display: flex;\n  padding-left: 0;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-size: 13px;\n  width: 25%;\n  float: left;\n  position: relative;\n  font-weight: 400;\n  outline: none;\n}\n\n#progressbar[_ngcontent-%COMP%]   .step0[_ngcontent-%COMP%]:before {\n  content: url('assets/images/check.svg');\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  width: 40px;\n  height: 40px;\n  line-height: 45px;\n  display: block;\n  font-size: 20px;\n  background: #c5cae9;\n  border-radius: 50%;\n  margin: auto;\n  padding: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 12px;\n  background: #c5cae9;\n  position: absolute;\n  left: 0;\n  top: 16px;\n  z-index: -1;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  position: absolute;\n  left: -50%;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):after, #progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):after {\n  left: -50%;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  position: absolute;\n  left: 50%;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n#progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before, #progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:after {\n  background: #24b7d8;\n}\n\n#progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before {\n  content: url('assets/images/check.svg');\n  cursor: pointer;\n}\n\n#progressbar[_ngcontent-%COMP%]   li.delete[_ngcontent-%COMP%]:before {\n  content: url('assets/images/check.svg');\n  background: red;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin-right: 15px;\n}\n\n.icon-content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n@media screen and (max-width: 992px) {\n  .icon-content[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.font-weight-bold[_ngcontent-%COMP%] {\n  letter-spacing: 1.2px;\n}\n\n\n.delivery-container[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n\n.delivery-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n\n.step0[_ngcontent-%COMP%]:before {\n  transition: 0.2s;\n}\n\n.step0[_ngcontent-%COMP%]:hover:before {\n  transform: scale(1.3);\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 70px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.title[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: scale(1.2);\n}\n\n.summary[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  text-transform: uppercase;\n  font-size: 150%;\n  width: 100%;\n  transition: 0.2s;\n}\n\n.summary[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.02);\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  letter-spacing: 1.2px;\n  font-weight: 600;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.back-btn[_ngcontent-%COMP%], .cancel-btn[_ngcontent-%COMP%] {\n  background: #1f9db9;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n  margin-left: 10%;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n  background: #fb5a69;\n}\n\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  color: #fb5a69;\n  background: white;\n  transform: scale(1.1);\n}\n\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #1f9db9;\n  transform: scale(1.1);\n}\n\n.title-main[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 200%;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n\n.logs-container[_ngcontent-%COMP%] {\n  margin: 0 10%;\n}\n\n.logs-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logs-heading[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.log-img[_ngcontent-%COMP%] {\n  background-color: blue;\n  border-radius: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transform: scale(0.9);\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  padding-top: 24px;\n}\n\n.log-entry[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.log-item[_ngcontent-%COMP%] {\n  \n  font-size: 150%;\n  vertical-align: middle;\n  letter-spacing: 1px;\n}\n\n.log-status[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.log-date[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.router[_ngcontent-%COMP%] {\n  \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxxQkFBQTtBQUFGOztBQUdBLDhCQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQSx3QkFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTs7RUFFRSxhQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSx1QkFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUdGOztBQUFBOztHQUFBO0FBR0E7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQURBOztFQUVFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBREEsa0JBQUE7QUFDQTtFQUNFLGFBQUE7QUFJRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UscUJBQUE7QUFJRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxxQkFBQTtBQUtGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudCB7XG4gIHBhZGRpbmc6IDEwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogNCUgOCU7XG59XG5cbi5kZWxpdmVyeS1pY29uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEzJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMyUgIWltcG9ydGFudDtcbn1cblxuI3Byb2dyZXNzYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6ICM0NTVhNjQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbiNwcm9ncmVzc2JhciBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jcHJvZ3Jlc3NiYXIgLnN0ZXAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIl5hc3NldHMvaW1hZ2VzL2NoZWNrLnN2Z1wiKTtcbn1cblxuI3Byb2dyZXNzYmFyIGxpOmJlZm9yZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjYzVjYWU5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbiNwcm9ncmVzc2JhciBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNjNWNhZTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxNnB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuI3Byb2dyZXNzYmFyIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTUwJTtcbn1cblxuI3Byb2dyZXNzYmFyIGxpOm50aC1jaGlsZCgyKTphZnRlcixcbiNwcm9ncmVzc2JhciBsaTpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICBsZWZ0OiAtNTAlO1xufVxuXG4jcHJvZ3Jlc3NiYXIgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuI3Byb2dyZXNzYmFyIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbiNwcm9ncmVzc2JhciBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbiNwcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlLFxuI3Byb2dyZXNzYmFyIGxpLmFjdGl2ZTphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMyNGI3ZDg7XG59XG5cbiNwcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiXmFzc2V0cy9pbWFnZXMvY2hlY2suc3ZnXCIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNwcm9ncmVzc2JhciBsaS5kZWxldGU6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiXmFzc2V0cy9pbWFnZXMvY2hlY2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaWNvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaWNvbi1jb250ZW50IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbi5mb250LXdlaWdodC1ib2xkIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xufVxuXG4vKiBSZXNwb25zaXZlIGRlbGl2ZXJ5IGljb25zICovXG4uZGVsaXZlcnktY29udGFpbmVyIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5kZWxpdmVyeS1jb250YWluZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi8qIFJlc3BvbnNpdmUgdGltZWxpbmUgKi9cbi5zdGVwMDpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLnN0ZXAwOmhvdmVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aXRsZSB7XG4gIGhlaWdodDogNzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4udGl0bGU6aG92ZXIsXG4udGl0bGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5zdW1tYXJ5IHtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5zdW1tYXJ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wMik7XG59XG5cbi5pdGVtIHtcbiAgY29sb3I6ICMxZjlkYjk7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogLnNlcGFyYXRvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0gKi9cbi5sb2dvLWNvbnRhaW5lciBociB7XG4gIHdpZHRoOiAxMCU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmI1YTY5O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubG9nby1jb250YWluZXI6aG92ZXIgaHIge1xuICB3aWR0aDogMjAlO1xufVxuLmJhY2stYnRuLFxuLmNhbmNlbC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMWY5ZGI5O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmYjVhNjk7XG59XG5cbi5jYW5jZWwtYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmYjVhNjk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzFmOWRiOTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4udGl0bGUtbWFpbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIExvZyBjb250aWFuZXIgKi9cbi5sb2dzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAxMCU7XG59XG5cbi5sb2dzLWNvbnRhaW5lciBociB7XG4gIHdpZHRoOiAxMCU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmI1YTY5O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubG9ncy1oZWFkaW5nOmhvdmVyIGhyIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmxvZy1pbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4ubG9nLWVudHJ5IHtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbi5sb2ctZW50cnk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5sb2ctaXRlbSB7XG4gIC8qIG1hcmdpbjogMCAxMnB4OyAqL1xuICBmb250LXNpemU6IDE1MCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5sb2ctc3RhdHVzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2ctZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJvdXRlciB7XG4gIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3939:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/products/checkout/payment-success/payment-success.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSuccessComponent": () => (/* binding */ PaymentSuccessComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/order.service */ 8132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_delivery_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/delivery-history.service */ 3684);
/* harmony import */ var src_app_services_order_cancel_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order-cancel-modal.service */ 6314);








const _c0 = function (a1) {
  return ["/products/delivery", a1];
};
const _c1 = function () {
  return ["/"];
};
class PaymentSuccessComponent {
  constructor(route, orderService, location, loadingService, deliveryHistoryService, orderCancelModal) {
    this.route = route;
    this.orderService = orderService;
    this.location = location;
    this.loadingService = loadingService;
    this.deliveryHistoryService = deliveryHistoryService;
    this.orderCancelModal = orderCancelModal;
  }
  ngOnInit() {
    this.orderId = this.route.snapshot.params['orderId'];
    this.fetchOrderDetails(this.orderId);
    this.fetchDeliveryDetails(this.orderId);
  }
  fetchDeliveryDetails(id) {
    this.deliveryHistoryService.fetchDeliveryByOrderId(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(res => this.deliveryHistory = res);
  }
  fetchOrderDetails(id) {
    this.orderService.fetchById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
      return res;
    })).subscribe(res => this.orderDetails = res);
  }
  goBack() {
    this.location.back();
  }
  formattedDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }
  cancelOrder() {
    this.orderCancelModal.open();
    this.orderCancelModal.watch().subscribe(res => {
      this.loadingService.enableLoading();
      if (res !== 'cancel-order') this.loadingService.disableLoading();else this.orderService.updateOrderStatus({
        orderId: this.orderDetails?.orderId,
        status: 'CANCELLED'
      }).subscribe(res => {
        this.fetchDeliveryDetails(this.orderDetails?.orderId);
      });
    });
  }
  checkIfCancellable() {
    return this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'DELIVERED' && this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'CANCELLED';
  }
}
PaymentSuccessComponent.ɵfac = function PaymentSuccessComponent_Factory(t) {
  return new (t || PaymentSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_delivery_history_service__WEBPACK_IMPORTED_MODULE_2__.DeliveryHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_order_cancel_modal_service__WEBPACK_IMPORTED_MODULE_3__.OrderCancelModalService));
};
PaymentSuccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PaymentSuccessComponent,
  selectors: [["app-payment-success"]],
  decls: 72,
  vars: 22,
  consts: [[1, "summary"], [1, "item"], ["src", "assets/images/info.svg", "alt", "", 3, "routerLink"], [1, "logs-heading"], [1, "title-main"], [1, "primary-btn", 3, "routerLink"], [1, "secondary-btn", 3, "routerLink"]],
  template: function PaymentSuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section")(1, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Order #");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Current Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Delivered ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Updated On ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "section")(15, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Phone No. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "section")(28, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Street ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " State ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " Pincode ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 3)(45, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Payment Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "section")(48, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Order Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, " Discounted Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, " Delivery Charge ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, " Final Price ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " Payment Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Continue Shopping");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Delivery Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.orderId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](17, _c0, ctx.orderDetails == null ? null : ctx.orderDetails.orderId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.formattedDate(ctx.deliveryHistory == null ? null : ctx.deliveryHistory.slice(-1)[0] == null ? null : ctx.deliveryHistory.slice(-1)[0].updatedOn), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerPhone, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerEmail, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerAddress, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerCity, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerState, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerPincode, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.orderDetails == null ? null : ctx.orderDetails.orderAmount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.orderDetails == null ? null : ctx.orderDetails.discountedAmount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.orderDetails == null ? null : ctx.orderDetails.deliveryCharge, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.orderDetails == null ? null : ctx.orderDetails.finalPrice, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.paymentType, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](19, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c0, ctx.orderId));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: ["section[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: left;\n  text-align: left;\n  \n}\n\nsection[_ngcontent-%COMP%]::before {\n  display: block;\n  height: 2px;\n  background-color: #fb5a69;\n  content: \" \";\n  width: 100px;\n  margin: 20px 0;\n  transition: 0.2s;\n}\n\nsection[_ngcontent-%COMP%]:hover::before {\n  width: 200px;\n}\n\n.summary[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 150%;\n  width: 100%;\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n}\n\n.summary[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.02);\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  letter-spacing: 1.2px;\n  font-weight: 600;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  text-align: right;\n}\n\n.primary-btn[_ngcontent-%COMP%], .secondary-btn[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  transform: scale(1.1);\n}\n\n.secondary-btn[_ngcontent-%COMP%] {\n  background: #fb5a69;\n}\n\n.secondary-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #fb5a69;\n  transform: scale(1.1);\n}\n\n.title-main[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 200%;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9jaGVja291dC9wYXltZW50LXN1Y2Nlc3MvcGF5bWVudC1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLyogbWFyZ2luLXRvcDogMjRweDsgKi9cbn1cblxuc2VjdGlvbjo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI1YTY5O1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuc2VjdGlvbjpob3Zlcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc3VtbWFyeSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnN1bW1hcnk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjAyKTtcbn1cblxuLml0ZW0ge1xuICBjb2xvcjogIzFmOWRiOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnByaW1hcnktYnRuLCAuc2Vjb25kYXJ5LWJ0bntcbiAgYmFja2dyb3VuZDogIzI0YjdkODtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ucHJpbWFyeS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnNlY29uZGFyeS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmI1YTY5O1xuXG59XG5cbi5zZWNvbmRhcnktYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjZmI1YTY5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi50aXRsZS1tYWluIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3026:
/*!***************************************************************************!*\
  !*** ./src/app/components/products/checkout/payment/payment.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/manage-user.service */ 1771);
/* harmony import */ var src_app_services_payment_razorpay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/payment-razorpay.service */ 5722);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_payment_stripe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/payment-stripe.service */ 6424);










function PaymentComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 9);
  }
}
class PaymentComponent {
  constructor(router, route, location, cartService, manageUserService, ngZone, razorpayService, loadingService, paymentStripeService) {
    this.router = router;
    this.route = route;
    this.location = location;
    this.cartService = cartService;
    this.manageUserService = manageUserService;
    this.ngZone = ngZone;
    this.razorpayService = razorpayService;
    this.loadingService = loadingService;
    this.paymentStripeService = paymentStripeService;
  }
  ngOnInit() {
    this.initDeliveryData();
    this.fetchCartData();
    this.fetchUserData();
  }
  fetchUserData() {
    this.manageUserService.fetchLoggedInUserForEdit().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
      next: res => {
        this.user = res;
      }
    });
  }
  fetchCartData() {
    this.cartService.fetchCartByUserId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
      next: res => this.calculateOrderSummary(res.products)
    });
  }
  initDeliveryData() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => window.history.state), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(res => res?.address ? res : this.router.navigateByUrl('/products/checkout'))).subscribe(res => {
      this.deliveryCharge = res?.deliveryCharge;
      this.address = res?.address;
    });
  }
  goBack() {
    this.location.back();
  }
  calculateOrderSummary(productsInOrder) {
    let discountPrice = 0;
    let totalBeforeDiscount = 0;
    let finalTotal;
    for (const key in productsInOrder) {
      totalBeforeDiscount += productsInOrder[key].productPrice;
      if (productsInOrder[key].discountPercent === 0) discountPrice = productsInOrder[key].productPrice;else discountPrice += this.calculatePrice(productsInOrder[key]);
    }
    this.totalBeforeDiscount = totalBeforeDiscount;
    this.totalAfterDiscount = discountPrice;
    finalTotal = this.totalAfterDiscount + this.deliveryCharge;
    this.finalTotal = finalTotal;
  }
  calculatePrice(currentProduct) {
    return currentProduct.productPrice - currentProduct.productPrice * 0.01 * currentProduct.discountPercent;
  }
  checkOutInServer(res) {
    this.loadingService.enableLoading();
    const data = {
      ...this.address,
      deliveryCharge: this.deliveryCharge,
      paymentId: res.paymentId
    };
    this.cartService.checkout(data).subscribe({
      next: res => {
        this.router.navigate(['/products/checkout/success', res['orderId']]);
      },
      complete: () => this.loadingService.disableLoading()
    });
  }
  // Stripe Pay
  payWithStripe() {
    this.loadingService.enableLoading();
    this.paymentStripeService.pay(this.finalTotal);
    this.paymentStripeService.paymentComplete.subscribe({
      next: res => {
        this.loadingService.disableLoading();
        this.checkOutInServer(res);
      }
    });
  }
  payWithRazorpay() {
    this.loadingService.enableLoading();
    this.razorpayService.generateOrderId(this.finalTotal * 100).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe({
      next: res => this.setOption(res),
      error: error => console.error(error),
      complete: () => this.loadingService.disableLoading()
    });
  }
  initRazorPay() {
    const rzp1 = new Razorpay(this.options);
    rzp1.open();
  }
  setOption(data) {
    this.options = {
      key: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.publicRazorpayKey,
      // amount: 12100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Gift Shop',
      description: 'Test Transaction',
      image: 'https://i.imgur.com/OEzo9pz.png',
      order_id: data['order_id'],
      handler: response => this.ngZone.run(() => this.updatePaymentInServer(response.razorpay_payment_id)),
      prefill: {
        name: this.user?.firstName + this.user?.lastName,
        email: this.user?.emailId,
        contact: this.user?.phoneNo
      },
      notes: {
        address: 'Gift Shop office'
      },
      theme: {
        color: '#1f9db9'
      }
    };
    this.initRazorPay();
  }
  updatePaymentInServer(razorId) {
    this.loadingService.enableLoading();
    const name = this.user['firstName'] + this.user['lastName'];
    const amount = this.finalTotal;
    this.razorpayService.updatePaymentInDb({
      razorId,
      amount,
      name
    }).subscribe({
      next: res => this.checkOutInServer(res),
      complete: () => this.loadingService.disableLoading()
    });
  }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
  return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_2__.ManageUserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_payment_razorpay_service__WEBPACK_IMPORTED_MODULE_3__.PaymentRazorpayService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_payment_stripe_service__WEBPACK_IMPORTED_MODULE_5__.PaymentStripeService));
};
PaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PaymentComponent,
  selectors: [["app-payment"]],
  decls: 46,
  vars: 9,
  consts: [[1, "payment-page"], [1, "summary"], [1, "item"], [1, "payment-section"], [1, "primary-btn", 3, "click"], [1, "pay-with"], [1, "secondary-btn", 3, "click"], ["src", "assets/images/razorpay_logo.svg", "alt", "", 1, "razor-pay"], ["class", "spinner-border text-primary", 4, "ngIf"], [1, "spinner-border", "text-primary"]],
  template: function PaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "section")(2, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Street ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " State ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Pincode ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "section")(19, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "TOTAL ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "TOTAL AFTER DISCOUNT");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " DELIVERY CHARGE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Final Price ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 3)(36, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_36_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Pay with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_40_listener() {
        return ctx.payWithRazorpay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, PaymentComponent_span_42_Template, 1, 0, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "br")(44, "br")(45, "br");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.address == null ? null : ctx.address.area, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.address == null ? null : ctx.address.city, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.address == null ? null : ctx.address.state, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.address == null ? null : ctx.address.pincode, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.totalBeforeDiscount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.totalAfterDiscount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.deliveryCharge, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.finalTotal, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
  styles: ["section[_ngcontent-%COMP%] {\n  width: 50%;\n  justify-content: left;\n  text-align: left;\n  \n}\n\nsection[_ngcontent-%COMP%]::before {\n  display: block;\n  height: 2px;\n  background-color: #fb5a69;\n  content: \" \";\n  width: 100px;\n  margin: 20px 0;\n  transition: 0.2s;\n}\n\nsection[_ngcontent-%COMP%]:hover::before {\n  width: 200px;\n}\n\n.summary[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 150%;\n  width: 100%;\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n}\n\n.summary[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.02);\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  letter-spacing: 1.2px;\n  font-weight: 600;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  text-align: right;\n}\n\n.payment-page[_ngcontent-%COMP%] {\n  background-image: url('assets/images/pay_now2.png');\n  background-repeat: no-repeat;\n  background-position: right;\n  \n  background-size: contain;\n}\n\n\n.primary-btn[_ngcontent-%COMP%], .secondary-btn[_ngcontent-%COMP%] {\n  background: #1f9db9;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n  overflow: hidden;\n}\n\n.primary-btn[disabled][_ngcontent-%COMP%], .secondary-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover, .secondary-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.secondary-btn[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.stripe[_ngcontent-%COMP%] {\n  background: #5433ff;\n}\n\n.razor-pay[_ngcontent-%COMP%] {\n  transform: scale(4);\n}\n\n.pay-with[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-right: 12px;\n  margin-left: 5%;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9jaGVja291dC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbURBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBLFlBQUE7QUFDQTs7RUFFRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOztFQUVFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLyogbWFyZ2luLXRvcDogMjRweDsgKi9cbn1cblxuc2VjdGlvbjo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI1YTY5O1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuc2VjdGlvbjpob3Zlcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc3VtbWFyeSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnN1bW1hcnk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjAyKTtcbn1cblxuLml0ZW0ge1xuICBjb2xvcjogIzFmOWRiOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnBheW1lbnQtcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIl5hc3NldHMvaW1hZ2VzL3BheV9ub3cyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogMzAwcHg7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLyogQnV0dG9ucyAqL1xuLnByaW1hcnktYnRuLFxuLnNlY29uZGFyeS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMWY5ZGI5O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcmltYXJ5LWJ0bltkaXNhYmxlZF0sXG4uc2Vjb25kYXJ5LWJ0bltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWJ0bjpob3Zlcixcbi5zZWNvbmRhcnktYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uc2Vjb25kYXJ5LWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zdHJpcGUge1xuXG4gIGJhY2tncm91bmQ6ICM1NDMzZmY7XG59XG5cbi5yYXpvci1wYXkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDQpO1xufVxuXG4ucGF5LXdpdGgge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uc3Bpbm5lci1ib3JkZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4785:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/products/checkout/shipping-details/shipping-details.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingDetailsComponent": () => (/* binding */ ShippingDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/manage-user.service */ 1771);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/geolocation.service */ 4375);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);









function ShippingDetailsComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShippingDetailsComponent_div_8_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ShippingDetailsComponent_div_8_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShippingDetailsComponent_div_8_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.addressForm.get("city").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.addressForm.get("city").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.addressForm.get("city").errors["maxlength"]);
  }
}
function ShippingDetailsComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShippingDetailsComponent_div_15_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ShippingDetailsComponent_div_15_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShippingDetailsComponent_div_15_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.addressForm.get("state").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.addressForm.get("state").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.addressForm.get("state").errors["maxlength"]);
  }
}
function ShippingDetailsComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShippingDetailsComponent_div_23_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ShippingDetailsComponent_div_23_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShippingDetailsComponent_div_23_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.get("area").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.get("area").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.get("area").errors["maxlength"]);
  }
}
function ShippingDetailsComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Must be of length 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ShippingDetailsComponent_div_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r16.addressForm.controls["pincode"].errors.serverValidationError, " ");
  }
}
function ShippingDetailsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShippingDetailsComponent_div_30_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ShippingDetailsComponent_div_30_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShippingDetailsComponent_div_30_div_3_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.addressForm.get("pincode").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.addressForm.get("pincode").errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.addressForm.get("pincode").errors["serverValidationError"]);
  }
}
function ShippingDetailsComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 23);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class ShippingDetailsComponent {
  constructor(manageUserService, geolocationService, authService, loadingService, router, location) {
    this.manageUserService = manageUserService;
    this.geolocationService = geolocationService;
    this.authService = authService;
    this.loadingService = loadingService;
    this.router = router;
    this.location = location;
  }
  ngOnInit() {
    this.initAddressForm();
    this.populateAddress();
  }
  populateAddress() {
    this.manageUserService.fetchById(this.authService.fetchFromSessionStorage()?.userId).subscribe(user => {
      this.address = user['address'];
      this.populateFormFields(this.address);
      this.calculateDistance();
    });
  }
  calculateDistance() {
    this.loadingService.enableLoading();
    this.geolocationService.fetchDistance(this.addressForm.value.pincode).subscribe({
      next: res => this.handleApiResponse(res),
      error: error => console.error(error),
      complete: () => this.loadingService.disableLoading()
    });
  }
  handleApiResponse(res) {
    if (res['info'].statuscode !== 0) {
      this.error = 'error';
      this.addressForm.controls.pincode.setErrors({
        serverValidationError: 'Delivery not available at given location'
      });
    } else {
      this.error = null;
      this.calculateDeliveryCharge(res['route'].distance);
      this.redirectIfFormValidAndSubmitted();
    }
  }
  redirectIfFormValidAndSubmitted() {
    if (this.addressForm.valid && this.error === null && this.submitted) this.navigateToPayment(this.addressForm);
  }
  populateFormFields(address) {
    this.addressForm.patchValue({
      city: address.city,
      state: address?.state,
      pincode: address?.pincode,
      area: address?.area
    });
  }
  calculateDeliveryCharge(distance) {
    if (distance <= 5) this.deliveryCharge = 50;else if (distance <= 25) this.deliveryCharge = 100;else if (distance <= 50) this.deliveryCharge = 200;else if (distance <= 100) this.deliveryCharge = 300;else if (distance <= 200) this.deliveryCharge = 400;else this.deliveryCharge = 500;
  }
  initAddressForm() {
    this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(30)]),
      area: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(30)]),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(30)]),
      pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[0-9]{6}')])
    });
  }
  onSubmit() {
    this.submitted = true;
    // Form submitted after handling server response
    this.calculateDistance();
  }
  navigateToPayment(addressForm) {
    this.router.navigate(['/products/checkout/payment'], {
      state: {
        address: {
          city: addressForm.value?.city,
          state: addressForm.value?.state,
          area: addressForm.value?.area,
          pincode: addressForm.value?.pincode
        },
        deliveryCharge: this.deliveryCharge
      }
    });
  }
  resetToDefault() {
    this.populateFormFields(this.address);
  }
  goBack() {
    this.location.back();
  }
}
ShippingDetailsComponent.ɵfac = function ShippingDetailsComponent_Factory(t) {
  return new (t || ShippingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_0__.ManageUserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_1__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location));
};
ShippingDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ShippingDetailsComponent,
  selectors: [["app-shipping-details"]],
  decls: 50,
  vars: 19,
  consts: [[3, "formGroup", "submit"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "city"], ["type", "text", "placeholder", "City", "name", "city", "formControlName", "city", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "country"], ["type", "text", "placeholder", "State", "name", "State", "formControlName", "state", 1, "form-control", 3, "ngClass"], ["for", "area"], ["type", "text", "placeholder", "Area", "name", "area", "formControlName", "area", 1, "form-control", 3, "ngClass"], ["for", "pinode"], ["type", "text", "placeholder", "pincode", "name", "pincode", "formControlName", "pincode", 1, "form-control", 3, "ngClass", "change"], [1, "delivery-charge"], [1, "delivery-caption"], [1, "delivery-price"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "warning"], [1, "primary-btn", 3, "click"], [2, "float", "right"], ["type", "submit", 1, "secondary-btn"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm"]],
  template: function ShippingDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ShippingDetailsComponent_Template_form_submit_0_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4)(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ShippingDetailsComponent_div_8_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "label", 7)(12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "State");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ShippingDetailsComponent_div_15_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 1)(17, "div", 2)(18, "div", 3)(19, "label", 9)(20, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ShippingDetailsComponent_div_23_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 2)(25, "div", 3)(26, "label", 11)(27, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "pincode");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ShippingDetailsComponent_Template_input_change_29_listener() {
        return ctx.calculateDistance();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ShippingDetailsComponent_div_30_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 13)(32, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Delivery Cost ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " \u00A0 \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ShippingDetailsComponent_span_37_Template, 1, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Calculated Based on Pincode location*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShippingDetailsComponent_Template_button_click_41_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 19)(44, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShippingDetailsComponent_Template_button_click_44_listener() {
        return ctx.resetToDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Reset Values");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "br")(49, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.addressForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.addressForm.get("city").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.addressForm.get("city").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.addressForm.get("state").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.addressForm.get("state").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.addressForm.get("area").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.addressForm.get("area").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.addressForm.get("pincode").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.addressForm.get("pincode").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.deliveryCharge, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: [".primary-btn[_ngcontent-%COMP%], .secondary-btn[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n}\n\n.primary-btn[disabled][_ngcontent-%COMP%], .secondary-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  transform: scale(1.1);\n}\n\n.secondary-btn[_ngcontent-%COMP%] {\n  background: #fb5a69;\n}\n\n.secondary-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #fb5a69;\n  transform: scale(1.1);\n}\n\n.delivery-caption[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #24b7d8;\n  font-weight: bold;\n  letter-spacing: 1.2px;\n  font-size: large;\n}\n\n.delivery-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  letter-spacing: 1.2px;\n  font-size: 160%;\n  letter-spacing: 1.2px;\n}\n\n.delivery-charge[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  color: #fb5a69 !important;\n}\n\n.warning[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #969696;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9jaGVja291dC9zaGlwcGluZy1kZXRhaWxzL3NoaXBwaW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTtBQUNBOztFQUVFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1dHRvbnMgKi9cbi5wcmltYXJ5LWJ0bixcbi5zZWNvbmRhcnktYnRuIHtcbiAgYmFja2dyb3VuZDogIzI0YjdkODtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ucHJpbWFyeS1idG5bZGlzYWJsZWRdLCAuc2Vjb25kYXJ5LWJ0bltkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cblxuLnByaW1hcnktYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjMjRiN2Q4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5zZWNvbmRhcnktYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZiNWE2OTtcbn1cblxuLnNlY29uZGFyeS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNmYjVhNjk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmRlbGl2ZXJ5LWNhcHRpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzI0YjdkODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5kZWxpdmVyeS1wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIGZvbnQtc2l6ZTogMTYwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xufVxuXG4uZGVsaXZlcnktY2hhcmdlIHtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5cbi5zcGlubmVyLWJvcmRlciB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgY29sb3I6ICNmYjVhNjkgIWltcG9ydGFudDtcbn1cbi53YXJuaW5nIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzk2OTY5Njtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 207:
/*!****************************************************************************!*\
  !*** ./src/app/components/products/edit-profile/edit-profile.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/manage-user.service */ 1771);







function EditProfileComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.updateUserForm.controls["userId"].errors.serverValidationError, " ");
  }
}
function EditProfileComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_17_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditProfileComponent_div_17_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.updateUserForm.get("userId").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.updateUserForm.get("userId").errors["serverValidationError"]);
  }
}
function EditProfileComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r16.updateUserForm.controls["firstName"].errors.serverValidationError, " ");
  }
}
function EditProfileComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_23_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditProfileComponent_div_23_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.updateUserForm.get("firstName").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.updateUserForm.get("firstName").errors["serverValidationError"]);
  }
}
function EditProfileComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r18.updateUserForm.controls["lastName"].errors.serverValidationError, " ");
  }
}
function EditProfileComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_28_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditProfileComponent_div_28_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.updateUserForm.get("lastName").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.updateUserForm.get("lastName").errors["serverValidationError"]);
  }
}
function EditProfileComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r20.updateUserForm.controls["emailId"].errors.serverValidationError, " ");
  }
}
function EditProfileComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_34_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditProfileComponent_div_34_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.updateUserForm.get("emailId").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.updateUserForm.get("emailId").errors["serverValidationError"]);
  }
}
function EditProfileComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r22.updateUserForm.controls["phoneNo"].errors.serverValidationError, " ");
  }
}
function EditProfileComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_39_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditProfileComponent_div_39_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.updateUserForm.get("phoneNo").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.updateUserForm.get("phoneNo").errors["serverValidationError"]);
  }
}
function EditProfileComponent_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_47_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.updateUserForm.get("address.city").errors["required"]);
  }
}
function EditProfileComponent_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_53_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.updateUserForm.get("address.state").errors["required"]);
  }
}
function EditProfileComponent_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_60_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.updateUserForm.get("address.area").errors["required"]);
  }
}
function EditProfileComponent_div_66_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_66_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Must be of length 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_66_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditProfileComponent_div_66_div_2_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.updateUserForm.get("address.pincode").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.updateUserForm.get("address.pincode").errors["pattern"]);
  }
}
function EditProfileComponent_div_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_71_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r29.updateUserForm.controls["securityQuestion"].errors.serverValidationError, " ");
  }
}
function EditProfileComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_71_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditProfileComponent_div_71_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.updateUserForm.get("securityQuestion").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.updateUserForm.get("securityQuestion").errors["serverValidationError"]);
  }
}
function EditProfileComponent_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function EditProfileComponent_div_76_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r31.updateUserForm.controls["securityAnswer"].errors.serverValidationError, " ");
  }
}
function EditProfileComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditProfileComponent_div_76_div_1_Template, 2, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditProfileComponent_div_76_div_2_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.updateUserForm.get("securityAnswer").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.updateUserForm.get("securityAnswer").errors["serverValidationError"]);
  }
}
function EditProfileComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.message, " ");
  }
}
function EditProfileComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 48);
  }
}
const _c0 = function () {
  return {
    "background-image": "url(assets/images/celebration2.jpg)"
  };
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class EditProfileComponent {
  constructor(loadingService, location, router, manageUserService) {
    this.loadingService = loadingService;
    this.location = location;
    this.router = router;
    this.manageUserService = manageUserService;
    this.submitted = false;
  }
  ngOnInit() {
    this.initForm();
    this.fetchData();
  }
  fetchData() {
    this.manageUserService.fetchLoggedInUserForEdit().subscribe(res => {
      this.userDetailsEdit = res;
      this.populateFormFields(res);
    });
  }
  initForm() {
    this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      securityQuestion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      securityAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[0-9]{6}')])
      })
    });
  }
  populateFormFields(userDetails) {
    this.updateUserForm.patchValue({
      userId: userDetails?.userId,
      firstName: userDetails?.firstName,
      lastName: userDetails?.lastName,
      emailId: userDetails?.emailId,
      phoneNo: userDetails?.phoneNo,
      securityQuestion: userDetails?.securityQuestion,
      securityAnswer: userDetails?.securityAnswer,
      address: {
        state: userDetails?.address?.state,
        area: userDetails?.address?.area,
        city: userDetails?.address?.city,
        pincode: userDetails?.address?.pincode
      }
    });
  }
  submitForm() {
    this.submitted = true;
    if (this.updateUserForm.valid) this.submitData(this.updateUserForm.value);
  }
  submitData(formData) {
    this.loadingService.enableLoading();
    this.manageUserService.updateLoggedInUser(formData).subscribe(response => {
      this.loadingService.disableLoading();
      this.message = 'Successfully updated Your profile';
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 3000);
    }, error => {
      this.loadingService.disableLoading();
      if (error?.error?.message === 'FieldException') error.error.errors.forEach(element => this.updateUserForm.controls[element.field]?.setErrors({
        serverValidationError: element.message
      }));else throw new Error(error);
    });
  }
  resetToDefault() {
    this.populateFormFields(this.userDetailsEdit);
  }
  goBack() {
    this.location.back();
  }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) {
  return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_1__.ManageUserService));
};
EditProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EditProfileComponent,
  selectors: [["app-edit-profile"]],
  decls: 85,
  vars: 50,
  consts: [[1, "root"], [1, "background", 3, "ngStyle"], [1, "content"], [1, "my-card"], [1, "row"], [1, "p-5"], [1, "product-title"], ["src", "assets/images/back.svg", "alt", "", 1, "back-img", 3, "click"], [1, "product-id"], [1, "user", 3, "formGroup", "ngSubmit"], ["hidden", "", "type", "text", "formControlName", "userId"], [1, "form-group", "userId"], ["for", "userId"], ["type", "text", "id", "userId", "formControlName", "userId", "placeholder", "User ID", "name", "userId", 1, "form-control", "form-control-user", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col"], ["for", "exampleInputfirstName"], ["formControlName", "firstName", "id", "exampleInputfirstName", "placeholder", "First Name", "name", "firstName", 1, "form-control", "form-control-user", 3, "ngClass"], ["for", "exampleInputlastName"], ["formControlName", "lastName", "id", "exampleInputlastName", "placeholder", "Last Name", "name", "lastName", 1, "form-control", "form-control-user", 3, "ngClass"], ["for", "exampleInputemailId"], ["type", "emailId", "formControlName", "emailId", "id", "exampleInputemailId", "placeholder", "Email ID", "name", "emailId", 1, "form-control", "form-control-user", 3, "ngClass"], ["for", "exampleInputphoneNo"], ["formControlName", "phoneNo", "id", "exampleInputphoneNo", "placeholder", "Phone No", "name", "phoneNo", 1, "form-control", "form-control-user", 3, "ngClass"], ["formGroupName", "address"], [1, "col", "address"], [1, "form-group"], ["for", "city"], ["type", "text", "placeholder", "City", "name", "city", "formControlName", "city", 1, "form-control", 3, "ngClass"], [1, "col"], ["for", "country"], ["type", "text", "placeholder", "State", "name", "State", "formControlName", "state", 1, "form-control", 3, "ngClass"], ["for", "area"], ["type", "text", "placeholder", "Area", "name", "area", "formControlName", "area", 1, "form-control", 3, "ngClass"], ["for", "pinode"], ["type", "text", "placeholder", "pincode", "name", "pincode", "formControlName", "pincode", 1, "form-control", 3, "ngClass"], ["for", "exampleInputsecurityQuestion"], ["type", "text", "formControlName", "securityQuestion", "id", "exampleInputsecurityQuestion", "placeholder", "Security Question", "name", "securityQuestion", 1, "form-control", "form-control-user", 3, "ngClass"], ["for", "exampleInputsecurityAnswer"], ["type", "text", "formControlName", "securityAnswer", "id", "exampleInputsecurityAnswer", "placeholder", "Security Answer", "name", "securityAnswer", 1, "form-control", "form-control-user", 3, "ngClass"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "actions"], ["type", "submit", 1, "primary-btn", "btn-block"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["type", "button", 1, "secondary-btn", "btn-block", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [1, "spinner-border", "spinner-border-sm"]],
  template: function EditProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6)(7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditProfileComponent_Template_img_click_7_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Edit Profile #");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditProfileComponent_Template_form_ngSubmit_11_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " User ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EditProfileComponent_div_17_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4)(19, "div", 15)(20, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, EditProfileComponent_div_23_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15)(25, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, EditProfileComponent_div_28_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4)(30, "div", 15)(31, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Email ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, EditProfileComponent_div_34_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 15)(36, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Phone No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, EditProfileComponent_div_39_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24)(41, "div", 4)(42, "div", 25)(43, "div", 26)(44, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, EditProfileComponent_div_47_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 29)(49, "div", 26)(50, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "State");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, EditProfileComponent_div_53_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 4)(55, "div", 25)(56, "div", 26)(57, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Area");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, EditProfileComponent_div_60_Template, 2, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 29)(62, "div", 26)(63, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "pincode");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, EditProfileComponent_div_66_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 26)(68, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Security Question (To reset password from Login Page) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "textarea", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, EditProfileComponent_div_71_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 26)(73, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Security Answer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, EditProfileComponent_div_76_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, EditProfileComponent_div_77_Template, 2, 1, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, EditProfileComponent_span_81_Template, 1, 0, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Update ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_83_listener() {
        return ctx.resetToDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Reset to default ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.userDetailsEdit == null ? null : ctx.userDetailsEdit.userId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.updateUserForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c1, ctx.submitted && ctx.updateUserForm.get("userId").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("userId").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c1, ctx.submitted && ctx.updateUserForm.get("firstName").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("firstName").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c1, ctx.submitted && ctx.updateUserForm.get("lastName").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("lastName").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](34, _c1, ctx.submitted && ctx.updateUserForm.get("emailId").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("emailId").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](36, _c1, ctx.submitted && ctx.updateUserForm.get("phoneNo").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("phoneNo").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](38, _c1, ctx.submitted && ctx.updateUserForm.get("address.city").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("address.city").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](40, _c1, ctx.submitted && ctx.updateUserForm.get("address.state").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("address.state").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](42, _c1, ctx.submitted && ctx.updateUserForm.get("address.area").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("address.area").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](44, _c1, ctx.submitted && ctx.updateUserForm.get("address.pincode").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("address.pincode").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](46, _c1, ctx.submitted && ctx.updateUserForm.get("securityQuestion").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("securityQuestion").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](48, _c1, ctx.submitted && ctx.updateUserForm.get("securityAnswer").invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.updateUserForm.get("securityAnswer").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName],
  styles: [".background[_ngcontent-%COMP%] {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  filter: blur(12px);\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 5%;\n  justify-content: center;\n  display: flex;\n}\n\n.root[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 178px);\n}\n\n.front-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 2px 0 0 2px;\n  opacity: 0.8;\n  transition: 0.5s;\n}\n\n.front-img[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\n.row[_ngcontent-%COMP%] {\n  margin: none;\n  width: 100%;\n}\n\n.my-card[_ngcontent-%COMP%] {\n  width: 70%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n}\n\n.section-product[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n  min-height: 400px;\n}\n\n.product-title[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-weight: bold;\n  font-size: xx-large;\n}\n\n.product-id[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  font-weight: 600;\n  color: #21a0bd;\n}\n\n.product-title[_ngcontent-%COMP%]::after {\n  display: block;\n  height: 2px;\n  background-color: #fb5a69;\n  content: \" \";\n  width: 100px;\n  margin-top: 20px;\n  transition: 0.2s;\n}\n\n.product-title[_ngcontent-%COMP%]:hover::after {\n  width: 200px;\n}\n\n\n\n.section-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.1s;\n}\n\n.section-back[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n\n.back-img[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n}\n\n.back-text[_ngcontent-%COMP%] {\n  padding: 12px;\n  vertical-align: middle;\n  letter-spacing: 0.5px;\n  font-size: 110%;\n  font-weight: 550;\n  color: #24b7d8;\n  \n}\n\n\n.breadcrumb[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0;\n  margin-top: 16px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  align-items: center;\n  font-size: 100%;\n  text-decoration: none;\n  color: #24b7d8;\n  border-bottom: 1px solid transparent;\n  transition: 0.2s ease-out;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #21a0bd;\n  border-bottom: 1px solid #21a0bd;\n}\n\n\n.product-price[_ngcontent-%COMP%] {\n  color: #24b7d8;\n  font-weight: lighter;\n  font-size: 200%;\n}\n\n\n.product-title[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: #3f3f3f;\n}\n\n\n\n.primary-btn[_ngcontent-%COMP%], .secondary-btn[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline;\n  width: auto;\n  justify-content: right;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  transform: scale(1.1);\n}\n\n.secondary-btn[_ngcontent-%COMP%] {\n  background: #fb5a69;\n}\n\n.secondary-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #fb5a69;\n  transform: scale(1.1);\n}\n\n\n.section-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.1s;\n  margin-top: 12px;\n  font-style: italic;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  transform: scale(1);\n  font-weight: lighter;\n  vertical-align: middle;\n  border-bottom: 1px solid transparent;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  color: rgb(133, 133, 133);\n  padding: 8px;\n}\n\n.section-info[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid rgb(133, 133, 133);\n}\n\n\n.quantity-btn-right[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: 0.2s;\n  font-size: 120%;\n  border: 2px solid transparent;\n}\n\n.quantity-btn-right[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  border: 2px solid #24b7d8;\n}\n\n\n.quantity-btn-left[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  transition: 0.2s;\n  font-size: 120%;\n  border: 2px solid transparent;\n}\n\n.quantity-btn-left[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  border: 2px solid #24b7d8;\n}\n\n.quantity-input[_ngcontent-%COMP%] {\n  padding: 8px;\n  width: 6%;\n  color: black;\n  border: none;\n  outline: none;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  font-size: 120%;\n}\n\n\n.quantity-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .quantity-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.quantity-stock[_ngcontent-%COMP%] {\n  color: rgba(136, 136, 136, 0.8);\n  padding-top: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  letter-spacing: 1.3px;\n  font-size: 130%;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.back-img[_ngcontent-%COMP%] {\n  margin: 4px;\n  padding-right: 8px;\n  transform: scale(1.6);\n  cursor: pointer;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  background-color: #21a0bd;\n}\n\n.row[_ngcontent-%COMP%] {\n  \n  \n}\n\n.userId[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.p-5[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 2px solid #fb5a69;\n  width: 100px;\n  margin: 0;\n  transition: 0.2s;\n}\n\n.actions[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0EsdUNBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBLHdCQUFBO0FBRUEsY0FBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0EsV0FBQTtBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0FBRUY7O0FBQ0EsY0FBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0EsVUFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBLGtCQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQSw4QkFBQTtBQUNBLFlBQUE7QUFDQTs7RUFFRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBLG1CQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsMkNBQUE7QUFHRjs7QUFBQSxhQUFBO0FBRUE7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQSxhQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREEsbUNBQUE7QUFDQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFJRjs7QUFEQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUZBO0VBQ0UseUJBQUE7QUFLRjs7QUFGQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUZBO0VBQ0UsV0FBQTtBQUtGOztBQUhBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxZQUFBO0FBTUYiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWx0ZXI6IGJsdXIoMTJweCk7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogNSU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucm9vdCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzhweCk7XG59XG5cbi5mcm9udC1pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmZyb250LWltZzpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4vKiBGaXhlcyBleHRyYSB3aGl0ZSBjb250ZW50IG9uIHJpZ2h0ICovXG4ucm93IHtcbiAgbWFyZ2luOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15LWNhcmQge1xuICB3aWR0aDogNzAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnNlY3Rpb24tcHJvZHVjdCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4ucHJvZHVjdC10aXRsZSB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4ucHJvZHVjdC1pZCB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjFhMGJkO1xufVxuXG4ucHJvZHVjdC10aXRsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYjVhNjk7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5wcm9kdWN0LXRpdGxlOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLyogQmFjayBCdXR0b24gU2VjdGlvbiAqL1xuXG4vKiBDb250YWluZXIgKi9cbi5zZWN0aW9uLWJhY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cblxuLnNlY3Rpb24tYmFjazpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi8qIEJ1dHRvbiAqL1xuLmJhY2staW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4uYmFjay10ZXh0IHtcbiAgcGFkZGluZzogMTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXNpemU6IDExMCU7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGNvbG9yOiAjMjRiN2Q4O1xuICAvKiB0ZXh0LXNoYWRvdzogMC41cHggMC41cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cbn1cblxuLyogQnJlYWtjcnVtICovXG4uYnJlYWRjcnVtYiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0gYSB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzI0YjdkODtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGE6aG92ZXIge1xuICBjb2xvcjogIzIxYTBiZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMWEwYmQ7XG59XG5cbi8qIFByaWNlICovXG4ucHJvZHVjdC1wcmljZSB7XG4gIGNvbG9yOiAjMjRiN2Q4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAyMDAlO1xufVxuXG4vKiBQcm9kdWN0IHRpdGxlICovXG4ucHJvZHVjdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjM2YzZjNmO1xufVxuXG4vKiBDYXJ0IGFuZCBjaGVja291dCBidXR0b25zICovXG4vKiBCdXR0b25zICovXG4ucHJpbWFyeS1idG4sXG4uc2Vjb25kYXJ5LWJ0biB7XG4gIGJhY2tncm91bmQ6ICMyNGI3ZDg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5wcmltYXJ5LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzI0YjdkODtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uc2Vjb25kYXJ5LWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmYjVhNjk7XG59XG5cbi5zZWNvbmRhcnktYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjZmI1YTY5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qIEluZm8gQ29udGFpbmVyICovXG4uc2VjdGlvbi1pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uaW5mby10ZXh0IHtcbiAgY29sb3I6IHJnYigxMzMsIDEzMywgMTMzKTtcbiAgcGFkZGluZzogOHB4O1xufVxuLnNlY3Rpb24taW5mbzpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTMzLCAxMzMsIDEzMyk7XG59XG5cbi8qIFF1YW50aXR5ICovXG5cbi5xdWFudGl0eS1idG4tcmlnaHQge1xuICBiYWNrZ3JvdW5kOiAjMjRiN2Q4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMjAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5xdWFudGl0eS1idG4tcmlnaHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNGI3ZDg7XG59XG5cbi8qIFF1YW50aXR5ICovXG4ucXVhbnRpdHktYnRuLWxlZnQge1xuICBiYWNrZ3JvdW5kOiAjMjRiN2Q4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucXVhbnRpdHktYnRuLWxlZnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNGI3ZDg7XG59XG5cbi5xdWFudGl0eS1pbnB1dCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IDYlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBmb250LXNpemU6IDEyMCU7XG59XG5cbi8qIFJlbW92ZXMgYXJyb3cgZnJvbSBpbnB1dCBmaWVsZCAqL1xuLnF1YW50aXR5LWlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuLnF1YW50aXR5LWlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi5xdWFudGl0eS1zdG9jayB7XG4gIGNvbG9yOiByZ2JhKDEzNiwgMTM2LCAxMzYsIDAuOCk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBsZXR0ZXItc3BhY2luZzogMS4zcHg7XG4gIGZvbnQtc2l6ZTogMTMwJTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5iYWNrLWltZyB7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFhMGJkO1xufVxuXG4ucm93IHtcbiAgLyogcGFkZGluZzogLTE1cHg7ICovXG4gIC8qIG1hcmdpbjogMDsgKi9cbn1cblxuLnVzZXJJZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wLTUge1xuICB3aWR0aDogMTAwJTtcbn1cbmhyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmYjVhNjk7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uYWN0aW9uczpob3ZlciBociB7XG4gIHdpZHRoOiAyMDBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1276:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/products/orders/delivery-history/delivery-history.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryHistoryComponent": () => (/* binding */ DeliveryHistoryComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_order_status_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/order-status.model */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_order_cancel_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order-cancel-modal.service */ 6314);
/* harmony import */ var src_app_services_delivery_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/delivery-history.service */ 3684);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order.service */ 8132);
/* harmony import */ var _shared_order_cancel_modal_order_cancel_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/order-cancel-modal/order-cancel-modal.component */ 8163);









const _c0 = function (a0) {
  return {
    delete: a0
  };
};
function DeliveryHistoryComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 27);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx_r0.OrderStaus[item_r4.orderStatus])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, item_r4.orderStatus === "CANCELLED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-content", "Updated On " + ctx_r0.formattedDate(item_r4.updatedOn));
  }
}
function DeliveryHistoryComponent_li_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 28);
  }
}
const _c1 = function (a0) {
  return {
    "background-color": a0
  };
};
const _c2 = function (a0) {
  return {
    color: a0
  };
};
function DeliveryHistoryComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r2.fetchDeliveryColor(item_r6.orderStatus)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c2, ctx_r2.fetchDeliveryColor(item_r6.orderStatus)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.OrderStaus[item_r6.orderStatus], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formattedDate(item_r6.updatedOn));
  }
}
function DeliveryHistoryComponent_button_58_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 36);
  }
}
function DeliveryHistoryComponent_button_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeliveryHistoryComponent_button_58_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.cancelOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DeliveryHistoryComponent_button_58_span_1_Template, 1, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cancel Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.loadingService.loading);
  }
}
const _c3 = function () {
  return ["/"];
};
const _c4 = function () {
  return [];
};
class DeliveryHistoryComponent {
  constructor(route, location, loadingService, orderCancelModal, deliveryService, orderService) {
    this.route = route;
    this.location = location;
    this.loadingService = loadingService;
    this.orderCancelModal = orderCancelModal;
    this.deliveryService = deliveryService;
    this.orderService = orderService;
    this.OrderStaus = src_app_models_order_status_model__WEBPACK_IMPORTED_MODULE_0__.OrderStatus;
    this.deliveryHistory = [];
  }
  ngOnInit() {
    this.orderId = this.route.snapshot.params['orderId'];
    this.fetchDeliveryHistory();
  }
  fetchDeliveryHistory() {
    this.loadingService.enableLoading();
    this.deliveryService.fetchDeliveryByOrderId(this.orderId).subscribe(res => {
      this.loadingService.disableLoading();
      this.deliveryHistory = res;
    });
  }
  formattedDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }
  goBack() {
    this.location.back();
  }
  cancelOrder() {
    this.orderCancelModal.open();
    this.orderCancelModal.watch().subscribe(res => {
      this.loadingService.enableLoading();
      if (res !== 'cancel-order') this.loadingService.disableLoading();else this.orderService.updateOrderStatus({
        orderId: this.orderId,
        status: 'CANCELLED'
      }).subscribe(res => {
        this.fetchDeliveryHistory();
      });
    }).closed;
  }
  checkIfCancellable() {
    return this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'DELIVERED' && this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'CANCELLED';
  }
  fetchDeliveryColor(orderStatus) {
    switch (orderStatus) {
      case 'NEW':
      case 'DELIVERED':
        return 'green';
      case 'CANCELLED':
        return 'red';
      default:
        return '#1f9db9';
    }
  }
}
DeliveryHistoryComponent.ɵfac = function DeliveryHistoryComponent_Factory(t) {
  return new (t || DeliveryHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_order_cancel_modal_service__WEBPACK_IMPORTED_MODULE_2__.OrderCancelModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_delivery_history_service__WEBPACK_IMPORTED_MODULE_3__.DeliveryHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService));
};
DeliveryHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DeliveryHistoryComponent,
  selectors: [["app-delivery-history"]],
  decls: 60,
  vars: 10,
  consts: [[1, "parent", "px-1", "px-md-4", "py-5", "mx-auto"], [1, "card"], [1, "row", "d-flex", "justify-content-between", "px-3", "top"], [1, "logo-container"], ["src", "assets/images/logo-text.png", 1, "title", 3, "routerLink"], [1, "title-main"], [1, "summary"], [1, "item"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12"], ["id", "progressbar", 1, "text-center"], ["class", "active step0", "ata-toggle", "popover", "data-placement", "top", "onmouseenter", "$(this).popover('show')", "onmouseout", "$(this).popover('hide')", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], ["class", "step0", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-between", "delivery-icon-container"], [1, "delivery-container", "row", "d-flex", "icon-content"], ["src", "assets/images/created.svg", 1, "icon"], [1, "font-weight-bold"], [1, "delivery-container", "row", "icon-content"], ["src", "assets/images/dispatched.svg", 1, "icon"], ["src", "assets/images/out_for_delivery.svg", 1, "icon"], ["src", "assets/images/delivered.svg", 1, "icon"], [1, "logs-container"], [1, "logs-heading"], ["class", "log-entry", 4, "ngFor", "ngForOf"], [1, "actions"], [1, "back-btn", 3, "click"], ["class", "cancel-btn", 3, "click", 4, "ngIf"], ["ata-toggle", "popover", "data-placement", "top", "onmouseenter", "$(this).popover('show')", "onmouseout", "$(this).popover('hide')", 1, "active", "step0", 3, "title", "ngClass"], [1, "step0"], [1, "log-entry"], ["src", "assets/images/check.svg", "alt", "", 1, "log-img", 3, "ngStyle"], [1, "log-item"], [1, "log-status", 3, "ngStyle"], [1, "log-date"], [1, "cancel-btn", 3, "click"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm"]],
  template: function DeliveryHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 4)(5, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Delivery History");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Order #");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Current Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Updated On ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DeliveryHistoryComponent_li_23_Template, 1, 5, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, DeliveryHistoryComponent_li_24_Template, 1, 0, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 13)(26, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Created");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Dispatched");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Out for");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Delivery");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Delivered");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 21)(49, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Delivery Logs");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, DeliveryHistoryComponent_div_53_Template, 9, 8, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 24)(56, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeliveryHistoryComponent_Template_button_click_56_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, DeliveryHistoryComponent_button_58_Template, 3, 1, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "app-order-cancel-modal");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.orderId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.OrderStaus[ctx.deliveryHistory.slice(-1)[0] == null ? null : ctx.deliveryHistory.slice(-1)[0].orderStatus], " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.formattedDate(ctx.deliveryHistory.slice(-1)[0] == null ? null : ctx.deliveryHistory.slice(-1)[0].updatedOn), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.deliveryHistory);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c4).constructor(4 - ctx.deliveryHistory.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.deliveryHistory == null ? null : ctx.deliveryHistory.slice().reverse());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.checkIfCancellable());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _shared_order_cancel_modal_order_cancel_modal_component__WEBPACK_IMPORTED_MODULE_5__.OrderCancelModalComponent],
  styles: [".parent[_ngcontent-%COMP%] {\n  padding: 10%;\n  overflow-x: hidden;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  z-index: 0;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  padding: 20px;\n  margin: 4% 8%;\n}\n\n.delivery-icon-container[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-left: 13% !important;\n  padding-right: 13% !important;\n}\n\n#progressbar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #455a64;\n  padding-left: 0px;\n  margin-top: 30px;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-size: 13px;\n  width: 25%;\n  float: left;\n  position: relative;\n  font-weight: 400;\n}\n\n#progressbar[_ngcontent-%COMP%]   .step0[_ngcontent-%COMP%]:before {\n  content: url('assets/images/check.svg');\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  width: 40px;\n  height: 40px;\n  line-height: 45px;\n  display: block;\n  font-size: 20px;\n  background: #c5cae9;\n  border-radius: 50%;\n  margin: auto;\n  padding: 0px;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 12px;\n  \n  position: absolute;\n  left: 0;\n  top: 16px;\n  z-index: -1;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  position: absolute;\n  left: -50%;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):after, #progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):after {\n  left: -50%;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  position: absolute;\n  left: 50%;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n#progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n#progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before, #progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:after {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n#progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before {\n  content: url('assets/images/check.svg');\n}\n\n#progressbar[_ngcontent-%COMP%]   li.delete[_ngcontent-%COMP%]:before {\n  content: url('assets/images/check.svg');\n  background: red;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin-right: 15px;\n}\n\n.icon-content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n@media screen and (max-width: 992px) {\n  .icon-content[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.font-weight-bold[_ngcontent-%COMP%] {\n  letter-spacing: 1.2px;\n}\n\n\n.delivery-container[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n\n.delivery-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n\n.step0[_ngcontent-%COMP%]:before {\n  transition: 0.2s;\n}\n\n.step0[_ngcontent-%COMP%]:hover:before {\n  transform: scale(1.3);\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 100px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.title[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: scale(1.2);\n}\n\n.summary[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  text-transform: uppercase;\n  font-size: 150%;\n  width: 100%;\n  transition: 0.2s;\n}\n\n.summary[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.02);\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  letter-spacing: 1.2px;\n  font-weight: 600;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.back-btn[_ngcontent-%COMP%], .cancel-btn[_ngcontent-%COMP%] {\n  background: #1f9db9;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n  margin-left: 10%;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n  background: #fb5a69;\n}\n\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  color: #fb5a69;\n  background: white;\n  transform: scale(1.1);\n}\n\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #1f9db9;\n  transform: scale(1.1);\n}\n\n.title-main[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 200%;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n\n.logs-container[_ngcontent-%COMP%] {\n  margin: 0 10%;\n}\n\n.logs-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logs-heading[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.log-img[_ngcontent-%COMP%] {\n  background-color: blue;\n  border-radius: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transform: scale(0.9);\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  padding-top: 24px;\n}\n\n.log-entry[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.log-item[_ngcontent-%COMP%] {\n  \n  font-size: 150%;\n  vertical-align: middle;\n  letter-spacing: 1px;\n}\n\n.log-status[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.log-date[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9vcmRlcnMvZGVsaXZlcnktaGlzdG9yeS9kZWxpdmVyeS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBOztFQUVFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxtQkFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxxQkFBQTtBQUFGOztBQUdBLDhCQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQSx3QkFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTs7RUFFRSxhQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSx1QkFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUdGOztBQUFBOztHQUFBO0FBR0E7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQURBOztFQUVFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBREEsa0JBQUE7QUFDQTtFQUNFLGFBQUE7QUFJRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBREE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UscUJBQUE7QUFJRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50IHtcbiAgcGFkZGluZzogMTAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQge1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA0JSA4JTtcbn1cblxuLmRlbGl2ZXJ5LWljb24tY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMTMlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEzJSAhaW1wb3J0YW50O1xufVxuXG4jcHJvZ3Jlc3NiYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBjb2xvcjogIzQ1NWE2NDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbiNwcm9ncmVzc2JhciBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4jcHJvZ3Jlc3NiYXIgLnN0ZXAwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIl5hc3NldHMvaW1hZ2VzL2NoZWNrLnN2Z1wiKTtcbn1cblxuI3Byb2dyZXNzYmFyIGxpOmJlZm9yZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjYzVjYWU5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jcHJvZ3Jlc3NiYXIgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICAvKiBiYWNrZ3JvdW5kOiAjQzVDQUU5OyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTZweDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNwcm9ncmVzc2JhciBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC01MCU7XG59XG5cbiNwcm9ncmVzc2JhciBsaTpudGgtY2hpbGQoMik6YWZ0ZXIsXG4jcHJvZ3Jlc3NiYXIgbGk6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgbGVmdDogLTUwJTtcbn1cblxuI3Byb2dyZXNzYmFyIGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG59XG5cbiNwcm9ncmVzc2JhciBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4jcHJvZ3Jlc3NiYXIgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4jcHJvZ3Jlc3NiYXIgbGkuYWN0aXZlOmJlZm9yZSxcbiNwcm9ncmVzc2JhciBsaS5hY3RpdmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjRiN2Q4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbiNwcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiXmFzc2V0cy9pbWFnZXMvY2hlY2suc3ZnXCIpO1xufVxuXG4jcHJvZ3Jlc3NiYXIgbGkuZGVsZXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIl5hc3NldHMvaW1hZ2VzL2NoZWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmljb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmljb24tY29udGVudCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuXG4uZm9udC13ZWlnaHQtYm9sZCB7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBkZWxpdmVyeSBpY29ucyAqL1xuLmRlbGl2ZXJ5LWNvbnRhaW5lciB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uZGVsaXZlcnktY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4vKiBSZXNwb25zaXZlIHRpbWVsaW5lICovXG4uc3RlcDA6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5zdGVwMDpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi50aXRsZTpob3Zlcixcbi50aXRsZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnN1bW1hcnkge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnN1bW1hcnk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjAyKTtcbn1cblxuLml0ZW0ge1xuICBjb2xvcjogIzFmOWRiOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKiAuc2VwYXJhdG9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAqL1xuLmxvZ28tY29udGFpbmVyIGhyIHtcbiAgd2lkdGg6IDEwJTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmYjVhNjk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5sb2dvLWNvbnRhaW5lcjpob3ZlciBociB7XG4gIHdpZHRoOiAyMCU7XG59XG4uYmFjay1idG4sXG4uY2FuY2VsLWJ0biB7XG4gIGJhY2tncm91bmQ6ICMxZjlkYjk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmNhbmNlbC1idG4ge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2ZiNWE2OTtcbn1cblxuLmNhbmNlbC1idG46aG92ZXIge1xuICBjb2xvcjogI2ZiNWE2OTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmJhY2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjMWY5ZGI5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi50aXRsZS1tYWluIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTG9nIGNvbnRpYW5lciAqL1xuLmxvZ3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDEwJTtcbn1cblxuLmxvZ3MtY29udGFpbmVyIGhyIHtcbiAgd2lkdGg6IDEwJTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmYjVhNjk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5sb2dzLWhlYWRpbmc6aG92ZXIgaHIge1xuICB3aWR0aDogMjAlO1xufVxuXG4ubG9nLWltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5sb2ctZW50cnkge1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLmxvZy1lbnRyeTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmxvZy1pdGVtIHtcbiAgLyogbWFyZ2luOiAwIDEycHg7ICovXG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmxvZy1zdGF0dXMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZy1kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7491:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/products/orders/order-details-new/order-details-new.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailsNewComponent": () => (/* binding */ OrderDetailsNewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/order.service */ 8132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_delivery_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/delivery-history.service */ 3684);
/* harmony import */ var src_app_services_order_cancel_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order-cancel-modal.service */ 6314);
/* harmony import */ var _shared_order_cancel_modal_order_cancel_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/order-cancel-modal/order-cancel-modal.component */ 8163);
/* harmony import */ var _product_detail_card_product_detail_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-card/product-detail-card.component */ 6349);










function OrderDetailsNewComponent_app_product_detail_card_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-product-detail-card", 18);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("productId", item_r2.productId)("productName", item_r2.productName)("productDescription", item_r2.productDescription)("productIcon", item_r2.productIcon)("productQuantity", item_r2.productStock)("productPrice", item_r2.productPrice)("discountPercent", item_r2.discountPercent);
  }
}
function OrderDetailsNewComponent_button_90_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 21);
  }
}
function OrderDetailsNewComponent_button_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderDetailsNewComponent_button_90_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.cancelOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderDetailsNewComponent_button_90_span_1_Template, 1, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cancel Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loadingService.loading);
  }
}
const _c0 = function () {
  return ["/"];
};
const _c1 = function (a1) {
  return ["/products/delivery", a1];
};
class OrderDetailsNewComponent {
  constructor(route, orderService, location, loadingService, deliveryHistoryService, orderCancelModal) {
    this.route = route;
    this.orderService = orderService;
    this.location = location;
    this.loadingService = loadingService;
    this.deliveryHistoryService = deliveryHistoryService;
    this.orderCancelModal = orderCancelModal;
  }
  ngOnInit() {
    this.orderId = this.route.snapshot.params['orderId'];
    this.fetchOrderDetails(this.orderId);
    this.fetchDeliveryDetails(this.orderId);
  }
  fetchDeliveryDetails(id) {
    this.deliveryHistoryService.fetchDeliveryByOrderId(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(res => this.deliveryHistory = res);
  }
  fetchOrderDetails(id) {
    this.orderService.fetchById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(res => {
      return res;
    })).subscribe(res => this.orderDetails = res);
  }
  goBack() {
    this.location.back();
  }
  formattedDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  }
  cancelOrder() {
    this.orderCancelModal.open();
    this.orderCancelModal.watch().subscribe(res => {
      this.loadingService.enableLoading();
      if (res !== 'cancel-order') this.loadingService.disableLoading();else this.orderService.updateOrderStatus({
        orderId: +this.orderDetails?.orderId,
        status: 'CANCELLED'
      }).subscribe(res => {
        this.fetchOrderDetails(this.orderDetails?.orderId);
        this.fetchDeliveryDetails(this.orderDetails?.orderId);
      });
    });
  }
  checkIfCancellable() {
    return this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'DELIVERED' && this.deliveryHistory?.slice(-1)[0]?.orderStatus !== 'CANCELLED';
  }
}
OrderDetailsNewComponent.ɵfac = function OrderDetailsNewComponent_Factory(t) {
  return new (t || OrderDetailsNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_delivery_history_service__WEBPACK_IMPORTED_MODULE_2__.DeliveryHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_order_cancel_modal_service__WEBPACK_IMPORTED_MODULE_3__.OrderCancelModalService));
};
OrderDetailsNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: OrderDetailsNewComponent,
  selectors: [["app-order-details-new"]],
  decls: 92,
  vars: 25,
  consts: [[1, "parent", "px-1", "px-md-4", "py-5", "mx-auto"], [1, "card"], [1, "row", "d-flex", "justify-content-between", "px-3", "top"], [1, "logo-container"], ["src", "assets/images/logo-text.png", 1, "title", 3, "routerLink"], [1, "title-main"], [1, "row"], [1, "col"], [1, "summary"], [1, "item"], ["src", "assets/images/info.svg", "alt", "", 3, "routerLink"], [1, "logs-heading"], [1, "product-list"], [3, "productId", "productName", "productDescription", "productIcon", "productQuantity", "productPrice", "discountPercent", 4, "ngFor", "ngForOf"], [1, "actions"], [1, "back-btn", 3, "click"], [1, "secondary-btn", 3, "routerLink"], ["class", "cancel-btn", 3, "click", 4, "ngIf"], [3, "productId", "productName", "productDescription", "productIcon", "productQuantity", "productPrice", "discountPercent"], [1, "cancel-btn", 3, "click"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm"]],
  template: function OrderDetailsNewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 4)(5, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Purchase History");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "section", 7)(10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Order #");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Current Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Updated On ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "section", 7)(24, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Phone No. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "section")(37, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " Street ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " City ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " State ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, " Pincode ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Payment Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "section")(58, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " Order Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Discounted Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, " Delivery Charge ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, " Final Price ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " Payment Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Product Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, OrderDetailsNewComponent_app_product_detail_card_83_Template, 1, 7, "app-product-detail-card", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 14)(86, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderDetailsNewComponent_Template_button_click_86_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, " Delivery History ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, OrderDetailsNewComponent_button_90_Template, 3, 1, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "app-order-cancel-modal");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.orderId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.orderStatus, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](21, _c1, ctx.orderDetails == null ? null : ctx.orderDetails.orderId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.formattedDate(ctx.deliveryHistory == null ? null : ctx.deliveryHistory.slice(-1)[0] == null ? null : ctx.deliveryHistory.slice(-1)[0].updatedOn), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerPhone, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerEmail, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerAddress, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerCity, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerState, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.buyerPincode, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.orderDetails == null ? null : ctx.orderDetails.orderAmount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.orderDetails == null ? null : ctx.orderDetails.discountedAmount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.orderDetails == null ? null : ctx.orderDetails.deliveryCharge, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.orderDetails == null ? null : ctx.orderDetails.finalPrice, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.orderDetails == null ? null : ctx.orderDetails.paymentType, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.orderDetails == null ? null : ctx.orderDetails.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](23, _c1, ctx.orderId));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.checkIfCancellable());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_order_cancel_modal_order_cancel_modal_component__WEBPACK_IMPORTED_MODULE_4__.OrderCancelModalComponent, _product_detail_card_product_detail_card_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailCardComponent],
  styles: [".parent[_ngcontent-%COMP%] {\n  padding: 10%;\n  overflow-x: hidden;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  z-index: 0;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  padding: 20px;\n  margin: 4% 8%;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin-right: 15px;\n}\n\n.icon-content[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n@media screen and (max-width: 992px) {\n  .icon-content[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.font-weight-bold[_ngcontent-%COMP%] {\n  letter-spacing: 1.2px;\n}\n\n\n.delivery-container[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n\n.delivery-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n\n.step0[_ngcontent-%COMP%]:before {\n  transition: 0.2s;\n}\n\n.step0[_ngcontent-%COMP%]:hover:before {\n  transform: scale(1.3);\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 100px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.title[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: scale(1.2);\n}\n\n.summary[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  text-transform: uppercase;\n  font-size: 150%;\n  width: 100%;\n  transition: 0.2s;\n}\n\n.summary[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.02);\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  letter-spacing: 1.2px;\n  font-weight: 600;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], .logs-heading[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%], .logs-heading[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.back-btn[_ngcontent-%COMP%], .cancel-btn[_ngcontent-%COMP%] {\n  background: #1f9db9;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n  margin-left: 10%;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n  background: #fb5a69;\n}\n\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  color: #fb5a69;\n  background: white;\n  transform: scale(1.1);\n}\n\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #1f9db9;\n  transform: scale(1.1);\n}\n\n.title-main[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 200%;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n\n.logs-container[_ngcontent-%COMP%] {\n  margin: 0 10%;\n}\n\n.logs-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logs-heading[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.log-img[_ngcontent-%COMP%] {\n  background-color: blue;\n  border-radius: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transform: scale(0.9);\n}\n\n.log-entry[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  padding-top: 24px;\n}\n\n.log-entry[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.log-item[_ngcontent-%COMP%] {\n  \n  font-size: 150%;\n  vertical-align: middle;\n  letter-spacing: 1px;\n}\n\n.log-status[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.log-date[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  margin-bottom: 2px;\n  cursor: pointer;\n  outline: none;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #24b7d8;\n  letter-spacing: 2px;\n  font-size: 300%;\n  margin: 8% 0;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\nsection[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: left;\n  text-align: left;\n  \n}\n\n.row[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]::before {\n  display: block;\n  height: 2px;\n  background-color: #fb5a69;\n  content: \" \";\n  width: 100px;\n  margin: 20px 0;\n  transition: 0.2s;\n  margin-left: 10%;\n}\n\nsection[_ngcontent-%COMP%]:hover::before {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9vcmRlcnMvb3JkZXItZGV0YWlscy1uZXcvb3JkZXItZGV0YWlscy1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0EsOEJBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBLHdCQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBOztFQUVFLGFBQUE7RUFDQSxxQkFBQTtBQUdGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLHVCQUFBO0FBR0Y7O0FBQUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBR0Y7O0FBQUE7O0dBQUE7QUFHQTs7RUFFRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBOztFQUVFLFVBQUE7QUFHRjs7QUFEQTs7RUFFRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBLGtCQUFBO0FBQ0E7RUFDRSxhQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFEQTtFQUNFLHFCQUFBO0FBSUY7O0FBREE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7QUFJRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xuICBwYWRkaW5nOiAxMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDQlIDglO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmljb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmljb24tY29udGVudCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuXG4uZm9udC13ZWlnaHQtYm9sZCB7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBkZWxpdmVyeSBpY29ucyAqL1xuLmRlbGl2ZXJ5LWNvbnRhaW5lciB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uZGVsaXZlcnktY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4vKiBSZXNwb25zaXZlIHRpbWVsaW5lICovXG4uc3RlcDA6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5zdGVwMDpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi50aXRsZTpob3Zlcixcbi50aXRsZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnN1bW1hcnkge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnN1bW1hcnk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjAyKTtcbn1cblxuLml0ZW0ge1xuICBjb2xvcjogIzFmOWRiOTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKiAuc2VwYXJhdG9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAqL1xuLmxvZ28tY29udGFpbmVyIGhyLFxuLmxvZ3MtaGVhZGluZyBociB7XG4gIHdpZHRoOiAxMCU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmI1YTY5O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubG9nby1jb250YWluZXI6aG92ZXIgaHIsXG4ubG9ncy1oZWFkaW5nOmhvdmVyIGhyIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5iYWNrLWJ0bixcbi5jYW5jZWwtYnRuIHtcbiAgYmFja2dyb3VuZDogIzFmOWRiOTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmI1YTY5O1xufVxuXG4uY2FuY2VsLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjZmI1YTY5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYmFjay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMxZjlkYjk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnRpdGxlLW1haW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBMb2cgY29udGlhbmVyICovXG4ubG9ncy1jb250YWluZXIge1xuICBtYXJnaW46IDAgMTAlO1xufVxuXG4ubG9ncy1jb250YWluZXIgaHIge1xuICB3aWR0aDogMTAlO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZiNWE2OTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmxvZ3MtaGVhZGluZzpob3ZlciBociB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5sb2ctaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuLmxvZy1lbnRyeSB7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuXG4ubG9nLWVudHJ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ubG9nLWl0ZW0ge1xuICAvKiBtYXJnaW46IDAgMTJweDsgKi9cbiAgZm9udC1zaXplOiAxNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubG9nLXN0YXR1cyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nLWRhdGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLml0ZW0gPiBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzI0YjdkODtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAzMDAlO1xuICBtYXJnaW46IDglIDA7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbnNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKiBtYXJnaW4tdG9wOiAyNHB4OyAqL1xufVxuXG4ucm93IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnNlY3Rpb246OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNWE2OTtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbnNlY3Rpb246aG92ZXI6OmJlZm9yZSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6349:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/products/orders/order-details-new/product-detail-card/product-detail-card.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailCardComponent": () => (/* binding */ ProductDetailCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function ProductDetailCardComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx_r0.productPrice, " ");
  }
}
const _c0 = function (a1) {
  return ["/products", a1];
};
class ProductDetailCardComponent {
  constructor() {}
  ngOnInit() {}
  discountPrice() {
    return this.discountPercent <= 0 ? this.productPrice : this.productPrice - this.productPrice * 0.01 * this.discountPercent;
  }
}
ProductDetailCardComponent.ɵfac = function ProductDetailCardComponent_Factory(t) {
  return new (t || ProductDetailCardComponent)();
};
ProductDetailCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProductDetailCardComponent,
  selectors: [["app-product-detail-card"]],
  inputs: {
    productId: "productId",
    productName: "productName",
    productDescription: "productDescription",
    productIcon: "productIcon",
    productPrice: "productPrice",
    productQuantity: "productQuantity",
    discountPercent: "discountPercent"
  },
  decls: 16,
  vars: 10,
  consts: [[1, "product-item"], [1, "product-img", 3, "src", "alt", "error"], [1, "product-details"], [1, "product-data"], [1, "product-name"], ["src", "assets/images/info.svg", "alt", "", 1, "detail", 3, "routerLink"], [1, "product-description"], [1, "product-quantity"], ["src", "assets/images/basket.svg", "alt", ""], [1, "product-price"], ["class", "strike", 4, "ngIf"], [1, "strike"]],
  template: function ProductDetailCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ProductDetailCardComponent_Template_img_error_1_listener($event) {
        return $event.target.src = "^assets/images/celebration2.jpg";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductDetailCardComponent_span_15_Template, 2, 1, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.productIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.productName);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.productId));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productQuantity, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.discountPrice(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.discountPercent > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".product-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1%;\n  border-radius: 4px;\n  overflow: auto;\n  margin-left: 10%;\n  margin-right: 10%;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  transition: 0.2s transform;\n}\n\n.product-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.product-details[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.product-name[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n\n.product-name[_ngcontent-%COMP%], .product-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #24b7d8;\n  letter-spacing: 2px;\n  font-size: 200%;\n  margin: 4% 0;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.product-details[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.product-img[_ngcontent-%COMP%] {\n  width: 20%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  font-size: x-large;\n  display: flex;\n  flex-direction: column;\n  padding: 0 24px;\n  vertical-align: middle;\n  margin-top: 5%;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  color: rgb(92, 92, 92);\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  letter-spacing: 1px;\n  font-size: large;\n  max-width: 300px;\n}\n\n.product-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.product-quantity[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .product-price[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 32px;\n  text-align: center;\n}\n\n.product-quantity[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: larger;\n  margin-top: 30%;\n  font-size: x-large;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.strike[_ngcontent-%COMP%] {\n  font-size: large;\n  text-decoration: line-through;\n  font-weight: normal;\n}\n\n.detail[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9vcmRlcnMvb3JkZXItZGV0YWlscy1uZXcvcHJvZHVjdC1kZXRhaWwtY2FyZC9wcm9kdWN0LWRldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFByb2R1Y3QgSXRlbSAqL1xuLnByb2R1Y3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDElO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybTtcbn1cblxuLnByb2R1Y3QtaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9kdWN0LW5hbWUgPiBpbWcge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ucHJvZHVjdC1uYW1lLFxuLnByb2R1Y3QtcHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgbWFyZ2luOiA0JSAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzID4gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9kdWN0LWltZyB7XG4gIHdpZHRoOiAyMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLnByb2R1Y3QtZGF0YSB7XG59XG5cbi5wcm9kdWN0LXF1YW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtcXVhbnRpdHkgPiBpbWcsXG4ucHJvZHVjdC1wcmljZSA+IGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LXF1YW50aXR5ID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnN0cmlrZSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZGV0YWlsIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 210:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/products/orders/order-history-new/order-history-new.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryNewComponent": () => (/* binding */ OrderHistoryNewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/order.service */ 8132);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);












const _c0 = function () {
  return ["/"];
};
function OrderHistoryNewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Its Seems Empty Around Here, Lets start by adding few items in the cart. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Show Catalog");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
function OrderHistoryNewComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OrderHistoryNewComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " #");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r15.orderId, " ");
  }
}
function OrderHistoryNewComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OrderHistoryNewComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 27)(1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r16.buyerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r16.buyerPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r16.buyerEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r16.buyerAddress);
  }
}
function OrderHistoryNewComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OrderHistoryNewComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u20B9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r17.finalPrice);
  }
}
function OrderHistoryNewComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    color: a0
  };
};
function OrderHistoryNewComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r8.fetchColor(element_r18.orderStatus)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r18.orderStatus);
  }
}
function OrderHistoryNewComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a1) {
  return ["/products/orders", a1];
};
function OrderHistoryNewComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c2, element_r19.orderId));
  }
}
function OrderHistoryNewComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Track Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a1) {
  return ["/products/delivery", a1];
};
function OrderHistoryNewComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c3, element_r20.orderId));
  }
}
function OrderHistoryNewComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 38);
  }
}
function OrderHistoryNewComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 39);
  }
}
const _c4 = function () {
  return [5, 10, 20];
};
class OrderHistoryNewComponent {
  constructor(location, loadingService, orderService) {
    this.location = location;
    this.loadingService = loadingService;
    this.orderService = orderService;
    this.orderHistory = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource();
    // Specify columns tht should be rendered, must match names of matColumnDef
    // ID is not beign displayed as its not present here
    this.displayedColumns = ['orderId', 'buyerName', 'finalPrice', 'orderStatus', 'details', 'history'];
  }
  ngOnInit() {
    this.fetchAllOrders();
  }
  fetchAllOrders() {
    this.orderService.fetchByLoggedInUserId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe({
      next: res => {
        this.dataSource.data = res.reverse();
        this.orderHistory = res;
      }
    });
  }
  goBack() {
    this.location.back();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  doFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  fetchColor(status) {
    switch (status) {
      case 'DELIVERED':
        return 'green';
      case 'CANCELLED':
        return 'red';
      default:
        return '#1f9db9';
    }
  }
}
OrderHistoryNewComponent.ɵfac = function OrderHistoryNewComponent_Factory(t) {
  return new (t || OrderHistoryNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService));
};
OrderHistoryNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OrderHistoryNewComponent,
  selectors: [["app-order-history-new"]],
  viewQuery: function OrderHistoryNewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 31,
  vars: 7,
  consts: [[1, "parent", "px-1", "px-md-4", "py-4", "mx-auto"], [1, "card"], [1, "row", "d-flex", "justify-content-between", "px-3", "top"], [1, "logo-container"], [1, "title-main"], ["class", "section-empty", 4, "ngIf"], [1, "section-table"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "orderId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "product-id", 4, "matCellDef"], ["matColumnDef", "buyerName"], ["mat-cell", "", "class", "contact", 4, "matCellDef"], ["matColumnDef", "finalPrice"], ["mat-cell", "", "class", "price", 4, "matCellDef"], ["matColumnDef", "orderStatus"], ["mat-cell", "", "class", "delivery", 4, "matCellDef"], ["matColumnDef", "details"], ["mat-cell", "", "class", "action-icon", 4, "matCellDef"], ["matColumnDef", "history"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], [1, "section-empty"], [1, "primary-btn", 3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "product-id"], ["mat-cell", "", 1, "contact"], [1, "name"], [1, "phone"], [1, "email"], [1, "address"], ["mat-cell", "", 1, "price"], ["mat-cell", "", 1, "delivery"], [3, "ngStyle"], ["mat-cell", "", 1, "action-icon"], ["src", "assets/images/info.svg", "alt", "", 3, "routerLink"], ["src", "assets/images/package_track.svg", "alt", "", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function OrderHistoryNewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "My Order History");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OrderHistoryNewComponent_div_7_Template, 4, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OrderHistoryNewComponent_th_11_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OrderHistoryNewComponent_td_12_Template, 4, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, OrderHistoryNewComponent_th_14_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, OrderHistoryNewComponent_td_15_Template, 9, 4, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, OrderHistoryNewComponent_th_17_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, OrderHistoryNewComponent_td_18_Template, 4, 1, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, OrderHistoryNewComponent_th_20_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, OrderHistoryNewComponent_td_21_Template, 3, 4, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, OrderHistoryNewComponent_th_23_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, OrderHistoryNewComponent_td_24_Template, 2, 3, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, OrderHistoryNewComponent_th_26_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, OrderHistoryNewComponent_td_27_Template, 2, 3, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, OrderHistoryNewComponent_tr_28_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, OrderHistoryNewComponent_tr_29_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "mat-paginator", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orderHistory.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c4))("pageSize", 5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator],
  styles: [".parent[_ngcontent-%COMP%] {\n  \n  overflow-x: hidden;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  z-index: 0;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  padding: 20px;\n  margin: 4% 8%;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 100px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.title[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: scale(1.2);\n}\n\n.summary[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  text-transform: uppercase;\n  font-size: 150%;\n  width: 100%;\n  transition: 0.2s;\n}\n\n.summary[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.02);\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  letter-spacing: 1.2px;\n  font-weight: 600;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 10%;\n  border-top: 3px solid #fb5a69;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.title-main[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 200%;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.section-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n\ntr[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\ntd[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.product-id[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .delivery[_ngcontent-%COMP%] {\n  letter-spacing: 1.5px;\n  font-size: x-large;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.product-id[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1f9db9;\n}\n\n.product-edit[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.product-add[_ngcontent-%COMP%]:hover {\n  transform: scale(1.8);\n}\n\n.product-status[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  max-width: 300px;\n  padding: 4px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  width: 50%;\n}\n\n.contact[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: x-large;\n  letter-spacing: 1.5px;\n}\n\n.phone[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  margin-top: 8px !important;\n  font-size: larger;\n  font-weight: 500;\n}\n\n.email[_ngcontent-%COMP%] {\n  margin-top: 2px !important;\n  letter-spacing: 1px;\n  color: rgb(88, 88, 88);\n}\n\n.action-icon[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform: scale(1.5);\n  text-align: center;\n  vertical-align: middle;\n  margin: 24px;\n  outline: none;\n  border: none;\n  transition: 0.2s;\n}\n\n.action-icon[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover {\n  transform: scale(2);\n}\n\n.section-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: x-large;\n  margin: 24px 10%;\n  font-weight: 300;\n  letter-spacing: 2px;\n  line-height: 30px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9vcmRlcnMvb3JkZXItaGlzdG9yeS1uZXcvb3JkZXItaGlzdG9yeS1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTs7RUFFRSxhQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUVGOztBQUNBOztHQUFBO0FBR0E7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxnQkFBQTtBQUdGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSwwQ0FBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUdGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudCB7XG4gIC8qIHBhZGRpbmc6IDUlOyAqL1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQge1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA0JSA4JTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aXRsZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnRpdGxlOmhvdmVyLFxuLnRpdGxlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uc3VtbWFyeSB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uc3VtbWFyeTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMDIpO1xufVxuXG4uaXRlbSB7XG4gIGNvbG9yOiAjMWY5ZGI5O1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi8qIC5zZXBhcmF0b3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59ICovXG4ubG9nby1jb250YWluZXIgaHIge1xuICB3aWR0aDogMTAlO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZiNWE2OTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmxvZ28tY29udGFpbmVyOmhvdmVyIGhyIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi50aXRsZS1tYWluIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24tdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGhlYWQgdHIge1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxudHIge1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnRkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudHI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wcm9kdWN0LWlkLCAucHJpY2UsIC5kZWxpdmVyeSB7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJvZHVjdC1pZCA+IHNwYW4ge1xuICBjb2xvcjogIzFmOWRiOTtcbn1cblxuLnByb2R1Y3QtZWRpdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3QtYWRkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xufVxuXG4ucHJvZHVjdC1zdGF0dXMge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uY29udGFjdCB7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRhY3QgPiBwIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubmFtZSB7XG4gIGNvbG9yOiAjMWY5ZGI5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cblxuLnBob25lIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZW1haWwge1xuICBtYXJnaW4tdG9wOiAycHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHJnYig4OCwgODgsIDg4KTtcbn1cblxuLmFjdGlvbi1pY29uID4gaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAyNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5hY3Rpb24taWNvbiA+IGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XG59XG5cbi5zZWN0aW9uLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIG1hcmdpbjogMjRweCAxMCU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6389:
/*!****************************************************************!*\
  !*** ./src/app/components/products/orders/orders.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OrdersComponent {
  constructor() {}
  ngOnInit() {}
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
  return new (t || OrdersComponent)();
};
OrdersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OrdersComponent,
  selectors: [["app-orders"]],
  decls: 2,
  vars: 0,
  template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "orders works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9227:
/*!**********************************************************************************!*\
  !*** ./src/app/components/products/product-details/product-details.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 9426);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_auth_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-modal.service */ 2427);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_cart_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart-confirm-modal.service */ 1974);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











const _c0 = function (a0) {
  return {
    backgroundColor: a0
  };
};
function ProductDetailsComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, ctx_r0.badgeColor()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" -", ctx_r0.product == null ? null : ctx_r0.product.discountPercent, "% ");
  }
}
function ProductDetailsComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 35);
  }
}
const _c1 = function (a0) {
  return {
    "background-image": a0
  };
};
const _c2 = function () {
  return ["/"];
};
const _c3 = function () {
  return ["/products/cart"];
};
class ProductDetailsComponent {
  constructor(loadingService, router, location, productService, route, eventService, authService, authModalService, cartService, cartModal) {
    this.loadingService = loadingService;
    this.router = router;
    this.location = location;
    this.productService = productService;
    this.route = route;
    this.eventService = eventService;
    this.authService = authService;
    this.authModalService = authModalService;
    this.cartService = cartService;
    this.cartModal = cartModal;
    this.count = 1;
    this.product = null;
  }
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.initializeProductDetails();
  }
  initializeProductDetails() {
    this.productService.fetchById(this.productId).subscribe(res => {
      this.product = res;
    }).closed;
  }
  increment() {
    if (this.count >= this.product.productStock) this.count = this.product.productStock;else this.count++;
  }
  decrement() {
    if (this.count <= 1) this.count = 1;else this.count--;
  }
  addNewItem(productId) {
    const item = {
      productId,
      quantity: this.count
    };
    if (this.checkForAuthAndShowPopUp()) {
      this.loadingService.enableLoading();
      this.cartService.addToCart(item).subscribe(res => {
        this.loadingService.disableLoading();
        this.cartModal.open();
        this.router.navigateByUrl('/');
      });
    }
  }
  goBack() {
    this.location.back();
  }
  redirectToCategory() {
    this.eventService.categoryChanged.next(this.product.categoryName);
    this.router.navigateByUrl('/');
  }
  checkForAuthAndShowPopUp() {
    if (this.authService.isAuthenticated()) return true;
    this.authModalService.open(this.router.url);
    return false;
  }
  badgeColor() {
    if (this.product?.discountPercent <= 10) return '#FFCE03';else if (this.product?.discountPercent <= 20) return '#FD9A01';else if (this.product?.discountPercent <= 30) return '#FD6104';else if (this.product?.discountPercent <= 40) return '#FF2C05';else return '#F00505';
  }
  reducedPrice() {
    if (this.product?.discountPercent === 0) return this.product?.productPrice;
    return this.product?.productPrice - this.product?.productPrice * 0.01 * this.product?.discountPercent;
  }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
  return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_modal_service__WEBPACK_IMPORTED_MODULE_4__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_cart_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__.CartConfirmModalService));
};
ProductDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ProductDetailsComponent,
  selectors: [["app-product-details"]],
  decls: 52,
  vars: 20,
  consts: [[1, "root"], [1, "background", 3, "ngStyle"], [1, "content"], [1, "my-card"], [1, "row"], [1, "col-6", "front-img", 3, "ngStyle"], [1, "col-6", "section-product"], [1, "p-5"], [1, "section-back", 3, "click"], ["src", "assets/images/back.svg", "alt", "", 1, "back-img"], [1, "back-text"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", 3, "click"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "product-title"], ["class", "badge", 3, "ngStyle", 4, "ngIf"], [1, "product-price"], [1, "reduced"], [1, "product-description"], [1, "quantity"], [1, "quantity-btn-left", 3, "click"], ["type", "number", "placeholder", "1", "onkeydown", "return false", 1, "quantity-input", 3, "ngModel", "ngModelChange"], [1, "quantity-btn-right", 3, "click"], [1, "quantity-stock"], [1, "cart-buttons"], [1, "primary-btn", 3, "click"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "secondary-btn", 3, "routerLink"], [1, "section-info", 3, "click"], ["src", "assets/images/search.svg", "alt", "", 1, "info-img"], [1, "info-text"], [1, "badge", 3, "ngStyle"], [1, "spinner-border", "spinner-border-sm"]],
  template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_div_click_8_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Back to Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nav", 11)(13, "ol", 12)(14, "li", 13)(15, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_li_click_17_listener() {
        return ctx.redirectToCategory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h1", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ProductDetailsComponent_span_24_Template, 2, 4, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 22)(32, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_32_listener() {
        return ctx.decrement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ProductDetailsComponent_Template_input_ngModelChange_34_listener($event) {
        return ctx.count = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_35_listener() {
        return ctx.increment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " + ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 27)(40, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_40_listener() {
        return ctx.addNewItem(ctx.product.productId);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ProductDetailsComponent_span_41_Template, 1, 0, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Add to Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " View Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "br")(46, "br")(47, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_div_click_48_listener() {
        return ctx.redirectToCategory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Search for similar products");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c1, "url(" + (ctx.product == null ? null : ctx.product.productIcon) + "), url(assets/images/celebration2.jpg)"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c1, "url(" + (ctx.product == null ? null : ctx.product.productIcon) + "), url(assets/images/celebration2.jpg)"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.categoryName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.productName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.productName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.discountPercent) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.reducedPrice(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.product == null ? null : ctx.product.productPrice, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.product == null ? null : ctx.product.productDescription, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.count);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Available Stock: ", ctx.product == null ? null : ctx.product.productStock, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](19, _c3));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel],
  styles: [".background[_ngcontent-%COMP%] {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  filter: blur(12px);\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 5%;\n}\n\n.root[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 178px);\n}\n\n.front-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 2px 0 0 2px;\n  opacity: 0.9;\n  transition: opacity 0.2s;\n}\n\n.front-img[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.my-card[_ngcontent-%COMP%] {\n  \n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n}\n\n.section-product[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n  min-height: 400px;\n}\n\n.product-title[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-weight: bold;\n  font-size: xx-large;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n\n.product-title[_ngcontent-%COMP%]::after {\n  display: block;\n  height: 2px;\n  background-color: #fb5a69;\n  content: \" \";\n  width: 100px;\n  margin-top: 20px;\n  transition: 0.2s;\n}\n\n.product-title[_ngcontent-%COMP%]:hover::after {\n  width: 200px;\n}\n\n\n\n.section-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.1s;\n}\n\n.section-back[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n\n.back-img[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n}\n\n.back-text[_ngcontent-%COMP%] {\n  padding: 12px;\n  vertical-align: middle;\n  letter-spacing: 0.5px;\n  font-size: 110%;\n  font-weight: 550;\n  color: #24b7d8;\n  text-transform: uppercase;\n  \n}\n\n\n.breadcrumb[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0;\n  margin-top: 16px;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  align-items: center;\n  font-size: 100%;\n  text-decoration: none;\n  color: #24b7d8;\n  border-bottom: 1px solid transparent;\n  transition: 0.2s ease-out;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #21a0bd;\n  border-bottom: 1px solid #21a0bd;\n}\n\n\n.product-price[_ngcontent-%COMP%] {\n  color: #24b7d8;\n  font-weight: lighter;\n  font-size: 200%;\n}\n\n\n.product-title[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: #3f3f3f;\n}\n\n\n\n.cart-btn[_ngcontent-%COMP%], .checkout-btn[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n  margin-right: 12px;\n  margin-top: 12px;\n}\n\n.cart-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  transform: scale(1.1);\n}\n\n.checkout-btn[_ngcontent-%COMP%] {\n  background: #fb5a69;\n}\n\n.checkout-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #fb5a69;\n  transform: scale(1.1);\n}\n\n\n.section-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.1s;\n  margin-top: 12px;\n  font-style: italic;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  transform: scale(1);\n  font-weight: lighter;\n  vertical-align: middle;\n  border-bottom: 1px solid transparent;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  color: rgb(133, 133, 133);\n  padding: 8px;\n}\n\n.section-info[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid rgb(133, 133, 133);\n}\n\n\n.quantity-btn-right[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: 0.2s;\n  font-size: 120%;\n  border: 2px solid transparent;\n}\n\n.quantity-btn-right[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  border: 2px solid #24b7d8;\n}\n\n\n.quantity-btn-left[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  transition: 0.2s;\n  font-size: 120%;\n  border: 2px solid transparent;\n}\n\n.quantity-btn-left[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  border: 2px solid #24b7d8;\n}\n\n.quantity-input[_ngcontent-%COMP%] {\n  padding: 8px;\n  width: 6%;\n  color: black;\n  border: none;\n  outline: none;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  font-size: 120%;\n}\n\n\n.quantity-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .quantity-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.quantity-stock[_ngcontent-%COMP%] {\n  color: rgba(136, 136, 136, 0.8);\n  padding-top: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  letter-spacing: 1.3px;\n  font-size: 130%;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  \n  padding: 4px !important;\n  color: #ffffff;\n  background-color: #1f9db9;\n  border-radius: 9px;\n}\n\n.badge[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.reduced[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #7babb6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0EsdUNBQUE7QUFDQTtFQUNFLFNBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUEsd0JBQUE7QUFFQSxjQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFFQSxXQUFBO0FBQ0E7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxREFBQTtBQUNGOztBQUVBLGNBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUdBLFVBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQSxrQkFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0EsOEJBQUE7QUFDQSxZQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQSxtQkFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFERjs7QUFHQTtFQUNFLDJDQUFBO0FBQUY7O0FBR0EsYUFBQTtBQUVBO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0EsYUFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBLG1DQUFBO0FBQ0E7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNBOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWx0ZXI6IGJsdXIoMTJweCk7XG59XG5cbi5jb250ZW50e1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLnJvb3Qge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc4cHgpO1xufVxuXG4uZnJvbnQtaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xuICBvcGFjaXR5OiAwLjk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLmZyb250LWltZzpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4vKiBGaXhlcyBleHRyYSB3aGl0ZSBjb250ZW50IG9uIHJpZ2h0ICovXG4ucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubXktY2FyZCB7XG4gIC8qIHdpZHRoOiA3MCU7ICovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uc2VjdGlvbi1wcm9kdWN0IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi5wcm9kdWN0LXRpdGxle1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi5wcm9kdWN0LXRpdGxlOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNWE2OTtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnByb2R1Y3QtdGl0bGU6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4vKiBCYWNrIEJ1dHRvbiBTZWN0aW9uICovXG5cbi8qIENvbnRhaW5lciAqL1xuLnNlY3Rpb24tYmFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG4uc2VjdGlvbi1iYWNrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLyogQnV0dG9uICovXG4uYmFjay1pbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5iYWNrLXRleHQge1xuICBwYWRkaW5nOiAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGZvbnQtc2l6ZTogMTEwJTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xufVxuXG4vKiBCcmVha2NydW0gKi9cbi5icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSBhIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjRiN2Q4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjMjFhMGJkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIxYTBiZDtcbn1cblxuXG4vKiBQcmljZSAqL1xuLnByb2R1Y3QtcHJpY2Uge1xuICBjb2xvcjogIzI0YjdkODtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbn1cblxuLyogUHJvZHVjdCB0aXRsZSAqL1xuLnByb2R1Y3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzNmM2YzZjtcbn1cblxuLyogQ2FydCBhbmQgY2hlY2tvdXQgYnV0dG9ucyAqL1xuLyogQnV0dG9ucyAqL1xuLmNhcnQtYnRuLCAuY2hlY2tvdXQtYnRue1xuICBiYWNrZ3JvdW5kOiAjMjRiN2Q4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5jYXJ0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzI0YjdkODtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2hlY2tvdXQtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZiNWE2OTtcblxufVxuXG4uY2hlY2tvdXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjZmI1YTY5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi8qIEluZm8gQ29udGFpbmVyICovXG4uc2VjdGlvbi1pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uaW5mby10ZXh0e1xuICBjb2xvcjogcmdiKDEzMywgMTMzLCAxMzMpO1xuICBwYWRkaW5nOiA4cHg7XG59XG4uc2VjdGlvbi1pbmZvOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMzMsIDEzMywgMTMzKTtcbn1cblxuLyogUXVhbnRpdHkgKi9cblxuLnF1YW50aXR5LWJ0bi1yaWdodCB7XG4gIGJhY2tncm91bmQ6ICMyNGI3ZDg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEyMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnF1YW50aXR5LWJ0bi1yaWdodDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzI0YjdkODtcbiAgYm9yZGVyOiAycHggc29saWQgIzI0YjdkODtcbn1cblxuLyogUXVhbnRpdHkgKi9cbi5xdWFudGl0eS1idG4tbGVmdCB7XG4gIGJhY2tncm91bmQ6ICMyNGI3ZDg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMjAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5xdWFudGl0eS1idG4tbGVmdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzI0YjdkODtcbiAgYm9yZGVyOiAycHggc29saWQgIzI0YjdkODtcbn1cblxuLnF1YW50aXR5LWlucHV0IHtcbiAgcGFkZGluZzogOHB4O1xuICB3aWR0aDogNiU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbn1cblxuLyogUmVtb3ZlcyBhcnJvdyBmcm9tIGlucHV0IGZpZWxkICovXG4ucXVhbnRpdHktaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4ucXVhbnRpdHktaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnF1YW50aXR5LXN0b2NrIHtcbmNvbG9yOiByZ2JhKDEzNiwgMTM2LCAxMzYsIDAuOCk7XG5wYWRkaW5nLXRvcDogOHB4O1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBsZXR0ZXItc3BhY2luZzogMS4zcHg7XG4gIGZvbnQtc2l6ZTogMTMwJTtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhZGdlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbiAgcGFkZGluZzogNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY5ZGI5O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG4uYmFkZ2U6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWR1Y2VkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjN2JhYmI2O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7307:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/products/product-list/category-carausel/category-carausel.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryCarauselComponent": () => (/* binding */ CategoryCarauselComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/event.service */ 9426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function CategoryCarauselComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryCarauselComponent_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const category_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.triggerCategoryChange(category_r1.categoryName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", i_r2 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-slide-to", i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", category_r1.categoryImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r1.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r1.categoryDescription);
  }
}
class CategoryCarauselComponent {
  constructor(categoryService, eventService) {
    this.categoryService = categoryService;
    this.eventService = eventService;
    this.categories = [];
  }
  ngOnInit() {
    this.fetchCategories();
  }
  fetchCategories() {
    this.categoryService.fetchAllCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(res => this.categories = res);
  }
  triggerCategoryChange(categoryName) {
    this.eventService.categoryChanged.next(categoryName);
  }
}
CategoryCarauselComponent.ɵfac = function CategoryCarauselComponent_Factory(t) {
  return new (t || CategoryCarauselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService));
};
CategoryCarauselComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CategoryCarauselComponent,
  selectors: [["app-category-carausel"]],
  decls: 11,
  vars: 1,
  consts: [["id", "carouselExampleInterval", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], ["class", "carousel-item", "data-interval", "2000", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleInterval", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleInterval", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["data-interval", "2000", 1, "carousel-item", 3, "ngClass", "click"], ["alt", "...", 1, "d-block", 3, "src"], [1, "carousel-caption", "d-none", "d-md-block"]],
  template: function CategoryCarauselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CategoryCarauselComponent_div_2_Template, 7, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["#carouselExampleInterval[_ngcontent-%COMP%] {\n  margin: 0 3%;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n  opacity: 0.95;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\nh5[_ngcontent-%COMP%] {\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);\n  font-size: 300%;\n  font-weight: bold;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 200%;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWxpc3QvY2F0ZWdvcnktY2FyYXVzZWwvY2F0ZWdvcnktY2FyYXVzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLDBCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIjY2Fyb3VzZWxFeGFtcGxlSW50ZXJ2YWwge1xuICBtYXJnaW46IDAgMyU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuOTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5oNSB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBmb250LXNpemU6IDIwMCU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3249:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/products/product-list/product-card/product-card.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCardComponent": () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-24 01:56:50
 * @modify date 2021-01-24 01:56:50
 * @desc [description]
 */





function ProductCardComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 13);
  }
}
function ProductCardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 14);
  }
}
const _c0 = function (a0) {
  return {
    backgroundColor: a0
  };
};
function ProductCardComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r2.badgeColor()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - ", ctx_r2.discountPercent, "% ");
  }
}
const _c1 = function (a0) {
  return {
    visibility: a0
  };
};
const _c2 = function (a1) {
  return ["/products/", a1];
};
const _c3 = function (a0) {
  return {
    filter: a0
  };
};
class ProductCardComponent {
  constructor(loadingService) {
    this.loadingService = loadingService;
    this.discountPercent = 50;
    this.addToCartEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {}
  addNewItem(productId) {
    this.addToCartEvent.emit(productId);
  }
  isProductAvailable() {
    return this.productStatus !== 'ENABLED' || this.productQuantity <= 0;
  }
  badgeColor() {
    if (this.discountPercent <= 10) return '#FFCE03';else if (this.discountPercent <= 20) return '#FD9A01';else if (this.discountPercent <= 30) return '#FD6104';else if (this.discountPercent <= 40) return '#FF2C05';else return '#F00505';
  }
  reducedPrice() {
    if (this.discountPercent === 0) return this.productPrice;
    return this.productPrice - this.productPrice * 0.01 * this.discountPercent;
  }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) {
  return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
};
ProductCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProductCardComponent,
  selectors: [["app-product-card"]],
  inputs: {
    productName: "productName",
    productDescription: "productDescription",
    productImageUrl: "productImageUrl",
    productPrice: "productPrice",
    productId: "productId",
    productStatus: "productStatus",
    productQuantity: "productQuantity",
    discountPercent: "discountPercent"
  },
  outputs: {
    addToCartEvent: "addToCartEvent"
  },
  decls: 20,
  vars: 18,
  consts: [[1, "img-container"], [1, "overlay", 3, "ngStyle"], [1, "details", 3, "routerLink"], [1, "add", 3, "click"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "product-img", 3, "src", "alt", "ngStyle", "error"], ["class", "product-img-sold", 4, "ngIf"], [1, "product-body"], [1, "product-name"], ["class", "badge", 3, "ngStyle", 4, "ngIf"], [1, "product-description"], [1, "product-price"], [1, "reduced"], [1, "spinner-border", "spinner-border-sm"], [1, "product-img-sold"], [1, "badge", 3, "ngStyle"]],
  template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_4_listener() {
        return ctx.addNewItem(ctx.productId);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductCardComponent_span_5_Template, 1, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Add to Cart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function ProductCardComponent_Template_img_error_7_listener($event) {
        return $event.target.src = "assets/images/celebration2.jpg";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductCardComponent_div_8_Template, 1, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "h1", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductCardComponent_span_12_Template, 2, 4, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.isProductAvailable() ? "hidden" : "visible"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, ctx.productId));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.productImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.productName)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c3, ctx.isProductAvailable() ? "blur(4px)" : "0"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isProductAvailable());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.productName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.discountPercent > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.productDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u20B9 ", ctx.reducedPrice(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.productPrice, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: [".product-img[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  height: 240px;\n  \n  object-fit: cover;\n  \n  object-position: center;\n  \n  transition: 0.2s;\n}\n\n.product-body[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n  text-align: center;\n}\n\n\n.product-body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n\n.product-img-sold[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: url('assets/images/sold_out2.png');\n  position: absolute;\n  background-size: contain;\n  background-repeat: no-repeat;\n  \n  filter: drop-shadow(5px 5px 5px #222);\n  transform: scale(0.8);\n  top: 30%;\n}\n\n\n.img-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n\n\n.details[_ngcontent-%COMP%], .add[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n\n\n.img-container[_ngcontent-%COMP%]:hover   .product-img[_ngcontent-%COMP%] {\n  filter: blur(2px);\n  z-index: 0;\n}\n\n\n.img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n  top: 30%;\n  \n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n\n.img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 60%;\n  \n  z-index: 1;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n\n.details[_ngcontent-%COMP%], .add[_ngcontent-%COMP%] {\n  background: #24b7d8;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  color: white;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  padding: 12px;\n  display: inline-block;\n  font-size: medium;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 4px;\n  transition: 0.2s;\n}\n\n.details[_ngcontent-%COMP%]:hover, .add[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #24b7d8;\n  transform: scale(1.2);\n}\n\n\n.product-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 130%;\n  color: rgb(68, 68, 68);\n}\n\n.product-description[_ngcontent-%COMP%] {\n  font-size: 120%;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n\n\n.img-container[_ngcontent-%COMP%]::after {\n  display: block;\n  height: 2px;\n  background-color: #fb5a69;\n  content: \" \";\n  width: 100px;\n  margin: 0 auto;\n  margin-top: 20px;\n  transition: 0.2s;\n}\n\n.img-container[_ngcontent-%COMP%]:hover::after {\n  \n  transform: scaleX(1.5);\n}\n\n.product-price[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  font-size: 130%;\n  font-weight: 500;\n}\n\nhr[_ngcontent-%COMP%] {\n  height: 12px;\n  border: transparent;\n}\n\n.badge[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  \n  padding: 4px !important;\n  color: #ffffff;\n  background-color: #1f9db9;\n  border-radius: 9px;\n}\n\n.badge[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.reduced[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #7babb6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBQUE7QUFRQTtFQUNFLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQSw0Q0FBQTtBQUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQSxzQ0FBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQSxrQ0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQSxnQ0FBQTtBQUNBOztFQUVFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBLG9DQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQSx5Q0FBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUEseUNBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUEsWUFBQTtBQUNBOztFQUVFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQSxrQkFBQTtBQUVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBLDJDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgR2FnYW5kZWVwIFNpbmdoXG4gKiBAZW1haWwgc2luZ2guZ2FnYW5kZWVwMzkxMUBnbWFpbC5jb21cbiAqIEBjcmVhdGUgZGF0ZSAyMDIxLTAxLTI0IDAxOjMzOjAzXG4gKiBAbW9kaWZ5IGRhdGUgMjAyMS0wMS0yNCAwMTozMzowM1xuICogQGRlc2MgW2Rlc2NyaXB0aW9uXVxuICovXG5cbi5wcm9kdWN0LWltZyB7XG4gIC8qIE11c3QgaGF2ZSBmdWxsIHdpZHRoIGFzIHBhcmVudCAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgLyogU2NhbGUgb2JqZWN0IHdoaWxlIG1hbnRhaW5pbmcgYXNwZWN0IHJhdGlvICovXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvKiBNb3ZlZCAgKi9cbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIC8qIENvZGUgcmVxdWllZCBmb3Igb3V0IG9mIHN0b2NrICovXG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5wcm9kdWN0LWJvZHkge1xuICAvKiBGbGV4IG1ha2VzIGNzcyBlZGl0aW5nIGVhc2llciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiBSZW1vdmVzIHVubmVjZXNzYXJ5IHBhZGRpbmcgaW5zaWRlIGJvZHkgKi9cbi5wcm9kdWN0LWJvZHkgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogRGlzcGxheSBUaHVibmFpbCBpYW1nZSBpbiBjYXRhbG9nICovXG4ucHJvZHVjdC1pbWctc29sZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIl5hc3NldHMvaW1hZ2VzL3NvbGRfb3V0Mi5wbmdcIik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvKiBBZGRzIHNoYWRvdyB0byBpbWFnZSAqL1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCA1cHggNXB4ICMyMjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRvcDogMzAlO1xufVxuXG4vKiBSZWxhdGVkIHRvIGFuaW1hdGlvbiBvbiBob3ZlciAqL1xuLmltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEluaXRpYWxseSBidXR0b24gYXJlIGhpZGRlbiAqL1xuLmRldGFpbHMsXG4uYWRkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBBZGluZyBibHVyIGJlaGluZCBpbiBiYWNrZ3JvdW5kICovXG4uaW1nLWNvbnRhaW5lcjpob3ZlciAucHJvZHVjdC1pbWcge1xuICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgei1pbmRleDogMDtcbn1cblxuLyogQ2VudGVyaW5nIGJ1dHRvbiBhYm9jZSB0ZSBiYWNrZ3JvdW5kICovXG4uaW1nLWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSAuZGV0YWlscyB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMzAlO1xuICAvKiBDZW50ZXIgbGlnbiAqL1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLyogQ2VudGVyaW5nIGJ1dHRvbiBhYm9jZSB0ZSBiYWNrZ3JvdW5kICovXG4uaW1nLWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSAuYWRkIHtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiA2MCU7XG4gIC8qIENlbnRlciBsaWduICovXG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4vKiBCdXR0b25zICovXG4uZGV0YWlscyxcbi5hZGQge1xuICBiYWNrZ3JvdW5kOiAjMjRiN2Q4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uZGV0YWlsczpob3Zlcixcbi5hZGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogUHJvZHVjdHMgZGF0YSAqL1xuXG4ucHJvZHVjdC1uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTMwJTtcbiAgY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEyMCU7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogQWRkZWQgYSBsaW5lIGJldHdlZW4gaW1hZ2UgYW5kIHByb2R1Y3QgKi9cbi5pbWctY29udGFpbmVyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiNWE2OTtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5pbWctY29udGFpbmVyOmhvdmVyOjphZnRlciB7XG4gIC8qIHdpZHRoOiAyMDBweDsgKi9cbiAgdHJhbnNmb3JtOiBzY2FsZVgoMS41KTtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBjb2xvcjogIzFmOWRiOTtcbiAgZm9udC1zaXplOiAxMzAlO1xuICBmb250LXdlaWdodDogNTAwO1xuXG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAgMTJweDtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbn1cblxuLmJhZGdlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbiAgcGFkZGluZzogNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY5ZGI5O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG4uYmFkZ2U6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWR1Y2VkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjN2JhYmI2O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9174:
/*!****************************************************************************!*\
  !*** ./src/app/components/products/product-list/product-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/event.service */ 9426);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var src_app_services_auth_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-modal.service */ 2427);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_cart_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart-confirm-modal.service */ 1974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _category_carausel_category_carausel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-carausel/category-carausel.component */ 7307);
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-card/product-card.component */ 3249);













function ProductListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-category-carausel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_2_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductListComponent_div_2_a_6_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const types_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.onChangeSorting(types_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const types_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", types_r7.name, " ");
  }
}
function ProductListComponent_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 12);
  }
}
function ProductListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " All Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 6)(3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ProductListComponent_div_2_a_6_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ProductListComponent_div_2_span_7_Template, 1, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.activeSortType == null ? null : ctx_r1.activeSortType.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.sortByTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.loadingService.loading);
  }
}
function ProductListComponent_div_3_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductListComponent_div_3_img_2_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.resetAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 12);
  }
}
function ProductListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProductListComponent_div_3_img_2_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProductListComponent_div_3_span_3_Template, 1, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.activeCategory, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.activeCategory !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.loadingService.loading);
  }
}
function ProductListComponent_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 12);
  }
}
function ProductListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductListComponent_div_4_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.resetAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProductListComponent_div_4_span_3_Template, 1, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", "Search: " + ctx_r3.productQuery, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.loadingService.loading);
  }
}
function ProductListComponent_app_product_card_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-product-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("addToCartEvent", function ProductListComponent_app_product_card_5_Template_app_product_card_addToCartEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.addToCart($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("productId", item_r17.productId)("productName", item_r17.productName)("productPrice", item_r17.productPrice)("productImageUrl", item_r17.productIcon)("productDescription", item_r17.productDescription)("productStatus", item_r17.productStatus)("productQuantity", item_r17.productStock)("discountPercent", item_r17.discountPercent);
  }
}
class ProductListComponent {
  constructor(loadingService, eventService, productService, modalService, authService, router, cartService, cartConfirmModal) {
    this.loadingService = loadingService;
    this.eventService = eventService;
    this.productService = productService;
    this.modalService = modalService;
    this.authService = authService;
    this.router = router;
    this.cartService = cartService;
    this.cartConfirmModal = cartConfirmModal;
    this.productList = [];
    this.activeCategory = null;
    this.productQuery = null;
    this.page = 0;
    this.sortByTypes = [{
      name: 'Name - ASC',
      sortBy: 'productName',
      direction: 'ASC'
    }, {
      name: 'Name - DESC',
      sortBy: 'productName',
      direction: 'DESC'
    }, {
      name: 'Category - ASC',
      sortBy: 'productCategory_categoryName',
      direction: 'ASC'
    }, {
      name: 'Category - DESC',
      sortBy: 'productCategory_categoryName',
      direction: 'DESC'
    }, {
      name: 'Price High - Low',
      sortBy: 'productPrice',
      direction: 'DESC'
    }, {
      name: 'Price Low - High',
      sortBy: 'productPrice',
      direction: 'ASC'
    }, {
      name: 'Discount High - Low',
      sortBy: 'discountPercent',
      direction: 'DESC'
    }, {
      name: 'Discount Low - High',
      sortBy: 'discountPercent',
      direction: 'ASC'
    }];
    this.activeSortType = this.sortByTypes[0];
    this.previousScrollValue = 0;
  }
  ngOnInit() {
    this.page = 0;
    this.initProducts();
    this.subscribeToCategories();
    this.subscribeToSearchQuery();
  }
  initProducts() {
    this.fetchAllByPage();
  }
  // Fetch from server
  fetchAll() {
    this.loadingService.enableLoading();
    this.productService.fetchAllProducts().subscribe(res => {
      this.productList = res;
      this.loadingService.disableLoading();
    }).closed;
  }
  // Reset all search queries
  resetAll() {
    this.activeSortType = this.sortByTypes[0];
    this.eventService.categoryChanged.next(null);
    this.eventService.searchQueryChanged.next(null);
    this.productQuery = null;
    this.productList = null;
    this.activeCategory = null;
    this.page = 0;
    this.fetchAllByPage();
  }
  addToCart(itemId) {
    let item = {
      productId: itemId,
      quantity: 1
    };
    if (this.checkForAuthAndShowPopUp()) {
      this.loadingService.enableLoading();
      this.cartService.addToCart(item).subscribe(res => {
        this.cartConfirmModal.open();
        this.loadingService.disableLoading();
      });
    }
  }
  checkForAuthAndShowPopUp() {
    if (this.authService.isAuthenticated()) return true;
    this.modalService.open(this.router.url);
    return false;
  }
  // Subbscribe to search
  subscribeToSearchQuery() {
    this.eventService.searchQueryChanged.subscribe(query => {
      this.loadingService.enableLoading();
      // Fetch and unsubscribe
      if (!query) {
        // this.page = 0;
        // this.fetchAllByPage();
      } else this.productService.findByName(query).subscribe(res => {
        this.productQuery = query;
        this.activeCategory = null;
        this.productList = res;
        this.loadingService.disableLoading();
      });
    });
  }
  // Category change subscription
  subscribeToCategories() {
    this.eventService.categoryChanged.subscribe(category => {
      this.loadingService.enableLoading();
      // Reset previous cateogry
      this.activeCategory = null;
      this.productQuery = null;
      if (!category) {
        // this.page = 0;
        // this.fetchAllByPage();
      } else this.productService.findByCategory(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(res => {
        this.productQuery = null;
        this.activeCategory = category;
        this.productList = res;
        this.loadingService.disableLoading();
      });
    });
  }
  onScroll(event) {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100 && !this.activeCategory && !this.productQuery && this.previousScrollValue !== window.innerHeight + window.scrollY) {
      this.previousScrollValue = window.innerHeight + window.scrollY;
      this.page++;
      this.fetchAllByPage();
    }
  }
  fetchAllByPage() {
    this.loadingService.enableLoading();
    this.productService.fetchAllByPaging(this.page, this.activeSortType.sortBy, this.activeSortType.direction)
    // .pipe(take(1))
    .subscribe(res => {
      if (!this.activeCategory && !this.productQuery) if (this.productList && JSON.stringify(this.productList.slice(Math.max(this.productList.length - 10, 0))) != JSON.stringify(res) && !this.sortTypeChanged)
        // Paging works when category and search are null
        this.productList.push(...res);else {
        this.sortTypeChanged = undefined;
        this.productList = res;
      }
      this.loadingService.disableLoading();
    });
  }
  onChangeSorting(item) {
    this.sortTypeChanged = 1;
    this.activeSortType = item;
    this.page = 0;
    this.fetchAllByPage();
  }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
  return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_auth_modal_service__WEBPACK_IMPORTED_MODULE_3__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_cart_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__.CartConfirmModalService));
};
ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ProductListComponent,
  selectors: [["app-product-list"]],
  hostBindings: function ProductListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scroll", function ProductListComponent_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event.target);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
    }
  },
  decls: 6,
  vars: 5,
  consts: [[1, "parent"], ["class", "section-category-carausel", 4, "ngIf"], ["class", "category", 4, "ngIf"], ["class", "product-card", 3, "productId", "productName", "productPrice", "productImageUrl", "productDescription", "productStatus", "productQuantity", "discountPercent", "addToCartEvent", 4, "ngFor", "ngForOf"], [1, "section-category-carausel"], [1, "category"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "spinner-grow", 4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "spinner-grow"], ["class", "category-icon", "data-toggle", "tooltip", "data-placement", "right", "title", "Show all categories", "src", "assets/images/x-circle.svg", "alt", "", 3, "click", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Show all categories", "src", "assets/images/x-circle.svg", "alt", "", 1, "category-icon", 3, "click"], [1, "product-card", 3, "productId", "productName", "productPrice", "productImageUrl", "productDescription", "productStatus", "productQuantity", "discountPercent", "addToCartEvent"]],
  template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductListComponent_div_1_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProductListComponent_div_2_Template, 8, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProductListComponent_div_3_Template, 4, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProductListComponent_div_4_Template, 4, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProductListComponent_app_product_card_5_Template, 1, 8, "app-product-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.activeCategory && !ctx.productQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.activeCategory && !ctx.productQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.productQuery && ctx.activeCategory);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.activeCategory && ctx.productQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.productList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _category_carausel_category_carausel_component__WEBPACK_IMPORTED_MODULE_7__.CategoryCarauselComponent, _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_8__.ProductCardComponent],
  styles: [".parent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: space-evenly;\n  padding: 24px 124px;\n  \n}\n\n.product-card[_ngcontent-%COMP%] {\n  max-width: 20%;\n  min-width: 200px;\n  height: max-content;\n  margin: 12px;\n  border-radius: 4px;\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.2s;\n  cursor: pointer;\n  opacity: 0.9;\n  \n  overflow: hidden;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.1);\n  box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.2);\n  transition: 0.2s;\n}\n\n\n.category[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  \n  font-weight: 1000;\n  font-size: 380%;\n  padding: 36px;\n  letter-spacing: 2px;\n  text-shadow: 1px 1px 2px rgb(211, 211, 211);\n  color: black;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n\n.category-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  cursor: pointer;\n}\n\n\n.spinner-grow[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: #fb5a69;\n  height: 3rem;\n  width: 3rem;\n  margin-left: 24px;\n}\n\n.section-category-carausel[_ngcontent-%COMP%] {\n  \n  width: 100%;\n}\n\n.dropdown[_ngcontent-%COMP%], .dropdown-toggle[_ngcontent-%COMP%] {\n  float: right;\n  background: transparent;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-size: large;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFBQTtBQU9BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQSxlQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBLG9CQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtxQkFBQTtFQUVBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBHYWdhbmRlZXAgU2luZ2hcbiAqIEBlbWFpbCBzaW5naC5nYWdhbmRlZXAzOTExQGdtYWlsLmNvbVxuICogQGNyZWF0ZSBkYXRlIDIwMjEtMDEtMjQgMDE6MzM6MDlcbiAqIEBtb2RpZnkgZGF0ZSAyMDIxLTAxLTI0IDAxOjMzOjA5XG4gKiBAZGVzYyBbZGVzY3JpcHRpb25dXG4gKi9cbi5wYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmc6IDI0cHggMTI0cHg7XG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBtYXgtd2lkdGg6IDIwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgbWFyZ2luOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC45O1xuICAvKiBGaXhlcyBib3JkZXIgcmFkaXVzIG9uIGltYWdlcyAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAwIDAgMTJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4vKiBDYXRlZ29yaWVzICovXG4uY2F0ZWdvcnkge1xuICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBtYXJnaW46IDEycHg7ICovXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICBmb250LXNpemU6IDM4MCU7XG4gIHBhZGRpbmc6IDM2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2IoMjExLCAyMTEsIDIxMSk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhdGVnb3J5LWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5jYXRlZ29yeS1pY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIExvYWRpbmcgc3Bpbm5lciAqL1xuLnNwaW5uZXItZ3JvdyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjZmI1YTY5O1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLnNlY3Rpb24tY2F0ZWdvcnktY2FyYXVzZWwge1xuICAvKiBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHJvcGRvd24sIC5kcm9wZG93bi10b2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDEycHggMTJweCA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3639:
/*!****************************************************************!*\
  !*** ./src/app/components/products/products-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 697);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guards/auth.guard */ 5107);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ 2622);
/* harmony import */ var _cart_new_cart_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-new/cart-new.component */ 4634);
/* harmony import */ var _checkout_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout/cart-summary/cart-summary.component */ 2580);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout/checkout.component */ 4345);
/* harmony import */ var _checkout_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout/payment-success/payment-success.component */ 3939);
/* harmony import */ var _checkout_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/payment/payment.component */ 3026);
/* harmony import */ var _checkout_shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/shipping-details/shipping-details.component */ 4785);
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ 207);
/* harmony import */ var _orders_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orders/delivery-history/delivery-history.component */ 1276);
/* harmony import */ var _orders_order_details_new_order_details_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders/order-details-new/order-details-new.component */ 7491);
/* harmony import */ var _orders_order_history_new_order_history_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/order-history-new/order-history-new.component */ 210);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-details/product-details.component */ 9227);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-list/product-list.component */ 9174);
/* harmony import */ var _view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-profile/view-profile.component */ 247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);



















const routes = [{
  path: '',
  component: _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent,
  children: [{
    path: '',
    component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__.ProductListComponent
  }, {
    path: 'cart',
    component: _cart_new_cart_new_component__WEBPACK_IMPORTED_MODULE_3__.CartNewComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'orders',
    component: _orders_order_history_new_order_history_new_component__WEBPACK_IMPORTED_MODULE_12__.OrderHistoryNewComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'profile',
    component: _view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_15__.ViewProfileComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'editprofile',
    component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__.EditProfileComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'orders/:orderId',
    component: _orders_order_details_new_order_details_new_component__WEBPACK_IMPORTED_MODULE_11__.OrderDetailsNewComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'about',
    component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__.AboutUsComponent
  }, {
    path: 'delivery/:orderId',
    component: _orders_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_10__.DeliveryHistoryComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
  }, {
    path: 'checkout',
    component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
    children: [{
      path: 'summary',
      component: _checkout_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_4__.CartSummaryComponent
    }, {
      path: 'shipping',
      component: _checkout_shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_8__.ShippingDetailsComponent
    }, {
      path: 'payment',
      component: _checkout_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__.PaymentComponent
    }, {
      path: 'success/:orderId',
      component: _checkout_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_6__.PaymentSuccessComponent
    }, {
      path: '',
      redirectTo: 'shipping',
      pathMatch: 'full'
    }]
  }, {
    path: ':productId',
    component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__.ProductDetailsComponent
  }]
}];
class ProductsRoutingModule {}
ProductsRoutingModule.ɵfac = function ProductsRoutingModule_Factory(t) {
  return new (t || ProductsRoutingModule)();
};
ProductsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: ProductsRoutingModule
});
ProductsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 697:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_cart_confirm_modal_cart_confirm_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/cart-confirm-modal/cart-confirm-modal.component */ 5895);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);
/* harmony import */ var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/navigation/navigation.component */ 7714);





class ProductsComponent {
  constructor() {}
  ngOnInit() {}
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || ProductsComponent)();
};
ProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductsComponent,
  selectors: [["app-products"]],
  decls: 7,
  vars: 0,
  consts: [[1, "allButFooter"], [1, "backdrop"], [1, "content"]],
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navigation")(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-cart-confirm-modal")(6, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_cart_confirm_modal_cart_confirm_modal_component__WEBPACK_IMPORTED_MODULE_0__.CartConfirmModalComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent],
  styles: [".content[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  background-image: url('assets/images/celebration3.jpg');\n  width: 100%;\n  height: 100%;\n  filter: blur(12px);\n}\n\n\n\n.allButFooter[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 178px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7Ozs7R0FBQTtBQU1BLHNCQUFBO0FBQ0E7RUFDRSwrQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIl5hc3NldHMvaW1hZ2VzL2NlbGVicmF0aW9uMy5qcGdcIik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYmx1cigxMnB4KTtcbn1cbi8qIC5jb250ZW50IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG59ICovXG5cbi8qIFJlc3BvbnNpdmUgZm9vdGVyICovXG4uYWxsQnV0Rm9vdGVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE3OHB4KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9493:
/*!********************************************************!*\
  !*** ./src/app/components/products/products.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_material_custom_material_custom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/material-custom/material-custom.module */ 2621);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ 2622);
/* harmony import */ var _cart_new_cart_item_card_cart_item_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-new/cart-item-card/cart-item-card.component */ 142);
/* harmony import */ var _cart_new_cart_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-new/cart-new.component */ 4634);
/* harmony import */ var _checkout_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout/cart-summary/cart-summary.component */ 2580);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout/checkout.component */ 4345);
/* harmony import */ var _checkout_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/payment-success/payment-success.component */ 3939);
/* harmony import */ var _checkout_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/payment/payment.component */ 3026);
/* harmony import */ var _checkout_shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/shipping-details/shipping-details.component */ 4785);
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ 207);
/* harmony import */ var _orders_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders/delivery-history/delivery-history.component */ 1276);
/* harmony import */ var _orders_order_details_new_order_details_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/order-details-new/order-details-new.component */ 7491);
/* harmony import */ var _orders_order_details_new_product_detail_card_product_detail_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orders/order-details-new/product-detail-card/product-detail-card.component */ 6349);
/* harmony import */ var _orders_order_history_new_order_history_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/order-history-new/order-history-new.component */ 210);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orders/orders.component */ 6389);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-details/product-details.component */ 9227);
/* harmony import */ var _product_list_category_carausel_category_carausel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-list/category-carausel/category-carausel.component */ 7307);
/* harmony import */ var _product_list_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-list/product-card/product-card.component */ 3249);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-list/product-list.component */ 9174);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products-routing.module */ 3639);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products.component */ 697);
/* harmony import */ var _view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-profile/view-profile.component */ 247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2560);


























class ProductsModule {}
ProductsModule.ɵfac = function ProductsModule_Factory(t) {
  return new (t || ProductsModule)();
};
ProductsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
  type: ProductsModule
});
ProductsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_20__.ProductsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, src_app_material_custom_material_custom_module__WEBPACK_IMPORTED_MODULE_0__.MaterialCustomModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](ProductsModule, {
    declarations: [_products_component__WEBPACK_IMPORTED_MODULE_21__.ProductsComponent, _cart_new_cart_new_component__WEBPACK_IMPORTED_MODULE_4__.CartNewComponent, _orders_order_history_new_order_history_new_component__WEBPACK_IMPORTED_MODULE_14__.OrderHistoryNewComponent, _view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_22__.ViewProfileComponent, _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__.EditProfileComponent, _orders_order_details_new_order_details_new_component__WEBPACK_IMPORTED_MODULE_12__.OrderDetailsNewComponent, _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__.AboutUsComponent, _orders_delivery_history_delivery_history_component__WEBPACK_IMPORTED_MODULE_11__.DeliveryHistoryComponent, _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutComponent, _checkout_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_5__.CartSummaryComponent, _checkout_shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_9__.ShippingDetailsComponent, _checkout_payment_payment_component__WEBPACK_IMPORTED_MODULE_8__.PaymentComponent, _checkout_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_7__.PaymentSuccessComponent, _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_16__.ProductDetailsComponent, _orders_orders_component__WEBPACK_IMPORTED_MODULE_15__.OrdersComponent, _product_list_category_carausel_category_carausel_component__WEBPACK_IMPORTED_MODULE_17__.CategoryCarauselComponent, _orders_order_details_new_product_detail_card_product_detail_card_component__WEBPACK_IMPORTED_MODULE_13__.ProductDetailCardComponent, _cart_new_cart_item_card_cart_item_card_component__WEBPACK_IMPORTED_MODULE_3__.CartItemCardComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__.ProductListComponent, _product_list_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_18__.ProductCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_20__.ProductsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, src_app_material_custom_material_custom_module__WEBPACK_IMPORTED_MODULE_0__.MaterialCustomModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 247:
/*!****************************************************************************!*\
  !*** ./src/app/components/products/view-profile/view-profile.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProfileComponent": () => (/* binding */ ViewProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/event.service */ 9426);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_auth_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth-modal.service */ 2427);
/* harmony import */ var src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/manage-user.service */ 1771);








const _c0 = function () {
  return {
    "background-image": "url(assets/images/celebration2.jpg)"
  };
};
const _c1 = function () {
  return ["/products/editprofile"];
};
class ViewProfileComponent {
  constructor(loadingService, router, location, route, eventService, authService, authModalService, manageUserService) {
    this.loadingService = loadingService;
    this.router = router;
    this.location = location;
    this.route = route;
    this.eventService = eventService;
    this.authService = authService;
    this.authModalService = authModalService;
    this.manageUserService = manageUserService;
  }
  ngOnInit() {
    this.fetchUserDetails();
  }
  fetchUserDetails() {
    this.manageUserService.fetchById(this.authService.fetchFromSessionStorage().userId).subscribe(res => {
      this.user = res;
    });
  }
  goBack() {
    this.location.back();
  }
}
ViewProfileComponent.ɵfac = function ViewProfileComponent_Factory(t) {
  return new (t || ViewProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_modal_service__WEBPACK_IMPORTED_MODULE_3__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_4__.ManageUserService));
};
ViewProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ViewProfileComponent,
  selectors: [["app-view-profile"]],
  decls: 42,
  vars: 14,
  consts: [[1, "root"], [1, "background", 3, "ngStyle"], [1, "content"], [1, "my-card"], [1, "row"], [1, "col-6", "front-img", 3, "ngStyle"], [1, "col-6", "section-user"], [1, "p-5"], [1, "section-back", 3, "click"], ["src", "assets/images/back.svg", "alt", "", 1, "back-img"], [1, "back-text"], [1, "profile-data"], [1, "section-userinfo"], [1, "summary", "name"], ["src", "assets/images/edit.svg", "alt", "", 1, "edit", 3, "routerLink"], [1, "summary"], [1, "item"], [1, "section-address"], [1, "address"]],
  template: function ViewProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewProfileComponent_Template_div_click_8_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11)(13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " User #");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Phone No ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx.user == null ? null : ctx.user.firstName) + " " + (ctx.user == null ? null : ctx.user.lastName), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.user == null ? null : ctx.user.userId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.user == null ? null : ctx.user.phoneNo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.user == null ? null : ctx.user.emailId, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.user == null ? null : ctx.user.address == null ? null : ctx.user.address.area, ",");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.user == null ? null : ctx.user.address == null ? null : ctx.user.address.city, ",");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.user == null ? null : ctx.user.address == null ? null : ctx.user.address.state, ",");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.user == null ? null : ctx.user.address == null ? null : ctx.user.address.pincode, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  styles: [".background[_ngcontent-%COMP%] {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  filter: blur(12px);\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 5%;\n  justify-content: center;\n  align-content: center;\n  display: flex;\n}\n\n.root[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 178px);\n}\n\n.front-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 2px 0 0 2px;\n  opacity: 0.8;\n  transition: opacity 0.5s;\n}\n\n.front-img[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.my-card[_ngcontent-%COMP%] {\n  \n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n  justify-content: center;\n  width: 80%;\n}\n\n.section-user[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n  min-height: 400px;\n}\n\n\n\n.section-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.1s;\n  margin-bottom: 4%;\n}\n\n.section-back[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n\n.back-img[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n}\n\n.back-text[_ngcontent-%COMP%] {\n  padding: 12px;\n  vertical-align: middle;\n  letter-spacing: 0.5px;\n  font-size: 110%;\n  font-weight: 550;\n  color: #24b7d8;\n  text-transform: uppercase;\n  \n}\n\n.summary[_ngcontent-%COMP%] {\n  \n  \n  font-size: 150%;\n  width: 100%;\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 4%;\n}\n\n.summary[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.02);\n}\n\n.item[_ngcontent-%COMP%] {\n  color: #1f9db9;\n  letter-spacing: 1.2px;\n  font-weight: 600;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\nhr[_ngcontent-%COMP%] {\n  border-top: 2px solid #fb5a69;\n  width: 100px;\n  margin: 0;\n  transition: 0.2s;\n  margin-bottom: 4%;\n}\n\n.section-userinfo[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #24b7d8;\n  letter-spacing: 2px;\n  font-size: 300%;\n  margin: 8% 0;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.address[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  color: #aaaaaa;\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  text-transform: uppercase;\n  font-size: 180%;\n}\n\n.section-address[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n\n.section-address[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.section-address[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 4px;\n  font-size: large;\n}\n\n.edit[_ngcontent-%COMP%] {\n  color: #94c3ce;\n  float: right;\n  margin-top: 1%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy92aWV3LXByb2ZpbGUvdmlldy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFDQSx1Q0FBQTtBQUNBO0VBQ0UsU0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0Esd0JBQUE7QUFFQSxjQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBLFdBQUE7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFEQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBRUY7O0FBQ0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBibHVyKDEycHgpO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucm9vdCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzhweCk7XG59XG5cbi5mcm9udC1pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuXG4uZnJvbnQtaW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi8qIEZpeGVzIGV4dHJhIHdoaXRlIGNvbnRlbnQgb24gcmlnaHQgKi9cbi5yb3cge1xuICBtYXJnaW46IDA7XG59XG5cbi5teS1jYXJkIHtcbiAgLyogd2lkdGg6IDcwJTsgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogODAlO1xufVxuXG4uc2VjdGlvbi11c2VyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi8qIEJhY2sgQnV0dG9uIFNlY3Rpb24gKi9cblxuLyogQ29udGFpbmVyICovXG4uc2VjdGlvbi1iYWNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuXG4uc2VjdGlvbi1iYWNrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLyogQnV0dG9uICovXG4uYmFjay1pbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5iYWNrLXRleHQge1xuICBwYWRkaW5nOiAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGZvbnQtc2l6ZTogMTEwJTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpOyAqL1xufVxuXG4uc3VtbWFyeSB7XG4gIC8qIHBhZGRpbmctbGVmdDogMiU7ICovXG4gIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG5cbi5zdW1tYXJ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMS4wMik7XG59XG5cbi5pdGVtIHtcbiAgY29sb3I6ICMxZjlkYjk7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuaHIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZiNWE2OTtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuXG4uc2VjdGlvbi11c2VyaW5mbzpob3ZlciBociB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbiAgbWFyZ2luOiA4JSAwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYWRkcmVzcyB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE4MCU7XG59XG5cbi5zZWN0aW9uLWFkZHJlc3MgaHIge1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5zZWN0aW9uLWFkZHJlc3M6aG92ZXIgaHIge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zZWN0aW9uLWFkZHJlc3MgLnN1bW1hcnkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDRweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuXG4uZWRpdCB7XG4gIGNvbG9yOiAjOTRjM2NlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDElO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6304:
/*!**********************************************!*\
  !*** ./src/app/models/order-status.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatus": () => (/* binding */ OrderStatus)
/* harmony export */ });
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-26 01:05:49
 * @modify date 2021-01-26 01:05:49
 * @desc [description]
 */
var OrderStatus;
(function (OrderStatus) {
  OrderStatus["DISPATCHED"] = "Dispatched";
  OrderStatus["OUT_FOR_DELIVERY"] = "Out for Deliver";
  OrderStatus["DELIVERED"] = "Delivered";
  OrderStatus["NEW"] = "Order Created";
  OrderStatus["CANCELLED"] = "Order Cancelled";
})(OrderStatus || (OrderStatus = {}));

/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);




class CartService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.cartServiceUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.protocol}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationUrl}/cart`;
  }
  addToCart(item) {
    return this.http.put(`${this.cartServiceUrl}/${this.authService.fetchFromSessionStorage()?.userId}`, item);
  }
  fetchCartByUserId() {
    return this.http.get(`${this.cartServiceUrl}/user/${this.authService.fetchFromSessionStorage()?.userId}`);
  }
  removeItemFromCart(productId) {
    return this.http.delete(`${this.cartServiceUrl}/delete/${productId}/${this.authService.fetchFromSessionStorage()?.userId}`);
  }
  checkout(data) {
    return this.http.post(`${this.cartServiceUrl}/manualcheckout/${this.authService.fetchFromSessionStorage()?.userId}`, data);
  }
}
CartService.ɵfac = function CartService_Factory(t) {
  return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CartService,
  factory: CartService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3684:
/*!******************************************************!*\
  !*** ./src/app/services/delivery-history.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryHistoryService": () => (/* binding */ DeliveryHistoryService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class DeliveryHistoryService {
  constructor(http) {
    this.http = http;
    this.orderServiceUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.protocol}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationUrl}/delivery`;
  }
  fetchDeliveryByOrderId(orderId) {
    return this.http.get(`${this.orderServiceUrl}/${orderId}`);
  }
}
DeliveryHistoryService.ɵfac = function DeliveryHistoryService_Factory(t) {
  return new (t || DeliveryHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DeliveryHistoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DeliveryHistoryService,
  factory: DeliveryHistoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4375:
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationService": () => (/* binding */ GeolocationService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class GeolocationService {
  constructor(http) {
    this.http = http;
    this.applicationUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapQuestUrl}?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapQuestAPIKey}&`;
  }
  fetchDistance(to) {
    // return this.http.get(this.generateUrl(environment.from, to));
    return this.http.get(`${this.applicationUrl}from=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.from}&to=${to}`, {
      headers: {
        skip: "true"
      }
    });
  }
}
GeolocationService.ɵfac = function GeolocationService_Factory(t) {
  return new (t || GeolocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
GeolocationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GeolocationService,
  factory: GeolocationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8132:
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);




class OrderService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.orderServiceUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.protocol}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationUrl}/orders`;
  }
  updateOrderStatus(data) {
    return this.http.post(`${this.orderServiceUrl}`, data);
  }
  fetchOrder() {
    return this.http.get(`${this.orderServiceUrl}`);
  }
  fetchById(id) {
    return this.http.get(`${this.orderServiceUrl}/${id}`);
  }
  fetchByLoggedInUserId() {
    return this.fetchByUserId(this.authService.fetchFromSessionStorage()?.userId);
  }
  fetchByUserId(userId) {
    return this.http.get(`${this.orderServiceUrl}/user/${userId}`);
  }
}
OrderService.ɵfac = function OrderService_Factory(t) {
  return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
OrderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: OrderService,
  factory: OrderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5722:
/*!******************************************************!*\
  !*** ./src/app/services/payment-razorpay.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentRazorpayService": () => (/* binding */ PaymentRazorpayService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7556);
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 13:26:03
 * @modify date 2021-01-28 13:26:03
 * @desc [description]
 */





class PaymentRazorpayService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.paymentServiceUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.protocol}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationUrl}/payment`;
  }
  generateOrderId(amount) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('CUST_ID', this.authService.fetchFromSessionStorage().username).set('TXN_AMOUNT', amount.toString());
    return this.http.get(`${this.paymentServiceUrl}/razorpayorder`, {
      params
    });
  }
  updatePaymentInDb(data) {
    return this.http.post(`${this.paymentServiceUrl}/razorsuccess`, data);
  }
}
PaymentRazorpayService.ɵfac = function PaymentRazorpayService_Factory(t) {
  return new (t || PaymentRazorpayService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
PaymentRazorpayService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PaymentRazorpayService,
  factory: PaymentRazorpayService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6424:
/*!****************************************************!*\
  !*** ./src/app/services/payment-stripe.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentStripeService": () => (/* binding */ PaymentStripeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 00:33:13
 * @modify date 2021-01-28 00:33:13
 * @desc [description]
 */





class PaymentStripeService {
  constructor(http) {
    this.http = http;
    this.paymentServiceUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.protocol}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationUrl}/payment`;
    this.paymentComplete = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(s);
    }
  }
  // Predefined UI
  pay(amount) {
    var handler = window.StripeCheckout.configure({
      key: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.publicStripeKey,
      locale: 'auto',
      token: token => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.chargeCard(token.id, amount);
      }
    });
    handler.open({
      name: 'Gift Shop',
      description: 'Online Gift Shopping application to purchse and share happiness',
      amount: amount * 100,
      currency: 'INR'
    });
  }
  chargeCard(token, amount) {
    // const headers = new HttpHeaders()
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('token', token); // create header object
    headers = headers.append('amount', amount.toString()); // add a new header, creating a new object
    this.http.post(`${this.paymentServiceUrl}/charge`, {}, {
      headers
    }).subscribe(resp => {
      this.paymentComplete.next(resp);
    });
  }
}
PaymentStripeService.ɵfac = function PaymentStripeService_Factory(t) {
  return new (t || PaymentStripeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
PaymentStripeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PaymentStripeService,
  factory: PaymentStripeService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_components_products_products_module_ts.js.map