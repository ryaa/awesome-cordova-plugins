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
var VideoEditorOriginal = /** @class */ (function (_super) {
    __extends(VideoEditorOriginal, _super);
    function VideoEditorOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OptimizeForNetworkUse = {
            NO: 0,
            YES: 1,
        };
        _this.OutputFileType = {
            M4V: 0,
            MPEG4: 1,
            M4A: 2,
            QUICK_TIME: 3,
        };
        return _this;
    }
    VideoEditorOriginal.prototype.transcodeVideo = function (options) { return cordova(this, "transcodeVideo", { "callbackOrder": "reverse" }, arguments); };
    VideoEditorOriginal.prototype.trim = function (options) { return cordova(this, "trim", { "callbackOrder": "reverse", "platforms": ["iOS"] }, arguments); };
    VideoEditorOriginal.prototype.createThumbnail = function (options) { return cordova(this, "createThumbnail", { "callbackOrder": "reverse" }, arguments); };
    VideoEditorOriginal.prototype.getVideoInfo = function (options) { return cordova(this, "getVideoInfo", { "callbackOrder": "reverse" }, arguments); };
    VideoEditorOriginal.pluginName = "VideoEditor";
    VideoEditorOriginal.plugin = "cordova-plugin-video-editor";
    VideoEditorOriginal.pluginRef = "VideoEditor";
    VideoEditorOriginal.repo = "https://github.com/jbavari/cordova-plugin-video-editor";
    VideoEditorOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return VideoEditorOriginal;
}(AwesomeCordovaNativePlugin));
var VideoEditor = new VideoEditorOriginal();
export { VideoEditor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmlkZW8tZWRpdG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0ozRCwrQkFBMEI7OztRQUN6RCwyQkFBcUIsR0FBRztZQUN0QixFQUFFLEVBQUUsQ0FBQztZQUNMLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGLG9CQUFjLEdBQUc7WUFDZixHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxDQUFDO1lBQ1IsR0FBRyxFQUFFLENBQUM7WUFDTixVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUM7OztJQVdGLG9DQUFjLGFBQUMsT0FBeUI7SUFjeEMsMEJBQUksYUFBQyxPQUFvQjtJQWF6QixxQ0FBZSxhQUFDLE9BQStCO0lBYS9DLGtDQUFZLGFBQUMsT0FBNEI7Ozs7OztzQkFqTjNDO0VBbUppQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNjb2RlT3B0aW9ucyB7XG4gIC8qKiBUaGUgcGF0aCB0byB0aGUgdmlkZW8gb24gdGhlIGRldmljZS4gKi9cbiAgZmlsZVVyaTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgZmlsZSBuYW1lIGZvciB0aGUgdHJhbnNjb2RlZCB2aWRlbyAqL1xuICBvdXRwdXRGaWxlTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBJbnN0cnVjdGlvbnMgb24gaG93IHRvIGVuY29kZSB0aGUgdmlkZW8uIEFuZHJvaWQgaXMgYWx3YXlzIG1wNCAqL1xuICBvdXRwdXRGaWxlVHlwZT86IG51bWJlcjtcblxuICAvKiogU2hvdWxkIHRoZSB2aWRlbyBiZSBwcm9jZXNzZWQgd2l0aCBxdWFpbHR5IG9yIHNwZWVkIGluIG1pbmQuIGlPUyBvbmx5ICovXG4gIG9wdGltaXplRm9yTmV0d29ya1VzZT86IG51bWJlcjtcblxuICAvKiogU2F2ZSB0aGUgbmV3IHZpZGVvIHRoZSBsaWJyYXJ5LiBOb3Qgc3VwcG9ydGVkIGluIHdpbmRvd3MuIERlZmF1bHRzIHRvIHRydWUgKi9cbiAgc2F2ZVRvTGlicmFyeT86IGJvb2xlYW47XG5cbiAgLyoqIERlbGV0ZSB0aGUgb3JpZ2luYWwgdmlkZW8uIEFuZHJvaWQgb25seS4gRGVmYXVsdHMgdG8gZmFsc2UgKi9cbiAgZGVsZXRlSW5wdXRGaWxlPzogYm9vbGVhbjtcblxuICAvKiogaU9TIG9ubHkuIERlZmF1bHRzIHRvIHRydWUgKi9cbiAgbWFpbnRhaW5Bc3BlY3RSYXRpbz86IGJvb2xlYW47XG5cbiAgLyoqIFdpZHRoIG9mIHRoZSByZXN1bHQgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqIEhlaWdodCBvZiB0aGUgcmVzdWx0ICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKiogQml0cmF0ZSBpbiBiaXRzLiBEZWZhdWx0cyB0byAxIG1lZ2FiaXQgKDEwMDAwMDApLiAqL1xuICB2aWRlb0JpdHJhdGU/OiBudW1iZXI7XG5cbiAgLyoqIEZyYW1lcyBwZXIgc2Vjb25kIG9mIHRoZSByZXN1bHQuIEFuZHJvaWQgb25seS4gRGVmYXVsdHMgdG8gMjQuICovXG4gIGZwcz86IG51bWJlcjtcblxuICAvKiogTnVtYmVyIG9mIGF1ZGlvIGNoYW5uZWxzLiBpT1Mgb25seS4gRGVmYXVsdHMgdG8gMi4gKi9cbiAgYXVkaW9DaGFubmVscz86IG51bWJlcjtcblxuICAvKiBTYW1wbGUgcmF0ZSBmb3IgdGhlIGF1ZGlvLiBpT1Mgb25seS4gRGVmYXVsdHMgdG8gNDQxMDAqL1xuICBhdWRpb1NhbXBsZVJhdGU/OiBudW1iZXI7XG5cbiAgLyoqIFNhbXBsZSByYXRlIGZvciB0aGUgYXVkaW8uIGlPUyBvbmx5LiBEZWZhdWx0cyB0byAxMjgga2lsb2JpdHMgKDEyODAwMCkuICovXG4gIGF1ZGlvQml0cmF0ZT86IG51bWJlcjtcblxuICAvKiogTm90IHN1cHBvcnRlZCBpbiB3aW5kb3dzLCBwcm9ncmVzcyBvbiB0aGUgdHJhbnNjb2RlLiBpbmZvIHdpbGwgYmUgYSBudW1iZXIgZnJvbSAwIHRvIDEwMCAqL1xuICBwcm9ncmVzcz86IChpbmZvOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJpbU9wdGlvbnMge1xuICAvKiogUGF0aCB0byBpbnB1dCB2aWRlby4gKi9cbiAgZmlsZVVyaTogc3RyaW5nO1xuXG4gIC8qKiBUaW1lIHRvIHN0YXJ0IHRyaW1taW5nIGluIHNlY29uZHMgKi9cbiAgdHJpbVN0YXJ0OiBudW1iZXI7XG5cbiAgLyoqIFRpbWUgdG8gZW5kIHRyaW1taW5nIGluIHNlY29uZHMgKi9cbiAgdHJpbUVuZDogbnVtYmVyO1xuXG4gIC8qKiBPdXRwdXQgZmlsZSBuYW1lICovXG4gIG91dHB1dEZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIFByb2dyZXNzIG9uIHRyYW5zY29kZS4gaW5mbyB3aWxsIGJlIGEgbnVtYmVyIGZyb20gMCB0byAxMDAgKi9cbiAgcHJvZ3Jlc3M/OiAoaW5mbzogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVRodW1ibmFpbE9wdGlvbnMge1xuICAvKiogVGhlIHBhdGggdG8gdGhlIHZpZGVvIG9uIHRoZSBkZXZpY2UgKi9cbiAgZmlsZVVyaTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgZmlsZSBuYW1lIGZvciB0aGUgSlBFRyBpbWFnZSAqL1xuICBvdXRwdXRGaWxlTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBMb2NhdGlvbiBpbiB0aGUgdmlkZW8gdG8gY3JlYXRlIHRoZSB0aHVtYm5haWwgKGluIHNlY29uZHMpICovXG4gIGF0VGltZT86IG51bWJlcjtcblxuICAvKiogV2lkdGggb2YgdGhlIHRodW1ibmFpbC4gKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqIEhlaWdodCBvZiB0aGUgdGh1bWJuYWlsLiAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqIFF1YWxpdHkgb2YgdGhlIHRodW1ibmFpbCAoYmV0d2VlbiAxIGFuZCAxMDApLiAqL1xuICBxdWFsaXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFZpZGVvSW5mb09wdGlvbnMge1xuICAvKiogVGhlIHBhdGggdG8gdGhlIHZpZGVvIG9uIHRoZSBkZXZpY2UuICovXG4gIGZpbGVVcmk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWRlb0luZm8ge1xuICAvKiogV2lkdGggb2YgdGhlIHZpZGVvIGluIHBpeGVscy4gKi9cbiAgd2lkdGg6IG51bWJlcjtcblxuICAvKiogSGVpZ2h0IG9mIHRoZSB2aWRlbyBpbiBwaXhlbHMuICovXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8qKiBPcmllbnRhdGlvbiBvZiB0aGUgdmlkZW8uIFdpbGwgYmUgZWl0aGVyIHBvcnRyYWl0IG9yIGxhbmRzY2FwZS4gKi9cbiAgb3JpZW50YXRpb246ICdwb3J0cmFpdCcgfCAnbGFuZHNjYXBlJztcblxuICAvKiogRHVyYXRpb24gb2YgdGhlIHZpZGVvIGluIHNlY29uZHMuICovXG4gIGR1cmF0aW9uOiBudW1iZXI7XG5cbiAgLyoqIFNpemUgb2YgdGhlIHZpZGVvIGluIGJ5dGVzLiAqL1xuICBzaXplOiBudW1iZXI7XG5cbiAgLyoqIEJpdHJhdGUgb2YgdGhlIHZpZGVvIGluIGJpdHMgcGVyIHNlY29uZC4gKi9cbiAgYml0cmF0ZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBuYW1lIFZpZGVvIEVkaXRvclxuICogQGRlc2NyaXB0aW9uIEVkaXQgdmlkZW9zIHVzaW5nIG5hdGl2ZSBkZXZpY2UgQVBJc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBWaWRlb0VkaXRvciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy92aWRlby1lZGl0b3Ivbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZGVvRWRpdG9yOiBWaWRlb0VkaXRvcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy52aWRlb0VkaXRvci50cmFuc2NvZGVWaWRlbyh7XG4gKiAgIGZpbGVVcmk6ICcvcGF0aC90by9pbnB1dC5tb3YnLFxuICogICBvdXRwdXRGaWxlTmFtZTogJ291dHB1dC5tcDQnLFxuICogICBvdXRwdXRGaWxlVHlwZTogVmlkZW9FZGl0b3IuT3V0cHV0RmlsZVR5cGUuTVBFRzRcbiAqIH0pXG4gKiAudGhlbigoZmlsZVVyaTogc3RyaW5nKSA9PiBjb25zb2xlLmxvZygndmlkZW8gdHJhbnNjb2RlIHN1Y2Nlc3MnLCBmaWxlVXJpKSlcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ3ZpZGVvIHRyYW5zY29kZSBlcnJvcicsIGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogVHJhbnNjb2RlT3B0aW9uc1xuICogVHJpbU9wdGlvbnNcbiAqIENyZWF0ZVRodW1ibmFpbE9wdGlvbnNcbiAqIEdldFZpZGVvSW5mb09wdGlvbnNcbiAqIFZpZGVvSW5mb1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ZpZGVvRWRpdG9yJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdmlkZW8tZWRpdG9yJyxcbiAgcGx1Z2luUmVmOiAnVmlkZW9FZGl0b3InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2piYXZhcmkvY29yZG92YS1wbHVnaW4tdmlkZW8tZWRpdG9yJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZGVvRWRpdG9yIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICBPcHRpbWl6ZUZvck5ldHdvcmtVc2UgPSB7XG4gICAgTk86IDAsXG4gICAgWUVTOiAxLFxuICB9O1xuXG4gIE91dHB1dEZpbGVUeXBlID0ge1xuICAgIE00VjogMCxcbiAgICBNUEVHNDogMSxcbiAgICBNNEE6IDIsXG4gICAgUVVJQ0tfVElNRTogMyxcbiAgfTtcblxuICAvKipcbiAgICogVHJhbnNjb2RlIGEgdmlkZW9cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge1RyYW5zY29kZU9wdGlvbnN9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcGF0aCBvZiB0aGUgdHJhbnNjb2RlZCB2aWRlb1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgdHJhbnNjb2RlVmlkZW8ob3B0aW9uczogVHJhbnNjb2RlT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaW0gYSB2aWRlb1xuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7VHJpbU9wdGlvbnN9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcGF0aCBvZiB0aGUgdHJpbW1lZCB2aWRlb1xuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIHRyaW0ob3B0aW9uczogVHJpbU9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBKUEVHIHRodW1ibmFpbCBmcm9tIGEgdmlkZW9cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0NyZWF0ZVRodW1ibmFpbE9wdGlvbnN9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcGF0aCB0byB0aGUganBlZyBpbWFnZSBvbiB0aGUgZGV2aWNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjcmVhdGVUaHVtYm5haWwob3B0aW9uczogQ3JlYXRlVGh1bWJuYWlsT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbmZvIG9uIGEgdmlkZW8gKHdpZHRoLCBoZWlnaHQsIG9yaWVudGF0aW9uLCBkdXJhdGlvbiwgc2l6ZSwgJiBiaXRyYXRlKVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7R2V0VmlkZW9JbmZvT3B0aW9uc30gT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxWaWRlb0luZm8+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIG9iamVjdCBjb250YWluaW5nIGluZm8gb24gdGhlIHZpZGVvXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRWaWRlb0luZm8ob3B0aW9uczogR2V0VmlkZW9JbmZvT3B0aW9ucyk6IFByb21pc2U8VmlkZW9JbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=