import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
var LocalNotifications = /** @class */ (function (_super) {
    __extends(LocalNotifications, _super);
    function LocalNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalNotifications.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    LocalNotifications.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    LocalNotifications.prototype.schedule = function (options) { return cordova(this, "schedule", { "sync": true }, arguments); };
    LocalNotifications.prototype.update = function (options) { return cordova(this, "update", { "sync": true }, arguments); };
    LocalNotifications.prototype.clear = function (notificationId) { return cordova(this, "clear", {}, arguments); };
    LocalNotifications.prototype.clearAll = function () { return cordova(this, "clearAll", {}, arguments); };
    LocalNotifications.prototype.cancel = function (notificationId) { return cordova(this, "cancel", {}, arguments); };
    LocalNotifications.prototype.cancelAll = function () { return cordova(this, "cancelAll", {}, arguments); };
    LocalNotifications.prototype.isPresent = function (notificationId) { return cordova(this, "isPresent", {}, arguments); };
    LocalNotifications.prototype.isScheduled = function (notificationId) { return cordova(this, "isScheduled", {}, arguments); };
    LocalNotifications.prototype.isTriggered = function (notificationId) { return cordova(this, "isTriggered", {}, arguments); };
    LocalNotifications.prototype.hasType = function (id, type) { return cordova(this, "hasType", {}, arguments); };
    LocalNotifications.prototype.getType = function (id) { return cordova(this, "getType", {}, arguments); };
    LocalNotifications.prototype.getIds = function () { return cordova(this, "getIds", {}, arguments); };
    LocalNotifications.prototype.getScheduledIds = function () { return cordova(this, "getScheduledIds", {}, arguments); };
    LocalNotifications.prototype.getTriggeredIds = function () { return cordova(this, "getTriggeredIds", {}, arguments); };
    LocalNotifications.prototype.get = function (notificationId) { return cordova(this, "get", {}, arguments); };
    LocalNotifications.prototype.getAll = function () { return cordova(this, "getAll", {}, arguments); };
    LocalNotifications.prototype.getScheduled = function (notificationId) { return cordova(this, "getScheduled", {}, arguments); };
    LocalNotifications.prototype.getTriggered = function (notificationId) { return cordova(this, "getTriggered", {}, arguments); };
    LocalNotifications.prototype.addActions = function (groupId, actions) { return cordova(this, "addActions", {}, arguments); };
    LocalNotifications.prototype.removeActions = function (groupId) { return cordova(this, "removeActions", {}, arguments); };
    LocalNotifications.prototype.hasActions = function (groupId) { return cordova(this, "hasActions", {}, arguments); };
    LocalNotifications.prototype.getDefaults = function () { return cordova(this, "getDefaults", { "sync": true }, arguments); };
    LocalNotifications.prototype.setDefaults = function (defaults) { return cordova(this, "setDefaults", { "sync": true }, arguments); };
    LocalNotifications.prototype.getAllScheduled = function () { return cordova(this, "getAllScheduled", {}, arguments); };
    LocalNotifications.prototype.getAllTriggered = function () { return cordova(this, "getAllTriggered", {}, arguments); };
    LocalNotifications.prototype.on = function (eventName) { return cordova(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    LocalNotifications.prototype.fireEvent = function (eventName, args) { return cordova(this, "fireEvent", { "sync": true }, arguments); };
    LocalNotifications.prototype.fireQueuedEvents = function () { return cordova(this, "fireQueuedEvents", {}, arguments); };
    LocalNotifications.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalNotifications, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    LocalNotifications.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalNotifications });
    LocalNotifications.pluginName = "LocalNotifications";
    LocalNotifications.plugin = "cordova-plugin-local-notification";
    LocalNotifications.pluginRef = "cordova.plugins.notification.local";
    LocalNotifications.repo = "https://github.com/katzer/cordova-plugin-local-notifications";
    LocalNotifications.platforms = ["Android", "iOS", "Windows"];
    LocalNotifications = __decorate([], LocalNotifications);
    return LocalNotifications;
}(AwesomeCordovaNativePlugin));
export { LocalNotifications };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LocalNotifications, decorators: [{
            type: Injectable
        }], propDecorators: { hasPermission: [], requestPermission: [], schedule: [], update: [], clear: [], clearAll: [], cancel: [], cancelAll: [], isPresent: [], isScheduled: [], isTriggered: [], hasType: [], getType: [], getIds: [], getScheduledIds: [], getTriggeredIds: [], get: [], getAll: [], getScheduled: [], getTriggered: [], addActions: [], removeActions: [], hasActions: [], getDefaults: [], setDefaults: [], getAllScheduled: [], getAllTriggered: [], on: [], fireEvent: [], fireQueuedEvents: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYWwtbm90aWZpY2F0aW9ucy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVsQyxNQUFNLENBQU4sSUFBWSw2QkFZWDtBQVpELFdBQVksNkJBQTZCO0lBQ3ZDLGtEQUFpQixDQUFBO0lBQ2pCLGtEQUFpQixDQUFBO0lBQ2pCLDhDQUFhLENBQUE7SUFDYiw0Q0FBVyxDQUFBO0lBQ1gsOENBQWEsQ0FBQTtJQUNiLGdEQUFlLENBQUE7SUFDZixvREFBbUIsQ0FBQTtJQUNuQiw4Q0FBYSxDQUFBO0lBQ2Isb0RBQW1CLENBQUE7SUFDbkIsbUVBQWtDLENBQUE7SUFDbEMsOERBQTZCLENBQUE7QUFDL0IsQ0FBQyxFQVpXLDZCQUE2QixLQUE3Qiw2QkFBNkIsUUFZeEM7QUEwSUQsTUFBTSxDQUFOLElBQVksNEJBR1g7QUFIRCxXQUFZLDRCQUE0QjtJQUN0QywrQ0FBZSxDQUFBO0lBQ2YsaURBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFHdkM7O0lBMFh1QyxzQ0FBMEI7Ozs7SUFPaEUsMENBQWE7SUFVYiw4Q0FBaUI7SUFZakIscUNBQVEsYUFBQyxPQUFtRDtJQVU1RCxtQ0FBTSxhQUFDLE9BQTRCO0lBU25DLGtDQUFLLGFBQUMsY0FBbUI7SUFVekIscUNBQVE7SUFXUixtQ0FBTSxhQUFDLGNBQW1CO0lBVTFCLHNDQUFTO0lBV1Qsc0NBQVMsYUFBQyxjQUFzQjtJQVdoQyx3Q0FBVyxhQUFDLGNBQXNCO0lBV2xDLHdDQUFXLGFBQUMsY0FBc0I7SUFZbEMsb0NBQU8sYUFBQyxFQUFVLEVBQUUsSUFBWTtJQVVoQyxvQ0FBTyxhQUFDLEVBQVU7SUFVbEIsbUNBQU07SUFVTiw0Q0FBZTtJQVVmLDRDQUFlO0lBV2YsZ0NBQUcsYUFBQyxjQUFtQjtJQVV2QixtQ0FBTTtJQVdOLHlDQUFZLGFBQUMsY0FBbUI7SUFXaEMseUNBQVksYUFBQyxjQUFtQjtJQVloQyx1Q0FBVSxhQUFDLE9BQVksRUFBRSxPQUFtQztJQVc1RCwwQ0FBYSxhQUFDLE9BQVk7SUFXMUIsdUNBQVUsYUFBQyxPQUFZO0lBWXZCLHdDQUFXO0lBYVgsd0NBQVcsYUFBQyxRQUFhO0lBVXpCLDRDQUFlO0lBVWYsNENBQWU7SUFlZiwrQkFBRSxhQUFDLFNBQWlCO0lBYXBCLHNDQUFTLGFBQUMsU0FBaUIsRUFBRSxJQUFTO0lBUXRDLDZDQUFnQjtvSEFsVUwsa0JBQWtCO3dIQUFsQixrQkFBa0I7Ozs7OztJQUFsQixrQkFBa0Isa0JBQWxCLGtCQUFrQjs2QkF2aEIvQjtFQXVoQndDLDBCQUEwQjtTQUFyRCxrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVTs4QkFRVCxhQUFhLE1BVWIsaUJBQWlCLE1BWWpCLFFBQVEsTUFVUixNQUFNLE1BU04sS0FBSyxNQVVMLFFBQVEsTUFXUixNQUFNLE1BVU4sU0FBUyxNQVdULFNBQVMsTUFXVCxXQUFXLE1BV1gsV0FBVyxNQVlYLE9BQU8sTUFVUCxPQUFPLE1BVVAsTUFBTSxNQVVOLGVBQWUsTUFVZixlQUFlLE1BV2YsR0FBRyxNQVVILE1BQU0sTUFXTixZQUFZLE1BV1osWUFBWSxNQVlaLFVBQVUsTUFXVixhQUFhLE1BV2IsVUFBVSxNQVlWLFdBQVcsTUFhWCxXQUFXLE1BVVgsZUFBZSxNQVVmLGVBQWUsTUFlZixFQUFFLE1BYUYsU0FBUyxNQVFULGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBlbnVtIEVMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXJVbml0IHtcbiAgU0VDT05EID0gJ3NlY29uZCcsXG4gIE1JTlVURSA9ICdtaW51dGUnLFxuICBIT1VSID0gJ2hvdXInLFxuICBEQVkgPSAnZGF5JyxcbiAgV0VFSyA9ICd3ZWVrJyxcbiAgTU9OVEggPSAnbW9udGgnLFxuICBRVUFSVEVSID0gJ3F1YXJ0ZXInLFxuICBZRUFSID0gJ3llYXInLFxuICBXRUVLREFZID0gJ3dlZWtkYXknLFxuICBXRUVLREFZX09SRElOQUwgPSAnd2Vla2RheU9yZGluYWwnLFxuICBXRUVLX09GX01PTlRIID0gJ3dlZWtPZk1vbnRoJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb25FdmVyeSB7XG4gIC8qKlxuICAgKiBUaGUgbWludXRlLlxuICAgKi9cbiAgbWludXRlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgaG91ci5cbiAgICovXG4gIGhvdXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkuXG4gICAqL1xuICBkYXk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgb2Ygd2Vlay5cbiAgICovXG4gIHdlZWtkYXk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIG9mIHllYWRheSBvZiB0aGUgYXJkaW5hbCB3ZWVrLlxuICAgKi9cbiAgd2Vlaz86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGRheSBvZiB0aGUgb3JkaW5hbCB3ZWVrLlxuICAgKi9cbiAgd2Vla2RheU9yZGluYWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIG9mIG1vbnRoLlxuICAgKi9cbiAgd2Vla09mTW9udGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aC5cbiAgICovXG4gIG1vbnRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgcXVhcnRlci5cbiAgICovXG4gIHF1YXJ0ZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB5ZWFyLlxuICAgKi9cbiAgeWVhcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyIHtcbiAgLyoqICoqKioqIEZJWCAqL1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBzeXN0ZW0gc2hvdWxkIGRlbGl2ZXIgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbi4gSWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBuaWwgb3IgaXMgYSBkYXRlIGluIHRoZSBwYXN0LCB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIGlzIGRlbGl2ZXJlZCBpbW1lZGlhdGVseS5cbiAgICogRGVmYXVsdDogbm93IH4gbmV3IERhdGUoKVxuICAgKi9cbiAgYXQ/OiBEYXRlO1xuXG4gIC8qKiAqKioqKiBUSU1FU1BBTiAqL1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdW5pdHNcbiAgICovXG4gIGluPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVbml0XG4gICAqL1xuICB1bml0PzogRUxvY2FsTm90aWZpY2F0aW9uVHJpZ2dlclVuaXQ7XG5cbiAgLyoqICoqKioqIFJFUEVBVC9NQVRDSCAqL1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdW5pdHNcbiAgICovXG4gIGNvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgdW5pdFxuICAgKi9cbiAgZXZlcnk/OiBFTG9jYWxOb3RpZmljYXRpb25UcmlnZ2VyVW5pdCB8IElMb2NhbE5vdGlmaWNhdGlvbkV2ZXJ5O1xuXG4gIC8qKlxuICAgKiBUaGUgZW5kIG9mIHRoZSByZXBlYXRpbmcgbm90aWZpY2F0aW9uXG4gICAqL1xuICBiZWZvcmU/OiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBzeXN0ZW0gc2hvdWxkIGRlbGl2ZXIgdGhlIGxvY2FsIG5vdGlmaWNhdGlvbi4gSWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBuaWwgb3IgaXMgYSBkYXRlIGluIHRoZSBwYXN0LCB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIGlzIGRlbGl2ZXJlZCBpbW1lZGlhdGVseS5cbiAgICogT25seSBmb3IgXCJyZXBlYXRcIlxuICAgKiBEZWZhdWx0OiBub3cgfiBuZXcgRGF0ZSgpXG4gICAqL1xuICBmaXJzdEF0PzogRGF0ZTtcblxuICAvKipcbiAgICogT25seSBmb3IgXCJtYXRjaFwiXG4gICAqL1xuICBhZnRlcj86IERhdGU7XG5cbiAgLyoqICoqKioqIExPQ0FUSU9OICovXG5cbiAgLyoqXG4gICAqIElPUyBPTkxZXG4gICAqIENlbnRlciBvZiB0aGUgbG9jYXRpb25cbiAgICogTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSB2YWx1ZXNcbiAgICovXG4gIGNlbnRlcj86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBJT1MgT05MWVxuICAgKiBSYWRpdXMgaW4gbWV0ZXJzXG4gICAqL1xuICByYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElPUyBPTkxZXG4gICAqIFRyaWdnZXIgb24gZW50cnkgb2YgdGhlIGxvY2F0aW9uXG4gICAqL1xuICBub3RpZnlPbkVudHJ5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogVHJpZ2dlciBvbiBleGl0IG9mIHRoZSBsb2NhdGlvblxuICAgKi9cbiAgbm90aWZ5T25FeGl0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSU9TIE9OTFlcbiAgICogVHJpZ2dlciBvbmx5IG9uY2U/XG4gICAqL1xuICBzaW5nbGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZW51bSBJTG9jYWxOb3RpZmljYXRpb25BY3Rpb25UeXBlIHtcbiAgSU5QVVQgPSAnaW5wdXQnLFxuICBCVVRUT04gPSAnYnV0dG9uJyxcbn1cblxuLyoqXG4gKiBOb3RpZmljYXRpb24gYWN0aW9uXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbnMjYWN0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvbiB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGFjdGlvbiBpcyB1c2VkIGFzIHRoZSBldmVudCBuYW1lIGluIHRoZSBsaXN0ZW5lciBmdW5jdGlvblxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIG1lc3NhZ2VcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgbm90aWZpY2F0aW9uIHNob3cgd2hlbiBhcHAgaW4gZm9yZWdyb3VuZC5cbiAgICovXG4gIGZvcmVncm91bmQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYWN0aW9uIGNhdXNlcyB0aGUgYXBwIHRvIGxhdW5jaCBpbiB0aGUgZm9yZWdyb3VuZFxuICAgKi9cbiAgbGF1bmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgdGhlIHZhbHVlIGlzICdkZWNsaW5lJyB0aGUgYWN0aW9uIGlzIGRpc3BsYXllZCB3aXRoIHNwZWNpYWwgaGlnaGxpZ2h0aW5nIHRvIGluZGljYXRlIHRoYXQgaXQgcGVyZm9ybXMgYSBkZXN0cnVjdGl2ZSB0YXNrXG4gICAqL1xuICB1aT86IHN0cmluZztcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGFjdGlvbiByZXF1aXJlcyB0aGF0IHRoZSB1c2Vy4oCZcyBkZXZpY2UgYmUgdW5sb2NrZWQuXG4gICAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhbiBhY3Rpb24gd2l0aCB0aGlzIG9wdGlvbiwgdGhlIHN5c3RlbSBwcm9tcHRzXG4gICAqIHRoZSB1c2VyIHRvIHVubG9jayB0aGUgZGV2aWNlXG4gICAqL1xuICBuZWVkc0F1dGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzb3VyY2UgcGF0aCBvZiB0aGUgYWN0aW9uIGljb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBBbiBhcnJheSBvZiBwcmUtZGVmaW5lZCBjaG9pY2VzIGZvciB1c2VycyBpbnB1dFxuICAgKi9cbiAgY2hvaWNlcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHVzZXIgY2FuIHByb3ZpZGUgYXJiaXRyYXJ5IHRleHQgdmFsdWVzXG4gICAqL1xuICBlZGl0YWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElPUyBPTkxZXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgdGV4dCBpbnB1dCBidXR0b24gdGhhdCBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuXG4gICAqL1xuICBzdWJtaXRUaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIGFjdGlvbi4gSWYgb21pdHRlZCAnYnV0dG9uJyBpcyB1c2VkLlxuICAgKi9cbiAgdHlwZT86IElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvblR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsTm90aWZpY2F0aW9uUHJvZ3Jlc3NCYXIge1xuICAvKipcbiAgICogSXMgdGhlIHByb2dyZXNzIGJhciBlbmFibGVkP1xuICAgKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZhbHVlXG4gICAqL1xuICB2YWx1ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFRoZSBtYXhpbXVtIHZhbHVlIChkZWZhdWx0IGlzIDEwMClcbiAgICovXG4gIG1heFZhbHVlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU2hvdyBhbiBpbmRldGVybWluYXRlIHByb2dyZXNzIGJhclxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdJTkRPV1MgT05MWVxuICAgKiBHZXRzIG9yIHNldHMgYW4gb3B0aW9uYWwgc3RyaW5nIHRvIGJlIGRpc3BsYXllZCBpbnN0ZWFkIG9mIHRoZVxuICAgKiBkZWZhdWx0IHBlcmNlbnRhZ2Ugc3RyaW5nLiBJZiB0aGlzIGlzbid0IHByb3ZpZGVkLCBzb21ldGhpbmdcbiAgICogbGlrZSBcIjcwJVwiIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdJTkRPV1MgT05MWVxuICAgKiBTZXRzIHRoZSBzdGF0dXMgKHJlcXVpcmVkKSwgd2hpY2ggaXMgZGlzcGxheWVkIHVuZGVybmVhdGggdGhlIHByb2dyZXNzIGJhclxuICAgKiBvbiB0aGUgbGVmdC5cbiAgICogVGhpcyBzdHJpbmcgc2hvdWxkIHJlZmxlY3QgdGhlIHN0YXR1cyBvZiB0aGUgb3BlcmF0aW9uLFxuICAgKiBsaWtlIFwiRG93bmxvYWRpbmcuLi5cIiBvciBcIkluc3RhbGxpbmcuLi5cIlxuICAgKi9cbiAgc3RhdHVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbE5vdGlmaWNhdGlvbiB7XG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIHJlcXVpcmVkIHRvIGNsZWFyLCBjYW5jZWwsIHVwZGF0ZSBvciByZXRyaWV2ZSB0aGUgbG9jYWwgbm90aWZpY2F0aW9uIGluIHRoZSBmdXR1cmVcbiAgICogRGVmYXVsdDogMFxuICAgKi9cbiAgaWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEZpcnN0IHJvdyBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAqIERlZmF1bHQ6IEVtcHR5IHN0cmluZyAoaU9TKSBvciB0aGUgYXBwIG5hbWUgKEFuZHJvaWQpXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2Vjb25kIHJvdyBvZiB0aGUgbm90aWZpY2F0aW9uXG4gICAqIERlZmF1bHQ6IEVtcHR5IHN0cmluZ1xuICAgKi9cbiAgdGV4dD86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIGN1cnJlbnRseSBzZXQgYXMgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbiBpbiBTcHJpbmdib2FyZCAoaU9TKSBvciBhdCB0aGUgcmlnaHQtaGFuZCBzaWRlIG9mIHRoZSBsb2NhbCBub3RpZmljYXRpb24gKEFuZHJvaWQpXG4gICAqIERlZmF1bHQ6IDAgKHdoaWNoIG1lYW5zIGRvbid0IHNob3cgYSBudW1iZXIpXG4gICAqL1xuICBiYWRnZT86IG51bWJlcjtcblxuICAvKipcbiAgICogVXJpIG9mIHRoZSBmaWxlIGNvbnRhaW5pbmcgdGhlIHNvdW5kIHRvIHBsYXkgd2hlbiBhbiBhbGVydCBpcyBkaXNwbGF5ZWRcbiAgICogRGVmYXVsdDogcmVzOi8vcGxhdGZvcm1fZGVmYXVsdFxuICAgKi9cbiAgc291bmQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFyYml0cmFyeSBkYXRhLCBvYmplY3RzIHdpbGwgYmUgZW5jb2RlZCB0byBKU09OIHN0cmluZ1xuICAgKiBEZWZhdWx0OiBudWxsXG4gICAqL1xuICBkYXRhPzogYW55O1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogVXJpIG9mIHRoZSBpY29uIHRoYXQgaXMgc2hvd24gaW4gdGhlIHRpY2tlciBhbmQgbm90aWZpY2F0aW9uXG4gICAqIERlZmF1bHQ6IHJlczovL2ljb25cbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBVcmkgb2YgdGhlIHJlc291cmNlIChvbmx5IHJlczovLykgdG8gdXNlIGluIHRoZSBub3RpZmljYXRpb24gbGF5b3V0cy4gRGlmZmVyZW50IGNsYXNzZXMgb2YgZGV2aWNlcyBtYXkgcmV0dXJuIGRpZmZlcmVudCBzaXplc1xuICAgKiBEZWZhdWx0OiByZXM6Ly9pY19wb3B1cF9yZW1pbmRlclxuICAgKi9cbiAgc21hbGxJY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogUkdCIHZhbHVlIGZvciB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgc21hbGxJY29uLlxuICAgKiBEZWZhdWx0OiBBbmRyb2lkcyBDT0xPUl9ERUZBVUxULCB3aGljaCB3aWxsIHZhcnkgYmFzZWQgb24gQW5kcm9pZCB2ZXJzaW9uLlxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBVc2UgdGhlIGRlZmF1bHQgbm90aWZpY2F0aW9uIHZpYnJhdGUuXG4gICAqL1xuICB2aWJyYXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIERlZmluZSB0aGUgYmxpbmtpbmcgb2YgdGhlIExFRCBvbiB0aGUgZGV2aWNlLlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIExFRCB3aWxsIGJsaW5rIGluIHRoZSBkZWZhdWx0IGNvbG9yIHdpdGhcbiAgICogdGltaW5ncyBmb3Igb24gYW5kIG9mZiBzZXQgdG8gMTAwMCBtcy5cbiAgICogSWYgc2V0IHRvIGEgc3RyaW5nLCB0aGUgTEVEIHdpbGwgYmxpbmsgaW4gdGhpcyBBUkdCIHZhbHVlIHdpdGhcbiAgICogdGltaW5ncyBmb3Igb24gYW5kIG9mZiBzZXQgdG8gMTAwMCBtcy5cbiAgICogSWYgc2V0IHRvIGFuIGFycmF5LCB0aGUgdmFsdWUgb2YgdGhlIGtleSAwIHdpbGwgYmUgdXNlZCBhcyB0aGUgY29sb3IsXG4gICAqIHRoZSB2YWx1ZSBvZiB0aGUga2V5IDEgd2lsbCBiZSB1c2VkIGFzIHRoZSAnb24nIHRpbWluZywgdGhlIHZhbHVlIG9mXG4gICAqIHRoZSBrZXkgMiB3aWxsIGJlIHVzZWQgYXMgdGhlICdvZmYnIHRpbWluZ1xuICAgKi9cbiAgbGVkPzogeyBjb2xvcjogc3RyaW5nOyBvbjogbnVtYmVyOyBvZmY6IG51bWJlciB9IHwgYW55W10gfCBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOb3RpZmljYXRpb24gcHJpb3JpdHkuXG4gICAqIEludGVnZXJzIGJldHdlZW4gLTIgYW5kIDIsIHdoZXJlYXMgLTIgaXMgbWluaW11bSBhbmQgMiBpcyBtYXhpbXVtIHByaW9yaXR5XG4gICAqL1xuICBwcmlvcml0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogSXMgYSBzaWxlbnQgbm90aWZpY2F0aW9uXG4gICAqL1xuICBzaWxlbnQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgYSBjbGljayBvbiB0aGUgbm90aWZpY2F0aW9uIGNhdXNlcyB0aGUgYXBwXG4gICAqIHRvIGxhdW5jaCBpbiB0aGUgZm9yZWdyb3VuZFxuICAgKi9cbiAgbGF1bmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFdha2V1cCB0aGUgZGV2aWNlLiAoZGVmYXVsdCBpcyB0cnVlKVxuICAgKi9cbiAgd2FrZXVwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNwZWNpZmllcyBhIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyBhZnRlciB3aGljaCB0aGlzIG5vdGlmaWNhdGlvbiBzaG91bGQgYmUgY2FuY2VsZWQsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IGNhbmNlbGVkLlxuICAgKi9cbiAgdGltZW91dEFmdGVyPzogbnVtYmVyIHwgZmFsc2U7XG5cbiAgLyoqXG4gICAqIEFjdGlvbnMgaWQgb3IgYWN0aW9uc1xuICAgKi9cbiAgYWN0aW9ucz86IHN0cmluZyB8IElMb2NhbE5vdGlmaWNhdGlvbkFjdGlvbltdO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRvIHRyaWdnZXIgdGhlIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgdHJpZ2dlcj86IElMb2NhbE5vdGlmaWNhdGlvblRyaWdnZXI7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpbWFnZSBhdHRhY2htZW50c1xuICAgKi9cbiAgYXR0YWNobWVudHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIElmIGFuZCBob3cgdGhlIG5vdGlmaWNhdGlvbiBzaGFsbCBzaG93IHRoZSB3aGVuIGRhdGUuXG4gICAqIFBvc3NiaWxlIHZhbHVlczpcbiAgICogICAgICAgICAgICAgICAgICBib29sZWFuOiB0cnVlIGVxdWFscyAnY2xvY2snLCBmYWxzZSBkaXNhYmxlIGEgd2F0Y2gvY291bnRlclxuICAgKiAgICAgICAgICAgICAgICAgICdjbG9jayc6IFNob3cgdGhlIHdoZW4gZGF0ZSBpbiB0aGUgY29udGVudCB2aWV3XG4gICAqICAgICAgICAgICAgICAgICAgJ2Nocm9ub21ldGVyJzogU2hvdyBhIHN0b3B3YXRjaFxuICAgKlxuICAgKi9cbiAgY2xvY2s/OiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93cyBhIHByb2dyZXNzIGJhclxuICAgKiBTZXR0aW5nIGEgYm9vbGVhbiBpcyBhIHNob3J0Y3V0IGZvciB7ZW5hYmxlZDogdHJ1ZS9mYWxzZX0gcmVzcGVjdGl2ZWx5XG4gICAqL1xuICBwcm9ncmVzc0Jhcj86IElMb2NhbE5vdGlmaWNhdGlvblByb2dyZXNzQmFyIHwgYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIElmIG11bHRpcGxlIG5vdGlmaWNhdGlvbnMgaGF2ZSB0aGUgc2FtZSBncm91cCB5b3VyIGFwcCBjYW4gcHJlc2VudFxuICAgKiB0aGVtIGFzIGEgc2luZ2xlIGdyb3VwLlxuICAgKi9cbiAgZ3JvdXA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBJZiBzZXQgdG8gJ3RydWUnIHRoaXMgbm90aWZpY2F0aW9uIGNvdWxkIHVzZSAnc3VtbWFyeScgdG8gc3VtbWFyaXplXG4gICAqIHRoZSBjb250ZW50cyBvZiB0aGUgd2hvbGUgZ3JvdXBcbiAgICovXG4gIGdyb3VwU3VtbWFyeT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFORFJPSUQgT05MWVxuICAgKiBTdW1tYXJ5IG9mIHRoZSB3aG9sZSBub3RpZmljYXRpb24gZ3JvdXAuIFNob3VsZCBiZSB1c2VkIGluIGNvbmp1bnRpb25cbiAgICogd2l0aCAnZ3JvdXBTdW1tYXJ5JyBzZXQgdG8gdHJ1ZVxuICAgKi9cbiAgc3VtbWFyeT86IHN0cmluZztcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNldHMgdGhlIG51bWJlciBvZiBpdGVtcyB0aGlzIG5vdGlmaWNhdGlvbiByZXByZXNlbnRzLlxuICAgKi9cbiAgbnVtYmVyPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU2V0IHdoZXRoZXIgdGhpcyBpcyBhbiBcIm9uZ29pbmdcIiBub3RpZmljYXRpb24uXG4gICAqIE9uZ29pbmcgbm90aWZpY2F0aW9ucyBjYW5ub3QgYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLFxuICAgKiBzbyB5b3VyIGFwcGxpY2F0aW9uIG9yIHNlcnZpY2UgbXVzdCB0YWtlIGNhcmUgb2YgY2FuY2VsaW5nIHRoZW0uXG4gICAqL1xuICBzdGlja3k/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogTWFrZSB0aGlzIG5vdGlmaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSB1c2VyIHRvdWNoZXMgaXQuXG4gICAqL1xuICBhdXRvQ2xlYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogSWYgc2V0IHRvIHRydWUgdGhlIG5vdGlmaWNhdGlvbiB3aWxsIGJlIHNob3cgaW4gaXRzIGVudGlyZXR5IG9uIGFsbCBsb2Nrc2NyZWVucy5cbiAgICogSWYgc2V0IHRvIGZhbHNlIGl0IHdpbGwgbm90IGJlIHJldmVhbGVkIG9uIGEgc2VjdXJlIGxvY2tzY3JlZW4uXG4gICAqL1xuICBsb2Nrc2NyZWVuPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNldCB0aGUgZGVmYXVsdCBub3RpZmljYXRpb24gb3B0aW9ucyB0aGF0IHdpbGwgYmUgdXNlZC5cbiAgICogVGhlIHZhbHVlIHNob3VsZCBiZSBvbmUgb3IgbW9yZSBvZiB0aGUgZm9sbG93aW5nIGZpZWxkcyBjb21iaW5lZCB3aXRoXG4gICAqIGJpdHdpc2Utb3I6IERFRkFVTFRfU09VTkQsIERFRkFVTFRfVklCUkFURSwgREVGQVVMVF9MSUdIVFMuXG4gICAqL1xuICBkZWZhdWx0cz86IG51bWJlcjtcblxuICAvKipcbiAgICogQU5EUk9JRCBPTkxZXG4gICAqIFNwZWNpZmllcyB0aGUgY2hhbm5lbCB0aGUgbm90aWZpY2F0aW9uIHNob3VsZCBiZSBkZWxpdmVyZWQgb24uXG4gICAqL1xuICBjaGFubmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBTkRST0lEIE9OTFlcbiAgICogU2V0IHRoZSB0b2tlbiBmb3IgdGhlIG1lZGlhIHNlc3Npb25cbiAgICovXG4gIG1lZGlhU2Vzc2lvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTWFrZSB0aGlzIG5vdGlmaWNhdGlvbiBzaG93IHdoZW4gYXBwIGluIGZvcmVncm91bmQuXG4gICAqL1xuICBmb3JlZ3JvdW5kPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBMb2NhbCBOb3RpZmljYXRpb25zXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gZGlzcGxheSBsb2NhbCBub3RpZmljYXRpb25zIG9uIHRoZSBkZXZpY2VcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xvY2FsLW5vdGlmaWNhdGlvbnMvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbE5vdGlmaWNhdGlvbnM6IExvY2FsTm90aWZpY2F0aW9ucykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIFNjaGVkdWxlIGEgc2luZ2xlIG5vdGlmaWNhdGlvblxuICogdGhpcy5sb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoe1xuICogICBpZDogMSxcbiAqICAgdGV4dDogJ1NpbmdsZSBJTG9jYWxOb3RpZmljYXRpb24nLFxuICogICBzb3VuZDogaXNBbmRyb2lkPyAnZmlsZTovL3NvdW5kLm1wMyc6ICdmaWxlOi8vYmVlcC5jYWYnLFxuICogICBkYXRhOiB7IHNlY3JldDoga2V5IH1cbiAqIH0pO1xuICpcbiAqXG4gKiAvLyBTY2hlZHVsZSBtdWx0aXBsZSBub3RpZmljYXRpb25zXG4gKiB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICogICAgaWQ6IDEsXG4gKiAgICB0ZXh0OiAnTXVsdGkgSUxvY2FsTm90aWZpY2F0aW9uIDEnLFxuICogICAgc291bmQ6IGlzQW5kcm9pZCA/ICdmaWxlOi8vc291bmQubXAzJzogJ2ZpbGU6Ly9iZWVwLmNhZicsXG4gKiAgICBkYXRhOiB7IHNlY3JldDprZXkgfVxuICogICB9LHtcbiAqICAgIGlkOiAyLFxuICogICAgdGl0bGU6ICdMb2NhbCBJTG9jYWxOb3RpZmljYXRpb24gRXhhbXBsZScsXG4gKiAgICB0ZXh0OiAnTXVsdGkgSUxvY2FsTm90aWZpY2F0aW9uIDInLFxuICogICAgaWNvbjogJ2h0dHA6Ly9leGFtcGxlLmNvbS9pY29uLnBuZydcbiAqIH1dKTtcbiAqXG4gKlxuICogLy8gU2NoZWR1bGUgZGVsYXllZCBub3RpZmljYXRpb25cbiAqIHRoaXMubG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKHtcbiAqICAgIHRleHQ6ICdEZWxheWVkIElMb2NhbE5vdGlmaWNhdGlvbicsXG4gKiAgICB0cmlnZ2VyOiB7YXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMzYwMCl9LFxuICogICAgbGVkOiAnRkYwMDAwJyxcbiAqICAgIHNvdW5kOiBudWxsXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIElMb2NhbE5vdGlmaWNhdGlvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvY2FsTm90aWZpY2F0aW9ucycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5ub3RpZmljYXRpb24ubG9jYWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1ub3RpZmljYXRpb25zJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxOb3RpZmljYXRpb25zIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSW5mb3JtcyBpZiB0aGUgYXBwIGhhcyB0aGUgcGVybWlzc2lvbiB0byBzaG93IG5vdGlmaWNhdGlvbnMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb24gdG8gc2hvdyBub3RpZmljYXRpb25zIGlmIG5vdCBhbHJlYWR5IGdyYW50ZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2NoZWR1bGVzIGEgc2luZ2xlIG9yIG11bHRpcGxlIG5vdGlmaWNhdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge05vdGlmaWNhdGlvbiB8IElMb2NhbE5vdGlmaWNhdGlvbltdfSBvcHRpb25hbFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNjaGVkdWxlKG9wdGlvbnM/OiBJTG9jYWxOb3RpZmljYXRpb24gfCBJTG9jYWxOb3RpZmljYXRpb25bXSk6IHZvaWQge31cblxuICAvKipcbiAgICogVXBkYXRlcyBhIHByZXZpb3VzbHkgc2NoZWR1bGVkIG5vdGlmaWNhdGlvbi4gTXVzdCBpbmNsdWRlIHRoZSBpZCBpbiB0aGUgb3B0aW9ucyBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJTG9jYWxOb3RpZmljYXRpb259IG9wdGlvbmFsXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgdXBkYXRlKG9wdGlvbnM/OiBJTG9jYWxOb3RpZmljYXRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsZWFycyBzaW5nbGUgb3IgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge2FueX0gQSBzaW5nbGUgbm90aWZpY2F0aW9uIGlkLCBvciBhbiBhcnJheSBvZiBub3RpZmljYXRpb24gaWRzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBub3RpZmljYXRpb24gaGFkIGJlZW4gY2xlYXJlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhcihub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBub3RpZmljYXRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdoZW4gYWxsIG5vdGlmaWNhdGlvbnMgaGF2ZSBjbGVhcmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyQWxsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbHMgc2luZ2xlIG9yIG11bHRpcGxlIG5vdGlmaWNhdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHthbnl9IEEgc2luZ2xlIG5vdGlmaWNhdGlvbiBpZCwgb3IgYW4gYXJyYXkgb2Ygbm90aWZpY2F0aW9uIGlkcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2hlbiB0aGUgbm90aWZpY2F0aW9uIGlzIGNhbmNlbGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhbmNlbChub3RpZmljYXRpb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VscyBhbGwgbm90aWZpY2F0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIGFsbCBub3RpZmljYXRpb25zIGFyZSBjYW5jZWxlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5jZWxBbGwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHByZXNlbmNlIG9mIGEgbm90aWZpY2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNQcmVzZW50KG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlzIGEgbm90aWZpY2F0aW9uIGlzIHNjaGVkdWxlZFxuICAgKlxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge251bWJlcn1cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzU2NoZWR1bGVkKG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbm90aWZpY2F0aW9uIGlzIHRyaWdnZXJlZFxuICAgKlxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uSWQge251bWJlcn1cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzVHJpZ2dlcmVkKG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBub3RpZmljYXRpb24gaGFzIGEgZ2l2ZW4gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIFRoZSBJRCBvZiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAgVGhlIHR5cGUgb2YgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1R5cGUoaWQ6IG51bWJlciwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdHlwZSAodHJpZ2dlcmVkLCBzY2hlZHVsZWQpIGZvciB0aGUgbm90aWZpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgVGhlIElEIG9mIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFR5cGUoaWQ6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRoZSBub3RpZmljYXRpb24gaWRzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PG51bWJlcj4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJZHMoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGlkcyBvZiBzY2hlZHVsZWQgbm90aWZpY2F0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXJbXT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNjaGVkdWxlZElkcygpOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaWRzIG9mIHRyaWdnZXJlZCBub3RpZmljYXRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PG51bWJlcj4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUcmlnZ2VyZWRJZHMoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBub3RpZmljYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCB7YW55fSBUaGUgaWQgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBnZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5vdGlmaWNhdGlvbiBvYmplY3RzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbltdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWxsKCk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc2NoZWR1bGVkIG5vdGlmaWNhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHthbnl9IFRoZSBpZCBvZiB0aGUgbm90aWZpY2F0aW9uIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxOb3RpZmljYXRpb24+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTY2hlZHVsZWQobm90aWZpY2F0aW9uSWQ6IGFueSk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHRyaWdnZXJlZCBub3RpZmljYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25JZCBUaGUgaWQgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBnZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VHJpZ2dlcmVkKG5vdGlmaWNhdGlvbklkOiBhbnkpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZ3JvdXAgb2YgYWN0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gZ3JvdXBJZCBUaGUgaWQgb2YgdGhlIGFjdGlvbiBncm91cFxuICAgKiBAcGFyYW0gYWN0aW9ucyBUaGUgYWN0aW9ucyBvZiB0aGlzIGdyb3VwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFkZEFjdGlvbnMoZ3JvdXBJZDogYW55LCBhY3Rpb25zOiBJTG9jYWxOb3RpZmljYXRpb25BY3Rpb25bXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBncm91cCBvZiBhY3Rpb25zXG4gICAqXG4gICAqIEBwYXJhbSBncm91cElkIFRoZSBpZCBvZiB0aGUgYWN0aW9uIGdyb3VwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUFjdGlvbnMoZ3JvdXBJZDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgZ3JvdXAgb2YgYWN0aW9ucyBpcyBkZWZpbmVkXG4gICAqXG4gICAqIEBwYXJhbSBncm91cElkIFRoZSBpZCBvZiB0aGUgYWN0aW9uIGdyb3VwXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBXaGV0aGVyIHRoZSBncm91cCBpcyBkZWZpbmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc0FjdGlvbnMoZ3JvdXBJZDogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIChwbGF0Zm9ybSBzcGVjaWZpYykgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gQW4gb2JqZWN0IHdpdGggYWxsIGRlZmF1bHQgc2V0dGluZ3NcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBnZXREZWZhdWx0cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVyd3JpdGVzIHRoZSAocGxhdGZvcm0gc3BlY2lmaWMpIGRlZmF1bHQgc2V0dGluZ3MuXG4gICAqXG4gICAqIEBwYXJhbSBkZWZhdWx0c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNldERlZmF1bHRzKGRlZmF1bHRzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHNjaGVkdWxlZCBub3RpZmljYXRpb24gb2JqZWN0c1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxJTG9jYWxOb3RpZmljYXRpb24+Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWxsU2NoZWR1bGVkKCk6IFByb21pc2U8SUxvY2FsTm90aWZpY2F0aW9uW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0cmlnZ2VyZWQgbm90aWZpY2F0aW9uIG9iamVjdHNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8SUxvY2FsTm90aWZpY2F0aW9uPj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFsbFRyaWdnZXJlZCgpOiBQcm9taXNlPElMb2NhbE5vdGlmaWNhdGlvbltdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBldmVudFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBldmVudC4gQXZhaWxhYmxlIGV2ZW50czogc2NoZWR1bGUsIHRyaWdnZXIsIGNsaWNrLCB1cGRhdGUsIGNsZWFyLCBjbGVhcmFsbCwgY2FuY2VsLCBjYW5jZWxhbGwuIEN1c3RvbSBldmVudCBuYW1lcyBhcmUgcG9zc2libGUgZm9yIGFjdGlvbnNcbiAgICogQHJldHVybnMge09ic2VydmFibGV9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAndW4nLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXG4gIH0pXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTm90IGFuIG9mZmljaWFsIGludGVyZmFjZSwgaG93ZXZlciBpdHMgcG9zc2libGUgdG8gbWFudWFsbHkgZmlyZSBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBBdmFpbGFibGUgZXZlbnRzOiBzY2hlZHVsZSwgdHJpZ2dlciwgY2xpY2ssIHVwZGF0ZSwgY2xlYXIsIGNsZWFyYWxsLCBjYW5jZWwsIGNhbmNlbGFsbC4gQ3VzdG9tIGV2ZW50IG5hbWVzIGFyZSBwb3NzaWJsZSBmb3IgYWN0aW9uc1xuICAgKiBAcGFyYW0gYXJncyBPcHRpb25hbCBhcmd1bWVudHNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBmaXJlRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHZvaWQge31cblxuICAvKipcbiAgICogRmlyZSBxdWV1ZWQgZXZlbnRzIG9uY2UgdGhlIGRldmljZSBpcyByZWFkeSBhbmQgYWxsIGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmlyZVF1ZXVlZEV2ZW50cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19