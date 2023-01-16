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
var CloudSettingsOriginal = /** @class */ (function (_super) {
    __extends(CloudSettingsOriginal, _super);
    function CloudSettingsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettingsOriginal.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    CloudSettingsOriginal.prototype.save = function (settings, overwrite) { return cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettingsOriginal.prototype.load = function () { return cordova(this, "load", {}, arguments); };
    CloudSettingsOriginal.prototype.onRestore = function (handler) { return cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettingsOriginal.prototype.enableDebug = function () { return cordova(this, "enableDebug", {}, arguments); };
    CloudSettingsOriginal.pluginName = "CloudSettings";
    CloudSettingsOriginal.plugin = "cordova-plugin-cloud-settings";
    CloudSettingsOriginal.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettingsOriginal.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettingsOriginal.install = "ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettingsOriginal.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettingsOriginal.platforms = ["Android", "iOS"];
    return CloudSettingsOriginal;
}(AwesomeCordovaNativePlugin));
var CloudSettings = new CloudSettingsOriginal();
export { CloudSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2xvdWQtc2V0dGluZ3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFzQ3pELGlDQUEwQjs7OztJQU8zRCw4QkFBTTtJQWdCTiw0QkFBSSxhQUFDLFFBQWEsRUFBRSxTQUFtQjtJQVV2Qyw0QkFBSTtJQVVKLGlDQUFTLGFBQUMsT0FBaUI7SUFRM0IsbUNBQVc7Ozs7Ozs7O3dCQTFGYjtFQXVDbUMsMEJBQTBCO1NBQWhELGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIENsb3VkIFNldHRpbmdzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN0b3JlcyBhcHAgc2V0dGluZ3MgaW4gY2xvdWQgc3RvcmFnZSBzbyBpZiB0aGUgdXNlciByZS1pbnN0YWxscyB0aGUgYXBwIG9yIGluc3RhbGxzIGl0IG9uIGEgZGlmZmVyZW50IGRldmljZSwgdGhlIHNldHRpbmdzIHdpbGwgYmUgcmVzdG9yZWQgYW5kIGF2YWlsYWJsZSBpbiB0aGUgbmV3IGluc3RhbGxhdGlvbi5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2xvdWRTZXR0aW5ncyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jbG91ZC1zZXR0aW5ncy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsb3VkU2V0dGluZ3M6IENsb3VkU2V0dGluZ3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuY2xvdWRTZXR0aW5ncy5leGlzdHMoKVxuICogICAudGhlbigoZXhpc3RzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhcIlNhdmVkIHNldHRpbmdzIGV4aXN0OiBcIiArIGV4aXN0cykgKVxuICpcbiAqIHRoaXMuY2xvdWRTZXR0aW5ncy5sb2FkKClcbiAqICAgLnRoZW4oKHNldHRpbmdzOiBhbnkpID0+IHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncylcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogdGhpcy5jbG91ZFNldHRpbmdzLnNhdmUodGhpcy5zZXR0aW5ncylcbiAqICAgLnRoZW4oKHNhdmVkU2V0dGluZ3M6IGFueSkgPT4gY29uc29sZS5sb2coXCJTYXZlZCBzZXR0aW5nczogXCIgKyBKU09OLnN0cmluZ2lmeShzYXZlZFNldHRpbmdzKSkpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Nsb3VkU2V0dGluZ3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncycsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2luLmNsb3Vkc2V0dGluZ3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLXBsdWdpbi1jbG91ZC1zZXR0aW5ncycsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tY2xvdWQtc2V0dGluZ3MgLS12YXJpYWJsZSBBTkRST0lEX0JBQ0tVUF9TRVJWSUNFX0tFWT1teWFwaWtleScsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQU5EUk9JRF9CQUNLVVBfU0VSVklDRV9LRVknXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsb3VkU2V0dGluZ3MgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYW55IHN0b3JlZCBjbG91ZCBzZXR0aW5ncyBjdXJyZW50bHkgZXhpc3QgZm9yIHRoZSBjdXJyZW50IHVzZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBXaWxsIGJlIHBhc3NlZCBhIGJvb2xlYW4gZmxhZyB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciBhbiBzdG9yZSBzZXR0aW5ncyBleGlzdCBmb3IgdGhlIHVzZXIuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGV4aXN0cygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHNldHRpbmdzIHRvIGNsb3VkIGJhY2t1cC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzIC0gYSBKU09OIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgdGhlIHVzZXIgc2V0dGluZ3MgdG8gc2F2ZSB0byBjbG91ZCBiYWNrdXAuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW292ZXJ3cml0ZV0gLSAob3B0aW9uYWwpIGlmIHRydWUsIGV4aXN0aW5nIHNldHRpbmdzIHdpbGwgYmUgcmVwbGFjZWQgcmF0aGVyIHRoYW4gdXBkYXRlZC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqIElmIGZhbHNlLCBleGlzdGluZyBzZXR0aW5ncyB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBuZXcgc2V0dGluZ3MgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudCB3aGljaCBjb250YWlucyB0aGUgc2F2ZWQgc2V0dGluZ3MgYXMgYSBKU09OIG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2F2ZShzZXR0aW5nczogYW55LCBvdmVyd3JpdGU/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIGN1cnJlbnQgc2V0dGluZ3MuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIG9iamVjdCBhcmd1bWVudCB3aGljaCBjb250YWlucyB0aGUgc2F2ZWQgc2V0dGluZ3MgYXMgYSBKU09OIG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpZi93aGVuIHNldHRpbmdzIG9uIHRoZSBkZXZpY2UgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgY2xvdWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiBkZXZpY2Ugc2V0dGluZ3MgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgY2xvdWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb25SZXN0b3JlKGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBPdXRwdXRzIHZlcmJvc2UgbG9nIG1lc3NhZ2VzIGZyb20gdGhlIG5hdGl2ZSBwbHVnaW4gY29tcG9uZW50cyB0byB0aGUgSlMgY29uc29sZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuYWJsZURlYnVnKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19