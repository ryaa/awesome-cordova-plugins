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
var MLKitTranslateOriginal = /** @class */ (function (_super) {
    __extends(MLKitTranslateOriginal, _super);
    function MLKitTranslateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MLKitTranslateOriginal.prototype.translate = function (text, targetLanguage, sourceLanguage) { return cordova(this, "translate", {}, arguments); };
    MLKitTranslateOriginal.prototype.identifyLanguage = function (text) { return cordova(this, "identifyLanguage", {}, arguments); };
    MLKitTranslateOriginal.prototype.getDownloadedModels = function () { return cordova(this, "getDownloadedModels", {}, arguments); };
    MLKitTranslateOriginal.prototype.getAvailableModels = function () { return cordova(this, "getAvailableModels", {}, arguments); };
    MLKitTranslateOriginal.prototype.downloadModel = function (code) { return cordova(this, "downloadModel", {}, arguments); };
    MLKitTranslateOriginal.prototype.deleteModel = function (code) { return cordova(this, "deleteModel", {}, arguments); };
    MLKitTranslateOriginal.pluginName = "MLKitTranslate";
    MLKitTranslateOriginal.plugin = "cordova-plugin-mlkit-translate";
    MLKitTranslateOriginal.pluginRef = "MLKitTranslate";
    MLKitTranslateOriginal.repo = "https://github.com/rigelglen/cordova-plugin-mlkit-translate";
    MLKitTranslateOriginal.platforms = ["Android", "iOS"];
    return MLKitTranslateOriginal;
}(AwesomeCordovaNativePlugin));
var MLKitTranslate = new MLKitTranslateOriginal();
export { MLKitTranslate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWxraXQtdHJhbnNsYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStDeEQsa0NBQTBCOzs7O0lBVzVELGtDQUFTLGFBQUMsSUFBWSxFQUFFLGNBQXNCLEVBQUUsY0FBdUI7SUFXdkUseUNBQWdCLGFBQUMsSUFBWTtJQVU3Qiw0Q0FBbUI7SUFVbkIsMkNBQWtCO0lBV2xCLHNDQUFhLGFBQUMsSUFBWTtJQVcxQixvQ0FBVyxhQUFDLElBQVk7Ozs7Ozt5QkFoSDFCO0VBZ0RvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgbGFuZ3VhZ2Ugb2JqZWN0IHdoaWNoIHdpbGwgYmUgcmV0dXJuZWQgYnkgYGRvd25sb2FkTW9kZWxgLCBgZGVsZXRlTW9kZWxgLCBgZ2V0QXZhaWxhYmxlTW9kZWxzYCBhbmQgYGdldERvd25sb2FkZWRNb2RlbHNgIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VNb2RlbCB7XG4gIC8qKlxuICAgKiBCQ1AtNDcgbGFuZ3VhZ2UgY29kZSBvZiB0aGUgbGFuZ3VhZ2UuIEZvciBleGFtcGxlOiBlblxuICAgKiBGb3IgZnVsbCBsaXN0IG9mIGxhbmd1YWdlcyBjb2Rlcywgc2VlIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL21sLWtpdC90cmFuc2xhdGlvbi1sYW5ndWFnZS1zdXBwb3J0XG4gICAqL1xuICBjb2RlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgbmFtZSBvZiB0aGUgbGFuZ3VhZ2UuIEZvciBleGFtcGxlOiBFbmdsaXNoXG4gICAqL1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIE1MS2l0VHJhbnNsYXRlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBsdWdpbiB0aGF0IGltcGxlbWVudHMgTUxLaXQgVHJhbnNsYXRpb24gYW5kIExhbmd1YWdlIElkZW50aWZpY2F0aW9uIGZlYXR1cmVzLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNTEtpdFRyYW5zbGF0ZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tbC1raXQtdHJhbnNsYXRlJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtbGtpdFRyYW5zbGF0ZTogTUxLaXRUcmFuc2xhdGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubWxraXRUcmFuc2xhdGUudHJhbnNsYXRlKCdIZWxsbycsICdlbicsICdlcycpXG4gKiAgIC50aGVuKChyZXN1bHRUZXh0OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IHN0cmluZykgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBMYW5ndWFnZU1vZGVsXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNTEtpdFRyYW5zbGF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1sa2l0LXRyYW5zbGF0ZScsXG4gIHBsdWdpblJlZjogJ01MS2l0VHJhbnNsYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yaWdlbGdsZW4vY29yZG92YS1wbHVnaW4tbWxraXQtdHJhbnNsYXRlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1MS2l0VHJhbnNsYXRlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVHJhbnNsYXRlcyB0ZXh0IGZyb20gb25lIGxhbmd1YWdlIHRvIGFub3RoZXIuIFJlcXVpcmVzIHRoZSBzb3VyY2UgYW5kIHRhcmdldCBsYW5ndWFnZXMgbmVlZCB0byBiZSBkb3dubG9hZGVkLlxuICAgKiBJZiBub3QgdGhlIGxhbmd1YWdlcyBhcmUgZG93bmxvYWRlZCBpbiB0aGUgYmFja2dyb3VuZCBhdXRvbWF0aWNhbGx5LlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfSB0ZXh0IHRvIGJlIHRyYW5zbGF0ZWRcbiAgICogQHBhcmFtIHRhcmdldExhbmd1YWdlIHtzdHJpbmd9IEJDUC00NyBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsYW5ndWFnZSB0byB0cmFuc2xhdGUgdG9cbiAgICogQHBhcmFtIHNvdXJjZUxhbmd1YWdlIHtzdHJpbmc9fSAob3B0aW9uYWwpIEJDUC00NyBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsYW5ndWFnZSB0byB0cmFuc2xhdGUgdG8uIElmIG5vdCBwcm92aWRlZCwgc291cmNlIGxhbmd1YWdlIGlzIGluZmVycmVkIGZyb20gdGV4dFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHRyYW5zbGF0ZWQgdGV4dFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFuc2xhdGUodGV4dDogc3RyaW5nLCB0YXJnZXRMYW5ndWFnZTogc3RyaW5nLCBzb3VyY2VMYW5ndWFnZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGxhbmd1YWdlIG9mIGEgc3RyaW5nIG9mIHRleHQuXG4gICAqXG4gICAqIEBwYXJhbSB0ZXh0IHtzdHJpbmd9IHRleHQgdG8gYmUgdHJhbnNsYXRlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxMYW5ndWFnZU1vZGVsPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpZGVudGlmaWVkIGxhbmd1YWdlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlkZW50aWZ5TGFuZ3VhZ2UodGV4dDogc3RyaW5nKTogUHJvbWlzZTxMYW5ndWFnZU1vZGVsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbGFuZ3VhZ2UgbW9kZWxzIHRoYXQgaGF2ZSBiZWVuIGRvd25sb2FkZWQgdG8gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8TGFuZ3VhZ2VNb2RlbFtdPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFycmF5IG9mIGxhbmd1YWdlcyB0aGF0IGhhdmUgYmVlbiBkb3dubG9hZGVkLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREb3dubG9hZGVkTW9kZWxzKCk6IFByb21pc2U8TGFuZ3VhZ2VNb2RlbFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbGFuZ3VhZ2UgbW9kZWxzIHRoYXQgY2FuIGJlIGRvd25sb2FkZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExhbmd1YWdlTW9kZWxbXT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiBwb3NzaWJsZSBsYW5ndWFnZXMgdGhhdCBjYW4gYmUgZG93bmxvYWRlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXZhaWxhYmxlTW9kZWxzKCk6IFByb21pc2U8TGFuZ3VhZ2VNb2RlbFtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkcyBhIHNwZWNpZmllZCBsYW5ndWFnZSBtb2RlbC5cbiAgICpcbiAgICogQHBhcmFtIGNvZGUge3N0cmluZ30gQkNQLTQ3IGxhbmd1YWdlIGNvZGUgb2YgdGhlIGxhbmd1YWdlIHRvIGRvd25sb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExhbmd1YWdlTW9kZWw+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRvd25sb2FkZWQgbGFuZ3VhZ2UuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkTW9kZWwoY29kZTogc3RyaW5nKTogUHJvbWlzZTxMYW5ndWFnZU1vZGVsPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBzcGVjaWZpZWQgbGFuZ3VhZ2UgbW9kZWwuXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIHtzdHJpbmd9IEJDUC00NyBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsYW5ndWFnZSB0byBkZWxldGVcbiAgICogQHJldHVybnMge1Byb21pc2U8TGFuZ3VhZ2VNb2RlbD59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZGVsZXRlZCBsYW5ndWFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlTW9kZWwoY29kZTogc3RyaW5nKTogUHJvbWlzZTxMYW5ndWFnZU1vZGVsPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=