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
import { Observable } from 'rxjs';
var ZeroconfOriginal = /** @class */ (function (_super) {
    __extends(ZeroconfOriginal, _super);
    function ZeroconfOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroconfOriginal.prototype.getHostname = function () { return cordova(this, "getHostname", {}, arguments); };
    ZeroconfOriginal.prototype.register = function (type, domain, name, port, txtRecord) { return cordova(this, "register", {}, arguments); };
    ZeroconfOriginal.prototype.unregister = function (type, domain, name) { return cordova(this, "unregister", {}, arguments); };
    ZeroconfOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    ZeroconfOriginal.prototype.watch = function (type, domain) { return cordova(this, "watch", { "observable": true, "clearFunction": "unwatch", "clearWithArgs": true }, arguments); };
    ZeroconfOriginal.prototype.unwatch = function (type, domain) { return cordova(this, "unwatch", {}, arguments); };
    ZeroconfOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    ZeroconfOriginal.prototype.reInit = function () { return cordova(this, "reInit", {}, arguments); };
    ZeroconfOriginal.pluginName = "Zeroconf";
    ZeroconfOriginal.plugin = "cordova-plugin-zeroconf";
    ZeroconfOriginal.pluginRef = "cordova.plugins.zeroconf";
    ZeroconfOriginal.repo = "https://github.com/becvert/cordova-plugin-zeroconf";
    ZeroconfOriginal.platforms = ["Android", "iOS"];
    return ZeroconfOriginal;
}(AwesomeCordovaNativePlugin));
var Zeroconf = new ZeroconfOriginal();
export { Zeroconf };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemVyb2NvbmYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTJESiw0QkFBMEI7Ozs7SUFPdEQsOEJBQVc7SUFlWCwyQkFBUSxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxTQUFjO0lBYWpGLDZCQUFVLGFBQUMsSUFBWSxFQUFFLE1BQWMsRUFBRSxJQUFZO0lBVXJELHVCQUFJO0lBZ0JKLHdCQUFLLGFBQUMsSUFBWSxFQUFFLE1BQWM7SUFZbEMsMEJBQU8sYUFBQyxJQUFZLEVBQUUsTUFBYztJQVVwQyx3QkFBSztJQVVMLHlCQUFNOzs7Ozs7bUJBMUpSO0VBNkQ4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWmVyb2NvbmZTZXJ2aWNlIHtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwb3J0OiBudW1iZXI7XG4gIGhvc3RuYW1lOiBzdHJpbmc7XG4gIGlwdjRBZGRyZXNzZXM6IHN0cmluZ1tdO1xuICBpcHY2QWRkcmVzc2VzOiBzdHJpbmdbXTtcbiAgdHh0UmVjb3JkOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWmVyb2NvbmZSZXN1bHQge1xuICBhY3Rpb246ICdyZWdpc3RlcmVkJyB8ICdhZGRlZCcgfCAncmVtb3ZlZCcgfCAncmVzb2x2ZWQnO1xuICBzZXJ2aWNlOiBaZXJvY29uZlNlcnZpY2U7XG59XG5cbi8qKlxuICogQG5hbWUgWmVyb2NvbmZcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBicm93c2UgYW5kIHB1Ymxpc2ggWmVyb2NvbmYvQm9uam91ci9tRE5TIHNlcnZpY2VzLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBaZXJvY29uZiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy96ZXJvY29uZi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgemVyb2NvbmY6IFplcm9jb25mKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyB3YXRjaCBmb3Igc2VydmljZXMgb2YgYSBzcGVjaWZpZWQgdHlwZVxuICogdGhpcy56ZXJvY29uZi53YXRjaCgnX2h0dHAuX3RjcC4nLCAnbG9jYWwuJykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gKiAgIGlmIChyZXN1bHQuYWN0aW9uID09ICdhZGRlZCcpIHtcbiAqICAgICBjb25zb2xlLmxvZygnc2VydmljZSBhZGRlZCcsIHJlc3VsdC5zZXJ2aWNlKTtcbiAqICAgfSBlbHNlIHtcbiAqICAgICBjb25zb2xlLmxvZygnc2VydmljZSByZW1vdmVkJywgcmVzdWx0LnNlcnZpY2UpO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKiAvLyBwdWJsaXNoIGEgemVyb2NvbmYgc2VydmljZSBvZiB5b3VyIG93blxuICogdGhpcy56ZXJvY29uZi5yZWdpc3RlcignX2h0dHAuX3RjcC4nLCAnbG9jYWwuJywgJ0JlY3ZlcnRcXCdzIGlQYWQnLCA4MCwge1xuICogICAnZm9vJzogJ2JhcidcbiAqIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAqICAgY29uc29sZS5sb2coJ1NlcnZpY2UgcmVnaXN0ZXJlZCcsIHJlc3VsdC5zZXJ2aWNlKTtcbiAqIH0pO1xuICpcbiAqXG4gKiAvLyB1bnJlZ2lzdGVyIHlvdXIgc2VydmljZVxuICogdGhpcy56ZXJvY29uZi51bnJlZ2lzdGVyKCdfaHR0cC5fdGNwLicsICdsb2NhbC4nLCAnQmVjdmVydFxcJ3MgaVBhZCcpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWmVyb2NvbmYnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi16ZXJvY29uZicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy56ZXJvY29uZicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYmVjdmVydC9jb3Jkb3ZhLXBsdWdpbi16ZXJvY29uZicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBaZXJvY29uZiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhpcyBkZXZpY2UncyBob3N0bmFtZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SG9zdG5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUHVibGlzaGVzIGEgbmV3IHNlcnZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd9IFNlcnZpY2UgdHlwZSBuYW1lLCBlLmcuIFwiX2h0dHAuX3RjcFwiLlxuICAgKiBAcGFyYW0gZG9tYWluIHtzdHJpbmd9IERvbWFpbiBzY29wZSBvZiB0aGUgc2VydmljZSwgdHlwaWNhbGx5IFwibG9jYWwuXCIuXG4gICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFVucXVhbGlmaWVkIHNlcnZpY2UgaW5zdGFuY2UgbmFtZS5cbiAgICogQHBhcmFtIHBvcnQge251bWJlcn0gTG9jYWwgcG9ydCBvbiB3aGljaCB0aGUgc2VydmljZSBydW5zLlxuICAgKiBAcGFyYW0gdHh0UmVjb3JkIHthbnl9IEFyYml0cmFyeSBrZXkvdmFsdWUgcGFpcnMgZGVzY3JpYmluZyB0aGUgc2VydmljZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8WmVyb2NvbmZSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlZ2lzdGVyZWQgc2VydmljZS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCBkb21haW46IHN0cmluZywgbmFtZTogc3RyaW5nLCBwb3J0OiBudW1iZXIsIHR4dFJlY29yZDogYW55KTogUHJvbWlzZTxaZXJvY29uZlJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyBhIHNlcnZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd9IFNlcnZpY2UgdHlwZSBuYW1lLCBlLmcuIFwiX2h0dHAuX3RjcFwiLlxuICAgKiBAcGFyYW0gZG9tYWluIHtzdHJpbmd9IERvbWFpbiBzY29wZSBvZiB0aGUgc2VydmljZSwgdHlwaWNhbGx5IFwibG9jYWwuXCIuXG4gICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFVucXVhbGlmaWVkIHNlcnZpY2UgaW5zdGFuY2UgbmFtZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVucmVnaXN0ZXIodHlwZTogc3RyaW5nLCBkb21haW46IHN0cmluZywgbmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGFsbCBwdWJsaXNoZWQgc2VydmljZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgd2F0Y2hpbmcgZm9yIHNlcnZpY2VzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHR5cGUge3N0cmluZ30gU2VydmljZSB0eXBlIG5hbWUsIGUuZy4gXCJfaHR0cC5fdGNwXCIuXG4gICAqIEBwYXJhbSBkb21haW4ge3N0cmluZ30gRG9tYWluIHNjb3BlIG9mIHRoZSBzZXJ2aWNlLCB0eXBpY2FsbHkgXCJsb2NhbC5cIi5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8WmVyb2NvbmZSZXN1bHQ+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBvZiBlYWNoIHNlcnZpY2UgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bndhdGNoJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICB3YXRjaCh0eXBlOiBzdHJpbmcsIGRvbWFpbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxaZXJvY29uZlJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB3YXRjaGluZyBmb3Igc2VydmljZXMgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfSBTZXJ2aWNlIHR5cGUgbmFtZSwgZS5nLiBcIl9odHRwLl90Y3BcIi5cbiAgICogQHBhcmFtIGRvbWFpbiB7c3RyaW5nfSBEb21haW4gc2NvcGUgb2YgdGhlIHNlcnZpY2UsIHR5cGljYWxseSBcImxvY2FsLlwiLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW53YXRjaCh0eXBlOiBzdHJpbmcsIGRvbWFpbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc2VydmljZSBicm93c2VyIGFuZCBzdG9wcyB3YXRjaGluZy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZS1pbml0aWFsaXplcyB0aGUgcGx1Z2luIHRvIGNsZWFuIHNlcnZpY2UgJiBicm93c2VyIHN0YXRlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVJbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogRmFtaWx5IG9mIGFkZHJlc3NlcyB0byByZWdpc3RlcjogaXB2NCwgaXB2NiBvciBhbnkuXG4gICAqL1xuICByZWdpc3RlckFkZHJlc3NGYW1pbHk6ICdpcHY0JyB8ICdpcHY2JyB8ICdhbnknO1xuICAvKipcbiAgICogRmFtaWx5IG9mIGFkZHJlc3NlcyB0byB3YXRjaCBmb3I6IGlwdjQsIGlwdjYgb3IgYW55LlxuICAgKi9cbiAgd2F0Y2hBZGRyZXNzRmFtaWx5OiAnaXB2NCcgfCAnaXB2NicgfCAnYW55Jztcbn1cbiJdfQ==