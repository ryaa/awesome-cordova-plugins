import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var LaunchNavigator = /** @class */ (function (_super) {
    __extends(LaunchNavigator, _super);
    function LaunchNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit',
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit',
        };
        return _this;
    }
    LaunchNavigator.prototype.navigate = function (destination, options) { return cordova(this, "navigate", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    LaunchNavigator.prototype.isAppAvailable = function (app) { return cordova(this, "isAppAvailable", {}, arguments); };
    LaunchNavigator.prototype.availableApps = function () { return cordova(this, "availableApps", {}, arguments); };
    LaunchNavigator.prototype.getAppDisplayName = function (app) { return cordova(this, "getAppDisplayName", { "sync": true }, arguments); };
    LaunchNavigator.prototype.getAppsForPlatform = function (platform) { return cordova(this, "getAppsForPlatform", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsTransportMode = function (app, platform) { return cordova(this, "supportsTransportMode", { "sync": true }, arguments); };
    LaunchNavigator.prototype.getTransportModes = function (app, platform) { return cordova(this, "getTransportModes", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsDestName = function (app, platform) { return cordova(this, "supportsDestName", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsStart = function (app, platform) { return cordova(this, "supportsStart", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsStartName = function (app, platform) { return cordova(this, "supportsStartName", { "sync": true }, arguments); };
    LaunchNavigator.prototype.supportsLaunchMode = function (app, platform) { return cordova(this, "supportsLaunchMode", { "sync": true }, arguments); };
    LaunchNavigator.prototype.userSelect = function (destination, options) { return cordova(this, "userSelect", { "sync": true }, arguments); };
    Object.defineProperty(LaunchNavigator.prototype, "appSelection", {
        get: function () { return cordovaPropertyGet(this, "appSelection"); },
        set: function (value) { cordovaPropertySet(this, "appSelection", value); },
        enumerable: false,
        configurable: true
    });
    LaunchNavigator.pluginName = "LaunchNavigator";
    LaunchNavigator.plugin = "uk.co.workingedge.phonegap.plugin.launchnavigator";
    LaunchNavigator.pluginRef = "launchnavigator";
    LaunchNavigator.repo = "https://github.com/dpa99c/phonegap-launch-navigator";
    LaunchNavigator.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    LaunchNavigator.decorators = [
        { type: Injectable }
    ];
    return LaunchNavigator;
}(AwesomeCordovaNativePlugin));
export { LaunchNavigator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGF1bmNoLW5hdmlnYXRvci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQzs7SUErUnhFLG1DQUEwQjs7O1FBQzdELFNBQUcsR0FBUTtZQUNULFdBQVcsRUFBRSxhQUFhO1lBQzFCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFdBQVcsRUFBRSxhQUFhO1lBQzFCLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLFlBQVk7WUFDeEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLE1BQU07WUFDWixNQUFNLEVBQUUsUUFBUTtZQUNoQixTQUFTLEVBQUUsV0FBVztZQUN0QixLQUFLLEVBQUUsT0FBTztZQUNkLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7UUFFRixvQkFBYyxHQUFRO1lBQ3BCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLE9BQU8sRUFBRSxTQUFTO1NBQ25CLENBQUM7OztJQWdCRixrQ0FBUSxhQUFDLFdBQThCLEVBQUUsT0FBZ0M7SUFXekUsd0NBQWMsYUFBQyxHQUFXO0lBVTFCLHVDQUFhO0lBV2IsMkNBQWlCLGFBQUMsR0FBVztJQVc3Qiw0Q0FBa0IsYUFBQyxRQUFnQjtJQVluQywrQ0FBcUIsYUFBQyxHQUFXLEVBQUUsUUFBZ0I7SUFZbkQsMkNBQWlCLGFBQUMsR0FBVyxFQUFFLFFBQWdCO0lBVS9DLDBDQUFnQixhQUFDLEdBQVcsRUFBRSxRQUFnQjtJQVk5Qyx1Q0FBYSxhQUFDLEdBQVcsRUFBRSxRQUFnQjtJQVUzQywyQ0FBaUIsYUFBQyxHQUFXLEVBQUUsUUFBZ0I7SUFhL0MsNENBQWtCLGFBQUMsR0FBVyxFQUFFLFFBQWdCO0lBU2hELG9DQUFVLGFBQUMsV0FBOEIsRUFBRSxPQUErQjswQkF0STFFLHlDQUFZOzs7Ozs7Ozs7Ozs7Z0JBM0JiLFVBQVU7OzBCQS9SWDtFQWdTcUMsMEJBQTBCO1NBQWxELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0c09wdGlvbnMge1xuICAvKipcbiAgICogYSBmdW5jdGlvbiB0byBwYXNzIHRoZSB1c2VyJ3MgZGVjaXNpb24gd2hldGhlciB0byByZW1lbWJlciB0aGVpciBjaG9pY2Ugb2YgYXBwLlxuICAgKiBUaGlzIHdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIGJvb2xlYW4gdmFsdWUgaW5kaWNhdGluZyB0aGUgdXNlcidzIGRlY2lzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcmVtZW1iZXJDaG9pY2VcbiAgICovXG4gIGNhbGxiYWNrPzogKHJlbWVtYmVyQ2hvaWNlOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiB0ZXh0IHRvIGRpc3BsYXkgaW4gdGhlIG5hdGl2ZSBwcm9tcHQgaGVhZGVyIGFza2luZyB1c2VyIHdoZXRoZXIgdG8gcmVtZW1iZXIgdGhlaXIgY2hvaWNlLlxuICAgKiBEZWZhdWx0cyB0byBcIlJlbWVtYmVyIHlvdXIgY2hvaWNlP1wiIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAqL1xuICBoZWFkZXJUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0ZXh0IHRvIGRpc3BsYXkgaW4gdGhlIG5hdGl2ZSBwcm9tcHQgYm9keSBhc2tpbmcgdXNlciB3aGV0aGVyIHRvIHJlbWVtYmVyIHRoZWlyIGNob2ljZS5cbiAgICogRGVmYXVsdHMgdG8gXCJVc2UgdGhlIHNhbWUgYXBwIGZvciBuYXZpZ2F0aW5nIG5leHQgdGltZT9cIiBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgYm9keVRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHRleHQgdG8gZGlzcGxheSBmb3IgdGhlIFllcyBidXR0b24uXG4gICAqIERlZmF1bHRzIHRvIFwiWWVzXCIgaWYgbm90IHNwZWNpZmllZC5cbiAgICovXG4gIHllc0J1dHRvblRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHRleHQgdG8gZGlzcGxheSBmb3IgdGhlIE5vIGJ1dHRvbi5cbiAgICogRGVmYXVsdHMgdG8gXCJOb1wiIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAqL1xuICBub0J1dHRvblRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtZW1iZXJDaG9pY2VPcHRpb25zIHtcbiAgLyoqXG4gICAqIHdoZXRoZXIgdG8gcmVtZW1iZXIgdXNlciBjaG9pY2Ugb2YgYXBwIGZvciBuZXh0IHRpbWUsIGluc3RlYWQgb2YgYXNraW5nIGFnYWluIGZvciB1c2VyIGNob2ljZS5cbiAgICogYFwicHJvbXB0XCJgIC0gUHJvbXB0IHVzZXIgdG8gZGVjaWRlIHdoZXRoZXIgdG8gcmVtZW1iZXIgY2hvaWNlLlxuICAgKiAgLSBEZWZhdWx0IHZhbHVlIGlmIHVuc3BlY2lmaWVkLlxuICAgKiAgLSBJZiBgcHJvbXB0Rm5gIGlzIGRlZmluZWQsIHRoaXMgd2lsbCBiZSB1c2VkIGZvciB1c2VyIGNvbmZpcm1hdGlvbi5cbiAgICogIC0gT3RoZXJ3aXNlIChieSBkZWZhdWx0KSwgYSBuYXRpdmUgZGlhbG9nIHdpbGwgYmUgZGlzcGxheWVkIHRvIGFzayB1c2VyLlxuICAgKiBgZmFsc2VgIC0gRG8gbm90IHJlbWVtYmVyIHVzZXIgY2hvaWNlLlxuICAgKiBgdHJ1ZWAgLSBSZW1lbWJlciB1c2VyIGNob2ljZS5cbiAgICovXG4gIGVuYWJsZWQ/OiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhIGZ1bmN0aW9uIHdoaWNoIGFza3MgdGhlIHVzZXIgd2hldGhlciB0byByZW1lbWJlciB0aGVpciBjaG9pY2Ugb2YgYXBwLlxuICAgKiBJZiB0aGlzIGlzIGRlZmluZWQsIHRoZW4gdGhlIGRlZmF1bHQgZGlhbG9nIHByb21wdCB3aWxsIG5vdCBiZSBzaG93biwgYWxsb3dpbmcgZm9yIGEgY3VzdG9tIFVJIGZvciBhc2tpbmcgdGhlIHVzZXIuXG4gICAqIFRoaXMgd2lsbCBiZSBwYXNzZWQgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCBzaG91bGQgYmUgaW52b2tlZCB3aXRoIGEgc2luZ2xlIGJvb2xlYW4gYXJndW1lbnQgd2hpY2ggaW5kaWNhdGVzIHRoZSB1c2VyJ3MgZGVjaXNpb24gdG8gcmVtZW1iZXIgdGhlaXIgY2hvaWNlLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIHByb21wdEZuPzogKGNhbGxiYWNrOiAocmVtZW1iZXJDaG9pY2U6IGJvb2xlYW4pID0+IHZvaWQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIG9wdGlvbnMgcmVsYXRlZCB0byB0aGUgZGVmYXVsdCBkaWFsb2cgcHJvbXB0IHVzZWQgdG8gYXNrIHRoZSB1c2VyIHdoZXRoZXIgdG8gcmVtZW1iZXIgdGhlaXIgY2hvaWNlIG9mIGFwcC5cbiAgICovXG4gIHByb21wdD86IFByb21wdHNPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFNlbGVjdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogdGV4dCB0byBkaXNwbGF5IGluIHRoZSBuYXRpdmUgcGlja2VyIHdoaWNoIGVuYWJsZXMgdXNlciB0byBzZWxlY3Qgd2hpY2ggbmF2aWdhdGlvbiBhcHAgdG8gbGF1bmNoLlxuICAgKiBEZWZhdWx0cyB0byBcIlNlbGVjdCBhcHAgZm9yIG5hdmlnYXRpb25cIiBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgZGlhbG9nSGVhZGVyVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogdGV4dCB0byBkaXNwbGF5IGZvciB0aGUgY2FuY2VsIGJ1dHRvbiBpbiB0aGUgbmF0aXZlIHBpY2tlciB3aGljaCBlbmFibGVzIHVzZXIgdG8gc2VsZWN0IHdoaWNoIG5hdmlnYXRpb24gYXBwIHRvIGxhdW5jaC5cbiAgICogRGVmYXVsdHMgdG8gXCJDYW5jZWxcIiBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgY2FuY2VsQnV0dG9uVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTGlzdCBvZiBhcHBzLCBkZWZpbmVkIGFzIGBsYXVuY2huYXZpZ2F0b3IuQVBQYCBjb25zdGFudHMsIHdoaWNoIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIHBpY2tlciBpZiB0aGUgYXBwIGlzIGF2YWlsYWJsZS5cbiAgICogVGhpcyBjYW4gYmUgdXNlZCB0byByZXN0cmljdCB3aGljaCBhcHBzIGFyZSBkaXNwbGF5ZWQsIGV2ZW4gaWYgdGhleSBhcmUgaW5zdGFsbGVkLlxuICAgKiBCeSBkZWZhdWx0LCBhbGwgYXZhaWxhYmxlIGFwcHMgd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBsaXN0Pzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB1c2VyIHNlbGVjdHMgYW4gYXBwIGluIHRoZSBuYXRpdmUgcGlja2VyLlxuICAgKiBBIHNpbmdsZSBzdHJpbmcgYXJndW1lbnQgaXMgcGFzc2VkIHdoaWNoIGlzIHRoZSBhcHAgd2hhdCB3YXMgc2VsZWN0ZWQgZGVmaW5lZCBhcyBhIGBsYXVuY2huYXZpZ2F0b3IuQVBQYCBjb25zdGFudC5cbiAgICovXG4gIGNhbGxiYWNrPzogKGFwcDogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiAoQW5kcm9pZCBvbmx5KSBuYXRpdmUgcGlja2VyIHRoZW1lLiBTcGVjaWZ5IHVzaW5nIGBhY3Rpb25zaGVldC5BTkRST0lEX1RIRU1FU2AgY29uc3RhbnRzLlxuICAgKiBEZWZhdWx0IGBhY3Rpb25zaGVldC5BTkRST0lEX1RIRU1FUy5USEVNRV9IT0xPX0xJR0hUYFxuICAgKi9cbiAgYW5kcm9pZFRoZW1lPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBvcHRpb25zIHJlbGF0ZWQgdG8gd2hldGhlciB0byByZW1lbWJlciB1c2VyIGNob2ljZSBvZiBhcHAgZm9yIG5leHQgdGltZSwgaW5zdGVhZCBvZiBhc2tpbmcgYWdhaW4gZm9yIHVzZXIgY2hvaWNlLlxuICAgKi9cbiAgcmVtZW1iZXJDaG9pY2U/OiBSZW1lbWJlckNob2ljZU9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoTmF2aWdhdG9yT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSBuYXZpZ2F0aW9uIGFwcCBpcyBzdWNjZXNzZnVsbHkgbGF1bmNoZWQuXG4gICAqL1xuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQSBjYWxsYmFjayB0byBpbnZva2UgaWYgYW4gZXJyb3IgaXMgZW5jb3VudGVyZWQgd2hpbGUgbGF1bmNoaW5nIHRoZSBhcHAuXG4gICAqIEEgc2luZ2xlIHN0cmluZyBhcmd1bWVudCBjb250YWluaW5nIHRoZSBlcnJvciBtZXNzYWdlIHdpbGwgYmUgcGFzc2VkIGluLlxuICAgKi9cbiAgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBuYW1lIG9mIHRoZSBuYXZpZ2F0aW9uIGFwcCB0byB1c2UgZm9yIGRpcmVjdGlvbnMuXG4gICAqIFNwZWNpZnkgdXNpbmcgbGF1bmNobmF2aWdhdG9yLkFQUCBjb25zdGFudHMuXG4gICAqIGUuZy4gYGxhdW5jaG5hdmlnYXRvci5BUFAuR09PR0xFX01BUFNgLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBVc2VyIFNlbGVjdGlvbi5cbiAgICovXG4gIGFwcD86IHN0cmluZztcblxuICAvKipcbiAgICogbmlja25hbWUgdG8gZGlzcGxheSBpbiBhcHAgZm9yIGRlc3RpbmF0aW9uLiBlLmcuIFwiQm9iJ3MgSG91c2VcIi5cbiAgICovXG4gIGRlc3RpbmF0aW9uTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU3RhcnQgcG9pbnQgb2YgdGhlIG5hdmlnYXRpb24uXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBjdXJyZW50IGRldmljZSBsb2NhdGlvbiB3aWxsIGJlIHVzZWQuXG4gICAqIEVpdGhlcjpcbiAgICogIC0gYSB7c3RyaW5nfSBjb250YWluaW5nIHRoZSBhZGRyZXNzLiBlLmcuIFwiQnVja2luZ2hhbSBQYWxhY2UsIExvbmRvblwiXG4gICAqICAtIGEge3N0cmluZ30gY29udGFpbmluZyBhIGxhdGl0dWRlL2xvbmdpdHVkZSBjb29yZGluYXRlLiBlLmcuIFwiNTAuMS4gLTQuMFwiXG4gICAqICAtIGFuIHthcnJheX0sIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBsYXRpdHVkZSBhbmQgdGhlIHNlY29uZCBlbGVtZW50IGlzIGEgbG9uZ2l0dWRlLCBhcyBkZWNpbWFsIG51bWJlcnMuIGUuZy4gWzUwLjEsIC00LjBdXG4gICAqL1xuICBzdGFydD86IHN0cmluZyB8IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBuaWNrbmFtZSB0byBkaXNwbGF5IGluIGFwcCBmb3Igc3RhcnQgLiBlLmcuIFwiTXkgSG91c2VcIi5cbiAgICovXG4gIHN0YXJ0TmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogVHJhbnNwb3J0YXRpb24gbW9kZSBmb3IgbmF2aWdhdGlvbjogXCJkcml2aW5nXCIsIFwid2Fsa2luZ1wiIG9yIFwidHJhbnNpdFwiLiBEZWZhdWx0cyB0byBcImRyaXZpbmdcIiBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgdHJhbnNwb3J0TW9kZT86IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZGVidWcgbG9nIG91dHB1dCB3aWxsIGJlIGdlbmVyYXRlZCBieSB0aGUgcGx1Z2luLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIGVuYWJsZURlYnVnPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogYSBrZXkvdmFsdWUgbWFwIG9mIGV4dHJhIGFwcC1zcGVjaWZpYyBwYXJhbWV0ZXJzLiBGb3IgZXhhbXBsZSwgdG8gdGVsbCBHb29nbGUgTWFwcyBvbiBBbmRyb2lkIHRvIGRpc3BsYXkgU2F0ZWxsaXRlIHZpZXcgaW4gXCJtYXBzXCIgbGF1bmNoIG1vZGU6IGB7XCJ0XCI6IFwia1wifWBcbiAgICovXG4gIGV4dHJhcz86IGFueTtcblxuICAvKipcbiAgICogKEFuZHJvaWQgb25seSkgbW9kZSBpbiB3aGljaCB0byBvcGVuIEdvb2dsZSBNYXBzIGFwcC5cbiAgICogYGxhdW5jaG5hdmlnYXRvci5MQVVOQ0hfTU9ERS5NQVBTYCBvciBgbGF1bmNobmF2aWdhdG9yLkxBVU5DSF9NT0RFLlRVUk5fQllfVFVSTmBcbiAgICogRGVmYXVsdHMgdG8gYGxhdW5jaG5hdmlnYXRvci5MQVVOQ0hfTU9ERS5NQVBTYCBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgbGF1bmNoTW9kZUdvb2dsZU1hcHM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIChpT1Mgb25seSkgbWV0aG9kIHRvIHVzZSB0byBvcGVuIEFwcGxlIE1hcHMgYXBwLlxuICAgKiBgbGF1bmNobmF2aWdhdG9yLkxBVU5DSF9NT0RFLlVSSV9TQ0hFTUVgIG9yIGBsYXVuY2huYXZpZ2F0b3IuTEFVTkNIX01PREUuTUFQS0lUYFxuICAgKiBEZWZhdWx0cyB0byBgbGF1bmNobmF2aWdhdG9yLkxBVU5DSF9NT0RFLlVSSV9TQ0hFTUVgIGlmIG5vdCBzcGVjaWZpZWQuXG4gICAqL1xuICBsYXVuY2hNb2RlQXBwbGVNYXBzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAoV2luZG93cyBvbmx5KSBJZiBmYWxzZSwgdGhlIHBsdWdpbiB3aWxsIE5PVCBhdHRlbXB0IHRvIHVzZSB0aGUgZ2VvbG9jYXRpb24gcGx1Z2luIHRvIGRldGVybWluZSB0aGUgY3VycmVudCBkZXZpY2UgcG9zaXRpb24gd2hlbiB0aGUgc3RhcnQgbG9jYXRpb24gcGFyYW1ldGVyIGlzIG9taXR0ZWQuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBlbmFibGVHZW9sb2NhdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIChBbmRyb2lkIGFuZCBpT1Mgb25seSkgSWYgdHJ1ZSwgYW5kIGlucHV0IGxvY2F0aW9uIHR5cGUocykgZG9lc24ndCBtYXRjaCB0aG9zZSByZXF1aXJlZCBieSB0aGUgYXBwLCB1c2UgZ2VvY29kaW5nIHRvIG9idGFpbiB0aGUgYWRkcmVzcy9jb29yZHMgYXMgcmVxdWlyZWQuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBlbmFibGVHZW9jb2Rpbmc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBvcHRpb25zIHJlbGF0ZWQgdG8gdGhlIGRlZmF1bHQgbmF0aXZlIGFjdGlvbnNoZWV0IHBpY2tlciB3aGljaCBlbmFibGVzIHVzZXIgdG8gc2VsZWN0IHdoaWNoIG5hdmlnYXRpb24gYXBwIHRvIGxhdW5jaCBpZiBgYXBwYCBpcyBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgYXBwU2VsZWN0aW9uPzogQXBwU2VsZWN0aW9uT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ2hvaWNlIHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGEgdXNlciBjaG9pY2UgZXhpc3RzIGZvciBhIHByZWZlcnJlZCBuYXZpZ2F0b3IgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBwYXNzIHJlc3VsdCB0bzogd2lsbCByZWNlaXZlIGEgYm9vbGVhbiBhcmd1bWVudC5cbiAgICovXG4gIGV4aXN0czogKGNhbGxiYWNrOiAoZXhpc3RzOiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgdXNlciBjaG9pY2Ugb2YgcHJlZmVycmVkIG5hdmlnYXRvciBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIHBhc3MgcmVzdWx0IHRvOiB3aWxsIHJlY2VpdmUgYSBzdHJpbmcgYXJndW1lbnQgaW5kaWNhdGluZyB0aGUgYXBwLCB3aGljaCBpcyBhIGNvbnN0YW50IGluIGBsYXVuY2huYXZpZ2F0b3IuQVBQYC5cbiAgICovXG4gIGdldDogKGNhbGxiYWNrOiAoYXBwOiBzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdXNlciBjaG9pY2Ugb2YgcHJlZmVycmVkIG5hdmlnYXRvciBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBhcHAgLSBhcHAgdG8gc2V0IGFzIHByZWZlcnJlZCBjaG9pY2UgYXMgYSBjb25zdGFudCBpbiBgbGF1bmNobmF2aWdhdG9yLkFQUGAuXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGNhbGwgb25jZSBvcGVyYXRpb24gaXMgY29tcGxldGUuXG4gICAqL1xuICBzZXQ6IChhcHA6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgY3VycmVudCB1c2VyIGNob2ljZSBvZiBwcmVmZXJyZWQgbmF2aWdhdG9yIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gY2FsbCBvbmNlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIGNsZWFyOiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclByb21wdGVkIHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHVzZXIgaGFzIGFscmVhZHkgYmVlbiBwcm9tcHRlZCB3aGV0aGVyIHRvIHJlbWVtYmVyIHRoZWlyIGNob2ljZSBhIHByZWZlcnJlZCBuYXZpZ2F0b3IgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBwYXNzIHJlc3VsdCB0bzogd2lsbCByZWNlaXZlIGEgYm9vbGVhbiBhcmd1bWVudC5cbiAgICovXG4gIGdldDogKGNhbGxiYWNrOiAoZXhpc3RzOiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXRzIGZsYWcgaW5kaWNhdGluZyB1c2VyIGhhcyBhbHJlYWR5IGJlZW4gcHJvbXB0ZWQgd2hldGhlciB0byByZW1lbWJlciB0aGVpciBjaG9pY2UgYSBwcmVmZXJyZWQgbmF2aWdhdG9yIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gY2FsbCBvbmNlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZS5cbiAgICovXG4gIHNldDogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgZmxhZyB3aGljaCBpbmRpY2F0ZXMgaWYgdXNlciBoYXMgYWxyZWFkeSBiZWVuIHByb21wdGVkIHdoZXRoZXIgdG8gcmVtZW1iZXIgdGhlaXIgY2hvaWNlIGEgcHJlZmVycmVkIG5hdmlnYXRvciBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGNhbGwgb25jZSBvcGVyYXRpb24gaXMgY29tcGxldGUuXG4gICAqL1xuICBjbGVhcjogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFNlbGVjdGlvbiB7XG4gIHVzZXJDaG9pY2U6IFVzZXJDaG9pY2U7XG4gIHVzZXJQcm9tcHRlZDogVXNlclByb21wdGVkO1xufVxuXG4vKipcbiAqIEBuYW1lIExhdW5jaCBOYXZpZ2F0b3JcbiAqIEBkZXNjcmlwdGlvblxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IHVrLmNvLndvcmtpbmdlZGdlLnBob25lZ2FwLnBsdWdpbi5sYXVuY2huYXZpZ2F0b3IuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtMYXVuY2hOYXZpZ2F0b3IgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9kcGE5OWMvcGhvbmVnYXAtbGF1bmNoLW5hdmlnYXRvcikuXG4gKiBAdXNhZ2VcbiAqIFBsZWFzZSByZWZlciB0byB0aGUgcGx1Z2luJ3MgcmVwbyBmb3IgZGV0YWlsZWQgdXNhZ2UuIFRoaXMgZG9jcyBwYWdlIG9ubHkgZXhwbGFpbnMgdGhlIE5hdGl2ZSB3cmFwcGVyLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExhdW5jaE5hdmlnYXRvciwgTGF1bmNoTmF2aWdhdG9yT3B0aW9ucyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9sYXVuY2gtbmF2aWdhdG9yL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsYXVuY2hOYXZpZ2F0b3I6IExhdW5jaE5hdmlnYXRvcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IG9wdGlvbnM6IExhdW5jaE5hdmlnYXRvck9wdGlvbnMgPSB7XG4gKiAgIHN0YXJ0OiAnTG9uZG9uLCBPTicsXG4gKiAgIGFwcDogTGF1bmNoTmF2aWdhdG9yLkFQUFMuVUJFUlxuICogfVxuICpcbiAqIHRoaXMubGF1bmNoTmF2aWdhdG9yLm5hdmlnYXRlKCdUb3JvbnRvLCBPTicsIG9wdGlvbnMpXG4gKiAgIC50aGVuKFxuICogICAgIHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coJ0xhdW5jaGVkIG5hdmlnYXRvcicpLFxuICogICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciBsYXVuY2hpbmcgbmF2aWdhdG9yJywgZXJyb3IpXG4gKiAgICk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBMYXVuY2hOYXZpZ2F0b3JPcHRpb25zXG4gKiBQcm9tcHRzT3B0aW9uc1xuICogUmVtZW1iZXJDaG9pY2VPcHRpb25zXG4gKiBBcHBTZWxlY3Rpb25PcHRpb25zXG4gKiBVc2VyQ2hvaWNlXG4gKiBVc2VyUHJvbXB0ZWRcbiAqIEFwcFNlbGVjdGlvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xhdW5jaE5hdmlnYXRvcicsXG4gIHBsdWdpbjogJ3VrLmNvLndvcmtpbmdlZGdlLnBob25lZ2FwLnBsdWdpbi5sYXVuY2huYXZpZ2F0b3InLFxuICBwbHVnaW5SZWY6ICdsYXVuY2huYXZpZ2F0b3InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9waG9uZWdhcC1sYXVuY2gtbmF2aWdhdG9yJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExhdW5jaE5hdmlnYXRvciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQVBQOiBhbnkgPSB7XG4gICAgVVNFUl9TRUxFQ1Q6ICd1c2VyX3NlbGVjdCcsXG4gICAgQVBQTEVfTUFQUzogJ2FwcGxlX21hcHMnLFxuICAgIEdPT0dMRV9NQVBTOiAnZ29vZ2xlX21hcHMnLFxuICAgIFdBWkU6ICd3YXplJyxcbiAgICBDSVRZTUFQUEVSOiAnY2l0eW1hcHBlcicsXG4gICAgTkFWSUdPTjogJ25hdmlnb24nLFxuICAgIFRSQU5TSVRfQVBQOiAndHJhbnNpdF9hcHAnLFxuICAgIFlBTkRFWDogJ3lhbmRleCcsXG4gICAgVUJFUjogJ3ViZXInLFxuICAgIFRPTVRPTTogJ3RvbXRvbScsXG4gICAgQklOR19NQVBTOiAnYmluZ19tYXBzJyxcbiAgICBTWUdJQzogJ3N5Z2ljJyxcbiAgICBIRVJFX01BUFM6ICdoZXJlX21hcHMnLFxuICAgIE1PT1ZJVDogJ21vb3ZpdCcsXG4gIH07XG5cbiAgVFJBTlNQT1JUX01PREU6IGFueSA9IHtcbiAgICBEUklWSU5HOiAnZHJpdmluZycsXG4gICAgV0FMS0lORzogJ3dhbGtpbmcnLFxuICAgIEJJQ1lDTElORzogJ2JpY3ljbGluZycsXG4gICAgVFJBTlNJVDogJ3RyYW5zaXQnLFxuICB9O1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBhcHBTZWxlY3Rpb246IEFwcFNlbGVjdGlvbjtcblxuICAvKipcbiAgICogTGF1bmNoZXMgbmF2aWdhdG9yIGFwcFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb24ge3N0cmluZ3xudW1iZXJbXX0gTG9jYXRpb24gbmFtZSBvciBjb29yZGluYXRlcyAoYXMgc3RyaW5nIG9yIGFycmF5KVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TGF1bmNoTmF2aWdhdG9yT3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgbmF2aWdhdGUoZGVzdGluYXRpb246IHN0cmluZyB8IG51bWJlcltdLCBvcHRpb25zPzogTGF1bmNoTmF2aWdhdG9yT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIGFwcCBpcyBpbnN0YWxsZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGUgY3VycmVudCBkZXZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSBhcHAge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNBcHBBdmFpbGFibGUoYXBwOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBpbmRpY2F0aW5nIHdoaWNoIGFwcHMgYXJlIGluc3RhbGxlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZSBjdXJyZW50IGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhdmFpbGFibGVBcHBzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlzcGxheSBuYW1lIG9mIHRoZSBzcGVjaWZpZWQgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0gYXBwIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXBwRGlzcGxheU5hbWUoYXBwOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGxpc3Qgb2Ygc3VwcG9ydGVkIGFwcHMgb24gYSBnaXZlbiBwbGF0Zm9ybS5cbiAgICpcbiAgICogQHBhcmFtIHBsYXRmb3JtIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRBcHBzRm9yUGxhdGZvcm0ocGxhdGZvcm06IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIGFuIGFwcCBvbiBhIGdpdmVuIHBsYXRmb3JtIHN1cHBvcnRzIHNwZWNpZmljYXRpb24gb2YgdHJhbnNwb3J0IG1vZGUuXG4gICAqXG4gICAqIEBwYXJhbSBhcHAge3N0cmluZ30gc3BlY2lmaWVkIGFzIGEgc3RyaW5nLCB5b3UgY2FuIHVzZSBvbmUgb2YgdGhlIGNvbnN0YW50cywgZS5nIGBMYXVuY2hOYXZpZ2F0b3IuQVBQLkdPT0dMRV9NQVBTYFxuICAgKiBAcGFyYW0gcGxhdGZvcm0ge3N0cmluZ31cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3VwcG9ydHNUcmFuc3BvcnRNb2RlKGFwcDogc3RyaW5nLCBwbGF0Zm9ybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgdHJhbnNwb3J0IG1vZGVzIHN1cHBvcnRlZCBieSBhbiBhcHAgb24gYSBnaXZlbiBwbGF0Zm9ybS5cbiAgICpcbiAgICogQHBhcmFtIGFwcCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGxhdGZvcm0ge3N0cmluZ31cbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFRyYW5zcG9ydE1vZGVzKGFwcDogc3RyaW5nLCBwbGF0Zm9ybTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gYXBwIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwbGF0Zm9ybSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdXBwb3J0c0Rlc3ROYW1lKGFwcDogc3RyaW5nLCBwbGF0Zm9ybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiBhbiBhcHAgb24gYSBnaXZlbiBwbGF0Zm9ybSBzdXBwb3J0cyBzcGVjaWZpY2F0aW9uIG9mIHN0YXJ0IGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gYXBwIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwbGF0Zm9ybSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdXBwb3J0c1N0YXJ0KGFwcDogc3RyaW5nLCBwbGF0Zm9ybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBhcHAge3N0cmluZ31cbiAgICogQHBhcmFtIHBsYXRmb3JtIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN1cHBvcnRzU3RhcnROYW1lKGFwcDogc3RyaW5nLCBwbGF0Zm9ybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiBhbiBhcHAgb24gYSBnaXZlbiBwbGF0Zm9ybSBzdXBwb3J0cyBzcGVjaWZpY2F0aW9uIG9mIGxhdW5jaCBtb2RlLlxuICAgKiBOb3RlIHRoYXQgY3VycmVudGx5IG9ubHkgR29vZ2xlIE1hcHMgb24gQW5kcm9pZCBkb2VzLlxuICAgKlxuICAgKiBAcGFyYW0gYXBwIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwbGF0Zm9ybSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdXBwb3J0c0xhdW5jaE1vZGUoYXBwOiBzdHJpbmcsIHBsYXRmb3JtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uIHtzdHJpbmcgfCBudW1iZXJbXX1cbiAgICogQHBhcmFtIG9wdGlvbnMge0xhdW5jaE5hdmlnYXRvck9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdXNlclNlbGVjdChkZXN0aW5hdGlvbjogc3RyaW5nIHwgbnVtYmVyW10sIG9wdGlvbnM6IExhdW5jaE5hdmlnYXRvck9wdGlvbnMpOiB2b2lkIHt9XG59XG4iXX0=