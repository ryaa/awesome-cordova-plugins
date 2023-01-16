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
var DialogsOriginal = /** @class */ (function (_super) {
    __extends(DialogsOriginal, _super);
    function DialogsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogsOriginal.prototype.alert = function (message, title, buttonName) { return cordova(this, "alert", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    DialogsOriginal.prototype.confirm = function (message, title, buttonLabels) { return cordova(this, "confirm", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    DialogsOriginal.prototype.prompt = function (message, title, buttonLabels, defaultText) { return cordova(this, "prompt", { "successIndex": 1, "errorIndex": 5 }, arguments); };
    DialogsOriginal.prototype.beep = function (times) { return cordova(this, "beep", { "sync": true }, arguments); };
    DialogsOriginal.pluginName = "Dialogs";
    DialogsOriginal.plugin = "cordova-plugin-dialogs";
    DialogsOriginal.pluginRef = "navigator.notification";
    DialogsOriginal.repo = "https://github.com/apache/cordova-plugin-dialogs";
    DialogsOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    return DialogsOriginal;
}(AwesomeCordovaNativePlugin));
var Dialogs = new DialogsOriginal();
export { Dialogs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGlhbG9ncy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThDL0QsMkJBQTBCOzs7O0lBYXJELHVCQUFLLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxVQUFtQjtJQWdCMUQseUJBQU8sYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLFlBQXVCO0lBaUJoRSx3QkFBTSxhQUNKLE9BQWdCLEVBQ2hCLEtBQWMsRUFDZCxZQUF1QixFQUN2QixXQUFvQjtJQWF0QixzQkFBSSxhQUFDLEtBQWE7Ozs7OztrQkE5R3BCO0VBK0M2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nc1Byb21wdENhbGxiYWNrIHtcbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgcHJlc3NlZCBidXR0b24uIChOdW1iZXIpIE5vdGUgdGhhdCB0aGUgaW5kZXggdXNlcyBvbmUtYmFzZWQgaW5kZXhpbmcsIHNvIHRoZSB2YWx1ZSBpcyAxLCAyLCAzLCBldGMuXG4gICAqL1xuICBidXR0b25JbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBlbnRlcmVkIGluIHRoZSBwcm9tcHQgZGlhbG9nIGJveC4gKFN0cmluZylcbiAgICovXG4gIGlucHV0MTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIERpYWxvZ3NcbiAqIEBwcmVtaWVyIGRpYWxvZ3NcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZ2l2ZXMgeW91IGFiaWxpdHkgdG8gYWNjZXNzIGFuZCBjdXN0b21pemUgdGhlIGRldmljZSBuYXRpdmUgZGlhbG9ncy5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWRpYWxvZ3NgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRGlhbG9ncyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kaWFsb2dzKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGlhbG9ncyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kaWFsb2dzL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dzOiBEaWFsb2dzKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmRpYWxvZ3MuYWxlcnQoJ0hlbGxvIHdvcmxkJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0RpYWxvZyBkaXNtaXNzZWQnKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIGRpc3BsYXlpbmcgZGlhbG9nJywgZSkpO1xuICpcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBEaWFsb2dzUHJvbXB0Q2FsbGJhY2tcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEaWFsb2dzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGlhbG9ncycsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5ub3RpZmljYXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kaWFsb2dzJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaWFsb2dzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvd3MgYSBjdXN0b20gYWxlcnQgb3IgZGlhbG9nIGJveC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgRGlhbG9nIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdIERpYWxvZyB0aXRsZS4gKE9wdGlvbmFsLCBkZWZhdWx0cyB0byBBbGVydClcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtidXR0b25OYW1lXSBCdXR0b24gbmFtZS4gKE9wdGlvbmFsLCBkZWZhdWx0cyB0byBPSylcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIGJsYW5rIHByb21pc2Ugb25jZSB0aGUgdXNlciBoYXMgZGlzbWlzc2VkIHRoZSBhbGVydC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgfSlcbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uTmFtZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGEgY3VzdG9taXphYmxlIGNvbmZpcm1hdGlvbiBkaWFsb2cgYm94LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBEaWFsb2cgbWVzc2FnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gRGlhbG9nIHRpdGxlLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIENvbmZpcm0pXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtidXR0b25MYWJlbHNdIEFycmF5IG9mIHN0cmluZ3Mgc3BlY2lmeWluZyBidXR0b24gbGFiZWxzLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIFtPSyxDYW5jZWxdKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRoZSBidXR0b24gaW5kZXggdGhhdCB3YXMgY2xpY2tlZCwgb3IgMCBpZiB0aGUgdXNlciBoYXMgZGlzbWlzc2VkIHRoZSBkaWFsb2cgYnkgY2xpY2tpbmcgb3V0c2lkZSB0aGUgZGlhbG9nIGJveC4gTm90ZSB0aGF0IHRoZSBpbmRleCB1c2Ugb25lLWJhc2VkIGluZGV4aW5nLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiA0LFxuICB9KVxuICBjb25maXJtKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIGJ1dHRvbkxhYmVscz86IHN0cmluZ1tdKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgYSBuYXRpdmUgZGlhbG9nIGJveCB0aGF0IGlzIG1vcmUgY3VzdG9taXphYmxlIHRoYW4gdGhlIGJyb3dzZXIncyBwcm9tcHQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV0gRGlhbG9nIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdIERpYWxvZyB0aXRsZS4gKE9wdGlvbmFsLCBkZWZhdWx0cyB0byBQcm9tcHQpXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtidXR0b25MYWJlbHNdICBBcnJheSBvZiBzdHJpbmdzIHNwZWNpZnlpbmcgYnV0dG9uIGxhYmVscy4gKE9wdGlvbmFsLCBkZWZhdWx0cyB0byBbXCJPS1wiLFwiQ2FuY2VsXCJdKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRUZXh0XSBEZWZhdWx0IHRleHQgYm94IGlucHV0IHZhbHVlLiAgKE9wdGlvbmFsLCBEZWZhdWx0OiBlbXB0eSBzdHJpbmcpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpYWxvZ3NQcm9tcHRDYWxsYmFjaz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYW4gb2JqZWN0IHdpdGggdGhlIGJ1dHRvbiBpbmRleCBjbGlja2VkIGFuZCB0aGUgdGV4dCBlbnRlcmVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDUsXG4gIH0pXG4gIHByb21wdChcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGJ1dHRvbkxhYmVscz86IHN0cmluZ1tdLFxuICAgIGRlZmF1bHRUZXh0Pzogc3RyaW5nXG4gICk6IFByb21pc2U8RGlhbG9nc1Byb21wdENhbGxiYWNrPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZXZpY2UgcGxheXMgYSBiZWVwIHNvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcnN9IHRpbWVzIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBiZWVwLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGJlZXAodGltZXM6IG51bWJlcik6IHZvaWQge31cbn1cbiJdfQ==