var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var OpenALPROriginal = /** @class */ (function (_super) {
    __extends(OpenALPROriginal, _super);
    function OpenALPROriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Country = {
            AU: 'au',
            BR: 'br',
            BR2: 'br2',
            EU: 'eu',
            IN: 'in',
            KR2: 'kr2',
            US: 'us',
            VN2: 'vn2',
        };
        return _this;
    }
    OpenALPROriginal.prototype.scan = function (imageData, options) { return cordova(this, "scan", {}, arguments); };
    OpenALPROriginal.pluginName = "OpenALPR";
    OpenALPROriginal.plugin = "cordova-plugin-openalpr";
    OpenALPROriginal.pluginRef = "cordova.plugins.OpenALPR";
    OpenALPROriginal.repo = "https://github.com/iMicknl/cordova-plugin-openalpr";
    OpenALPROriginal.platforms = ["Android", "iOS"];
    return OpenALPROriginal;
}(AwesomeCordovaNativePlugin));
var OpenALPR = new OpenALPROriginal();
export { OpenALPR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvb3BlbmFscHIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUQ5RCw0QkFBMEI7OztRQUN0RCxhQUFPLEdBQUc7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQzs7O0lBVUYsdUJBQUksYUFBQyxTQUFjLEVBQUUsT0FBeUI7Ozs7OzttQkF0RWhEO0VBa0Q4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlbkFMUFJPcHRpb25zIHtcbiAgLyoqIENvdW50cnkgdXNlZCBmb3Igc2Nhbm5pbmcgdGhlIGxpY2Vuc2UgcGxhdGUgKi9cbiAgY291bnRyeT86IHN0cmluZztcblxuICAvKiogQW1vdW50IG9mIHJlc3VsdHMgcmV0dXJuZWQgKi9cbiAgYW1vdW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5BTFBSUmVzdWx0IHtcbiAgLyoqIExpY2Vuc2VQbGF0ZSAqL1xuICBudW1iZXI6IHN0cmluZztcbiAgLyoqIFByb2JhYmlsaXR5ICovXG4gIGNvbmZpZGVuY2U6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBPcGVuQUxQUlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIENvcmRvdmEgcGx1Z2luIGFkZHMgc3VwcG9ydCBmb3IgdGhlIE9wZW5BTFBSIChBdXRvbWF0aWMgTGljZW5zZSBQbGF0ZSBSZWNvZ25pdGlvbikgbGlicmFyeSwgd2hpY2ggcHJvdmlkZXMgc3VwcG9ydCBmb3IgcmV0cmlldmluZyB0aGUgbGljZW5zZSBwbGF0ZSBmcm9tIGEgcGljdHVyZS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgT3BlbkFMUFIsIE9wZW5BTFBST3B0aW9ucywgT3BlbkFMUFJSZXN1bHQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvb3BlbmFscHIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBvcGVuQUxQUjogT3BlbkFMUFIpIHsgfVxuICpcbiAqIGNvbnN0IHNjYW5PcHRpb25zOiBPcGVuQUxQUk9wdGlvbnMgPSB7XG4gKiAgICBjb3VudHJ5OiB0aGlzLm9wZW5BTFBSLkNvdW50cnkuRVUsXG4gKiAgICBhbW91bnQ6IDNcbiAqIH1cbiAqXG4gKiAvLyBUbyBnZXQgaW1hZ2VEYXRhLCB5b3UgY2FuIHVzZSB0aGUgQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NhbWVyYSBtb2R1bGUgZm9yIGV4YW1wbGUuIEl0IHdvcmtzIHdpdGggRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJIGFuZCBEQVRBX1VSTFxuICpcbiAqIHRoaXMub3BlbkFMUFIuc2NhbihpbWFnZURhdGEsIHNjYW5PcHRpb25zKVxuICogICAudGhlbigocmVzOiBbT3BlbkFMUFJSZXN1bHRdKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ09wZW5BTFBSJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tb3BlbmFscHInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuT3BlbkFMUFInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lNaWNrbmwvY29yZG92YS1wbHVnaW4tb3BlbmFscHInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbkFMUFIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIENvdW50cnkgPSB7XG4gICAgQVU6ICdhdScsXG4gICAgQlI6ICdicicsXG4gICAgQlIyOiAnYnIyJyxcbiAgICBFVTogJ2V1JyxcbiAgICBJTjogJ2luJyxcbiAgICBLUjI6ICdrcjInLFxuICAgIFVTOiAndXMnLFxuICAgIFZOMjogJ3ZuMicsXG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICpcbiAgICogQHBhcmFtIGltYWdlRGF0YSB7YW55fSBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEgb3IgdGhlIGltYWdlIGZpbGUgVVJJXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPcGVuQUxQUk9wdGlvbnN9IE9wdGlvbnMgdG8gcGFzcyB0byB0aGUgT3BlbkFMUFIgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2NhbihpbWFnZURhdGE6IGFueSwgb3B0aW9ucz86IE9wZW5BTFBST3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=