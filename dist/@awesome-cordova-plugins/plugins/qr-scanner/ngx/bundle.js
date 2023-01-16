'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

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

var QRScanner = /** @class */ (function (_super) {
    tslib.__extends(QRScanner, _super);
    function QRScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRScanner.prototype.prepare = function () { return core.cordova(this, "prepare", {}, arguments); };
    QRScanner.prototype.scan = function () { return core.cordova(this, "scan", { "callbackStyle": "node", "observable": true }, arguments); };
    QRScanner.prototype.show = function () { return core.cordova(this, "show", {}, arguments); };
    QRScanner.prototype.hide = function () { return core.cordova(this, "hide", {}, arguments); };
    QRScanner.prototype.enableLight = function () { return core.cordova(this, "enableLight", {}, arguments); };
    QRScanner.prototype.destroy = function () { return core.cordova(this, "destroy", {}, arguments); };
    QRScanner.prototype.disableLight = function () { return core.cordova(this, "disableLight", {}, arguments); };
    QRScanner.prototype.useFrontCamera = function () { return core.cordova(this, "useFrontCamera", {}, arguments); };
    QRScanner.prototype.useBackCamera = function () { return core.cordova(this, "useBackCamera", {}, arguments); };
    QRScanner.prototype.useCamera = function (camera) { return core.cordova(this, "useCamera", {}, arguments); };
    QRScanner.prototype.pausePreview = function () { return core.cordova(this, "pausePreview", {}, arguments); };
    QRScanner.prototype.resumePreview = function () { return core.cordova(this, "resumePreview", {}, arguments); };
    QRScanner.prototype.getStatus = function () { return core.cordova(this, "getStatus", {}, arguments); };
    QRScanner.prototype.openSettings = function () { return core.cordova(this, "openSettings", { "sync": true }, arguments); };
    QRScanner.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: QRScanner, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    QRScanner.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: QRScanner });
    QRScanner.pluginName = "QRScanner";
    QRScanner.plugin = "cordova-plugin-qrscanner";
    QRScanner.pluginRef = "QRScanner";
    QRScanner.repo = "https://github.com/bitpay/cordova-plugin-qrscanner";
    QRScanner.platforms = ["Android", "Browser", "iOS", "Windows"];
    QRScanner = tslib.__decorate([], QRScanner);
    return QRScanner;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: QRScanner, decorators: [{
            type: i0.Injectable
        }], propDecorators: { prepare: [], scan: [], show: [], hide: [], enableLight: [], destroy: [], disableLight: [], useFrontCamera: [], useBackCamera: [], useCamera: [], pausePreview: [], resumePreview: [], getStatus: [], openSettings: [] } });

exports.QRScanner = QRScanner;
