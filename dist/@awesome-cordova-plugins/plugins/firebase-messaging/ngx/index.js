import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var FirebaseMessaging = /** @class */ (function (_super) {
    __extends(FirebaseMessaging, _super);
    function FirebaseMessaging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseMessaging.prototype.onMessage = function () { return cordova(this, "onMessage", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.onBackgroundMessage = function () { return cordova(this, "onBackgroundMessage", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.requestPermission = function (options) { return cordova(this, "requestPermission", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.getInstanceId = function () { return cordova(this, "getInstanceId", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.getToken = function (type) { return cordova(this, "getToken", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.onTokenRefresh = function () { return cordova(this, "onTokenRefresh", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseMessaging.prototype.subscribe = function (topic) { return cordova(this, "subscribe", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.unsubscribe = function (topic) { return cordova(this, "unsubscribe", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.getBadge = function () { return cordova(this, "getBadge", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.setBadge = function (value) { return cordova(this, "setBadge", { "sync": true }, arguments); };
    FirebaseMessaging.prototype.deleteToken = function () { return cordova(this, "deleteToken", { "sync": true }, arguments); };
    FirebaseMessaging.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FirebaseMessaging, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FirebaseMessaging.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FirebaseMessaging });
    FirebaseMessaging.pluginName = "FirebaseMessaging";
    FirebaseMessaging.plugin = "cordova-plugin-firebase-messaging";
    FirebaseMessaging.pluginRef = "cordova.plugins.firebase.messaging";
    FirebaseMessaging.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-messaging";
    FirebaseMessaging.platforms = ["Android", "iOS"];
    FirebaseMessaging = __decorate([], FirebaseMessaging);
    return FirebaseMessaging;
}(AwesomeCordovaNativePlugin));
export { FirebaseMessaging };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: FirebaseMessaging, decorators: [{
            type: Injectable
        }], propDecorators: { onMessage: [], onBackgroundMessage: [], requestPermission: [], getInstanceId: [], getToken: [], onTokenRefresh: [], subscribe: [], unsubscribe: [], getBadge: [], setBadge: [], deleteToken: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtbWVzc2FnaW5nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQW9FSyxxQ0FBMEI7Ozs7SUFPL0QscUNBQVM7SUFVVCwrQ0FBbUI7SUFZbkIsNkNBQWlCLGFBQUMsT0FBaUM7SUFRbkQseUNBQWE7SUFjYixvQ0FBUSxhQUFDLElBQWlDO0lBVzFDLDBDQUFjO0lBV2QscUNBQVMsYUFBQyxLQUFhO0lBV3ZCLHVDQUFXLGFBQUMsS0FBYTtJQVV6QixvQ0FBUTtJQVdSLG9DQUFRLGFBQUMsS0FBYTtJQVV0Qix1Q0FBVzttSEFuSEEsaUJBQWlCO3VIQUFqQixpQkFBaUI7Ozs7OztJQUFqQixpQkFBaUIsa0JBQWpCLGlCQUFpQjs0QkF0RTlCO0VBc0V1QywwQkFBMEI7U0FBcEQsaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVU7OEJBUVQsU0FBUyxNQVVULG1CQUFtQixNQVluQixpQkFBaUIsTUFRakIsYUFBYSxNQWNiLFFBQVEsTUFXUixjQUFjLE1BV2QsU0FBUyxNQVdULFdBQVcsTUFVWCxRQUFRLE1BV1IsUUFBUSxNQVVSLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGaXJlYmFzZUdDTU1lc3NhZ2Uge1xuICBnY206IHtcbiAgICBib2R5OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBzb3VuZDogc3RyaW5nO1xuICAgIGljb246IHN0cmluZztcbiAgICB0YWc6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNsaWNrQWN0aW9uOiBzdHJpbmc7XG4gIH07XG4gICdnb29nbGUubWVzc2FnZV9pZCc6IHN0cmluZztcbiAgJ2dvb2dsZS5zZW50X3RpbWUnOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmlyZWJhc2VBUFNNZXNzYWdlIHtcbiAgYXBzOiB7XG4gICAgYWxlcnQ6IHtcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICBib2R5OiBzdHJpbmc7XG4gICAgfTtcbiAgICBiYWRnZT86IG51bWJlcjtcbiAgfTtcbiAgJ2djbS5tZXNzYWdlX2lkJzogJ3N0cmluZyc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgSUZpcmViYXNlTWVzc2FnZSA9IElGaXJlYmFzZUFQU01lc3NhZ2UgfCBJRmlyZWJhc2VHQ01NZXNzYWdlO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXF1ZXN0UGVybWlzc2lvbk9wdGlvbnMge1xuICBmb3JjZVNob3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBGaXJlYmFzZU1lc3NhZ2luZ1Rva2VuVHlwZSA9ICdhcG5zLWJ1ZmZlcicgfCAnYXBucy1zdHJpbmcnO1xuXG4vKipcbiAqIEBiZXRhXG4gKiBAbmFtZSBGaXJlYmFzZSBNZXNzYWdpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIE1lc3NhZ2luZ1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGaXJlYmFzZU1lc3NhZ2luZyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maXJlYmFzZS1tZXNzYWdpbmcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZU1lc3NhZ2luZzogRmlyZWJhc2VNZXNzYWdpbmcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmZpcmViYXNlTWVzc2FnaW5nLmxvZ0V2ZW50KCdwYWdlX3ZpZXcnLCB7cGFnZTogXCJkYXNoYm9hcmRcIn0pXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSUZpcmViYXNlTWVzc2FnZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlTWVzc2FnaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtbWVzc2FnaW5nJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLm1lc3NhZ2luZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hlbWVyaXN1ay9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1tZXNzYWdpbmcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VNZXNzYWdpbmcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIHB1c2ggbWVzc2FnZSByZWNlaXZlZCB3aGlsZSBhcHAgaXMgaW4gZm9yZWdyb3VuZC5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIG9uTWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIHB1c2ggbWVzc2FnZSByZWNlaXZlZCB3aGlsZSBhcHAgaXMgaW4gYmFja2dyb3VuZC5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSwgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIG9uQmFja2dyb3VuZE1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR3JhbnQgcGVybWlzc2lvbiB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucyAod2lsbCB0cmlnZ2VyIHByb21wdCBvbiBpT1MpLlxuICAgKlxuICAgKiBAcGFyYW0ge0lSZXF1ZXN0UGVybWlzc2lvbk9wdGlvbnN9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0gb3B0aW9ucy5mb3JjZVNob3dcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZXF1ZXN0UGVybWlzc2lvbihvcHRpb25zPzogeyBmb3JjZVNob3c/OiBib29sZWFuIH0pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGFmIGZ1bGZpbGxzIHdpdGggdGhlIGRldmljZSBpbnN0YW5jZSBJRFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEluc3RhbmNlSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSBjdXJyZW50IEZDTSB0b2tlblxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBhbHNvIGFjY2VwdHMgb3B0aW9uYWwgYXJndW1lbnQgdHlwZS5cbiAgICogQ3VycmVudGx5IGlPUyBpbXBsZW1lbnRhdGlvbiBzdXBwb3J0cyB2YWx1ZXMgXCJhcG5zLWJ1ZmZlclwiIGFuZCBcImFwbnMtc3RyaW5nXCIgdGhhdCBkZWZpbmVzIHByZXNlbnRhdGlvbiBvZiByZXNvbHZlZCBBUE5TIHRva2VuLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZpcmViYXNlTWVzc2FnaW5nVG9rZW5UeXBlfSBbdHlwZV0gaU9TIG9ubHkuIERlZmluZXMgcHJlc2VudGF0aW9uIG9mIHJlc29sdmVkIEFQTlMgdG9rZW5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRUb2tlbih0eXBlPzogRmlyZWJhc2VNZXNzYWdpbmdUb2tlblR5cGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBldmVyeSB0aW1lIHdoZW4gRkNNIHRva2VuIHVwZGF0ZWQuXG4gICAqIFlvdSBzaG91bGQgdXN1YWxseSBjYWxsIGdldFRva2VuIHRvIGdldCBhbiB1cGRhdGVkIHRva2VuIGFuZCBzZW5kIGl0IHRvIHNlcnZlci5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUsIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBvblRva2VuUmVmcmVzaCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRvcGljIGluIGJhY2tncm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpY1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudWxsPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdWJzY3JpYmUodG9waWM6IHN0cmluZyk6IFByb21pc2U8bnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRvcGljIGluIGJhY2tncm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpY1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudWxsPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1bnN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxudWxsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIGN1cnJlbnQgYmFkZ2UgbnVtYmVyIChpZiBzdXBwb3J0ZWQpLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJhZGdlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY3VycmVudCBiYWRnZSBudW1iZXIgKGlmIHN1cHBvcnRlZCkuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudWxsPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRCYWRnZSh2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxudWxsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldm9rZSB0aGUgY3VycmVudCBGQ00gdG9rZW4uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bGw+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlbGV0ZVRva2VuKCk6IFByb21pc2U8bnVsbD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19