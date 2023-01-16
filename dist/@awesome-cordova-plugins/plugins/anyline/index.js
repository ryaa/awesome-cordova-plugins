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
var AnylineOriginal = /** @class */ (function (_super) {
    __extends(AnylineOriginal, _super);
    function AnylineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnylineOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    AnylineOriginal.pluginName = "Anyline";
    AnylineOriginal.plugin = "io-anyline-cordova";
    AnylineOriginal.pluginRef = "Anyline";
    AnylineOriginal.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    AnylineOriginal.platforms = ["Android", "iOS"];
    return AnylineOriginal;
}(AwesomeCordovaNativePlugin));
var Anyline = new AnylineOriginal();
export { Anyline };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW55bGluZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXNDL0QsMkJBQTBCOzs7O0lBUXJELHNCQUFJLGFBQUMsT0FBdUI7Ozs7OztrQkEvQzlCO0VBdUM2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW55bGluZU9wdGlvbnMge1xuICAvLyBWYWxpZCBMaWNlbnNlIEtleVxuICBsaWNlbnNlS2V5OiBzdHJpbmc7XG5cbiAgLy8gU2Nhbm5pbmcgb3B0aW9uc1xuICBjb25maWc6IGFueTtcbn1cblxuLyoqXG4gKiBAbmFtZSBBbnlsaW5lXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFueWxpbmUgcHJvdmlkZXMgYW4gZWFzeS10by11c2UgU0RLIGZvciBhcHBsaWNhdGlvbnMgdG8gZW5hYmxlIE9wdGljYWwgQ2hhcmFjdGVyIFJlY29nbml0aW9uIChPQ1IpIG9uIG1vYmlsZSBkZXZpY2VzLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBbnlsaW5lIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FueWxpbmUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbnlsaW5lOiBBbnlsaW5lKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hbnlsaW5lLnNjYW4ob3B0aW9ucylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbnlsaW5lJyxcbiAgcGx1Z2luOiAnaW8tYW55bGluZS1jb3Jkb3ZhJyxcbiAgcGx1Z2luUmVmOiAnQW55bGluZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQW55bGluZS9hbnlsaW5lLW9jci1jb3Jkb3ZhLW1vZHVsZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbnlsaW5lIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2NhblxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7QW55bGluZU9wdGlvbnN9IFNjYW5uaW5nIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIENvZGUgaXMgY2FwdHVyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2NhbihvcHRpb25zOiBBbnlsaW5lT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=