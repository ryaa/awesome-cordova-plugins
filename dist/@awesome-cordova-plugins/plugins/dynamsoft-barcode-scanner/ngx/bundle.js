'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var BarcodeScanner = /** @class */ (function (_super) {
    tslib.__extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeScanner.prototype.init = function (license) { return core.cordova(this, "init", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.initRuntimeSettingsWithString = function (settings) { return core.cordova(this, "initRuntimeSettingsWithString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.outputSettingsToString = function () { return core.cordova(this, "outputSettingsToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.destroy = function () { return core.cordova(this, "destroy", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.startScanning = function (dceLicense) { return core.cordova(this, "startScanning", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    BarcodeScanner.prototype.stopScanning = function () { return core.cordova(this, "stopScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.resumeScanning = function () { return core.cordova(this, "resumeScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.pauseScanning = function () { return core.cordova(this, "pauseScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.getResolution = function () { return core.cordova(this, "getResolution", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.prototype.switchTorch = function (desiredStatus) { return core.cordova(this, "switchTorch", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScanner.pluginName = "dynamsoft-barcode-scanner";
    BarcodeScanner.plugin = "cordova-plugin-dynamsoft-barcode-reader";
    BarcodeScanner.pluginRef = "cordova.plugins.DBR";
    BarcodeScanner.repo = "https://github.com/xulihang/cordova-plugin-dynamsoft-barcode-reader";
    BarcodeScanner.install = "";
    BarcodeScanner.installVariables = [];
    BarcodeScanner.platforms = ["Android", "iOS"];
    BarcodeScanner.decorators = [
        { type: core$1.Injectable }
    ];
    return BarcodeScanner;
}(core.AwesomeCordovaNativePlugin));

exports.BarcodeScanner = BarcodeScanner;
