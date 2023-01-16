import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var NFC = /** @class */ (function (_super) {
    __extends(NFC, _super);
    function NFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFC.prototype.readerMode = function (flags) { return cordova(this, "readerMode", { "observable": true, "clearFunction": "disableReaderMode", "clearWithArgs": false }, arguments); };
    NFC.prototype.scanNdef = function (options) { return cordova(this, "scanNdef", { "sync": true }, arguments); };
    NFC.prototype.scanTag = function (options) { return cordova(this, "scanTag", { "sync": true }, arguments); };
    NFC.prototype.cancelScan = function () { return cordova(this, "cancelScan", { "sync": true }, arguments); };
    NFC.prototype.connect = function (tech, timeout) { return cordova(this, "connect", { "sync": true }, arguments); };
    NFC.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    NFC.prototype.transceive = function (data) { return cordova(this, "transceive", { "sync": true }, arguments); };
    NFC.prototype.beginSession = function (onSuccess, onFailure) { return cordova(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFC.prototype.write = function (message) { return cordova(this, "write", {}, arguments); };
    NFC.prototype.makeReadOnly = function () { return cordova(this, "makeReadOnly", {}, arguments); };
    NFC.prototype.share = function (message) { return cordova(this, "share", {}, arguments); };
    NFC.prototype.unshare = function () { return cordova(this, "unshare", {}, arguments); };
    NFC.prototype.erase = function () { return cordova(this, "erase", {}, arguments); };
    NFC.prototype.handover = function (uris) { return cordova(this, "handover", {}, arguments); };
    NFC.prototype.stopHandover = function () { return cordova(this, "stopHandover", {}, arguments); };
    NFC.prototype.showSettings = function () { return cordova(this, "showSettings", {}, arguments); };
    NFC.prototype.enabled = function () { return cordova(this, "enabled", {}, arguments); };
    NFC.prototype.bytesToString = function (bytes) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NFC.prototype.stringToBytes = function (str) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NFC.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_A", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_A"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_A", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_B", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_B"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_B", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_F", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_F"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_F", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_V", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_V"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_V", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_BARCODE", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_BARCODE"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_BARCODE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_SKIP_NDEF_CHECK"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_SKIP_NDEF_CHECK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NO_PLATFORM_SOUNDS"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value); },
        enumerable: false,
        configurable: true
    });
    NFC.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NFC, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    NFC.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NFC });
    NFC.pluginName = "NFC";
    NFC.plugin = "phonegap-nfc";
    NFC.pluginRef = "nfc";
    NFC.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFC.platforms = ["Android", "iOS", "Windows"];
    NFC = __decorate([], NFC);
    return NFC;
}(AwesomeCordovaNativePlugin));
export { NFC };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NFC, decorators: [{
            type: Injectable
        }], propDecorators: { FLAG_READER_NFC_A: [], FLAG_READER_NFC_B: [], FLAG_READER_NFC_F: [], FLAG_READER_NFC_V: [], FLAG_READER_NFC_BARCODE: [], FLAG_READER_SKIP_NDEF_CHECK: [], FLAG_READER_NO_PLATFORM_SOUNDS: [], readerMode: [], scanNdef: [], scanTag: [], cancelScan: [], connect: [], close: [], transceive: [], beginSession: [], addNdefListener: [], addTagDiscoveredListener: [], addMimeTypeListener: [], addNdefFormatableListener: [], write: [], makeReadOnly: [], share: [], unshare: [], erase: [], handover: [], stopHandover: [], showSettings: [], enabled: [], bytesToString: [], stringToBytes: [], bytesToHexString: [] } });
var Ndef = /** @class */ (function (_super) {
    __extends(Ndef, _super);
    function Ndef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ndef.prototype.record = function (tnf, type, id, payload) { return cordova(this, "record", { "sync": true }, arguments); };
    Ndef.prototype.textRecord = function (text, languageCode, id) { return cordova(this, "textRecord", { "sync": true }, arguments); };
    Ndef.prototype.uriRecord = function (uri, id) { return cordova(this, "uriRecord", { "sync": true }, arguments); };
    Ndef.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova(this, "absoluteUriRecord", { "sync": true }, arguments); };
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova(this, "mimeMediaRecord", { "sync": true }, arguments); };
    Ndef.prototype.smartPoster = function (ndefRecords, id) { return cordova(this, "smartPoster", { "sync": true }, arguments); };
    Ndef.prototype.emptyRecord = function () { return cordova(this, "emptyRecord", { "sync": true }, arguments); };
    Ndef.prototype.androidApplicationRecord = function (packageName) { return cordova(this, "androidApplicationRecord", { "sync": true }, arguments); };
    Ndef.prototype.encodeMessage = function (ndefRecords) { return cordova(this, "encodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeMessage = function (bytes) { return cordova(this, "decodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeTnf = function (tnf_byte) { return cordova(this, "decodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova(this, "encodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.tnfToString = function (tnf) { return cordova(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(Ndef.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: false,
        configurable: true
    });
    Ndef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Ndef, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Ndef.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Ndef });
    Ndef.pluginName = "NFC";
    Ndef.plugin = "phonegap-nfc";
    Ndef.pluginRef = "ndef";
    Ndef = __decorate([], Ndef);
    return Ndef;
}(AwesomeCordovaNativePlugin));
export { Ndef };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Ndef, decorators: [{
            type: Injectable
        }], propDecorators: { TNF_EMPTY: [], TNF_WELL_KNOWN: [], TNF_MIME_MEDIA: [], TNF_ABSOLUTE_URI: [], TNF_EXTERNAL_TYPE: [], TNF_UNKNOWN: [], TNF_UNCHANGED: [], TNF_RESERVED: [], record: [], textRecord: [], uriRecord: [], absoluteUriRecord: [], mimeMediaRecord: [], smartPoster: [], emptyRecord: [], androidApplicationRecord: [], encodeMessage: [], decodeMessage: [], decodeTnf: [], encodeTnf: [], tnfToString: [], textHelper: [], uriHelper: [] } });
var NfcUtil = /** @class */ (function (_super) {
    __extends(NfcUtil, _super);
    function NfcUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtil.prototype.toHex = function (i) { return cordova(this, "toHex", { "sync": true }, arguments); };
    NfcUtil.prototype.toPrintable = function (i) { return cordova(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToString = function (i) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtil.prototype.stringToBytes = function (s) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.isType = function (record, tnf, type) { return cordova(this, "isType", { "sync": true }, arguments); };
    NfcUtil.prototype.arrayBufferToHexString = function (buffer) { return cordova(this, "arrayBufferToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.hexStringToArrayBuffer = function (hexString) { return cordova(this, "hexStringToArrayBuffer", { "sync": true }, arguments); };
    NfcUtil.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NfcUtil, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    NfcUtil.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NfcUtil });
    NfcUtil.pluginName = "NFC";
    NfcUtil.plugin = "phonegap-nfc";
    NfcUtil.pluginRef = "util";
    NfcUtil = __decorate([], NfcUtil);
    return NfcUtil;
}(AwesomeCordovaNativePlugin));
export { NfcUtil };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NfcUtil, decorators: [{
            type: Injectable
        }], propDecorators: { toHex: [], toPrintable: [], bytesToString: [], stringToBytes: [], bytesToHexString: [], isType: [], arrayBufferToHexString: [], hexStringToArrayBuffer: [] } });
var TextHelper = /** @class */ (function (_super) {
    __extends(TextHelper, _super);
    function TextHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextHelper.prototype.decodePayload = function (data) {
        return;
    };
    TextHelper.prototype.encodePayload = function (text, lang) {
        return;
    };
    return TextHelper;
}(AwesomeCordovaNativePlugin));
export { TextHelper };
var UriHelper = /** @class */ (function (_super) {
    __extends(UriHelper, _super);
    function UriHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriHelper.prototype.decodePayload = function (data) {
        return;
    };
    UriHelper.prototype.encodePayload = function (uri) {
        return;
    };
    return UriHelper;
}(AwesomeCordovaNativePlugin));
export { UriHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmZjL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQWtHVCx1QkFBMEI7Ozs7SUE4QmpELHdCQUFVLGFBQUMsS0FBYTtJQVd4QixzQkFBUSxhQUFDLE9BQXFCO0lBYTlCLHFCQUFPLGFBQUMsT0FBcUI7SUFTN0Isd0JBQVU7SUFZVixxQkFBTyxhQUFDLElBQVksRUFBRSxPQUFnQjtJQVN0QyxtQkFBSztJQWFMLHdCQUFVLGFBQUMsSUFBMEI7SUFtQnJDLDBCQUFZLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQWtCdkQsNkJBQWUsYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBa0IxRCxzQ0FBd0IsYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBbUJuRSxpQ0FBbUIsYUFBQyxRQUFnQixFQUFFLFNBQW9CLEVBQUUsU0FBb0I7SUFnQmhGLHVDQUF5QixhQUFDLFNBQW9CLEVBQUUsU0FBb0I7SUFXcEUsbUJBQUssYUFBQyxPQUFjO0lBU3BCLDBCQUFZO0lBV1osbUJBQUssYUFBQyxPQUFjO0lBVXBCLHFCQUFPO0lBUVAsbUJBQUs7SUFXTCxzQkFBUSxhQUFDLElBQWM7SUFVdkIsMEJBQVk7SUFVWiwwQkFBWTtJQVVaLHFCQUFPO0lBY1AsMkJBQWEsYUFBQyxLQUFlO0lBVTdCLDJCQUFhLGFBQUMsR0FBVztJQVV6Qiw4QkFBZ0IsYUFBQyxLQUFlOzBCQW5UaEMsa0NBQWlCOzs7Ozs7MEJBRWpCLGtDQUFpQjs7Ozs7OzBCQUVqQixrQ0FBaUI7Ozs7OzswQkFFakIsa0NBQWlCOzs7Ozs7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TztrQkFEbkIsVUFBVTs4QkFHVCxLQUFLLE1BS0wsV0FBVyxNQUtYLGFBQWEsTUFLYixhQUFhLE1BS2IsZ0JBQWdCLE1BS2hCLE1BQU0sTUFLTixzQkFBc0IsTUFLdEIsc0JBQXNCOztJQUtRLDhCQUEwQjs7OztJQUN4RCxrQ0FBYSxHQUFiLFVBQWMsSUFBYztRQUMxQixPQUFPO0lBQ1QsQ0FBQztJQUNELGtDQUFhLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBWTtRQUN0QyxPQUFPO0lBQ1QsQ0FBQztxQkFsa0JIO0VBNGpCZ0MsMEJBQTBCOzs7SUFTM0IsNkJBQTBCOzs7O0lBQ3ZELGlDQUFhLEdBQWIsVUFBYyxJQUFjO1FBQzFCLE9BQU87SUFDVCxDQUFDO0lBQ0QsaUNBQWEsR0FBYixVQUFjLEdBQVc7UUFDdkIsT0FBTztJQUNULENBQUM7b0JBM2tCSDtFQXFrQitCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xuXG4vLyB0YWcgc2hvdWxkIGJlIE5mY1RhZywgYnV0IGtlZXBpbmcgYXMgTmRlZlRhZyB0byBhdm9pZCBicmVha2luZyBleGlzdGluZyBjb2RlXG5leHBvcnQgaW50ZXJmYWNlIE5kZWZFdmVudCB7XG4gIHRhZzogTmRlZlRhZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZGVmUmVjb3JkIHtcbiAgaWQ6IGFueVtdO1xuICBwYXlsb2FkOiBudW1iZXJbXTtcbiAgdG5mOiBudW1iZXI7XG4gIHR5cGU6IG51bWJlcltdO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBOZmNUYWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZGVmVGFnIHtcbiAgY2FuTWFrZVJlYWRPbmx5OiBib29sZWFuO1xuICBpZDogbnVtYmVyW107XG4gIGlzV3JpdGFibGU6IGJvb2xlYW47XG4gIG1heFNpemU6IG51bWJlcjtcbiAgbmRlZk1lc3NhZ2U6IE5kZWZSZWNvcmRbXTtcbiAgdGVjaFR5cGVzOiBzdHJpbmdbXTtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5mY1RhZyB7XG4gIGlkPzogbnVtYmVyW107XG4gIGNhbk1ha2VSZWFkT25seT86IGJvb2xlYW47XG4gIGlzV3JpdGFibGU/OiBib29sZWFuO1xuICBtYXhTaXplPzogbnVtYmVyO1xuICBuZGVmTWVzc2FnZT86IE5kZWZSZWNvcmRbXTtcbiAgdGVjaFR5cGVzPzogc3RyaW5nW107XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nhbk9wdGlvbnMge1xuICAvKipcbiAgICogSWYgdHJ1ZSwga2VlcCB0aGUgc2NhbiBzZXNzaW9uIG9wZW4gc28gd3JpdGUgY2FuIGJlIGNhbGxlZFxuICAgKiBhZnRlciByZWFkaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICovXG4gIGtlZXBTZXNzaW9uT3Blbj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgTkZDXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBORkMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVhZCBhbmQgd3JpdGUgTkZDIHRhZ3MuIFlvdSBjYW4gYWxzbyBiZWFtIHRvLCBhbmQgcmVjZWl2ZSBmcm9tLCBvdGhlciBORkMgZW5hYmxlZCBkZXZpY2VzLlxuICpcbiAqIFVzZSB0b1xuICogLSByZWFkIGRhdGEgZnJvbSBORkMgdGFnc1xuICogLSB3cml0ZSBkYXRhIHRvIE5GQyB0YWdzXG4gKiAtIHNlbmQgZGF0YSB0byBvdGhlciBORkMgZW5hYmxlZCBkZXZpY2VzXG4gKiAtIHJlY2VpdmUgZGF0YSBmcm9tIE5GQyBkZXZpY2VzXG4gKlxuICogVGhpcyBwbHVnaW4gdXNlcyBOREVGIChORkMgRGF0YSBFeGNoYW5nZSBGb3JtYXQpIGZvciBtYXhpbXVtIGNvbXBhdGliaWx0eSBiZXR3ZWVuIE5GQyBkZXZpY2VzLCB0YWcgdHlwZXMsIGFuZCBvcGVyYXRpbmcgc3lzdGVtcy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25mYy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmZjOiBORkMsIHByaXZhdGUgbmRlZjogTmRlZikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gUmVhZCBORkMgVGFnIC0gQW5kcm9pZFxuICogLy8gT25jZSB0aGUgcmVhZGVyIG1vZGUgaXMgZW5hYmxlZCwgYW55IHRhZ3MgdGhhdCBhcmUgc2Nhbm5lZCBhcmUgc2VudCB0byB0aGUgc3Vic2NyaWJlclxuICogIGxldCBmbGFncyA9IHRoaXMubmZjLkZMQUdfUkVBREVSX05GQ19BIHwgdGhpcy5uZmMuRkxBR19SRUFERVJfTkZDX1Y7XG4gKiAgdGhpcy5yZWFkZXJNb2RlJCA9IHRoaXMubmZjLnJlYWRlck1vZGUoZmxhZ3MpLnN1YnNjcmliZShcbiAqICAgICAgdGFnID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRhZykpLFxuICogICAgICBlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgdGFnJywgZXJyKVxuICogICk7XG4gKlxuICogLy8gUmVhZCBORkMgVGFnIC0gaU9TXG4gKiAvLyBPbiBpT1MsIGEgTkZDIHJlYWRlciBzZXNzaW9uIHRha2VzIGNvbnRyb2wgZnJvbSB5b3VyIGFwcCB3aGlsZSBzY2FubmluZyB0YWdzIHRoZW4gcmV0dXJucyBhIHRhZ1xuICogdHJ5IHtcbiAqICAgICBsZXQgdGFnID0gYXdhaXQgdGhpcy5uZmMuc2Nhbk5kZWYoKTtcbiAqICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0YWcpKTtcbiAqICB9IGNhdGNoIChlcnIpIHtcbiAqICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgdGFnJywgZXJyKTtcbiAqICB9XG4gKlxuICogYGBgXG4gKlxuICogRm9yIG1vcmUgZGV0YWlscyBvbiBORkMgdGFnIG9wZXJhdGlvbnMgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mY1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05GQycsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXG4gIHBsdWdpblJlZjogJ25mYycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbi8qKlxuICogQHsgTkZDIH0gY2xhc3MgbWV0aG9kc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTkZDIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvLyBGbGFncyBmb3IgcmVhZGVyTW9kZVxuICAvLyBodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9yZWZlcmVuY2UvYW5kcm9pZC9uZmMvTmZjQWRhcHRlciNGTEFHX1JFQURFUl9ORkNfQVxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRkxBR19SRUFERVJfTkZDX0E6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZMQUdfUkVBREVSX05GQ19COiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGTEFHX1JFQURFUl9ORkNfRjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRkxBR19SRUFERVJfTkZDX1Y6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZMQUdfUkVBREVSX05GQ19CQVJDT0RFOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGTEFHX1JFQURFUl9TS0lQX05ERUZfQ0hFQ0s6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZMQUdfUkVBREVSX05PX1BMQVRGT1JNX1NPVU5EUzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZWFkIE5GQyB0YWdzIHNlbmRpbmcgdGhlIHRhZyBkYXRhIHRvIHRoZSBzdWNjZXNzIGNhbGxiYWNrLlxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY3JlYWRlcm1vZGVcbiAgICpcbiAgICogQHBhcmFtIGZsYWdzXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnZGlzYWJsZVJlYWRlck1vZGUnLFxuICAgIGNsZWFyV2l0aEFyZ3M6IGZhbHNlLFxuICB9KVxuICByZWFkZXJNb2RlKGZsYWdzOiBudW1iZXIpOiBPYnNlcnZhYmxlPE5mY1RhZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBzY2FuTmRlZiBzdGFydHMgdGhlIE5GQ05ERUZSZWFkZXJTZXNzaW9uIGFsbG93aW5nIGlPUyB0byBzY2FuIE5GQyB0YWdzLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjc2Nhbm5kZWZcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzY2FuTmRlZihvcHRpb25zPzogU2Nhbk9wdGlvbnMpOiBQcm9taXNlPE5mY1RhZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBzY2FuVGFnIHN0YXJ0cyB0aGUgTkZDVGFnUmVhZGVyU2Vzc2lvbiBhbGxvd2luZyBpT1MgdG8gc2NhbiBORkMgdGFncy5cbiAgICpcbiAgICogWW91IHByb2JhYmx5IHdhbnQgKnNjYW5OZGVmKiBmb3IgcmVhZGluZyBORkMgdGFncyBvbiBpT1MuIE9ubHkgdXNlIHNjYW5UYWcgaWYgeW91IG5lZWQgdGhlIHRhZyBVSUQuXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNzY2FudGFnXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2NhblRhZyhvcHRpb25zPzogU2Nhbk9wdGlvbnMpOiBQcm9taXNlPE5mY1RhZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYW5jZWxTY2FuIHN0b3BzIHRoZSBORkNSZWFkZXJTZXNzaW9uIHJldHVybmluZyBjb250cm9sIHRvIHlvdXIgYXBwLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY2FuY2Vsc2NhblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNhbmNlbFNjYW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0byB0aGUgdGFnIGFuZCBlbmFibGUgSS9PIG9wZXJhdGlvbnMgdG8gdGhlIHRhZyBmcm9tIHRoaXMgVGFnVGVjaG5vbG9neSBvYmplY3QuXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNjb25uZWN0XG4gICAqXG4gICAqIEBwYXJhbSB0ZWNoIFRoZSB0YWcgdGVjaG5vbG9neSBjbGFzcyBuYW1lIGUuZy4gYW5kcm9pZC5uZmMudGVjaC5Jc29EZXBcbiAgICogQHBhcmFtIHRpbWVvdXQgVGhlIHRyYW5zY2VpdmUoYnl0ZVtdKSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbb3B0aW9uYWxdXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY29ubmVjdCh0ZWNoOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBUYWdUZWNobm9sb2d5IGNvbm5lY3Rpb24uXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNjbG9zZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmF3IGNvbW1hbmQgdG8gdGhlIHRhZyBhbmQgcmVjZWl2ZSB0aGUgcmVzcG9uc2UuXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmN0cmFuc2NlaXZlXG4gICAqXG4gICAqIEV4YW1wbGUgY29kZSBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjdGFnLXRlY2hub2xvZ3ktZnVuY3Rpb25zLTFcbiAgICpcbiAgICogQHBhcmFtIGRhdGEgYW4gQXJyYXlCdWZmZXIgb3Igc3RyaW5nIG9mIGhleCBkYXRhIGUuZy4gJzAwIEE0IDA0IDAwIDA3IEQyIDc2IDAwIDAwIDg1IDAxIDAwJ1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYW5zY2VpdmUoZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgTkZDTkRFRlJlYWRlclNlc3Npb24gYWxsb3dpbmcgaU9TIHRvIHNjYW4gTkZDIHRhZ3MuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBzY2FuTmRlZiBvciBzY2FuVGFnXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2ludmFsaWRhdGVTZXNzaW9uJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBiZWdpblNlc3Npb24ob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBhbnkgTkRFRiB0YWcuXG4gICAqXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZU5kZWZMaXN0ZW5lcicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgYWRkTmRlZkxpc3RlbmVyKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8TmRlZkV2ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGFncyBtYXRjaGluZyBhbnkgdGFnIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZVRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgYWRkVGFnRGlzY292ZXJlZExpc3RlbmVyKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgTkRFRiB0YWdzIG1hdGNoaW5nIGEgc3BlY2lmaWVkIE1JTUUgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIG1pbWVUeXBlXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZU1pbWVUeXBlTGlzdGVuZXInLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXG4gIH0pXG4gIGFkZE1pbWVUeXBlTGlzdGVuZXIobWltZVR5cGU6IHN0cmluZywgb25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBmb3JtYXRhYmxlIE5ERUYgdGFncy5cbiAgICpcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xuICAgKiBAcGFyYW0gb25GYWlsdXJlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgYWRkTmRlZkZvcm1hdGFibGVMaXN0ZW5lcihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgYW4gTmRlZk1lc3NhZ2UoYXJyYXkgb2YgbmRlZiByZWNvcmRzKSB0byBhIE5GQyB0YWcuXG4gICAqXG4gICAqIEBwYXJhbSBtZXNzYWdlIHthbnlbXX1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd3JpdGUobWVzc2FnZTogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogTWFrZXMgYSBORkMgdGFnIHJlYWQgb25seS4gKipXYXJuaW5nKiogdGhpcyBpcyBwZXJtYW5lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1ha2VSZWFkT25seSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgYW4gTkRFRiBNZXNzYWdlKGFycmF5IG9mIG5kZWYgcmVjb3JkcykgdmlhIHBlZXItdG8tcGVlci5cbiAgICpcbiAgICogQHBhcmFtIG1lc3NhZ2UgQW4gYXJyYXkgb2YgTkRFRiBSZWNvcmRzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaGFyZShtZXNzYWdlOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agc2hhcmluZyBOREVGIGRhdGEgdmlhIHBlZXItdG8tcGVlci5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5zaGFyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcmFzZSBhIE5ERUYgdGFnXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVyYXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBmaWxlIHRvIGFub3RoZXIgZGV2aWNlIHZpYSBORkMgaGFuZG92ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB1cmlzIEEgVVJJIGFzIGEgU3RyaW5nLCBvciBhbiBhcnJheSBvZiBVUklzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYW5kb3Zlcih1cmlzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agc2hhcmluZyBOREVGIGRhdGEgdmlhIE5GQyBoYW5kb3Zlci5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcEhhbmRvdmVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBkZXZpY2UncyBORkMgc2V0dGluZ3MuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dTZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBORkMgaXMgYXZhaWxhYmxlIGFuZCBlbmFibGVkIG9uIHRoaXMgZGV2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmFibGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBAeyBORkMgfSBjbGFzcyB1dGlsaXR5IG1ldGhvZHNcbiAgICogZm9yIHVzZSB3aXRoXG4gICAqL1xuICAvKipcbiAgICogQ29udmVydCBieXRlIGFycmF5IHRvIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gYnl0ZXMge251bWJlcltdfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9TdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5nIHRvIGJ5dGUgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSBzdHIge3N0cmluZ31cbiAgICogQHJldHVybnMge251bWJlcltdfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0cmluZ1RvQnl0ZXMoc3RyOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IGJ5dGUgYXJyYXkgdG8gaGV4IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gYnl0ZXMge251bWJlcltdfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9IZXhTdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05GQycsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXG4gIHBsdWdpblJlZjogJ25kZWYnLFxufSlcbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBVdGlsaXR5IG1ldGhvZHMgZm9yIGNyZWF0aW5nIG5kZWYgcmVjb3JkcyBmb3IgdGhlIG5kZWYgdGFnIGZvcm1hdC5cbiAqIE1vdmUgcmVjb3JkcyBpbnRvIGFycmF5IGJlZm9yZSB1c2FnZS4gVGhlbiBwYXNzIGFuIGFycmF5IHRvIG1ldGhvZHMgYXMgcGFyYW1ldGVycy5cbiAqIERvIG5vdCBwYXNzIGJ5dGVzIGFzIHBhcmFtZXRlcnMgZm9yIHRoZXNlIG1ldGhvZHMsIGNvbnZlcnNpb24gaXMgYnVpbHQgaW4uXG4gKiBGb3IgdXNhZ2Ugd2l0aCBuZmMud3JpdGUoKSBhbmQgbmZjLnNoYXJlKClcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5kZWYgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfRU1QVFk6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9XRUxMX0tOT1dOOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfTUlNRV9NRURJQTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX0FCU09MVVRFX1VSSTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX0VYVEVSTkFMX1RZUEU6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9VTktOT1dOOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfVU5DSEFOR0VEOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfUkVTRVJWRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVjb3JkKHRuZjogbnVtYmVyLCB0eXBlOiBudW1iZXJbXSB8IHN0cmluZywgaWQ6IG51bWJlcltdIHwgc3RyaW5nLCBwYXlsb2FkOiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0ZXh0UmVjb3JkKHRleHQ6IHN0cmluZywgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVyaVJlY29yZCh1cmk6IHN0cmluZywgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhYnNvbHV0ZVVyaVJlY29yZCh1cmk6IHN0cmluZywgcGF5bG9hZDogbnVtYmVyW10gfCBzdHJpbmcsIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbWltZU1lZGlhUmVjb3JkKG1pbWVUeXBlOiBzdHJpbmcsIHBheWxvYWQ6IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzbWFydFBvc3RlcihuZGVmUmVjb3JkczogYW55W10sIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHlSZWNvcmQoKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFuZHJvaWRBcHBsaWNhdGlvblJlY29yZChwYWNrYWdlTmFtZTogc3RyaW5nKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVuY29kZU1lc3NhZ2UobmRlZlJlY29yZHM6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlY29kZU1lc3NhZ2UoYnl0ZXM6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlY29kZVRuZih0bmZfYnl0ZTogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5jb2RlVG5mKG1iOiBhbnksIG1lOiBhbnksIGNmOiBhbnksIHNyOiBhbnksIGlsOiBhbnksIHRuZjogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdG5mVG9TdHJpbmcodG5mOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB0ZXh0SGVscGVyOiBUZXh0SGVscGVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB1cmlIZWxwZXI6IFVyaUhlbHBlcjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTkZDJyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcbiAgcGx1Z2luUmVmOiAndXRpbCcsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5mY1V0aWwgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0b0hleChpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0b1ByaW50YWJsZShpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvU3RyaW5nKGk6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RyaW5nVG9CeXRlcyhzOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9IZXhTdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaXNUeXBlKHJlY29yZDogTmRlZlJlY29yZCwgdG5mOiBudW1iZXIsIHR5cGU6IG51bWJlcltdIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFycmF5QnVmZmVyVG9IZXhTdHJpbmcoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGhleFN0cmluZ1RvQXJyYXlCdWZmZXIoaGV4U3RyaW5nOiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0SGVscGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBkZWNvZGVQYXlsb2FkKGRhdGE6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZW5jb2RlUGF5bG9hZCh0ZXh0OiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVyaUhlbHBlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgZGVjb2RlUGF5bG9hZChkYXRhOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVuY29kZVBheWxvYWQodXJpOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=