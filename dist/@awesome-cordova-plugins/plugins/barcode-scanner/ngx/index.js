import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var BarcodeScanner = /** @class */ (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE',
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return cordova(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return cordova(this, "encode", {}, arguments); };
    BarcodeScanner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BarcodeScanner, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BarcodeScanner.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BarcodeScanner });
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner = __decorate([], BarcodeScanner);
    return BarcodeScanner;
}(AwesomeCordovaNativePlugin));
export { BarcodeScanner };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BarcodeScanner, decorators: [{
            type: Injectable
        }], propDecorators: { scan: [], encode: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFyY29kZS1zY2FubmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFrSHhELGtDQUEwQjs7O1FBQzVELFlBQU0sR0FLRjtZQUNGLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7OztJQVdGLDZCQUFJLGFBQUMsT0FBK0I7SUFhcEMsK0JBQU0sYUFBQyxJQUFZLEVBQUUsSUFBUztnSEFuQ25CLGNBQWM7b0hBQWQsY0FBYzs7Ozs7O0lBQWQsY0FBYyxrQkFBZCxjQUFjO3lCQW5IM0I7RUFtSG9DLDBCQUEwQjtTQUFqRCxjQUFjOzRGQUFkLGNBQWM7a0JBRDFCLFVBQVU7OEJBdUJULElBQUksTUFhSixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2Nhbm5lck9wdGlvbnMge1xuICAvKipcbiAgICogUHJlZmVyIGZyb250IGNhbWVyYS4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHByZWZlckZyb250Q2FtZXJhPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBmbGlwIGNhbWVyYSBidXR0b24uIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBzaG93RmxpcENhbWVyYUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgdG9yY2ggYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd1RvcmNoQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzYWJsZSBhbmltYXRpb25zLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3VjY2VzcyBiZWVwLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlU3VjY2Vzc0JlZXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9tcHQgdGV4dC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHByb21wdD86IHN0cmluZztcblxuICAvKipcbiAgICogRm9ybWF0cyBzZXBhcmF0ZWQgYnkgY29tbWFzLiBEZWZhdWx0cyB0byBhbGwgZm9ybWF0cyBleGNlcHQgYFBERl80MTdgIGFuZCBgUlNTX0VYUEFOREVEYC5cbiAgICovXG4gIGZvcm1hdHM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9yaWVudGF0aW9uLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LiBDYW4gYmUgc2V0IHRvIGBwb3J0cmFpdGAgb3IgYGxhbmRzY2FwZWAuIERlZmF1bHRzIHRvIG5vbmUgc28gdGhlIHVzZXIgY2FuIHJvdGF0ZSB0aGUgcGhvbmUgYW5kIHBpY2sgYW4gb3JpZW50YXRpb24uXG4gICAqL1xuICBvcmllbnRhdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTGF1bmNoIHdpdGggdGhlIHRvcmNoIHN3aXRjaGVkIG9uIChpZiBhdmFpbGFibGUpLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgdG9yY2hPbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNhdmUgc2NhbiBoaXN0b3J5LiBEZWZhdWx0cyB0byBgZmFsc2VgLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgc2F2ZUhpc3Rvcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHNjYW5uZWQgdGV4dCBmb3IgWCBtcy4gMCBzdXBwcmVzc2VzIGl0IGVudGlyZWx5LCBkZWZhdWx0IDE1MDAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICByZXN1bHREaXNwbGF5RHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5SZXN1bHQge1xuICBmb3JtYXQ6XG4gICAgfCAnUVJfQ09ERSdcbiAgICB8ICdEQVRBX01BVFJJWCdcbiAgICB8ICdVUENfRSdcbiAgICB8ICdVUENfQSdcbiAgICB8ICdFQU5fOCdcbiAgICB8ICdFQU5fMTMnXG4gICAgfCAnQ09ERV8xMjgnXG4gICAgfCAnQ09ERV8zOSdcbiAgICB8ICdDT0RFXzkzJ1xuICAgIHwgJ0NPREFCQVInXG4gICAgfCAnSVRGJ1xuICAgIHwgJ1JTUzE0J1xuICAgIHwgJ1JTU19FWFBBTkRFRCdcbiAgICB8ICdQREZfNDE3J1xuICAgIHwgJ0FaVEVDJ1xuICAgIHwgJ01TSSc7XG4gIGNhbmNlbGxlZDogYm9vbGVhbjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhcmNvZGUgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgQmFyY29kZSBTY2FubmVyIFBsdWdpbiBvcGVucyBhIGNhbWVyYSB2aWV3IGFuZCBhdXRvbWF0aWNhbGx5IHNjYW5zIGEgYmFyY29kZSwgcmV0dXJuaW5nIHRoZSBkYXRhIGJhY2sgdG8geW91LlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhcmNvZGVTY2FubmVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmFyY29kZS1zY2FubmVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oKS50aGVuKGJhcmNvZGVEYXRhID0+IHtcbiAqICBjb25zb2xlLmxvZygnQmFyY29kZSBkYXRhJywgYmFyY29kZURhdGEpO1xuICogfSkuY2F0Y2goZXJyID0+IHtcbiAqIFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQmFyY29kZVNjYW5uZXJPcHRpb25zXG4gKiBCYXJjb2RlU2NhblJlc3VsdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhcmNvZGVTY2FubmVyJyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmJhcmNvZGVTY2FubmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCbGFja0JlcnJ5IDEwJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFyY29kZVNjYW5uZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEVuY29kZToge1xuICAgIFRFWFRfVFlQRTogc3RyaW5nO1xuICAgIEVNQUlMX1RZUEU6IHN0cmluZztcbiAgICBQSE9ORV9UWVBFOiBzdHJpbmc7XG4gICAgU01TX1RZUEU6IHN0cmluZztcbiAgfSA9IHtcbiAgICBURVhUX1RZUEU6ICdURVhUX1RZUEUnLFxuICAgIEVNQUlMX1RZUEU6ICdFTUFJTF9UWVBFJyxcbiAgICBQSE9ORV9UWVBFOiAnUEhPTkVfVFlQRScsXG4gICAgU01TX1RZUEU6ICdTTVNfVFlQRScsXG4gIH07XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIGJhcmNvZGUgc2Nhbm5lci5cbiAgICpcbiAgICogQHBhcmFtIHtCYXJjb2RlU2Nhbm5lck9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25hbCBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIHNjYW5uZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHNjYW5uZXIgZGF0YSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgc2NhbihvcHRpb25zPzogQmFyY29kZVNjYW5uZXJPcHRpb25zKTogUHJvbWlzZTxCYXJjb2RlU2NhblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGRhdGEgaW50byBhIGJhcmNvZGUuXG4gICAqIE5PVEU6IG5vdCB3ZWxsIHN1cHBvcnRlZCBvbiBBbmRyb2lkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgb2YgZW5jb2RpbmdcbiAgICogQHBhcmFtIHthbnl9IGRhdGEgRGF0YSB0byBlbmNvZGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5jb2RlKHR5cGU6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==