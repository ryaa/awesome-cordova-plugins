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
import { Observable } from 'rxjs';
export var ELocalNotificationTriggerUnit;
(function (ELocalNotificationTriggerUnit) {
    ELocalNotificationTriggerUnit["SECOND"] = "second";
    ELocalNotificationTriggerUnit["MINUTE"] = "minute";
    ELocalNotificationTriggerUnit["HOUR"] = "hour";
    ELocalNotificationTriggerUnit["DAY"] = "day";
    ELocalNotificationTriggerUnit["WEEK"] = "week";
    ELocalNotificationTriggerUnit["MONTH"] = "month";
    ELocalNotificationTriggerUnit["QUARTER"] = "quarter";
    ELocalNotificationTriggerUnit["YEAR"] = "year";
    ELocalNotificationTriggerUnit["WEEKDAY"] = "weekday";
    ELocalNotificationTriggerUnit["WEEKDAY_ORDINAL"] = "weekdayOrdinal";
    ELocalNotificationTriggerUnit["WEEK_OF_MONTH"] = "weekOfMonth";
})(ELocalNotificationTriggerUnit || (ELocalNotificationTriggerUnit = {}));
export var ILocalNotificationActionType;
(function (ILocalNotificationActionType) {
    ILocalNotificationActionType["INPUT"] = "input";
    ILocalNotificationActionType["BUTTON"] = "button";
})(ILocalNotificationActionType || (ILocalNotificationActionType = {}));
var LocalNotificationsOriginal = /** @class */ (function (_super) {
    __extends(LocalNotificationsOriginal, _super);
    function LocalNotificationsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalNotificationsOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    LocalNotificationsOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    LocalNotificationsOriginal.prototype.schedule = function (options) { return cordova(this, "schedule", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.update = function (options) { return cordova(this, "update", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.clear = function (notificationId) { return cordova(this, "clear", {}, arguments); };
    LocalNotificationsOriginal.prototype.clearAll = function () { return cordova(this, "clearAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.cancel = function (notificationId) { return cordova(this, "cancel", {}, arguments); };
    LocalNotificationsOriginal.prototype.cancelAll = function () { return cordova(this, "cancelAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.isPresent = function (notificationId) { return cordova(this, "isPresent", {}, arguments); };
    LocalNotificationsOriginal.prototype.isScheduled = function (notificationId) { return cordova(this, "isScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.isTriggered = function (notificationId) { return cordova(this, "isTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.hasType = function (id, type) { return cordova(this, "hasType", {}, arguments); };
    LocalNotificationsOriginal.prototype.getType = function (id) { return cordova(this, "getType", {}, arguments); };
    LocalNotificationsOriginal.prototype.getIds = function () { return cordova(this, "getIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.getScheduledIds = function () { return cordova(this, "getScheduledIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.getTriggeredIds = function () { return cordova(this, "getTriggeredIds", {}, arguments); };
    LocalNotificationsOriginal.prototype.get = function (notificationId) { return cordova(this, "get", {}, arguments); };
    LocalNotificationsOriginal.prototype.getAll = function () { return cordova(this, "getAll", {}, arguments); };
    LocalNotificationsOriginal.prototype.getScheduled = function (notificationId) { return cordova(this, "getScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.getTriggered = function (notificationId) { return cordova(this, "getTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.addActions = function (groupId, actions) { return cordova(this, "addActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.removeActions = function (groupId) { return cordova(this, "removeActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.hasActions = function (groupId) { return cordova(this, "hasActions", {}, arguments); };
    LocalNotificationsOriginal.prototype.getDefaults = function () { return cordova(this, "getDefaults", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.setDefaults = function (defaults) { return cordova(this, "setDefaults", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.getAllScheduled = function () { return cordova(this, "getAllScheduled", {}, arguments); };
    LocalNotificationsOriginal.prototype.getAllTriggered = function () { return cordova(this, "getAllTriggered", {}, arguments); };
    LocalNotificationsOriginal.prototype.on = function (eventName) { return cordova(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    LocalNotificationsOriginal.prototype.fireEvent = function (eventName, args) { return cordova(this, "fireEvent", { "sync": true }, arguments); };
    LocalNotificationsOriginal.prototype.fireQueuedEvents = function () { return cordova(this, "fireQueuedEvents", {}, arguments); };
    LocalNotificationsOriginal.pluginName = "LocalNotifications";
    LocalNotificationsOriginal.plugin = "cordova-plugin-local-notification";
    LocalNotificationsOriginal.pluginRef = "cordova.plugins.notification.local";
    LocalNotificationsOriginal.repo = "https://github.com/katzer/cordova-plugin-local-notifications";
    LocalNotificationsOriginal.platforms = ["Android", "iOS", "Windows"];
    return LocalNotificationsOriginal;
}(AwesomeCordovaNativePlugin));
var LocalNotifications = new LocalNotificationsOriginal();
export { LocalNotifications };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYWwtbm90aWZpY2F0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLDZCQVlYO0FBWkQsV0FBWSw2QkFBNkI7SUFDdkMsa0RBQWlCLENBQUE7SUFDakIsa0RBQWlCLENBQUE7SUFDakIsOENBQWEsQ0FBQTtJQUNiLDRDQUFXLENBQUE7SUFDWCw4Q0FBYSxDQUFBO0lBQ2IsZ0RBQWUsQ0FBQTtJQUNmLG9EQUFtQixDQUFBO0lBQ25CLDhDQUFhLENBQUE7SUFDYixvREFBbUIsQ0FBQTtJQUNuQixtRUFBa0MsQ0FBQTtJQUNsQyw4REFBNkIsQ0FBQTtBQUMvQixDQUFDLEVBWlcsNkJBQTZCLEtBQTdCLDZCQUE2QixRQVl4QztBQTBJRCxNQUFNLENBQU4sSUFBWSw0QkFHWDtBQUhELFdBQVksNEJBQTRCO0lBQ3RDLCtDQUFlLENBQUE7SUFDZixpREFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSFcsNEJBQTRCLEtBQTVCLDRCQUE0QixRQUd2Qzs7SUEwWHVDLHNDQUEwQjs7OztJQU9oRSwwQ0FBYTtJQVViLDhDQUFpQjtJQVlqQixxQ0FBUSxhQUFDLE9BQW1EO0lBVTVELG1DQUFNLGFBQUMsT0FBNEI7SUFTbkMsa0NBQUssYUFBQyxjQUFtQjtJQVV6QixxQ0FBUTtJQVdSLG1DQUFNLGFBQUMsY0FBbUI7SUFVMUIsc0NBQVM7SUFXVCxzQ0FBUyxhQUFDLGNBQXNCO0lBV2hDLHdDQUFXLGFBQUMsY0FBc0I7SUFXbEMsd0NBQVcsYUFBQyxjQUFzQjtJQVlsQyxvQ0FBTyxhQUFDLEVBQVUsRUFBRSxJQUFZO0lBVWhDLG9DQUFPLGFBQUMsRUFBVTtJQVVsQixtQ0FBTTtJQVVOLDRDQUFlO0lBVWYsNENBQWU7SUFXZixnQ0FBRyxhQUFDLGNBQW1CO0lBVXZCLG1DQUFNO0lBV04seUNBQVksYUFBQyxjQUFtQjtJQVdoQyx5Q0FBWSxhQUFDLGNBQW1CO0lBWWhDLHVDQUFVLGFBQUMsT0FBWSxFQUFFLE9BQW1DO0lBVzVELDBDQUFhLGFBQUMsT0FBWTtJQVcxQix1Q0FBVSxhQUFDLE9BQVk7SUFZdkIsd0NBQVc7SUFhWCx3Q0FBVyxhQUFDLFFBQWE7SUFVekIsNENBQWU7SUFVZiw0Q0FBZTtJQWVmLCtCQUFFLGFBQUMsU0FBaUI7SUFhcEIsc0NBQVMsYUFBQyxTQUFpQixFQUFFLElBQVM7SUFRdEMsNkNBQWdCOzs7Ozs7NkJBejFCbEI7RUF1aEJ3QywwQkFBMEI7U0FBckQsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gRUxvY2FsTm90aWZpY2F0aW9uVHJpZ2dlclVuaXQge1xuICBTRUNPTkQgPSAnc2Vjb25kJyxcbiAgTUlOVVRFID0gJ21pbnV0ZScsXG4gIEhPVVIgPSAnaG91cicsXG4gIERBWSA9ICdkYXknLFxuICBXRUVLID0gJ3dlZWsnLFxuICBNT05USCA9ICdtb250aCcsXG4gIFFVQVJURVIgPSAncXVhcnRlcicsXG4gIFlFQVIgPSAneWVhcicsXG4gIFdFRUtEQVkgPSAnd2Vla2RheScsXG4gIFdFRUtEQVlfT1JESU5BTCA9ICd3ZWVrZGF5T3JkaW5hbCcsXG4gIFdFRUtfT0ZfTU9OVEggPSAnd2Vla09mTW9udGgnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE5vdGlmaWNhdGlvbkV2ZXJ5IHtcbiAgLyoqXG4gICAqIFRoZSBtaW51dGUuXG4gICAqL1xuICBtaW51dGU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBob3VyLlxuICAgKi9cbiAgaG91cj86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGRheS5cbiAgICovXG4gIGRheT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGRheSBvZiB3ZWVrLlxuICAgKi9cbiAgd2Vla2RheT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHdlZWsgb2YgeWVhZGF5IG9mIHRoZSBhcmRpbmFsIHdlZWsuXG4gICAqL1xuICB3ZWVrPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IG9mIHRoZSBvcmRpbmFsIHdlZWsuXG4gICAqL1xuICB3ZWVrZGF5T3JkaW5hbD86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHdlZWsgb2YgbW9udGguXG4gICAqL1xuICB3ZWVrT2ZNb250aD86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG1vbnRoLlxuICAgKi9cbiAgbW9udGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBxdWFydGVyLlxuICAgKi9cbiAgcXVhcnRlcj86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHllYXIuXG4gICAqL1xuICB5ZWFyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXIge1xuICAvKiogKioqKiogRklYICovXG5cbiAgLyoqXG4gICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHN5c3RlbSBzaG91bGQgZGVsaXZlciB0aGUgbG9jYWwgbm90aWZpY2F0aW9uLiBJZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5pbCBvciBpcyBhIGRhdGUgaW4gdGhlIHBhc3QsIHRoZSBsb2NhbCBub3RpZmljYXRpb24gaXMgZGVsaXZlcmVkIGltbWVkaWF0ZWx5LlxuICAgKiBEZWZhdWx0OiBub3cgfiBuZXcgRGF0ZSgpXG4gICAqL1xuICBhdD86IERhdGU7XG5cbiAgLyoqICoqKioqIFRJTUVTUEFOICovXG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiB1bml0c1xuICAgKi9cbiAgaW4/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVuaXRcbiAgICovXG4gIHVuaXQ/OiBFTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyVW5pdDtcblxuICAvKiogKioqKiogUkVQRUFUL01BVENIICovXG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiB1bml0c1xuICAgKi9cbiAgY291bnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB1bml0XG4gICAqL1xuICBldmVyeT86IEVMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXJVbml0IHwgSUxvY2FsTm90aWZpY2F0aW9uRXZlcnk7XG5cbiAgLyoqXG4gICAqIFRoZSBlbmQgb2YgdGhlIHJlcGVhdGluZyBub3RpZmljYXRpb25cbiAgICovXG4gIGJlZm9yZT86IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHN5c3RlbSBzaG91bGQgZGVsaXZlciB0aGUgbG9jYWwgbm90aWZpY2F0aW9uLiBJZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5pbCBvciBpcyBhIGRhdGUgaW4gdGhlIHBhc3QsIHRoZSBsb2NhbCBub3RpZmljYXRpb24gaXMgZGVsaXZlcmVkIGltbWVkaWF0ZWx5LlxuICAgKiBPbmx5IGZvciBcInJlcGVhdFwiXG4gICAqIERlZmF1bHQ6IG5vdyB+IG5ldyBEYXRlKClcbiAgICovXG4gIGZpcnN0QXQ/OiBEYXRlO1xuXG4gIC8qKlxuICAgKiBPbmx5IGZvciBcIm1hdGNoXCJcbiAgICovXG4gIGFmdGVyPzogRGF0ZTtcblxuICAvKiogKioqKiogTE9DQVRJT04gKi9cblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogQ2VudGVyIG9mIHRoZSBsb2NhdGlvblxuICAgKiBMYXRpdHVkZSBhbmQgTG9uZ2l0dWRlIHZhbHVlc1xuICAgKi9cbiAgY2VudGVyPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIElPUyBPTkxZXG4gICAqIFJhZGl1cyBpbiBtZXRlcnNcbiAgICovXG4gIHJhZGl1cz86IG51bWJlcjtcblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogVHJpZ2dlciBvbiBlbnRyeSBvZiB0aGUgbG9jYXRpb25cbiAgICovXG4gIG5vdGlmeU9uRW50cnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJT1MgT05MWVxuICAgKiBUcmlnZ2VyIG9uIGV4aXQgb2YgdGhlIGxvY2F0aW9uXG4gICAqL1xuICBub3RpZnlPbkV4aXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJT1MgT05MWVxuICAgKiBUcmlnZ2VyIG9ubHkgb25jZT9cbiAgICovXG4gIHNpbmdsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvblR5cGUge1xuICBJTlBVVCA9ICdpbnB1dCcsXG4gIEJVVFRPTiA9ICdidXR0b24nLFxufVxuXG4vKipcbiAqIE5vdGlmaWNhdGlvbiBhY3Rpb25cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9ucyNhY3Rpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsTm90aWZpY2F0aW9uQWN0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYWN0aW9uIGlzIHVzZWQgYXMgdGhlIGV2ZW50IG5hbWUgaW4gdGhlIGxpc3RlbmVyIGZ1bmN0aW9uXG4gICAqL1xuICBpZD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRpdGxlIG9mIHRoZSBub3RpZmljYXRpb24gbWVzc2FnZVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBub3RpZmljYXRpb24gc2hvdyB3aGVuIGFwcCBpbiBmb3JlZ3JvdW5kLlxuICAgKi9cbiAgZm9yZWdyb3VuZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBhY3Rpb24gY2F1c2VzIHRoZSBhcHAgdG8gbGF1bmNoIGluIHRoZSBmb3JlZ3JvdW5kXG4gICAqL1xuICBsYXVuY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgJ2RlY2xpbmUnIHRoZSBhY3Rpb24gaXMgZGlzcGxheWVkIHdpdGggc3BlY2lhbCBoaWdobGlnaHRpbmcgdG8gaW5kaWNhdGUgdGhhdCBpdCBwZXJmb3JtcyBhIGRlc3RydWN0aXZlIHRhc2tcbiAgICovXG4gIHVpPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYWN0aW9uIHJlcXVpcmVzIHRoYXQgdGhlIHVzZXLigJlzIGRldmljZSBiZSB1bmxvY2tlZC5cbiAgICogV2hlbiB0aGUgdXNlciBzZWxlY3RzIGFuIGFjdGlvbiB3aXRoIHRoaXMgb3B0aW9uLCB0aGUgc3lzdGVtIHByb21wdHNcbiAgICogdGhlIHVzZXIgdG8gdW5sb2NrIHRoZSBkZXZpY2VcbiAgICovXG4gIG5lZWRzQXV0aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSByZXNvdXJjZSBwYXRoIG9mIHRoZSBhY3Rpb24gaWNvblxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIEFuIGFycmF5IG9mIHByZS1kZWZpbmVkIGNob2ljZXMgZm9yIHVzZXJzIGlucHV0XG4gICAqL1xuICBjaG9pY2VzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgdXNlciBjYW4gcHJvdmlkZSBhcmJpdHJhcnkgdGV4dCB2YWx1ZXNcbiAgICovXG4gIGVkaXRhYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogVGhlIHRpdGxlIG9mIHRoZSB0ZXh0IGlucHV0IGJ1dHRvbiB0aGF0IGlzIGRpc3BsYXllZCB0byB0aGUgdXNlci5cbiAgICovXG4gIHN1Ym1pdFRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgYWN0aW9uLiBJZiBvbWl0dGVkICdidXR0b24nIGlzIHVzZWQuXG4gICAqL1xuICB0eXBlPzogSUxvY2FsTm90aWZpY2F0aW9uQWN0aW9uVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb25Qcm9ncmVzc0JhciB7XG4gIC8qKlxuICAgKiBJcyB0aGUgcHJvZ3Jlc3MgYmFyIGVuYWJsZWQ/XG4gICAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmFsdWVcbiAgICovXG4gIHZhbHVlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogVGhlIG1heGltdW0gdmFsdWUgKGRlZmF1bHQgaXMgMTAwKVxuICAgKi9cbiAgbWF4VmFsdWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTaG93IGFuIGluZGV0ZXJtaW5hdGUgcHJvZ3Jlc3MgYmFyXG4gICAqL1xuICBpbmRldGVybWluYXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV0lORE9XUyBPTkxZXG4gICAqIEdldHMgb3Igc2V0cyBhbiBvcHRpb25hbCBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIGluc3RlYWQgb2YgdGhlXG4gICAqIGRlZmF1bHQgcGVyY2VudGFnZSBzdHJpbmcuIElmIHRoaXMgaXNuJ3QgcHJvdmlkZWQsIHNvbWV0aGluZ1xuICAgKiBsaWtlIFwiNzAlXCIgd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogV0lORE9XUyBPTkxZXG4gICAqIFNldHMgdGhlIHN0YXR1cyAocmVxdWlyZWQpLCB3aGljaCBpcyBkaXNwbGF5ZWQgdW5kZXJuZWF0aCB0aGUgcHJvZ3Jlc3MgYmFyXG4gICAqIG9uIHRoZSBsZWZ0LlxuICAgKiBUaGlzIHN0cmluZyBzaG91bGQgcmVmbGVjdCB0aGUgc3RhdHVzIG9mIHRoZSBvcGVyYXRpb24sXG4gICAqIGxpa2UgXCJEb3dubG9hZGluZy4uLlwiIG9yIFwiSW5zdGFsbGluZy4uLlwiXG4gICAqL1xuICBzdGF0dXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsTm90aWZpY2F0aW9uIHtcbiAgLyoqXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgcmVxdWlyZWQgdG8gY2xlYXIsIGNhbmNlbCwgdXBkYXRlIG9yIHJldHJpZXZlIHRoZSBsb2NhbCBub3RpZmljYXRpb24gaW4gdGhlIGZ1dHVyZVxuICAgKiBEZWZhdWx0OiAwXG4gICAqL1xuICBpZD86IG51bWJlcjtcblxuICAvKipcbiAgICogRmlyc3Qgcm93IG9mIHRoZSBub3RpZmljYXRpb25cbiAgICogRGVmYXVsdDogRW1wdHkgc3RyaW5nIChpT1MpIG9yIHRoZSBhcHAgbmFtZSAoQW5kcm9pZClcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZWNvbmQgcm93IG9mIHRoZSBub3RpZmljYXRpb25cbiAgICogRGVmYXVsdDogRW1wdHkgc3RyaW5nXG4gICAqL1xuICB0ZXh0Pzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgY3VycmVudGx5IHNldCBhcyB0aGUgYmFkZ2Ugb2YgdGhlIGFwcCBpY29uIGluIFNwcmluZ2JvYXJkIChpT1MpIG9yIGF0IHRoZSByaWdodC1oYW5kIHNpZGUgb2YgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbiAoQW5kcm9pZClcbiAgICogRGVmYXVsdDogMCAod2hpY2ggbWVhbnMgZG9uJ3Qgc2hvdyBhIG51bWJlcilcbiAgICovXG4gIGJhZGdlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVcmkgb2YgdGhlIGZpbGUgY29udGFpbmluZyB0aGUgc291bmQgdG8gcGxheSB3aGVuIGFuIGFsZXJ0IGlzIGRpc3BsYXllZFxuICAgKiBEZWZhdWx0OiByZXM6Ly9wbGF0Zm9ybV9kZWZhdWx0XG4gICAqL1xuICBzb3VuZD86IHN0cmluZztcblxuICAvKipcbiAgICogQXJiaXRyYXJ5IGRhdGEsIG9iamVjdHMgd2lsbCBiZSBlbmNvZGVkIHRvIEpTT04gc3RyaW5nXG4gICAqIERlZmF1bHQ6IG51bGxcbiAgICovXG4gIGRhdGE/OiBhbnk7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBVcmkgb2YgdGhlIGljb24gdGhhdCBpcyBzaG93biBpbiB0aGUgdGlja2VyIGFuZCBub3RpZmljYXRpb25cbiAgICogRGVmYXVsdDogcmVzOi8vaWNvblxuICAgKi9cbiAgaWNvbj86IHN0cmluZztcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFVyaSBvZiB0aGUgcmVzb3VyY2UgKG9ubHkgcmVzOi8vKSB0byB1c2UgaW4gdGhlIG5vdGlmaWNhdGlvbiBsYXlvdXRzLiBEaWZmZXJlbnQgY2xhc3NlcyBvZiBkZXZpY2VzIG1heSByZXR1cm4gZGlmZmVyZW50IHNpemVzXG4gICAqIERlZmF1bHQ6IHJlczovL2ljX3BvcHVwX3JlbWluZGVyXG4gICAqL1xuICBzbWFsbEljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBSR0IgdmFsdWUgZm9yIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzbWFsbEljb24uXG4gICAqIERlZmF1bHQ6IEFuZHJvaWRzIENPTE9SX0RFRkFVTFQsIHdoaWNoIHdpbGwgdmFyeSBiYXNlZCBvbiBBbmRyb2lkIHZlcnNpb24uXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFVzZSB0aGUgZGVmYXVsdCBub3RpZmljYXRpb24gdmlicmF0ZS5cbiAgICovXG4gIHZpYnJhdGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogRGVmaW5lIHRoZSBibGlua2luZyBvZiB0aGUgTEVEIG9uIHRoZSBkZXZpY2UuXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgTEVEIHdpbGwgYmxpbmsgaW4gdGhlIGRlZmF1bHQgY29sb3Igd2l0aFxuICAgKiB0aW1pbmdzIGZvciBvbiBhbmQgb2ZmIHNldCB0byAxMDAwIG1zLlxuICAgKiBJZiBzZXQgdG8gYSBzdHJpbmcsIHRoZSBMRUQgd2lsbCBibGluayBpbiB0aGlzIEFSR0IgdmFsdWUgd2l0aFxuICAgKiB0aW1pbmdzIGZvciBvbiBhbmQgb2ZmIHNldCB0byAxMDAwIG1zLlxuICAgKiBJZiBzZXQgdG8gYW4gYXJyYXksIHRoZSB2YWx1ZSBvZiB0aGUga2V5IDAgd2lsbCBiZSB1c2VkIGFzIHRoZSBjb2xvcixcbiAgICogdGhlIHZhbHVlIG9mIHRoZSBrZXkgMSB3aWxsIGJlIHVzZWQgYXMgdGhlICdvbicgdGltaW5nLCB0aGUgdmFsdWUgb2ZcbiAgICogdGhlIGtleSAyIHdpbGwgYmUgdXNlZCBhcyB0aGUgJ29mZicgdGltaW5nXG4gICAqL1xuICBsZWQ/OiB7IGNvbG9yOiBzdHJpbmc7IG9uOiBudW1iZXI7IG9mZjogbnVtYmVyIH0gfCBhbnlbXSB8IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5vdGlmaWNhdGlvbiBwcmlvcml0eS5cbiAgICogSW50ZWdlcnMgYmV0d2VlbiAtMiBhbmQgMiwgd2hlcmVhcyAtMiBpcyBtaW5pbXVtIGFuZCAyIGlzIG1heGltdW0gcHJpb3JpdHlcbiAgICovXG4gIHByaW9yaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJcyBhIHNpbGVudCBub3RpZmljYXRpb25cbiAgICovXG4gIHNpbGVudD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBhIGNsaWNrIG9uIHRoZSBub3RpZmljYXRpb24gY2F1c2VzIHRoZSBhcHBcbiAgICogdG8gbGF1bmNoIGluIHRoZSBmb3JlZ3JvdW5kXG4gICAqL1xuICBsYXVuY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogV2FrZXVwIHRoZSBkZXZpY2UuIChkZWZhdWx0IGlzIHRydWUpXG4gICAqL1xuICB3YWtldXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU3BlY2lmaWVzIGEgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRoaXMgbm90aWZpY2F0aW9uIHNob3VsZCBiZSBjYW5jZWxlZCwgaWYgaXQgaXMgbm90IGFscmVhZHkgY2FuY2VsZWQuXG4gICAqL1xuICB0aW1lb3V0QWZ0ZXI/OiBudW1iZXIgfCBmYWxzZTtcblxuICAvKipcbiAgICogQWN0aW9ucyBpZCBvciBhY3Rpb25zXG4gICAqL1xuICBhY3Rpb25zPzogc3RyaW5nIHwgSUxvY2FsTm90aWZpY2F0aW9uQWN0aW9uW107XG5cbiAgLyoqXG4gICAqIFdoZW4gdG8gdHJpZ2dlciB0aGUgbm90aWZpY2F0aW9uXG4gICAqL1xuICB0cmlnZ2VyPzogSUxvY2FsTm90aWZpY2F0aW9uVHJpZ2dlcjtcblxuICAvKipcbiAgICogQSBsaXN0IG9mIGltYWdlIGF0dGFjaG1lbnRzXG4gICAqL1xuICBhdHRhY2htZW50cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogSWYgYW5kIGhvdyB0aGUgbm90aWZpY2F0aW9uIHNoYWxsIHNob3cgdGhlIHdoZW4gZGF0ZS5cbiAgICogUG9zc2JpbGUgdmFsdWVzOlxuICAgKiAgICAgICAgICAgICAgICAgIGJvb2xlYW46IHRydWUgZXF1YWxzICdjbG9jaycsIGZhbHNlIGRpc2FibGUgYSB3YXRjaC9jb3VudGVyXG4gICAqICAgICAgICAgICAgICAgICAgJ2Nsb2NrJzogU2hvdyB0aGUgd2hlbiBkYXRlIGluIHRoZSBjb250ZW50IHZpZXdcbiAgICogICAgICAgICAgICAgICAgICAnY2hyb25vbWV0ZXInOiBTaG93IGEgc3RvcHdhdGNoXG4gICAqXG4gICAqL1xuICBjbG9jaz86IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNob3dzIGEgcHJvZ3Jlc3MgYmFyXG4gICAqIFNldHRpbmcgYSBib29sZWFuIGlzIGEgc2hvcnRjdXQgZm9yIHtlbmFibGVkOiB0cnVlL2ZhbHNlfSByZXNwZWN0aXZlbHlcbiAgICovXG4gIHByb2dyZXNzQmFyPzogSUxvY2FsTm90aWZpY2F0aW9uUHJvZ3Jlc3NCYXIgfCBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogSWYgbXVsdGlwbGUgbm90aWZpY2F0aW9ucyBoYXZlIHRoZSBzYW1lIGdyb3VwIHlvdXIgYXBwIGNhbiBwcmVzZW50XG4gICAqIHRoZW0gYXMgYSBzaW5nbGUgZ3JvdXAuXG4gICAqL1xuICBncm91cD86IHN0cmluZztcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIElmIHNldCB0byAndHJ1ZScgdGhpcyBub3RpZmljYXRpb24gY291bGQgdXNlICdzdW1tYXJ5JyB0byBzdW1tYXJpemVcbiAgICogdGhlIGNvbnRlbnRzIG9mIHRoZSB3aG9sZSBncm91cFxuICAgKi9cbiAgZ3JvdXBTdW1tYXJ5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFN1bW1hcnkgb2YgdGhlIHdob2xlIG5vdGlmaWNhdGlvbiBncm91cC4gU2hvdWxkIGJlIHVzZWQgaW4gY29uanVudGlvblxuICAgKiB3aXRoICdncm91cFN1bW1hcnknIHNldCB0byB0cnVlXG4gICAqL1xuICBzdW1tYXJ5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU2V0cyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRoaXMgbm90aWZpY2F0aW9uIHJlcHJlc2VudHMuXG4gICAqL1xuICBudW1iZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTZXQgd2hldGhlciB0aGlzIGlzIGFuIFwib25nb2luZ1wiIG5vdGlmaWNhdGlvbi5cbiAgICogT25nb2luZyBub3RpZmljYXRpb25zIGNhbm5vdCBiZSBkaXNtaXNzZWQgYnkgdGhlIHVzZXIsXG4gICAqIHNvIHlvdXIgYXBwbGljYXRpb24gb3Igc2VydmljZSBtdXN0IHRha2UgY2FyZSBvZiBjYW5jZWxpbmcgdGhlbS5cbiAgICovXG4gIHN0aWNreT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBNYWtlIHRoaXMgbm90aWZpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIHVzZXIgdG91Y2hlcyBpdC5cbiAgICovXG4gIGF1dG9DbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBJZiBzZXQgdG8gdHJ1ZSB0aGUgbm90aWZpY2F0aW9uIHdpbGwgYmUgc2hvdyBpbiBpdHMgZW50aXJldHkgb24gYWxsIGxvY2tzY3JlZW5zLlxuICAgKiBJZiBzZXQgdG8gZmFsc2UgaXQgd2lsbCBub3QgYmUgcmV2ZWFsZWQgb24gYSBzZWN1cmUgbG9ja3NjcmVlbi5cbiAgICovXG4gIGxvY2tzY3JlZW4/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU2V0IHRoZSBkZWZhdWx0IG5vdGlmaWNhdGlvbiBvcHRpb25zIHRoYXQgd2lsbCBiZSB1c2VkLlxuICAgKiBUaGUgdmFsdWUgc2hvdWxkIGJlIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgZmllbGRzIGNvbWJpbmVkIHdpdGhcbiAgICogYml0d2lzZS1vcjogREVGQVVMVF9TT1VORCwgREVGQVVMVF9WSUJSQVRFLCBERUZBVUxUX0xJR0hUUy5cbiAgICovXG4gIGRlZmF1bHRzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU3BlY2lmaWVzIHRoZSBjaGFubmVsIHRoZSBub3RpZmljYXRpb24gc2hvdWxkIGJlIGRlbGl2ZXJlZCBvbi5cbiAgICovXG4gIGNoYW5uZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTZXQgdGhlIHRva2VuIGZvciB0aGUgbWVkaWEgc2Vzc2lvblxuICAgKi9cbiAgbWVkaWFTZXNzaW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgbm90aWZpY2F0aW9uIHNob3cgd2hlbiBhcHAgaW4gZm9yZWdyb3VuZC5cbiAgICovXG4gIGZvcmVncm91bmQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIExvY2FsIE5vdGlmaWNhdGlvbnNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBkaXNwbGF5IGxvY2FsIG5vdGlmaWNhdGlvbnMgb24gdGhlIGRldmljZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbG9jYWwtbm90aWZpY2F0aW9ucy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsTm90aWZpY2F0aW9uczogTG9jYWxOb3RpZmljYXRpb25zKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gU2NoZWR1bGUgYSBzaW5nbGUgbm90aWZpY2F0aW9uXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZSh7XG4gKiAgIGlkOiAxLFxuICogICB0ZXh0OiAnU2luZ2xlIElMb2NhbE5vdGlmaWNhdGlvbicsXG4gKiAgIHNvdW5kOiBpc0FuZHJvaWQ/ICdmaWxlOi8vc291bmQubXAzJzogJ2ZpbGU6Ly9iZWVwLmNhZicsXG4gKiAgIGRhdGE6IHsgc2VjcmV0OiBrZXkgfVxuICogfSk7XG4gKlxuICpcbiAqIC8vIFNjaGVkdWxlIG11bHRpcGxlIG5vdGlmaWNhdGlvbnNcbiAqIHRoaXMubG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XG4gKiAgICBpZDogMSxcbiAqICAgIHRleHQ6ICdNdWx0aSBJTG9jYWxOb3RpZmljYXRpb24gMScsXG4gKiAgICBzb3VuZDogaXNBbmRyb2lkID8gJ2ZpbGU6Ly9zb3VuZC5tcDMnOiAnZmlsZTovL2JlZXAuY2FmJyxcbiAqICAgIGRhdGE6IHsgc2VjcmV0OmtleSB9XG4gKiAgIH0se1xuICogICAgaWQ6IDIsXG4gKiAgICB0aXRsZTogJ0xvY2FsIElMb2NhbE5vdGlmaWNhdGlvbiBFeGFtcGxlJyxcbiAqICAgIHRleHQ6ICdNdWx0aSBJTG9jYWxOb3RpZmljYXRpb24gMicsXG4gKiAgICBpY29uOiAnaHR0cDovL2V4YW1wbGUuY29tL2ljb24ucG5nJ1xuICogfV0pO1xuICpcbiAqXG4gKiAvLyBTY2hlZHVsZSBkZWxheWVkIG5vdGlmaWNhdGlvblxuICogdGhpcy5sb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoe1xuICogICAgdGV4dDogJ0RlbGF5ZWQgSUxvY2FsTm90aWZpY2F0aW9uJyxcbiAqICAgIHRyaWdnZXI6IHthdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAzNjAwKX0sXG4gKiAgICBsZWQ6ICdGRjAwMDAnLFxuICogICAgc291bmQ6IG51bGxcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSUxvY2FsTm90aWZpY2F0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG9jYWxOb3RpZmljYXRpb25zJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm5vdGlmaWNhdGlvbi5sb2NhbCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbnMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbE5vdGlmaWNhdGlvbnMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBJbmZvcm1zIGlmIHRoZSBhcHAgaGFzIHRoZSBwZXJtaXNzaW9uIHRvIHNob3cgbm90aWZpY2F0aW9ucy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBzaG93IG5vdGlmaWNhdGlvbnMgaWYgbm90IGFscmVhZHkgZ3JhbnRlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYSBzaW5nbGUgb3IgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7Tm90aWZpY2F0aW9uIHwgSUxvY2FsTm90aWZpY2F0aW9uW119IG9wdGlvbmFsXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2NoZWR1bGUob3B0aW9ucz86IElMb2NhbE5vdGlmaWNhdGlvbiB8IElMb2NhbE5vdGlmaWNhdGlvbltdKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgcHJldmlvdXNseSBzY2hlZHVsZWQgbm90aWZpY2F0aW9uLiBNdXN0IGluY2x1ZGUgdGhlIGlkIGluIHRoZSBvcHRpb25zIHBhcmFtZXRlci5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0lMb2NhbE5vdGlmaWNhdGlvbn0gb3B0aW9uYWxcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICB1cGRhdGUob3B0aW9ucz86IElMb2NhbE5vdGlmaWNhdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogQ2xlYXJzIHNpbmdsZSBvciBtdWx0aXBsZSBub3RpZmljYXRpb25zXG4gICAqXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7YW55fSBBIHNpbmdsZSBub3RpZmljYXRpb24gaWQsIG9yIGFuIGFycmF5IG9mIG5vdGlmaWNhdGlvbiBpZHMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBoYWQgYmVlbiBjbGVhcmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIG5vdGlmaWNhdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2hlbiBhbGwgbm90aWZpY2F0aW9ucyBoYXZlIGNsZWFyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2xlYXJBbGwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VscyBzaW5nbGUgb3IgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge2FueX0gQSBzaW5nbGUgbm90aWZpY2F0aW9uIGlkLCBvciBhbiBhcnJheSBvZiBub3RpZmljYXRpb24gaWRzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBub3RpZmljYXRpb24gaXMgY2FuY2VsZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2FuY2VsKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIGFsbCBub3RpZmljYXRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdoZW4gYWxsIG5vdGlmaWNhdGlvbnMgYXJlIGNhbmNlbGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhbmNlbEFsbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgcHJlc2VuY2Ugb2YgYSBub3RpZmljYXRpb25cbiAgICpcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHtudW1iZXJ9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1ByZXNlbnQobm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaXMgYSBub3RpZmljYXRpb24gaXMgc2NoZWR1bGVkXG4gICAqXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNTY2hlZHVsZWQobm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBub3RpZmljYXRpb24gaXMgdHJpZ2dlcmVkXG4gICAqXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNUcmlnZ2VyZWQobm90aWZpY2F0aW9uSWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIG5vdGlmaWNhdGlvbiBoYXMgYSBnaXZlbiB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVGhlIElEIG9mIHRoZSBub3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlICBUaGUgdHlwZSBvZiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzVHlwZShpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0eXBlICh0cmlnZ2VyZWQsIHNjaGVkdWxlZCkgZm9yIHRoZSBub3RpZmljYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBUaGUgSUQgb2YgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VHlwZShpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIG5vdGlmaWNhdGlvbiBpZHNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8bnVtYmVyPj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElkcygpOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaWRzIG9mIHNjaGVkdWxlZCBub3RpZmljYXRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcltdPn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2NoZWR1bGVkSWRzKCk6IFByb21pc2U8bnVtYmVyW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBpZHMgb2YgdHJpZ2dlcmVkIG5vdGlmaWNhdGlvbnNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8bnVtYmVyPj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRyaWdnZXJlZElkcygpOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIG5vdGlmaWNhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHthbnl9IFRoZSBpZCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXQobm90aWZpY2F0aW9uSWQ6IGFueSk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgbm90aWZpY2F0aW9uIG9iamVjdHNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbGwoKTogUHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb25bXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzY2hlZHVsZWQgbm90aWZpY2F0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge2FueX0gVGhlIGlkIG9mIHRoZSBub3RpZmljYXRpb24gdG8gZ2V0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNjaGVkdWxlZChub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgdHJpZ2dlcmVkIG5vdGlmaWNhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIFRoZSBpZCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUcmlnZ2VyZWQobm90aWZpY2F0aW9uSWQ6IGFueSk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBncm91cCBvZiBhY3Rpb25zXG4gICAqXG4gICAqIEBwYXJhbSBncm91cElkIFRoZSBpZCBvZiB0aGUgYWN0aW9uIGdyb3VwXG4gICAqIEBwYXJhbSBhY3Rpb25zIFRoZSBhY3Rpb25zIG9mIHRoaXMgZ3JvdXBcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYWRkQWN0aW9ucyhncm91cElkOiBhbnksIGFjdGlvbnM6IElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvbltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGdyb3VwIG9mIGFjdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIGdyb3VwSWQgVGhlIGlkIG9mIHRoZSBhY3Rpb24gZ3JvdXBcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVtb3ZlQWN0aW9ucyhncm91cElkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBncm91cCBvZiBhY3Rpb25zIGlzIGRlZmluZWRcbiAgICpcbiAgICogQHBhcmFtIGdyb3VwSWQgVGhlIGlkIG9mIHRoZSBhY3Rpb24gZ3JvdXBcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFdoZXRoZXIgdGhlIGdyb3VwIGlzIGRlZmluZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzQWN0aW9ucyhncm91cElkOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgKHBsYXRmb3JtIHNwZWNpZmljKSBkZWZhdWx0IHNldHRpbmdzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBBbiBvYmplY3Qgd2l0aCBhbGwgZGVmYXVsdCBzZXR0aW5nc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGdldERlZmF1bHRzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZXMgdGhlIChwbGF0Zm9ybSBzcGVjaWZpYykgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICpcbiAgICogQHBhcmFtIGRlZmF1bHRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0RGVmYXVsdHMoZGVmYXVsdHM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgc2NoZWR1bGVkIG5vdGlmaWNhdGlvbiBvYmplY3RzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PElMb2NhbE5vdGlmaWNhdGlvbj4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbGxTY2hlZHVsZWQoKTogUHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb25bXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRyaWdnZXJlZCBub3RpZmljYXRpb24gb2JqZWN0c1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxJTG9jYWxOb3RpZmljYXRpb24+Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWxsVHJpZ2dlcmVkKCk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBBdmFpbGFibGUgZXZlbnRzOiBzY2hlZHVsZSwgdHJpZ2dlciwgY2xpY2ssIHVwZGF0ZSwgY2xlYXIsIGNsZWFyYWxsLCBjYW5jZWwsIGNhbmNlbGFsbC4gQ3VzdG9tIGV2ZW50IG5hbWVzIGFyZSBwb3NzaWJsZSBmb3IgYWN0aW9uc1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3QgYW4gb2ZmaWNpYWwgaW50ZXJmYWNlLCBob3dldmVyIGl0cyBwb3NzaWJsZSB0byBtYW51YWxseSBmaXJlIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEF2YWlsYWJsZSBldmVudHM6IHNjaGVkdWxlLCB0cmlnZ2VyLCBjbGljaywgdXBkYXRlLCBjbGVhciwgY2xlYXJhbGwsIGNhbmNlbCwgY2FuY2VsYWxsLiBDdXN0b20gZXZlbnQgbmFtZXMgYXJlIHBvc3NpYmxlIGZvciBhY3Rpb25zXG4gICAqIEBwYXJhbSBhcmdzIE9wdGlvbmFsIGFyZ3VtZW50c1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGZpcmVFdmVudChldmVudE5hbWU6IHN0cmluZywgYXJnczogYW55KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBGaXJlIHF1ZXVlZCBldmVudHMgb25jZSB0aGUgZGV2aWNlIGlzIHJlYWR5IGFuZCBhbGwgbGlzdGVuZXJzIGFyZSByZWdpc3RlcmVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmaXJlUXVldWVkRXZlbnRzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=