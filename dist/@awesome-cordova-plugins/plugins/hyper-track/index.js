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
var hypertrackIonicPluginVersion = "0.2.0";
var HyperTrackPluginOriginal = /** @class */ (function (_super) {
    __extends(HyperTrackPluginOriginal, _super);
    function HyperTrackPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPluginOriginal.prototype.initialize = function (publishableKey) { return cordova(this, "initialize", {}, arguments); };
    HyperTrackPluginOriginal.prototype.getBlockers = function () { return cordova(this, "getBlockers", {}, arguments); };
    HyperTrackPluginOriginal.prototype.enableDebugLogging = function () { return cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPluginOriginal.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPluginOriginal.pluginRef = "hypertrack";
    HyperTrackPluginOriginal.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPluginOriginal.platforms = ["Android, iOS"];
    return HyperTrackPluginOriginal;
}(AwesomeCordovaNativePlugin));
var HyperTrackPlugin = new HyperTrackPluginOriginal();
export { HyperTrackPlugin };
var CoordinatesValidationError = /** @class */ (function (_super) {
    __extends(CoordinatesValidationError, _super);
    function CoordinatesValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoordinatesValidationError;
}(Error));
export { CoordinatesValidationError };
var Coordinates = /** @class */ (function () {
    function Coordinates(latitude, longitude) {
        var _this = this;
        this.latitude = latitude;
        this.longitude = longitude;
        this.toString = function () {
            return JSON.stringify(_this);
        };
        if (latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0) {
            throw new CoordinatesValidationError('latitude and longitude should be of correct values');
        }
    }
    return Coordinates;
}());
export { Coordinates };
export var LocationResultType;
(function (LocationResultType) {
    LocationResultType[LocationResultType["LOCATION"] = 0] = "LOCATION";
    LocationResultType[LocationResultType["OUTAGE"] = 1] = "OUTAGE";
})(LocationResultType || (LocationResultType = {}));
export var Outage;
(function (Outage) {
    Outage[Outage["MISSING_LOCATION_PERMISSION"] = 0] = "MISSING_LOCATION_PERMISSION";
    Outage[Outage["MISSING_ACTIVITY_PERMISSION"] = 1] = "MISSING_ACTIVITY_PERMISSION";
    Outage[Outage["LOCATION_SERVICE_DISABLED"] = 2] = "LOCATION_SERVICE_DISABLED";
    Outage[Outage["NOT_TRACKING"] = 3] = "NOT_TRACKING";
    Outage[Outage["START_HAS_NOT_FINISHED"] = 4] = "START_HAS_NOT_FINISHED";
    Outage[Outage["NO_GPS_SIGNAL"] = 5] = "NO_GPS_SIGNAL";
    Outage[Outage["RESTART_REQUIRED"] = 6] = "RESTART_REQUIRED";
})(Outage || (Outage = {}));
var HyperTrack = /** @class */ (function () {
    function HyperTrack(cordovaInstanceHandle) {
        this.cordovaInstanceHandle = cordovaInstanceHandle;
    }
    /** Enables debug log in native HyperTrack SDK. */
    HyperTrack.enableDebugLogging = function () {
        new HyperTrackPluginOriginal().enableDebugLogging();
    };
    /**
     * Entry point into SDK.
     *
     * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
     * various data.
     *
     * @param publishableKey account-specific secret from the HyperTrack dashborad.
     * @see {@link https://dashboard.hypertrack.com/setup}.
     */
    HyperTrack.initialize = function (publishableKey) {
        console.log("Hypertrack Ionic plugin version " + hypertrackIonicPluginVersion);
        return new Promise(function (resolve, reject) {
            new HyperTrackPluginOriginal()
                .initialize(publishableKey)
                .then(function (cordovaInstance) {
                resolve(new HyperTrack(cordovaInstance));
            })
                .catch(function (err) { return reject(err); });
        });
    };
    /**
     * Get the list of blockers that needs to be resolved for reliable tracking.
     *
     * @see {Blocker}
     */
    HyperTrack.getBlockers = function () {
        return new HyperTrackPluginOriginal().getBlockers();
    };
    /** Resolves device ID that could be used to identify the device. */
    HyperTrack.prototype.getDeviceId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getDeviceId(function (deviceId) { return resolve(deviceId); }, function (err) { return reject(err); });
        });
    };
    /** Resolves to true if tracking service is running and false otherwise */
    HyperTrack.prototype.isRunning = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.isRunning(function (isRunning) { return resolve(isRunning); }, function (err) { return reject(err); });
        });
    };
    /**
     * Sets device name that could be used to identify the device in HyperTrack dashboard
     *
     * @param name
     */
    HyperTrack.prototype.setDeviceName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceName(name, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Use this to set additional properties, like segments, teams etc.
     *
     * @param metadata key-value pais of properties.
     */
    HyperTrack.prototype.setDeviceMetadata = function (metadata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceMetadata(metadata, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Updates title and text in persistent notification, that appears when tracking is active.
     *
     * @param title
     * @param message
     */
    HyperTrack.prototype.setTrackingNotificationProperties = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setTrackingNotificationProperties(title, message, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Adds special marker-like object to device timeline.
     *
     * @param geotagData
     * @param expectedLocation
     */
    HyperTrack.prototype.addGeotag = function (geotagData, expectedLocation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.addGeoTag(geotagData, expectedLocation, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
    HyperTrack.prototype.requestPermissionsIfNecessary = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.requestPermissionsIfNecessary(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Allows injecting false locations into the SDK, which ignores them by default. */
    HyperTrack.prototype.allowMockLocations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.allowMockLocations(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Synchronizes tracking state with platform model. This method is used to
     * harden platform2device communication channel.
     */
    HyperTrack.prototype.syncDeviceSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.syncDeviceSettings(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Start tracking. */
    HyperTrack.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.start(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Stop tracking. */
    HyperTrack.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.stop(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Resolves latest device location that was sent by the SDK.
     * Only available for Android platform.
     * */
    HyperTrack.prototype.getLatestLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getLatestLocation(function (locationResult) { return resolve(_this.handleLocationResult(locationResult)); }, function (err) { return reject(err); });
        });
    };
    /**
     * Resolves latest device location from system location provider.
     * Only available for Android platform.
     * */
    HyperTrack.prototype.getCurrentLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getCurrentLocation(function (locationResult) { return resolve(_this.handleLocationResult(locationResult)); }, function (err) { return reject(err); });
        });
    };
    HyperTrack.prototype.handleLocationResult = function (locationResult) {
        switch (locationResult.type) {
            case "location": {
                return {
                    type: LocationResultType.LOCATION,
                    value: locationResult.location
                };
            }
            case "outage": {
                var outage = Outage[locationResult.outage.name];
                return {
                    type: LocationResultType.OUTAGE,
                    value: outage
                };
            }
        }
    };
    return HyperTrack;
}());
export { HyperTrack };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaHlwZXItdHJhY2svaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFFNUYsSUFBTSw0QkFBNEIsR0FBRyxPQUFPLENBQUE7O0lBVU4sb0NBQTBCOzs7O0lBRTlELHFDQUFVLGFBQUMsY0FBc0I7SUFLakMsc0NBQVc7SUFLWCw2Q0FBa0I7Ozs7OzsyQkF6QnBCO0VBYXNDLDBCQUEwQjtTQUFuRCxnQkFBZ0I7O0lBOERtQiw4Q0FBSzs7OztxQ0EzRXJEO0VBMkVnRCxLQUFLOzs7SUFJbkQscUJBQW1CLFFBQWdCLEVBQVMsU0FBaUI7UUFBN0QsaUJBSUM7UUFKa0IsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFNdEQsYUFBUSxHQUFHO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUE7UUFQQyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxFQUFFO1lBQ2xGLE1BQU0sSUFBSSwwQkFBMEIsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQztzQkFuRkg7OztBQTBIQSxNQUFNLENBQU4sSUFBWSxrQkFFWDtBQUZELFdBQVksa0JBQWtCO0lBQzVCLG1FQUFRLENBQUE7SUFBRSwrREFBTSxDQUFBO0FBQ2xCLENBQUMsRUFGVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRTdCO0FBRUQsTUFBTSxDQUFOLElBQVksTUFRWDtBQVJELFdBQVksTUFBTTtJQUNoQixpRkFBMkIsQ0FBQTtJQUMzQixpRkFBMkIsQ0FBQTtJQUMzQiw2RUFBeUIsQ0FBQTtJQUN6QixtREFBWSxDQUFBO0lBQ1osdUVBQXNCLENBQUE7SUFDdEIscURBQWEsQ0FBQTtJQUNiLDJEQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFSVyxNQUFNLEtBQU4sTUFBTSxRQVFqQjs7SUFvUEMsb0JBQTRCLHFCQUF3QztRQUF4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQW1CO0lBQUcsQ0FBQztJQXhOeEUsa0RBQWtEO0lBQzNDLDZCQUFrQixHQUF6QjtRQUNFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHFCQUFVLEdBQWpCLFVBQWtCLGNBQXNCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQW1DLDRCQUE4QixDQUFDLENBQUE7UUFDOUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUksZ0JBQWdCLEVBQUU7aUJBQ25CLFVBQVUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCLElBQUksQ0FBQyxVQUFDLGVBQWtDO2dCQUN2QyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBVSxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzQkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsZ0NBQVcsR0FBWDtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQ3BDLFVBQUMsUUFBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFqQixDQUFpQixFQUMvQixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwRUFBMEU7SUFDMUUsOEJBQVMsR0FBVDtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQ2xDLFVBQUMsU0FBUyxJQUFLLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFsQixDQUFrQixFQUNqQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0NBQWEsR0FBYixVQUFjLElBQVk7UUFBMUIsaUJBUUM7UUFQQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FDdEMsSUFBSSxFQUNKLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHNDQUFpQixHQUFqQixVQUFrQixRQUFnQjtRQUFsQyxpQkFRQztRQVBDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQzFDLFFBQVEsRUFDUixjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsc0RBQWlDLEdBQWpDLFVBQWtDLEtBQWEsRUFBRSxPQUFlO1FBQWhFLGlCQVNDO1FBUkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQ0FBaUMsQ0FDMUQsS0FBSyxFQUNMLE9BQU8sRUFDUCxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsOEJBQVMsR0FBVCxVQUFVLFVBQWtCLEVBQUUsZ0JBQThCO1FBQTVELGlCQVNDO1FBUkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQ2xDLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwR0FBMEc7SUFDMUcsa0RBQTZCLEdBQTdCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLDZCQUE2QixDQUN0RCxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9GQUFvRjtJQUNwRix1Q0FBa0IsR0FBbEI7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQzNDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsdUNBQWtCLEdBQWxCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUMzQyxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQjtJQUN0QiwwQkFBSyxHQUFMO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FDOUIsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUI7SUFDckIseUJBQUksR0FBSjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQzdCLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztTQUdLO0lBQ0wsc0NBQWlCLEdBQWpCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUMxQyxVQUFBLGNBQWMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBbEQsQ0FBa0QsRUFDcEUsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztTQUdLO0lBQ0wsdUNBQWtCLEdBQWxCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUMzQyxVQUFBLGNBQWMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBbEQsQ0FBa0QsRUFDcEUsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8seUNBQW9CLEdBQTVCLFVBQTZCLGNBQTJDO1FBQ3RFLFFBQVEsY0FBYyxDQUFDLElBQUksRUFBRTtZQUMzQixLQUFLLFVBQVUsQ0FBQyxDQUFDO2dCQUNmLE9BQU87b0JBQ0wsSUFBSSxFQUFFLGtCQUFrQixDQUFDLFFBQVE7b0JBQ2pDLEtBQUssRUFBRSxjQUFjLENBQUMsUUFBUTtpQkFDL0IsQ0FBQTthQUNGO1lBQ0QsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDYixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakQsT0FBTztvQkFDTCxJQUFJLEVBQUUsa0JBQWtCLENBQUMsTUFBTTtvQkFDL0IsS0FBSyxFQUFFLE1BQU07aUJBQ2QsQ0FBQTthQUNGO1NBQ0Y7SUFDSCxDQUFDO3FCQXhYSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBDb3Jkb3ZhLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmNvbnN0IGh5cGVydHJhY2tJb25pY1BsdWdpblZlcnNpb24gPSBcIjAuMi4wXCJcbi8vIE1pbmltYWwgY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay12MyB2ZXJzaW9uOiAwLjUuMFxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay12MycsXG4gIHBsdWdpblJlZjogJ2h5cGVydHJhY2snLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2h5cGVydHJhY2svY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay5naXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCwgaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh5cGVyVHJhY2tQbHVnaW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleTogc3RyaW5nKTogUHJvbWlzZTxIeXBlclRyYWNrQ29yZG92YT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QmxvY2tlcnMoKTogUHJvbWlzZTxTZXQ8QmxvY2tlcj4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGVuYWJsZURlYnVnTG9nZ2luZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyBJbnRlcmZhY2VzIGZvciBDb3Jkb3ZhIFBsdWdpbiBjYWxsYmFja3NcbmludGVyZmFjZSBEZXZpY2VJZFJlY2VpdmVyIHtcbiAgKGRldmljZUlkOiBzdHJpbmcpOiBhbnk7XG59XG5pbnRlcmZhY2UgVHJhY2tpbmdTdGF0ZVJlY2VpdmVyIHtcbiAgKGlzUnVubmluZzogYm9vbGVhbik6IGFueTtcbn1cbmludGVyZmFjZSBGYWlsdXJlSGFuZGxlciB7XG4gIChlcnJvcjogRXJyb3IpOiBhbnk7XG59XG5pbnRlcmZhY2UgU3VjY2Vzc0hhbmRsZXIge1xuICAoKTogYW55O1xufVxuaW50ZXJmYWNlIExvY2F0aW9uUmVjZWl2ZXIge1xuICAobG9jYXRpb246IENvcmRvdmFMYXRlc3RMb2NhdGlvblJlc3VsdCk6IGFueTsgIFxufVxuXG4vLyBTREsgaW5zdGFuY2UgdGhhdCBleHBvc2VkIGZyb20gQ29yZG92YSB1dGlsaXplcyB1c2FnZSBvZiBjYWxsYmFja3MsIHNvIHdlXG4vLyB3cmFwIGl0IHdpdGggYWRhcHRlciB0byBhdm9pZCBtaXggb2YgY2FsbGJhY2tzIGFuZCBQcm9taXNlc1xuaW50ZXJmYWNlIEh5cGVyVHJhY2tDb3Jkb3ZhIHtcbiAgZ2V0RGV2aWNlSWQoc3VjY2VzczogRGV2aWNlSWRSZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgaXNSdW5uaW5nKHN1Y2Nlc3M6IFRyYWNraW5nU3RhdGVSZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgc2V0RGV2aWNlTmFtZShuYW1lOiBzdHJpbmcsIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzZXREZXZpY2VNZXRhZGF0YShtZXRhZGF0YTogT2JqZWN0LCBzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLFxuICAgIGVycm9yOiBGYWlsdXJlSGFuZGxlclxuICApOiB2b2lkO1xuICBhZGRHZW9UYWcoXG4gICAgZ2VvdGFnRGF0YTogT2JqZWN0LFxuICAgIGV4cGVjdGVkTG9jYXRpb246IENvb3JkaW5hdGVzIHwgdW5kZWZpbmVkLFxuICAgIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLFxuICAgIGVycm9yOiBGYWlsdXJlSGFuZGxlclxuICApOiB2b2lkO1xuICByZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeShzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbiAgYWxsb3dNb2NrTG9jYXRpb25zKHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzeW5jRGV2aWNlU2V0dGluZ3Moc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XG4gIHN0YXJ0KHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBzdG9wKHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBnZXRMYXRlc3RMb2NhdGlvbihzdWNjZXNzOiBMb2NhdGlvblJlY2VpdmVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xuICBnZXRDdXJyZW50TG9jYXRpb24oc3VjY2VzczogTG9jYXRpb25SZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVzVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuLyoqIFdyYXBwZXIgY2xhc3MgZm9yIHBhc3Npbmcgc3BhdGlhbCBnZW9wb3NpdGlvbiBhcyBhIGdlb3RhZydzIGV4cGVjdGVkIGxvY2F0aW9uICovXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXMge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGF0aXR1ZGU6IG51bWJlciwgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyKSB7XG4gICAgaWYgKGxhdGl0dWRlIDwgLTkwLjAgfHwgbGF0aXR1ZGUgPiA5MC4wIHx8IGxvbmdpdHVkZSA8IC0xODAuMCB8fCBsb25naXR1ZGUgPiAxODAuMCkge1xuICAgICAgdGhyb3cgbmV3IENvb3JkaW5hdGVzVmFsaWRhdGlvbkVycm9yKCdsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHNob3VsZCBiZSBvZiBjb3JyZWN0IHZhbHVlcycpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgfVxufVxuXG4vKiogQSBibG9ja2VyIGlzIGFuIG9ic3RhY2xlIHRoYXQgbmVlZHMgdG8gYmUgcmVzb2x2ZWQgdG8gYWNoaWV2ZSByZWxpYWJsZSB0cmFja2luZy4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tlciB7XG4gIC8qKiBSZWNvbW1lbmRlZCBuYW1lIGZvciBhIHVzZXIgYWN0aW9uLCB0aGF0IG5lZWRzIHRvIGJlIHBlcmZvcm1lZCB0byByZXNvbHZlIHRoZSBibG9ja2VyLiAqL1xuICB1c2VyQWN0aW9uVGl0bGU6IHN0cmluZztcbiAgLyoqIFJlY29tbWVuZGVkIG5hbWUgZm9yIGEgYnV0dG9uLCB0aGF0IHdpbGwgbmF2aWdhdGUgdXNlciB0byB0aGUgcGxhY2Ugd2hlcmUgaGUgY2FuIHJlc29sdmUgdGhlIGJsb2NrZXIgKi9cbiAgdXNlckFjdGlvbkNUQTogc3RyaW5nO1xuICAvKiogVXNlciBhY3Rpb24gZXhwbGFuYXRpb24gKi9cbiAgdXNlckFjdGlvbkV4cGxhbmF0aW9uOiBzdHJpbmc7XG4gIC8qKiBBbiBhY3Rpb24gdGhhdCBuYXZpZ2F0ZXMgdXNlciB0byB0aGUgZGVkaWNhdGVkIHNldHRpbmdzIG1lbnUuICovXG4gIHJlc29sdmU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIENvcmRvdmFMYXRlc3RMb2NhdGlvblJlc3VsdCA9IHtcbiAgdHlwZTogXCJsb2NhdGlvblwiLFxuICBsb2NhdGlvbjogQ29vcmRpbmF0ZXMsXG59IHwge1xuICB0eXBlOiBcIm91dGFnZVwiLFxuICBvdXRhZ2U6IHtcbiAgICBjb2RlOiBudW1iZXIsXG4gICAgbmFtZToga2V5b2YgdHlwZW9mIE91dGFnZVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIExvY2F0aW9uUmVzdWx0ID0ge1xuICB0eXBlOiBMb2NhdGlvblJlc3VsdFR5cGUuTE9DQVRJT04sIFxuICB2YWx1ZTogQ29vcmRpbmF0ZXNcbn0gfCBcbntcbiAgdHlwZTogTG9jYXRpb25SZXN1bHRUeXBlLk9VVEFHRSwgXG4gIHZhbHVlOiBPdXRhZ2Vcbn1cblxuZXhwb3J0IGVudW0gTG9jYXRpb25SZXN1bHRUeXBlIHtcbiAgTE9DQVRJT04sIE9VVEFHRVxufVxuXG5leHBvcnQgZW51bSBPdXRhZ2Uge1xuICBNSVNTSU5HX0xPQ0FUSU9OX1BFUk1JU1NJT04sXG4gIE1JU1NJTkdfQUNUSVZJVFlfUEVSTUlTU0lPTixcbiAgTE9DQVRJT05fU0VSVklDRV9ESVNBQkxFRCxcbiAgTk9UX1RSQUNLSU5HLFxuICBTVEFSVF9IQVNfTk9UX0ZJTklTSEVELFxuICBOT19HUFNfU0lHTkFMLFxuICBSRVNUQVJUX1JFUVVJUkVEXG59XG5cbi8qKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgIGltcG9ydCB7IEh5cGVyVHJhY2sgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaHlwZXItdHJhY2snO1xuICpcbiAqICAgaW5pdGlhbGl6ZUh5cGVydHJhY2soKSB7XG4gKiAgICAgSHlwZXJUcmFjay5lbmFibGVEZWJ1Z0xvZ2dpbmcoKTtcbiAqICAgICBIeXBlclRyYWNrLmluaXRpYWxpemUoJ1lPVVJfUFVCTElTSElOR19LRVknKVxuICogICAgIC50aGVuKCB0aGlzLm9uU2RrSW5zdGFuY2VSZWNlaXZlZCApXG4gKiAgICAgLmNhdGNoKCAoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiSHlwZXJUcmFjayBpbml0IGZhaWxlZCB3aXRoIGVycm9yIFwiICsgZXJyKSApO1xuICogICB9XG4gKiAgIG9uU2RrSW5zdGFuY2VSZWNlaXZlZChzZGtJbnN0YW5jZTogSHlwZXJUcmFjaykge1xuICogICAgICAgc2RrSW5zdGFuY2UuZ2V0RGV2aWNlSWQoKVxuICogICAgICAudGhlbigoaWQpID0+IGNvbnNvbGUubG9nKFwiR290IGRldmljZSBpZCBcIiArIGlkKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0RGV2aWNlTmFtZShcIkVsdmlzIElvbmljXCIpKVxuICogICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkRldmljZSBuYW1lIHdhcyBjaGFuZ2VkXCIpKVxuICogICAgICAudGhlbigoKSA9PiBzZGtJbnN0YW5jZS5zZXREZXZpY2VNZXRhZGF0YSh7cGxhdGZvcm06IFwiSW9uaWMgQW5kcm9pZFwifSkpXG4gKiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiRGV2aWNlIG1ldGFkYXRhIHdhcyBjaGFuZ2VkXCIpKVxuICogICAgICAudGhlbigoKSA9PiBzZGtJbnN0YW5jZS5zZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXMoXCJUcmFja2luZyBPblwiLCBcIklvbmljIFNESyBpcyB0cmFja2luZ1wiKSlcbiAqICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gcHJvcGVydGllcyB3ZXJlIGNoYW5nZWRcIikpXG4gKiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiR290IGVycm9yIGluIEh5cGVyVHJhY2sgXCIgKyBlcnIpKTtcbiAqICAgfVxuICpcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgSHlwZXJUcmFjayB7XG4gIC8qKiBFbmFibGVzIGRlYnVnIGxvZyBpbiBuYXRpdmUgSHlwZXJUcmFjayBTREsuICovXG4gIHN0YXRpYyBlbmFibGVEZWJ1Z0xvZ2dpbmcoKTogdm9pZCB7XG4gICAgbmV3IEh5cGVyVHJhY2tQbHVnaW4oKS5lbmFibGVEZWJ1Z0xvZ2dpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRyeSBwb2ludCBpbnRvIFNESy5cbiAgICpcbiAgICogSW5pdGlhbGl6ZXMgU0RLLiBBbHNvIHJlc29sdmVzIFNESyBpbnN0YW5jZSB0aGF0IGNvdWxkIGJlIHVzZWQgdG8gcXVlcnkgZGV2aWNlSWQgb3Igc2V0XG4gICAqIHZhcmlvdXMgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHB1Ymxpc2hhYmxlS2V5IGFjY291bnQtc3BlY2lmaWMgc2VjcmV0IGZyb20gdGhlIEh5cGVyVHJhY2sgZGFzaGJvcmFkLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2Rhc2hib2FyZC5oeXBlcnRyYWNrLmNvbS9zZXR1cH0uXG4gICAqL1xuICBzdGF0aWMgaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleTogc3RyaW5nKTogUHJvbWlzZTxIeXBlclRyYWNrPiB7XG4gICAgY29uc29sZS5sb2coYEh5cGVydHJhY2sgSW9uaWMgcGx1Z2luIHZlcnNpb24gJHtoeXBlcnRyYWNrSW9uaWNQbHVnaW5WZXJzaW9ufWApXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG5ldyBIeXBlclRyYWNrUGx1Z2luKClcbiAgICAgICAgLmluaXRpYWxpemUocHVibGlzaGFibGVLZXkpXG4gICAgICAgIC50aGVuKChjb3Jkb3ZhSW5zdGFuY2U6IEh5cGVyVHJhY2tDb3Jkb3ZhKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShuZXcgSHlwZXJUcmFjayhjb3Jkb3ZhSW5zdGFuY2UpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiByZWplY3QoZXJyKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIGJsb2NrZXJzIHRoYXQgbmVlZHMgdG8gYmUgcmVzb2x2ZWQgZm9yIHJlbGlhYmxlIHRyYWNraW5nLlxuICAgKlxuICAgKiBAc2VlIHtCbG9ja2VyfVxuICAgKi9cbiAgc3RhdGljIGdldEJsb2NrZXJzKCk6IFByb21pc2U8U2V0PEJsb2NrZXI+PiB7XG4gICAgcmV0dXJuIG5ldyBIeXBlclRyYWNrUGx1Z2luKCkuZ2V0QmxvY2tlcnMoKTtcbiAgfVxuXG4gIC8qKiBSZXNvbHZlcyBkZXZpY2UgSUQgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBkZXZpY2UuICovXG4gIGdldERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmdldERldmljZUlkKFxuICAgICAgICAoZGV2aWNlSWQpID0+IHJlc29sdmUoZGV2aWNlSWQpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBSZXNvbHZlcyB0byB0cnVlIGlmIHRyYWNraW5nIHNlcnZpY2UgaXMgcnVubmluZyBhbmQgZmFsc2Ugb3RoZXJ3aXNlICovXG4gIGlzUnVubmluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuaXNSdW5uaW5nKFxuICAgICAgICAoaXNSdW5uaW5nKSA9PiByZXNvbHZlKGlzUnVubmluZyksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgZGV2aWNlIG5hbWUgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBkZXZpY2UgaW4gSHlwZXJUcmFjayBkYXNoYm9hcmRcbiAgICpcbiAgICogQHBhcmFtIG5hbWVcbiAgICovXG4gIHNldERldmljZU5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnNldERldmljZU5hbWUoXG4gICAgICAgIG5hbWUsXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgdG8gc2V0IGFkZGl0aW9uYWwgcHJvcGVydGllcywgbGlrZSBzZWdtZW50cywgdGVhbXMgZXRjLlxuICAgKlxuICAgKiBAcGFyYW0gbWV0YWRhdGEga2V5LXZhbHVlIHBhaXMgb2YgcHJvcGVydGllcy5cbiAgICovXG4gIHNldERldmljZU1ldGFkYXRhKG1ldGFkYXRhOiBPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc2V0RGV2aWNlTWV0YWRhdGEoXG4gICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGl0bGUgYW5kIHRleHQgaW4gcGVyc2lzdGVudCBub3RpZmljYXRpb24sIHRoYXQgYXBwZWFycyB3aGVuIHRyYWNraW5nIGlzIGFjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHRpdGxlXG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqL1xuICBzZXRUcmFja2luZ05vdGlmaWNhdGlvblByb3BlcnRpZXModGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyhcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBzcGVjaWFsIG1hcmtlci1saWtlIG9iamVjdCB0byBkZXZpY2UgdGltZWxpbmUuXG4gICAqXG4gICAqIEBwYXJhbSBnZW90YWdEYXRhXG4gICAqIEBwYXJhbSBleHBlY3RlZExvY2F0aW9uXG4gICAqL1xuICBhZGRHZW90YWcoZ2VvdGFnRGF0YTogT2JqZWN0LCBleHBlY3RlZExvY2F0aW9uPzogQ29vcmRpbmF0ZXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuYWRkR2VvVGFnKFxuICAgICAgICBnZW90YWdEYXRhLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFBvcHMgdXAgcGVybWlzc2lvbiByZXF1ZXN0IGRpYWxvZywgaWYgcGVybWlzc2lvbnMgd2VyZW4ndCBncmFudGVkIGJlZm9yZSBvciBkb2VzIG5vdGhpbmcgb3RoZXJ3aXNlLiAqL1xuICByZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUucmVxdWVzdFBlcm1pc3Npb25zSWZOZWNlc3NhcnkoXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQWxsb3dzIGluamVjdGluZyBmYWxzZSBsb2NhdGlvbnMgaW50byB0aGUgU0RLLCB3aGljaCBpZ25vcmVzIHRoZW0gYnkgZGVmYXVsdC4gKi9cbiAgYWxsb3dNb2NrTG9jYXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5hbGxvd01vY2tMb2NhdGlvbnMoXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3luY2hyb25pemVzIHRyYWNraW5nIHN0YXRlIHdpdGggcGxhdGZvcm0gbW9kZWwuIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG9cbiAgICogaGFyZGVuIHBsYXRmb3JtMmRldmljZSBjb21tdW5pY2F0aW9uIGNoYW5uZWwuXG4gICAqL1xuICBzeW5jRGV2aWNlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnN5bmNEZXZpY2VTZXR0aW5ncyhcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBTdGFydCB0cmFja2luZy4gKi9cbiAgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnN0YXJ0KFxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFN0b3AgdHJhY2tpbmcuICovXG4gIHN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnN0b3AoXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogXG4gICAqIFJlc29sdmVzIGxhdGVzdCBkZXZpY2UgbG9jYXRpb24gdGhhdCB3YXMgc2VudCBieSB0aGUgU0RLLiBcbiAgICogT25seSBhdmFpbGFibGUgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXG4gICAqICovXG4gIGdldExhdGVzdExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb25SZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuZ2V0TGF0ZXN0TG9jYXRpb24oXG4gICAgICAgIGxvY2F0aW9uUmVzdWx0ID0+IHJlc29sdmUodGhpcy5oYW5kbGVMb2NhdGlvblJlc3VsdChsb2NhdGlvblJlc3VsdCkpLFxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogXG4gICAqIFJlc29sdmVzIGxhdGVzdCBkZXZpY2UgbG9jYXRpb24gZnJvbSBzeXN0ZW0gbG9jYXRpb24gcHJvdmlkZXIuIFxuICAgKiBPbmx5IGF2YWlsYWJsZSBmb3IgQW5kcm9pZCBwbGF0Zm9ybS5cbiAgICogKi9cbiAgZ2V0Q3VycmVudExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb25SZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuZ2V0Q3VycmVudExvY2F0aW9uKFxuICAgICAgICBsb2NhdGlvblJlc3VsdCA9PiByZXNvbHZlKHRoaXMuaGFuZGxlTG9jYXRpb25SZXN1bHQobG9jYXRpb25SZXN1bHQpKSxcbiAgICAgICAgZXJyID0+IHJlamVjdChlcnIpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMb2NhdGlvblJlc3VsdChsb2NhdGlvblJlc3VsdDogQ29yZG92YUxhdGVzdExvY2F0aW9uUmVzdWx0KTogTG9jYXRpb25SZXN1bHQge1xuICAgIHN3aXRjaCAobG9jYXRpb25SZXN1bHQudHlwZSkge1xuICAgICAgY2FzZSBcImxvY2F0aW9uXCI6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBMb2NhdGlvblJlc3VsdFR5cGUuTE9DQVRJT04sXG4gICAgICAgICAgdmFsdWU6IGxvY2F0aW9uUmVzdWx0LmxvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgXCJvdXRhZ2VcIjoge1xuICAgICAgICBjb25zdCBvdXRhZ2UgPSBPdXRhZ2VbbG9jYXRpb25SZXN1bHQub3V0YWdlLm5hbWVdXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogTG9jYXRpb25SZXN1bHRUeXBlLk9VVEFHRSxcbiAgICAgICAgICB2YWx1ZTogb3V0YWdlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZG92YUluc3RhbmNlSGFuZGxlOiBIeXBlclRyYWNrQ29yZG92YSkge31cbn1cbiJdfQ==