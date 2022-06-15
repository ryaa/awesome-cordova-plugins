import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var PowerOptimization = /** @class */ (function (_super) {
    __extends(PowerOptimization, _super);
    function PowerOptimization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerOptimization.prototype.IsIgnoringBatteryOptimizations = function () { return cordova(this, "IsIgnoringBatteryOptimizations", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestOptimizations = function () { return cordova(this, "RequestOptimizations", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestOptimizationsMenu = function () { return cordova(this, "RequestOptimizationsMenu", { "sync": true }, arguments); };
    PowerOptimization.prototype.IsIgnoringDataSaver = function () { return cordova(this, "IsIgnoringDataSaver", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestDataSaverMenu = function () { return cordova(this, "RequestDataSaverMenu", { "sync": true }, arguments); };
    PowerOptimization.prototype.HaveProtectedAppsCheck = function () { return cordova(this, "HaveProtectedAppsCheck", { "sync": true }, arguments); };
    PowerOptimization.prototype.ProtectedAppCheck = function () { return cordova(this, "ProtectedAppCheck", { "sync": true }, arguments); };
    PowerOptimization.pluginName = "PowerOptimization";
    PowerOptimization.plugin = "cordova-plugin-power-optimization";
    PowerOptimization.pluginRef = "cordova.plugins.PowerOptimization";
    PowerOptimization.repo = "https://github.com/snt1017/cordova-plugin-power-optimization";
    PowerOptimization.platforms = ["Android"];
    PowerOptimization.decorators = [
        { type: Injectable }
    ];
    return PowerOptimization;
}(AwesomeCordovaNativePlugin));
export { PowerOptimization };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcG93ZXItb3B0aW1pemF0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTRCckQscUNBQTBCOzs7O0lBUS9ELDBEQUE4QjtJQVU5QixnREFBb0I7SUFVcEIsb0RBQXdCO0lBVXhCLCtDQUFtQjtJQVVuQixnREFBb0I7SUFVcEIsa0RBQXNCO0lBVXRCLDZDQUFpQjs7Ozs7OztnQkFyRWxCLFVBQVU7OzRCQTVCWDtFQTZCdUMsMEJBQTBCO1NBQXBELGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG4vKipcbiAqIEBuYW1lIFBvd2VyIE9wdGltaXphdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBBbmRyb2lkIEN1c3RvbSBSb21zIG1hZGUgc29tZXRpbWVzIHlvdXIgYXBwcyB1bmZ1bmN0aW9uYWwgZHVlIHRvIGJlaW5nIGtpbGxlZCBpbiB0aGUgYmFja2dyb3VuZCwgbm90aWZpY2F0aW9uIG1lc3NhZ2VzIGRvIG5vdCBhcHBlYXJpbmcgb3IgeW91ciBzZXJ2aWNlcyBiZWluZyBraWxsZWQgYnkgYWdyZXNzaXZlIHBvd2VyIHNhdmluZyBtb2RlLlxuICogVGhlIFBvd2VyIE9wdGltaXphdGlvbiBwbHVnaW4gZ2l2ZSB5b3UgYW5kcm9pZCBQb3dlck1hbmFnZXIgbWV0aG9kcyB3aXRoIGNvcmRvdmEuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBvd2VyT3B0aW1pemF0aW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3Bvd2VyLW9wdGltaXphdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcG93ZXJPcHRpbWl6YXRpb246IFBvd2VyT3B0aW1pemF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnBvd2VyT3B0aW1pemF0aW9uLklzSWdub3JpbmdCYXR0ZXJ5T3B0aW1pemF0aW9ucygpXG4gKiAgIC50aGVuKG9uU3VjY2VzcylcbiAqICAgLmNhdGNoKG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1Bvd2VyT3B0aW1pemF0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlBvd2VyT3B0aW1pemF0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zbnQxMDE3L2NvcmRvdmEtcGx1Z2luLXBvd2VyLW9wdGltaXphdGlvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvd2VyT3B0aW1pemF0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGJhdHRlcnkgb3B0aW1pemF0aW9uIGlzIGlnbm9yaW5nXG4gICAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBjaGVjayBodHRwczovL2dpdGh1Yi5jb20vc250MTAxNy9jb3Jkb3ZhLXBsdWdpbi1wb3dlci1vcHRpbWl6YXRpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBJc0lnbm9yaW5nQmF0dGVyeU9wdGltaXphdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc29uIHRvIGlnbm9yZSBvcHRpbWl6YXRpb25zOlxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgUmVxdWVzdE9wdGltaXphdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIEdvIHRvIGJhdHRlcnkgb3B0aW1pemF0aW9ucyBjb25maWd1cmF0aW9ucyBtZW51OlxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgUmVxdWVzdE9wdGltaXphdGlvbnNNZW51KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiBoYXZlIGFueSBkYXRhIHJlc3RyaWN0aW9ucyBpbiBiYWNrZ3JvdW5kOlxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgSXNJZ25vcmluZ0RhdGFTYXZlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogR28gdG8gZGF0YSByZXN0cmljdGlvbnMgaW4gYmFja2dyb3VuZCBjb25maWd1cmF0aW9ucyBtZW51OlxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgUmVxdWVzdERhdGFTYXZlck1lbnUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGhhdmUgYW5vdGhlciBiYXR0ZXJ5IHJlc3RyaWN0aW9uIGlzIHByZXNlbnQgaW50byBwaG9uZSAobGlrZSBodWF3ZWksIHhpYW9taSwgZXRjKTpcbiAgICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIGNoZWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9zbnQxMDE3L2NvcmRvdmEtcGx1Z2luLXBvd2VyLW9wdGltaXphdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIEhhdmVQcm90ZWN0ZWRBcHBzQ2hlY2soKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIEdvIHRvIGNvbmZpZ3VyYXRpb25zIG1lbnUgaWYgYW5vdGhlciBiYXR0ZXJ5IHJlc3RyaWN0aW9uIGlzIHByZXNlbnQgaW50byBwaG9uZSAobGlrZSBodWF3ZWksIHhpYW9taSwgZXRjKS4gWW91IGNhbiBzZW5kIHRydWUgaW50byBwYXJhbXMgaWYgeW91IHdhbnQgdG8gZm9yY2Ugc2hvdyB0aGUgbWVudSAoaXMgb25seSBzaG93IHRoZSBmaXN0IHRpbWUgd2l0aG91dCBwYXJhbXMpOlxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgUHJvdGVjdGVkQXBwQ2hlY2soKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==