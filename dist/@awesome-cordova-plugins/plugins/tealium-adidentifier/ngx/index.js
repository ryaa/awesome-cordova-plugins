import { __decorate, __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TealiumAdIdentifier = /** @class */ (function (_super) {
    __extends(TealiumAdIdentifier, _super);
    function TealiumAdIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifier.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifier.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifier.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TealiumAdIdentifier, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    TealiumAdIdentifier.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TealiumAdIdentifier });
    TealiumAdIdentifier.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifier.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifier.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifier.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifier.platforms = ["Android", "iOS"];
    TealiumAdIdentifier.install = "";
    TealiumAdIdentifier = __decorate([], TealiumAdIdentifier);
    return TealiumAdIdentifier;
}(AwesomeCordovaNativePlugin));
export { TealiumAdIdentifier };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TealiumAdIdentifier, decorators: [{
            type: Injectable
        }], propDecorators: { setPersistent: [], setVolatile: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS1hZGlkZW50aWZpZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQWlDRix1Q0FBMEI7Ozs7SUFRakUsMkNBQWEsYUFBQyxZQUFvQjtJQVdsQyx5Q0FBVyxhQUFDLFlBQW9CO3FIQW5CckIsbUJBQW1CO3lIQUFuQixtQkFBbUI7Ozs7Ozs7SUFBbkIsbUJBQW1CLGtCQUFuQixtQkFBbUI7OEJBbENoQztFQWtDeUMsMEJBQTBCO1NBQXRELG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUQvQixVQUFVOzhCQVNULGFBQWEsTUFXYixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAcGFpZFxuICogQG5hbWUgVGVhbGl1bUFkSWRlbnRpZmllclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBkZXBlbmRzIG9uIHRoZSBbVGVhbGl1bSBDb3Jkb3ZhIFBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL3RlYWxpdW0vY29yZG92YS1wbHVnaW4pLiBXaXRob3V0IGl0LCB0aGlzIG1vZHVsZSB3aWxsIG5vdCBkbyBhbnl0aGluZy5cbiAqIE1ha2VzIHRoZSBJREZBIGFuZCBHb29nbGUgQWQgSWRlbnRpZmllciBhdmFpbGFibGUgaW4gdGhlIFRlYWxpdW0gZGF0YSBsYXllci5cbiAqIEB1c2FnZVxuICogYGBgXG4gKiBpbXBvcnQgeyBUZWFsaXVtQWRJZGVudGlmaWVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RlYWxpdW0tYWRpZGVudGlmaWVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRJZGVudGlmaWVyOiBUZWFsaXVtQWRJZGVudGlmaWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hZElkZW50aWZpZXIuc2V0UGVyc2lzdGVudChcIm1haW5cIik7XG4gKiB0aGlzLmFkSWRlbnRpZmllci5zZXRWb2xhdGlsZShcIm1haW5cIik7XG4gKlxuICogYGBgXG4gKi9cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdUZWFsaXVtQWRJZGVudGlmaWVyJyxcbiAgcGx1Z2luOiAndGVhbGl1bS1jb3Jkb3ZhLWFkaWRlbnRpZmllcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICd3aW5kb3cudGVhbGl1bUFkSWRlbnRpZmllcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWFsaXVtL2NvcmRvdmEtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVhbGl1bUFkSWRlbnRpZmllciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBhZCBpZGVudGlmaWVyIGluZm9ybWF0aW9uIGFzIHBlcnNpc3RlbnQgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFBlcnNpc3RlbnQoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgYWQgaWRlbnRpZmllciBpbmZvcm1hdGlvbiBhcyB2b2xhdGlsZSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Vm9sYXRpbGUoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19