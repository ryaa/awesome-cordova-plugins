import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AES256 = /** @class */ (function (_super) {
    __extends(AES256, _super);
    function AES256() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AES256.prototype.encrypt = function (secureKey, secureIV, data) { return cordova(this, "encrypt", {}, arguments); };
    AES256.prototype.decrypt = function (secureKey, secureIV, data) { return cordova(this, "decrypt", {}, arguments); };
    AES256.prototype.generateSecureKey = function (password) { return cordova(this, "generateSecureKey", {}, arguments); };
    AES256.prototype.generateSecureIV = function (password) { return cordova(this, "generateSecureIV", {}, arguments); };
    AES256.pluginName = "AES256";
    AES256.plugin = "cordova-plugin-aes256-encryption";
    AES256.pluginRef = "cordova.plugins.AES256";
    AES256.repo = "https://github.com/Ideas2IT/cordova-aes256";
    AES256.platforms = ["Android", "iOS"];
    AES256.install = "ionic cordova plugin add cordova-plugin-aes256-encryption";
    AES256.decorators = [
        { type: Injectable }
    ];
    return AES256;
}(AwesomeCordovaNativePlugin));
export { AES256 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWVzLTI1Ni9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUF1RGhFLDBCQUEwQjs7OztJQVVwRCx3QkFBTyxhQUFDLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxJQUFZO0lBYXpELHdCQUFPLGFBQUMsU0FBaUIsRUFBRSxRQUFnQixFQUFFLElBQVk7SUFZekQsa0NBQWlCLGFBQUMsUUFBZ0I7SUFZbEMsaUNBQWdCLGFBQUMsUUFBZ0I7Ozs7Ozs7O2dCQWhEbEMsVUFBVTs7aUJBdkRYO0VBd0Q0QiwwQkFBMEI7U0FBekMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQUVTMjU2XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgY29yZG92YSBpb25pYyBwbHVnaW4gYWxsb3dzIHlvdSB0byBwZXJmb3JtIEFFUyAyNTYgZW5jcnlwdGlvbiBhbmQgZGVjcnlwdGlvbiBvbiB0aGUgcGxhaW4gdGV4dC5cbiAqIEl0J3MgYSBjcm9zcy1wbGF0Zm9ybSBwbHVnaW4gd2hpY2ggc3VwcG9ydHMgYm90aCBBbmRyb2lkIGFuZCBpT1MuXG4gKiBUaGUgZW5jcnlwdGlvbiBhbmQgZGVjcnlwdGlvbiBhcmUgcGVyZm9ybWVkIG9uIHRoZSBkZXZpY2UgbmF0aXZlIGxheWVyIHNvIHRoYXQgdGhlIHBlcmZvcm1hbmNlIGlzIG11Y2ggZmFzdGVyLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBRVMyNTYgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYWVzLTI1Ni9uZ3gnO1xuICpcbiAqIHByaXZhdGUgc2VjdXJlS2V5OiBzdHJpbmc7XG4gKiBwcml2YXRlIHNlY3VyZUlWOiBzdHJpbmc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhZXMyNTY6IEFFUzI1Nikge1xuICogICAgdGhpcy5nZW5lcmF0ZVNlY3VyZUtleUFuZElWKCk7IC8vIFRvIGdlbmVyYXRlIHRoZSByYW5kb20gc2VjdXJlS2V5IGFuZCBzZWN1cmVJVlxuICogfVxuICpcbiAqIC4uLlxuICpcbiAqIGFzeW5jIGdlbmVyYXRlU2VjdXJlS2V5QW5kSVYoKSB7XG4gKiAgICB0aGlzLnNlY3VyZUtleSA9IGF3YWl0IHRoaXMuYWVzMjU2LmdlbmVyYXRlU2VjdXJlS2V5KCdyYW5kb20gcGFzc3dvcmQgMTIzNDUnKTsgLy8gUmV0dXJucyBhIDMyIGJ5dGVzIHN0cmluZ1xuICogICAgdGhpcy5zZWN1cmVJViA9IGF3YWl0IHRoaXMuYWVzMjU2LmdlbmVyYXRlU2VjdXJlSVYoJ3JhbmRvbSBwYXNzd29yZCAxMjM0NScpOyAvLyBSZXR1cm5zIGEgMTYgYnl0ZXMgc3RyaW5nXG4gKiB9XG4gKlxuICogdGhpcy5hZXMyNTYuZW5jcnlwdCh0aGlzLnNlY3VyZUtleSwgdGhpcy5zZWN1cmVJViwgJ3Rlc3RkYXRhJylcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdFbmNyeXB0ZWQgRGF0YTogJyxyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiB0aGlzLmFlczI1Ni5kZWNyeXB0KHRoaXMuc2VjdXJlS2V5LCB0aGlzLnNlY3VyZUlWLCAnZW5jcnlwdGVkRGF0YScpXG4gKiAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZygnRGVjcnlwdGVkIERhdGEgOiAnLHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqXG4gKiB0aGlzLmFlczI1Ni5nZW5lcmF0ZVNlY3VyZUtleSgncmFuZG9tIHBhc3N3b3JkIDEyMzQ1JylcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdTZWN1cmUgS2V5IDogJyxyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKlxuICogdGhpcy5hZXMyNTYuZ2VuZXJhdGVTZWN1cmVJVigncmFuZG9tIHBhc3N3b3JkIDEyMzQ1JylcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdTZWN1cmUgSVYgOiAnLHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FFUzI1NicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFlczI1Ni1lbmNyeXB0aW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkFFUzI1NicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSWRlYXMySVQvY29yZG92YS1hZXMyNTYnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1hZXMyNTYtZW5jcnlwdGlvbicsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFFUzI1NiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gdXNlZCB0byBwZXJmb3JtIHRoZSBhZXMyNTYgZW5jcnlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VjdXJlS2V5IEEgMzIgYnl0ZXMgc3RyaW5nLCB3aGljaCB3aWxsIHVzZWQgYXMgaW5wdXQga2V5IGZvciBBRVMyNTYgZW5jcnlwdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlY3VyZUlWIEEgMTYgYnl0ZXMgc3RyaW5nLCB3aGljaCB3aWxsIHVzZWQgYXMgaW5pdGlhbCB2ZWN0b3IgZm9yIEFFUzI1NiBlbmNyeXB0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBBIHN0cmluZyB3aGljaCB3aWxsIGJlIGVuY3J5cHRlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gZW5jcnlwdGlvbiBoYXBwZW5zLiBUaGUgc3VjY2VzcyByZXNwb25zZSB3aWxsIHJldHVybnMgZW5jcnlwdGVkIGRhdGEuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY3J5cHQoc2VjdXJlS2V5OiBzdHJpbmcsIHNlY3VyZUlWOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gdXNlZCB0byBwZXJmb3JtIHRoZSBhZXMyNTYgZGVjcnlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VjdXJlS2V5IEEgMzIgYnl0ZXMgc3RyaW5nLCB3aGljaCB3aWxsIHVzZWQgYXMgaW5wdXQga2V5IGZvciBBRVMyNTYgZGVjcnlwdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlY3VyZUlWIEEgMTYgYnl0ZXMgc3RyaW5nLCB3aGljaCB3aWxsIHVzZWQgYXMgaW5pdGlhbCB2ZWN0b3IgZm9yIEFFUzI1NiBkZWNyeXB0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBBbiBBRVMyNTYgZW5jcnlwdGVkIGRhdGEgd2hpY2ggd2lsbCBiZSBkZWNyeXB0ZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBkZWNyeXB0aW9uIGhhcHBlbnMuIFRoZSBzdWNjZXNzIHJlc3BvbnNlIHdpbGwgcmV0dXJucyBkZWNyeXB0ZWQgZGF0YS5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVjcnlwdChzZWN1cmVLZXk6IHN0cmluZywgc2VjdXJlSVY6IHN0cmluZywgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB1c2VkIHRvIGdlbmVyYXRlIGEgc2VjdXJlIGtleSBiYXNlZCBvbiBhbiBwYXNzd29yZC4gUGVyZmVjdCBpZiB5b3Ugd2FudCB0byBkZWxlZ2F0ZSB0aGUga2V5IGdlbmVyYXRpb24gZm9yIGVuY3J5cHRpb24gdG8gdGhlIHBsdWdpbi5cbiAgICogTWFrZSBzdXJlIHRvIHNhdmUgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzIGZ1bmN0aW9uIHNvbWV3aGVyZSBzbyB5b3VyIGVuY3J5cHRlZCBkYXRhIGNhbiBiZSBkZWNyeXB0ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIEEgcmFuZG9tIHN0cmluZywgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIGlucHV0IGZvciBhIFBCS0RGMiBmdW5jdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4ga2V5IGlzIGdlbmVyYXRlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2VuZXJhdGVTZWN1cmVLZXkocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gdXNlZCB0byBnZW5lcmF0ZSBhIHNlY3VyZSBJViBiYXNlZCBvbiBhbiBwYXNzd29yZC4gUGVyZmVjdCBpZiB5b3Ugd2FudCB0byBkZWxlZ2F0ZSB0aGUgSVYgZ2VuZXJhdGlvbiBmb3IgZW5jcnlwdGlvbiB0byB0aGUgcGx1Z2luLlxuICAgKiBNYWtlIHN1cmUgdG8gc2F2ZSB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoaXMgZnVuY3Rpb24gc29tZXdoZXJlIHNvIHlvdXIgZW5jcnlwdGVkIGRhdGEgY2FuIGJlIGRlY3J5cHRlZCBpbiB0aGUgZnV0dXJlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgQSByYW5kb20gc3RyaW5nLCB3aGljaCB3aWxsIGJlIHVzZWQgYXMgaW5wdXQgZm9yIGEgUEJLREYyIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBJViBpcyBnZW5lcmF0ZWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdlbmVyYXRlU2VjdXJlSVYocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=