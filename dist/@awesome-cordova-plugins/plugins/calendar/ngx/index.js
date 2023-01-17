import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calendar.prototype.hasReadWritePermission = function () { return cordova(this, "hasReadWritePermission", {}, arguments); };
    Calendar.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", {}, arguments); };
    Calendar.prototype.hasWritePermission = function () { return cordova(this, "hasWritePermission", {}, arguments); };
    Calendar.prototype.requestWritePermission = function () { return cordova(this, "requestWritePermission", {}, arguments); };
    Calendar.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", {}, arguments); };
    Calendar.prototype.requestReadWritePermission = function () { return cordova(this, "requestReadWritePermission", {}, arguments); };
    Calendar.prototype.createCalendar = function (nameOrOptions) { return cordova(this, "createCalendar", {}, arguments); };
    Calendar.prototype.deleteCalendar = function (name) { return cordova(this, "deleteCalendar", {}, arguments); };
    Calendar.prototype.getCalendarOptions = function () { return cordova(this, "getCalendarOptions", { "sync": true }, arguments); };
    Calendar.prototype.getCreateCalendarOptions = function () { return cordova(this, "getCreateCalendarOptions", { "sync": true }, arguments); };
    Calendar.prototype.createEvent = function (title, location, notes, startDate, endDate) { return cordova(this, "createEvent", {}, arguments); };
    Calendar.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { return cordova(this, "createEventWithOptions", {}, arguments); };
    Calendar.prototype.createEventInteractively = function (title, location, notes, startDate, endDate) { return cordova(this, "createEventInteractively", {}, arguments); };
    Calendar.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { return cordova(this, "createEventInteractivelyWithOptions", {}, arguments); };
    Calendar.prototype.findEvent = function (title, location, notes, startDate, endDate) { return cordova(this, "findEvent", {}, arguments); };
    Calendar.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options) { return cordova(this, "findEventWithOptions", {}, arguments); };
    Calendar.prototype.listEventsInRange = function (startDate, endDate) { return cordova(this, "listEventsInRange", { "platforms": ["Android"] }, arguments); };
    Calendar.prototype.listCalendars = function () { return cordova(this, "listCalendars", {}, arguments); };
    Calendar.prototype.findAllEventsInNamedCalendar = function (calendarName) { return cordova(this, "findAllEventsInNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { return cordova(this, "modifyEvent", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, filterOptions, newOptions) { return cordova(this, "modifyEventWithOptions", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.deleteEvent = function (title, location, notes, startDate, endDate) { return cordova(this, "deleteEvent", {}, arguments); };
    Calendar.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { return cordova(this, "deleteEventFromNamedCalendar", { "platforms": ["iOS"] }, arguments); };
    Calendar.prototype.deleteEventById = function (id, fromDate) { return cordova(this, "deleteEventById", {}, arguments); };
    Calendar.prototype.openCalendar = function (date) { return cordova(this, "openCalendar", {}, arguments); };
    Calendar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Calendar, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Calendar.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Calendar });
    Calendar.pluginName = "Calendar";
    Calendar.plugin = "cordova-plugin-calendar";
    Calendar.pluginRef = "plugins.calendar";
    Calendar.repo = "https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin";
    Calendar.platforms = ["Android", "iOS"];
    Calendar = __decorate([], Calendar);
    return Calendar;
}(AwesomeCordovaNativePlugin));
export { Calendar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: Calendar, decorators: [{
            type: Injectable
        }], propDecorators: { hasReadWritePermission: [], hasReadPermission: [], hasWritePermission: [], requestWritePermission: [], requestReadPermission: [], requestReadWritePermission: [], createCalendar: [], deleteCalendar: [], getCalendarOptions: [], getCreateCalendarOptions: [], createEvent: [], createEventWithOptions: [], createEventInteractively: [], createEventInteractivelyWithOptions: [], findEvent: [], findEventWithOptions: [], listEventsInRange: [], listCalendars: [], findAllEventsInNamedCalendar: [], modifyEvent: [], modifyEventWithOptions: [], deleteEvent: [], deleteEventFromNamedCalendar: [], deleteEventById: [], openCalendar: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FsZW5kYXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQXdGOUQsNEJBQTBCOzs7O0lBY3RELHlDQUFzQjtJQVV0QixvQ0FBaUI7SUFVakIscUNBQWtCO0lBVWxCLHlDQUFzQjtJQVV0Qix3Q0FBcUI7SUFVckIsNkNBQTBCO0lBVzFCLGlDQUFjLGFBQUMsYUFBcUM7SUFXcEQsaUNBQWMsYUFBQyxJQUFZO0lBWTNCLHFDQUFrQjtJQVlsQiwyQ0FBd0I7SUFleEIsOEJBQVcsYUFBQyxLQUFjLEVBQUUsUUFBaUIsRUFBRSxLQUFjLEVBQUUsU0FBZ0IsRUFBRSxPQUFjO0lBZ0IvRix5Q0FBc0IsYUFDcEIsS0FBYyxFQUNkLFFBQWlCLEVBQ2pCLEtBQWMsRUFDZCxTQUFnQixFQUNoQixPQUFjLEVBQ2QsT0FBeUI7SUFnQjNCLDJDQUF3QixhQUN0QixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWM7SUFpQmhCLHNEQUFtQyxhQUNqQyxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxPQUF5QjtJQWdCM0IsNEJBQVMsYUFBQyxLQUFjLEVBQUUsUUFBaUIsRUFBRSxLQUFjLEVBQUUsU0FBZ0IsRUFBRSxPQUFjO0lBZ0I3Rix1Q0FBb0IsYUFDbEIsS0FBYyxFQUNkLFFBQWlCLEVBQ2pCLEtBQWMsRUFDZCxTQUFnQixFQUNoQixPQUFjLEVBQ2QsT0FBeUI7SUFlM0Isb0NBQWlCLGFBQUMsU0FBZSxFQUFFLE9BQWE7SUFVaEQsZ0NBQWE7SUFhYiwrQ0FBNEIsYUFBQyxZQUFvQjtJQXNCakQsOEJBQVcsYUFDVCxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixRQUFpQixFQUNqQixZQUFtQixFQUNuQixVQUFpQjtJQXlCbkIseUNBQXNCLGFBQ3BCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLFFBQWlCLEVBQ2pCLFlBQW1CLEVBQ25CLFVBQWlCLEVBQ2pCLGFBQStCLEVBQy9CLFVBQTRCO0lBZ0I5Qiw4QkFBVyxhQUFDLEtBQWMsRUFBRSxRQUFpQixFQUFFLEtBQWMsRUFBRSxTQUFnQixFQUFFLE9BQWM7SUFrQi9GLCtDQUE0QixhQUMxQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxZQUFxQjtJQWF2QixrQ0FBZSxhQUFDLEVBQVUsRUFBRSxRQUFlO0lBVzNDLCtCQUFZLGFBQUMsSUFBVTswR0FoWlosUUFBUTs4R0FBUixRQUFROzs7Ozs7SUFBUixRQUFRLGtCQUFSLFFBQVE7bUJBekZyQjtFQXlGOEIsMEJBQTBCO1NBQTNDLFFBQVE7NEZBQVIsUUFBUTtrQkFEcEIsVUFBVTs4QkFlVCxzQkFBc0IsTUFVdEIsaUJBQWlCLE1BVWpCLGtCQUFrQixNQVVsQixzQkFBc0IsTUFVdEIscUJBQXFCLE1BVXJCLDBCQUEwQixNQVcxQixjQUFjLE1BV2QsY0FBYyxNQVlkLGtCQUFrQixNQVlsQix3QkFBd0IsTUFleEIsV0FBVyxNQWdCWCxzQkFBc0IsTUFzQnRCLHdCQUF3QixNQXNCeEIsbUNBQW1DLE1Bc0JuQyxTQUFTLE1BZ0JULG9CQUFvQixNQXFCcEIsaUJBQWlCLE1BVWpCLGFBQWEsTUFhYiw0QkFBNEIsTUFzQjVCLFdBQVcsTUFtQ1gsc0JBQXNCLE1BNEJ0QixXQUFXLE1Ba0JYLDRCQUE0QixNQW1CNUIsZUFBZSxNQVdmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJZFxuICAgKi9cbiAgaWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBmaXJzdFJlbWluZGVyTWludXRlcz86IG51bWJlcjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIHNlY29uZFJlbWluZGVyTWludXRlcz86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVjdXJyZW5jZS4gQ2FuIGJlIHNldCB0byBgZGFpbHlgLCBgd2Vla2x5YCwgYG1vbnRobHlgIG9yIGB5ZWFybHlgXG4gICAqL1xuICByZWN1cnJlbmNlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZWN1cnJlbmNlIGludGVydmFsLiBWYWxpZCBvbmx5IHdoZW4gYHJlY3VycmVuY2VgIG9wdGlvbiBpcyBzZXQuXG4gICAqL1xuICByZWN1cnJlbmNlSW50ZXJ2YWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlY3VycmVuY2UgZW5kIGRhdGUuIFZhbGlkIG9ubHkgd2hlbiBgcmVjdXJyZW5jZWAgb3B0aW9uIGlzIHNldC5cbiAgICovXG4gIHJlY3VycmVuY2VFbmREYXRlPzogRGF0ZTtcblxuICAvKipcbiAgICogQ2FsZW5kYXIgbmFtZS4gVGhzIGlzIHN1cHBvcnRlZCBieSBgaU9TYCBvbmx5LlxuICAgKi9cbiAgY2FsZW5kYXJOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDYWxlbmRhciBpZFxuICAgKi9cbiAgY2FsZW5kYXJJZD86IG51bWJlcjtcblxuICAvKipcbiAgICogVVJMXG4gICAqL1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmFtZU9yT3B0aW9ucyB7XG4gIC8qKiBDYWxlbmRhciBuYW1lICovXG4gIGNhbGVuZGFyTmFtZT86IHN0cmluZztcblxuICAvKiogQ2FsZW5kYXIgY29sb3IgYXMgYSBIRVggc3RyaW5nICovXG4gIGNhbGVuZGFyQ29sb3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQ2FsZW5kYXJcbiAqIEBwcmVtaWVyIGNhbGVuZGFyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gYWRkIGV2ZW50cyB0byB0aGUgQ2FsZW5kYXIgb2YgdGhlIG1vYmlsZSBkZXZpY2UuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1jYWxlbmRhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDYWxlbmRhciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0NhbGVuZGFyLVBob25lR2FwLVBsdWdpbikuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NhbGVuZGFyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxlbmRhcjogQ2FsZW5kYXIpIHsgfVxuICpcbiAqXG4gKiB0aGlzLmNhbGVuZGFyLmNyZWF0ZUNhbGVuZGFyKCdNeUNhbGVuZGFyJykudGhlbihcbiAqICAgKG1zZykgPT4geyBjb25zb2xlLmxvZyhtc2cpOyB9LFxuICogICAoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycik7IH1cbiAqICk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYWxlbmRhck9wdGlvbnNcbiAqIE5hbWVPck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYWxlbmRhcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbGVuZGFyJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5jYWxlbmRhcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vQ2FsZW5kYXItUGhvbmVHYXAtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgd2UgaGF2ZSBwZXJtaXNzaW9uIHRvIHJlYWQvd3JpdGUgZnJvbS90byB0aGUgY2FsZW5kYXIuXG4gICAqIFRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aXRoIGB0cnVlYCB3aGVuOlxuICAgKiAtIFlvdSdyZSBydW5uaW5nIG9uIGlPUywgb3JcbiAgICogLSBZb3UncmUgdGFyZ2V0aW5nIEFQSSBsZXZlbCBsb3dlciB0aGFuIDIzLCBvclxuICAgKiAtIFlvdSdyZSB1c2luZyBBbmRyb2lkIDwgNiwgb3JcbiAgICogLSBZb3UndmUgYWxyZWFkeSBncmFudGVkIHBlcm1pc3Npb25cbiAgICpcbiAgICogSWYgdGhpcyByZXR1cm5zIGZhbHNlLCB5b3Ugc2hvdWxkIGNhbGwgdGhlIGByZXF1ZXN0UmVhZFdyaXRlUGVybWlzc2lvbmAgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1JlYWRXcml0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIGhhdmUgcmVhZCBwZXJtaXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgaGF2ZSB3cml0ZSBwZXJtaXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNXcml0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3Qgd3JpdGUgcGVybWlzc2lvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0V3JpdGVQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcmVhZCBwZXJtaXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyByZWFkL3dyaXRlIHBlcm1pc3Npb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RSZWFkV3JpdGVQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGNhbGVuZGFyLiAoaU9TIG9ubHkpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgTmFtZU9yT3B0aW9uc30gbmFtZU9yT3B0aW9ucyAgZWl0aGVyIGEgc3RyaW5nIG5hbWUgb3IgYSBvcHRpb25zIG9iamVjdC4gSWYgc3RyaW5nLCBwcm92aWRlIHRoZSBjYWxlbmRhciBuYW1lLiBJRiBhbiBvYmplY3QsIHByb3ZpZGUgYSBjYWxlbmRhciBuYW1lIGFzIGEgc3RyaW5nIGFuZCBhIGNhbGVuZGFyIGNvbG9yIGluIGhleCBmb3JtYXQgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlQ2FsZW5kYXIobmFtZU9yT3B0aW9uczogc3RyaW5nIHwgTmFtZU9yT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIGNhbGVuZGFyLiAoaU9TIG9ubHkpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBOYW1lIG9mIHRoZSBjYWxlbmRhciB0byBkZWxldGUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZUNhbGVuZGFyKG5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRlZmF1bHQgY2FsZW5kYXIgb3B0aW9ucy5cbiAgICpcbiAgICogQHJldHVybnMge0NhbGVuZGFyT3B0aW9uc30gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZGVmYXVsdCBjYWxlbmRhciBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZ2V0Q2FsZW5kYXJPcHRpb25zKCk6IENhbGVuZGFyT3B0aW9ucyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb3B0aW9ucyBmb3IgYSBjdXN0b20gY2FsZW5kZXIgd2l0aCBzcGVjaWZpYyBjb2xvclxuICAgKlxuICAgKiBAcmV0dXJucyB7TmFtZU9yT3B0aW9uc30gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZGVmYXVsdCBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgZ2V0Q3JlYXRlQ2FsZW5kYXJPcHRpb25zKCk6IE5hbWVPck9wdGlvbnMge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaWxlbnRseSBjcmVhdGUgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlRXZlbnQodGl0bGU/OiBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nLCBub3Rlcz86IHN0cmluZywgc3RhcnREYXRlPzogRGF0ZSwgZW5kRGF0ZT86IERhdGUpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaWxlbnRseSBjcmVhdGUgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtvcHRpb25zXSAgQWRkaXRpb25hbCBvcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlRXZlbnRXaXRoT3B0aW9ucyhcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlLFxuICAgIG9wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnNcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJhY3RpdmVseSBjcmVhdGUgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlRXZlbnRJbnRlcmFjdGl2ZWx5KFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGVcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJhY3RpdmVseSBjcmVhdGUgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtvcHRpb25zXSAgQWRkaXRpb25hbCBvcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY3JlYXRlRXZlbnRJbnRlcmFjdGl2ZWx5V2l0aE9wdGlvbnMoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZSxcbiAgICBvcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW4gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdICBUaGUgZXZlbnQgdGl0bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NhdGlvbl0gIFRoZSBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25vdGVzXSAgVGhlIGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW3N0YXJ0RGF0ZV0gIFRoZSBldmVudCBzdGFydCBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2VuZERhdGVdICBUaGUgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmluZEV2ZW50KHRpdGxlPzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgbm90ZXM/OiBzdHJpbmcsIHN0YXJ0RGF0ZT86IERhdGUsIGVuZERhdGU/OiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbiBldmVudCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge0NhbGVuZGFyT3B0aW9uc30gW29wdGlvbnNdICBBZGRpdGlvbmFsIG9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGV2ZW50LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZpbmRFdmVudFdpdGhPcHRpb25zKFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgb3B0aW9ucz86IENhbGVuZGFyT3B0aW9uc1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgbGlzdCBvZiBldmVudHMgd2l0aGluIHRoZSBzcGVjaWZpZWQgZGF0ZSByYW5nZS4gKEFuZHJvaWQgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBlbmQgZGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxpc3Qgb2YgZXZlbnRzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgbGlzdEV2ZW50c0luUmFuZ2Uoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBhbGwgY2FsZW5kYXJzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsaXN0IG9mIGNhbGVuZGFycywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsaXN0Q2FsZW5kYXJzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgYWxsIGZ1dHVyZSBldmVudHMgaW4gdGhlIHNwZWNpZmllZCBjYWxlbmRhci4gKGlPUyBvbmx5KVxuICAgKlxuICAgKiBAcGFyYW0gY2FsZW5kYXJOYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbGlzdCBvZiBldmVudHMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGZpbmRBbGxFdmVudHNJbk5hbWVkQ2FsZW5kYXIoY2FsZW5kYXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RpZnkgYW4gZXZlbnQuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld1RpdGxlXSAgVGhlIG5ldyBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld0xvY2F0aW9uXSAgVGhlIG5ldyBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld05vdGVzXSAgVGhlIG5ldyBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtuZXdTdGFydERhdGVdICBUaGUgbmV3IGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbbmV3RW5kRGF0ZV0gIFRoZSBuZXcgZXZlbnQgZW5kIGRhdGVcbiAgICogQHJldHVybnMgUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIG1vZGlmeUV2ZW50KFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgbmV3VGl0bGU/OiBzdHJpbmcsXG4gICAgbmV3TG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbmV3Tm90ZXM/OiBzdHJpbmcsXG4gICAgbmV3U3RhcnREYXRlPzogRGF0ZSxcbiAgICBuZXdFbmREYXRlPzogRGF0ZVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RpZnkgYW4gZXZlbnQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld1RpdGxlXSAgVGhlIG5ldyBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld0xvY2F0aW9uXSAgVGhlIG5ldyBldmVudCBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25ld05vdGVzXSAgVGhlIG5ldyBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtuZXdTdGFydERhdGVdICBUaGUgbmV3IGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbbmV3RW5kRGF0ZV0gIFRoZSBuZXcgZXZlbnQgZW5kIGRhdGVcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtmaWx0ZXJPcHRpb25zXSBFdmVudCBPcHRpb25zLCBzZWUgYGdldENhbGVuZGFyT3B0aW9uc2BcbiAgICogQHBhcmFtIHtDYWxlbmRhck9wdGlvbnN9IFtuZXdPcHRpb25zXSAgTmV3IGV2ZW50IG9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgbW9kaWZ5RXZlbnRXaXRoT3B0aW9ucyhcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlLFxuICAgIG5ld1RpdGxlPzogc3RyaW5nLFxuICAgIG5ld0xvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5ld05vdGVzPzogc3RyaW5nLFxuICAgIG5ld1N0YXJ0RGF0ZT86IERhdGUsXG4gICAgbmV3RW5kRGF0ZT86IERhdGUsXG4gICAgZmlsdGVyT3B0aW9ucz86IENhbGVuZGFyT3B0aW9ucyxcbiAgICBuZXdPcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVFdmVudCh0aXRsZT86IHN0cmluZywgbG9jYXRpb24/OiBzdHJpbmcsIG5vdGVzPzogc3RyaW5nLCBzdGFydERhdGU/OiBEYXRlLCBlbmREYXRlPzogRGF0ZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBldmVudCBmcm9tIHRoZSBzcGVjaWZpZWQgQ2FsZW5kYXIuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsZW5kYXJOYW1lXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBkZWxldGVFdmVudEZyb21OYW1lZENhbGVuZGFyKFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgY2FsZW5kYXJOYW1lPzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBldmVudCBieSBpZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtpZF0gIFRoZSBldmVudCBpZFxuICAgKiBAcGFyYW0ge0RhdGV9IFtmcm9tRGF0ZV0gIFRoZSBkYXRlIHdoZXJlIGl0IHN0YXJ0IGRlbGV0aW5nIGZyb21cbiAgICogQHJldHVybnMgUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlRXZlbnRCeUlkKGlkOiBzdHJpbmcsIGZyb21EYXRlPzogRGF0ZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIGNhbGVuZGFyIGF0IHRoZSBzcGVjaWZpZWQgZGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtEYXRlfSBkYXRlIFRoZSBkYXRlIHlvdSB3YW50IHRvIG9wZW4gdGhlIGNhbGVuZGFyIG9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgb3BlbkNhbGVuZGFyKGRhdGU6IERhdGUpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19