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
var MobileAccessibilityOriginal = /** @class */ (function (_super) {
    __extends(MobileAccessibilityOriginal, _super);
    function MobileAccessibilityOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileAccessibilityOriginal.prototype.functionName = function (arg1, arg2) { return cordova(this, "functionName", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isScreenReaderRunning = function () { return cordova(this, "isScreenReaderRunning", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isVoiceOverRunning = function () { return cordova(this, "isVoiceOverRunning", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isTalkBackRunning = function () { return cordova(this, "isTalkBackRunning", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isChromeVoxActive = function () { return cordova(this, "isChromeVoxActive", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isBoldTextEnabled = function () { return cordova(this, "isBoldTextEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isClosedCaptioningEnabled = function () { return cordova(this, "isClosedCaptioningEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isDarkerSystemColorsEnabled = function () { return cordova(this, "isDarkerSystemColorsEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isGrayscaleEnabled = function () { return cordova(this, "isGrayscaleEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isGuidedAccessEnabled = function () { return cordova(this, "isGuidedAccessEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isInvertColorsEnabled = function () { return cordova(this, "isInvertColorsEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isMonoAudioEnabled = function () { return cordova(this, "isMonoAudioEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isReduceMotionEnabled = function () { return cordova(this, "isReduceMotionEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isReduceTransparencyEnabled = function () { return cordova(this, "isReduceTransparencyEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isSpeakScreenEnabled = function () { return cordova(this, "isSpeakScreenEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isSpeakSelectionEnabled = function () { return cordova(this, "isSpeakSelectionEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isSwitchControlRunning = function () { return cordova(this, "isSwitchControlRunning", {}, arguments); };
    MobileAccessibilityOriginal.prototype.isTouchExplorationEnabled = function () { return cordova(this, "isTouchExplorationEnabled", {}, arguments); };
    MobileAccessibilityOriginal.prototype.getTextZoom = function () { return cordova(this, "getTextZoom", {}, arguments); };
    MobileAccessibilityOriginal.prototype.setTextZoom = function (textZoom) { return cordova(this, "setTextZoom", {}, arguments); };
    MobileAccessibilityOriginal.prototype.updateTextZoom = function () { return cordova(this, "updateTextZoom", {}, arguments); };
    MobileAccessibilityOriginal.prototype.usePreferredTextZoom = function (value) { return cordova(this, "usePreferredTextZoom", {}, arguments); };
    MobileAccessibilityOriginal.prototype.postNotification = function (mobileAccessibilityNotification, value) { return cordova(this, "postNotification", {}, arguments); };
    MobileAccessibilityOriginal.prototype.speak = function (value, queueMode, properties) { return cordova(this, "speak", {}, arguments); };
    MobileAccessibilityOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    MobileAccessibilityOriginal.pluginName = "MobileAccessibility";
    MobileAccessibilityOriginal.plugin = "phonegap-plugin-mobile-accessibility";
    MobileAccessibilityOriginal.pluginRef = "window.MobileAccessibility";
    MobileAccessibilityOriginal.repo = "https://github.com/phonegap/phonegap-mobile-accessibility";
    MobileAccessibilityOriginal.install = "";
    MobileAccessibilityOriginal.installVariables = [];
    MobileAccessibilityOriginal.platforms = ["Android", "iOS", "Amazon Fire OS"];
    return MobileAccessibilityOriginal;
}(AwesomeCordovaNativePlugin));
var MobileAccessibility = new MobileAccessibilityOriginal();
export { MobileAccessibility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbW9iaWxlLWFjY2Vzc2liaWxpdHkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUErQm5ELHVDQUEwQjs7OztJQVFqRSwwQ0FBWSxhQUFDLElBQVksRUFBRSxJQUFZO0lBOEJ2QyxtREFBcUI7SUFRckIsZ0RBQWtCO0lBUWxCLCtDQUFpQjtJQVNqQiwrQ0FBaUI7SUFRakIsK0NBQWlCO0lBUWpCLHVEQUF5QjtJQVF6Qix5REFBMkI7SUFRM0IsZ0RBQWtCO0lBUWxCLG1EQUFxQjtJQVFyQixtREFBcUI7SUFRckIsZ0RBQWtCO0lBUWxCLG1EQUFxQjtJQVFyQix5REFBMkI7SUFRM0Isa0RBQW9CO0lBUXBCLHFEQUF1QjtJQVF2QixvREFBc0I7SUFRdEIsdURBQXlCO0lBUXpCLHlDQUFXO0lBT1gseUNBQVcsYUFBQyxRQUFnQjtJQU81Qiw0Q0FBYztJQVFkLGtEQUFvQixhQUFDLEtBQWM7SUFRbkMsOENBQWdCLGFBQUMsK0JBQW9DLEVBQUUsS0FBYTtJQVVwRSxtQ0FBSyxhQUFDLEtBQWEsRUFBRSxTQUFrQixFQUFFLFVBQWdCO0lBT3pELGtDQUFJOzs7Ozs7Ozs4QkE5UE47RUFnQ3lDLDBCQUEwQjtTQUF0RCxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIE1vYmlsZSBBY2Nlc3NpYmlsaXR5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGV4cG9zZXMgaW5mb3JtYXRpb24gb24gdGhlIHN0YXR1cyBvZiB2YXJpb3VzIGFjY2Vzc2liaWxpdHkgZmVhdHVyZXMgb2YgbW9iaWxlIG9wZXJhdGluZyBzeXN0ZW1zLCBpbmNsdWRpbmcsIGZvciBleGFtcGxlLCB3aGV0aGVyIGEgc2NyZWVuIHJlYWRlciBpcyBydW5uaW5nLCBpbnZlcnQgY29sb3JzIGlzIGVuYWJsZWQsIGFuZCB0aGUgcHJlZmVycmVkIHNjYWxpbmcgZm9yIHRleHQuXG4gKiBJdCBhbHNvIGFsbG93cyBhbiBhcHBsaWNhdGlvbiB0byBzZW5kIGEgc3RyaW5nIHRvIGJlIHNwb2tlbiBieSB0aGUgc2NyZWVuIHJlYWRlciwgb3IgYSBjb21tYW5kIHRvIHN0b3AgdGhlIHNjcmVlbiByZWFkZXIgZnJvbSBzcGVha2luZy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1vYmlsZUFjY2Vzc2liaWxpdHkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbW9iaWxlLWFjY2Vzc2liaWxpdHkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtb2JpbGVBY2Nlc3NpYmlsaXR5OiBNb2JpbGVBY2Nlc3NpYmlsaXR5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5tb2JpbGVBY2Nlc3NpYmlsaXR5LmlzU2NyZWVuUmVhZGVyUnVubmluZ0NhbGxiYWNrKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNb2JpbGVBY2Nlc3NpYmlsaXR5JyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtcGx1Z2luLW1vYmlsZS1hY2Nlc3NpYmlsaXR5JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93Lk1vYmlsZUFjY2Vzc2liaWxpdHknLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLW1vYmlsZS1hY2Nlc3NpYmlsaXR5JyxcbiAgaW5zdGFsbDogJycsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQW1hem9uIEZpcmUgT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9iaWxlQWNjZXNzaWJpbGl0eSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzEge3N0cmluZ30gU29tZSBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmdW5jdGlvbk5hbWUoYXJnMTogc3RyaW5nLCBhcmcyOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBNb2JpbGVBY2Nlc3NpYmlsaXR5Tm90aWZpY2F0aW9uczoge1xuICAgIEFOTk9VTkNFTUVOVDogJ0FOTk9VTkNFTUVOVCc7XG4gICAgQk9MRF9URVhUX1NUQVRVU19DSEFOR0VEOiAnQk9MRF9URVhUX1NUQVRVU19DSEFOR0VEJztcbiAgICBDTE9TRURfQ0FQVElPTklOR19TVEFUVVNfQ0hBTkdFRDogJ0NMT1NFRF9DQVBUSU9OSU5HX1NUQVRVU19DSEFOR0VEJztcbiAgICBEQVJLRVJfU1lTVEVNX0NPTE9SU19TVEFUVVNfQ0hBTkdFRDogJ0RBUktFUl9TWVNURU1fQ09MT1JTX1NUQVRVU19DSEFOR0VEJztcbiAgICBHUkFZU0NBTEVfU1RBVFVTX0NIQU5HRUQ6ICdHUkFZU0NBTEVfU1RBVFVTX0NIQU5HRUQnO1xuICAgIEdVSURFRF9BQ0NFU1NfU1RBVFVTX0NIQU5HRUQ6ICdHVUlERURfQUNDRVNTX1NUQVRVU19DSEFOR0VEJztcbiAgICBJTlZFUlRfQ09MT1JTX1NUQVRVU19DSEFOR0VEOiAnSU5WRVJUX0NPTE9SU19TVEFUVVNfQ0hBTkdFRCc7XG4gICAgTEFZT1VUX0NIQU5HRUQ6ICdMQVlPVVRfQ0hBTkdFRCc7XG4gICAgTU9OT19BVURJT19TVEFUVVNfQ0hBTkdFRDogJ01PTk9fQVVESU9fU1RBVFVTX0NIQU5HRUQnO1xuICAgIFBBR0VfU0NST0xMRUQ6ICdQQUdFX1NDUk9MTEVEJztcbiAgICBSRURVQ0VfTU9USU9OX1NUQVRVU19DSEFOR0VEOiAnUkVEVUNFX01PVElPTl9TVEFUVVNfQ0hBTkdFRCc7XG4gICAgUkVEVUNFX1RSQU5TUEFSRU5DWV9TVEFUVVNfQ0hBTkdFRDogJ1JFRFVDRV9UUkFOU1BBUkVOQ1lfU1RBVFVTX0NIQU5HRUQnO1xuICAgIFNDUkVFTl9DSEFOR0VEOiAnU0NSRUVOX0NIQU5HRUQnO1xuICAgIFNDUkVFTl9SRUFERVJfU1RBVFVTX0NIQU5HRUQ6ICdTQ1JFRU5fUkVBREVSX1NUQVRVU19DSEFOR0VEJztcbiAgICBTUEVBS19TQ1JFRU5fU1RBVFVTX0NIQU5HRUQ6ICdTUEVBS19TQ1JFRU5fU1RBVFVTX0NIQU5HRUQnO1xuICAgIFNQRUFLX1NFTEVDVElPTl9TVEFUVVNfQ0hBTkdFRDogJ1NQRUFLX1NFTEVDVElPTl9TVEFUVVNfQ0hBTkdFRCc7XG4gICAgU1dJVENIX0NPTlRST0xfU1RBVFVTX0NIQU5HRUQ6ICdTV0lUQ0hfQ09OVFJPTF9TVEFUVVNfQ0hBTkdFRCc7XG4gICAgVE9VQ0hfRVhQTE9SQVRJT05fU1RBVFVTX0NIQU5HRUQ6ICdUT1VDSF9FWFBMT1JBVElPTl9TVEFUVVNfQ0hBTkdFRCc7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGFzeW5jaHJvbm91cyBjYWxsIHRvIG5hdGl2ZSBNb2JpbGVBY2Nlc3NpYmlsaXR5IHRvIGRldGVybWluZSBpZiBhIHNjcmVlbiByZWFkZXIgaXMgcnVubmluZy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59ICBBIHJlc3VsdCBtZXRob2QgdG8gcmVjZWl2ZSB0aGUgYm9vbGVhbiByZXN1bHQgYXN5bmNocm9ub3VzbHkgZnJvbSB0aGUgbmF0aXZlIE1vYmlsZUFjY2Vzc2liaWxpdHkgcGx1Z2luLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1NjcmVlblJlYWRlclJ1bm5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBBbiBpT1Mtc3BlY2lmaWMgcHJveHkgZm9yIHRoZSBNb2JpbGVBY2Nlc3NpYmlsaXR5LmlzU2NyZWVuUmVhZGVyUnVubmluZyBtZXRob2RcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IEEgcmVzdWx0IG1ldGhvZCB0byByZWNlaXZlIHRoZSBib29sZWFuIHJlc3VsdCBhc3luY2hyb25vdXNseSBmcm9tIHRoZSBuYXRpdmUgTW9iaWxlQWNjZXNzaWJpbGl0eSBwbHVnaW4uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzVm9pY2VPdmVyUnVubmluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIEFuIEFuZHJvaWQvQW1hem9uIEZpcmUgT1Mtc3BlY2lmaWMgcHJveHkgZm9yIHRoZSBNb2JpbGVBY2Nlc3NpYmlsaXR5LmlzU2NyZWVuUmVhZGVyUnVubmluZyBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSAgQSByZXN1bHQgbWV0aG9kIHRvIHJlY2VpdmUgdGhlIGJvb2xlYW4gcmVzdWx0IGFzeW5jaHJvbm91c2x5IGZyb20gdGhlIG5hdGl2ZSBNb2JpbGVBY2Nlc3NpYmlsaXR5IHBsdWdpbi5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNUYWxrQmFja1J1bm5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBPbiBBbmRyb2lkLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUgaWYgQ2hyb21lVm94IGlzIGFjdGl2ZSBhbmQgcHJvcGVybHkgaW5pdGlhbGl6ZWQgd2l0aCBhY2Nlc3MgdG8gdGhlIHRleHQgdG8gc3BlZWNoIEFQSSBpbiB0aGUgV2ViVmlldy5cbiAgICogSWYgVGFsa0JhY2sgaXMgcnVubmluZyBidXQgQ2hyb21lVm94IGlzIG5vdCBhY3RpdmUsIHRoaXMgbWV0aG9kIGlzIHVzZWZ1bCB0byBhbGVydCB0aGUgdXNlciBvZiBhIHBvdGVudGlhbCBwcm9ibGVtLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQ2hyb21lVm94QWN0aXZlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0JvbGRUZXh0RW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNDbG9zZWRDYXB0aW9uaW5nRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNEYXJrZXJTeXN0ZW1Db2xvcnNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0dyYXlzY2FsZUVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzR3VpZGVkQWNjZXNzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNJbnZlcnRDb2xvcnNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc01vbm9BdWRpb0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzUmVkdWNlTW90aW9uRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNSZWR1Y2VUcmFuc3BhcmVuY3lFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc1NwZWFrU2NyZWVuRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNTcGVha1NlbGVjdGlvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzU3dpdGNoQ29udHJvbFJ1bm5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzVG91Y2hFeHBsb3JhdGlvbkVuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgdGhlIHJlc3VsdFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUZXh0Wm9vbSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHRleHRab29tIHtudW1iZXJ9IEEgcGVyY2VudGFnZSB2YWx1ZSBieSB3aGljaCB0ZXh0IGluIHRoZSBXZWJWaWV3IHNob3VsZCBiZSBzY2FsZWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFRleHRab29tKHRleHRab29tOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVwZGF0ZVRleHRab29tKCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQSBCb29sZWFuIHZhbHVlIHdoaWNoIHNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSB0aGUgcHJlZmVycmVkIHRleHQgem9vbSBvZiBhIGRlZmF1bHQgcGVyY2VudCB2YWx1ZSBvZiAxMDAuXG4gICAqIEBwYXJhbSB2YWx1ZSB7Ym9vbGVhbn0gUmV0dXJucyB0aGUgcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVzZVByZWZlcnJlZFRleHRab29tKHZhbHVlOiBib29sZWFuKTogdm9pZCB7fVxuICAvKipcbiAgICogUG9zdHMgYSBub3RpZmljYXRpb24gd2l0aCBhIHN0cmluZyBmb3IgdGhlIHNjcmVlbiByZWFkZXIgdG8gYW5ub3VuY2UgaWYgaXQgaXMgcnVubmluZy5cbiAgICogQHBhcmFtIG1vYmlsZUFjY2Vzc2liaWxpdHlOb3RpZmljYXRpb24ge2FueX1cbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9IEEgc3RyaW5nIHRvIGJlIGFubm91bmNlZCBieSBhIHNjcmVlbiByZWFkZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIHRoZSByZXN1bHRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcG9zdE5vdGlmaWNhdGlvbihtb2JpbGVBY2Nlc3NpYmlsaXR5Tm90aWZpY2F0aW9uOiBhbnksIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFNwZWFrcyBhIGdpdmVuIHN0cmluZyB0aHJvdWdoIHRoZSBzY3JlZW5yZWFkZXIuIE9uIEFuZHJvaWQsIGlmIENocm9tZVZveCBpcyBhY3RpdmUsIGl0IHdpbGwgdXNlIHRoZSBzcGVjaWZpZWQgcXVldWVNb2RlIGFuZCBwcm9wZXJ0aWVzLlxuICAgKiBAcGFyYW0gdmFsdWUge3N0cmluZ31cbiAgICogQHBhcmFtIHF1ZXVlTW9kZSB7bXVtYmVyfVxuICAgKiBAcGFyYW0gcHJvcGVydGllcyB7YW55fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzcGVhayh2YWx1ZTogc3RyaW5nLCBxdWV1ZU1vZGU/OiBudW1iZXIsIHByb3BlcnRpZXM/OiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFN0b3BzIHNwZWVjaC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcCgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==