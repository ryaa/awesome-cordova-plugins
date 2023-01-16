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
var FirebaseCrashlyticsOriginal = /** @class */ (function (_super) {
    __extends(FirebaseCrashlyticsOriginal, _super);
    function FirebaseCrashlyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashlyticsOriginal.prototype.initialise = function () { return cordova(this, "initialise", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.crash = function () { return cordova(this, "crash", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.logPriority = function (priority, tag, message) { return cordova(this, "logPriority", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.log = function (message) { return cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.logException = function (message) { return cordova(this, "logException", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setString = function (key, value) { return cordova(this, "setString", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setBool = function (key, value) { return cordova(this, "setBool", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setDouble = function (key, value) { return cordova(this, "setDouble", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setFloat = function (key, value) { return cordova(this, "setFloat", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setInt = function (key, value) { return cordova(this, "setInt", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.prototype.setUserIdentifier = function (identifier) { return cordova(this, "setUserIdentifier", { "sync": true }, arguments); };
    FirebaseCrashlyticsOriginal.pluginName = "FirebaseCrashlytics";
    FirebaseCrashlyticsOriginal.plugin = "cordova-plugin-firebase-crashlytics";
    FirebaseCrashlyticsOriginal.pluginRef = "FirebaseCrashlytics";
    FirebaseCrashlyticsOriginal.repo = "https://github.com/ReallySmallSoftware/cordova-plugin-firebase-crashlytics";
    FirebaseCrashlyticsOriginal.install = "ionic cordova plugin add cordova-plugin-firebase-crashlytics --variable ANDROID_FIREBASE_CORE_VERSION=16.0.0";
    FirebaseCrashlyticsOriginal.installVariables = ["ANDROID_FIREBASE_CORE_VERSION"];
    FirebaseCrashlyticsOriginal.platforms = ["Android", "iOS"];
    return FirebaseCrashlyticsOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseCrashlytics = new FirebaseCrashlyticsOriginal();
export { FirebaseCrashlytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtY3Jhc2hseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnQ25ELHVDQUEwQjs7OztJQVNqRSx3Q0FBVTtJQVlWLG1DQUFLO0lBZUwseUNBQVcsYUFBQyxRQUFnQixFQUFFLEdBQVcsRUFBRSxPQUFlO0lBYTFELGlDQUFHLGFBQUMsT0FBZTtJQWFuQiwwQ0FBWSxhQUFDLE9BQWU7SUFjNUIsdUNBQVMsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQWNwQyxxQ0FBTyxhQUFDLEdBQVcsRUFBRSxLQUFjO0lBY25DLHVDQUFTLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFjcEMsc0NBQVEsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQWNuQyxvQ0FBTSxhQUFDLEdBQVcsRUFBRSxLQUFhO0lBYWpDLCtDQUFpQixhQUFDLFVBQWtCOzs7Ozs7Ozs4QkFsTHRDO0VBaUN5QywwQkFBMEI7U0FBdEQsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBGaXJlYmFzZSBDcmFzaGx5dGljc1xuICogQGRlc2NyaXB0aW9uXG4gKiBBIEdvb2dsZSBGaXJlYmFzZSBDcmFzaGx5dGljcyBwbHVnaW4gdG8gZW5hYmxlIGNhcHR1cmUgb2YgY3Jhc2ggcmVwb3J0cy5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlyZWJhc2VDcmFzaGx5dGljcyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maXJlYmFzZS1jcmFzaGx5dGljcy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlQ3Jhc2hseXRpY3M6IEZpcmViYXNlQ3Jhc2hseXRpY3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBjcmFzaGx5dGljcyA9IHRoaXMuZmlyZWJhc2VDcmFzaGx5dGljcy5pbml0aWFsaXNlKCk7XG4gKiBjcmFzaGx5dGljcy5sb2dFeGNlcHRpb24oJ215IGNhdWdodCBleGNlcHRpb24nKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZUNyYXNobHl0aWNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtY3Jhc2hseXRpY3MnLFxuICBwbHVnaW5SZWY6ICdGaXJlYmFzZUNyYXNobHl0aWNzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9SZWFsbHlTbWFsbFNvZnR3YXJlL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNyYXNobHl0aWNzJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNyYXNobHl0aWNzIC0tdmFyaWFibGUgQU5EUk9JRF9GSVJFQkFTRV9DT1JFX1ZFUlNJT049MTYuMC4wJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX0ZJUkVCQVNFX0NPUkVfVkVSU0lPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VDcmFzaGx5dGljcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNpbXBseSBhZGQgdGhlIHBsdWdpbiB0byBnZXQgdGhlIGRlZmF1bHQgQ3Jhc2hseXRpY3MgZnVuY3Rpb25hbGl0eS4gTm90ZSB0aGF0IGNyYXNoZXMgYW5kIGxvZ2dlZCBleGNlcHRpb25zIHdpbGwgb25seSBiZSByZXBvcnRlZCB3aGVuIHRoZSBhcHBsaWNhdGlvbiByZXN0YXJ0cy4gSW4gb3JkZXIgdG8gbG9nIGNhdWdodCBleGNlcHRpb25zIHRoZSBmb2xsb3dpbmcgY2FuIGJlIHVzZWQ6XG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGluaXRpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgZm9yY2VkIGNyYXNoLiBWaXNpYmxlIGluIGNvbnNvbGUgYWZ0ZXIgcmVzdGFydCBvZiBhcHBsaWNhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgY3Jhc2goKTogdm9pZCB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYSBwcmlvcml0eSBtZXNzYWdlLiBXaWxsIG9ubHkgYmUgbG9nZ2VkIGluIHRoZSBldmVudCBvZiBhIGNyYXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcHJpb3JpdHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBsb2dQcmlvcml0eShwcmlvcml0eTogbnVtYmVyLCB0YWc6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhIG1lc3NhZ2UuIFdpbGwgb25seSBiZSBsb2dnZWQgaW4gdGhlIGV2ZW50IG9mIGEgY3Jhc2guXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9nIHdoZW4gYSBoYW5kbGVkIGV4Y2VwdGlvbiBoYXMgaGFwcGVuZWQuIFZpc2libGUgaW4gY29uc29sZSBhZnRlciByZXN0YXJ0IG9mIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBsb2dFeGNlcHRpb24obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBleHRyYSBrZXkvdmFsdWUgc3RyaW5nIHZhbHVlLiBXaWxsIG9ubHkgYmUgbG9nZ2VkIGluIHRoZSBldmVudCBvZiBhIGNyYXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXRTdHJpbmcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4dHJhIGtleS92YWx1ZSBib29sIHZhbHVlLiBXaWxsIG9ubHkgYmUgbG9nZ2VkIGluIHRoZSBldmVudCBvZiBhIGNyYXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0Qm9vbChrZXk6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4dHJhIGtleS92YWx1ZSBkb3VibGUgdmFsdWUuIFdpbGwgb25seSBiZSBsb2dnZWQgaW4gdGhlIGV2ZW50IG9mIGEgY3Jhc2guXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldERvdWJsZShrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXh0cmEga2V5L3ZhbHVlIGZsb2F0IHZhbHVlLiBXaWxsIG9ubHkgYmUgbG9nZ2VkIGluIHRoZSBldmVudCBvZiBhIGNyYXNoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXRGbG9hdChrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXh0cmEga2V5L3ZhbHVlIGludGVnZXIgdmFsdWUuIFdpbGwgb25seSBiZSBsb2dnZWQgaW4gdGhlIGV2ZW50IG9mIGEgY3Jhc2guXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldEludChrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGlkZW50aWZpZXIgZm9yIHRoZSB1c2VyLiBUYWtlIGNhcmUgd2hlbiB1c2luZyB0aGlzIG1ldGhvZCBhbmQgZW5zdXJlIHlvdSBwcml2YWN5IHBvbGljeSBpcyB1cGRhdGVkIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzZXRVc2VySWRlbnRpZmllcihpZGVudGlmaWVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==