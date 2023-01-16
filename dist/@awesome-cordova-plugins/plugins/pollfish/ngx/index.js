import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Pollfish = /** @class */ (function (_super) {
    __extends(Pollfish, _super);
    function Pollfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pollfish.prototype.init = function (releaseMode, rewardMode, apiKey, position, padding, requestUUID, offerwallMode) { return cordova(this, "init", {}, arguments); };
    Pollfish.prototype.initWithUserAttributes = function (releaseMode, rewardMode, apiKey, position, padding, requestUUID, offerwallMode, userAttributes) { return cordova(this, "initWithUserAttributes", {}, arguments); };
    Pollfish.prototype.showPollfish = function () { return cordova(this, "showPollfish", {}, arguments); };
    Pollfish.prototype.hidePollfish = function () { return cordova(this, "hidePollfish", {}, arguments); };
    Pollfish.prototype.setEventCallback = function (eventName, callback) { return cordova(this, "setEventCallback", { "sync": true }, arguments); };
    Object.defineProperty(Pollfish.prototype, "EventListener", {
        get: function () { return cordovaPropertyGet(this, "EventListener"); },
        set: function (value) { cordovaPropertySet(this, "EventListener", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pollfish.prototype, "Position", {
        get: function () { return cordovaPropertyGet(this, "Position"); },
        set: function (value) { cordovaPropertySet(this, "Position", value); },
        enumerable: false,
        configurable: true
    });
    Pollfish.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Pollfish, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Pollfish.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Pollfish });
    Pollfish.pluginName = "Pollfish";
    Pollfish.plugin = "com.pollfish.cordova_plugin";
    Pollfish.pluginRef = "pollfishplugin";
    Pollfish.repo = "https://github.com/pollfish/cordova-plugin-pollfish";
    Pollfish.platforms = ["Android", "iOS"];
    Pollfish = __decorate([], Pollfish);
    return Pollfish;
}(AwesomeCordovaNativePlugin));
export { Pollfish };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Pollfish, decorators: [{
            type: Injectable
        }], propDecorators: { EventListener: [], Position: [], init: [], initWithUserAttributes: [], showPollfish: [], hidePollfish: [], setEventCallback: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcG9sbGZpc2gvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7OztJQWtFL0UsNEJBQTBCOzs7O0lBa0N0RCx1QkFBSSxhQUNGLFdBQW9CLEVBQ3BCLFVBQW1CLEVBQ25CLE1BQWMsRUFDZCxRQUFnQixFQUNoQixPQUFlLEVBQ2YsV0FBbUIsRUFDbkIsYUFBc0I7SUFtQnhCLHlDQUFzQixhQUNwQixXQUFvQixFQUNwQixVQUFtQixFQUNuQixNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsT0FBZSxFQUNmLFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLGNBQWtCO0lBVXBCLCtCQUFZO0lBU1osK0JBQVk7SUFjWixtQ0FBZ0IsYUFBQyxTQUFpQixFQUFFLFFBQThCOzBCQW5HbEUsbUNBQWE7Ozs7OzswQkFXYiw4QkFBUTs7Ozs7OzBHQWJHLFFBQVE7OEdBQVIsUUFBUTs7Ozs7O0lBQVIsUUFBUSxrQkFBUixRQUFRO21CQW5FckI7RUFtRThCLDBCQUEwQjtTQUEzQyxRQUFROzRGQUFSLFFBQVE7a0JBRHBCLFVBQVU7OEJBR1QsYUFBYSxNQVdiLFFBQVEsTUFxQlIsSUFBSSxNQTBCSixzQkFBc0IsTUFrQnRCLFlBQVksTUFTWixZQUFZLE1BY1osZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFBvbGxmaXNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBvbGxmaXNoIElvbmljIE5hdGl2ZSBwbHVnaW4gd3JhcHBlclxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBQb2xsZmlzaCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9wb2xsZmlzaC9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvbGxmaXNoOiBQb2xsZmlzaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5wb2xsZmlzaC5pbml0KGZhbHNlLCBmYWxzZSwgJ1lPVVJfQVBJX0tFWScsIDEsIDgsICdSRVFVRVNUX1VVSUQnLCBmYWxzZSk7XG4gKlxuICogdGhpcy5wb2xsZmlzaC5pbml0V2l0aFVzZXJBdHRyaWJ1dGVzKGZhbHNlLCBmYWxzZSwgJ1lPVVJfQVBJX0tFWScsIDEsIDgsICdSRVFVRVNUX1VVSUQnLCBmYWxzZSwge1xuICogICdnZW5kZXInOiAnMScsXG4gKiAgLi4uXG4gKiB9KTtcbiAqXG4gKiB0aGlzLnBvbGxmaXNoLnNob3dQb2xsZmlzaCgpO1xuICpcbiAqIHRoaXMucG9sbGZpc2guaGlkZVBvbGxmaXNoKCk7XG4gKlxuICogLy8gRXZlbnQgTGlzdGVuZXJzXG4gKlxuICogdGhpcy5wb2xsZmlzaC5zZXRFdmVudENhbGxiYWNrKHBvbGxmaXNoLkV2ZW50TGlzdGVuZXIuT25Qb2xsZmlzaFN1cnZleVJlY2VpdmVkLCAoc3VydmV5SW5mbykgPT4ge1xuICogIGNvbnNvbGUubG9nKFwiU3VydmV5IFJlY2VpdmVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHN1cnZleUluZm8pKTtcbiAqIH0pO1xuICpcbiAqIHRoaXMucG9sbGZpc2guc2V0RXZlbnRDYWxsYmFjayhwb2xsZmlzaC5FdmVudExpc3RlbmVyLk9uUG9sbGZpc2hTdXJ2ZXlDb21wbGV0ZWQsIChyZXN1bHQpID0+IHtcbiAqICBjb25zb2xlLmxvZyhcIlN1cnZleSBDb21wbGV0ZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3VydmV5SW5mbykpO1xuICogfSk7XG4gKlxuICogdGhpcy5wb2xsZmlzaC5zZXRFdmVudENhbGxiYWNrKHBvbGxmaXNoLkV2ZW50TGlzdGVuZXIuT25Qb2xsZmlzaFVzZXJOb3RFbGlnaWJsZSwgKF8pID0+IHtcbiAqICBjb25zb2xlLmxvZyhcIlBvbGxmaXNoIFVzZXIgTm90IEVsaWdpYmxlXCIpO1xuICogfSk7XG4gKlxuICogdGhpcy5wb2xsZmlzaC5zZXRFdmVudENhbGxiYWNrKHBvbGxmaXNoLkV2ZW50TGlzdGVuZXIuT25Qb2xsZmlzaFN1cnZleU5vdEF2YWlsYWJsZSwgKF8pID0+IHtcbiAqICBjb25zb2xlLmxvZyhcIlBvbGxmaXNoIFN1cnZleSBub3QgYXZhaWxhYmxlXCIpO1xuICogfSk7XG4gKlxuICogdGhpcy5wb2xsZmlzaC5zZXRFdmVudENhbGxiYWNrKHBvbGxmaXNoLkV2ZW50TGlzdGVuZXIuT25Qb2xsZmlzaE9wZW5lZCwgKF8pID0+IHtcbiAqICBjb25zb2xlLmxvZyhcIlBvbGxmaXNoIFN1cnZleSBwYW5lbCBpcyBvcGVuXCIpO1xuICogfSk7XG4gKlxuICogdGhpcy5wb2xsZmlzaC5zZXRFdmVudENhbGxiYWNrKHBvbGxmaXNoLkV2ZW50TGlzdGVuZXIuT25Qb2xsZmlzaENsb3NlZCwgKF8pID0+IHtcbiAqICBjb25zb2xlLmxvZyhcIlBvbGxmaXNoIFN1cnZleSBwYW5lbCBpcyBjbG9zZWRcIik7XG4gKiB9KTtcbiAqXG4gKiB0aGlzLnBvbGxmaXNoLnNldEV2ZW50Q2FsbGJhY2socG9sbGZpc2guRXZlbnRMaXN0ZW5lci5PblBvbGxmaXNoVXNlclJlamVjdGVkU3VydmV5LCAoXykgPT4ge1xuICogIGNvbnNvbGUubG9nKFwiUG9sbGZpc2ggVXNlciBSZWplY3RlZCBTdXJ2ZXlcIik7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdQb2xsZmlzaCcsXG4gIHBsdWdpbjogJ2NvbS5wb2xsZmlzaC5jb3Jkb3ZhX3BsdWdpbicsXG4gIHBsdWdpblJlZjogJ3BvbGxmaXNocGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wb2xsZmlzaC9jb3Jkb3ZhLXBsdWdpbi1wb2xsZmlzaCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2xsZmlzaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEV2ZW50TGlzdGVuZXI6IHtcbiAgICBPblBvbGxmaXNoQ2xvc2VkOiBzdHJpbmc7XG4gICAgT25Qb2xsZmlzaE9wZW5lZDogc3RyaW5nO1xuICAgIE9uUG9sbGZpc2hTdXJ2ZXlSZWNlaXZlZDogc3RyaW5nO1xuICAgIE9uUG9sbGZpc2hTdXJ2ZXlDb21wbGV0ZWQ6IHN0cmluZztcbiAgICBPblBvbGxmaXNoVXNlck5vdEVsaWdpYmxlOiBzdHJpbmc7XG4gICAgT25Qb2xsZmlzaFVzZXJSZWplY3RlZFN1cnZleTogc3RyaW5nO1xuICAgIE9uUG9sbGZpc2hTdXJ2ZXlOb3RBdmFpbGFibGU6IHN0cmluZztcbiAgfTtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUG9zaXRpb246IHtcbiAgICBUT1BfTEVGVDogbnVtYmVyO1xuICAgIFRPUF9SSUdIVDogbnVtYmVyO1xuICAgIE1JRERMRV9MRUZUOiBudW1iZXI7XG4gICAgTUlERExFX1JJR0hUOiBudW1iZXI7XG4gICAgQk9UVE9NX0xFRlQ6IG51bWJlcjtcbiAgICBCT1RUT01fUklHSFQ6IG51bWJlcjtcbiAgfTtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gaW5pdCBQb2xsZmlzaFxuICAgKlxuICAgKiBAcGFyYW0gcmVsZWFzZU1vZGUge2Jvb2xlYW59XG4gICAqIEBwYXJhbSByZXdhcmRNb2RlIHtib29sZWFufVxuICAgKiBAcGFyYW0gYXBpS2V5IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwb3NpdGlvbiB7bnVtYmVyfVxuICAgKiBAcGFyYW0gcGFkZGluZyB7bnVtYmVyfVxuICAgKiBAcGFyYW0gcmVxdWVzdFVVSUQge3N0cmluZ31cbiAgICogQHBhcmFtIG9mZmVyd2FsbE1vZGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXQoXG4gICAgcmVsZWFzZU1vZGU6IGJvb2xlYW4sXG4gICAgcmV3YXJkTW9kZTogYm9vbGVhbixcbiAgICBhcGlLZXk6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogbnVtYmVyLFxuICAgIHBhZGRpbmc6IG51bWJlcixcbiAgICByZXF1ZXN0VVVJRDogc3RyaW5nLFxuICAgIG9mZmVyd2FsbE1vZGU6IGJvb2xlYW5cbiAgKTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gaW5pdCBQb2xsZmlzaCB3aXRoIHVzZXIgYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcGFyYW0gcmVsZWFzZU1vZGUge2Jvb2xlYW59XG4gICAqIEBwYXJhbSByZXdhcmRNb2RlIHtib29sZWFufVxuICAgKiBAcGFyYW0gYXBpS2V5IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwb3NpdGlvbiB7bnVtYmVyfVxuICAgKiBAcGFyYW0gcGFkZGluZyB7bnVtYmVyfVxuICAgKiBAcGFyYW0gcmVxdWVzdFVVSUQge3N0cmluZ31cbiAgICogQHBhcmFtIG9mZmVyd2FsbE1vZGUge2Jvb2xlYW59XG4gICAqIEBwYXJhbSB1c2VyQXR0cmlidXRlcyB7SnNvbn1cbiAgICovXG5cbiAgQENvcmRvdmEoKVxuICBpbml0V2l0aFVzZXJBdHRyaWJ1dGVzKFxuICAgIHJlbGVhc2VNb2RlOiBib29sZWFuLFxuICAgIHJld2FyZE1vZGU6IGJvb2xlYW4sXG4gICAgYXBpS2V5OiBzdHJpbmcsXG4gICAgcG9zaXRpb246IG51bWJlcixcbiAgICBwYWRkaW5nOiBudW1iZXIsXG4gICAgcmVxdWVzdFVVSUQ6IHN0cmluZyxcbiAgICBvZmZlcndhbGxNb2RlOiBib29sZWFuLFxuICAgIHVzZXJBdHRyaWJ1dGVzOiB7fVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gbWFudWFsbHkgc2hvdyBQb2xsZmlzaFxuICAgKi9cblxuICBAQ29yZG92YSgpXG4gIHNob3dQb2xsZmlzaCgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gbWFudWFsbHkgaGlkZSBQb2xsZmlzaFxuICAgKi9cblxuICBAQ29yZG92YSgpXG4gIGhpZGVQb2xsZmlzaCgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gc2V0IGV2ZW50IGNhbGxiYWNrc1xuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cblxuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChpbmZvPzogYW55KSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=