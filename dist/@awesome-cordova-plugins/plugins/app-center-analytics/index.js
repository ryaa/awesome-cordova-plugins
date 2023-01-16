var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AppCenterAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(AppCenterAnalyticsOriginal, _super);
    function AppCenterAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterAnalyticsOriginal.prototype.trackEvent = function (eventName, properties) { return cordova(this, "trackEvent", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.pluginName = "AppCenterAnalytics";
    AppCenterAnalyticsOriginal.plugin = "cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.pluginRef = "AppCenter.Analytics";
    AppCenterAnalyticsOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.platforms = ["Android", "iOS"];
    return AppCenterAnalyticsOriginal;
}(AwesomeCordovaNativePlugin));
var AppCenterAnalytics = new AppCenterAnalyticsOriginal();
export { AppCenterAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1hbmFseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUEwQ3BELHNDQUEwQjs7OztJQVdoRSx1Q0FBVSxhQUFDLFNBQWlCLEVBQUUsVUFBcUI7SUFVbkQsc0NBQVM7SUFXVCx1Q0FBVSxhQUFDLFlBQXFCOzs7Ozs7NkJBM0VsQztFQTJDd0MsMEJBQTBCO1NBQXJELGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nTWFwIHtcbiAgW3M6IHN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIEFuYWx5dGljc1xuICogQGRlc2NyaXB0aW9uXG4gKiBBcHAgQ2VudGVyIEFuYWx5dGljcyBoZWxwcyB5b3UgdW5kZXJzdGFuZCB1c2VyIGJlaGF2aW9yIGFuZCBjdXN0b21lciBlbmdhZ2VtZW50IHRvIGltcHJvdmUgeW91ciBhcHAuXG4gKiBUaGUgU0RLIGF1dG9tYXRpY2FsbHkgY2FwdHVyZXMgc2Vzc2lvbiBjb3VudCBhbmQgZGV2aWNlIHByb3BlcnRpZXMgbGlrZSBtb2RlbCwgT1MgdmVyc2lvbiwgZXRjLlxuICogWW91IGNhbiBkZWZpbmUgeW91ciBvd24gY3VzdG9tIGV2ZW50cyB0byBtZWFzdXJlIHRoaW5ncyB0aGF0IG1hdHRlciB0byB5b3UuXG4gKiBBbGwgdGhlIGluZm9ybWF0aW9uIGNhcHR1cmVkIGlzIGF2YWlsYWJsZSBpbiB0aGUgQXBwIENlbnRlciBwb3J0YWwgZm9yIHlvdSB0byBhbmFseXplIHRoZSBkYXRhLlxuICpcbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9hbmFseXRpY3MvY29yZG92YVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBDZW50ZXJBbmFseXRpY3MgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLWNlbnRlci1hbmFseXRpY3Mvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBDZW50ZXJBbmFseXRpY3M6IEFwcENlbnRlckFuYWx5dGljcykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5hcHBDZW50ZXJBbmFseXRpY3Muc2V0RW5hYmxlZCh0cnVlKS50aGVuKCgpID0+IHtcbiAqICAgIHRoaXMuYXBwQ2VudGVyQW5hbHl0aWNzLnRyYWNrRXZlbnQoJ015IEV2ZW50JywgeyBURVNUOiAnSEVMTE9fV09STEQnIH0pLnRoZW4oKCkgPT4ge1xuICogICAgICAgIGNvbnNvbGUubG9nKCdDdXN0b20gZXZlbnQgdHJhY2tlZCcpO1xuICogICAgfSk7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBTdHJpbmdNYXBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBDZW50ZXJBbmFseXRpY3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItYW5hbHl0aWNzJyxcbiAgcGx1Z2luUmVmOiAnQXBwQ2VudGVyLkFuYWx5dGljcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItYW5hbHl0aWNzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcENlbnRlckFuYWx5dGljcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRyYWNrcyBhbiBjdXN0b20gZXZlbnQuXG4gICAqIFlvdSBjYW4gc2VuZCB1cCB0byAyMDAgZGlzdGluY3QgZXZlbnQgbmFtZXMuIEFsc28sIHRoZXJlIGlzIGEgbWF4aW11bSBsaW1pdCBvZiAyNTYgY2hhcmFjdGVycyBwZXIgZXZlbnQgbmFtZVxuICAgKiBhbmQgNjQgY2hhcmFjdGVycyBwZXIgZXZlbnQgcHJvcGVydHkgbmFtZSBhbmQgZXZlbnQgcHJvcGVydHkgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nTWFwfSBwcm9wZXJ0aWVzIEV2ZW50IHByb3BlcnRpZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyYWNrRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM6IFN0cmluZ01hcCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBBcHAgQ2VudGVyIEFuYWx5dGljcyBpcyBlbmFibGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIEFwcCBDZW50ZXIgQW5hbHl0aWNzIGF0IHJ1bnRpbWVcbiAgICpcbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gc2hvdWxkRW5hYmxlIFNldCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW5hYmxlZChzaG91bGRFbmFibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==