import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaFunctionOverride, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var ThreeDeeTouch = /** @class */ (function (_super) {
    __extends(ThreeDeeTouch, _super);
    function ThreeDeeTouch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDeeTouch.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThreeDeeTouch.prototype.watchForceTouches = function () { return cordova(this, "watchForceTouches", { "observable": true }, arguments); };
    ThreeDeeTouch.prototype.configureQuickActions = function (quickActions) { return cordova(this, "configureQuickActions", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.onHomeIconPressed = function () { return cordovaFunctionOverride(this, "onHomeIconPressed", {}, arguments); };
    ThreeDeeTouch.prototype.enableLinkPreview = function () { return cordova(this, "enableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.disableLinkPreview = function () { return cordova(this, "disableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ThreeDeeTouch, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    ThreeDeeTouch.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ThreeDeeTouch });
    ThreeDeeTouch.pluginName = "ThreeDeeTouch";
    ThreeDeeTouch.plugin = "cordova-plugin-3dtouch";
    ThreeDeeTouch.pluginRef = "ThreeDeeTouch";
    ThreeDeeTouch.repo = "https://github.com/EddyVerbruggen/cordova-plugin-3dtouch";
    ThreeDeeTouch.platforms = ["iOS"];
    ThreeDeeTouch = __decorate([], ThreeDeeTouch);
    return ThreeDeeTouch;
}(AwesomeCordovaNativePlugin));
export { ThreeDeeTouch };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ThreeDeeTouch, decorators: [{
            type: Injectable
        }], propDecorators: { isAvailable: [], watchForceTouches: [], configureQuickActions: [], onHomeIconPressed: [], enableLinkPreview: [], disableLinkPreview: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGhyZWUtZGVlLXRvdWNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGdFQUF3RSxNQUFNLCtCQUErQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQThIQyxpQ0FBMEI7Ozs7SUFPM0QsbUNBQVc7SUFZWCx5Q0FBaUI7SUFpQmpCLDZDQUFxQixhQUFDLFlBQXdDO0lBUTlELHlDQUFpQjtJQVdqQix5Q0FBaUI7SUFRakIsMENBQWtCOytHQS9EUCxhQUFhO21IQUFiLGFBQWE7Ozs7OztJQUFiLGFBQWEsa0JBQWIsYUFBYTt3QkFoSTFCO0VBZ0ltQywwQkFBMEI7U0FBaEQsYUFBYTs0RkFBYixhQUFhO2tCQUR6QixVQUFVOzhCQVFULFdBQVcsTUFZWCxpQkFBaUIsTUFpQmpCLHFCQUFxQixNQVFyQixpQkFBaUIsTUFXakIsaUJBQWlCLE1BUWpCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFGdW5jdGlvbk92ZXJyaWRlLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRocmVlRGVlVG91Y2hRdWlja0FjdGlvbiB7XG4gIC8qKlxuICAgKiBUeXBlIHRoYXQgY2FuIGJlIHVzZWQgaW4gdGhlIG9uSG9tZUljb25QcmVzc2VkIGNhbGxiYWNrXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaXRsZVxuICAgKi9cbiAgdGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogU3VidGl0bGVcbiAgICovXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJY29uIHR5cGUuIENhc2UgaW5zZW5zaXRpdmVcbiAgICovXG4gIGljb25UeXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJY29uIHRlbXBsYXRlXG4gICAqL1xuICBpY29uVGVtcGxhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyZWVEZWVUb3VjaEZvcmNlVG91Y2gge1xuICAvKipcbiAgICogVG91Y2ggZm9yY2VcbiAgICovXG4gIGZvcmNlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRpbWVzdGFtcCBvZiBhY3Rpb25cbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBYIGNvb3JkaW5hdGUgb2YgYWN0aW9uXG4gICAqL1xuICB4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFkgY29vcmRpbmF0ZSBvZiBhY3Rpb25cbiAgICovXG4gIHk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSAzRCBUb3VjaFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgM0QgVG91Y2ggcGx1Z2luIGFkZHMgM0QgVG91Y2ggY2FwYWJpbGl0aWVzIHRvIHlvdXIgQ29yZG92YSBhcHAuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi0zZHRvdWNoYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgWzNEIFRvdWNoIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tM2R0b3VjaCkuXG4gKiBAdXNhZ2VcbiAqIFBsZWFzZSBkbyByZWZlciB0byB0aGUgb3JpZ2luYWwgcGx1Z2luJ3MgcmVwbyBmb3IgZGV0YWlsZWQgdXNhZ2UuIFRoZSB1c2FnZSBleGFtcGxlIGhlcmUgbWlnaHQgbm90IGJlIHN1ZmZpY2llbnQuXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUaHJlZURlZVRvdWNoLCBUaHJlZURlZVRvdWNoUXVpY2tBY3Rpb24sIFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RocmVlLWRlZS10b3VjaC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhyZWVEZWVUb3VjaDogVGhyZWVEZWVUb3VjaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy50aHJlZURlZVRvdWNoLmlzQXZhaWxhYmxlKCkudGhlbihpc0F2YWlsYWJsZSA9PiBjb25zb2xlLmxvZygnM0QgVG91Y2ggYXZhaWxhYmxlPyAnICsgaXNBdmFpbGFibGUpKTtcbiAqXG4gKiB0aGlzLnRocmVlRGVlVG91Y2gud2F0Y2hGb3JjZVRvdWNoZXMoKVxuICogICAuc3Vic2NyaWJlKFxuICogICAgIChkYXRhOiBUaHJlZURlZVRvdWNoRm9yY2VUb3VjaCkgPT4ge1xuICogICAgICAgY29uc29sZS5sb2coJ0ZvcmNlIHRvdWNoICUnICsgZGF0YS5mb3JjZSk7XG4gKiAgICAgICBjb25zb2xlLmxvZygnRm9yY2UgdG91Y2ggdGltZXN0YW1wOiAnICsgZGF0YS50aW1lc3RhbXApO1xuICogICAgICAgY29uc29sZS5sb2coJ0ZvcmNlIHRvdWNoIHg6ICcgKyBkYXRhLngpO1xuICogICAgICAgY29uc29sZS5sb2coJ0ZvcmNlIHRvdWNoIHk6ICcgKyBkYXRhLnkpO1xuICogICAgIH1cbiAqICAgKTtcbiAqXG4gKlxuICogbGV0IGFjdGlvbnM6IFRocmVlRGVlVG91Y2hRdWlja0FjdGlvbltdID0gW1xuICogICB7XG4gKiAgICAgdHlwZTogJ2NoZWNraW4nLFxuICogICAgIHRpdGxlOiAnQ2hlY2sgaW4nLFxuICogICAgIHN1YnRpdGxlOiAnUXVpY2tseSBjaGVjayBpbicsXG4gKiAgICAgaWNvblR5cGU6ICdDb21wb3NlJ1xuICogICB9LFxuICogICB7XG4gKiAgICAgdHlwZTogJ3NoYXJlJyxcbiAqICAgICB0aXRsZTogJ1NoYXJlJyxcbiAqICAgICBzdWJ0aXRsZTogJ1NoYXJlIGxpa2UgeW91IGNhcmUnLFxuICogICAgIGljb25UeXBlOiAnU2hhcmUnXG4gKiAgIH0sXG4gKiAgIHtcbiAqICAgICB0eXBlOiAnc2VhcmNoJyxcbiAqICAgICB0aXRsZTogJ1NlYXJjaCcsXG4gKiAgICAgaWNvblR5cGU6ICdTZWFyY2gnXG4gKiAgIH0sXG4gKiAgIHtcbiAqICAgICB0aXRsZTogJ1Nob3cgZmF2b3JpdGVzJyxcbiAqICAgICBpY29uVGVtcGxhdGU6ICdIZWFydFRlbXBsYXRlJ1xuICogICB9XG4gKiBdO1xuICpcbiAqIHRoaXMudGhyZWVEZWVUb3VjaC5jb25maWd1cmVRdWlja0FjdGlvbnMoYWN0aW9ucyk7XG4gKlxuICogdGhpcy50aHJlZURlZVRvdWNoLm9uSG9tZUljb25QcmVzc2VkKCkuc3Vic2NyaWJlKFxuICogIChwYXlsb2FkKSA9PiB7XG4gKiAgICAvLyByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGlzIHRoZSBidXR0b24geW91IHByZXNlZFxuICogICAgY29uc29sZS5sb2coJ1ByZXNzZWQgdGhlICR7cGF5bG9hZC50aXRsZX0gYnV0dG9uJylcbiAqICAgIGNvbnNvbGUubG9nKHBheWxvYWQudHlwZSlcbiAqXG4gKiAgfVxuICogKVxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogVGhyZWVEZWVUb3VjaFF1aWNrQWN0aW9uXG4gKiBUaHJlZURlZVRvdWNoRm9yY2VUb3VjaFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RocmVlRGVlVG91Y2gnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi0zZHRvdWNoJyxcbiAgcGx1Z2luUmVmOiAnVGhyZWVEZWVUb3VjaCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tM2R0b3VjaCcsXG4gIHBsYXRmb3JtczogWydpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGhyZWVEZWVUb3VjaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFlvdSBuZWVkIGFuIGlQaG9uZSA2UyBvciBzb21lIGZ1dHVyZSB0ZWNoIHRvIHVzZSB0aGUgZmVhdHVyZXMgb2YgdGhpcyBwbHVnaW4sIHNvIHlvdSBjYW4gY2hlY2sgYXQgcnVudGltZSBpZiB0aGUgdXNlcidzIGRldmljZSBpcyBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGUgb3Igbm90XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGdldCBhIG5vdGlmaWNhdGlvbiB3aGVuIHRoZSB1c2VyIGZvcmNlIHRvdWNoZXMgdGhlIHdlYnZpZXcuIFRoZSBwbHVnaW4gZGVmaW5lcyBhIEZvcmNlIFRvdWNoIHdoZW4gYXQgbGVhc3QgNzUlIG9mIHRoZSBtYXhpbXVtIGZvcmNlIGlzIGFwcGxpZWQgdG8gdGhlIHNjcmVlbi4gWW91ciBhcHAgd2lsbCByZWNlaXZlIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzLCBzbyB5b3UgaGF2ZSB0byBmaWd1cmUgb3V0IHdoaWNoIFVJIGVsZW1lbnQgd2FzIHRvdWNoZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgc2VuZHMgYSBgVGhyZWVEZWVUb3VjaEZvcmNlVG91Y2hgIG9iamVjdFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHdhdGNoRm9yY2VUb3VjaGVzKCk6IE9ic2VydmFibGU8VGhyZWVEZWVUb3VjaEZvcmNlVG91Y2g+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2V0dXAgdGhlIDNELXRvdWNoIGFjdGlvbnMsIHRha2VzIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIChvcHRpb25hbCkgQSB0eXBlIHRoYXQgY2FuIGJlIHVzZWQgYG9uSG9tZUljb25QcmVzc2VkYCBjYWxsYmFja1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgVGl0bGUgZm9yIHlvdXIgYWN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdWJ0aXRsZSAob3B0aW9uYWwpIEEgc2hvcnQgZGVzY3JpcHRpb24gZm9yIHlvdXIgYWN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uVHlwZSAob3B0aW9uYWwpIENob29zZSBiZXR3ZWVuIFByb2hpYml0LCBDb250YWN0LCBIb21lLCBNYXJrTG9jYXRpb24sIEZhdm9yaXRlLCBMb3ZlLCBDbG91ZCwgSW52aXRhdGlvbiwgQ29uZmlybWF0aW9uLCBNYWlsLCBNZXNzYWdlLCBEYXRlLCBUaW1lLCBDYXB0dXJlUGhvdG8sIENhcHR1cmVWaWRlbywgVGFzaywgVGFza0NvbXBsZXRlZCwgQWxhcm0sIEJvb2ttYXJrLCBTaHVmZmxlLCBBdWRpbywgVXBkYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uVGVtcGxhdGUgKG9wdGlvbmFsKSBDYW4gYmUgdXNlZCB0byBwcm92aWRlIHlvdXIgb3duIGljb25cbiAgICogQHBhcmFtIHF1aWNrQWN0aW9uc1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGNvbmZpZ3VyZVF1aWNrQWN0aW9ucyhxdWlja0FjdGlvbnM6IFRocmVlRGVlVG91Y2hRdWlja0FjdGlvbltdKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgaG9tZSBpY29uIGlzIHByZXNzZWQsIHlvdXIgYXBwIGxhdW5jaGVzIGFuZCB0aGlzIEpTIGNhbGxiYWNrIGlzIGludm9rZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIGhlIHVzZXIgcHJlc3NlcyBvbiB0aGUgaG9tZSBzY3JlZW4gaWNvblxuICAgKi9cbiAgQENvcmRvdmFGdW5jdGlvbk92ZXJyaWRlKClcbiAgb25Ib21lSWNvblByZXNzZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIExpbmsgUHJldmlldy5cbiAgICogVUlXZWJWaWV3IGFuZCBXS1dlYlZpZXcgKHRoZSB3ZWJ2aWV3cyBwb3dlcmluZyBDb3Jkb3ZhIGFwcHMpIGRvbid0IGFsbG93IHRoZSBmYW5jeSBuZXcgbGluayBwcmV2aWV3IGZlYXR1cmUgb2YgaU9TOS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBlbmFibGVMaW5rUHJldmlldygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGVkIHRoZSBsaW5rIHByZXZpZXcgZmVhdHVyZSwgaWYgZW5hYmxlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlTGlua1ByZXZpZXcoKTogdm9pZCB7fVxufVxuIl19