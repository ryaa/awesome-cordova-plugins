import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var TextToSpeechAdvanced = /** @class */ (function (_super) {
    __extends(TextToSpeechAdvanced, _super);
    function TextToSpeechAdvanced() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeechAdvanced.prototype.speak = function (textOrOptions) { return cordova(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeechAdvanced.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    TextToSpeechAdvanced.prototype.getVoices = function () { return cordova(this, "getVoices", {}, arguments); };
    TextToSpeechAdvanced.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TextToSpeechAdvanced, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    TextToSpeechAdvanced.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TextToSpeechAdvanced });
    TextToSpeechAdvanced.pluginName = "Text To Speech Advanced";
    TextToSpeechAdvanced.plugin = "cordova-plugin-tts-advanced";
    TextToSpeechAdvanced.pluginRef = "TTS";
    TextToSpeechAdvanced.repo = "https://github.com/spasma/cordova-plugin-tts-advanced";
    TextToSpeechAdvanced.platforms = ["Android", "iOS"];
    TextToSpeechAdvanced = __decorate([], TextToSpeechAdvanced);
    return TextToSpeechAdvanced;
}(AwesomeCordovaNativePlugin));
export { TextToSpeechAdvanced };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TextToSpeechAdvanced, decorators: [{
            type: Injectable
        }], propDecorators: { speak: [], stop: [], getVoices: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGV4dC10by1zcGVlY2gtYWR2YW5jZWQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQXVEbEQsd0NBQTBCOzs7O0lBV2xFLG9DQUFLLGFBQUMsYUFBa0M7SUFVeEMsbUNBQUk7SUFVSix3Q0FBUztzSEEvQkUsb0JBQW9COzBIQUFwQixvQkFBb0I7Ozs7OztJQUFwQixvQkFBb0Isa0JBQXBCLG9CQUFvQjsrQkF4RGpDO0VBd0QwQywwQkFBMEI7U0FBdkQsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVU7OEJBWVQsS0FBSyxNQVVMLElBQUksTUFVSixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUVFNPcHRpb25zIHtcbiAgLyoqIHRleHQgdG8gc3BlYWsgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKiogY2FuY2VsLCBib29sZWFuOiB0cnVlL2ZhbHNlICovXG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgLyoqIHZvaWNlIGlkZW50aWZpZXIgKGlPUyAvIEFuZHJvaWQpIGZyb20gZ2V0Vm9pY2VzICovXG4gIGxvY2FsZT86IHN0cmluZztcbiAgLyoqIHNwZWVkIHJhdGUsIDAgfiAxICovXG4gIHJhdGU/OiBudW1iZXI7XG4gIC8qKiBwaXRjaCwgMCB+IDEgKi9cbiAgcGl0Y2g/OiBudW1iZXI7XG4gIC8qKiBjYW5jZWwsIGJvb2xlYW46IHRydWUvZmFsc2UgKi9cbiAgY2FuY2VsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUVFNWb2ljZSB7XG4gIC8qKiBWb2ljZSBuYW1lICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIFZvaWNlIGxhbmd1YWdlICovXG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIC8qKiBWb2ljZSBpZGVudGlmaWVyIHN0cmluZyAqL1xuICBpZGVudGlmaWVyOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgVGV4dCBUbyBTcGVlY2ggQWR2YW5jZWRcbiAqIEBkZXNjcmlwdGlvblxuICogVGV4dCB0byBTcGVlY2ggcGx1Z2luXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFRleHRUb1NwZWVjaEFkdmFuY2VkIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RleHQtdG8tc3BlZWNoLWFkdmFuY2VkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0dHM6IFRleHRUb1NwZWVjaEFkdmFuY2VkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnR0cy5zcGVhaygnSGVsbG8gV29ybGQnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU3VjY2VzcycpKVxuICogICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiBjb25zb2xlLmxvZyhyZWFzb24pKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBUVFNPcHRpb25zXG4gKiBUVFNWb2ljZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RleHQgVG8gU3BlZWNoIEFkdmFuY2VkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdHRzLWFkdmFuY2VkJyxcbiAgcGx1Z2luUmVmOiAnVFRTJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zcGFzbWEvY29yZG92YS1wbHVnaW4tdHRzLWFkdmFuY2VkJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRleHRUb1NwZWVjaEFkdmFuY2VkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzcGVha3NcbiAgICpcbiAgICogQHBhcmFtIHRleHRPck9wdGlvbnMge3N0cmluZyB8IFRUU09wdGlvbnN9IFRleHQgdG8gc3BlYWsgb3IgVFRTT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNwZWFraW5nIGZpbmlzaGVzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNwZWFrKHRleHRPck9wdGlvbnM6IHN0cmluZyB8IFRUU09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGFueSBjdXJyZW50IFRUUyBwbGF5YmFja1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdm9pY2VzXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFRUU1ZvaWNlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRWb2ljZXMoKTogUHJvbWlzZTxUVFNWb2ljZVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=