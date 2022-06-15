import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
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
    Calendar.pluginName = "Calendar";
    Calendar.plugin = "cordova-plugin-calendar";
    Calendar.pluginRef = "plugins.calendar";
    Calendar.repo = "https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin";
    Calendar.platforms = ["Android", "iOS"];
    Calendar.decorators = [
        { type: Injectable }
    ];
    return Calendar;
}(AwesomeCordovaNativePlugin));
export { Calendar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FsZW5kYXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBd0Y5RCw0QkFBMEI7Ozs7SUFjdEQseUNBQXNCO0lBVXRCLG9DQUFpQjtJQVVqQixxQ0FBa0I7SUFVbEIseUNBQXNCO0lBVXRCLHdDQUFxQjtJQVVyQiw2Q0FBMEI7SUFXMUIsaUNBQWMsYUFBQyxhQUFxQztJQVdwRCxpQ0FBYyxhQUFDLElBQVk7SUFZM0IscUNBQWtCO0lBWWxCLDJDQUF3QjtJQWV4Qiw4QkFBVyxhQUFDLEtBQWMsRUFBRSxRQUFpQixFQUFFLEtBQWMsRUFBRSxTQUFnQixFQUFFLE9BQWM7SUFnQi9GLHlDQUFzQixhQUNwQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxPQUF5QjtJQWdCM0IsMkNBQXdCLGFBQ3RCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYztJQWlCaEIsc0RBQW1DLGFBQ2pDLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLE9BQXlCO0lBZ0IzQiw0QkFBUyxhQUFDLEtBQWMsRUFBRSxRQUFpQixFQUFFLEtBQWMsRUFBRSxTQUFnQixFQUFFLE9BQWM7SUFnQjdGLHVDQUFvQixhQUNsQixLQUFjLEVBQ2QsUUFBaUIsRUFDakIsS0FBYyxFQUNkLFNBQWdCLEVBQ2hCLE9BQWMsRUFDZCxPQUF5QjtJQWUzQixvQ0FBaUIsYUFBQyxTQUFlLEVBQUUsT0FBYTtJQVVoRCxnQ0FBYTtJQWFiLCtDQUE0QixhQUFDLFlBQW9CO0lBc0JqRCw4QkFBVyxhQUNULEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLFFBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLFFBQWlCLEVBQ2pCLFlBQW1CLEVBQ25CLFVBQWlCO0lBeUJuQix5Q0FBc0IsYUFDcEIsS0FBYyxFQUNkLFFBQWlCLEVBQ2pCLEtBQWMsRUFDZCxTQUFnQixFQUNoQixPQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsUUFBaUIsRUFDakIsWUFBbUIsRUFDbkIsVUFBaUIsRUFDakIsYUFBK0IsRUFDL0IsVUFBNEI7SUFnQjlCLDhCQUFXLGFBQUMsS0FBYyxFQUFFLFFBQWlCLEVBQUUsS0FBYyxFQUFFLFNBQWdCLEVBQUUsT0FBYztJQWtCL0YsK0NBQTRCLGFBQzFCLEtBQWMsRUFDZCxRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBZ0IsRUFDaEIsT0FBYyxFQUNkLFlBQXFCO0lBYXZCLGtDQUFlLGFBQUMsRUFBVSxFQUFFLFFBQWU7SUFXM0MsK0JBQVksYUFBQyxJQUFVOzs7Ozs7O2dCQWpaeEIsVUFBVTs7bUJBeEZYO0VBeUY4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIElkXG4gICAqL1xuICBpZD86IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICovXG4gIGZpcnN0UmVtaW5kZXJNaW51dGVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgc2Vjb25kUmVtaW5kZXJNaW51dGVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZWN1cnJlbmNlLiBDYW4gYmUgc2V0IHRvIGBkYWlseWAsIGB3ZWVrbHlgLCBgbW9udGhseWAgb3IgYHllYXJseWBcbiAgICovXG4gIHJlY3VycmVuY2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlY3VycmVuY2UgaW50ZXJ2YWwuIFZhbGlkIG9ubHkgd2hlbiBgcmVjdXJyZW5jZWAgb3B0aW9uIGlzIHNldC5cbiAgICovXG4gIHJlY3VycmVuY2VJbnRlcnZhbD86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVjdXJyZW5jZSBlbmQgZGF0ZS4gVmFsaWQgb25seSB3aGVuIGByZWN1cnJlbmNlYCBvcHRpb24gaXMgc2V0LlxuICAgKi9cbiAgcmVjdXJyZW5jZUVuZERhdGU/OiBEYXRlO1xuXG4gIC8qKlxuICAgKiBDYWxlbmRhciBuYW1lLiBUaHMgaXMgc3VwcG9ydGVkIGJ5IGBpT1NgIG9ubHkuXG4gICAqL1xuICBjYWxlbmRhck5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhbGVuZGFyIGlkXG4gICAqL1xuICBjYWxlbmRhcklkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVUkxcbiAgICovXG4gIHVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYW1lT3JPcHRpb25zIHtcbiAgLyoqIENhbGVuZGFyIG5hbWUgKi9cbiAgY2FsZW5kYXJOYW1lPzogc3RyaW5nO1xuXG4gIC8qKiBDYWxlbmRhciBjb2xvciBhcyBhIEhFWCBzdHJpbmcgKi9cbiAgY2FsZW5kYXJDb2xvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBDYWxlbmRhclxuICogQHByZW1pZXIgY2FsZW5kYXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBhZGQgZXZlbnRzIHRvIHRoZSBDYWxlbmRhciBvZiB0aGUgbW9iaWxlIGRldmljZS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNhbGVuZGFyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NhbGVuZGFyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vQ2FsZW5kYXItUGhvbmVHYXAtUGx1Z2luKS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2FsZW5kYXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGVuZGFyOiBDYWxlbmRhcikgeyB9XG4gKlxuICpcbiAqIHRoaXMuY2FsZW5kYXIuY3JlYXRlQ2FsZW5kYXIoJ015Q2FsZW5kYXInKS50aGVuKFxuICogICAobXNnKSA9PiB7IGNvbnNvbGUubG9nKG1zZyk7IH0sXG4gKiAgIChlcnIpID0+IHsgY29uc29sZS5sb2coZXJyKTsgfVxuICogKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbGVuZGFyT3B0aW9uc1xuICogTmFtZU9yT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGVuZGFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FsZW5kYXInLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmNhbGVuZGFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9DYWxlbmRhci1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB3ZSBoYXZlIHBlcm1pc3Npb24gdG8gcmVhZC93cml0ZSBmcm9tL3RvIHRoZSBjYWxlbmRhci5cbiAgICogVGhlIHByb21pc2Ugd2lsbCByZXNvbHZlIHdpdGggYHRydWVgIHdoZW46XG4gICAqIC0gWW91J3JlIHJ1bm5pbmcgb24gaU9TLCBvclxuICAgKiAtIFlvdSdyZSB0YXJnZXRpbmcgQVBJIGxldmVsIGxvd2VyIHRoYW4gMjMsIG9yXG4gICAqIC0gWW91J3JlIHVzaW5nIEFuZHJvaWQgPCA2LCBvclxuICAgKiAtIFlvdSd2ZSBhbHJlYWR5IGdyYW50ZWQgcGVybWlzc2lvblxuICAgKlxuICAgKiBJZiB0aGlzIHJldHVybnMgZmFsc2UsIHlvdSBzaG91bGQgY2FsbCB0aGUgYHJlcXVlc3RSZWFkV3JpdGVQZXJtaXNzaW9uYCBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzUmVhZFdyaXRlUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgaGF2ZSByZWFkIHBlcm1pc3Npb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1JlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSBoYXZlIHdyaXRlIHBlcm1pc3Npb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1dyaXRlUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCB3cml0ZSBwZXJtaXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RXcml0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCByZWFkIHBlcm1pc3Npb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIHJlYWQvd3JpdGUgcGVybWlzc2lvbnNcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVxdWVzdFJlYWRXcml0ZVBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgY2FsZW5kYXIuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBOYW1lT3JPcHRpb25zfSBuYW1lT3JPcHRpb25zICBlaXRoZXIgYSBzdHJpbmcgbmFtZSBvciBhIG9wdGlvbnMgb2JqZWN0LiBJZiBzdHJpbmcsIHByb3ZpZGUgdGhlIGNhbGVuZGFyIG5hbWUuIElGIGFuIG9iamVjdCwgcHJvdmlkZSBhIGNhbGVuZGFyIG5hbWUgYXMgYSBzdHJpbmcgYW5kIGEgY2FsZW5kYXIgY29sb3IgaW4gaGV4IGZvcm1hdCBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjcmVhdGVDYWxlbmRhcihuYW1lT3JPcHRpb25zOiBzdHJpbmcgfCBOYW1lT3JPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgY2FsZW5kYXIuIChpT1Mgb25seSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNhbGVuZGFyIHRvIGRlbGV0ZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlQ2FsZW5kYXIobmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBjYWxlbmRhciBvcHRpb25zLlxuICAgKlxuICAgKiBAcmV0dXJucyB7Q2FsZW5kYXJPcHRpb25zfSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBkZWZhdWx0IGNhbGVuZGFyIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBnZXRDYWxlbmRhck9wdGlvbnMoKTogQ2FsZW5kYXJPcHRpb25zIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcHRpb25zIGZvciBhIGN1c3RvbSBjYWxlbmRlciB3aXRoIHNwZWNpZmljIGNvbG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtOYW1lT3JPcHRpb25zfSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBnZXRDcmVhdGVDYWxlbmRhck9wdGlvbnMoKTogTmFtZU9yT3B0aW9ucyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbGVudGx5IGNyZWF0ZSBhbiBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjcmVhdGVFdmVudCh0aXRsZT86IHN0cmluZywgbG9jYXRpb24/OiBzdHJpbmcsIG5vdGVzPzogc3RyaW5nLCBzdGFydERhdGU/OiBEYXRlLCBlbmREYXRlPzogRGF0ZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbGVudGx5IGNyZWF0ZSBhbiBldmVudCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge0NhbGVuZGFyT3B0aW9uc30gW29wdGlvbnNdICBBZGRpdGlvbmFsIG9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjcmVhdGVFdmVudFdpdGhPcHRpb25zKFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgb3B0aW9ucz86IENhbGVuZGFyT3B0aW9uc1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcmFjdGl2ZWx5IGNyZWF0ZSBhbiBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjcmVhdGVFdmVudEludGVyYWN0aXZlbHkoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcmFjdGl2ZWx5IGNyZWF0ZSBhbiBldmVudCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge0NhbGVuZGFyT3B0aW9uc30gW29wdGlvbnNdICBBZGRpdGlvbmFsIG9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjcmVhdGVFdmVudEludGVyYWN0aXZlbHlXaXRoT3B0aW9ucyhcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICBsb2NhdGlvbj86IHN0cmluZyxcbiAgICBub3Rlcz86IHN0cmluZyxcbiAgICBzdGFydERhdGU/OiBEYXRlLFxuICAgIGVuZERhdGU/OiBEYXRlLFxuICAgIG9wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnNcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbiBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gIFRoZSBldmVudCB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xvY2F0aW9uXSAgVGhlIGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbm90ZXNdICBUaGUgZXZlbnQgbm90ZXNcbiAgICogQHBhcmFtIHtEYXRlfSBbc3RhcnREYXRlXSAgVGhlIGV2ZW50IHN0YXJ0IGRhdGVcbiAgICogQHBhcmFtIHtEYXRlfSBbZW5kRGF0ZV0gIFRoZSBldmVudCBlbmQgZGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmaW5kRXZlbnQodGl0bGU/OiBzdHJpbmcsIGxvY2F0aW9uPzogc3RyaW5nLCBub3Rlcz86IHN0cmluZywgc3RhcnREYXRlPzogRGF0ZSwgZW5kRGF0ZT86IERhdGUpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFuIGV2ZW50IHdpdGggYWRkaXRpb25hbCBvcHRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEBwYXJhbSB7Q2FsZW5kYXJPcHRpb25zfSBbb3B0aW9uc10gIEFkZGl0aW9uYWwgb3B0aW9ucywgc2VlIGBnZXRDYWxlbmRhck9wdGlvbnNgXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZXZlbnQsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmluZEV2ZW50V2l0aE9wdGlvbnMoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZSxcbiAgICBvcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYSBsaXN0IG9mIGV2ZW50cyB3aXRoaW4gdGhlIHNwZWNpZmllZCBkYXRlIHJhbmdlLiAoQW5kcm9pZCBvbmx5KVxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGVuZCBkYXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbGlzdCBvZiBldmVudHMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBsaXN0RXZlbnRzSW5SYW5nZShzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGFsbCBjYWxlbmRhcnMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxpc3Qgb2YgY2FsZW5kYXJzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxpc3RDYWxlbmRhcnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBhbGwgZnV0dXJlIGV2ZW50cyBpbiB0aGUgc3BlY2lmaWVkIGNhbGVuZGFyLiAoaU9TIG9ubHkpXG4gICAqXG4gICAqIEBwYXJhbSBjYWxlbmRhck5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsaXN0IG9mIGV2ZW50cywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgZmluZEFsbEV2ZW50c0luTmFtZWRDYWxlbmRhcihjYWxlbmRhck5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBhbiBldmVudC4gKGlPUyBvbmx5KVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3VGl0bGVdICBUaGUgbmV3IGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3TG9jYXRpb25dICBUaGUgbmV3IGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3Tm90ZXNdICBUaGUgbmV3IGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW25ld1N0YXJ0RGF0ZV0gIFRoZSBuZXcgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtuZXdFbmREYXRlXSAgVGhlIG5ldyBldmVudCBlbmQgZGF0ZVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgbW9kaWZ5RXZlbnQoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZSxcbiAgICBuZXdUaXRsZT86IHN0cmluZyxcbiAgICBuZXdMb2NhdGlvbj86IHN0cmluZyxcbiAgICBuZXdOb3Rlcz86IHN0cmluZyxcbiAgICBuZXdTdGFydERhdGU/OiBEYXRlLFxuICAgIG5ld0VuZERhdGU/OiBEYXRlXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmeSBhbiBldmVudCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucy4gKGlPUyBvbmx5KVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3VGl0bGVdICBUaGUgbmV3IGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3TG9jYXRpb25dICBUaGUgbmV3IGV2ZW50IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmV3Tm90ZXNdICBUaGUgbmV3IGV2ZW50IG5vdGVzXG4gICAqIEBwYXJhbSB7RGF0ZX0gW25ld1N0YXJ0RGF0ZV0gIFRoZSBuZXcgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtuZXdFbmREYXRlXSAgVGhlIG5ldyBldmVudCBlbmQgZGF0ZVxuICAgKiBAcGFyYW0ge0NhbGVuZGFyT3B0aW9uc30gW2ZpbHRlck9wdGlvbnNdIEV2ZW50IE9wdGlvbnMsIHNlZSBgZ2V0Q2FsZW5kYXJPcHRpb25zYFxuICAgKiBAcGFyYW0ge0NhbGVuZGFyT3B0aW9uc30gW25ld09wdGlvbnNdICBOZXcgZXZlbnQgb3B0aW9ucywgc2VlIGBnZXRDYWxlbmRhck9wdGlvbnNgXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBtb2RpZnlFdmVudFdpdGhPcHRpb25zKFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIGxvY2F0aW9uPzogc3RyaW5nLFxuICAgIG5vdGVzPzogc3RyaW5nLFxuICAgIHN0YXJ0RGF0ZT86IERhdGUsXG4gICAgZW5kRGF0ZT86IERhdGUsXG4gICAgbmV3VGl0bGU/OiBzdHJpbmcsXG4gICAgbmV3TG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbmV3Tm90ZXM/OiBzdHJpbmcsXG4gICAgbmV3U3RhcnREYXRlPzogRGF0ZSxcbiAgICBuZXdFbmREYXRlPzogRGF0ZSxcbiAgICBmaWx0ZXJPcHRpb25zPzogQ2FsZW5kYXJPcHRpb25zLFxuICAgIG5ld09wdGlvbnM/OiBDYWxlbmRhck9wdGlvbnNcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZUV2ZW50KHRpdGxlPzogc3RyaW5nLCBsb2NhdGlvbj86IHN0cmluZywgbm90ZXM/OiBzdHJpbmcsIHN0YXJ0RGF0ZT86IERhdGUsIGVuZERhdGU/OiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFuIGV2ZW50IGZyb20gdGhlIHNwZWNpZmllZCBDYWxlbmRhci4gKGlPUyBvbmx5KVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAgVGhlIGV2ZW50IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb25dICBUaGUgZXZlbnQgbG9jYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtub3Rlc10gIFRoZSBldmVudCBub3Rlc1xuICAgKiBAcGFyYW0ge0RhdGV9IFtzdGFydERhdGVdICBUaGUgZXZlbnQgc3RhcnQgZGF0ZVxuICAgKiBAcGFyYW0ge0RhdGV9IFtlbmREYXRlXSAgVGhlIGV2ZW50IGVuZCBkYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxlbmRhck5hbWVcbiAgICogQHJldHVybnMgUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGRlbGV0ZUV2ZW50RnJvbU5hbWVkQ2FsZW5kYXIoXG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgbG9jYXRpb24/OiBzdHJpbmcsXG4gICAgbm90ZXM/OiBzdHJpbmcsXG4gICAgc3RhcnREYXRlPzogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZSxcbiAgICBjYWxlbmRhck5hbWU/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFuIGV2ZW50IGJ5IGlkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2lkXSAgVGhlIGV2ZW50IGlkXG4gICAqIEBwYXJhbSB7RGF0ZX0gW2Zyb21EYXRlXSAgVGhlIGRhdGUgd2hlcmUgaXQgc3RhcnQgZGVsZXRpbmcgZnJvbVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVFdmVudEJ5SWQoaWQ6IHN0cmluZywgZnJvbURhdGU/OiBEYXRlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbiB0aGUgY2FsZW5kYXIgYXQgdGhlIHNwZWNpZmllZCBkYXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgVGhlIGRhdGUgeW91IHdhbnQgdG8gb3BlbiB0aGUgY2FsZW5kYXIgb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuQ2FsZW5kYXIoZGF0ZTogRGF0ZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=