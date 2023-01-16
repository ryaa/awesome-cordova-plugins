'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var StatusBar = /** @class */ (function (_super) {
    tslib.__extends(StatusBar, _super);
    function StatusBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBar.prototype.overlaysWebView = function (doesOverlay) { return core.cordova(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBar.prototype.styleDefault = function () { return core.cordova(this, "styleDefault", { "sync": true }, arguments); };
    StatusBar.prototype.styleLightContent = function () { return core.cordova(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackTranslucent = function () { return core.cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackOpaque = function () { return core.cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByName = function (colorName) { return core.cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByHexString = function (hexString) { return core.cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBar.prototype.hide = function () { return core.cordova(this, "hide", { "sync": true }, arguments); };
    StatusBar.prototype.show = function () { return core.cordova(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBar.prototype, "isVisible", {
        get: function () { return core.cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { core.cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    StatusBar.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StatusBar, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StatusBar.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StatusBar });
    StatusBar.pluginName = "StatusBar";
    StatusBar.plugin = "cordova-plugin-statusbar";
    StatusBar.pluginRef = "StatusBar";
    StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBar.platforms = ["Android", "iOS", "Windows"];
    StatusBar = tslib.__decorate([], StatusBar);
    return StatusBar;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StatusBar, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isVisible: [], overlaysWebView: [], styleDefault: [], styleLightContent: [], styleBlackTranslucent: [], styleBlackOpaque: [], backgroundColorByName: [], backgroundColorByHexString: [], hide: [], show: [] } });

exports.StatusBar = StatusBar;
