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
var VibrationOriginal = /** @class */ (function (_super) {
    __extends(VibrationOriginal, _super);
    function VibrationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrationOriginal.prototype.vibrate = function (time) { return cordova(this, "vibrate", { "sync": true }, arguments); };
    VibrationOriginal.pluginName = "Vibration";
    VibrationOriginal.plugin = "cordova-plugin-vibration";
    VibrationOriginal.pluginRef = "navigator";
    VibrationOriginal.repo = "https://github.com/apache/cordova-plugin-vibration";
    VibrationOriginal.platforms = ["Android", "iOS", "Windows"];
    return VibrationOriginal;
}(AwesomeCordovaNativePlugin));
var Vibration = new VibrationOriginal();
export { Vibration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmlicmF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXFDN0QsNkJBQTBCOzs7O0lBU3ZELDJCQUFPLGFBQUMsSUFBdUI7Ozs7OztvQkEvQ2pDO0VBc0MrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgVmlicmF0aW9uXG4gKiBAcHJlbWllciB2aWJyYXRpb25cbiAqIEBkZXNjcmlwdGlvbiBWaWJyYXRlcyB0aGUgZGV2aWNlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFZpYnJhdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy92aWJyYXRpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpYnJhdGlvbjogVmlicmF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBWaWJyYXRlIHRoZSBkZXZpY2UgZm9yIGEgc2Vjb25kXG4gKiAvLyBEdXJhdGlvbiBpcyBpZ25vcmVkIG9uIGlPUy5cbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoMTAwMCk7XG4gKlxuICogLy8gVmlicmF0ZSAyIHNlY29uZHNcbiAqIC8vIFBhdXNlIGZvciAxIHNlY29uZFxuICogLy8gVmlicmF0ZSBmb3IgMiBzZWNvbmRzXG4gKiAvLyBQYXR0ZXJucyB3b3JrIG9uIEFuZHJvaWQgYW5kIFdpbmRvd3Mgb25seVxuICogdGhpcy52aWJyYXRpb24udmlicmF0ZShbMjAwMCwxMDAwLDIwMDBdKTtcbiAqXG4gKiAvLyBTdG9wIGFueSBjdXJyZW50IHZpYnJhdGlvbnMgaW1tZWRpYXRlbHlcbiAqIC8vIFdvcmtzIG9uIEFuZHJvaWQgYW5kIFdpbmRvd3Mgb25seVxuICogdGhpcy52aWJyYXRpb24udmlicmF0ZSgwKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ZpYnJhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXZpYnJhdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXZpYnJhdGlvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpYnJhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFZpYnJhdGVzIHRoZSBkZXZpY2UgZm9yIGdpdmVuIGFtb3VudCBvZiB0aW1lLlxuICAgKlxuICAgKiBAcGFyYW0gdGltZSB7bnVtYmVyfG51bWJlcltdfSBNaWxsaXNlY29uZHMgdG8gdmlicmF0ZSB0aGUgZGV2aWNlLiBJZiBwYXNzZWQgYW4gYXJyYXkgb2YgbnVtYmVycywgaXQgd2lsbCBkZWZpbmUgYSB2aWJyYXRpb24gcGF0dGVybi4gUGFzcyAwIHRvIHN0b3AgYW55IHZpYnJhdGlvbiBpbW1lZGlhdGVseS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICB2aWJyYXRlKHRpbWU6IG51bWJlciB8IG51bWJlcltdKSB7fVxufVxuIl19