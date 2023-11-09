"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_components_auth_auth_module_ts"],{

/***/ 3661:
/*!********************************************************!*\
  !*** ./src/app/components/auth/auth-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_guards_auth_access_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth-access.guard */ 8715);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 2182);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password/change-password.component */ 1575);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 5707);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 4702);
/* harmony import */ var _request_question_request_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-question/request-question.component */ 3229);
/* harmony import */ var _social_register_social_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-register/social-register.component */ 66);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);










const routes = [{
  path: '',
  component: _auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent,
  canActivate: [src_app_guards_auth_access_guard__WEBPACK_IMPORTED_MODULE_0__.AuthAccessGuard],
  children: [{
    path: 'login',
    component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
  }, {
    path: 'register',
    component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent
  }, {
    path: 'socialregister',
    component: _social_register_social_register_component__WEBPACK_IMPORTED_MODULE_6__.SocialRegisterComponent
  }, {
    path: 'forgotpassword',
    component: _request_question_request_question_component__WEBPACK_IMPORTED_MODULE_5__.RequestQuestionComponent
  }, {
    path: 'changepassword',
    component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordComponent
  }]
}];
class AuthRoutingModule {
  static #_ = this.ɵfac = function AuthRoutingModule_Factory(t) {
    return new (t || AuthRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AuthRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 2182:
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AuthComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AuthComponent_Factory(t) {
    return new (t || AuthComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AuthComponent,
    selectors: [["app-auth"]],
    decls: 2,
    vars: 0,
    consts: [[1, "backdrop"]],
    template: function AuthComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0)(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: [".backdrop[_ngcontent-%COMP%] {\n  background-image: url('assets/images/celebration2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  filter: blur(12px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJeYXNzZXRzL2ltYWdlcy9jZWxlYnJhdGlvbjIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3431:
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 3661);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ 1575);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 5707);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 4702);
/* harmony import */ var _request_question_request_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-question/request-question.component */ 3229);
/* harmony import */ var _social_register_social_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-register/social-register.component */ 66);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.component */ 2182);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);











class AuthModule {
  static #_ = this.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _request_question_request_question_component__WEBPACK_IMPORTED_MODULE_4__.RequestQuestionComponent, _social_register_social_register_component__WEBPACK_IMPORTED_MODULE_5__.SocialRegisterComponent, _auth_component__WEBPACK_IMPORTED_MODULE_6__.AuthComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  });
})();

/***/ }),

/***/ 1575:
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/change-password/change-password.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 2548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 1457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);








function ChangePasswordComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.resetPasswordForm.controls["securityAnswer"].errors.serverValidationError, " ");
  }
}
function ChangePasswordComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChangePasswordComponent_div_18_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChangePasswordComponent_div_18_div_2_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("securityAnswer").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.resetPasswordForm.get("securityAnswer").errors["serverValidationError"]);
  }
}
function ChangePasswordComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.resetPasswordForm.controls["newPassword"].errors.serverValidationError, " ");
  }
}
function ChangePasswordComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChangePasswordComponent_div_21_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChangePasswordComponent_div_21_div_2_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.resetPasswordForm.get("newPassword").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.resetPasswordForm.get("newPassword").errors["serverValidationError"]);
  }
}
function ChangePasswordComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 25);
  }
}
function ChangePasswordComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Sucessfully Updated Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/"];
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c2 = function () {
  return ["/auth/forgotpassword"];
};
const _c3 = function () {
  return ["/auth/login"];
};
class ChangePasswordComponent {
  constructor(authService, loadingService, router, eventService) {
    this.authService = authService;
    this.loadingService = loadingService;
    this.router = router;
    this.eventService = eventService;
    this.submitted = false;
    this.success = false;
    this.question = 'Not Found';
  }
  ngOnDestroy() {
    if (this.resetPasswordSubscription) this.resetPasswordSubscription.unsubscribe();
  }
  ngOnInit() {
    this.initPasswordResetForm();
  }
  resetPassword() {
    this.submitted = true;
    if (this.resetPasswordForm.valid) this.submitResetForm(this.resetPasswordForm.getRawValue());
  }
  submitResetForm(formData) {
    formData.username;
    this.loadingService.enableLoading();
    this.resetPasswordSubscription = this.authService.requestPasswordReset(formData).subscribe(response => {
      this.success = true;
      setTimeout(() => {
        this.router.navigateByUrl('/auth/login');
      }, 3000);
      this.loadingService.disableLoading();
    }, error => {
      this.loadingService.disableLoading();
      if (error.error.message === 'FieldException') error.error.errors.forEach(element => this.resetPasswordForm.controls[element.field]?.setErrors({
        serverValidationError: element.message
      }));else throw new Error(error);
    });
  }
  initPasswordResetForm() {
    const res = this.eventService.resetPasswordData.value;
    if (res === null) this.router.navigateByUrl('/auth/forgotpassword');
    this.question = res?.securityQuestion;
    this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl({
        value: res?.username,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      securityAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
  }
  static #_ = this.ɵfac = function ChangePasswordComponent_Factory(t) {
    return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ChangePasswordComponent,
    selectors: [["app-change-password"]],
    decls: 33,
    vars: 20,
    consts: [[1, "row", "h-100", "align-items-center"], [1, "col-12"], [1, "my-card", "mx-auto"], [1, "row"], [1, "col-6", "front-img"], [1, "col-6", "user-form"], [1, "p-5"], [1, "text-center", "logo-container"], ["src", "assets/images/gift-box.svg", 1, "logo", 3, "routerLink"], ["src", "assets/images/logo-text.png", 1, "title", 3, "routerLink"], [1, "user", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "username", "formControlName", "username", "placeholder", "Username", "name", "username", 1, "form-control", "form-control-user"], ["for", "securityAnswer"], ["type", "text", "formControlName", "securityAnswer", "type", "text", "placeholder", "Enter Answer", "name", "securityAnswer", 1, "form-control", "form-control-user", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "newPassword", "id", "newPassword", "placeholder", "Enter New Password", "name", "newPassword", 1, "form-control", "form-control-user", 3, "ngClass"], ["type", "submit", 1, "primary-btn", "btn-block"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "text-center"], [1, "mr-1", "actions", 3, "routerLink"], [1, "ml-1", "actions", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-success"]],
    template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 8)(9, "img", 9)(10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_11_listener() {
          return ctx.resetPassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ChangePasswordComponent_div_18_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ChangePasswordComponent_div_21_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ChangePasswordComponent_span_23_Template, 1, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ChangePasswordComponent_div_26_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 20)(28, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.question, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c1, ctx.submitted && ctx.resetPasswordForm.get("securityAnswer").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.resetPasswordForm.get("securityAnswer").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c1, ctx.submitted && ctx.resetPasswordForm.get("newPassword").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.resetPasswordForm.get("newPassword").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c3));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: ["\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.my-card[_ngcontent-%COMP%] {\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n}\n\n.user-form[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 204px;\n  transition: all 0.5s;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.logo[_ngcontent-%COMP%]:focus, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.text-center[_ngcontent-%COMP%]:hover::after {\n  width: 200px;\n}\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%] {\n  border-top: 3px solid #fb5a69;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]:hover {\n  width: 60%;\n}\n\n.actions[_ngcontent-%COMP%] {\n  color: #24b7d8;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 120%;\n  color: #24b7d8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQUE7QUFDQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLyogRml4ZXMgZXh0cmEgd2hpdGUgY29udGVudCBvbiByaWdodCAqL1xuLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm15LWNhcmQge1xuICB3aWR0aDogNjAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnVzZXItZm9ybSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMjRweDtcbiAgaGVpZ2h0OiAyMDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5sb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4udGl0bGUge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dvOmZvY3VzLCAudGl0bGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi50ZXh0LWNlbnRlcjpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5sb2dvLWNvbnRhaW5lciBociwgaHIge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZiNWE2OTtcbiAgd2lkdGg6IDIwJTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmxvZ28tY29udGFpbmVyOmhvdmVyIGhyLCBocjpob3ZlciB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5hY3Rpb25ze1xuICBjb2xvcjogIzI0YjdkODtcbn1cblxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgY29sb3I6ICMyNGI3ZDg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5707:
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loading.service */ 2548);
/* harmony import */ var src_app_services_social_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/social-auth.service */ 354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









function LoginComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.loginForm.controls["username"].errors.serverValidationError, " ");
  }
}
function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoginComponent_div_14_div_2_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("username").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("username").errors["serverValidationError"]);
  }
}
function LoginComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " * Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.loginForm.controls["password"].errors.serverValidationError, " ");
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_17_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoginComponent_div_17_div_2_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").errors["serverValidationError"]);
  }
}
function LoginComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 25);
  }
}
const _c0 = function () {
  return ["/"];
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c2 = function () {
  return ["/auth/register"];
};
const _c3 = function () {
  return ["/auth/forgotpassword"];
};
class LoginComponent {
  constructor(authService, router, loadingService, route, socialAuthService, ngZone) {
    this.authService = authService;
    this.router = router;
    this.loadingService = loadingService;
    this.route = route;
    this.socialAuthService = socialAuthService;
    this.ngZone = ngZone;
    this.submitted = false;
    this.logo = '^assets/images/btn_google_light_normal.svg';
  }
  ngOnDestroy() {
    if (this.loginSubscription) this.loginSubscription.unsubscribe();
  }
  ngOnInit() {
    this.authService.redirectIfLoggedIn();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.initForm();
    window.googleLogin = this.googleLogin;
  }
  login() {
    this.submitted = true;
    if (this.loginForm.valid) this.submitData(this.loginForm.value);
  }
  submitData(formData) {
    this.loadingService.enableLoading();
    this.loginSubscription = this.authService.login(formData).subscribe(response => {
      this.router.navigateByUrl(this.returnUrl);
      this.loadingService.disableLoading();
    }, error => {
      this.loadingService.disableLoading();
      if (error.error.message === 'FieldException') error.error.errors.forEach(element => this.loginForm.controls[element.field]?.setErrors({
        serverValidationError: element.message
      }));else throw new Error(error);
    });
  }
  initForm() {
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
  }
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.googleClientId
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => this.ngZone.run(() => {
      this.loadingService.enableLoading();
      this.socialAuthService.validateGoogleTokenAndLogin({
        token: googleUser.getAuthResponse().id_token,
        email: googleUser.getBasicProfile().getEmail()
      }).subscribe(res => {
        this.loadingService.disableLoading();
        if (res['status'] !== 202) this.router.navigateByUrl(this.returnUrl);else {
          this.router.navigate(['/auth/socialregister'], {
            state: {
              data: {
                emailId: googleUser.getBasicProfile().getEmail()
              }
            }
          });
        }
      }).closed;
    }, error => console.error(error)));
  }
  ngAfterViewInit() {
    this.googleInit();
    this.facebookInit();
  }
  facebookInit() {
    window.fbAsyncInit = function () {
      FB.init({
        appId: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.facebookClientId,
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }
  submitLogin() {
    FB.login(response => this.ngZone.run(() => {
      if (response.authResponse) {
        FB.api('/me', {
          fields: 'name, email'
        }, res => {
          this.loadingService.enableLoading();
          this.socialAuthService.validateFacebookTokenAndLogin({
            token: response.authResponse.accessToken,
            email: res.email
          }).subscribe(res => {
            this.loadingService.disableLoading();
            if (res['status'] !== 202) this.router.navigateByUrl(this.returnUrl);else {
              this.router.navigate(['/auth/socialregister'], {
                state: {
                  data: {
                    emailId: response.email
                  }
                }
              });
            }
          }).closed;
        });
      } else throw Error('Error Signing from facebook');
    }));
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_social_auth_service__WEBPACK_IMPORTED_MODULE_3__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 32,
    vars: 18,
    consts: [[1, "row", "h-100", "align-items-center"], [1, "col-12"], [1, "my-card", "mx-auto"], [1, "row"], [1, "col-6", "front-img"], [1, "col-6", "user-form"], [1, "p-5"], [1, "text-center", "logo-container"], ["src", "assets/images/gift-box.svg", 1, "logo", 3, "routerLink"], ["src", "assets/images/logo-text.png", 1, "title", 3, "routerLink"], [1, "user", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "username", "formControlName", "username", "placeholder", "Username or Email", "name", "username", 1, "form-control", "form-control-user", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "password", "type", "password", "id", "exampleInputPassword", "placeholder", "Password", "name", "password", 1, "form-control", "form-control-user", 3, "ngClass"], ["type", "submit", 1, "primary-btn", "btn-block"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "secondary-btn", "btn-block", 3, "routerLink"], [1, "social"], ["src", "assets/images/btn_google_normal.svg", "alt", "", "id", "googleBtn", 1, "social-icon"], ["src", "assets/images/facebook.svg", "alt", "", 1, "social-icon", "icon-bar", "facebook", 3, "click"], [1, "text-center"], [1, "actions", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 8)(9, "img", 9)(10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, LoginComponent_span_19_Template, 1, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "br")(24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_img_click_27_listener() {
          return ctx.submitLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 21)(30, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Forgot Password? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c1, ctx.submitted && ctx.loginForm.get("username").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.get("username").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx.submitted && ctx.loginForm.get("password").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginForm.get("password").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c3));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
    styles: ["\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.my-card[_ngcontent-%COMP%] {\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n}\n\n.user-form[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 204px;\n  transition: all 0.5s;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.logo[_ngcontent-%COMP%]:focus, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.text-center[_ngcontent-%COMP%]:hover::after {\n  width: 200px;\n}\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%] {\n  border-top: 3px solid #fb5a69;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]:hover {\n  width: 60%;\n}\n\n.actions[_ngcontent-%COMP%] {\n  color: #24b7d8;\n  text-transform: uppercase;\n}\n\n.social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  opacity: 0.9;\n  cursor: pointer;\n}\n\n.facebook[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 8px;\n  border-radius: 2px;\n  margin: 2px;\n  background: #3B5998;\n  margin-left: 16px;\n  color: white;\n  transform: scale(1.2);\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUFBO0FBQ0E7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBOztFQUVFLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLyogRml4ZXMgZXh0cmEgd2hpdGUgY29udGVudCBvbiByaWdodCAqL1xuLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm15LWNhcmQge1xuICB3aWR0aDogNjAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnVzZXItZm9ybSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMjRweDtcbiAgaGVpZ2h0OiAyMDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5sb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4udGl0bGUge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ286Zm9jdXMsXG4udGl0bGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGV4dC1jZW50ZXI6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubG9nby1jb250YWluZXIgaHIsXG5ociB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmI1YTY5O1xuICB3aWR0aDogMjAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubG9nby1jb250YWluZXI6aG92ZXIgaHIsXG5ocjpob3ZlciB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5hY3Rpb25zIHtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLnNvY2lhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc29jaWFsLWljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIG9wYWNpdHk6IDAuOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmFjZWJvb2sge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMnB4O1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5zb2NpYWwtaWNvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4702:
/*!****************************************************************!*\
  !*** ./src/app/components/auth/register/register.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/manage-user.service */ 8370);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 2548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);







function RegisterComponent_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.userForm.controls["firstName"].errors.serverValidationError, " ");
  }
}
function RegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_18_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_18_div_2_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("firstName").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("firstName").errors["serverValidationError"]);
  }
}
function RegisterComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r16.userForm.controls["lastName"].errors.serverValidationError, " ");
  }
}
function RegisterComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_25_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_25_div_2_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("lastName").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("lastName").errors["serverValidationError"]);
  }
}
function RegisterComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r18.userForm.controls["phoneNo"].errors.serverValidationError, " ");
  }
}
function RegisterComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_34_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_34_div_2_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("phoneNo").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("phoneNo").errors["serverValidationError"]);
  }
}
function RegisterComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r20.userForm.controls["emailId"].errors.serverValidationError, " ");
  }
}
function RegisterComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_42_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_42_div_2_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("emailId").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("emailId").errors["serverValidationError"]);
  }
}
function RegisterComponent_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_52_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_52_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_52_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_52_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegisterComponent_div_52_div_3_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("address.city").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("address.city").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("address.city").errors["maxlength"]);
  }
}
function RegisterComponent_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_59_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_59_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegisterComponent_div_59_div_3_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userForm.get("address.state").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userForm.get("address.state").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userForm.get("address.state").errors["maxlength"]);
  }
}
function RegisterComponent_div_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_67_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_67_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_67_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_67_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegisterComponent_div_67_div_3_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("address.area").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("address.area").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("address.area").errors["maxlength"]);
  }
}
function RegisterComponent_div_74_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_74_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Must be of length 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_74_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_74_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.userForm.get("address.pincode").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.userForm.get("address.pincode").errors["pattern"]);
  }
}
function RegisterComponent_div_82_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_82_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r33.userForm.controls["password"].errors.serverValidationError, " ");
  }
}
function RegisterComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_82_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_82_div_2_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.userForm.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.userForm.get("password").errors["serverValidationError"]);
  }
}
function RegisterComponent_div_89_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_89_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password not same");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_89_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r36.userForm.controls["password2"].errors.serverValidationError, " ");
  }
}
function RegisterComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_89_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_89_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegisterComponent_div_89_div_3_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.userForm.get("password2").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.userForm.get("password2").errors["passwordMatchError"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.userForm.get("password2").errors["serverValidationError"]);
  }
}
function RegisterComponent_div_97_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_97_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r38.userForm.controls["username"].errors.serverValidationError, " ");
  }
}
function RegisterComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_97_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_97_div_2_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.userForm.get("username").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.userForm.get("username").errors["serverValidationError"]);
  }
}
function RegisterComponent_span_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 42);
  }
}
function RegisterComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.message, " ");
  }
}
const _c0 = function () {
  return ["/"];
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c2 = function () {
  return ["/auth/login"];
};
class RegisterComponent {
  // new Date().toISOString().slice(0,10) - ;
  constructor(manageUserService, loadingService, router) {
    this.manageUserService = manageUserService;
    this.loadingService = loadingService;
    this.router = router;
    this.submitted = false;
    this.message = null;
    this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 14)).toISOString().slice(0, 10);
    this.initForm();
  }
  ngOnInit() {}
  submitForm() {
    this.submitted = true;
    if (this.userForm.valid) this.addUser(this.userForm.value);
  }
  addUser(formData) {
    this.loadingService.enableLoading();
    this.addUserSubscription = this.manageUserService.addUser(formData).subscribe(response => {
      this.loadingService.disableLoading();
      this.message = 'Successfully Created user with ID ' + response['userId'];
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 3000);
    }, error => {
      this.loadingService.disableLoading();
      if (error.error.message === 'FieldException') error.error.errors.forEach(element => this.userForm.controls[element.field]?.setErrors({
        serverValidationError: element.message
      }));else throw new Error(error);
    });
  }
  initForm() {
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]),
        area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]),
        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]),
        pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[0-9]{6}')])
      })
    }, {
      validators: this.matchPassword
    });
  }
  matchPassword(control) {
    const password = control.get('password').value;
    const password2 = control.get('password2').value;
    if (password != password2) {
      control.get('password2').setErrors({
        passwordMatchError: true
      });
    } else {
      return null;
    }
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_manage_user_service__WEBPACK_IMPORTED_MODULE_0__.ManageUserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-register"]],
    decls: 108,
    vars: 51,
    consts: [[1, "row", "h-100", "align-items-center"], [1, "col-12"], [1, "my-card", "mx-auto"], [1, "row"], [1, "col-12", "user-form"], [1, "p-3"], [1, "logo-container"], ["src", "assets/images/logo-text.png", 1, "title", 3, "routerLink"], [3, "formGroup", "ngSubmit"], [1, "col"], [1, "form-group"], ["for", "firstName"], ["formControlName", "firstName", "type", "text", "placeholder", "First Name", "name", "firstName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["formControlName", "lastName", "type", "text", "placeholder", "Last Name", "name", "lastName", 1, "form-control", 3, "ngClass"], ["for", "phoneNo"], ["type", "text", "placeholder", "Enter Phone No.", "name", "phoneNo", "formControlName", "phoneNo", 1, "form-control", 3, "ngClass"], ["for", "emailId"], ["type", "text", "placeholder", "Email", "name", "emailId", "formControlName", "emailId", 1, "form-control", 3, "ngClass"], ["formGroupName", "address"], ["for", "city"], ["type", "text", "placeholder", "City", "name", "city", "formControlName", "city", 1, "form-control", 3, "ngClass"], ["for", "country"], ["type", "text", "placeholder", "State", "name", "State", "formControlName", "state", 1, "form-control", 3, "ngClass"], ["for", "area"], ["type", "text", "placeholder", "Area", "name", "area", "formControlName", "area", 1, "form-control", 3, "ngClass"], ["for", "pinode"], ["type", "text", "placeholder", "pincode", "name", "pincode", "formControlName", "pincode", 1, "form-control", 3, "ngClass"], ["for", "password"], ["type", "password", "placeholder", "Enter Password", "name", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "password2"], ["type", "password", "placeholder", "Re-enter Password", "name", "password2", "formControlName", "password2", 1, "form-control", 3, "ngClass"], ["for", "username"], ["type", "text", "placeholder", "Enter Username", "name", "username", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "primary-btn", "btn-block"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "text-center"], [1, "actions", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-success"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 7)(8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3)(11, "div", 9)(12, "div", 10)(13, "label", 11)(14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "label", 14)(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3)(27, "div", 9)(28, "div", 10)(29, "label", 16)(30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Phone No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, RegisterComponent_div_34_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 9)(36, "div", 10)(37, "label", 18)(38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, RegisterComponent_div_42_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div")(44, "div", 20)(45, "div", 3)(46, "div", 9)(47, "div", 10)(48, "label", 21)(49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, RegisterComponent_div_52_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9)(54, "div", 10)(55, "label", 23)(56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, RegisterComponent_div_59_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 3)(61, "div", 9)(62, "div", 10)(63, "label", 25)(64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, RegisterComponent_div_67_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 9)(69, "div", 10)(70, "label", 27)(71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, RegisterComponent_div_74_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 3)(76, "div", 9)(77, "div", 10)(78, "label", 29)(79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, RegisterComponent_div_82_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 9)(84, "div", 10)(85, "label", 31)(86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Re-enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, RegisterComponent_div_89_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 3)(91, "div", 9)(92, "div", 10)(93, "label", 33)(94, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, RegisterComponent_div_97_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 9)(99, "div", 10)(100, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](101, RegisterComponent_span_101_Template, 1, 0, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](103, RegisterComponent_div_103_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Back to Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c1, ctx.submitted && ctx.userForm.get("firstName").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("firstName").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c1, ctx.submitted && ctx.userForm.get("lastName").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("lastName").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c1, ctx.submitted && ctx.userForm.get("phoneNo").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("phoneNo").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](34, _c1, ctx.submitted && ctx.userForm.get("emailId").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("emailId").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](36, _c1, ctx.submitted && ctx.userForm.get("address.city").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("address.city").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](38, _c1, ctx.submitted && ctx.userForm.get("address.state").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("address.state").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](40, _c1, ctx.submitted && ctx.userForm.get("address.area").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("address.area").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](42, _c1, ctx.submitted && ctx.userForm.get("address.pincode").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("address.pincode").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](44, _c1, ctx.submitted && ctx.userForm.get("password").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("password").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](46, _c1, ctx.submitted && ctx.userForm.get("password2").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("password2").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](48, _c1, ctx.submitted && ctx.userForm.get("username").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("username").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](50, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName],
    styles: ["\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.my-card[_ngcontent-%COMP%] {\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n}\n\n.user-form[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 204px;\n  transition: all 0.5s;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 80px;\n  \n\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.title[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: scale(1.2);\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.text-center[_ngcontent-%COMP%]:hover::after {\n  width: 200px;\n}\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%] {\n  border-top: 3px solid #fb5a69;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]:hover {\n  width: 40%;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.actions[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  color: #24b7d8;\n  text-transform: uppercase;\n}\n\n.text-center[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.alert[_ngcontent-%COMP%] {\n  margin: 2%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUFBO0FBQ0E7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZpeGVzIGV4dHJhIHdoaXRlIGNvbnRlbnQgb24gcmlnaHQgKi9cbi5yb3cge1xuICBtYXJnaW46IDA7XG59XG5cbi5teS1jYXJkIHtcbiAgd2lkdGg6IDYwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi51c2VyLWZvcm0ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xufVxuXG4ubG9nbyB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGhlaWdodDogMjA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ubG9nbzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLnRpdGxlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBwYWRkaW5nLWxlZnQ6IDMzJTsgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4udGl0bGU6aG92ZXIsIC50aXRsZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKVxufVxuXG4uYnRuIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4udGV4dC1jZW50ZXI6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubG9nby1jb250YWluZXIgaHIsIGhyIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmYjVhNjk7XG4gIHdpZHRoOiAyMCU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5sb2dvLWNvbnRhaW5lcjpob3ZlciBociwgaHI6aG92ZXIge1xuICB3aWR0aDogNDAlO1xufVxuLmxvZ28tY29udGFpbmVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zLCBsYWJlbHtcbiAgY29sb3I6ICMyNGI3ZDg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50ZXh0LWNlbnRlcjpob3ZlciBocntcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmFsZXJ0e1xuICBtYXJnaW46IDIlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3229:
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/request-question/request-question.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestQuestionComponent: () => (/* binding */ RequestQuestionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 2548);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 1457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);








function RequestQuestionComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RequestQuestionComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.requestQuestionForm.controls["username"].errors.serverValidationError, " ");
  }
}
function RequestQuestionComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestQuestionComponent_div_14_div_1_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RequestQuestionComponent_div_14_div_2_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.requestQuestionForm.get("username").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.requestQuestionForm.get("username").errors["serverValidationError"]);
  }
}
function RequestQuestionComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 20);
  }
}
const _c0 = function () {
  return ["/"];
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c2 = function () {
  return ["/auth/login"];
};
class RequestQuestionComponent {
  constructor(authService, router, loadingService, eventService) {
    this.authService = authService;
    this.router = router;
    this.loadingService = loadingService;
    this.eventService = eventService;
    this.submitted = false;
  }
  ngOnDestroy() {
    if (this.formSubscription) this.formSubscription.unsubscribe();
  }
  ngOnInit() {
    this.initQuestionForm();
  }
  requestSecretQuestion() {
    this.submitted = true;
    if (this.requestQuestionForm.valid) this.submitData(this.requestQuestionForm.value.username);
  }
  submitData(formData) {
    this.loadingService.enableLoading();
    this.formSubscription = this.authService.requestSecretQuestion(formData).subscribe(response => {
      this.loadingService.disableLoading();
      this.eventService.resetPasswordData.next(response);
      this.router.navigateByUrl('/auth/changepassword');
    }, error => {
      this.loadingService.disableLoading();
      if (error.error.message === 'FieldException') error.error.errors.forEach(element => this.requestQuestionForm.controls[element.field]?.setErrors({
        serverValidationError: element.message
      }));else throw new Error(error);
    });
  }
  initQuestionForm() {
    this.requestQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
  }
  static #_ = this.ɵfac = function RequestQuestionComponent_Factory(t) {
    return new (t || RequestQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RequestQuestionComponent,
    selectors: [["app-request-question"]],
    decls: 22,
    vars: 12,
    consts: [[1, "row", "h-100", "align-items-center"], [1, "col-12"], [1, "my-card", "mx-auto"], [1, "row"], [1, "col-6", "front-img"], [1, "col-6", "user-form"], [1, "p-5"], [1, "text-center", "logo-container"], ["src", "assets/images/gift-box.svg", 1, "logo", 3, "routerLink"], ["src", "assets/images/logo-text.png", 1, "title", 3, "routerLink"], [1, "user", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "username", "type", "text", "placeholder", "Enter Username", "name", "username", 1, "form-control", "form-control-user", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "primary-btn", "btn-block"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "text-center"], [1, "actions", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm"]],
    template: function RequestQuestionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 8)(9, "img", 9)(10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RequestQuestionComponent_Template_form_ngSubmit_11_listener() {
          return ctx.requestSecretQuestion();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, RequestQuestionComponent_div_14_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RequestQuestionComponent_span_16_Template, 1, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Request Secret Question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16)(20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Back To Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.requestQuestionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c1, ctx.submitted && ctx.requestQuestionForm.get("username").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.requestQuestionForm.get("username").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: ["\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.my-card[_ngcontent-%COMP%] {\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n}\n\n.user-form[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 204px;\n  transition: all 0.5s;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.logo[_ngcontent-%COMP%]:focus, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.text-center[_ngcontent-%COMP%]:hover::after {\n  width: 200px;\n}\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%] {\n  border-top: 3px solid #fb5a69;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]:hover {\n  width: 60%;\n}\n\n.actions[_ngcontent-%COMP%] {\n  color: #24b7d8;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL3JlcXVlc3QtcXVlc3Rpb24vcmVxdWVzdC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBQTtBQUNBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOztFQUVFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogRml4ZXMgZXh0cmEgd2hpdGUgY29udGVudCBvbiByaWdodCAqL1xuLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm15LWNhcmQge1xuICB3aWR0aDogNjAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnVzZXItZm9ybSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMjRweDtcbiAgaGVpZ2h0OiAyMDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5sb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4udGl0bGUge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvOmZvY3VzLFxuLnRpdGxlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRleHQtY2VudGVyOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmxvZ28tY29udGFpbmVyIGhyLFxuaHIge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZiNWE2OTtcbiAgd2lkdGg6IDIwJTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmxvZ28tY29udGFpbmVyOmhvdmVyIGhyLFxuaHI6aG92ZXIge1xuICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gIGNvbG9yOiAjMjRiN2Q4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66:
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/social-register/social-register.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialRegisterComponent: () => (/* binding */ SocialRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_social_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/social-auth.service */ 354);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading.service */ 2548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);







function SocialRegisterComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.userForm.controls["firstName"].errors.serverValidationError, " ");
  }
}
function SocialRegisterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SocialRegisterComponent_div_20_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SocialRegisterComponent_div_20_div_2_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("firstName").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("firstName").errors["serverValidationError"]);
  }
}
function SocialRegisterComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.userForm.controls["lastName"].errors.serverValidationError, " ");
  }
}
function SocialRegisterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SocialRegisterComponent_div_27_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SocialRegisterComponent_div_27_div_2_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("lastName").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("lastName").errors["serverValidationError"]);
  }
}
function SocialRegisterComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.userForm.controls["phoneNo"].errors.serverValidationError, " ");
  }
}
function SocialRegisterComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SocialRegisterComponent_div_36_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SocialRegisterComponent_div_36_div_2_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("phoneNo").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("phoneNo").errors["serverValidationError"]);
  }
}
function SocialRegisterComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r17.userForm.controls["emailId"].errors.serverValidationError, " ");
  }
}
function SocialRegisterComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SocialRegisterComponent_div_44_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SocialRegisterComponent_div_44_div_2_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("emailId").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("emailId").errors["serverValidationError"]);
  }
}
function SocialRegisterComponent_div_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_54_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_54_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SocialRegisterComponent_div_54_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SocialRegisterComponent_div_54_div_2_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SocialRegisterComponent_div_54_div_3_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("address.city").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("address.city").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("address.city").errors["maxlength"]);
  }
}
function SocialRegisterComponent_div_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_61_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_61_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SocialRegisterComponent_div_61_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SocialRegisterComponent_div_61_div_2_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SocialRegisterComponent_div_61_div_3_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userForm.get("address.state").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userForm.get("address.state").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userForm.get("address.state").errors["maxlength"]);
  }
}
function SocialRegisterComponent_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_69_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Min length ust be 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_69_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Max length must be 30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SocialRegisterComponent_div_69_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SocialRegisterComponent_div_69_div_2_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SocialRegisterComponent_div_69_div_3_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("address.area").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("address.area").errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("address.area").errors["maxlength"]);
  }
}
function SocialRegisterComponent_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_76_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Must be of length 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SocialRegisterComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SocialRegisterComponent_div_76_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SocialRegisterComponent_div_76_div_2_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.userForm.get("address.pincode").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.userForm.get("address.pincode").errors["pattern"]);
  }
}
function SocialRegisterComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 37);
  }
}
function SocialRegisterComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.message, " ");
  }
}
const _c0 = function () {
  return ["/"];
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c2 = function () {
  return ["/auth/login"];
};
class SocialRegisterComponent {
  // new Date().toISOString().slice(0,10) - ;
  constructor(socialAuthService, loadingService, router) {
    this.socialAuthService = socialAuthService;
    this.loadingService = loadingService;
    this.router = router;
    this.submitted = false;
    this.message = null;
    this.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - 14)).toISOString().slice(0, 10);
  }
  ngOnInit() {
    this.email = window.history.state?.data?.emailId;
    if (!this.email) this.router.navigateByUrl('/auth/login');
    this.initForm();
  }
  submitForm() {
    this.submitted = true;
    if (this.userForm.valid) this.addUser(this.userForm.value);
  }
  addUser(formData) {
    this.loadingService.enableLoading();
    this.addUserSubscription = this.socialAuthService.socialSignUp(formData).subscribe(response => {
      this.loadingService.disableLoading();
      this.message = 'Successfully Added user with ID ' + response['userId'];
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 3000);
    }, error => {
      this.loadingService.disableLoading();
      if (error.error.message === 'FieldException') error.error.errors.forEach(element => this.userForm.controls[element.field]?.setErrors({
        serverValidationError: element.message
      }));else throw new Error(error);
    });
  }
  initForm() {
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      phoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
        state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]),
        area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]),
        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30)]),
        pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[0-9]{6}')])
      })
    });
  }
  static #_ = this.ɵfac = function SocialRegisterComponent_Factory(t) {
    return new (t || SocialRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_social_auth_service__WEBPACK_IMPORTED_MODULE_0__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SocialRegisterComponent,
    selectors: [["app-social-register"]],
    decls: 88,
    vars: 39,
    consts: [[1, "row", "h-100", "align-items-center"], [1, "col-12"], [1, "my-card", "mx-auto"], [1, "row"], [1, "col-12", "user-form"], [1, "p-3"], [1, "logo-container"], ["src", "assets/images/logo-text.png", 1, "title", 3, "routerLink"], [1, "title-main"], [3, "formGroup", "ngSubmit"], [1, "col"], [1, "form-group"], ["for", "firstName"], ["formControlName", "firstName", "type", "text", "placeholder", "First Name", "name", "firstName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["formControlName", "lastName", "type", "text", "placeholder", "Last Name", "name", "lastName", 1, "form-control", 3, "ngClass"], ["for", "phoneNo"], ["type", "text", "placeholder", "Enter Phone No.", "name", "phoneNo", "formControlName", "phoneNo", 1, "form-control", 3, "ngClass"], ["for", "emailId"], ["type", "email", "readonly", "", "name", "emailId", "formControlName", "emailId", 1, "form-control", 3, "ngClass"], ["formGroupName", "address"], ["for", "city"], ["type", "text", "placeholder", "City", "name", "city", "formControlName", "city", 1, "form-control", 3, "ngClass"], ["for", "country"], ["type", "text", "placeholder", "State", "name", "State", "formControlName", "state", 1, "form-control", 3, "ngClass"], ["for", "area"], ["type", "text", "placeholder", "Area", "name", "area", "formControlName", "area", 1, "form-control", 3, "ngClass"], ["for", "pinode"], ["type", "text", "placeholder", "pincode", "name", "pincode", "formControlName", "pincode", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "primary-btn", "btn-block"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "text-center"], [1, "actions", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-success"]],
    template: function SocialRegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 7)(8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " You have to do this only Once. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SocialRegisterComponent_Template_form_ngSubmit_11_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3)(13, "div", 10)(14, "div", 11)(15, "label", 12)(16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SocialRegisterComponent_div_20_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "label", 15)(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SocialRegisterComponent_div_27_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 3)(29, "div", 10)(30, "div", 11)(31, "label", 17)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Phone No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, SocialRegisterComponent_div_36_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10)(38, "div", 11)(39, "label", 19)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, SocialRegisterComponent_div_44_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "div", 21)(47, "div", 3)(48, "div", 10)(49, "div", 11)(50, "label", 22)(51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, SocialRegisterComponent_div_54_Template, 4, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 10)(56, "div", 11)(57, "label", 24)(58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, SocialRegisterComponent_div_61_Template, 4, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 3)(63, "div", 10)(64, "div", 11)(65, "label", 26)(66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, SocialRegisterComponent_div_69_Template, 4, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 10)(71, "div", 11)(72, "label", 28)(73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, SocialRegisterComponent_div_76_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 3)(78, "div", 10)(79, "div", 11)(80, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, SocialRegisterComponent_span_81_Template, 1, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, SocialRegisterComponent_div_83_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Back to Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c1, ctx.submitted && ctx.userForm.get("firstName").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("firstName").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c1, ctx.submitted && ctx.userForm.get("lastName").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("lastName").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c1, ctx.submitted && ctx.userForm.get("phoneNo").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("phoneNo").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c1, ctx.submitted && ctx.userForm.get("emailId").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("emailId").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c1, ctx.submitted && ctx.userForm.get("address.city").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("address.city").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c1, ctx.submitted && ctx.userForm.get("address.state").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("address.state").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](34, _c1, ctx.submitted && ctx.userForm.get("address.area").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("address.area").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](36, _c1, ctx.submitted && ctx.userForm.get("address.pincode").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.userForm.get("address.pincode").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingService.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName],
    styles: ["\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.my-card[_ngcontent-%COMP%] {\n  width: 60%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n}\n\n.user-form[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 204px;\n  transition: all 0.5s;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n\n.title[_ngcontent-%COMP%] {\n  height: 80px;\n  \n\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.title[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  transform: scale(1.2);\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.text-center[_ngcontent-%COMP%]:hover::after {\n  width: 200px;\n}\n\n.logo-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%] {\n  border-top: 3px solid #fb5a69;\n  width: 20%;\n  transition: 0.2s;\n}\n\n.logo-container[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]:hover {\n  width: 40%;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.actions[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  color: #24b7d8;\n  text-transform: uppercase;\n}\n\n.text-center[_ngcontent-%COMP%]:hover   hr[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.alert[_ngcontent-%COMP%] {\n  margin: 2%;\n}\n\n.title-main[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 200%;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL3NvY2lhbC1yZWdpc3Rlci9zb2NpYWwtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQUE7QUFDQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGaXhlcyBleHRyYSB3aGl0ZSBjb250ZW50IG9uIHJpZ2h0ICovXG4ucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubXktY2FyZCB7XG4gIHdpZHRoOiA2MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udXNlci1mb3JtIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbn1cblxuLmxvZ28ge1xuICBwYWRkaW5nOiAyNHB4O1xuICBoZWlnaHQ6IDIwNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLmxvZ286aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi50aXRsZSB7XG4gIGhlaWdodDogODBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAzMyU7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnRpdGxlOmhvdmVyLCAudGl0bGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMilcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnRleHQtY2VudGVyOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmxvZ28tY29udGFpbmVyIGhyLCBociB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmI1YTY5O1xuICB3aWR0aDogMjAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubG9nby1jb250YWluZXI6aG92ZXIgaHIsIGhyOmhvdmVyIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5sb2dvLWNvbnRhaW5lcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aW9ucywgbGFiZWx7XG4gIGNvbG9yOiAjMjRiN2Q4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGV4dC1jZW50ZXI6aG92ZXIgaHJ7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5hbGVydHtcbiAgbWFyZ2luOiAyJTtcbn1cblxuLnRpdGxlLW1haW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8715:
/*!*********************************************!*\
  !*** ./src/app/guards/auth-access.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthAccessGuard: () => (/* binding */ AuthAccessGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-29 14:12:31
 * @modify date 2021-01-29 14:12:31
 * @desc Prevents logged in user from accessing Auth pages
 */



const AuthAccessGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (authService.isAuthenticated()) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};

/***/ }),

/***/ 354:
/*!*************************************************!*\
  !*** ./src/app/services/social-auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialAuthService: () => (/* binding */ SocialAuthService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.service */ 1457);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 2333);






class SocialAuthService {
  constructor(http, eventServie, authService) {
    this.http = http;
    this.eventServie = eventServie;
    this.authService = authService;
    this.authServiceUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.protocol}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationUrl}/social`;
  }
  validateGoogleTokenAndLogin(data) {
    return this.http.post(`${this.authServiceUrl}/google`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(user => this.triggerLogin(user)));
  }
  validateFacebookTokenAndLogin(data) {
    return this.http.post(`${this.authServiceUrl}/facebook`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(user => this.triggerLogin(user)));
  }
  socialSignUp(data) {
    return this.http.post(`${this.authServiceUrl}/signup`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(user => this.triggerLogin(user)));
  }
  triggerLogin(user) {
    this.authService.saveToSessionStorage(user);
    this.eventServie.loggedInUser.next(user);
  }
  static #_ = this.ɵfac = function SocialAuthService_Factory(t) {
    return new (t || SocialAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SocialAuthService,
    factory: SocialAuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_auth_auth_module_ts.js.map