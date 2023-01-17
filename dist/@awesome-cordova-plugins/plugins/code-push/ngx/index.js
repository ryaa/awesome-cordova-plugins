import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Defines the possible result statuses of the window.codePush.sync operation.
 */
export var SyncStatus;
(function (SyncStatus) {
    /**
     * The application is up to date.
     */
    SyncStatus[SyncStatus["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    /**
     * An update is available, it has been downloaded, unzipped and copied to the deployment folder.
     * After the completion of the callback invoked with SyncStatus.UPDATE_INSTALLED, the application will be reloaded with the updated code and resources.
     */
    SyncStatus[SyncStatus["UPDATE_INSTALLED"] = 1] = "UPDATE_INSTALLED";
    /**
     * An optional update is available, but the user declined to install it. The update was not downloaded.
     */
    SyncStatus[SyncStatus["UPDATE_IGNORED"] = 2] = "UPDATE_IGNORED";
    /**
     * An error happened during the sync operation. This might be an error while communicating with the server, downloading or unziping the update.
     * The console logs should contain more information about what happened. No update has been applied in this case.
     */
    SyncStatus[SyncStatus["ERROR"] = 3] = "ERROR";
    /**
     * There is an ongoing sync in progress, so this attempt to sync has been aborted.
     */
    SyncStatus[SyncStatus["IN_PROGRESS"] = 4] = "IN_PROGRESS";
    /**
     * Intermediate status - the plugin is about to check for updates.
     */
    SyncStatus[SyncStatus["CHECKING_FOR_UPDATE"] = 5] = "CHECKING_FOR_UPDATE";
    /**
     * Intermediate status - a user dialog is about to be displayed. This status will be reported only if user interaction is enabled.
     */
    SyncStatus[SyncStatus["AWAITING_USER_ACTION"] = 6] = "AWAITING_USER_ACTION";
    /**
     * Intermediate status - the update package is about to be downloaded.
     */
    SyncStatus[SyncStatus["DOWNLOADING_PACKAGE"] = 7] = "DOWNLOADING_PACKAGE";
    /**
     * Intermediate status - the update package is about to be installed.
     */
    SyncStatus[SyncStatus["INSTALLING_UPDATE"] = 8] = "INSTALLING_UPDATE";
})(SyncStatus || (SyncStatus = {}));
/**
 * Defines the available install modes for updates.
 */
export var InstallMode;
(function (InstallMode) {
    /**
     * The update will be applied to the running application immediately. The application will be reloaded with the new content immediately.
     */
    InstallMode[InstallMode["IMMEDIATE"] = 0] = "IMMEDIATE";
    /**
     * The update is downloaded but not installed immediately. The new content will be available the next time the application is started.
     */
    InstallMode[InstallMode["ON_NEXT_RESTART"] = 1] = "ON_NEXT_RESTART";
    /**
     * The udpate is downloaded but not installed immediately. The new content will be available the next time the application is resumed or restarted, whichever event happends first.
     */
    InstallMode[InstallMode["ON_NEXT_RESUME"] = 2] = "ON_NEXT_RESUME";
})(InstallMode || (InstallMode = {}));
var CodePush = /** @class */ (function (_super) {
    __extends(CodePush, _super);
    function CodePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodePush.prototype.getCurrentPackage = function () { return cordova(this, "getCurrentPackage", {}, arguments); };
    CodePush.prototype.getPendingPackage = function () { return cordova(this, "getPendingPackage", {}, arguments); };
    CodePush.prototype.checkForUpdate = function (deploymentKey) { return cordova(this, "checkForUpdate", { "callbackOrder": "reverse" }, arguments); };
    CodePush.prototype.notifyApplicationReady = function () { return cordova(this, "notifyApplicationReady", {}, arguments); };
    CodePush.prototype.restartApplication = function () { return cordova(this, "restartApplication", {}, arguments); };
    CodePush.prototype.sync = function (syncOptions, downloadProgress) { return cordova(this, "sync", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    CodePush.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CodePush, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    CodePush.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CodePush });
    CodePush.pluginName = "CodePush";
    CodePush.plugin = "cordova-plugin-code-push";
    CodePush.pluginRef = "codePush";
    CodePush.repo = "https://github.com/Microsoft/cordova-plugin-code-push";
    CodePush.platforms = ["Android", "iOS"];
    CodePush = __decorate([], CodePush);
    return CodePush;
}(AwesomeCordovaNativePlugin));
export { CodePush };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CodePush, decorators: [{
            type: Injectable
        }], propDecorators: { getCurrentPackage: [], getPendingPackage: [], checkForUpdate: [], notifyApplicationReady: [], restartApplication: [], sync: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY29kZS1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBaVFsQzs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFVBK0NYO0FBL0NELFdBQVksVUFBVTtJQUNwQjs7T0FFRztJQUNILHVEQUFVLENBQUE7SUFFVjs7O09BR0c7SUFDSCxtRUFBZ0IsQ0FBQTtJQUVoQjs7T0FFRztJQUNILCtEQUFjLENBQUE7SUFFZDs7O09BR0c7SUFDSCw2Q0FBSyxDQUFBO0lBRUw7O09BRUc7SUFDSCx5REFBVyxDQUFBO0lBRVg7O09BRUc7SUFDSCx5RUFBbUIsQ0FBQTtJQUVuQjs7T0FFRztJQUNILDJFQUFvQixDQUFBO0lBRXBCOztPQUVHO0lBQ0gseUVBQW1CLENBQUE7SUFFbkI7O09BRUc7SUFDSCxxRUFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBL0NXLFVBQVUsS0FBVixVQUFVLFFBK0NyQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksV0FlWDtBQWZELFdBQVksV0FBVztJQUNyQjs7T0FFRztJQUNILHVEQUFTLENBQUE7SUFFVDs7T0FFRztJQUNILG1FQUFlLENBQUE7SUFFZjs7T0FFRztJQUNILGlFQUFjLENBQUE7QUFDaEIsQ0FBQyxFQWZXLFdBQVcsS0FBWCxXQUFXLFFBZXRCOztJQTBJNkIsNEJBQTBCOzs7O0lBT3RELG9DQUFpQjtJQVdqQixvQ0FBaUI7SUFhakIsaUNBQWMsYUFBQyxhQUFzQjtJQVlyQyx5Q0FBc0I7SUFXdEIscUNBQWtCO0lBNEJsQix1QkFBSSxhQUFDLFdBQXlCLEVBQUUsZ0JBQW9EOzBHQWxGekUsUUFBUTs4R0FBUixRQUFROzs7Ozs7SUFBUixRQUFRLGtCQUFSLFFBQVE7bUJBbmRyQjtFQW1kOEIsMEJBQTBCO1NBQTNDLFFBQVE7NEZBQVIsUUFBUTtrQkFEcEIsVUFBVTs4QkFRVCxpQkFBaUIsTUFXakIsaUJBQWlCLE1BYWpCLGNBQWMsTUFZZCxzQkFBc0IsTUFXdEIsa0JBQWtCLE1BNEJsQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxubmFtZXNwYWNlIEh0dHAge1xuICBleHBvcnQgY29uc3QgZW51bSBWZXJiIHtcbiAgICBHRVQsXG4gICAgSEVBRCxcbiAgICBQT1NULFxuICAgIFBVVCxcbiAgICBERUxFVEUsXG4gICAgVFJBQ0UsXG4gICAgT1BUSU9OUyxcbiAgICBDT05ORUNULFxuICAgIFBBVENILFxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZSB7XG4gICAgc3RhdHVzQ29kZTogbnVtYmVyO1xuICAgIGJvZHk/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RlciB7XG4gICAgcmVxdWVzdCh2ZXJiOiBWZXJiLCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IENhbGxiYWNrPFJlc3BvbnNlPik6IHZvaWQ7XG4gICAgcmVxdWVzdCh2ZXJiOiBWZXJiLCB1cmw6IHN0cmluZywgcmVxdWVzdEJvZHk6IHN0cmluZywgY2FsbGJhY2s6IENhbGxiYWNrPFJlc3BvbnNlPik6IHZvaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgcGFja2FnZS4gQWxsIGZpZWxkcyBhcmUgbm9uLW51bGxhYmxlLCBleGNlcHQgd2hlbiByZXRyaWV2aW5nIHRoZSBjdXJyZW50bHkgcnVubmluZyBwYWNrYWdlIG9uIHRoZSBmaXJzdCBydW4gb2YgdGhlIGFwcCxcbiAqIGluIHdoaWNoIGNhc2Ugb25seSB0aGUgYXBwVmVyc2lvbiBpcyBjb21wdWxzb3J5LlxuICpcbiAqICEhIFRISVMgVFlQRSBJUyBSRUFEIEZST00gTkFUSVZFIENPREUgQVMgV0VMTC4gQU5ZIENIQU5HRVMgVE8gVEhJUyBJTlRFUkZBQ0UgTkVFRFMgVE8gQkUgVVBEQVRFRCBJTiBOQVRJVkUgQ09ERSAhIVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElQYWNrYWdlIHtcbiAgZGVwbG95bWVudEtleTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBhcHBWZXJzaW9uOiBzdHJpbmc7XG4gIGlzTWFuZGF0b3J5OiBib29sZWFuO1xuICBwYWNrYWdlSGFzaDogc3RyaW5nO1xuICBwYWNrYWdlU2l6ZTogbnVtYmVyO1xuICBmYWlsZWRJbnN0YWxsOiBib29sZWFuO1xufVxuXG4vKipcbiAqIERlZmluZXMgYSByZW1vdGUgcGFja2FnZSwgd2hpY2ggcmVwcmVzZW50cyBhbiB1cGRhdGUgcGFja2FnZSBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElSZW1vdGVQYWNrYWdlIGV4dGVuZHMgSVBhY2thZ2Uge1xuICAvKipcbiAgICogVGhlIFVSTCBhdCB3aGljaCB0aGUgcGFja2FnZSBpcyBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxuICAgKi9cbiAgZG93bmxvYWRVcmw6IHN0cmluZztcblxuICAvKipcbiAgICogRG93bmxvYWRzIHRoZSBwYWNrYWdlIHVwZGF0ZSBmcm9tIHRoZSBDb2RlUHVzaCBzZXJ2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFja30gZG93bmxvYWRTdWNjZXNzIENhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIsIHRoZSBkb3dubG9hZGVkIHBhY2thZ2UgaW5mb3JtYXRpb24sIG9uY2UgdGhlIGRvd25sb2FkIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW2Rvd25sb2FkRXJyb3JdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgaW4gY2FzZSBvZiBhbiBlcnJvci5cbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8RG93bmxvYWRQcm9ncmVzcz59IFtkb3dubG9hZFByb2dyZXNzXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGR1cmluZyB0aGUgZG93bmxvYWQgcHJvY2Vzcy4gSXQgaXMgY2FsbGVkIHNldmVyYWwgdGltZXMgd2l0aCBvbmUgRG93bmxvYWRQcm9ncmVzcyBwYXJhbWV0ZXIuXG4gICAqL1xuICBkb3dubG9hZChcbiAgICBkb3dubG9hZFN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazxJTG9jYWxQYWNrYWdlPixcbiAgICBkb3dubG9hZEVycm9yPzogRXJyb3JDYWxsYmFjayxcbiAgICBkb3dubG9hZFByb2dyZXNzPzogU3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+XG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFib3J0cyB0aGUgY3VycmVudCBkb3dubG9hZCBzZXNzaW9uLCBwcmV2aW91c2x5IHN0YXJ0ZWQgd2l0aCBkb3dubG9hZCgpLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazx2b2lkPn0gW2Fib3J0U3VjY2Vzc10gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpZiB0aGUgYWJvcnQgb3BlcmF0aW9uIHN1Y2NlZWRlZC5cbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbYWJvcnRFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxuICAgKi9cbiAgYWJvcnREb3dubG9hZChhYm9ydFN1Y2Nlc3M/OiBTdWNjZXNzQ2FsbGJhY2s8dm9pZD4sIGFib3J0RXJyb3I/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgbG9jYWwgcGFja2FnZS5cbiAqXG4gKiAhISBUSElTIFRZUEUgSVMgUkVBRCBGUk9NIE5BVElWRSBDT0RFIEFTIFdFTEwuIEFOWSBDSEFOR0VTIFRPIFRISVMgSU5URVJGQUNFIE5FRURTIFRPIEJFIFVQREFURUQgSU4gTkFUSVZFIENPREUgISFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxQYWNrYWdlIGV4dGVuZHMgSVBhY2thZ2Uge1xuICAvKipcbiAgICogVGhlIGxvY2FsIHN0b3JhZ2UgcGF0aCB3aGVyZSB0aGlzIHBhY2thZ2UgaXMgbG9jYXRlZC5cbiAgICovXG4gIGxvY2FsUGF0aDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGN1cnJlbnQgYXBwbGljYXRpb24gcnVuIGlzIHRoZSBmaXJzdCBvbmUgYWZ0ZXIgdGhlIHBhY2thZ2Ugd2FzIGFwcGxpZWQuXG4gICAqL1xuICBpc0ZpcnN0UnVuOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoaXMgcGFja2FnZSB0byB0aGUgYXBwbGljYXRpb24uIFRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHJlbG9hZGVkIHdpdGggdGhpcyBwYWNrYWdlIGFuZCBvbiBldmVyeSBhcHBsaWNhdGlvbiBsYXVuY2ggdGhpcyBwYWNrYWdlIHdpbGwgYmUgbG9hZGVkLlxuICAgKiBPbiB0aGUgZmlyc3QgcnVuIGFmdGVyIHRoZSB1cGRhdGUsIHRoZSBhcHBsaWNhdGlvbiB3aWxsIHdhaXQgZm9yIGEgY29kZVB1c2gubm90aWZ5QXBwbGljYXRpb25SZWFkeSgpIGNhbGwuIE9uY2UgdGhpcyBjYWxsIGlzIG1hZGUsIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiBpcyBjb25zaWRlcmVkIGEgc3VjY2Vzcy5cbiAgICogT3RoZXJ3aXNlLCB0aGUgaW5zdGFsbCBvcGVyYXRpb24gd2lsbCBiZSBtYXJrZWQgYXMgZmFpbGVkLCBhbmQgdGhlIGFwcGxpY2F0aW9uIGlzIHJldmVydGVkIHRvIGl0cyBwcmV2aW91cyB2ZXJzaW9uIG9uIHRoZSBuZXh0IHJ1bi5cbiAgICpcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8SW5zdGFsbE1vZGU+fSBpbnN0YWxsU3VjY2VzcyBDYWxsYmFjayBpbnZva2VkIGlmIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiBzdWNjZWVkZWQuXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW2luc3RhbGxFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge0luc3RhbGxPcHRpb25zfSBbaW5zdGFsbE9wdGlvbnNdIE9wdGlvbmFsIHBhcmFtZXRlciB1c2VkIGZvciBjdXN0b21pemluZyB0aGUgaW5zdGFsbGF0aW9uIGJlaGF2aW9yLlxuICAgKi9cbiAgaW5zdGFsbChcbiAgICBpbnN0YWxsU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPEluc3RhbGxNb2RlPixcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayxcbiAgICBpbnN0YWxsT3B0aW9ucz86IEluc3RhbGxPcHRpb25zXG4gICk6IHZvaWQ7XG59XG5cbi8qKlxuICogRGVjb21wb3NlZCBzdGF0aWMgc2lkZSBvZiBSZW1vdGVQYWNrYWdlLlxuICogRm9yIENsYXNzIERlY29tcG9zaXRpb24gZ3VpZGVsaW5lcyBzZWUgaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvSGFuZGJvb2sjd3JpdGluZy1kdHMtZmlsZXMtZ3VpZGVsaW5lcy1hbmQtc3BlY2lmaWNzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmludGVyZmFjZSBSZW1vdGVQYWNrYWdlX1N0YXRpYyB7XG4gIG5ldyAoKTogSVJlbW90ZVBhY2thZ2U7XG59XG5cbi8qIHRzbGludDplbmFibGUgKi9cblxuLyoqXG4gKiBEZWNvbXBvc2VkIHN0YXRpYyBzaWRlIG9mIExvY2FsUGFja2FnZS5cbiAqIEZvciBDbGFzcyBEZWNvbXBvc2l0aW9uIGd1aWRlbGluZXMgc2VlIGh0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL0hhbmRib29rI3dyaXRpbmctZHRzLWZpbGVzLWd1aWRlbGluZXMtYW5kLXNwZWNpZmljc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5pbnRlcmZhY2UgTG9jYWxQYWNrYWdlX1N0YXRpYyB7XG4gIG5ldyAoKTogSUxvY2FsUGFja2FnZTtcbn1cblxuLyogdHNsaW50OmVuYWJsZSAqL1xuXG5kZWNsYXJlIGNvbnN0IFJlbW90ZVBhY2thZ2U6IFJlbW90ZVBhY2thZ2VfU3RhdGljO1xuZGVjbGFyZSBjb25zdCBMb2NhbFBhY2thZ2U6IExvY2FsUGFja2FnZV9TdGF0aWM7XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgSlNPTiBmb3JtYXQgb2YgdGhlIGN1cnJlbnQgcGFja2FnZSBpbmZvcm1hdGlvbiBmaWxlLlxuICogVGhpcyBmaWxlIGlzIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZSBvZiB0aGUgZGV2aWNlIGFuZCBwZXJzaXN0cyBiZXR3ZWVuIHN0b3JlIHVwZGF0ZXMgYW5kIGNvZGUtcHVzaCB1cGRhdGVzLlxuICpcbiAqICEhIFRISVMgRklMRSBJUyBSRUFEIEZST00gTkFUSVZFIENPREUgQVMgV0VMTC4gQU5ZIENIQU5HRVMgVE8gVEhJUyBJTlRFUkZBQ0UgTkVFRFMgVE8gQkUgVVBEQVRFRCBJTiBOQVRJVkUgQ09ERSAhIVxuICovXG5pbnRlcmZhY2UgSVBhY2thZ2VJbmZvTWV0YWRhdGEgZXh0ZW5kcyBJTG9jYWxQYWNrYWdlIHtcbiAgbmF0aXZlQnVpbGRUaW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBOYXRpdmVVcGRhdGVOb3RpZmljYXRpb24ge1xuICB1cGRhdGVBcHBWZXJzaW9uOiBib29sZWFuOyAvLyBBbHdheXMgdHJ1ZVxuICBhcHBWZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENhbGxiYWNrPFQ+ID0gKGVycm9yOiBFcnJvciwgcGFyYW1ldGVyOiBUKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgU3VjY2Vzc0NhbGxiYWNrPFQ+ID0gKHJlc3VsdD86IFQpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBFcnJvckNhbGxiYWNrID0gKGVycm9yPzogRXJyb3IpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgYXBwVmVyc2lvbjogc3RyaW5nO1xuICBjbGllbnRVbmlxdWVJZDogc3RyaW5nO1xuICBkZXBsb3ltZW50S2V5OiBzdHJpbmc7XG4gIHNlcnZlclVybDogc3RyaW5nO1xuICBpZ25vcmVBcHBWZXJzaW9uPzogYm9vbGVhbjtcbn1cblxuZGVjbGFyZSBjbGFzcyBBY3F1aXNpdGlvblN0YXR1cyB7XG4gIHN0YXRpYyBEZXBsb3ltZW50U3VjY2VlZGVkOiBzdHJpbmc7XG4gIHN0YXRpYyBEZXBsb3ltZW50RmFpbGVkOiBzdHJpbmc7XG59XG5cbmRlY2xhcmUgY2xhc3MgQWNxdWlzaXRpb25NYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoaHR0cFJlcXVlc3RlcjogSHR0cC5SZXF1ZXN0ZXIsIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pO1xuICBxdWVyeVVwZGF0ZVdpdGhDdXJyZW50UGFja2FnZShcbiAgICBjdXJyZW50UGFja2FnZTogSVBhY2thZ2UsXG4gICAgY2FsbGJhY2s/OiBDYWxsYmFjazxJUmVtb3RlUGFja2FnZSB8IE5hdGl2ZVVwZGF0ZU5vdGlmaWNhdGlvbj5cbiAgKTogdm9pZDtcbiAgcmVwb3J0U3RhdHVzRGVwbG95KFxuICAgIHBrZz86IElQYWNrYWdlLFxuICAgIHN0YXR1cz86IHN0cmluZyxcbiAgICBwcmV2aW91c0xhYmVsT3JBcHBWZXJzaW9uPzogc3RyaW5nLFxuICAgIHByZXZpb3VzRGVwbG95bWVudEtleT86IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IENhbGxiYWNrPHZvaWQ+XG4gICk6IHZvaWQ7XG4gIHJlcG9ydFN0YXR1c0Rvd25sb2FkKHBrZzogSVBhY2thZ2UsIGNhbGxiYWNrPzogQ2FsbGJhY2s8dm9pZD4pOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ29kZVB1c2hDb3Jkb3ZhUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBwYWNrYWdlIGluZm9ybWF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGFja2FnZVN1Y2Nlc3MgQ2FsbGJhY2sgaW52b2tlZCB3aXRoIHRoZSBjdXJyZW50bHkgZGVwbG95ZWQgcGFja2FnZSBpbmZvcm1hdGlvbi5cbiAgICogQHBhcmFtIHBhY2thZ2VFcnJvciBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IuXG4gICAqL1xuICBnZXRDdXJyZW50UGFja2FnZShwYWNrYWdlU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPElMb2NhbFBhY2thZ2U+LCBwYWNrYWdlRXJyb3I/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogR2V0cyB0aGUgcGVuZGluZyBwYWNrYWdlIGluZm9ybWF0aW9uLCBpZiBhbnkuIEEgcGVuZGluZyBwYWNrYWdlIGlzIG9uZSB0aGF0IGhhcyBiZWVuIGluc3RhbGxlZCBidXQgdGhlIGFwcGxpY2F0aW9uIHN0aWxsIHJ1bnMgdGhlIG9sZCBjb2RlLlxuICAgKiBUaGlzIGhhcHBlbnMgb25seSBhZnRlciBhIHBhY2thZ2UgaGFzIGJlZW4gaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlLCBidXQgdGhlIGFwcGxpY2F0aW9uIHdhcyBub3QgcmVzdGFydGVkL3Jlc3VtZWQgeWV0LlxuICAgKi9cbiAgZ2V0UGVuZGluZ1BhY2thZ2UocGFja2FnZVN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazxJTG9jYWxQYWNrYWdlPiwgcGFja2FnZUVycm9yPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aXRoIHRoZSBDb2RlUHVzaCBzZXJ2ZXIgaWYgYW4gdXBkYXRlIHBhY2thZ2UgaXMgYXZhaWxhYmxlIGZvciBkb3dubG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8SVJlbW90ZVBhY2thZ2U+fSBxdWVyeVN1Y2Nlc3MgQ2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqICAgICAgICAgICAgICAgICAgICAgVGhlIGNhbGxiYWNrIHRha2VzIG9uZSBSZW1vdGVQYWNrYWdlIHBhcmFtZXRlci4gQSBub24tbnVsbCBwYWNrYWdlIGlzIGEgdmFsaWQgdXBkYXRlLlxuICAgKiAgICAgICAgICAgICAgICAgICAgIEEgbnVsbCBwYWNrYWdlIG1lYW5zIHRoZSBhcHBsaWNhdGlvbiBpcyB1cCB0byBkYXRlIGZvciB0aGUgY3VycmVudCBuYXRpdmUgYXBwbGljYXRpb24gdmVyc2lvbi5cbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbcXVlcnlFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2RlcGxveW1lbnRLZXldIE9wdGlvbmFsIGRlcGxveW1lbnQga2V5IHRoYXQgb3ZlcnJpZGVzIHRoZSBjb25maWcueG1sIHNldHRpbmcuXG4gICAqL1xuICBjaGVja0ZvclVwZGF0ZShcbiAgICBxdWVyeVN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazxJUmVtb3RlUGFja2FnZT4sXG4gICAgcXVlcnlFcnJvcj86IEVycm9yQ2FsbGJhY2ssXG4gICAgZGVwbG95bWVudEtleT86IHN0cmluZ1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBOb3RpZmllcyB0aGUgcGx1Z2luIHRoYXQgdGhlIHVwZGF0ZSBvcGVyYXRpb24gc3VjY2VlZGVkIGFuZCB0aGF0IHRoZSBhcHBsaWNhdGlvbiBpcyByZWFkeS5cbiAgICogQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIHJlcXVpcmVkIG9uIHRoZSBmaXJzdCBydW4gYWZ0ZXIgYW4gdXBkYXRlLiBPbiBldmVyeSBzdWJzZXF1ZW50IGFwcGxpY2F0aW9uIHJ1biwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIGEgbm9vcC5cbiAgICogSWYgdXNpbmcgc3luYyBBUEksIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyBub3QgcmVxdWlyZWQgc2luY2Ugc3luYyBjYWxscyBpdCBpbnRlcm5hbGx5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazx2b2lkPn0gW25vdGlmeVN1Y2NlZWRlZF0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpZiB0aGUgcGx1Z2luIHdhcyBzdWNjZXNzZnVsbHkgbm90aWZpZWQuXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW25vdGlmeUZhaWxlZF0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yIGR1cmluZyBub3RpZnlpbmcgdGhlIHBsdWdpbi5cbiAgICovXG4gIG5vdGlmeUFwcGxpY2F0aW9uUmVhZHkobm90aWZ5U3VjY2VlZGVkPzogU3VjY2Vzc0NhbGxiYWNrPHZvaWQ+LCBub3RpZnlGYWlsZWQ/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogUmVsb2FkcyB0aGUgYXBwbGljYXRpb24uIElmIHRoZXJlIGlzIGEgcGVuZGluZyB1cGRhdGUgcGFja2FnZSBpbnN0YWxsZWQgdXNpbmcgT05fTkVYVF9SRVNUQVJUIG9yIE9OX05FWFRfUkVTVU1FIG1vZGVzLCB0aGUgdXBkYXRlXG4gICAqIHdpbGwgYmUgaW1tZWRpYXRlbHkgdmlzaWJsZSB0byB0aGUgdXNlci4gT3RoZXJ3aXNlLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmVsb2FkIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazx2b2lkPn0gaW5zdGFsbFN1Y2Nlc3NcbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbZXJyb3JDYWxsYmFja11cbiAgICovXG4gIHJlc3RhcnRBcHBsaWNhdGlvbihpbnN0YWxsU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPHZvaWQ+LCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgaW5zdGFsbGluZyB1cGRhdGVzIGluIG9uZSBtZXRob2QgY2FsbC5cbiAgICogVGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgZm9yIHNpbXBsaWNpdHksIGFuZCBpdHMgYmVoYXZpb3IgY2FuIGJlIHJlcGxpY2F0ZWQgYnkgdXNpbmcgd2luZG93LmNvZGVQdXNoLmNoZWNrRm9yVXBkYXRlKCksIFJlbW90ZVBhY2thZ2UncyBkb3dubG9hZCgpIGFuZCBMb2NhbFBhY2thZ2UncyBpbnN0YWxsKCkgbWV0aG9kcy5cbiAgICpcbiAgICogVGhlIGFsZ29yaXRobSBvZiB0aGlzIG1ldGhvZCBpcyB0aGUgZm9sbG93aW5nOlxuICAgKiAtIENoZWNrcyBmb3IgYW4gdXBkYXRlIG9uIHRoZSBDb2RlUHVzaCBzZXJ2ZXIuXG4gICAqIC0gSWYgYW4gdXBkYXRlIGlzIGF2YWlsYWJsZVxuICAgKiAgICAgICAgIC0gSWYgdGhlIHVwZGF0ZSBpcyBtYW5kYXRvcnkgYW5kIHRoZSBhbGVydE1lc3NhZ2UgaXMgc2V0IGluIG9wdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgaW5mb3JtZWQgdGhhdCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSB1cGRhdGVkIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cbiAgICogICAgICAgICAgIFRoZSB1cGRhdGUgcGFja2FnZSB3aWxsIHRoZW4gYmUgZG93bmxvYWRlZCBhbmQgYXBwbGllZC5cbiAgICogICAgICAgICAtIElmIHRoZSB1cGRhdGUgaXMgbm90IG1hbmRhdG9yeSBhbmQgdGhlIGNvbmZpcm1NZXNzYWdlIGlzIHNldCBpbiBvcHRpb25zLCB0aGUgdXNlciB3aWxsIGJlIGFza2VkIGlmIHRoZXkgd2FudCB0byB1cGRhdGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgKiAgICAgICAgICAgSWYgdGhleSBkZWNsaW5lLCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIFN5bmNTdGF0dXMuVVBEQVRFX0lHTk9SRUQuXG4gICAqICAgICAgICAgLSBPdGhlcndpc2UsIHRoZSB1cGRhdGUgcGFja2FnZSB3aWxsIGJlIGRvd25sb2FkZWQgYW5kIGFwcGxpZWQgd2l0aCBubyB1c2VyIGludGVyYWN0aW9uLlxuICAgKiAtIElmIG5vIHVwZGF0ZSBpcyBhdmFpbGFibGUgb24gdGhlIHNlcnZlciwgb3IgaWYgYSBwcmV2aW91c2x5IHJvbGxlZCBiYWNrIHVwZGF0ZSBpcyBhdmFpbGFibGUgYW5kIHRoZSBpZ25vcmVGYWlsZWRVcGRhdGVzIGlzIHNldCB0byB0cnVlLCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBTeW5jU3RhdHVzLlVQX1RPX0RBVEUuXG4gICAqIC0gSWYgYW4gZXJyb3Igb2NjdXJzIGR1cmluZyBjaGVja2luZyBmb3IgdXBkYXRlLCBkb3dubG9hZGluZyBvciBpbnN0YWxsaW5nIGl0LCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBTeW5jU3RhdHVzLkVSUk9SLlxuICAgKlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxTeW5jU3RhdHVzPn0gW3N5bmNDYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXR1cyBvZiB0aGUgc3luYyBvcGVyYXRpb24uXG4gICAqICAgICAgICAgICAgICAgICAgICAgVGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZSwgYW5kIHRoZSBwb3NzaWJsZSBzdGF0dXNlcyBhcmUgZGVmaW5lZCBieSB0aGUgU3luY1N0YXR1cyBlbnVtLlxuICAgKiBAcGFyYW0ge1N5bmNPcHRpb25zfSBbc3luY09wdGlvbnNdIE9wdGlvbmFsIFN5bmNPcHRpb25zIHBhcmFtZXRlciBjb25maWd1cmluZyB0aGUgYmVoYXZpb3Igb2YgdGhlIHN5bmMgb3BlcmF0aW9uLlxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPn0gW2Rvd25sb2FkUHJvZ3Jlc3NdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgZHVyaW5nIHRoZSBkb3dubG9hZCBwcm9jZXNzLiBJdCBpcyBjYWxsZWQgc2V2ZXJhbCB0aW1lcyB3aXRoIG9uZSBEb3dubG9hZFByb2dyZXNzIHBhcmFtZXRlci5cbiAgICovXG4gIHN5bmMoXG4gICAgc3luY0NhbGxiYWNrPzogU3VjY2Vzc0NhbGxiYWNrPFN5bmNTdGF0dXM+LFxuICAgIHN5bmNPcHRpb25zPzogU3luY09wdGlvbnMsXG4gICAgZG93bmxvYWRQcm9ncmVzcz86IFN1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPlxuICApOiB2b2lkO1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIHBvc3NpYmxlIHJlc3VsdCBzdGF0dXNlcyBvZiB0aGUgd2luZG93LmNvZGVQdXNoLnN5bmMgb3BlcmF0aW9uLlxuICovXG5leHBvcnQgZW51bSBTeW5jU3RhdHVzIHtcbiAgLyoqXG4gICAqIFRoZSBhcHBsaWNhdGlvbiBpcyB1cCB0byBkYXRlLlxuICAgKi9cbiAgVVBfVE9fREFURSxcblxuICAvKipcbiAgICogQW4gdXBkYXRlIGlzIGF2YWlsYWJsZSwgaXQgaGFzIGJlZW4gZG93bmxvYWRlZCwgdW56aXBwZWQgYW5kIGNvcGllZCB0byB0aGUgZGVwbG95bWVudCBmb2xkZXIuXG4gICAqIEFmdGVyIHRoZSBjb21wbGV0aW9uIG9mIHRoZSBjYWxsYmFjayBpbnZva2VkIHdpdGggU3luY1N0YXR1cy5VUERBVEVfSU5TVEFMTEVELCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSByZWxvYWRlZCB3aXRoIHRoZSB1cGRhdGVkIGNvZGUgYW5kIHJlc291cmNlcy5cbiAgICovXG4gIFVQREFURV9JTlNUQUxMRUQsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIHVwZGF0ZSBpcyBhdmFpbGFibGUsIGJ1dCB0aGUgdXNlciBkZWNsaW5lZCB0byBpbnN0YWxsIGl0LiBUaGUgdXBkYXRlIHdhcyBub3QgZG93bmxvYWRlZC5cbiAgICovXG4gIFVQREFURV9JR05PUkVELFxuXG4gIC8qKlxuICAgKiBBbiBlcnJvciBoYXBwZW5lZCBkdXJpbmcgdGhlIHN5bmMgb3BlcmF0aW9uLiBUaGlzIG1pZ2h0IGJlIGFuIGVycm9yIHdoaWxlIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgc2VydmVyLCBkb3dubG9hZGluZyBvciB1bnppcGluZyB0aGUgdXBkYXRlLlxuICAgKiBUaGUgY29uc29sZSBsb2dzIHNob3VsZCBjb250YWluIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBoYXBwZW5lZC4gTm8gdXBkYXRlIGhhcyBiZWVuIGFwcGxpZWQgaW4gdGhpcyBjYXNlLlxuICAgKi9cbiAgRVJST1IsXG5cbiAgLyoqXG4gICAqIFRoZXJlIGlzIGFuIG9uZ29pbmcgc3luYyBpbiBwcm9ncmVzcywgc28gdGhpcyBhdHRlbXB0IHRvIHN5bmMgaGFzIGJlZW4gYWJvcnRlZC5cbiAgICovXG4gIElOX1BST0dSRVNTLFxuXG4gIC8qKlxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gdGhlIHBsdWdpbiBpcyBhYm91dCB0byBjaGVjayBmb3IgdXBkYXRlcy5cbiAgICovXG4gIENIRUNLSU5HX0ZPUl9VUERBVEUsXG5cbiAgLyoqXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSBhIHVzZXIgZGlhbG9nIGlzIGFib3V0IHRvIGJlIGRpc3BsYXllZC4gVGhpcyBzdGF0dXMgd2lsbCBiZSByZXBvcnRlZCBvbmx5IGlmIHVzZXIgaW50ZXJhY3Rpb24gaXMgZW5hYmxlZC5cbiAgICovXG4gIEFXQUlUSU5HX1VTRVJfQUNUSU9OLFxuXG4gIC8qKlxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gdGhlIHVwZGF0ZSBwYWNrYWdlIGlzIGFib3V0IHRvIGJlIGRvd25sb2FkZWQuXG4gICAqL1xuICBET1dOTE9BRElOR19QQUNLQUdFLFxuXG4gIC8qKlxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gdGhlIHVwZGF0ZSBwYWNrYWdlIGlzIGFib3V0IHRvIGJlIGluc3RhbGxlZC5cbiAgICovXG4gIElOU1RBTExJTkdfVVBEQVRFLFxufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIGF2YWlsYWJsZSBpbnN0YWxsIG1vZGVzIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgZW51bSBJbnN0YWxsTW9kZSB7XG4gIC8qKlxuICAgKiBUaGUgdXBkYXRlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcnVubmluZyBhcHBsaWNhdGlvbiBpbW1lZGlhdGVseS4gVGhlIGFwcGxpY2F0aW9uIHdpbGwgYmUgcmVsb2FkZWQgd2l0aCB0aGUgbmV3IGNvbnRlbnQgaW1tZWRpYXRlbHkuXG4gICAqL1xuICBJTU1FRElBVEUsXG5cbiAgLyoqXG4gICAqIFRoZSB1cGRhdGUgaXMgZG93bmxvYWRlZCBidXQgbm90IGluc3RhbGxlZCBpbW1lZGlhdGVseS4gVGhlIG5ldyBjb250ZW50IHdpbGwgYmUgYXZhaWxhYmxlIHRoZSBuZXh0IHRpbWUgdGhlIGFwcGxpY2F0aW9uIGlzIHN0YXJ0ZWQuXG4gICAqL1xuICBPTl9ORVhUX1JFU1RBUlQsXG5cbiAgLyoqXG4gICAqIFRoZSB1ZHBhdGUgaXMgZG93bmxvYWRlZCBidXQgbm90IGluc3RhbGxlZCBpbW1lZGlhdGVseS4gVGhlIG5ldyBjb250ZW50IHdpbGwgYmUgYXZhaWxhYmxlIHRoZSBuZXh0IHRpbWUgdGhlIGFwcGxpY2F0aW9uIGlzIHJlc3VtZWQgb3IgcmVzdGFydGVkLCB3aGljaGV2ZXIgZXZlbnQgaGFwcGVuZHMgZmlyc3QuXG4gICAqL1xuICBPTl9ORVhUX1JFU1VNRSxcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbGxPcHRpb25zIHtcbiAgLyoqXG4gICAqIFVzZWQgdG8gc3BlY2lmeSB0aGUgSW5zdGFsbE1vZGUgdXNlZCBmb3IgdGhlIGluc3RhbGwgb3BlcmF0aW9uLiBUaGlzIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBJbnN0YWxsTW9kZS5PTl9ORVhUX1JFU1RBUlQuXG4gICAqL1xuICBpbnN0YWxsTW9kZT86IEluc3RhbGxNb2RlO1xuXG4gIC8qKlxuICAgKiBJZiBpbnN0YWxsTW9kZSA9PT0gT05fTkVYVF9SRVNVTUUsIHRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIChpbiBzZWNvbmRzKSB3aGljaCBuZWVkcyB0byBwYXNzIHdpdGggdGhlIGFwcCBpbiB0aGUgYmFja2dyb3VuZCBiZWZvcmUgYW4gdXBkYXRlIGluc3RhbGwgb2NjdXJzIHdoZW4gdGhlIGFwcCBpcyByZXN1bWVkLlxuICAgKi9cbiAgbWluaW11bUJhY2tncm91bmREdXJhdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogVXNlZCB0byBzcGVjaWZ5IHRoZSBJbnN0YWxsTW9kZSB1c2VkIGZvciB0aGUgaW5zdGFsbCBvcGVyYXRpb24gaWYgdGhlIHVwZGF0ZSBpcyBtYW5kYXRvcnkuIFRoaXMgaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIEluc3RhbGxNb2RlLklNTUVESUFURS5cbiAgICovXG4gIG1hbmRhdG9yeUluc3RhbGxNb2RlPzogSW5zdGFsbE1vZGU7XG59XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgc3luYyBvcGVyYXRpb24gb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTeW5jT3B0aW9ucyBleHRlbmRzIEluc3RhbGxPcHRpb25zIHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGJvb2xlYW4gZmxhZy4gSWYgc2V0LCBwcmV2aW91cyB1cGRhdGVzIHdoaWNoIHdlcmUgcm9sbGVkIGJhY2sgd2lsbCBiZSBpZ25vcmVkLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgaWdub3JlRmFpbGVkVXBkYXRlcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZW5hYmxlLCBkaXNhYmxlIG9yIGN1c3RvbWl6ZSB0aGUgdXNlciBpbnRlcmFjdGlvbiBkdXJpbmcgc3luYy5cbiAgICogSWYgc2V0IHRvIGZhbHNlLCB1c2VyIGludGVyYWN0aW9uIHdpbGwgYmUgZGlzYWJsZWQuIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciB3aWxsIGJlIGFsZXJ0ZWQgb3IgYXNrZWQgdG8gY29uZmlybSBuZXcgdXBkYXRlcywgYmFzZWQgb24gd2hldGhlciB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeS5cbiAgICogVG8gY3VzdG9taXplIHRoZSB1c2VyIGRpYWxvZywgdGhpcyBvcHRpb24gY2FuIGJlIHNldCB0byBhIGN1c3RvbSBVcGRhdGVEaWFsb2dPcHRpb25zIGluc3RhbmNlLlxuICAgKi9cbiAgdXBkYXRlRGlhbG9nPzogYm9vbGVhbiB8IFVwZGF0ZURpYWxvZ09wdGlvbnM7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgY29uZmlnLnhtbCBkZXBsb3ltZW50IGtleSB3aGVuIGNoZWNraW5nIGZvciB1cGRhdGVzLlxuICAgKi9cbiAgZGVwbG95bWVudEtleT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBhbGVydCBvciBjb25maXJtYXRpb24gZGlhbG9nXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlRGlhbG9nT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJZiBhIG1hbmRhdG9yeSB1cGRhdGUgaXMgYXZhaWxhYmxlIGFuZCB0aGlzIG9wdGlvbiBpcyBzZXQsIHRoZSBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGluIGFuIGFsZXJ0IGRpYWxvZyBiZWZvcmUgZG93bmxvYWRpbmcgYW5kIGluc3RhbGxpbmcgdGhlIHVwZGF0ZS5cbiAgICogVGhlIHVzZXIgd2lsbCBub3QgYmUgYWJsZSB0byBjYW5jZWwgdGhlIG9wZXJhdGlvbiwgc2luY2UgdGhlIHVwZGF0ZSBpcyBtYW5kYXRvcnkuXG4gICAqL1xuICBtYW5kYXRvcnlVcGRhdGVNZXNzYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiBhbiBvcHRpb25hbCB1cGRhdGUgaXMgYXZhaWxhYmxlIGFuZCB0aGlzIG9wdGlvbiBpcyBzZXQsIHRoZSBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGluIGEgY29uZmlybWF0aW9uIGRpYWxvZy5cbiAgICogSWYgdGhlIHVzZXIgY29uZmlybXMgdGhlIHVwZGF0ZSwgaXQgd2lsbCBiZSBkb3dubG9hZGVkIGFuZCBpbnN0YWxsZWQuIE90aGVyd2lzZSwgdGhlIHVwZGF0ZSB1cGRhdGUgaXMgbm90IGRvd25sb2FkZWQuXG4gICAqL1xuICBvcHRpb25hbFVwZGF0ZU1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgZGlhbG9nIGJveCB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSB1c2VyIGluIGNhc2Ugb2YgYSBtYW5kYXRvcnkgb3Igb3B0aW9uYWwgdXBkYXRlLlxuICAgKiBUaGlzIHRpdGxlIHdpbGwgb25seSBiZSB1c2VkIGlmIGF0IGxlYXN0IG9uZSBvZiBtYW5kYXRvcnlVcGRhdGVNZXNzYWdlIG9yIG9wdGlvbmFsVXBkYXRlTWVzc2FnZSBvcHRpb25zIGFyZSBzZXQuXG4gICAqL1xuICB1cGRhdGVUaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGxhYmVsIG9mIHRoZSBjb25maXJtYXRpb24gYnV0dG9uIGluIGNhc2Ugb2YgYW4gb3B0aW9uYWwgdXBkYXRlLlxuICAgKi9cbiAgb3B0aW9uYWxJbnN0YWxsQnV0dG9uTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBvZiB0aGUgY2FuY2VsIGJ1dHRvbiBpbiBjYXNlIG9mIGFuIG9wdGlvbmFsIHVwZGF0ZS5cbiAgICovXG4gIG9wdGlvbmFsSWdub3JlQnV0dG9uTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBvZiB0aGUgY29udGludWUgYnV0dG9uIGluIGNhc2Ugb2YgYSBtYW5kYXRvcnkgdXBkYXRlLlxuICAgKi9cbiAgbWFuZGF0b3J5Q29udGludWVCdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogRmxhZyBpbmRpY2F0aW5nIGlmIHRoZSB1cGRhdGUgZGVzY3JpcHRpb24gcHJvdmlkZWQgYnkgdGhlIENvZGVQdXNoIHNlcnZlciBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2cgYm94IGFwcGVuZGVkIHRvIHRoZSB1cGRhdGUgbWVzc2FnZS5cbiAgICovXG4gIGFwcGVuZFJlbGVhc2VEZXNjcmlwdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHByZWZpeCB0byBhZGQgdG8gdGhlIHJlbGVhc2UgZGVzY3JpcHRpb24uXG4gICAqL1xuICBkZXNjcmlwdGlvblByZWZpeD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBKU09OIGZvcm1hdCBvZiB0aGUgcGFja2FnZSBkaWZmIG1hbmlmZXN0IGZpbGUuXG4gKi9cbmludGVyZmFjZSBJRGlmZk1hbmlmZXN0IHtcbiAgZGVsZXRlZEZpbGVzOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBmb3JtYXQgb2YgdGhlIERvd25sb2FkUHJvZ3Jlc3Mgb2JqZWN0LCB1c2VkIHRvIHNlbmQgcGVyaW9kaWNhbCB1cGRhdGUgbm90aWZpY2F0aW9ucyBvbiB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHVwZGF0ZSBkb3dubG9hZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZFByb2dyZXNzIHtcbiAgdG90YWxCeXRlczogbnVtYmVyO1xuICByZWNlaXZlZEJ5dGVzOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgQ29kZSBQdXNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvZGVQdXNoIHBsdWdpbiBmb3IgQ29yZG92YSBieSBNaWNyb3NvZnQgdGhhdCBzdXBwb3J0cyBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRGVsbG9zNy9leGFtcGxlLWNvcmRvdmEtY29kZS1wdXNoLXBsdWdpblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb2RlUHVzaCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb2RlLXB1c2gvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZGVQdXNoOiBDb2RlUHVzaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gbm90ZSAtIG1vc3RseSBlcnJvciAmIGNvbXBsZXRlZCBtZXRob2RzIG9mIG9ic2VydmFibGUgd2lsbCBub3QgZmlyZVxuICogLy8gYXMgc3luY1N0YXR1cyB3aWxsIGNvbnRhaW4gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHVwZGF0ZVxuICogdGhpcy5jb2RlUHVzaC5zeW5jKCkuc3Vic2NyaWJlKChzeW5jU3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzeW5jU3RhdHVzKSk7XG4gKlxuICogY29uc3QgZG93bmxvYWRQcm9ncmVzcyA9IChwcm9ncmVzcykgPT4geyBjb25zb2xlLmxvZyhgRG93bmxvYWRlZCAke3Byb2dyZXNzLnJlY2VpdmVkQnl0ZXN9IG9mICR7cHJvZ3Jlc3MudG90YWxCeXRlc31gKTsgfVxuICogdGhpcy5jb2RlUHVzaC5zeW5jKHt9LCBkb3dubG9hZFByb2dyZXNzKS5zdWJzY3JpYmUoKHN5bmNTdGF0dXMpID0+IGNvbnNvbGUubG9nKHN5bmNTdGF0dXMpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDb2RlUHVzaCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNvZGUtcHVzaCcsXG4gIHBsdWdpblJlZjogJ2NvZGVQdXNoJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvY29yZG92YS1wbHVnaW4tY29kZS1wdXNoJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvZGVQdXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHBhY2thZ2UgaW5mb3JtYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElMb2NhbFBhY2thZ2U+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRDdXJyZW50UGFja2FnZSgpOiBQcm9taXNlPElMb2NhbFBhY2thZ2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcGVuZGluZyBwYWNrYWdlIGluZm9ybWF0aW9uLCBpZiBhbnkuIEEgcGVuZGluZyBwYWNrYWdlIGlzIG9uZSB0aGF0IGhhcyBiZWVuIGluc3RhbGxlZCBidXQgdGhlIGFwcGxpY2F0aW9uIHN0aWxsIHJ1bnMgdGhlIG9sZCBjb2RlLlxuICAgKiBUaGlzIGhhcHBlbnMgb25seSBhZnRlciBhIHBhY2thZ2UgaGFzIGJlZW4gaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlLCBidXQgdGhlIGFwcGxpY2F0aW9uIHdhcyBub3QgcmVzdGFydGVkL3Jlc3VtZWQgeWV0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxQYWNrYWdlPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UGVuZGluZ1BhY2thZ2UoKTogUHJvbWlzZTxJTG9jYWxQYWNrYWdlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aXRoIHRoZSBDb2RlUHVzaCBzZXJ2ZXIgaWYgYW4gdXBkYXRlIHBhY2thZ2UgaXMgYXZhaWxhYmxlIGZvciBkb3dubG9hZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtkZXBsb3ltZW50S2V5XSBPcHRpb25hbCBkZXBsb3ltZW50IGtleSB0aGF0IG92ZXJyaWRlcyB0aGUgY29uZmlnLnhtbCBzZXR0aW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJUmVtb3RlUGFja2FnZT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjaGVja0ZvclVwZGF0ZShkZXBsb3ltZW50S2V5Pzogc3RyaW5nKTogUHJvbWlzZTxJUmVtb3RlUGFja2FnZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3RpZmllcyB0aGUgcGx1Z2luIHRoYXQgdGhlIHVwZGF0ZSBvcGVyYXRpb24gc3VjY2VlZGVkIGFuZCB0aGF0IHRoZSBhcHBsaWNhdGlvbiBpcyByZWFkeS5cbiAgICogQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIHJlcXVpcmVkIG9uIHRoZSBmaXJzdCBydW4gYWZ0ZXIgYW4gdXBkYXRlLiBPbiBldmVyeSBzdWJzZXF1ZW50IGFwcGxpY2F0aW9uIHJ1biwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIGEgbm9vcC5cbiAgICogSWYgdXNpbmcgc3luYyBBUEksIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyBub3QgcmVxdWlyZWQgc2luY2Ugc3luYyBjYWxscyBpdCBpbnRlcm5hbGx5LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbm90aWZ5QXBwbGljYXRpb25SZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkcyB0aGUgYXBwbGljYXRpb24uIElmIHRoZXJlIGlzIGEgcGVuZGluZyB1cGRhdGUgcGFja2FnZSBpbnN0YWxsZWQgdXNpbmcgT05fTkVYVF9SRVNUQVJUIG9yIE9OX05FWFRfUkVTVU1FIG1vZGVzLCB0aGUgdXBkYXRlXG4gICAqIHdpbGwgYmUgaW1tZWRpYXRlbHkgdmlzaWJsZSB0byB0aGUgdXNlci4gT3RoZXJ3aXNlLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmVsb2FkIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzdGFydEFwcGxpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGluc3RhbGxpbmcgdXBkYXRlcyBpbiBvbmUgbWV0aG9kIGNhbGwuXG4gICAqIFRoaXMgbWV0aG9kIGlzIHByb3ZpZGVkIGZvciBzaW1wbGljaXR5LCBhbmQgaXRzIGJlaGF2aW9yIGNhbiBiZSByZXBsaWNhdGVkIGJ5IHVzaW5nIHdpbmRvdy5jb2RlUHVzaC5jaGVja0ZvclVwZGF0ZSgpLCBSZW1vdGVQYWNrYWdlJ3MgZG93bmxvYWQoKSBhbmQgTG9jYWxQYWNrYWdlJ3MgaW5zdGFsbCgpIG1ldGhvZHMuXG4gICAqXG4gICAqIFRoZSBhbGdvcml0aG0gb2YgdGhpcyBtZXRob2QgaXMgdGhlIGZvbGxvd2luZzpcbiAgICogLSBDaGVja3MgZm9yIGFuIHVwZGF0ZSBvbiB0aGUgQ29kZVB1c2ggc2VydmVyLlxuICAgKiAtIElmIGFuIHVwZGF0ZSBpcyBhdmFpbGFibGVcbiAgICogICAgICAgICAtIElmIHRoZSB1cGRhdGUgaXMgbWFuZGF0b3J5IGFuZCB0aGUgYWxlcnRNZXNzYWdlIGlzIHNldCBpbiBvcHRpb25zLCB0aGUgdXNlciB3aWxsIGJlIGluZm9ybWVkIHRoYXQgdGhlIGFwcGxpY2F0aW9uIHdpbGwgYmUgdXBkYXRlZCB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gICAqICAgICAgICAgICBUaGUgdXBkYXRlIHBhY2thZ2Ugd2lsbCB0aGVuIGJlIGRvd25sb2FkZWQgYW5kIGFwcGxpZWQuXG4gICAqICAgICAgICAgLSBJZiB0aGUgdXBkYXRlIGlzIG5vdCBtYW5kYXRvcnkgYW5kIHRoZSBjb25maXJtTWVzc2FnZSBpcyBzZXQgaW4gb3B0aW9ucywgdGhlIHVzZXIgd2lsbCBiZSBhc2tlZCBpZiB0aGV5IHdhbnQgdG8gdXBkYXRlIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cbiAgICogICAgICAgICAgIElmIHRoZXkgZGVjbGluZSwgdGhlIHN5bmNDYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2l0aCBTeW5jU3RhdHVzLlVQREFURV9JR05PUkVELlxuICAgKiAgICAgICAgIC0gT3RoZXJ3aXNlLCB0aGUgdXBkYXRlIHBhY2thZ2Ugd2lsbCBiZSBkb3dubG9hZGVkIGFuZCBhcHBsaWVkIHdpdGggbm8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICogLSBJZiBubyB1cGRhdGUgaXMgYXZhaWxhYmxlIG9uIHRoZSBzZXJ2ZXIsIG9yIGlmIGEgcHJldmlvdXNseSByb2xsZWQgYmFjayB1cGRhdGUgaXMgYXZhaWxhYmxlIGFuZCB0aGUgaWdub3JlRmFpbGVkVXBkYXRlcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlIHN5bmNDYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgU3luY1N0YXR1cy5VUF9UT19EQVRFLlxuICAgKiAtIElmIGFuIGVycm9yIG9jY3VycyBkdXJpbmcgY2hlY2tpbmcgZm9yIHVwZGF0ZSwgZG93bmxvYWRpbmcgb3IgaW5zdGFsbGluZyBpdCwgdGhlIHN5bmNDYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgU3luY1N0YXR1cy5FUlJPUi5cbiAgICpcbiAgICogQHBhcmFtIHtTeW5jT3B0aW9uc30gW3N5bmNPcHRpb25zXSBPcHRpb25hbCBTeW5jT3B0aW9ucyBwYXJhbWV0ZXIgY29uZmlndXJpbmcgdGhlIGJlaGF2aW9yIG9mIHRoZSBzeW5jIG9wZXJhdGlvbi5cbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8RG93bmxvYWRQcm9ncmVzcz59IFtkb3dubG9hZFByb2dyZXNzXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGR1cmluZyB0aGUgZG93bmxvYWQgcHJvY2Vzcy4gSXQgaXMgY2FsbGVkIHNldmVyYWwgdGltZXMgd2l0aCBvbmUgRG93bmxvYWRQcm9ncmVzcyBwYXJhbWV0ZXIuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFN5bmNTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsIC8vIHdlIGRvbid0IG5lZWQgdGhpcywgc28gd2Ugc2V0IGl0IHRvIGEgdmFsdWUgaGlnaGVyIHRoYW4gIyBvZiBhcmdzXG4gIH0pXG4gIHN5bmMoc3luY09wdGlvbnM/OiBTeW5jT3B0aW9ucywgZG93bmxvYWRQcm9ncmVzcz86IFN1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPik6IE9ic2VydmFibGU8U3luY1N0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19