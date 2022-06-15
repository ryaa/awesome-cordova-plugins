import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var MediaCapture = /** @class */ (function (_super) {
    __extends(MediaCapture, _super);
    function MediaCapture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaCapture.prototype.captureAudio = function (options) { return cordova(this, "captureAudio", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureImage = function (options) { return cordova(this, "captureImage", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureVideo = function (options) { return cordova(this, "captureVideo", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.onPendingCaptureResult = function () { return cordova(this, "onPendingCaptureResult", { "eventObservable": true, "event": "pendingcaptureresult" }, arguments); };
    MediaCapture.prototype.onPendingCaptureError = function () { return cordova(this, "onPendingCaptureError", { "eventObservable": true, "event": "pendingcaptureerror" }, arguments); };
    Object.defineProperty(MediaCapture.prototype, "supportedImageModes", {
        get: function () { return cordovaPropertyGet(this, "supportedImageModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedImageModes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedAudioModes", {
        get: function () { return cordovaPropertyGet(this, "supportedAudioModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedAudioModes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedVideoModes", {
        get: function () { return cordovaPropertyGet(this, "supportedVideoModes"); },
        set: function (value) { cordovaPropertySet(this, "supportedVideoModes", value); },
        enumerable: false,
        configurable: true
    });
    MediaCapture.pluginName = "MediaCapture";
    MediaCapture.plugin = "cordova-plugin-media-capture";
    MediaCapture.pluginRef = "navigator.device.capture";
    MediaCapture.repo = "https://github.com/apache/cordova-plugin-media-capture";
    MediaCapture.platforms = ["Android", "Browser", "iOS", "Windows"];
    MediaCapture.decorators = [
        { type: Injectable }
    ];
    return MediaCapture;
}(AwesomeCordovaNativePlugin));
export { MediaCapture };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWVkaWEtY2FwdHVyZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTJKQSxnQ0FBMEI7Ozs7SUFrQzFELG1DQUFZLGFBQUMsT0FBNkI7SUFhMUMsbUNBQVksYUFBQyxPQUE2QjtJQWExQyxtQ0FBWSxhQUFDLE9BQTZCO0lBYTFDLDZDQUFzQjtJQWF0Qiw0Q0FBcUI7MEJBL0VyQiw2Q0FBbUI7Ozs7OzswQkFRbkIsNkNBQW1COzs7Ozs7MEJBUW5CLDZDQUFtQjs7Ozs7Ozs7Ozs7O2dCQXhCcEIsVUFBVTs7dUJBNUpYO0VBNkprQywwQkFBMEI7U0FBL0MsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUZpbGUge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGZpbGUsIHdpdGhvdXQgcGF0aCBpbmZvcm1hdGlvbi5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUsIGluY2x1ZGluZyB0aGUgbmFtZS5cbiAgICovXG4gIGZ1bGxQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlsZSdzIG1pbWUgdHlwZVxuICAgKi9cbiAgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBmaWxlIHdhcyBsYXN0IG1vZGlmaWVkLlxuICAgKi9cbiAgbGFzdE1vZGlmaWVkRGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGZpbGUsIGluIGJ5dGVzLlxuICAgKi9cbiAgc2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBvZiB0aGUgbWVkaWEgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3VjY2Vzc0NhbGxiYWNrXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yQ2FsbGJhY2tcbiAgICovXG4gIGdldEZvcm1hdERhdGEoc3VjY2Vzc0NhbGxiYWNrOiAoZGF0YTogTWVkaWFGaWxlRGF0YSkgPT4gYW55LCBlcnJvckNhbGxiYWNrPzogKGVycjogYW55KSA9PiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhRmlsZURhdGEge1xuICAvKipcbiAgICogVGhlIGFjdHVhbCBmb3JtYXQgb2YgdGhlIGF1ZGlvIGFuZCB2aWRlbyBjb250ZW50LlxuICAgKi9cbiAgY29kZWNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYXZlcmFnZSBiaXRyYXRlIG9mIHRoZSBjb250ZW50LiBUaGUgdmFsdWUgaXMgemVybyBmb3IgaW1hZ2VzLlxuICAgKi9cbiAgYml0cmF0ZTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgYXVkaW8gY2xpcHMuXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgYXVkaW8gY2xpcHMuXG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgdmlkZW8gb3Igc291bmQgY2xpcCBpbiBzZWNvbmRzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgaW1hZ2VzLlxuICAgKi9cbiAgZHVyYXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlRXJyb3Ige1xuICBjb2RlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZUF1ZGlvT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBhdWRpbyBjbGlwcy4gRGVmYXVsdHMgdG8gMS5cbiAgICogT24gaU9TIHlvdSBjYW4gb25seSByZWNvcmQgb25lIGZpbGUuXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1heGltdW0gZHVyYXRpb24gb2YgYW4gYXVkaW8gc291bmQgY2xpcCwgaW4gc2Vjb25kcy4gVGhpcyBkb2VzIG5vdCB3b3JrIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVJbWFnZU9wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgaW1hZ2VzIHRvIGNhcHR1cmUuIFRoaXMgbGltaXQgaXMgbm90IHN1cHBvcnRlZCBvbiBpT1MsIG9ubHkgb25lIGltYWdlIHdpbGwgYmUgdGFrZW4gcGVyIGludm9jYXRpb24uXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlVmlkZW9PcHRpb25zIHtcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHZpZGVvIGNsaXBzIHRvIHJlY29yZC4gVGhpcyB2YWx1ZSBpcyBpZ25vcmVkIG9uIGlPUywgb25seSBvbmUgdmlkZW8gY2xpcCBjYW4gYmUgdGFrZW4gcGVyIGludm9jYXRpb24uXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1heGltdW0gZHVyYXRpb24gcGVyIHZpZGVvIGNsaXAuIFRoaXMgd2lsbCBiZSBpZ25vcmVkIG9uIEJsYWNrQmVycnkuXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIFF1YWxpdHkgb2YgdGhlIHZpZGVvLiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIHdpdGggQW5kcm9pZC5cbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbkRhdGEge1xuICAvKipcbiAgICogVGhlIEFTQ0lJLWVuY29kZWQgbG93ZXJjYXNlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1lZGlhIHR5cGUuXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBzb3VuZCBjbGlwcy5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBzb3VuZCBjbGlwcy5cbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgTWVkaWEgQ2FwdHVyZVxuICogQHByZW1pZXIgbWVkaWEtY2FwdHVyZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGRldmljZSdzIGF1ZGlvLCBpbWFnZSwgYW5kIHZpZGVvIGNhcHR1cmUgY2FwYWJpbGl0aWVzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtNZWRpYSBDYXB0dXJlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUpLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNZWRpYUNhcHR1cmUsIE1lZGlhRmlsZSwgQ2FwdHVyZUVycm9yLCBDYXB0dXJlSW1hZ2VPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL21lZGlhLWNhcHR1cmUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtZWRpYUNhcHR1cmU6IE1lZGlhQ2FwdHVyZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGxldCBvcHRpb25zOiBDYXB0dXJlSW1hZ2VPcHRpb25zID0geyBsaW1pdDogMyB9XG4gKiB0aGlzLm1lZGlhQ2FwdHVyZS5jYXB0dXJlSW1hZ2Uob3B0aW9ucylcbiAqICAgLnRoZW4oXG4gKiAgICAgKGRhdGE6IE1lZGlhRmlsZVtdKSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAqICAgICAoZXJyOiBDYXB0dXJlRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuICogICApO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIE1lZGlhRmlsZVxuICogTWVkaWFGaWxlRGF0YVxuICogQ2FwdHVyZUVycm9yXG4gKiBDYXB0dXJlQXVkaW9PcHRpb25zXG4gKiBDYXB0dXJlSW1hZ2VPcHRpb25zXG4gKiBDYXB0dXJlVmlkZW9PcHRpb25zXG4gKiBDb25maWd1cmF0aW9uRGF0YVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01lZGlhQ2FwdHVyZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZGV2aWNlLmNhcHR1cmUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1jYXB0dXJlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZWRpYUNhcHR1cmUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGUgcmVjb3JkaW5nIGltYWdlIHNpemVzIGFuZCBmb3JtYXRzIHN1cHBvcnRlZCBieSB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7Q29uZmlndXJhdGlvbkRhdGFbXX1cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBzdXBwb3J0ZWRJbWFnZU1vZGVzOiBDb25maWd1cmF0aW9uRGF0YVtdO1xuXG4gIC8qKlxuICAgKiBUaGUgYXVkaW8gcmVjb3JkaW5nIGZvcm1hdHMgc3VwcG9ydGVkIGJ5IHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHN1cHBvcnRlZEF1ZGlvTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XG5cbiAgLyoqXG4gICAqIFRoZSByZWNvcmRpbmcgdmlkZW8gcmVzb2x1dGlvbnMgYW5kIGZvcm1hdHMgc3VwcG9ydGVkIGJ5IHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHN1cHBvcnRlZFZpZGVvTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBhdWRpbyByZWNvcmRlciBhcHBsaWNhdGlvbiBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IGNhcHR1cmVkIGF1ZGlvIGNsaXAgZmlsZXMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1lZGlhRmlsZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNhcHR1cmVBdWRpbyhvcHRpb25zPzogQ2FwdHVyZUF1ZGlvT3B0aW9ucyk6IFByb21pc2U8TWVkaWFGaWxlW10gfCBDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIGNhbWVyYSBhcHBsaWNhdGlvbiBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IGNhcHR1cmVkIGltYWdlIGZpbGVzLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxNZWRpYUZpbGVbXT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjYXB0dXJlSW1hZ2Uob3B0aW9ucz86IENhcHR1cmVJbWFnZU9wdGlvbnMpOiBQcm9taXNlPE1lZGlhRmlsZVtdIHwgQ2FwdHVyZUVycm9yPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSB2aWRlbyByZWNvcmRlciBhcHBsaWNhdGlvbiBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIGFib3V0IGNhcHR1cmVkIHZpZGVvIGNsaXAgZmlsZXMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1lZGlhRmlsZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNhcHR1cmVWaWRlbyhvcHRpb25zPzogQ2FwdHVyZVZpZGVvT3B0aW9ucyk6IFByb21pc2U8TWVkaWFGaWxlW10gfCBDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogaXMgZmlyZWQgaWYgdGhlIGNhcHR1cmUgY2FsbCBpcyBzdWNjZXNzZnVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE1lZGlhRmlsZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdwZW5kaW5nY2FwdHVyZXJlc3VsdCcsXG4gIH0pXG4gIG9uUGVuZGluZ0NhcHR1cmVSZXN1bHQoKTogT2JzZXJ2YWJsZTxNZWRpYUZpbGVbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBpcyBmaXJlZCBpZiB0aGUgY2FwdHVyZSBjYWxsIGlzIHVuc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDYXB0dXJlRXJyb3I+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3BlbmRpbmdjYXB0dXJlZXJyb3InLFxuICB9KVxuICBvblBlbmRpbmdDYXB0dXJlRXJyb3IoKTogT2JzZXJ2YWJsZTxDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==