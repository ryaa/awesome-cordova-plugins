import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var AppCenterCrashes = /** @class */ (function (_super) {
    __extends(AppCenterCrashes, _super);
    function AppCenterCrashes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterCrashes.prototype.generateTestCrash = function () { return cordova(this, "generateTestCrash", {}, arguments); };
    AppCenterCrashes.prototype.hasCrashedInLastSession = function () { return cordova(this, "hasCrashedInLastSession", {}, arguments); };
    AppCenterCrashes.prototype.lastSessionCrashReport = function () { return cordova(this, "lastSessionCrashReport", {}, arguments); };
    AppCenterCrashes.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterCrashes.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterCrashes.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppCenterCrashes, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AppCenterCrashes.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppCenterCrashes });
    AppCenterCrashes.pluginName = "AppCenterCrashes";
    AppCenterCrashes.plugin = "cordova-plugin-appcenter-crashes";
    AppCenterCrashes.pluginRef = "AppCenter.Crashes";
    AppCenterCrashes.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes";
    AppCenterCrashes.platforms = ["Android", "iOS"];
    AppCenterCrashes = __decorate([], AppCenterCrashes);
    return AppCenterCrashes;
}(AwesomeCordovaNativePlugin));
export { AppCenterCrashes };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppCenterCrashes, decorators: [{
            type: Injectable
        }], propDecorators: { generateTestCrash: [], hasCrashedInLastSession: [], lastSessionCrashReport: [], isEnabled: [], setEnabled: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1jcmFzaGVzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFrRXRELG9DQUEwQjs7OztJQVE5RCw0Q0FBaUI7SUFRakIsa0RBQXVCO0lBVXZCLGlEQUFzQjtJQVV0QixvQ0FBUztJQVdULHFDQUFVLGFBQUMsWUFBcUI7a0hBL0NyQixnQkFBZ0I7c0hBQWhCLGdCQUFnQjs7Ozs7O0lBQWhCLGdCQUFnQixrQkFBaEIsZ0JBQWdCOzJCQW5FN0I7RUFtRXNDLDBCQUEwQjtTQUFuRCxnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVTs4QkFTVCxpQkFBaUIsTUFRakIsdUJBQXVCLE1BVXZCLHNCQUFzQixNQVV0QixTQUFTLE1BV1QsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwQ2VudGVyQ3Jhc2hSZXBvcnQge1xuICBpZDogc3RyaW5nO1xuICBkZXZpY2U6IEFwcENlbnRlckNyYXNoUmVwb3J0RGV2aWNlO1xuICBhcHBTdGFydFRpbWU6IG51bWJlcjtcbiAgYXBwRXJyb3JUaW1lOiBudW1iZXI7XG4gIHNpZ25hbDogc3RyaW5nO1xuICBhcHBQcm9jZXNzSWRlbnRpZmllcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcENlbnRlckNyYXNoUmVwb3J0RGV2aWNlIHtcbiAgb2VtX25hbWU6IHN0cmluZztcbiAgb3NfbmFtZTogc3RyaW5nO1xuICBhcHBfdmVyc2lvbjogc3RyaW5nO1xuICB0aW1lX3pvbmVfb2Zmc2V0OiBudW1iZXI7XG4gIGNhcnJpZXJfbmFtZTogc3RyaW5nO1xuICBzY3JlZW5fc2l6ZTogc3RyaW5nO1xuICBsb2NhbGU6IHN0cmluZztcbiAgc2RrX3ZlcnNpb246IHN0cmluZztcbiAgY2Fycmllcl9jb3VudHJ5OiBzdHJpbmc7XG4gIG9zX2J1aWxkOiBzdHJpbmc7XG4gIGFwcF9uYW1lc3BhY2U6IHN0cmluZztcbiAgb3NfdmVyc2lvbjogc3RyaW5nO1xuICBzZGtfbmFtZTogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBhcHBfYnVpbGQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBBcHAgQ2VudGVyIENyYXNoZXNcbiAqIEBkZXNjcmlwdGlvblxuICogQXBwIENlbnRlciBBbmFseXRpY3MgaGVscHMgeW91IHVuZGVyc3RhbmQgdXNlciBiZWhhdmlvciBhbmQgY3VzdG9tZXIgZW5nYWdlbWVudCB0byBpbXByb3ZlIHlvdXIgYXBwLlxuICogVGhlIFNESyBhdXRvbWF0aWNhbGx5IGNhcHR1cmVzIHNlc3Npb24gY291bnQgYW5kIGRldmljZSBwcm9wZXJ0aWVzIGxpa2UgbW9kZWwsIE9TIHZlcnNpb24sIGV0Yy5cbiAqIFlvdSBjYW4gZGVmaW5lIHlvdXIgb3duIGN1c3RvbSBldmVudHMgdG8gbWVhc3VyZSB0aGluZ3MgdGhhdCBtYXR0ZXIgdG8geW91LlxuICogQWxsIHRoZSBpbmZvcm1hdGlvbiBjYXB0dXJlZCBpcyBhdmFpbGFibGUgaW4gdGhlIEFwcCBDZW50ZXIgcG9ydGFsIGZvciB5b3UgdG8gYW5hbHl6ZSB0aGUgZGF0YS5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvY3Jhc2hlcy9jb3Jkb3ZhXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcENlbnRlckNyYXNoZXMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLWNlbnRlci1jcmFzaGVzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgQXBwQ2VudGVyQ3Jhc2hlczogQXBwQ2VudGVyQ3Jhc2hlcykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5BcHBDZW50ZXJDcmFzaGVzLnNldEVuYWJsZWQodHJ1ZSkudGhlbigoKSA9PiB7XG4gKiAgICB0aGlzLkFwcENlbnRlckNyYXNoZXMubGFzdFNlc3Npb25DcmFzaFJlcG9ydCgpLnRoZW4ocmVwb3J0ID0+IHtcbiAqICAgICAgICBjb25zb2xlLmxvZygnQ3Jhc2ggcmVwb3J0JywgcmVwb3J0KTtcbiAqICAgIH0pO1xuICogfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQXBwQ2VudGVyQ3Jhc2hSZXBvcnRcbiAqIEFwcENlbnRlckNyYXNoUmVwb3J0RGV2aWNlXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwQ2VudGVyQ3Jhc2hlcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1jcmFzaGVzJyxcbiAgcGx1Z2luUmVmOiAnQXBwQ2VudGVyLkNyYXNoZXMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWNyYXNoZXMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQ2VudGVyQ3Jhc2hlcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEFwcCBDZW50ZXIgQ3Jhc2hlcyBwcm92aWRlcyB5b3Ugd2l0aCBhbiBBUEkgdG8gZ2VuZXJhdGUgYSB0ZXN0IGNyYXNoIGZvciBlYXN5IHRlc3Rpbmcgb2YgdGhlIFNESy5cbiAgICogVGhpcyBBUEkgY2FuIG9ubHkgYmUgdXNlZCBpbiB0ZXN0L2JldGEgYXBwcyBhbmQgd29uJ3QgZG8gYW55dGhpbmcgaW4gcHJvZHVjdGlvbiBhcHBzLlxuICAgKlxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlbmVyYXRlVGVzdENyYXNoKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQXQgYW55IHRpbWUgYWZ0ZXIgc3RhcnRpbmcgdGhlIFNESywgeW91IGNhbiBjaGVjayBpZiB0aGUgYXBwIGNyYXNoZWQgaW4gdGhlIHByZXZpb3VzIGxhdW5jaFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzQ3Jhc2hlZEluTGFzdFNlc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFpbHMgYWJvdXQgdGhlIGxhc3QgY3Jhc2hcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8QXBwQ2VudGVyQ3Jhc2hSZXBvcnQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsYXN0U2Vzc2lvbkNyYXNoUmVwb3J0KCk6IFByb21pc2U8QXBwQ2VudGVyQ3Jhc2hSZXBvcnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgQXBwIENlbnRlciBDcmFzaGVzIGlzIGVuYWJsZWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgQXBwIENlbnRlciBDcmFzaGVzIGF0IHJ1bnRpbWVcbiAgICpcbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gc2hvdWxkRW5hYmxlIFNldCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW5hYmxlZChzaG91bGRFbmFibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==