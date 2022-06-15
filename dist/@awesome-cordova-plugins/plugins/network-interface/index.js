var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var NetworkInterfaceOriginal = /** @class */ (function (_super) {
    __extends(NetworkInterfaceOriginal, _super);
    function NetworkInterfaceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkInterfaceOriginal.prototype.getWiFiIPAddress = function () { return cordova(this, "getWiFiIPAddress", {}, arguments); };
    NetworkInterfaceOriginal.prototype.getCarrierIPAddress = function () { return cordova(this, "getCarrierIPAddress", {}, arguments); };
    NetworkInterfaceOriginal.prototype.getHttpProxyInformation = function (url) { return cordova(this, "getHttpProxyInformation", {}, arguments); };
    NetworkInterfaceOriginal.pluginName = "NetworkInterface";
    NetworkInterfaceOriginal.plugin = "cordova-plugin-networkinterface";
    NetworkInterfaceOriginal.pluginRef = "networkinterface";
    NetworkInterfaceOriginal.repo = "https://github.com/salbahra/cordova-plugin-networkinterface";
    NetworkInterfaceOriginal.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows", "Windows Phone"];
    return NetworkInterfaceOriginal;
}(AwesomeCordovaNativePlugin));
var NetworkInterface = new NetworkInterfaceOriginal();
export { NetworkInterface };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0d29yay1pbnRlcmZhY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUN0RCxvQ0FBMEI7Ozs7SUFPOUQsMkNBQWdCO0lBVWhCLDhDQUFtQjtJQVluQixrREFBdUIsYUFBQyxHQUFXOzs7Ozs7MkJBakVyQztFQW9Dc0MsMEJBQTBCO1NBQW5ELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTmV0d29yayBJbnRlcmZhY2VcbiAqIEBkZXNjcmlwdGlvblxuICogTmV0d29yayBpbnRlcmZhY2UgaW5mb3JtYXRpb24gcGx1Z2luIGZvciBDb3Jkb3ZhL1Bob25lR2FwIHRoYXQgc3VwcG9ydHMgQW5kcm9pZCwgQmxhY2tiZXJyeSAxMCwgQnJvd3NlciwgaU9TLCBhbmQgV2luZG93cyBQaG9uZSA4LlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25ldHdvcmstaW50ZXJmYWNlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IoIHByaXZhdGUgbmV0d29ya0ludGVyZmFjZTogTmV0d29ya0ludGVyZmFjZSApIHtcbiAqXG4gKiAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKClcbiAqICAgICAudGhlbihhZGRyZXNzID0+IGNvbnNvbGUuaW5mbyhgSVA6ICR7YWRkcmVzcy5pcH0sIFN1Ym5ldDogJHthZGRyZXNzLnN1Ym5ldH1gKSlcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBJUDogJHtlcnJvcn1gKSk7XG4gKlxuICogICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0Q2FycmllcklQQWRkcmVzcygpXG4gKiAgICAgLnRoZW4oYWRkcmVzcyA9PiBjb25zb2xlLmluZm8oYElQOiAke2FkZHJlc3MuaXB9LCBTdWJuZXQ6ICR7YWRkcmVzcy5zdWJuZXR9YCkpXG4gKiAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBnZXQgSVA6ICR7ZXJyb3J9YCkpO1xuICpcbiAqICAgY29uc3QgdXJsID0gJ3d3dy5naXRodWIuY29tJztcbiAqICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldEh0dHBQcm94eUluZm9ybWF0aW9uKHVybClcbiAqICAgICAudGhlbihwcm94eSA9PiBjb25zb2xlLmluZm8oYFR5cGU6ICR7cHJveHkudHlwZX0sIEhvc3Q6ICR7cHJveHkuaG9zdH0sIFBvcnQ6ICR7cHJveHkucG9ydH1gKSlcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBwcm94eSBpbmZvOiAke2Vycm9yfWApKTtcbiAqIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05ldHdvcmtJbnRlcmZhY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JraW50ZXJmYWNlJyxcbiAgcGx1Z2luUmVmOiAnbmV0d29ya2ludGVyZmFjZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2FsYmFocmEvY29yZG92YS1wbHVnaW4tbmV0d29ya2ludGVyZmFjZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ldHdvcmtJbnRlcmZhY2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBXaUZpIElQIGFkZHJlc3NcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBJUCBhZGRyZXNzIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRXaUZpSVBBZGRyZXNzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHdpcmVsZXNzIGNhcnJpZXIgSVAgYWRkcmVzc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIElQIGFkZHJlc3MgaW5mb3JtYXRpb24uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldENhcnJpZXJJUEFkZHJlc3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcmVsZXZhbnQgcHJveGllcyBmb3IgdGhlIHBhc3NlZCBVUkwgaW4gb3JkZXIgb2YgYXBwbGljYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHt1cmx9IG1lc3NhZ2UgIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXG4gICAqIEBwYXJhbSB1cmxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBwcm94eSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SHR0cFByb3h5SW5mb3JtYXRpb24odXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19