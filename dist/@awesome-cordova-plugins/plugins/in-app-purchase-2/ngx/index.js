import { __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
var InAppPurchase2 = /** @class */ (function (_super) {
    __extends(InAppPurchase2, _super);
    function InAppPurchase2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2.prototype.getApplicationUsername = function () { return cordova(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2.prototype.get = function (idOrAlias) { return cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2.prototype.error = function (onError) { return cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2.prototype.register = function (product) { return cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2.prototype.when = function (query, event, callback) { return cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2.prototype.once = function (query, event, callback) { return cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2.prototype.off = function (callback) { return cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2.prototype.order = function (product, additionalData) { return cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2.prototype.ready = function (callback) { return cordova(this, "ready", {}, arguments); };
    InAppPurchase2.prototype.refresh = function () { return cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2.prototype.update = function () { return cordova(this, "update", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageSubscriptions = function () { return cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    InAppPurchase2.prototype.redeem = function () { return cordova(this, "redeem", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageBilling = function () { return cordova(this, "manageBilling", { "sync": true }, arguments); };
    InAppPurchase2.prototype.launchPriceChangeConfirmationFlow = function (productId, callback) { return cordova(this, "launchPriceChangeConfirmationFlow", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2.prototype, "QUIET", {
        get: function () { return cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { cordovaPropertySet(this, "QUIET", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERROR", {
        get: function () { return cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { cordovaPropertySet(this, "ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "WARNING", {
        get: function () { return cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { cordovaPropertySet(this, "WARNING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INFO", {
        get: function () { return cordovaPropertyGet(this, "INFO"); },
        set: function (value) { cordovaPropertySet(this, "INFO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DEBUG", {
        get: function () { return cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { cordovaPropertySet(this, "DEBUG", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "verbosity", {
        get: function () { return cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { cordovaPropertySet(this, "verbosity", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "autoFinishTransactions", {
        get: function () { return cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "sandbox", {
        get: function () { return cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { cordovaPropertySet(this, "sandbox", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "disableHostedContent", {
        get: function () { return cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SETUP", {
        get: function () { return cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PURCHASE", {
        get: function () { return cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_FINISH", {
        get: function () { return cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_COMMUNICATION", {
        get: function () { return cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_DOWNLOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REGISTERED", {
        get: function () { return cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID", {
        get: function () { return cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { cordovaPropertySet(this, "INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "VALID", {
        get: function () { return cordovaPropertyGet(this, "VALID"); },
        set: function (value) { cordovaPropertySet(this, "VALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REQUESTED", {
        get: function () { return cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INITIATED", {
        get: function () { return cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { cordovaPropertySet(this, "INITIATED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "APPROVED", {
        get: function () { return cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { cordovaPropertySet(this, "APPROVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FINISHED", {
        get: function () { return cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { cordovaPropertySet(this, "FINISHED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "OWNED", {
        get: function () { return cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { cordovaPropertySet(this, "OWNED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADING", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADED", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID_PAYLOAD", {
        get: function () { return cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONNECTION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_CONSUMED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INTERNAL_ERROR", {
        get: function () { return cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NEED_MORE_DATA", {
        get: function () { return cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "products", {
        get: function () { return cordovaPropertyGet(this, "products"); },
        set: function (value) { cordovaPropertySet(this, "products", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "validator", {
        get: function () { return cordovaPropertyGet(this, "validator"); },
        set: function (value) { cordovaPropertySet(this, "validator", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "applicationUsername", {
        get: function () { return cordovaPropertyGet(this, "applicationUsername"); },
        set: function (value) { cordovaPropertySet(this, "applicationUsername", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "log", {
        get: function () { return cordovaPropertyGet(this, "log"); },
        set: function (value) { cordovaPropertySet(this, "log", value); },
        enumerable: false,
        configurable: true
    });
    InAppPurchase2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InAppPurchase2, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    InAppPurchase2.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InAppPurchase2 });
    InAppPurchase2.pluginName = "InAppPurchase2";
    InAppPurchase2.plugin = "cordova-plugin-purchase";
    InAppPurchase2.pluginRef = "store";
    InAppPurchase2.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2.install = "ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    InAppPurchase2 = __decorate([], InAppPurchase2);
    return InAppPurchase2;
}(AwesomeCordovaNativePlugin));
export { InAppPurchase2 };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: InAppPurchase2, decorators: [{
            type: Injectable
        }], propDecorators: { QUIET: [], ERROR: [], WARNING: [], INFO: [], DEBUG: [], verbosity: [], autoFinishTransactions: [], sandbox: [], disableHostedContent: [], FREE_SUBSCRIPTION: [], PAID_SUBSCRIPTION: [], NON_RENEWING_SUBSCRIPTION: [], CONSUMABLE: [], NON_CONSUMABLE: [], ERR_SETUP: [], ERR_LOAD: [], ERR_PURCHASE: [], ERR_LOAD_RECEIPTS: [], ERR_CLIENT_INVALID: [], ERR_PAYMENT_CANCELLED: [], ERR_PAYMENT_INVALID: [], ERR_PAYMENT_NOT_ALLOWED: [], ERR_UNKNOWN: [], ERR_REFRESH_RECEIPTS: [], ERR_INVALID_PRODUCT_ID: [], ERR_FINISH: [], ERR_COMMUNICATION: [], ERR_SUBSCRIPTIONS_NOT_AVAILABLE: [], ERR_MISSING_TOKEN: [], ERR_VERIFICATION_FAILED: [], ERR_BAD_RESPONSE: [], ERR_REFRESH: [], ERR_PAYMENT_EXPIRED: [], ERR_DOWNLOAD: [], ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE: [], REGISTERED: [], INVALID: [], VALID: [], REQUESTED: [], INITIATED: [], APPROVED: [], FINISHED: [], OWNED: [], DOWNLOADING: [], DOWNLOADED: [], INVALID_PAYLOAD: [], CONNECTION_FAILED: [], PURCHASE_EXPIRED: [], PURCHASE_CONSUMED: [], INTERNAL_ERROR: [], NEED_MORE_DATA: [], products: [], validator: [], applicationUsername: [], getApplicationUsername: [], log: [], get: [], error: [], register: [], when: [], once: [], off: [], order: [], ready: [], refresh: [], update: [], manageSubscriptions: [], redeem: [], manageBilling: [], launchPriceChangeConfirmationFlow: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXB1cmNoYXNlLTIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O21CQUQzQzs7OztJQTZqQm9DLGtDQUEwQjs7OztJQTBMNUQsK0NBQXNCO0lBa0J0Qiw0QkFBRyxhQUFDLFNBQWlCO0lBVXJCLDhCQUFLLGFBQUMsT0FBaUI7SUFRdkIsaUNBQVEsYUFBQyxPQUFnRDtJQVV6RCw2QkFBSSxhQUFDLEtBQTBCLEVBQUUsS0FBYyxFQUFFLFFBQTJCO0lBYTVFLDZCQUFJLGFBQUMsS0FBMEIsRUFBRSxLQUFjLEVBQUUsUUFBMkI7SUFVNUUsNEJBQUcsYUFBQyxRQUFrQjtJQTZCdEIsOEJBQUssYUFBQyxPQUE0QixFQUFFLGNBQW9CO0lBS3hELDhCQUFLLGFBQUMsUUFBa0I7SUEwQ3hCLGdDQUFPO0lBTVAsK0JBQU07SUFJTiw0Q0FBbUI7SUFJbkIsK0JBQU07SUFJTixzQ0FBYTtJQUliLDBEQUFpQyxhQUMvQixTQUFpQixFQUNqQixRQUFvRTswQkFqV3RFLGlDQUFLOzs7Ozs7MEJBR0wsaUNBQUs7Ozs7OzswQkFHTCxtQ0FBTzs7Ozs7OzBCQUdQLGdDQUFJOzs7Ozs7MEJBR0osaUNBQUs7Ozs7OzswQkFNTCxxQ0FBUzs7Ozs7OzBCQU9ULGtEQUFzQjs7Ozs7OzBCQU10QixtQ0FBTzs7Ozs7OzBCQU9QLGdEQUFvQjs7Ozs7OzBCQUdwQiw2Q0FBaUI7Ozs7OzswQkFHakIsNkNBQWlCOzs7Ozs7MEJBR2pCLHFEQUF5Qjs7Ozs7OzBCQUd6QixzQ0FBVTs7Ozs7OzBCQUdWLDBDQUFjOzs7Ozs7MEJBR2QscUNBQVM7Ozs7OzswQkFHVCxvQ0FBUTs7Ozs7OzBCQUdSLHdDQUFZOzs7Ozs7MEJBR1osNkNBQWlCOzs7Ozs7MEJBR2pCLDhDQUFrQjs7Ozs7OzBCQUdsQixpREFBcUI7Ozs7OzswQkFHckIsK0NBQW1COzs7Ozs7MEJBR25CLG1EQUF1Qjs7Ozs7OzBCQUd2Qix1Q0FBVzs7Ozs7OzBCQUdYLGdEQUFvQjs7Ozs7OzBCQUdwQixrREFBc0I7Ozs7OzswQkFHdEIsc0NBQVU7Ozs7OzswQkFHViw2Q0FBaUI7Ozs7OzswQkFHakIsMkRBQStCOzs7Ozs7MEJBRy9CLDZDQUFpQjs7Ozs7OzBCQUdqQixtREFBdUI7Ozs7OzswQkFHdkIsNENBQWdCOzs7Ozs7MEJBR2hCLHVDQUFXOzs7Ozs7MEJBR1gsK0NBQW1COzs7Ozs7MEJBR25CLHdDQUFZOzs7Ozs7MEJBR1osaUVBQXFDOzs7Ozs7MEJBR3JDLHNDQUFVOzs7Ozs7MEJBR1YsbUNBQU87Ozs7OzswQkFHUCxpQ0FBSzs7Ozs7OzBCQUdMLHFDQUFTOzs7Ozs7MEJBR1QscUNBQVM7Ozs7OzswQkFHVCxvQ0FBUTs7Ozs7OzBCQUdSLG9DQUFROzs7Ozs7MEJBR1IsaUNBQUs7Ozs7OzswQkFHTCx1Q0FBVzs7Ozs7OzBCQUdYLHNDQUFVOzs7Ozs7MEJBS1YsMkNBQWU7Ozs7OzswQkFHZiw2Q0FBaUI7Ozs7OzswQkFHakIsNENBQWdCOzs7Ozs7MEJBR2hCLDZDQUFpQjs7Ozs7OzBCQUdqQiwwQ0FBYzs7Ozs7OzBCQUdkLDBDQUFjOzs7Ozs7MEJBR2Qsb0NBQVE7Ozs7OzswQkFHUixxQ0FBUzs7Ozs7OzBCQVNULCtDQUFtQjs7Ozs7OzBCQVFuQiwrQkFBRzs7Ozs7O2dIQS9MUSxjQUFjO29IQUFkLGNBQWM7Ozs7Ozs7SUFBZCxjQUFjLGtCQUFkLGNBQWM7eUJBN2pCM0I7RUE2akJvQywwQkFBMEI7U0FBakQsY0FBYzs0RkFBZCxjQUFjO2tCQUQxQixVQUFVOzhCQUdULEtBQUssTUFHTCxLQUFLLE1BR0wsT0FBTyxNQUdQLElBQUksTUFHSixLQUFLLE1BTUwsU0FBUyxNQU9ULHNCQUFzQixNQU10QixPQUFPLE1BT1Asb0JBQW9CLE1BR3BCLGlCQUFpQixNQUdqQixpQkFBaUIsTUFHakIseUJBQXlCLE1BR3pCLFVBQVUsTUFHVixjQUFjLE1BR2QsU0FBUyxNQUdULFFBQVEsTUFHUixZQUFZLE1BR1osaUJBQWlCLE1BR2pCLGtCQUFrQixNQUdsQixxQkFBcUIsTUFHckIsbUJBQW1CLE1BR25CLHVCQUF1QixNQUd2QixXQUFXLE1BR1gsb0JBQW9CLE1BR3BCLHNCQUFzQixNQUd0QixVQUFVLE1BR1YsaUJBQWlCLE1BR2pCLCtCQUErQixNQUcvQixpQkFBaUIsTUFHakIsdUJBQXVCLE1BR3ZCLGdCQUFnQixNQUdoQixXQUFXLE1BR1gsbUJBQW1CLE1BR25CLFlBQVksTUFHWixxQ0FBcUMsTUFHckMsVUFBVSxNQUdWLE9BQU8sTUFHUCxLQUFLLE1BR0wsU0FBUyxNQUdULFNBQVMsTUFHVCxRQUFRLE1BR1IsUUFBUSxNQUdSLEtBQUssTUFHTCxXQUFXLE1BR1gsVUFBVSxNQUtWLGVBQWUsTUFHZixpQkFBaUIsTUFHakIsZ0JBQWdCLE1BR2hCLGlCQUFpQixNQUdqQixjQUFjLE1BR2QsY0FBYyxNQUdkLFFBQVEsTUFHUixTQUFTLE1BU1QsbUJBQW1CLE1BR25CLHNCQUFzQixNQUt0QixHQUFHLE1BYUgsR0FBRyxNQVVILEtBQUssTUFRTCxRQUFRLE1BVVIsSUFBSSxNQWFKLElBQUksTUFVSixHQUFHLE1BNkJILEtBQUssTUFLTCxLQUFLLE1BMENMLE9BQU8sTUFNUCxNQUFNLE1BSU4sbUJBQW1CLE1BSW5CLE1BQU0sTUFJTixhQUFhLE1BSWIsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3RPcHRpb25zIHtcbiAgaWQ6IHN0cmluZztcbiAgYWxpYXM/OiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVmZXNoUmVzdWx0IHtcbiAgY2FuY2VsbGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcbiAgZmFpbGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcbiAgY29tcGxldGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcbiAgZmluaXNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBJQVBQcm9kdWN0cyA9IElBUFByb2R1Y3RbXSAmIHtcbiAgLyoqXG4gICAqIEdldCBwcm9kdWN0IGJ5IElEXG4gICAqL1xuICBieUlkOiB7IFtpZDogc3RyaW5nXTogSUFQUHJvZHVjdCB9O1xuICAvKipcbiAgICogR2V0IHByb2R1Y3QgYnkgYWxpYXNcbiAgICovXG4gIGJ5QWxpYXM6IHsgW2FsaWFzOiBzdHJpbmddOiBJQVBQcm9kdWN0IH07XG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIHByb2R1Y3RzIChmb3IgdGVzdGluZyBvbmx5KS5cbiAgICovXG4gIHJlc2V0OiAoKSA9PiB7fTtcbn07XG5cbmV4cG9ydCB0eXBlIElBUFF1ZXJ5Q2FsbGJhY2sgPSAoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHZvaWQpIHwgKChlcnJvcjogSUFQRXJyb3IpID0+IHZvaWQpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3Qge1xuICBpZDogc3RyaW5nO1xuXG4gIGFsaWFzPzogc3RyaW5nO1xuXG4gIHR5cGU6IHN0cmluZztcblxuICBzdGF0ZTogc3RyaW5nO1xuXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBwcmljZU1pY3JvczogbnVtYmVyO1xuXG4gIHByaWNlOiBzdHJpbmc7XG5cbiAgY3VycmVuY3k6IHN0cmluZztcblxuICBsb2FkZWQ6IGJvb2xlYW47XG5cbiAgdmFsaWQ6IGJvb2xlYW47XG5cbiAgY2FuUHVyY2hhc2U6IGJvb2xlYW47XG5cbiAgb3duZWQ6IGJvb2xlYW47XG5cbiAgZG93bmxvYWRpbmc/OiBib29sZWFuO1xuXG4gIGRvd25sb2FkZWQ/OiBib29sZWFuO1xuXG4gIGxhc3RSZW5ld2FsRGF0ZT86IERhdGU7XG5cbiAgZXhwaXJ5RGF0ZT86IERhdGU7XG5cbiAgaW50cm9QcmljZT86IHN0cmluZztcblxuICBpbnRyb1ByaWNlTWljcm9zPzogbnVtYmVyO1xuXG4gIGludHJvUHJpY2VOdW1iZXJPZlBlcmlvZHM/OiBudW1iZXI7XG5cbiAgaW50cm9QcmljZVN1YnNjcmlwdGlvblBlcmlvZD86IHN0cmluZztcblxuICBpbnRyb1ByaWNlUGF5bWVudE1vZGU/OiBzdHJpbmc7XG5cbiAgaW5lbGlnaWJsZUZvckludHJvUHJpY2U/OiBib29sZWFuO1xuXG4gIGJpbGxpbmdQZXJpb2Q/OiBudW1iZXI7XG5cbiAgYmlsbGluZ1BlcmlvZFVuaXQ/OiBzdHJpbmc7XG5cbiAgdHJpYWxQZXJpb2Q/OiBudW1iZXI7XG5cbiAgdHJpYWxQZXJpb2RVbml0Pzogc3RyaW5nO1xuXG4gIGFkZGl0aW9uYWxEYXRhPzogYW55O1xuXG4gIHRyYW5zYWN0aW9uPzogUGxheVN0b3JlUmVjZWlwdCB8IEFwcFN0b3JlUmVjZWlwdDtcblxuICAvKipcbiAgICogQ2FsbCBgcHJvZHVjdC5maW5pc2goKWAgdG8gY29uZmlybSB0byB0aGUgc3RvcmUgdGhhdCBhbiBhcHByb3ZlZCBvcmRlciBoYXMgYmVlbiBkZWxpdmVyZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBjaGFuZ2UgdGhlIHByb2R1Y3Qgc3RhdGUgZnJvbSBgQVBQUk9WRURgIHRvIGBGSU5JU0hFRGAgKHNlZSBwcm9kdWN0IGxpZmUtY3ljbGUpLlxuICAgKlxuICAgKiBBcyBsb25nIGFzIHlvdSBrZWVwIHRoZSBwcm9kdWN0IGluIHN0YXRlIGBBUFBST1ZFRGA6XG4gICAqXG4gICAqICAtIHRoZSBtb25leSBtYXkgbm90IGJlIGluIHlvdXIgYWNjb3VudCAoaS5lLiB1c2VyIGlzbid0IGNoYXJnZWQpXG4gICAqICAtIHlvdSB3aWxsIHJlY2VpdmUgdGhlIGBhcHByb3ZlZGAgZXZlbnQgZWFjaCB0aW1lIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMsXG4gICAqICAgIHdoZXJlIHlvdSBzaG91bGQgdHJ5IGFnYWluIHRvIGZpbmlzaCB0aGUgcGVuZGluZyB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogZXhhbXBsZSB1c2UqKlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBzdG9yZS53aGVuKFwicHJvZHVjdC5pZFwiKS5hcHByb3ZlZChmdW5jdGlvbihwcm9kdWN0KXtcbiAgICogICAgIC8vIHN5bmNocm9ub3VzXG4gICAqICAgICBhcHAudW5sb2NrRmVhdHVyZSgpO1xuICAgKiAgICAgcHJvZHVjdC5maW5pc2goKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBzdG9yZS53aGVuKFwicHJvZHVjdC5pZFwiKS5hcHByb3ZlZChmdW5jdGlvbihwcm9kdWN0KXtcbiAgICogICAgIC8vIGFzeW5jaHJvbm91c1xuICAgKiAgICAgYXBwLmRvd25sb2FkRmVhdHVyZShmdW5jdGlvbigpIHtcbiAgICogICAgICAgICBwcm9kdWN0LmZpbmlzaCgpO1xuICAgKiAgICAgfSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGZpbmlzaCgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSBwdXJjaGFzZSB2YWxpZGF0aW9uIGFzIGRlZmluZWQgYnkgdGhlIGBzdG9yZS52YWxpZGF0b3JgIGF0dHJpYnV0ZS5cbiAgICpcbiAgICogcmV0dXJuIHZhbHVlKipcbiAgICpcbiAgICogQSBQcm9taXNlIHdpdGggdGhlIGZvbGxvd2luZyBtZXRob2RzOlxuICAgKlxuICAgKiAgLSBgZG9uZShmdW5jdGlvbihwcm9kdWN0KXt9KWBcbiAgICogICAgLSBjYWxsZWQgd2hldGhlciB2ZXJpZmljYXRpb24gZmFpbGVkIG9yIHN1Y2NlZWRlZC5cbiAgICogIC0gYGV4cGlyZWQoZnVuY3Rpb24ocHJvZHVjdCl7fSlgXG4gICAqICAgIC0gY2FsbGVkIGlmIHRoZSBwdXJjaGFzZSBleHBpcmVkLlxuICAgKiAgLSBgc3VjY2VzcyhmdW5jdGlvbihwcm9kdWN0LCBwdXJjaGFzZURhdGEpe30pYFxuICAgKiAgICAtIGNhbGxlZCBpZiB0aGUgcHVyY2hhc2UgaXMgdmFsaWQgYW5kIHZlcmlmaWVkLlxuICAgKiAgICAtIGBwdXJjaGFzZURhdGFgIGlzIHRoZSBkZXZpY2UgZGVwZW5kZW50IHRyYW5zYWN0aW9uIGRldGFpbHNcbiAgICogICAgICByZXR1cm5lZCBieSB0aGUgdmFsaWRhdG9yLCB3aGljaCB5b3UgY2FuIG1vc3QgcHJvYmFibHkgaWdub3JlLlxuICAgKiAgLSBgZXJyb3IoZnVuY3Rpb24oZXJyKXt9KWBcbiAgICogICAgLSB2YWxpZGF0aW9uIGZhaWxlZCwgZWl0aGVyIGJlY2F1c2Ugb2YgZXhwaXJ5IG9yIGNvbW11bmljYXRpb25cbiAgICogICAgICBmYWlsdXJlLlxuICAgKiAgICAtIGBlcnJgIGlzIGEgc3RvcmUuRXJyb3Igb2JqZWN0LCB3aXRoIGEgY29kZSBleHBlY3RlZCB0byBiZVxuICAgKiAgICAgIGBzdG9yZS5FUlJfUEFZTUVOVF9FWFBJUkVEYCBvciBgc3RvcmUuRVJSX1ZFUklGSUNBVElPTl9GQUlMRURgLlxuICAgKi9cbiAgdmVyaWZ5KCk6IGFueTtcblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xuXG4gIHN0YXRlQ2hhbmdlZCgpOiB2b2lkO1xuXG4gIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgb25jZShldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xuXG4gIG9mZihjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xuXG4gIHRyaWdnZXIoYWN0aW9uOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdEV2ZW50cyB7XG4gIC8qKiBDYWxsZWQgd2hlbiBwcm9kdWN0IGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHN0b3JlLiAqL1xuICBsb2FkZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGFueSBjaGFuZ2Ugb2NjdXJlZCB0byBhIHByb2R1Y3QuICovXG4gIHVwZGF0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGZhaWxlZC4gVGhlIGBlcnJgIHBhcmFtZXRlciBpcyBhbiBJQVBFcnJvciBvYmplY3QuICovXG4gIGVycm9yOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgYXBwcm92ZWQuICovXG4gIGFwcHJvdmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhIG5vbi1jb25zdW1hYmxlIHByb2R1Y3Qgb3Igc3Vic2NyaXB0aW9uIGlzIG93bmVkLiAqL1xuICBvd25lZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGNhbmNlbGxlZCBieSB0aGUgdXNlci4gKi9cbiAgY2FuY2VsbGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBpcyByZWZ1bmRlZCBieSB0aGUgdXNlci4gKi9cbiAgcmVmdW5kZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHByb2R1Y3QgaGFzIGp1c3QgYmVlbiByZWdpc3RlcmVkLiAqL1xuICByZWdpc3RlcmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHJvZHVjdCBkZXRhaWxzIGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgbG9hZGVkLiAqL1xuICB2YWxpZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHByb2R1Y3QgY2Fubm90IGJlIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS4gKi9cbiAgaW52YWxpZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgaGFzIGp1c3QgYmVlbiByZXF1ZXN0ZWQuICovXG4gIHJlcXVlc3RlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHB1cmNoYXNlIHByb2Nlc3MgaGFzIGJlZW4gaW5pdGlhdGVkLiAqL1xuICBpbml0aWF0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwdXJjaGFzZSBwcm9jZXNzIGhhcyBjb21wbGV0ZWQuICovXG4gIGZpbmlzaGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XG4gIC8qKiBDYWxsZWQgd2hlbiByZWNlaXB0IHZhbGlkYXRpb24gc3VjY2Vzc2Z1bC4gKi9cbiAgdmVyaWZpZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIHJlY2VpcHQgdmVyaWZpY2F0aW9uIGZhaWxlZC4gKi9cbiAgdW52ZXJpZmllZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gdmFsaWRhdGlvbiBmaW5kIGEgc3Vic2NyaXB0aW9uIHRvIGJlIGV4cGlyZWQuICovXG4gIGV4cGlyZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcbiAgLyoqIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaXMgc3RhcnRlZC4gKi9cbiAgZG93bmxvYWRpbmc6IChwcm9kdWN0OiBJQVBQcm9kdWN0LCBwcm9ncmVzczogYW55LCB0aW1lX3JlbWFpbmluZzogYW55KSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xuICAvKiogQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZC4gKi9cbiAgZG93bmxvYWRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xufVxuXG5leHBvcnQgdHlwZSBQbGF5U3RvcmVSZWNlaXB0ID0ge1xuICBpZDogc3RyaW5nO1xuICBwdXJjaGFzZVN0YXRlOiBudW1iZXI7XG4gIHB1cmNoYXNlVG9rZW46IHN0cmluZztcbiAgcmVjZWlwdDogc3RyaW5nO1xuICBzaWduYXR1cmU6IHN0cmluZztcbiAgdHlwZTogJ2FuZHJvaWQtcGxheXN0b3JlJztcbn07XG5cbmV4cG9ydCB0eXBlIEFwcFN0b3JlUmVjZWlwdCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgYXBwU3RvcmVSZWNlaXB0OiBzdHJpbmc7XG4gIG9yaWdpbmFsX3RyYW5zYWN0aW9uX2lkOiBzdHJpbmc7XG4gIHR5cGU6ICdpb3MtYXBwc3RvcmUnO1xufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJQVBFcnJvciB7XG4gIGNvZGU6IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBQdXJjaGFzZSAyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEluLUFwcCBQdXJjaGFzZSBvbiBpT1MsIEFuZHJvaWQsIFdpbmRvd3MsIG1hY09TIGFuZCBYQm94LlxuICpcbiAqICMjIEZlYXR1cmVzXG4gKlxuICogfCAgfCBpb3MgfCBhbmRyb2lkIHwgd2luLTggfCB3aW4tMTAvdXdwIHwgbWFjIHxcbiAqIHwtLXwtLXwtLXwtLXwtLXwtLXxcbiAqIHwgY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCBub24gY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCBzdWJzY3JpcHRpb25zIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcbiAqIHwgcmVzdG9yZSBwdXJjaGFzZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxuICogfCByZWNlaXB0IHZhbGlkYXRpb25zIHwg4pyFIHwg4pyFIHwgIHwg4pyFIHwg4pyFIHxcbiAqIHwgZG93bmxvYWRhYmxlIGNvbnRlbnQgfCDinIUgfCAgIHwgICB8ICAgfCDinIUgfFxuICogfCBpbnRyb2R1Y3RvcnkgcHJpY2VzIHwg4pyFIHwg4pyFIHwgICB8IOKchSB8IOKchSB8XG4gKlxuICogU3VwcG9ydHM6XG4gKlxuICogIC0gKippT1MqKiB2ZXJzaW9uIDcuMCBvciBoaWdoZXIuXG4gKiAgLSAqKkFuZHJvaWQqKiB2ZXJzaW9uIDIuMiAoQVBJIGxldmVsIDgpIG9yIGhpZ2hlclxuICogICAgLSB3aXRoIEdvb2dsZSBQbGF5IGNsaWVudCB2ZXJzaW9uIDMuOS4xNiBvciBoaWdoZXJcbiAqICAtICoqV2luZG93cyoqIFN0b3JlL1Bob25lIDguMSBvciBoaWdoZXJcbiAqICAtICoqV2luZG93cyAxMCBNb2JpbGUqKlxuICogIC0gKiptYWNPUyoqIHZlcnNpb24gMTBcbiAqICAtICoqWGJveCBPbmUqKlxuICogICAgLSAoYW5kIGFueSBwbGF0Zm9ybSBzdXBwb3J0aW5nIE1pY3Jvc29mdCdzIFVXUClcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBQdXJjaGFzZTIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW4tYXBwLXB1cmNoYXNlLTIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHN0b3JlOiBJbkFwcFB1cmNoYXNlMikge1xuICogICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICogICAgdGhpcy5zdG9yZS5yZWdpc3Rlcih7XG4gKiAgICAgIGlkOiBcIm15X3Byb2R1Y3RfaWRcIixcbiAqICAgICAgdHlwZTogdGhpcy5zdG9yZS5OT05fUkVORVdJTkdfU1VCU0NSSVBUSU9OLFxuICogICAgfSk7XG4gKiAgICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpXG4gKiAgICAgIC5hcHByb3ZlZChwID0+IHAudmVyaWZ5KCkpXG4gKiAgICAgIC52ZXJpZmllZChwID0+IHAuZmluaXNoKCkpO1xuICogICAgdGhpcy5zdG9yZS5yZWZyZXNoKCk7XG4gKiAgIH0pO1xuICogfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc3RvcmUub3JkZXIoXCJteV9wcm9kdWN0X2lkXCIpO1xuICpcbiAqIGBgYFxuICpcbiAqICMjIEZ1bGwgZXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICAvLyBBZnRlciBwbGF0Zm9ybSByZWFkeVxuICogIHRoaXMuc3RvcmUudmVyYm9zaXR5ID0gdGhpcy5zdG9yZS5ERUJVRztcbiAqICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcbiAqICAgIGlkOiBcIm15X3Byb2R1Y3RfaWRcIixcbiAqICAgIHR5cGU6IHRoaXMuc3RvcmUuUEFJRF9TVUJTQ1JJUFRJT04sXG4gKiAgfSk7XG4gKlxuICogIC8vIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgc3BlY2lmaWMgcHJvZHVjdFxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikucmVnaXN0ZXJlZCggKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcbiAqICAgIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkOiAnICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xuICogIH0pO1xuICpcbiAqICAvLyBVcGRhdGVkXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKS51cGRhdGVkKCAocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xuICogICAgY29uc29sZS5sb2coJ1VwZGF0ZWQnICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xuICogIH0pO1xuICpcbiAqICAvLyBVc2VyIGNsb3NlZCB0aGUgbmF0aXZlIHB1cmNoYXNlIGRpYWxvZ1xuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikuY2FuY2VsbGVkKCAocHJvZHVjdCkgPT4ge1xuICogICAgICBjb25zb2xlLmVycm9yKCdQdXJjaGFzZSB3YXMgQ2FuY2VsbGVkJyk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFRyYWNrIGFsbCBzdG9yZSBlcnJvcnNcbiAqICB0aGlzLnN0b3JlLmVycm9yKCAoZXJyKSA9PiB7XG4gKiAgICBjb25zb2xlLmVycm9yKCdTdG9yZSBFcnJvciAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gKiAgfSk7XG4gKlxuICogIC8vIFJ1biBzb21lIGNvZGUgb25seSB3aGVuIHRoZSBzdG9yZSBpcyByZWFkeSB0byBiZSB1c2VkXG4gKiAgdGhpcy5zdG9yZS5yZWFkeSgoKSA9PiAge1xuICogICAgY29uc29sZS5sb2coJ1N0b3JlIGlzIHJlYWR5Jyk7XG4gKiAgICBjb25zb2xlLmxvZygnUHJvZHVjdHM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlLnByb2R1Y3RzKSk7XG4gKiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlLmdldChcIm15X3Byb2R1Y3RfaWRcIikpKTtcbiAqICB9KTtcbiAqXG4gKiAgLy8gUmVmcmVzaCB0aGUgc3RhdHVzIG9mIGluLWFwcCBwcm9kdWN0c1xuICogIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xuICpcbiAqICAuLi5cbiAqXG4gKiAgLy8gVG8gbWFrZSBhIHB1cmNoYXNlXG4gKiAgdGhpcy5zdG9yZS5vcmRlcihcIm15X3Byb2R1Y3RfaWRcIik7XG4gKlxuICogYGBgXG4gKlxuICogIyMgUGhpbG9zb3BoeVxuICpcbiAqIFRoZSBBUEkgaXMgbW9zdGx5IGV2ZW50cyBiYXNlZC4gQXMgYSB1c2VyIG9mIHRoaXMgcGx1Z2luLFxuICogeW91IHdpbGwgaGF2ZSB0byByZWdpc3RlciBsaXN0ZW5lcnMgdG8gY2hhbmdlcyBoYXBwZW5pbmcgdG8gdGhlIHByb2R1Y3RzXG4gKiB5b3UgcmVnaXN0ZXIuXG4gKlxuICogVGhlIGNvcmUgb2YgdGhlIGxpc3RlbmluZyBtZWNoYW5pc20gaXMgdGhlIGB3aGVuKClgIG1ldGhvZC4gSXQgYWxsb3dzIHlvdSB0b1xuICogYmUgbm90aWZpZWQgb2YgY2hhbmdlcyB0byBvbmUgb3IgYSBzZXQgb2YgcHJvZHVjdHMgdXNpbmcgYSBxdWVyeSBtZWNoYW5pc206XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgdGhpcy5zdG9yZS53aGVuKFwicHJvZHVjdFwiKS51cGRhdGVkKHJlZnJlc2hTY3JlZW4pOyAvLyBtYXRjaCBhbnkgcHJvZHVjdFxuICogIHRoaXMuc3RvcmUud2hlbihcImZ1bGxfdmVyc2lvblwiKS5vd25lZCh1bmxvY2tBcHApOyAvLyBtYXRjaCBhIHNwZWNpZmljIHByb2R1Y3RcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJzdWJzY3JpcHRpb25cIikuYXBwcm92ZWQoc2VydmVyQ2hlY2spOyAvLyBtYXRjaCBhbGwgc3Vic2NyaXB0aW9uc1xuICogIHRoaXMuc3RvcmUud2hlbihcImRvd25sb2FkYWJsZSBjb250ZW50XCIpLmRvd25sb2FkZWQoc2hvd0NvbnRlbnQpO1xuICogYGBgXG4gKlxuICogVGhlIGB1cGRhdGVkYCBldmVudCBpcyBmaXJlZCB3aGVuZXZlciBvbmUgb2YgdGhlIGZpZWxkcyBvZiBhIHByb2R1Y3QgaXNcbiAqIGNoYW5nZWQgKGl0cyBgb3duZWRgIHN0YXR1cyBmb3IgaW5zdGFuY2UpLlxuICpcbiAqIFRoaXMgZXZlbnQgcHJvdmlkZXMgYSBnZW5lcmljIHdheSB0byB0cmFjayB0aGUgc3RhdHVzZXMgb2YgeW91ciBwdXJjaGFzZXMsXG4gKiB0byB1bmxvY2sgZmVhdHVyZXMgd2hlbiBuZWVkZWQgYW5kIHRvIHJlZnJlc2ggeW91ciB2aWV3cyBhY2NvcmRpbmdseS5cbiAqXG4gKiAjIyBSZWdpc3RlcmluZyBwcm9kdWN0c1xuICpcbiAqIFRoZSBzdG9yZSBuZWVkcyB0byBrbm93IHRoZSB0eXBlIGFuZCBpZGVudGlmaWVycyBvZiB5b3VyIHByb2R1Y3RzIGJlZm9yZSB5b3VcbiAqIGNhbiB1c2UgdGhlbSBpbiB5b3VyIGNvZGUuXG4gKlxuICogVXNlIGBzdG9yZS5yZWdpc3RlcigpYCB0byBkZWZpbmUgdGhlbSBiZWZvcmUgeW91ciBmaXJzdCBjYWxsIHRvIGBzdG9yZS5yZWZyZXNoKClgLlxuICpcbiAqIE9uY2UgcmVnaXN0ZXJlZCwgeW91IGNhbiB1c2UgYHN0b3JlLmdldCgpYCB0byByZXRyaWV2ZSBhbiBgSUFQUHJvZHVjdGAgb2JqZWN0LlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcbiAqICAgIGlkOiBcIm15X2NvbnN1bWFibGUxXCIsXG4gKiAgICB0eXBlOiB0aGlzLnN0b3JlLkNPTlNVTUFCTEVcbiAqICB9KTtcbiAqICAuLi5cbiAqICBjb25zdCBwID0gdGhpcy5zdG9yZS5nZXQoXCJteV9jb25zdW1hYmxlMVwiKTtcbiAqIGBgYFxuICpcbiAqIFRoZSBwcm9kdWN0IGBpZGAgYW5kIGB0eXBlYCBoYXZlIHRvIG1hdGNoIHByb2R1Y3RzIGRlZmluZWQgaW4geW91clxuICogQXBwbGUsIEdvb2dsZSBvciBNaWNyb3NvZnQgZGV2ZWxvcGVyIGNvbnNvbGVzLlxuICpcbiAqIExlYXJuIG1vcmUgYWJvdXQgaXQgW2Zyb20gdGhlIHdpa2ldKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL3dpa2kpLlxuICpcbiAqICMjIERpc3BsYXlpbmcgcHJvZHVjdHNcbiAqXG4gKiBSaWdodCBhZnRlciB5b3UgcmVnaXN0ZXJlZCB5b3VyIHByb2R1Y3RzLCBub3RoaW5nIG11Y2ggaXMga25vd24gYWJvdXQgdGhlbVxuICogZXhjZXB0IHRoZWlyIGBpZGAsIGB0eXBlYCBhbmQgYW4gb3B0aW9uYWwgYGFsaWFzYC5cbiAqXG4gKiBXaGVuIHlvdSBwZXJmb3JtIHRoZSBpbml0aWFsIGNhbGwgdG8gYHN0b3JlLnJlZnJlc2goKWAsIHRoZSBwbGF0Zm9ybXMnIHNlcnZlciB3aWxsXG4gKiBiZSBjb250YWN0ZWQgdG8gbG9hZCBpbmZvcm1hdGlvbnMgYWJvdXQgdGhlIHJlZ2lzdGVyZWQgcHJvZHVjdHM6IGh1bWFuXG4gKiByZWFkYWJsZSBgdGl0bGVgIGFuZCBgZGVzY3JpcHRpb25gLCBgcHJpY2VgLCBldGMuXG4gKlxuICogVGhpcyBpc24ndCBhbiBvcHRpb25hbCBzdGVwLCBzdG9yZSBvd25lcnMgcmVxdWlyZSB5b3VcbiAqIHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgYSBwcm9kdWN0IGV4YWN0bHkgYXMgcmV0cmlldmVkIGZyb20gdGhlaXIgc2VydmVyOiBub1xuICogaGFyZC1jb2Rpbmcgb2YgcHJpY2UgYW5kIHRpdGxlIGFsbG93ZWQhIFRoaXMgaXMgYWxzbyBjb252ZW5pZW50IGZvciB5b3VcbiAqIGFzIHlvdSBjYW4gY2hhbmdlIHRoZSBwcmljZSBvZiB5b3VyIGl0ZW1zIGtub3dpbmcgdGhhdCBpdCdsbCBiZSByZWZsZWN0ZWQgaW5zdGFudGx5XG4gKiBvbiB5b3VyIGNsaWVudHMnIGRldmljZXMuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbmZvcm1hdGlvbiBtYXkgbm90IGJlIGF2YWlsYWJsZSB3aGVuIHRoZSBmaXJzdCB2aWV3IHRoYXQgbmVlZHNcbiAqIHRoZW0gYXBwZWFycyBvbiBzY3JlZW4uIEZvciB5b3UsIHRoZSBiZXN0IG9wdGlvbiBpcyB0byBoYXZlIHlvdXIgdmlldyBtb25pdG9yXG4gKiBjaGFuZ2VzIG1hZGUgdG8gdGhlIHByb2R1Y3QuXG4gKlxuICogIyMgUHVyY2hhc2luZ1xuICpcbiAqICMjIyMgaW5pdGlhdGUgYSBwdXJjaGFzZVxuICpcbiAqIFB1cmNoYXNlcyBhcmUgaW5pdGlhdGVkIHVzaW5nIHRoZSBgc3RvcmUub3JkZXIoXCJzb21lX3Byb2R1Y3RfaWRcIilgIG1ldGhvZC5cbiAqXG4gKiBUaGUgc3RvcmUgd2lsbCBtYW5hZ2UgdGhlIGludGVybmFsIHB1cmNoYXNlIGZsb3cuIEl0J2xsIGVuZDpcbiAqXG4gKiAgLSB3aXRoIGFuIGBhcHByb3ZlZGAgZXZlbnQuIFRoZSBwcm9kdWN0IGVudGVycyB0aGUgYEFQUFJPVkVEYCBzdGF0ZS5cbiAqICAtIHdpdGggYSBgY2FuY2VsbGVkYCBldmVudC4gVGhlIHByb2R1Y3QgZ2V0cyBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLlxuICogIC0gd2l0aCBhbiBgZXJyb3JgIGV2ZW50LiBUaGUgcHJvZHVjdCBnZXRzIGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXG4gKlxuICogU2VlIHRoZSBwcm9kdWN0IGxpZmUtY3ljbGUgc2VjdGlvbiBmb3IgZGV0YWlscyBhYm91dCBwcm9kdWN0IHN0YXRlcy5cbiAqXG4gKiAjIyMjIGZpbmlzaCBhIHB1cmNoYXNlXG4gKlxuICogT25jZSB0aGUgdHJhbnNhY3Rpb24gaXMgYXBwcm92ZWQsIHRoZSBwcm9kdWN0IHN0aWxsIGlzbid0IG93bmVkOiB0aGUgc3RvcmUgbmVlZHNcbiAqIGNvbmZpcm1hdGlvbiB0aGF0IHRoZSBwdXJjaGFzZSB3YXMgZGVsaXZlcmVkIGJlZm9yZSBjbG9zaW5nIHRoZSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBUbyBjb25maXJtIGRlbGl2ZXJ5LCB5b3UnbGwgdXNlIHRoZSBgcHJvZHVjdC5maW5pc2goKWAgbWV0aG9kLlxuICpcbiAqICMjIyMgZXhhbXBsZSB1c2FnZVxuICpcbiAqIER1cmluZyBpbml0aWFsaXphdGlvbjpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHRoaXMuc3RvcmUud2hlbihcImV4dHJhX2NoYXB0ZXJcIikuYXBwcm92ZWQoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcbiAqICAgLy8gZG93bmxvYWQgdGhlIGZlYXR1cmVcbiAqICAgYXBwLmRvd25sb2FkRXh0cmFDaGFwdGVyKClcbiAqICAgLnRoZW4oKCkgPT4gcHJvZHVjdC5maW5pc2goKSk7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIHB1cmNoYXNlIGJ1dHRvbiBpcyBjbGlja2VkOlxuICogYGBgdHlwZXNjcmlwdFxuICogdGhpcy5zdG9yZS5vcmRlcihcImV4dHJhX2NoYXB0ZXJcIik7XG4gKiBgYGBcbiAqXG4gKiAjIyMjIHVuLWZpbmlzaGVkIHB1cmNoYXNlc1xuICpcbiAqIElmIHlvdXIgYXBwIHdhc24ndCBhYmxlIHRvIGRlbGl2ZXIgdGhlIGNvbnRlbnQsIGBwcm9kdWN0LmZpbmlzaCgpYCB3b24ndCBiZSBjYWxsZWQuXG4gKlxuICogRG9uJ3Qgd29ycnk6IHRoZSBgYXBwcm92ZWRgIGV2ZW50IHdpbGwgYmUgcmUtdHJpZ2dlcmVkIHRoZSBuZXh0IHRpbWUgeW91XG4gKiBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLCB3aGljaCBjYW4gdmVyeSB3ZWxsIGJlIHRoZSBuZXh0IHRpbWVcbiAqIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMuIFBlbmRpbmcgdHJhbnNhY3Rpb25zIGFyZSBwZXJzaXN0YW50LlxuICpcbiAqICMjIyMgc2ltcGxlIGNhc2VcbiAqXG4gKiBJbiB0aGUgbW9zdCBzaW1wbGUgY2FzZSwgd2hlcmU6XG4gKlxuICogIC0gZGVsaXZlcnkgb2YgcHVyY2hhc2VzIGlzIG9ubHkgbG9jYWwgO1xuICogIC0geW91IGRvbid0IHdhbnQgKG9yIG5lZWQpIHRvIGltcGxlbWVudCByZWNlaXB0IHZhbGlkYXRpb24gO1xuICpcbiAqIFlvdSBtYXkganVzdCB3YW50IHRvIGZpbmlzaCBhbGwgcHVyY2hhc2VzIGF1dG9tYXRpY2FsbHkuIFlvdSBjYW4gZG8gaXQgdGhpcyB3YXk6XG4gKiBgYGBqc1xuICogdGhpcy5zdG9yZS53aGVuKFwicHJvZHVjdFwiKS5hcHByb3ZlZCgocDogSUFQUHJvZHVjdCkgPT4gcC5maW5pc2goKSk7XG4gKiBgYGBcbiAqXG4gKiBOT1RFOiB0aGUgXCJwcm9kdWN0XCIgcXVlcnkgd2lsbCBtYXRjaCBhbnkgcHVyY2hhc2VzIChzZWUgXCJxdWVyaWVzXCIgdG8gbGVhcm4gbW9yZSBkZXRhaWxzIGFib3V0IHF1ZXJpZXMpLlxuICpcbiAqICMjIFJlY2VpcHQgdmFsaWRhdGlvblxuICpcbiAqIFRvIGdldCB0aGUgbW9zdCB1cC10by1kYXRlIGluZm9ybWF0aW9uIGFib3V0IHB1cmNoYXNlcyAoaW4gY2FzZSBhIHB1cmNoYXNlIGhhdmUgYmVlbiBjYW5jZWxlZCwgb3IgYSBzdWJzY3JpcHRpb24gcmVuZXdlZCksXG4gKiB5b3Ugc2hvdWxkIGltcGxlbWVudCBzZXJ2ZXIgc2lkZSByZWNlaXB0IHZhbGlkYXRpb24uXG4gKlxuICogVGhpcyBhbHNvIHByb3RlY3RzIHlvdSBhZ2FpbnN0IGZha2UgXCJwdXJjaGFzZXNcIiwgbWFkZSBieSBzb21lIHVzZXJzIHVzaW5nXG4gKiBcImZyZWUgaW4tYXBwIHB1cmNoYXNlXCIgYXBwcyBvbiB0aGVpciBkZXZpY2VzLlxuICpcbiAqIFdoZW4gYSBwdXJjaGFzZSBoYXMgYmVlbiBhcHByb3ZlZCBieSB0aGUgc3RvcmUsIGl0J3MgZW5yaWNoZWQgd2l0aFxuICogdHJhbnNhY3Rpb24gaW5mb3JtYXRpb24gKHNlZSBgcHJvZHVjdC50cmFuc2FjdGlvbmAgYXR0cmlidXRlKS5cbiAqXG4gKiBUbyB2ZXJpZnkgYSBwdXJjaGFzZSB5b3UnbGwgaGF2ZSB0byBkbyB0aHJlZSB0aGluZ3M6XG4gKlxuICogIC0gY29uZmlndXJlIHRoZSB2YWxpZGF0b3IuXG4gKiAgLSBjYWxsIGBwcm9kdWN0LnZlcmlmeSgpYCBmcm9tIHRoZSBgYXBwcm92ZWRgIGV2ZW50LCBiZWZvcmUgZmluaXNoaW5nIHRoZSB0cmFuc2FjdGlvbi5cbiAqICAtIGZpbmlzaCB0aGUgdHJhbnNhY3Rpb24gd2hlbiB0cmFuc2FjdGlvbiBpcyBgdmVyaWZpZWRgLlxuICpcbiAqIFNoYW1lbGVzcyBQbHVnKio6IHRoaXMgaXMgYSBmZWF0dXJlIG1hbnkgdXNlcnMgc3RydWdnbGUgd2l0aCwgc28gYXMgdGhlIGF1dGhvciBvZiB0aGlzIHBsdWdpbiwgd2UgY2FuIHByb3ZpZGUgaXQgdG8geW91IGFzLWEtc2VydmljZTogaHR0cHM6Ly9iaWxsaW5nLmZvdmVhLmNjL1xuICogKHdoaWNoIGlzIGZyZWUgdW50aWwgeW91IHN0YXJ0IG1ha2luZyBzZXJpb3VzIG1vbmV5KVxuICpcbiAqICMjIyMgZXhhbXBsZSB1c2luZyBhIHZhbGlkYXRpb24gVVJMXG4gKlxuICogYGBganNcbiAqIHRoaXMuc3RvcmUudmFsaWRhdG9yID0gXCJodHRwczovL2JpbGxpbmcuZm92ZWEuY2MvXCI7XG4gKlxuICogdGhpcy5zdG9yZS53aGVuKFwibXkgc3R1ZmZcIilcbiAqICAgLmFwcHJvdmVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLnZlcmlmeSgpKVxuICogICAudmVyaWZpZWQoKHA6IElBUFByb2R1Y3QpID0+IHAuZmluaXNoKCkpO1xuICogYGBgXG4gKlxuICogIyMgU3Vic2NyaXB0aW9uc1xuICpcbiAqIEZvciBzdWJzY3JpcHRpb24sIHlvdSBNVVNUIGltcGxlbWVudCByZW1vdGUgcmVjZWlwdCB2YWxpZGF0aW9uLlxuICpcbiAqIFdoZW4gdGhlIHJlY2VpcHQgdmFsaWRhdG9yIHJldHVybnMgYSBgc3RvcmUuUFVSQ0hBU0VfRVhQSVJFRGAgZXJyb3IgY29kZSwgdGhlIHN1YnNjcmlwdGlvbiB3aWxsXG4gKiBhdXRvbWF0aWNhbGx5IGxvb3NlIGl0cyBgb3duZWRgIHN0YXR1cy5cbiAqXG4gKiBUeXBpY2FsbHksIHlvdSdsbCBlbmFibGUgYW5kIGRpc2FibGUgYWNjZXNzIHRvIHlvdXIgY29udGVudCB0aGlzIHdheS5cbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHRoaXMuc3RvcmUud2hlbihcIm15X3N1YmNyaXB0aW9uXCIpLnVwZGF0ZWQoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcbiAqICAgaWYgKHByb2R1Y3Qub3duZWQpXG4gKiAgICAgYXBwLnN1YnNjcmliZXJNb2RlKCk7XG4gKiAgIGVsc2VcbiAqICAgICBhcHAuZ3Vlc3RNb2RlKCk7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqICMjIFByb2R1Y3QgbGlmZS1jeWNsZVxuICpcbiAqIEEgcHJvZHVjdCB3aWxsIGNoYW5nZSBzdGF0ZSBkdXJpbmcgdGhlIGFwcGxpY2F0aW9uIGV4ZWN1dGlvbi5cbiAqXG4gKiBGaW5kIGJlbG93IGEgZGlhZ3JhbSBvZiB0aGUgZGlmZmVyZW50IHN0YXRlcyBhIHByb2R1Y3QgY2FuIHBhc3MgYnkuXG4gKlxuICogYGBgXG4gKiBSRUdJU1RFUkVEICstLT4gSU5WQUxJRFxuICogICAgICAgICAgICB8XG4gKiAgICAgICAgICAgICstLT4gVkFMSUQgKy0tPiBSRVFVRVNURUQgKy0tPiBJTklUSUFURUQgKy0rXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgICAgICAgICAgICAgICAgXiAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHxcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgfCAgICAgICAgICAgICArLS0+IERPV05MT0FESU5HICstLT4gRE9XTkxPQURFRCArXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICAgICAgICAgICAgICAgIHwgICAgICArLS0+IEFQUFJPVkVEICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLT4gRklOSVNIRUQgKy0tPiBPV05FRFxuICogICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICogYGBgXG4gKlxuICogIyMjIyBOb3Rlc1xuICpcbiAqICAtIFdoZW4gZmluaXNoZWQsIGEgY29uc3VtYWJsZSBwcm9kdWN0IHdpbGwgZ2V0IGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUsIHdoaWxlIG90aGVyIHdpbGwgZW50ZXIgdGhlIGBPV05FRGAgc3RhdGUuXG4gKiAgLSBBbnkgZXJyb3IgaW4gdGhlIHB1cmNoYXNlIHByb2Nlc3Mgd2lsbCBicmluZyBhIHByb2R1Y3QgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cbiAqICAtIER1cmluZyBhcHBsaWNhdGlvbiBzdGFydHVwLCBwcm9kdWN0cyBtYXkgZ28gaW5zdGFudGx5IGZyb20gYFJFR0lTVEVSRURgIHRvIGBBUFBST1ZFRGAgb3IgYE9XTkVEYCwgZm9yIGV4YW1wbGUgaWYgdGhleSBhcmUgcHVyY2hhc2VkIG5vbi1jb25zdW1hYmxlcyBvciBub24tZXhwaXJlZCBzdWJzY3JpcHRpb25zLlxuICogIC0gTm9uLVJlbmV3aW5nIFN1YnNjcmlwdGlvbnMgYXJlIGlPUyBwcm9kdWN0cyBvbmx5LiBQbGVhc2Ugc2VlIHRoZSBbaU9TIE5vbiBSZW5ld2luZyBTdWJzY3JpcHRpb25zIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9pb3MubWQjbm9uLXJlbmV3aW5nKSBmb3IgYSBkZXRhaWxlZCBleHBsYW5hdGlvbi5cbiAqXG4gKiAjIyBldmVudHNcbiAqXG4gKiAgLSBgbG9hZGVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBwcm9kdWN0IGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHN0b3JlLlxuICogIC0gYHVwZGF0ZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGFueSBjaGFuZ2Ugb2NjdXJlZCB0byBhIHByb2R1Y3QuXG4gKiAgLSBgZXJyb3IoZXJyKWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYW4gb3JkZXIgZmFpbGVkLlxuICogICAgLSBUaGUgYGVycmAgcGFyYW1ldGVyIGlzIGFuIGVycm9yIG9iamVjdFxuICogIC0gYGFwcHJvdmVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgYXBwcm92ZWQuXG4gKiAgLSBgb3duZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgbm9uLWNvbnN1bWFibGUgcHJvZHVjdCBvciBzdWJzY3JpcHRpb24gaXMgb3duZWQuXG4gKiAgLSBgY2FuY2VsbGVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgY2FuY2VsbGVkIGJ5IHRoZSB1c2VyLlxuICogIC0gYHJlZnVuZGVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiBhbiBvcmRlciBpcyByZWZ1bmRlZCBieSB0aGUgdXNlci5cbiAqICAtIEFjdHVhbGx5LCBhbGwgb3RoZXIgcHJvZHVjdCBzdGF0ZXMgaGF2ZSB0aGVpciBwcm9taXNlXG4gKiAgICAtIGByZWdpc3RlcmVkYCwgYHZhbGlkYCwgYGludmFsaWRgLCBgcmVxdWVzdGVkYCxcbiAqICAgICAgYGluaXRpYXRlZGAgYW5kIGBmaW5pc2hlZGBcbiAqICAtIGB2ZXJpZmllZChJQVBQcm9kdWN0KWBcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcmVjZWlwdCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcbiAqICAtIGB1bnZlcmlmaWVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiByZWNlaXB0IHZlcmlmaWNhdGlvbiBmYWlsZWRcbiAqICAtIGBleHBpcmVkKElBUFByb2R1Y3QpYFxuICogICAgLSBDYWxsZWQgd2hlbiB2YWxpZGF0aW9uIGZpbmQgYSBzdWJzY3JpcHRpb24gdG8gYmUgZXhwaXJlZFxuICogIC0gYGRvd25sb2FkaW5nKElBUFByb2R1Y3QsIHByb2dyZXNzLCB0aW1lX3JlbWFpbmluZylgXG4gKiAgICAtIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaXMgc3RhcnRlZFxuICogIC0gYGRvd25sb2FkZWQoSUFQUHJvZHVjdClgXG4gKiAgICAtIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaGFzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWRcbiAqXG4gKiAjIyBMZWFybiBNb3JlXG4gKlxuICogIC0gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UpXG4gKiAgLSBbR2l0Qm9va10oaHR0cHM6Ly9wdXJjaGFzZS5jb3Jkb3ZhLmZvdmVhLmNjLylcbiAqICAtIFtXaWtpXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS93aWtpKVxuICogIC0gW0FQSSByZWZlcmVuY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9hcGkubWQpXG4gKlxuICogIyMgVGVjaG5pY2FsIFN1cHBvcnQgb3IgUXVlc3Rpb25zXG4gKlxuICogSWYgeW91IGhhdmUgcXVlc3Rpb25zIG9yIG5lZWQgaGVscCBpbnRlZ3JhdGluZyBJbi1BcHAgUHVyY2hhc2UsIFtPcGVuIGFuIElzc3VlIG9uIEdpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvaXNzdWVzKSBvciBlbWFpbCB1cyBhdCBfc3VwcG9ydEBmb3ZlYS5jY18uXG4gKlxuICogQGludGVyZmFjZXNcbiAqIElBUFByb2R1Y3RcbiAqIElBUFByb2R1Y3RPcHRpb25zXG4gKiBJQVBQcm9kdWN0RXZlbnRzXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcFB1cmNoYXNlMicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlJyxcbiAgcGx1Z2luUmVmOiAnc3RvcmUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnLCAnV2luZG93cyddLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXB1cmNoYXNlIC0tdmFyaWFibGUgQklMTElOR19LRVk9XCI8QU5EUk9JRF9CSUxMSU5HX0tFWT5cIicsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwUHVyY2hhc2UyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUVVJRVQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJST1I6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgV0FSTklORzogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTkZPOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIERFQlVHOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlYnVnIGxldmVsLiBVc2UgUVVJRVQsIEVSUk9SLCBXQVJOSU5HLCBJTkZPIG9yIERFQlVHIGNvbnN0YW50c1xuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHZlcmJvc2l0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBjbGVhciB0aGUgdHJhbnNhY3Rpb24gcXVldWUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbi5cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2FwaS5tZCNyYW5kb20tdGlwc1xuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGF1dG9GaW5pc2hUcmFuc2FjdGlvbnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGludm9rZSB0aGUgcGxhdGZvcm0gcHVyY2hhc2Ugc2FuZGJveC4gKFdpbmRvd3Mgb25seSlcbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBzYW5kYm94OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGRvd25sb2FkaW5nIG9mIGhvc3RlZCBjb250ZW50LiAoQXBwbGUgb25seSkuXG4gICAqIFVzZWZ1bCBpbiBkZXZlbG9wbWVudCBvciB3aGVuIG1pZ3JhdGluZyB5b3VyIGFwcCBhd2F5IGZyb20gQXBwbGUgSG9zdGVkIENvbnRlbnQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgZGlzYWJsZUhvc3RlZENvbnRlbnQ6IGJvb2xlYW47XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZSRUVfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFBBSURfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE5PTl9SRU5FV0lOR19TVUJTQ1JJUFRJT046IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ09OU1VNQUJMRTogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBOT05fQ09OU1VNQUJMRTogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfU0VUVVA6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0xPQUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BVUkNIQVNFOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9MT0FEX1JFQ0VJUFRTOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9DTElFTlRfSU5WQUxJRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUEFZTUVOVF9DQU5DRUxMRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1BBWU1FTlRfSU5WQUxJRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUEFZTUVOVF9OT1RfQUxMT1dFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfVU5LTk9XTjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfUkVGUkVTSF9SRUNFSVBUUzogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfSU5WQUxJRF9QUk9EVUNUX0lEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9GSU5JU0g6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0NPTU1VTklDQVRJT046IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX1NVQlNDUklQVElPTlNfTk9UX0FWQUlMQUJMRTogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfTUlTU0lOR19UT0tFTjogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfVkVSSUZJQ0FUSU9OX0ZBSUxFRDogbnVtYmVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFUlJfQkFEX1JFU1BPTlNFOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9SRUZSRVNIOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9QQVlNRU5UX0VYUElSRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVJSX0RPV05MT0FEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVSUl9TVUJTQ1JJUFRJT05fVVBEQVRFX05PVF9BVkFJTEFCTEU6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUkVHSVNURVJFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTlZBTElEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFZBTElEOiBzdHJpbmc7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFJFUVVFU1RFRDogc3RyaW5nO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTklUSUFURUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQVBQUk9WRUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRklOSVNIRUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgT1dORUQ6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRE9XTkxPQURJTkc6IHN0cmluZztcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRE9XTkxPQURFRDogc3RyaW5nO1xuXG4gIC8qIHZhbGlkYXRpb24gZXJyb3IgY29kZXMgKi9cblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU5WQUxJRF9QQVlMT0FEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENPTk5FQ1RJT05fRkFJTEVEOiBudW1iZXI7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFBVUkNIQVNFX0VYUElSRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUFVSQ0hBU0VfQ09OU1VNRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgSU5URVJOQUxfRVJST1I6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTkVFRF9NT1JFX0RBVEE6IG51bWJlcjtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcHJvZHVjdHM6IElBUFByb2R1Y3RzO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB2YWxpZGF0b3I6XG4gICAgfCBzdHJpbmdcbiAgICB8ICgodXJsOiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBjYWxsYmFjazogRnVuY3Rpb24pID0+IHZvaWQpXG4gICAgfCB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICBoZWFkZXJzPzogeyBbdG9rZW46IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgfTtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgYXBwbGljYXRpb25Vc2VybmFtZTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEFwcGxpY2F0aW9uVXNlcm5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbG9nOiB7XG4gICAgZXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgd2FybjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcbiAgICBpbmZvOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGRlYnVnOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgcHJvZHVjdCBieSBpZCBvciBhbGlhc1xuICAgKlxuICAgKiBAcGFyYW0gaWRPckFsaWFzXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0KGlkT3JBbGlhczogc3RyaW5nKTogSUFQUHJvZHVjdCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGVycm9yIGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIG9uRXJyb3Ige0Z1bmN0aW9ufSBmdW5jdGlvbiB0byBjYWxsIG9uIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZXJyb3Iob25FcnJvcjogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZCBvciByZWdpc3RlciBhIHByb2R1Y3RcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3Qge0lBUFByb2R1Y3RPcHRpb25zfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyKHByb2R1Y3Q6IElBUFByb2R1Y3RPcHRpb25zIHwgSUFQUHJvZHVjdE9wdGlvbnNbXSk6IHZvaWQge31cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge0lBUFByb2R1Y3RFdmVudHN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgd2hlbihxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZGVudGljYWwgdG8gYHdoZW5gLCBidXQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZS4gQWZ0ZXIgYmVpbmcgY2FsbGVkLCB0aGUgY2FsbGJhY2sgd2lsbCBiZSB1bnJlZ2lzdGVyZWQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSB7c3RyaW5nIHwgSUFQUHJvZHVjdH1cbiAgICogQHBhcmFtIFtldmVudF0ge2V2ZW50fVxuICAgKiBAcGFyYW0gW2NhbGxiYWNrXSB7SUFQUXVlcnlDYWxsYmFja31cbiAgICogQHJldHVybnMge0lBUFByb2R1Y3RFdmVudHN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb25jZShxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVyIGEgY2FsbGJhY2suIFdvcmtzIGZvciBjYWxsYmFja3MgcmVnaXN0ZXJlZCB3aXRoIHJlYWR5LCB3aGVuLCBvbmNlIGFuZCBlcnJvci5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvZmYoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSB0aGUgcHVyY2hhc2Ugb2YgYSBwcm9kdWN0LlxuICAgKlxuICAgKiBUaGUgYHByb2R1Y3RgIGFyZ3VtZW50IGNhbiBiZSBlaXRoZXI6XG4gICAqXG4gICAqICAtIHRoZSBgSUFQUHJvZHVjdGAgb2JqZWN0XG4gICAqICAtIHRoZSBwcm9kdWN0IGBpZGBcbiAgICogIC0gdGhlIHByb2R1Y3QgYGFsaWFzYFxuICAgKlxuICAgKiBUaGUgYGFkZGl0aW9uYWxEYXRhYCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBvYmplY3Qgd2l0aCBhdHRyaWJ1dGVzOlxuICAgKiAgLSBgb2xkUHVyY2hhc2VkU2t1c2A6IGEgc3RyaW5nIGFycmF5IHdpdGggdGhlIG9sZCBzdWJzY3JpcHRpb24gdG8gdXBncmFkZS9kb3duZ3JhZGUgb24gQW5kcm9pZC4gU2VlOiBbYW5kcm9pZCBkZXZlbG9wZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19yZWZlcmVuY2UuaHRtbCN1cGdyYWRlLWdldEJ1eUludGVudFRvUmVwbGFjZVNrdXMpIGZvciBtb3JlIGluZm9cbiAgICogIC0gYGRldmVsb3BlclBheWxvYWRgOiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZXZlbG9wZXIgcGF5bG9hZCBhcyBkZXNjcmliZWQgaW4gW2JpbGxpbmcgYmVzdCBwcmFjdGljZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19iZXN0X3ByYWN0aWNlcy5odG1sKVxuICAgKiAgLSBgYXBwbGljYXRpb25Vc2VybmFtZWA6IHRoZSBpZGVudGlmaWVyIG9mIHRoZSB1c2VyIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIFNlZSB0aGUgXCJQdXJjaGFzaW5nIHNlY3Rpb25cIiB0byBsZWFybiBtb3JlIGFib3V0IHRoZSBwdXJjaGFzZSBwcm9jZXNzLlxuICAgKlxuICAgKiByZXR1cm4gdmFsdWUqKlxuICAgKlxuICAgKiBgc3RvcmUub3JkZXIoKWAgcmV0dXJucyBhIFByb21pc2Ugd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gICAqXG4gICAqICAtIGB0aGVuYCAtIGNhbGxlZCB3aGVuIHRoZSBvcmRlciB3YXMgc3VjY2Vzc2Z1bGx5IGluaXRpYXRlZC5cbiAgICogIC0gYGVycm9yYCAtIGNhbGxlZCBpZiB0aGUgb3JkZXIgY291bGRuJ3QgYmUgaW5pdGlhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdFxuICAgKiBAcGFyYW0gYWRkaXRpb25hbERhdGFcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvcmRlcihwcm9kdWN0OiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBhZGRpdGlvbmFsRGF0YT86IGFueSk6IHsgdGhlbjogRnVuY3Rpb247IGVycm9yOiBGdW5jdGlvbiB9IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHJlYWR5KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQWZ0ZXIgeW91J3JlIGRvbmUgcmVnaXN0ZXJpbmcgeW91ciBzdG9yZSdzIHByb2R1Y3QgYW5kIGV2ZW50cyBoYW5kbGVycyxcbiAgICogdGltZSB0byBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgaW5pdGlhdGUgYWxsIHRoZSBjb21wbGV4IGJlaGluZC10aGUtc2NlbmUgd29yaywgdG8gbG9hZCBwcm9kdWN0XG4gICAqIGRhdGEgZnJvbSB0aGUgc2VydmVycyBhbmQgcmVzdG9yZSB3aGF0ZXZlciBhbHJlYWR5IGhhdmUgYmVlblxuICAgKiBwdXJjaGFzZWQgYnkgdGhlIHVzZXIuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QgYWdhaW4gbGF0ZXIgZHVyaW5nIHRoZSBhcHBsaWNhdGlvblxuICAgKiBleGVjdXRpb24gdG8gcmUtdHJpZ2dlciBhbGwgdGhhdCBoYXJkLXdvcmsuIEl0J3Mga2luZCBvZiBleHBlbnNpdmUgaW4gdGVybSBvZlxuICAgKiBwcm9jZXNzaW5nLCBzbyB5b3UnZCBiZXR0ZXIgY29uc2lkZXIgaXQgdHdpY2UuXG4gICAqXG4gICAqIE9uZSBnb29kIHdheSBvZiBkb2luZyBpdCBpcyB0byBhZGQgYSBcIlJlZnJlc2ggUHVyY2hhc2VzXCIgYnV0dG9uIGluIHlvdXJcbiAgICogYXBwbGljYXRpb25zIHNldHRpbmdzLiBUaGlzIHdheSwgaWYgZGVsaXZlcnkgb2YgYSBwdXJjaGFzZSBmYWlsZWQgb3JcbiAgICogaWYgYSB1c2VyIHdhbnRzIHRvIHJlc3RvcmUgcHVyY2hhc2VzIGhlIG1hZGUgZnJvbSBhbm90aGVyIGRldmljZSwgaGUnbGxcbiAgICogaGF2ZSBhIHdheSB0byBkbyBqdXN0IHRoYXQuXG4gICAqXG4gICAqIGV4YW1wbGUgdXNhZ2UqKlxuICAgKlxuICAgKiBgYGB0eXBlc2NyaXB0XG4gICAqICAgIC8vIC4uLlxuICAgKiAgICAvLyByZWdpc3RlciBwcm9kdWN0cyBhbmQgZXZlbnRzIGhhbmRsZXJzIGhlcmVcbiAgICogICAgLy8gLi4uXG4gICAqICAgIC8vXG4gICAqICAgIC8vIHRoZW4gYW5kIG9ubHkgdGhlbiwgY2FsbCByZWZyZXNoLlxuICAgKiAgICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcbiAgICogYGBgXG4gICAqXG4gICAqIHJlc3RvcmUgcHVyY2hhc2VzKipcbiAgICpcbiAgICogQWRkIGEgXCJSZWZyZXNoIFB1cmNoYXNlc1wiIGJ1dHRvbiB0byBjYWxsIHRoZSBgc3RvcmUucmVmcmVzaCgpYCBtZXRob2QsIGxpa2U6XG4gICAqXG4gICAqIGA8YnV0dG9uIG9uY2xpY2s9XCI8cHNldWRvX2NvZGU+dGhpcy5zdG9yZS5yZWZyZXNoKCk8L3BzZXVkb19jb2RlPlwiPlJlc3RvcmUgUHVyY2hhc2VzPC9idXR0b24+YFxuICAgKlxuICAgKiBUbyBtYWtlIHRoZSByZXN0b3JlIHB1cmNoYXNlcyB3b3JrIGFzIGV4cGVjdGVkLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXRcbiAgICogdGhlIFwiYXBwcm92ZWRcIiBldmVudCBsaXN0ZW5lciBoYWQgYmUgcmVnaXN0ZXJlZCBwcm9wZXJseSxcbiAgICogYW5kIGluIHRoZSBjYWxsYmFjayBgcHJvZHVjdC5maW5pc2goKWAgc2hvdWxkIGJlIGNhbGxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZWZyZXNoKCk6IElSZWZlc2hSZXN1bHQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKiBMaWdodHdlaWdodCBtZXRob2QgbGlrZSByZWZyZXNoIGJ1dCBkbyBub3QgcmVsb2dpbiB1c2VyICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1cGRhdGUoKTogdm9pZCB7fVxuXG4gIC8qKiBPcGVucyB0aGUgTWFuYWdlIFN1YnNjcmlwdGlvbiBwYWdlIChBcHBTdG9yZSwgUGxheSwgTWljcm9zb2Z0LCAuLi4pLiAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbWFuYWdlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHt9XG5cbiAgLyoqIE9wZW5zIHRoZSBDb2RlIFJlZGVtcHRpb24gU2hlZXQgb24gaU9TLiAoQXBwU3RvcmUpLiAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVkZWVtKCk6IHZvaWQge31cblxuICAvKiogT3BlbnMgdGhlIE1hbmFnZSBCaWxsaW5nIHBhZ2UgKEFwcFN0b3JlLCBQbGF5LCBNaWNyb3NvZnQsIC4uLiksIHdoZXJlIHRoZSB1c2VyIGNhbiB1cGRhdGUgaGlzL2hlciBwYXltZW50IG1ldGhvZHMuICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBtYW5hZ2VCaWxsaW5nKCk6IHZvaWQge31cblxuICAvKiogT3BlbiB0aGUgc3Vic2NyaXB0aW9uIHByaWNlIGNoYW5nZSBub3RpZmljYXRpb24gd29ya2Zsb3cuIChQbGF5KSBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvc3Vic2NyaXB0aW9ucyNwcmljZS1jaGFuZ2UtY29tbXVuaWNhdGUgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGxhdW5jaFByaWNlQ2hhbmdlQ29uZmlybWF0aW9uRmxvdyhcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcbiAgICBjYWxsYmFjazogKHN0YXR1czogJ09LJyB8ICdVbmtub3duUHJvZHVjdCcgfCAnVXNlckNhbmNlbGVkJykgPT4gdm9pZFxuICApOiB2b2lkIHt9XG59XG4iXX0=