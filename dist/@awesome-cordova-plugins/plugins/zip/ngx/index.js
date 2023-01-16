import { __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var Zip = /** @class */ (function (_super) {
    __extends(Zip, _super);
    function Zip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zip.prototype.unzip = function (sourceZip, destFolder, onProgress) { return cordova(this, "unzip", {}, arguments); };
    Zip.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Zip, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Zip.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Zip });
    Zip.pluginName = "Zip";
    Zip.plugin = "cordova-plugin-zip";
    Zip.pluginRef = "zip";
    Zip.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    Zip.platforms = ["Android", "iOS"];
    Zip = __decorate([], Zip);
    return Zip;
}(AwesomeCordovaNativePlugin));
export { Zip };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Zip, decorators: [{
            type: Injectable
        }], propDecorators: { unzip: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemlwL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUE0QmxCLHVCQUEwQjs7OztJQVNqRCxtQkFBSyxhQUFDLFNBQWlCLEVBQUUsVUFBa0IsRUFBRSxVQUFxQjtxR0FUdkQsR0FBRzt5R0FBSCxHQUFHOzs7Ozs7SUFBSCxHQUFHLGtCQUFILEdBQUc7Y0E5QmhCO0VBOEJ5QiwwQkFBMEI7U0FBdEMsR0FBRzs0RkFBSCxHQUFHO2tCQURmLFVBQVU7OEJBVVQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBDb3Jkb3ZhLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBaaXBcbiAqIEBkZXNjcmlwdGlvblxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0byB1bnppcCBmaWxlcyBpbiBBbmRyb2lkIGFuZCBpT1MuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFppcCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy96aXAvbngnXG4gKiAuLi5cbiAqXG4gKiBjb25zdCByZXN1bHQgPSBhd2FpdCBaaXAudW56aXAoJ3BhdGgvdG8vc291cmNlLnppcCcsICdwYXRoL3RvL2Rlc3QnLCAocHJvZ3Jlc3MpID0+XG4gKiAgICAgY29uc29sZS5sb2coJ1VuemlwcGluZywgJyArIE1hdGgucm91bmQoKHByb2dyZXNzLmxvYWRlZCAvIHByb2dyZXNzLnRvdGFsKSAqIDEwMCkgKyAnJScpXG4gKiApO1xuICpcbiAqIGlmKHJlc3VsdCA9PT0gMCkgY29uc29sZS5sb2coJ1NVQ0NFU1MnKTtcbiAqIGlmKHJlc3VsdCA9PT0gLTEpIGNvbnNvbGUubG9nKCdGQUlMRUQnKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdaaXAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi16aXAnLFxuICBwbHVnaW5SZWY6ICd6aXAnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01vYmlsZUNocm9tZUFwcHMvY29yZG92YS1wbHVnaW4temlwJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFppcCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEV4dHJhY3RzIGZpbGVzIGZyb20gYSBaSVAgYXJjaGl2ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlWmlwICBTb3VyY2UgWklQIGZpbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc3RGb2xkZXIgRGVzdGluYXRpb24gZm9sZGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uUHJvZ3Jlc3MgIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBvbiBwcm9ncmVzcyB1cGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgbnVtYmVyLiAwIGlzIHN1Y2Nlc3MsIC0xIGlzIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuemlwKHNvdXJjZVppcDogc3RyaW5nLCBkZXN0Rm9sZGVyOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=