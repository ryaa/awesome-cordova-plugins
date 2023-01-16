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
var ZipOriginal = /** @class */ (function (_super) {
    __extends(ZipOriginal, _super);
    function ZipOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZipOriginal.prototype.unzip = function (sourceZip, destFolder, onProgress) { return cordova(this, "unzip", {}, arguments); };
    ZipOriginal.pluginName = "Zip";
    ZipOriginal.plugin = "cordova-plugin-zip";
    ZipOriginal.pluginRef = "zip";
    ZipOriginal.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    ZipOriginal.platforms = ["Android", "iOS"];
    return ZipOriginal;
}(AwesomeCordovaNativePlugin));
var Zip = new ZipOriginal();
export { Zip };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemlwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEJuRSx1QkFBMEI7Ozs7SUFTakQsbUJBQUssYUFBQyxTQUFpQixFQUFFLFVBQWtCLEVBQUUsVUFBcUI7Ozs7OztjQXZDcEU7RUE4QnlCLDBCQUEwQjtTQUF0QyxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIENvcmRvdmEsIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFppcFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRvIHVuemlwIGZpbGVzIGluIEFuZHJvaWQgYW5kIGlPUy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgWmlwIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3ppcC9ueCdcbiAqIC4uLlxuICpcbiAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFppcC51bnppcCgncGF0aC90by9zb3VyY2UuemlwJywgJ3BhdGgvdG8vZGVzdCcsIChwcm9ncmVzcykgPT5cbiAqICAgICBjb25zb2xlLmxvZygnVW56aXBwaW5nLCAnICsgTWF0aC5yb3VuZCgocHJvZ3Jlc3MubG9hZGVkIC8gcHJvZ3Jlc3MudG90YWwpICogMTAwKSArICclJylcbiAqICk7XG4gKlxuICogaWYocmVzdWx0ID09PSAwKSBjb25zb2xlLmxvZygnU1VDQ0VTUycpO1xuICogaWYocmVzdWx0ID09PSAtMSkgY29uc29sZS5sb2coJ0ZBSUxFRCcpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ppcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXppcCcsXG4gIHBsdWdpblJlZjogJ3ppcCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTW9iaWxlQ2hyb21lQXBwcy9jb3Jkb3ZhLXBsdWdpbi16aXAnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWmlwIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRXh0cmFjdHMgZmlsZXMgZnJvbSBhIFpJUCBhcmNoaXZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VaaXAgIFNvdXJjZSBaSVAgZmlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzdEZvbGRlciBEZXN0aW5hdGlvbiBmb2xkZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Qcm9ncmVzcyAgb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIG9uIHByb2dyZXNzIHVwZGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBudW1iZXIuIDAgaXMgc3VjY2VzcywgLTEgaXMgZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW56aXAoc291cmNlWmlwOiBzdHJpbmcsIGRlc3RGb2xkZXI6IHN0cmluZywgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==