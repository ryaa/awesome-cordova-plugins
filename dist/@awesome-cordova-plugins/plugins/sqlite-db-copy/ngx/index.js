import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var SqliteDbCopy = /** @class */ (function (_super) {
    __extends(SqliteDbCopy, _super);
    function SqliteDbCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SqliteDbCopy.prototype.copy = function (dbname, location) { return cordova(this, "copy", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.prototype.checkDbOnStorage = function (dbname, source) { return cordova(this, "checkDbOnStorage", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.prototype.copyDbFromStorage = function (dbname, location, source, deleteolddb) { return cordova(this, "copyDbFromStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopy.prototype.copyDbToStorage = function (dbname, location, destination, overwrite) { return cordova(this, "copyDbToStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopy.prototype.remove = function (dbname, location) { return cordova(this, "remove", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.pluginName = "cordova-plugin-dbcopy";
    SqliteDbCopy.plugin = "cordova-plugin-dbcopy";
    SqliteDbCopy.pluginRef = "window.plugins.sqlDB";
    SqliteDbCopy.repo = "https://github.com/an-rahulpandey/cordova-plugin-dbcopy";
    SqliteDbCopy.platforms = ["Android", "iOS"];
    SqliteDbCopy.decorators = [
        { type: Injectable }
    ];
    return SqliteDbCopy;
}(AwesomeCordovaNativePlugin));
export { SqliteDbCopy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3FsaXRlLWRiLWNvcHkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEIxRCxnQ0FBMEI7Ozs7SUFrQjFELDJCQUFJLGFBQUMsTUFBYyxFQUFFLFFBQWdCO0lBY3JDLHVDQUFnQixhQUFDLE1BQWMsRUFBRSxNQUFjO0lBc0IvQyx3Q0FBaUIsYUFBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsV0FBb0I7SUFzQnhGLHNDQUFlLGFBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxTQUFrQjtJQW9CekYsNkJBQU0sYUFBQyxNQUFjLEVBQUUsUUFBZ0I7Ozs7Ozs7Z0JBakd4QyxVQUFVOzt1QkE5Qlg7RUErQmtDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTcWxpdGUgRGIgQ29weVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTcWxpdGVEYkNvcHkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3FsaXRlLWRiLWNvcHkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcWxpdGVEYkNvcHk6IFNxbGl0ZURiQ29weSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuc3FsaXRlRGJDb3B5LmNvcHkoJ3NhbXBsZS5kYicsIDApXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnY29yZG92YS1wbHVnaW4tZGJjb3B5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGJjb3B5JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuc3FsREInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuLXJhaHVscGFuZGV5L2NvcmRvdmEtcGx1Z2luLWRiY29weScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTcWxpdGVEYkNvcHkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb3B5IGRhdGFiYXNlIGZyb20gd3d3IGRpcmVjdG9yeSB0byBkZXZpY2UgU1FMaXRlIERCIGxvY2F0aW9uXG4gICAqIChmb3IgaW9zIG9ubHksIHVzZSAwIGZvciBBbmRyb2lkKVxuICAgKiBsb2NhdGlvbiA9IDA7IC8vIChEaXNhYmxlIGlDbG91ZCBCYWNrdXApIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkvTG9jYWxEYXRhYmFzZS4gVGhlIGRhdGFiYXNlIHdpbGwgbm90IGJlIHN5bmNlZCBieSB0aGUgaUNsb3VkIEJhY2t1cC5cbiAgICogb3JcbiAgICogbG9jYXRpb24gPSAxOyAvLyBJZiBzZXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSB0byBMaWJyYXJ5IGZvbGRlciBpbnN0ZWFkIG9mIERvY3VtZW50cyBmb2xkZXIuXG4gICAqIG9yXG4gICAqIGxvY2F0aW9uID0gMjsgLy8gSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBpbiB0aGUgZGVmYXVsdCBTUUxpdGUgRGF0YWJhc2UgZGlyZWN0b3J5LiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBkYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0gZGJuYW1lIHtzdHJpbmd9IERhdGFiYXNlIGZpbGUgbmFtZSBhdmFpbGFibGUgaW4gd3d3IGRpcmV0b3J5IHdpdGggZXh0ZW5zaW9uLlRoZSBwbHVnaW4gd2lsbCBsb29rIGZvciBhbmQgY29weSB0aGUgZmlsZSBhY2NvcmRpbmcgdG8gdGhlIGZpbGVuYW1lIHByb3ZpZGVkIGhlcmUuIEFuZCB0aGUgc2FtZSBmaWxlIG5hbWUgc2hvdWxkIGJlIHVzZWQgd2hpbGUgb3BlbmluZyB0aGUgZGF0YWJhc2UgdmlhIFNRTGl0ZVBsdWdpblxuICAgKiBAcGFyYW0gbG9jYXRpb24ge251bWJlcn0gTG9jYXRpb24gd2hlcmUgdG8gY29weSB0aGUgZGF0YWJhc2UgZm9yIGFwcCAob25seSBhcHBsaWNhYmxlIGZvciBpb3MpLkZvciBBbmRyb2lkIHBhc3MgMC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIGNvcHkoZGJuYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgZGF0YWJhc2UgaXMgYXZhaWxhYmxlIGF0IGV4dGVybmFsIHN0b3JhZ2UuIFVzZWZ1bCB3aGVuIHRyeWluZyB0byBjb3B5aW5nIHRoZSBkYXRhYmFzZSBmcm9tIGRldmljZSBzZGNhcmQuXG4gICAqXG4gICAqIEBwYXJhbSBkYm5hbWUge3N0cmluZ30gTmFtZSBvZiB0aGUgZGF0YWJhc2UgZmlsZSB3aGljaCBpcyBhdmFpbGFibGUgb24gZXh0ZXJuYWwgb3IgaW50ZW5yYWwgc3RvcmFnZVxuICAgKiBAcGFyYW0gc291cmNlIHtzdHJpbmd9IEZ1bGwgbmF0aXZlIHBhdGggZm9yIHRoZSBmb2xkZXIgaW4gd2hpY2ggZGIgZmlsZSBpcyBwcmVzZW50LiBUaGUgXCIvXCIgbXVzdCBiZSBhZGRlZCBhdCB0aGUgZW5kIG9mIHBhdGguIEZvci5lZy4gL3NkY2FyZC9teWRiLy4gU2hvdWxkIG5vdCBpbmNsdWRlIGRibmFtZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgY2hlY2tEYk9uU3RvcmFnZShkYm5hbWU6IHN0cmluZywgc291cmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogQ29weSBkYXRhYmFzZSB3aGljaCBpcyBhdmFpbGFibGUgb24gdGhlIGRldmljZSBleHRlcm5hbC9pbnRlcm5hbCBzdG9yYWdlIHRvIGFwcCBkZWZhdWx0IGRiIGxvY2F0aW9uXG4gICAqIChmb3IgaW9zIG9ubHksIHVzZSAwIGZvciBBbmRyb2lkKVxuICAgKiBsb2NhdGlvbiA9IDA7IC8vIChEaXNhYmxlIGlDbG91ZCBCYWNrdXApIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkvTG9jYWxEYXRhYmFzZS4gVGhlIGRhdGFiYXNlIHdpbGwgbm90IGJlIHN5bmNlZCBieSB0aGUgaUNsb3VkIEJhY2t1cC5cbiAgICogb3JcbiAgICogbG9jYXRpb24gPSAxOyAvLyBJZiBzZXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSB0byBMaWJyYXJ5IGZvbGRlciBpbnN0ZWFkIG9mIERvY3VtZW50cyBmb2xkZXIuXG4gICAqIG9yXG4gICAqIGxvY2F0aW9uID0gMjsgLy8gSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBpbiB0aGUgZGVmYXVsdCBTUUxpdGUgRGF0YWJhc2UgZGlyZWN0b3J5LiBUaGlzIGlzIHRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBkYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0gZGJuYW1lIHtzdHJpbmd9IElzIHRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSB5b3Ugd2FudCB0byBjb3B5LiBUaGUgcGx1Z2luIHdpbGwgbG9vayBmb3IgYW5kIGNvcHkgdGhlIGZpbGUgYWNjb3JkaW5nIHRvIHRoZSBmaWxlbmFtZSBwcm92aWRlZCBoZXJlLiBBbmQgdGhlIHNhbWUgZmlsZSBuYW1lIHNob3VsZCBiZSB1c2VkIHdoaWxlIG9wZW5pbmcgdGhlIGRhdGFiYXNlIHZpYSBTUUxpdGVQbHVnaW5cbiAgICogQHBhcmFtIGxvY2F0aW9uIHtudW1iZXJ9IExvY2F0aW9uIHdoZXJlIHRvIGNvcHkgdGhlIGRhdGFiYXNlIGZvciBhcHAgKG9ubHkgYXBwbGljYWJsZSBmb3IgaW9zKS4gRm9yIEFuZHJvaWQgcGFzcyAwLlxuICAgKiBAcGFyYW0gc291cmNlIHtzdHJpbmd9IFNvdXJjZSBGaWxlIGxvY2F0aW9uIGxpa2UgL3NkY2FyZC9teWRiL2RiLmRiLiBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGV4aXN0aW5nIGxvY2F0aW9uIGFuZCB0aGUgZGJuYW1lIHNob3VsZCBiZSBwcmVzZW50IGluIHRoZSBwYXRoLlxuICAgKiBAcGFyYW0gZGVsZXRlb2xkZGIge2Jvb2xlYW59IEEgYm9vbGVhbiB2YWx1ZSBpZiBzZXQgdG8gdHJ1ZSwgd2lsbCBkZWxldGUgdGhlIGV4aXN0aW5nIGRiIGZyb20gdGhlIGxvY2FsIGFwcCBkYXRhYmFzZSBmb2xkZXIgYmVmb3JlIGNvcHlpbmcgdGhlIG5ldyBkYi4gUGxlYXNlIHByb3ZpZGUgcHJvcGVyIGJvb2xlYW4gdmFsdWUgdHJ1ZSBvciBmYWxzZTtcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgfSlcbiAgY29weURiRnJvbVN0b3JhZ2UoZGJuYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nLCBkZWxldGVvbGRkYjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBDb3B5IHRoZSBhcHAgZGF0YWJhc2UgdG8gZXh0ZXJuYWwvaW50ZXJuYWwgc3RvcmFnZSBvbiB0aGUgZGV2aWNlLlxuICAgKiAoZm9yIGlvcyBvbmx5LCB1c2UgMCBmb3IgQW5kcm9pZClcbiAgICogbG9jYXRpb24gPSAwOyAvL0l0IHdpbGwgY29weSB0aGUgZGF0YWJhc2UgZnJvbSBMaWJyYXJ5L0xvY2FsRGF0YWJhc2UgbG9jYXRpb24uXG4gICAqIG9yXG4gICAqIGxvY2F0aW9uID0gMTsgLy8gSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBmcm9tIExpYnJhcnkgZm9sZGVyIGluc3RlYWQuXG4gICAqIG9yXG4gICAqIGxvY2F0aW9uID0gMjsgLy8gSXQgd2lsbCBjb3B5IHRoZSBkYXRhYmFzZSBmcm9tIHRoZSBkZWZhdWx0IFNRTGl0ZSBEYXRhYmFzZSBkaXJlY3RvcnkuIFRoaXMgaXMgdGhlIGRlZmF1bHQgbG9jYXRpb24gZm9yIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSBkYm5hbWUge3N0cmluZ30gSXMgdGhlIG5hbWUgb2YgdGhlIGRhdGFiYXNlIHlvdSB3YW50IHRvIGNvcHkuIFRoZSBwbHVnaW4gd2lsbCBsb29rIGZvciBhbmQgY29weSB0aGUgZmlsZSBhY2NvcmRpbmcgdG8gdGhlIGZpbGVuYW1lIHByb3ZpZGVkIGhlcmUuIEFuZCB0aGUgc2FtZSBmaWxlIG5hbWUgc2hvdWxkIGJlIHVzZWQgd2hpbGUgb3BlbmluZyB0aGUgZGF0YWJhc2UgdmlhIFNRTGl0ZVBsdWdpbi5cbiAgICogQHBhcmFtIGxvY2F0aW9uIHtudW1iZXJ9IExvY2F0aW9uIHdoZXJlIHRvIGNvcHkgdGhlIGRhdGFiYXNlIGZvciBhcHAgKG9ubHkgYXBwbGljYWJsZSBmb3IgaW9zKS4gRm9yIEFuZHJvaWQgcGFzcyAwLlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb24ge3N0cmluZ30gRGVzdGluYXRpb24gRmlsZSBsb2NhdGlvbiBsaWtlIC9zZGNhcmQvbXlkYi8gUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBleGlzdGluZyBsb2NhdGlvbiBhbmQgXCIvXCIgc2hvdWxkIGJlIHByZXNlbnQgYXQgdGhlIGVuZCBvZiB0aGUgcGF0aC4gRG8gbm90IGFwcGVuZCBkYiBuYW1lIGluIHRoZSBwYXRoLlxuICAgKiBAcGFyYW0gb3ZlcndyaXRlIHtib29sZWFufSAgSWYgc2V0IHRvIHRydWUsIHRoZW4gd2lsbCByZXBsYWNlIHRoZSBmaWxlIGF0IHRoZSBkZXN0aW5hdGlvbi4gT3RoZXJ3aXNlIHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGRlc3RpbmF0aW9uIGZpbGUgYWxyZWFkeSBleGlzdHMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gIH0pXG4gIGNvcHlEYlRvU3RvcmFnZShkYm5hbWU6IHN0cmluZywgbG9jYXRpb246IG51bWJlciwgZGVzdGluYXRpb246IHN0cmluZywgb3ZlcndyaXRlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gcmVtb3ZlIHRoZSBkYXRhYmFzZSBmcm9tIHRoZSBhcHBzIGRlZmF1bHQgZGF0YWJhc2Ugc3RvcmFnZSBsb2NhdGlvbi5cbiAgICogKGZvciBpb3Mgb25seSwgdXNlIDAgZm9yIEFuZHJvaWQpXG4gICAqIGxvY2F0aW9uID0gMDsgLy8gKERpc2FibGUgaUNsb3VkIEJhY2t1cCkgSWYgc2V0IHdpbGwgY29weSB0aGUgZGF0YWJhc2UgdG8gTGlicmFyeS9Mb2NhbERhdGFiYXNlLiBUaGUgZGF0YWJhc2Ugd2lsbCBub3QgYmUgc3luY2VkIGJ5IHRoZSBpQ2xvdWQgQmFja3VwLlxuICAgKiBvclxuICAgKiBsb2NhdGlvbiA9IDE7IC8vIElmIHNldCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIHRvIExpYnJhcnkgZm9sZGVyIGluc3RlYWQgb2YgRG9jdW1lbnRzIGZvbGRlci5cbiAgICogb3JcbiAgICogbG9jYXRpb24gPSAyOyAvLyBJdCB3aWxsIGNvcHkgdGhlIGRhdGFiYXNlIGluIHRoZSBkZWZhdWx0IFNRTGl0ZSBEYXRhYmFzZSBkaXJlY3RvcnkuIFRoaXMgaXMgdGhlIGRlZmF1bHQgbG9jYXRpb24gZm9yIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSBkYm5hbWUge3N0cmluZ30gSXMgdGhlIG5hbWUgb2YgdGhlIGRhdGFiYXNlIHlvdSB3YW50IHRvIHJlbW92ZS4gSWYgdGhlIGRhdGFiYXNlIGZpbGUgaXMgaGF2aW5nIGFueSBleHRlbnNpb24sIHBsZWFzZSBwcm92aWRlIHRoYXQgYWxzby5cbiAgICogQHBhcmFtIGxvY2F0aW9uIHtudW1iZXJ9IExvY2F0aW9uIHdoZXJlIHRvIGNvcHkgdGhlIGRhdGFiYXNlIGZvciBhcHAgKG9ubHkgYXBwbGljYWJsZSBmb3IgaW9zKS5Gb3IgQW5kcm9pZCBwYXNzIDAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gIH0pXG4gIHJlbW92ZShkYm5hbWU6IHN0cmluZywgbG9jYXRpb246IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=