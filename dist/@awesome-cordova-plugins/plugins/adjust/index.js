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
var AdjustEvent = /** @class */ (function () {
    function AdjustEvent(eventToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.eventToken = eventToken;
    }
    AdjustEvent.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustEvent.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustEvent.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustEvent.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
    };
    AdjustEvent.prototype.setCallbackId = function (callbackId) {
        this.callbackId = callbackId;
    };
    return AdjustEvent;
}());
export { AdjustEvent };
var AdjustConfig = /** @class */ (function () {
    function AdjustConfig(appToken, environment) {
        this.delayStart = 0.0;
        this.logLevel = null;
        this.defaultTracker = null;
        this.urlStrategy = null;
        this.externalDeviceId = null;
        this.sendInBackground = null;
        this.shouldLaunchDeeplink = null;
        this.eventBufferingEnabled = null;
        this.userAgent = null;
        this.isDeviceKnown = null;
        this.needsCost = null;
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.processName = null; // Android only
        this.preinstallTrackingEnabled = null; // Android only
        this.preinstallFilePath = null; // Android only
        this.oaidReadingEnabled = null; // Android only
        this.allowiAdInfoReading = null; // iOS only
        this.allowIdfaReading = null; // iOS only
        this.allowAdServicesInfoReading = null; // iOS only
        this.coppaCompliantEnabled = null;
        this.playStoreKidsAppEnabled = null; // Android only
        this.linkMeEnabled = null; // iOS only
        this.attributionCallback = null;
        this.eventTrackingSucceededCallback = null;
        this.eventTrackingFailedCallback = null;
        this.sessionTrackingSucceededCallback = null;
        this.sessionTrackingFailedCallback = null;
        this.deferredDeeplinkCallback = null;
        this.conversionValueUpdatedCallback = null;
        this.appToken = appToken;
        this.environment = environment;
    }
    AdjustConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    AdjustConfig.prototype.setDelayStart = function (delayStart) {
        this.delayStart = delayStart;
    };
    AdjustConfig.prototype.setLogLevel = function (logLevel) {
        this.logLevel = logLevel;
    };
    AdjustConfig.prototype.setDefaultTracker = function (defaultTracker) {
        this.defaultTracker = defaultTracker;
    };
    AdjustConfig.prototype.setExternalDeviceId = function (externalDeviceId) {
        this.externalDeviceId = externalDeviceId;
    };
    AdjustConfig.prototype.setUrlStrategy = function (urlStrategy) {
        this.urlStrategy = urlStrategy;
    };
    AdjustConfig.prototype.setSendInBackground = function (sendInBackground) {
        this.sendInBackground = sendInBackground;
    };
    AdjustConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    AdjustConfig.prototype.setEventBufferingEnabled = function (eventBufferingEnabled) {
        this.eventBufferingEnabled = eventBufferingEnabled;
    };
    AdjustConfig.prototype.setCoppaCompliantEnabled = function (coppaCompliantEnabled) {
        this.coppaCompliantEnabled = coppaCompliantEnabled;
    };
    AdjustConfig.prototype.setPlayStoreKidsAppEnabled = function (playStoreKidsAppEnabled) {
        this.playStoreKidsAppEnabled = playStoreKidsAppEnabled;
    };
    AdjustConfig.prototype.setUserAgent = function (userAgent) {
        this.userAgent = userAgent;
    };
    AdjustConfig.prototype.setDeviceKnown = function (isDeviceKnown) {
        this.isDeviceKnown = isDeviceKnown;
    };
    AdjustConfig.prototype.setNeedsCost = function (needsCost) {
        this.needsCost = needsCost;
    };
    AdjustConfig.prototype.setProcessName = function (processName) {
        this.processName = processName;
    };
    AdjustConfig.prototype.setPreinstallTrackingEnabled = function (preinstallTrackingEnabled) {
        this.preinstallTrackingEnabled = preinstallTrackingEnabled;
    };
    AdjustConfig.prototype.setPreinstallFilePath = function (preinstallFilePath) {
        this.preinstallFilePath = preinstallFilePath;
    };
    AdjustConfig.prototype.setOaidReadingEnabled = function (enableOaidReading) {
        this.oaidReadingEnabled = enableOaidReading;
    };
    AdjustConfig.prototype.setAllowiAdInfoReading = function (allowiAdInfoReading) {
        this.allowiAdInfoReading = allowiAdInfoReading;
    };
    AdjustConfig.prototype.setAllowIdfaReading = function (allowIdfaReading) {
        this.allowIdfaReading = allowIdfaReading;
    };
    AdjustConfig.prototype.setAllowAdServicesInfoReading = function (allowAdServicesInfoReading) {
        this.allowAdServicesInfoReading = allowAdServicesInfoReading;
    };
    AdjustConfig.prototype.setLinkMeEnabled = function (linkMeEnabled) {
        this.linkMeEnabled = linkMeEnabled;
    };
    AdjustConfig.prototype.setAttributionCallbackListener = function (attributionCallback) {
        this.attributionCallback = attributionCallback;
    };
    AdjustConfig.prototype.setEventTrackingSucceededCallbackListener = function (eventTrackingSucceededCallback) {
        this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setEventTrackingFailedCallbackListener = function (eventTrackingFailedCallback) {
        this.eventTrackingFailedCallback = eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.setSessionTrackingSucceededCallbackListener = function (sessionTrackingSucceededCallback) {
        this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setSessionTrackingFailedCallbackListener = function (sessionTrackingFailedCallback) {
        this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.setDeferredDeeplinkCallbackListener = function (deferredDeeplinkCallback) {
        this.deferredDeeplinkCallback = deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.setConversionValueUpdatedCallbackListener = function (conversionValueUpdatedCallback) {
        this.conversionValueUpdatedCallback = conversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.getAttributionCallback = function () {
        return this.attributionCallback;
    };
    AdjustConfig.prototype.getEventTrackingSucceededCallback = function () {
        return this.eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getEventTrackingFailedCallback = function () {
        return this.eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.getSessionTrackingSucceededCallback = function () {
        return this.sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getSessionTrackingFailedCallback = function () {
        return this.sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.getDeferredDeeplinkCallback = function () {
        return this.deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.getConversionValueUpdatedCallback = function () {
        return this.conversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.hasAttributionListener = function () {
        return this.attributionCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingSucceededListener = function () {
        return this.eventTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingFailedListener = function () {
        return this.eventTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingSucceededListener = function () {
        return this.sessionTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingFailedListener = function () {
        return this.sessionTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasDeferredDeeplinkCallbackListener = function () {
        return this.deferredDeeplinkCallback !== null;
    };
    AdjustConfig.prototype.hasConversionValueUpdatedCallbackListener = function () {
        return this.conversionValueUpdatedCallback !== null;
    };
    return AdjustConfig;
}());
export { AdjustConfig };
var AdjustAppStoreSubscription = /** @class */ (function () {
    function AdjustAppStoreSubscription(price, currency, transactionId, receipt) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.transactionId = transactionId;
        this.receipt = receipt;
    }
    AdjustAppStoreSubscription.prototype.setTransactionDate = function (transactionDate) {
        this.transactionDate = transactionDate;
    };
    AdjustAppStoreSubscription.prototype.setSalesRegion = function (salesRegion) {
        this.salesRegion = salesRegion;
    };
    AdjustAppStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAppStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustAppStoreSubscription;
}());
export { AdjustAppStoreSubscription };
var AdjustPlayStoreSubscription = /** @class */ (function () {
    function AdjustPlayStoreSubscription(price, currency, sku, orderId, signature, purchaseToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.sku = sku;
        this.orderId = orderId;
        this.signature = signature;
        this.purchaseToken = purchaseToken;
    }
    AdjustPlayStoreSubscription.prototype.setPurchaseTime = function (purchaseTime) {
        this.purchaseTime = purchaseTime;
    };
    AdjustPlayStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustPlayStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustPlayStoreSubscription;
}());
export { AdjustPlayStoreSubscription };
var AdjustThirdPartySharing = /** @class */ (function () {
    function AdjustThirdPartySharing(isEnabled) {
        this.granularOptions = [];
        this.partnerSharingSettings = [];
        this.isEnabled = isEnabled;
    }
    AdjustThirdPartySharing.prototype.addGranularOption = function (partnerName, key, value) {
        this.granularOptions.push(partnerName);
        this.granularOptions.push(key);
        this.granularOptions.push(value);
    };
    AdjustThirdPartySharing.prototype.addPartnerSharingSetting = function (partnerName, key, value) {
        this.partnerSharingSettings.push(partnerName);
        this.partnerSharingSettings.push(key);
        this.partnerSharingSettings.push(value);
    };
    return AdjustThirdPartySharing;
}());
export { AdjustThirdPartySharing };
var AdjustAdRevenue = /** @class */ (function () {
    function AdjustAdRevenue(source) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.source = source;
    }
    AdjustAdRevenue.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustAdRevenue.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAdRevenue.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustAdRevenue.prototype.setAdImpressionsCount = function (adImpressionsCount) {
        this.adImpressionsCount = adImpressionsCount;
    };
    AdjustAdRevenue.prototype.setAdRevenueNetwork = function (adRevenueNetwork) {
        this.adRevenueNetwork = adRevenueNetwork;
    };
    AdjustAdRevenue.prototype.setAdRevenueUnit = function (adRevenueUnit) {
        this.adRevenueUnit = adRevenueUnit;
    };
    AdjustAdRevenue.prototype.setAdRevenuePlacement = function (adRevenuePlacement) {
        this.adRevenuePlacement = adRevenuePlacement;
    };
    return AdjustAdRevenue;
}());
export { AdjustAdRevenue };
export var AdjustEnvironment;
(function (AdjustEnvironment) {
    AdjustEnvironment["Sandbox"] = "sandbox";
    AdjustEnvironment["Production"] = "production";
})(AdjustEnvironment || (AdjustEnvironment = {}));
export var AdjustLogLevel;
(function (AdjustLogLevel) {
    AdjustLogLevel["Verbose"] = "VERBOSE";
    AdjustLogLevel["Debug"] = "DEBUG";
    AdjustLogLevel["Info"] = "INFO";
    AdjustLogLevel["Warn"] = "WARN";
    AdjustLogLevel["Error"] = "ERROR";
    AdjustLogLevel["Assert"] = "ASSERT";
    AdjustLogLevel["Suppress"] = "SUPPRESS";
})(AdjustLogLevel || (AdjustLogLevel = {}));
export var AdjustUrlStrategy;
(function (AdjustUrlStrategy) {
    AdjustUrlStrategy["India"] = "india";
    AdjustUrlStrategy["China"] = "china";
    AdjustUrlStrategy["DataResidencyEU"] = "data-residency-eu";
    AdjustUrlStrategy["DataResidencyTR"] = "data-residency-tr";
    AdjustUrlStrategy["DataResidencyUS"] = "data-residency-us";
})(AdjustUrlStrategy || (AdjustUrlStrategy = {}));
export var AdjustAdRevenueSource;
(function (AdjustAdRevenueSource) {
    AdjustAdRevenueSource["AdRevenueSourceAppLovinMAX"] = "applovin_max_sdk";
    AdjustAdRevenueSource["AdRevenueSourceMopub"] = "mopub";
    AdjustAdRevenueSource["AdRevenueSourceAdMob"] = "admob_sdk";
    AdjustAdRevenueSource["AdRevenueSourceIronSource"] = "ironsource_sdk";
    AdjustAdRevenueSource["AdRevenueSourceAdMost"] = "admost_sdk";
    AdjustAdRevenueSource["AdRevenueSourceUnity"] = "unity_sdk";
    AdjustAdRevenueSource["AdRevenueSourceHeliumChartboost"] = "helium_chartboost_sdk";
    AdjustAdRevenueSource["AdRevenueSourcePublisher"] = "publisher_sdk";
})(AdjustAdRevenueSource || (AdjustAdRevenueSource = {}));
var AdjustOriginal = /** @class */ (function (_super) {
    __extends(AdjustOriginal, _super);
    function AdjustOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdjustOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAdRevenue = function (sourceOrAdRevenue, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    AdjustOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    AdjustOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AdjustOriginal.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    AdjustOriginal.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    AdjustOriginal.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    AdjustOriginal.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    AdjustOriginal.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    AdjustOriginal.prototype.checkForNewAttStatus = function () { return cordova(this, "checkForNewAttStatus", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    AdjustOriginal.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    AdjustOriginal.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    AdjustOriginal.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    AdjustOriginal.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    AdjustOriginal.prototype.getLastDeeplink = function () { return cordova(this, "getLastDeeplink", {}, arguments); };
    AdjustOriginal.pluginName = "Adjust";
    AdjustOriginal.plugin = "com.adjust.sdk";
    AdjustOriginal.pluginRef = "Adjust";
    AdjustOriginal.repo = "https://github.com/adjust/cordova_sdk";
    AdjustOriginal.platforms = ["Android", "iOS"];
    return AdjustOriginal;
}(AwesomeCordovaNativePlugin));
var Adjust = new AdjustOriginal();
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRqdXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBVzFGLHFCQUFZLFVBQWtCO1FBSHRCLHVCQUFrQixHQUFhLEVBQUUsQ0FBQztRQUNsQyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFHdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxPQUFlLEVBQUUsUUFBZ0I7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELDBDQUFvQixHQUFwQixVQUFxQixHQUFXLEVBQUUsS0FBYTtRQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHlDQUFtQixHQUFuQixVQUFvQixHQUFXLEVBQUUsS0FBYTtRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHNDQUFnQixHQUFoQixVQUFpQixhQUFxQjtRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENB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Q3BDLDJEQUFrQyxDQUFBO0lBQ2xDLGtGQUF5RCxDQUFBO0lBQ3pELG1FQUEwQyxDQUFBO0FBQzVDLENBQUMsRUFUVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBU2hDOztJQWtEMkIsMEJBQTBCOzs7O0lBUXBELHVCQUFNLGFBQUMsTUFBb0I7SUFRM0IsMkJBQVUsYUFBQyxLQUFrQjtJQVE3QiwwQ0FBeUIsYUFBQyxZQUF3QztJQVFsRSwyQ0FBMEIsYUFBQyxZQUF5QztJQVFwRSx1Q0FBc0IsYUFBQyxpQkFBMEM7SUFtQmpFLCtCQUFjLGFBQUMsaUJBQXNCLEVBQUUsT0FBYTtJQVFwRCx3Q0FBdUIsYUFBQyxrQkFBMkI7SUFRbkQsK0JBQWMsYUFBQyxPQUFnQjtJQVEvQiwrQkFBYyxhQUFDLEdBQVc7SUFRMUIsMkJBQVUsYUFBQyxPQUFnQjtJQVMzQiw2QkFBWSxhQUFDLFNBQWlCO0lBUTlCLDBCQUFTO0lBU1QsNkJBQVk7SUFPWix5Q0FBd0I7SUFReEIsOEJBQWE7SUFVYiw4QkFBYTtJQVViLHdCQUFPO0lBV1Asd0JBQU87SUFRUCxxQ0FBb0I7SUFRcEIsK0JBQWM7SUFVZCw4QkFBYTtJQVdiLDRDQUEyQixhQUFDLEdBQVcsRUFBRSxLQUFhO0lBUXRELCtDQUE4QixhQUFDLEdBQVc7SUFNMUMsK0NBQThCO0lBUzlCLDJDQUEwQixhQUFDLEdBQVcsRUFBRSxLQUFhO0lBUXJELDhDQUE2QixhQUFDLEdBQVc7SUFNekMsOENBQTZCO0lBTTdCLGtDQUFpQjtJQVNqQixrRUFBaUQ7SUFVakQsc0NBQXFCLGFBQUMsZUFBdUI7SUFRN0Msa0RBQWlDO0lBVWpDLGdDQUFlOzs7Ozs7aUJBOXlCakI7RUFzaEI0QiwwQkFBMEI7U0FBekMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RFdmVudCB7XG4gIHByaXZhdGUgZXZlbnRUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIHJldmVudWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja0lkOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGV2ZW50VG9rZW46IHN0cmluZykge1xuICAgIHRoaXMuZXZlbnRUb2tlbiA9IGV2ZW50VG9rZW47XG4gIH1cblxuICBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHNldFRyYW5zYWN0aW9uSWQodHJhbnNhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcbiAgfVxuXG4gIHNldENhbGxiYWNrSWQoY2FsbGJhY2tJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jYWxsYmFja0lkID0gY2FsbGJhY2tJZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0Q29uZmlnIHtcbiAgcHJpdmF0ZSBhcHBUb2tlbjogc3RyaW5nO1xuICBwcml2YXRlIGVudmlyb25tZW50OiBBZGp1c3RFbnZpcm9ubWVudDtcbiAgcHJpdmF0ZSBzZGtQcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSBkZWxheVN0YXJ0ID0gMC4wO1xuICBwcml2YXRlIGxvZ0xldmVsOiBBZGp1c3RMb2dMZXZlbCA9IG51bGw7XG4gIHByaXZhdGUgZGVmYXVsdFRyYWNrZXI6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgdXJsU3RyYXRlZ3k6IEFkanVzdFVybFN0cmF0ZWd5ID0gbnVsbDtcbiAgcHJpdmF0ZSBleHRlcm5hbERldmljZUlkOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHNlbmRJbkJhY2tncm91bmQ6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBldmVudEJ1ZmZlcmluZ0VuYWJsZWQ6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIHVzZXJBZ2VudDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBpc0RldmljZUtub3duOiBib29sZWFuID0gbnVsbDtcbiAgcHJpdmF0ZSBuZWVkc0Nvc3Q6IGJvb2xlYW4gPSBudWxsO1xuICBwcml2YXRlIHNlY3JldElkOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGluZm8xOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGluZm8yOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGluZm8zOiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIGluZm80OiBudW1iZXIgPSBudWxsO1xuICBwcml2YXRlIHByb2Nlc3NOYW1lOiBzdHJpbmcgPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBwcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XG4gIHByaXZhdGUgcHJlaW5zdGFsbEZpbGVQYXRoOiBzdHJpbmcgPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBvYWlkUmVhZGluZ0VuYWJsZWQ6IGJvb2xlYW4gPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBhbGxvd2lBZEluZm9SZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcbiAgcHJpdmF0ZSBhbGxvd0lkZmFSZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcbiAgcHJpdmF0ZSBhbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZzogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XG4gIHByaXZhdGUgY29wcGFDb21wbGlhbnRFbmFibGVkOiBib29sZWFuID0gbnVsbDsgXG4gIHByaXZhdGUgcGxheVN0b3JlS2lkc0FwcEVuYWJsZWQ6IGJvb2xlYW4gPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcbiAgcHJpdmF0ZSBsaW5rTWVFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcblxuICBwcml2YXRlIGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudFN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudEZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvbkZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PiB2b2lkID0gbnVsbDtcbiAgcHJpdmF0ZSBjb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChjb252ZXJzaW9uVmFsdWU6IG51bWJlcikgPT4gdm9pZCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXBwVG9rZW46IHN0cmluZywgZW52aXJvbm1lbnQ6IEFkanVzdEVudmlyb25tZW50KSB7XG4gICAgdGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgfVxuXG4gIHNldEFwcFNlY3JldChzZWNyZXRJZDogbnVtYmVyLCBpbmZvMTogbnVtYmVyLCBpbmZvMjogbnVtYmVyLCBpbmZvMzogbnVtYmVyLCBpbmZvNDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWNyZXRJZCA9IHNlY3JldElkO1xuICAgIHRoaXMuaW5mbzEgPSBpbmZvMTtcbiAgICB0aGlzLmluZm8yID0gaW5mbzI7XG4gICAgdGhpcy5pbmZvMyA9IGluZm8zO1xuICAgIHRoaXMuaW5mbzQgPSBpbmZvNDtcbiAgfVxuXG4gIHNldERlbGF5U3RhcnQoZGVsYXlTdGFydDogbnVtYmVyKSB7XG4gICAgdGhpcy5kZWxheVN0YXJ0ID0gZGVsYXlTdGFydDtcbiAgfVxuXG4gIHNldExvZ0xldmVsKGxvZ0xldmVsOiBBZGp1c3RMb2dMZXZlbCkge1xuICAgIHRoaXMubG9nTGV2ZWwgPSBsb2dMZXZlbDtcbiAgfVxuXG4gIHNldERlZmF1bHRUcmFja2VyKGRlZmF1bHRUcmFja2VyOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRlZmF1bHRUcmFja2VyID0gZGVmYXVsdFRyYWNrZXI7XG4gIH1cblxuICBzZXRFeHRlcm5hbERldmljZUlkKGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZykge1xuICAgIHRoaXMuZXh0ZXJuYWxEZXZpY2VJZCA9IGV4dGVybmFsRGV2aWNlSWQ7XG4gIH1cblxuICBzZXRVcmxTdHJhdGVneSh1cmxTdHJhdGVneTogQWRqdXN0VXJsU3RyYXRlZ3kpIHtcbiAgICB0aGlzLnVybFN0cmF0ZWd5ID0gdXJsU3RyYXRlZ3k7XG4gIH1cblxuICBzZXRTZW5kSW5CYWNrZ3JvdW5kKHNlbmRJbkJhY2tncm91bmQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNlbmRJbkJhY2tncm91bmQgPSBzZW5kSW5CYWNrZ3JvdW5kO1xuICB9XG5cbiAgc2V0U2hvdWxkTGF1bmNoRGVlcGxpbmsoc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3VsZExhdW5jaERlZXBsaW5rID0gc2hvdWxkTGF1bmNoRGVlcGxpbms7XG4gIH1cblxuICBzZXRFdmVudEJ1ZmZlcmluZ0VuYWJsZWQoZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5ldmVudEJ1ZmZlcmluZ0VuYWJsZWQgPSBldmVudEJ1ZmZlcmluZ0VuYWJsZWQ7XG4gIH1cblxuICBzZXRDb3BwYUNvbXBsaWFudEVuYWJsZWQoY29wcGFDb21wbGlhbnRFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb3BwYUNvbXBsaWFudEVuYWJsZWQgPSBjb3BwYUNvbXBsaWFudEVuYWJsZWQ7XG4gIH1cblxuICBzZXRQbGF5U3RvcmVLaWRzQXBwRW5hYmxlZChwbGF5U3RvcmVLaWRzQXBwRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMucGxheVN0b3JlS2lkc0FwcEVuYWJsZWQgPSBwbGF5U3RvcmVLaWRzQXBwRW5hYmxlZDtcbiAgfVxuXG4gIHNldFVzZXJBZ2VudCh1c2VyQWdlbnQ6IHN0cmluZykge1xuICAgIHRoaXMudXNlckFnZW50ID0gdXNlckFnZW50O1xuICB9XG5cbiAgc2V0RGV2aWNlS25vd24oaXNEZXZpY2VLbm93bjogYm9vbGVhbikge1xuICAgIHRoaXMuaXNEZXZpY2VLbm93biA9IGlzRGV2aWNlS25vd247XG4gIH1cblxuICBzZXROZWVkc0Nvc3QobmVlZHNDb3N0OiBib29sZWFuKSB7XG4gICAgdGhpcy5uZWVkc0Nvc3QgPSBuZWVkc0Nvc3Q7XG4gIH1cblxuICBzZXRQcm9jZXNzTmFtZShwcm9jZXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xuICB9XG5cbiAgc2V0UHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZChwcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkID0gcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDtcbiAgfVxuXG4gIHNldFByZWluc3RhbGxGaWxlUGF0aChwcmVpbnN0YWxsRmlsZVBhdGg6IHN0cmluZykge1xuICAgIHRoaXMucHJlaW5zdGFsbEZpbGVQYXRoID0gcHJlaW5zdGFsbEZpbGVQYXRoO1xuICB9XG5cbiAgc2V0T2FpZFJlYWRpbmdFbmFibGVkKGVuYWJsZU9haWRSZWFkaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5vYWlkUmVhZGluZ0VuYWJsZWQgPSBlbmFibGVPYWlkUmVhZGluZztcbiAgfVxuXG4gIHNldEFsbG93aUFkSW5mb1JlYWRpbmcoYWxsb3dpQWRJbmZvUmVhZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsb3dpQWRJbmZvUmVhZGluZyA9IGFsbG93aUFkSW5mb1JlYWRpbmc7XG4gIH1cblxuICBzZXRBbGxvd0lkZmFSZWFkaW5nKGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93SWRmYVJlYWRpbmcgPSBhbGxvd0lkZmFSZWFkaW5nO1xuICB9XG5cbiAgc2V0QWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmcoYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nID0gYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc7XG4gIH1cblxuICBzZXRMaW5rTWVFbmFibGVkKGxpbmtNZUVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmxpbmtNZUVuYWJsZWQgPSBsaW5rTWVFbmFibGVkO1xuICB9XG5cbiAgc2V0QXR0cmlidXRpb25DYWxsYmFja0xpc3RlbmVyKGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQpIHtcbiAgICB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2sgPSBhdHRyaWJ1dGlvbkNhbGxiYWNrO1xuICB9XG5cbiAgc2V0RXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrTGlzdGVuZXIoZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCkge1xuICAgIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrID0gZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0RXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrTGlzdGVuZXIoZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50RmFpbHVyZSkgPT4gdm9pZCkge1xuICAgIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrID0gZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xuICB9XG5cbiAgc2V0U2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihcbiAgICBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKHNlc3Npb246IEFkanVzdFNlc3Npb25TdWNjZXNzKSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldFNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrTGlzdGVuZXIoc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCkge1xuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHNldERlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5kZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2sgPSBkZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s7XG4gIH1cblxuICBzZXRDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2tMaXN0ZW5lcihjb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChjb252ZXJzaW9uVmFsdWU6IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMuY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrID0gY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdHRyaWJ1dGlvbkNhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XG4gIH1cblxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgaGFzQXR0cmlidXRpb25MaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkNhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNFdmVudFRyYWNraW5nU3VjY2VlZGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNFdmVudFRyYWNraW5nRmFpbGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU2Vzc2lvblRyYWNraW5nRmFpbGVkTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgIT09IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGhhc0RlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjayAhPT0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQ29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrTGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrICE9PSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbiB7XG4gIHByaXZhdGUgcHJpY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWNlaXB0OiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhbnNhY3Rpb25EYXRlOiBzdHJpbmc7XG4gIHByaXZhdGUgc2FsZXNSZWdpb246IHN0cmluZztcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgdHJhbnNhY3Rpb25JZDogc3RyaW5nLCByZWNlaXB0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMudHJhbnNhY3Rpb25JZCA9IHRyYW5zYWN0aW9uSWQ7XG4gICAgdGhpcy5yZWNlaXB0ID0gcmVjZWlwdDtcbiAgfVxuXG4gIHNldFRyYW5zYWN0aW9uRGF0ZSh0cmFuc2FjdGlvbkRhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNhY3Rpb25EYXRlID0gdHJhbnNhY3Rpb25EYXRlO1xuICB9XG5cbiAgc2V0U2FsZXNSZWdpb24oc2FsZXNSZWdpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2FsZXNSZWdpb24gPSBzYWxlc1JlZ2lvbjtcbiAgfVxuXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbiB7XG4gIHByaXZhdGUgcHJpY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xuICBwcml2YXRlIHNrdTogc3RyaW5nO1xuICBwcml2YXRlIG9yZGVySWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBzaWduYXR1cmU6IHN0cmluZztcbiAgcHJpdmF0ZSBwdXJjaGFzZVRva2VuOiBzdHJpbmc7XG4gIHByaXZhdGUgcHVyY2hhc2VUaW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaWNlOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcsIHNrdTogc3RyaW5nLCBvcmRlcklkOiBzdHJpbmcsIHNpZ25hdHVyZTogc3RyaW5nLCBwdXJjaGFzZVRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuc2t1ID0gc2t1O1xuICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5wdXJjaGFzZVRva2VuID0gcHVyY2hhc2VUb2tlbjtcbiAgfVxuXG4gIHNldFB1cmNoYXNlVGltZShwdXJjaGFzZVRpbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucHVyY2hhc2VUaW1lID0gcHVyY2hhc2VUaW1lO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmcge1xuICBwcml2YXRlIGlzRW5hYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBncmFudWxhck9wdGlvbnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcGFydG5lclNoYXJpbmdTZXR0aW5nczogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgfVxuXG4gIGFkZEdyYW51bGFyT3B0aW9uKHBhcnRuZXJOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaChwYXJ0bmVyTmFtZSk7XG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaChrZXkpO1xuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclNoYXJpbmdTZXR0aW5nKHBhcnRuZXJOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclNoYXJpbmdTZXR0aW5ncy5wdXNoKHBhcnRuZXJOYW1lKTtcbiAgICB0aGlzLnBhcnRuZXJTaGFyaW5nU2V0dGluZ3MucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclNoYXJpbmdTZXR0aW5ncy5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRqdXN0QWRSZXZlbnVlIHtcbiAgcHJpdmF0ZSBzb3VyY2U6IHN0cmluZztcbiAgcHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcbiAgcHJpdmF0ZSBhZEltcHJlc3Npb25zQ291bnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBhZFJldmVudWVOZXR3b3JrOiBzdHJpbmc7XG4gIHByaXZhdGUgYWRSZXZlbnVlVW5pdDogc3RyaW5nO1xuICBwcml2YXRlIGFkUmV2ZW51ZVBsYWNlbWVudDogc3RyaW5nO1xuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldmVudWUgPSByZXZlbnVlO1xuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgfVxuXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xuICB9XG5cbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBzZXRBZEltcHJlc3Npb25zQ291bnQoYWRJbXByZXNzaW9uc0NvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmFkSW1wcmVzc2lvbnNDb3VudCA9IGFkSW1wcmVzc2lvbnNDb3VudDtcbiAgfVxuXG4gIHNldEFkUmV2ZW51ZU5ldHdvcmsoYWRSZXZlbnVlTmV0d29yazogc3RyaW5nKSB7XG4gICAgdGhpcy5hZFJldmVudWVOZXR3b3JrID0gYWRSZXZlbnVlTmV0d29yaztcbiAgfVxuXG4gIHNldEFkUmV2ZW51ZVVuaXQoYWRSZXZlbnVlVW5pdDogc3RyaW5nKSB7XG4gICAgdGhpcy5hZFJldmVudWVVbml0ID0gYWRSZXZlbnVlVW5pdDtcbiAgfVxuXG4gIHNldEFkUmV2ZW51ZVBsYWNlbWVudChhZFJldmVudWVQbGFjZW1lbnQ6IHN0cmluZykge1xuICAgIHRoaXMuYWRSZXZlbnVlUGxhY2VtZW50ID0gYWRSZXZlbnVlUGxhY2VtZW50O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0QXR0cmlidXRpb24ge1xuICB0cmFja2VyVG9rZW46IHN0cmluZztcbiAgdHJhY2tlck5hbWU6IHN0cmluZztcbiAgbmV0d29yazogc3RyaW5nO1xuICBjYW1wYWlnbjogc3RyaW5nO1xuICBhZGdyb3VwOiBzdHJpbmc7XG4gIGNyZWF0aXZlOiBzdHJpbmc7XG4gIGNsaWNrTGFiZWw6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBjb3N0VHlwZTogc3RyaW5nO1xuICBjb3N0QW1vdW50OiBzdHJpbmc7XG4gIGNvc3RDdXJyZW5jeTogc3RyaW5nO1xuICBmYkluc3RhbGxSZWZlcnJlcjogc3RyaW5nOyAvLyBBbmRyb2lkIG9ubHlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RTZXNzaW9uU3VjY2VzcyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIGFkaWQ6IHN0cmluZztcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0U2Vzc2lvbkZhaWx1cmUge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICBhZGlkOiBzdHJpbmc7XG4gIHdpbGxSZXRyeTogYm9vbGVhbjtcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0RXZlbnRTdWNjZXNzIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBldmVudFRva2VuOiBzdHJpbmc7XG4gIGNhbGxiYWNrSWQ6IHN0cmluZztcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0RXZlbnRGYWlsdXJlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgYWRpZDogc3RyaW5nO1xuICBldmVudFRva2VuOiBzdHJpbmc7XG4gIHdpbGxSZXRyeTogYm9vbGVhbjtcbiAgY2FsbGJhY2tJZDogc3RyaW5nO1xuICBqc29uUmVzcG9uc2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gQWRqdXN0RW52aXJvbm1lbnQge1xuICBTYW5kYm94ID0gJ3NhbmRib3gnLFxuICBQcm9kdWN0aW9uID0gJ3Byb2R1Y3Rpb24nLFxufVxuXG5leHBvcnQgZW51bSBBZGp1c3RMb2dMZXZlbCB7XG4gIFZlcmJvc2UgPSAnVkVSQk9TRScsXG4gIERlYnVnID0gJ0RFQlVHJyxcbiAgSW5mbyA9ICdJTkZPJyxcbiAgV2FybiA9ICdXQVJOJyxcbiAgRXJyb3IgPSAnRVJST1InLFxuICBBc3NlcnQgPSAnQVNTRVJUJyxcbiAgU3VwcHJlc3MgPSAnU1VQUFJFU1MnLFxufVxuXG5leHBvcnQgZW51bSBBZGp1c3RVcmxTdHJhdGVneSB7XG4gIEluZGlhID0gJ2luZGlhJyxcbiAgQ2hpbmEgPSAnY2hpbmEnLFxuICBEYXRhUmVzaWRlbmN5RVUgPSAnZGF0YS1yZXNpZGVuY3ktZXUnLFxuICBEYXRhUmVzaWRlbmN5VFIgPSAnZGF0YS1yZXNpZGVuY3ktdHInLFxuICBEYXRhUmVzaWRlbmN5VVMgPSAnZGF0YS1yZXNpZGVuY3ktdXMnLFxufVxuXG5leHBvcnQgZW51bSBBZGp1c3RBZFJldmVudWVTb3VyY2Uge1xuICBBZFJldmVudWVTb3VyY2VBcHBMb3Zpbk1BWCA9ICdhcHBsb3Zpbl9tYXhfc2RrJyxcbiAgQWRSZXZlbnVlU291cmNlTW9wdWIgPSAnbW9wdWInLFxuICBBZFJldmVudWVTb3VyY2VBZE1vYiA9ICdhZG1vYl9zZGsnLFxuICBBZFJldmVudWVTb3VyY2VJcm9uU291cmNlID0gJ2lyb25zb3VyY2Vfc2RrJyxcbiAgQWRSZXZlbnVlU291cmNlQWRNb3N0ID0gXCJhZG1vc3Rfc2RrXCIsXG4gIEFkUmV2ZW51ZVNvdXJjZVVuaXR5ID0gXCJ1bml0eV9zZGtcIixcbiAgQWRSZXZlbnVlU291cmNlSGVsaXVtQ2hhcnRib29zdCA9IFwiaGVsaXVtX2NoYXJ0Ym9vc3Rfc2RrXCIsXG4gIEFkUmV2ZW51ZVNvdXJjZVB1Ymxpc2hlciA9IFwicHVibGlzaGVyX3Nka1wiLFxufVxuXG4vKipcbiAqIEBuYW1lIEFkanVzdFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIHRoZSBJb25pYyBDb3Jkb3ZhIFNESyBvZiBBZGp1c3TihKIuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IEFkanVzdOKEoiBhdCBhZGp1c3QuY29tLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29tLmFkanVzdC5zZGtgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQWRqdXN0IENvcmRvdmEgU0RLXShodHRwczovL2dpdGh1Yi5jb20vYWRqdXN0L2NvcmRvdmFfc2RrKVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogIGltcG9ydCB7IEFkanVzdCwgQWRqdXN0Q29uZmlnLCBBZGp1c3RFbnZpcm9ubWVudCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hZGp1c3Qvbmd4JztcbiAqXG4gKiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZGp1c3Q6IEFkanVzdCkgeyB9XG4gKlxuICogIC4uLlxuICpcbiAqICBjb25zdCBjb25maWcgPSBuZXcgQWRqdXN0Q29uZmlnKCdBUFAtVE9LRU4tSEVSRScsIEFkanVzdEVudmlyb25tZW50LlNhbmRib3gpO1xuICogIGNvbmZpZy5sb2dMZXZlbCA9IEFkanVzdExvZ0xldmVsLlZlcmJvc2U7XG4gKiAgLy8gU2V0IG90aGVyIGNvbmZpZyBwcm9wZXJ0aWVzLlxuICogIGFkanVzdC5jcmVhdGUoY29uZmlnKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBBZGp1c3RBdHRyaWJ1dGlvblxuICogQWRqdXN0U2Vzc2lvblN1Y2Nlc3NcbiAqIEFkanVzdFNlc3Npb25GYWlsdXJlXG4gKiBBZGp1c3RFdmVudFN1Y2Nlc3NcbiAqIEFkanVzdEV2ZW50RmFpbHVyZVxuICogQGNsYXNzZXNcbiAqIEFkanVzdEV2ZW50XG4gKiBBZGp1c3RDb25maWdcbiAqIEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uXG4gKiBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb25cbiAqIEFkanVzdFRoaXJkUGFydHlTaGFyaW5nXG4gKiBBZGp1c3RBZFJlZW51ZVxuICogQGVudW1zXG4gKiBBZGp1c3RFbnZpcm9ubWVudFxuICogQWRqdXN0TG9nTGV2ZWxcbiAqIEFkanVzdFVybFN0cmF0ZWd5XG4gKiBBZGp1c3RBZFJldmVudWVTb3VyY2VcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBZGp1c3QnLFxuICBwbHVnaW46ICdjb20uYWRqdXN0LnNkaycsXG4gIHBsdWdpblJlZjogJ0FkanVzdCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWRqdXN0L2NvcmRvdmFfc2RrJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkanVzdCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaW5pdGlhbGl6ZXMgQWRqdXN0IFNES1xuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdENvbmlnfSBjb25maWcgQWRqdXN0IGNvbmZpZyBvYmplY3QgdXNlZCBhcyBzdGFydGluZyBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY3JlYXRlKGNvbmZpZzogQWRqdXN0Q29uZmlnKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYW4gZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtBZGp1c3RFdmVudH0gZXZlbnQgQWRqdXN0IGV2ZW50IG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tFdmVudChldmVudDogQWRqdXN0RXZlbnQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBBZGp1c3QgQXBwIFN0b3JlIHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrQXBwU3RvcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIFBsYXkgU3RvcmUgc3Vic2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9ufSBzdWJzY3JpcHRpb24gQWRqdXN0IFBsYXkgU3RvcmUgc3Vic2NyaXB0aW9uIG9iamVjdCB0byBiZSB0cmFja2VkXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdHJhY2tQbGF5U3RvcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyB0aGlyZCBwYXJ0eSBzaGFyaW5nIGNob2ljZVxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdFRoaXJkUGFydHlTaGFyaW5nfSB0aGlyZFBhcnR5U2hhcmluZyBBZGp1c3QgdGhpcmQgcGFydHkgc2hhcmluZyBvYmplY3QgdG8gYmUgdHJhY2tlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrVGhpcmRQYXJ0eVNoYXJpbmcodGhpcmRQYXJ0eVNoYXJpbmc6IEFkanVzdFRoaXJkUGFydHlTaGFyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYWQgcmV2ZW51ZSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7QWRqdXN0QWRSZXZlbnVlU291cmNlfSBzb3VyY2UgQWQgcmV2ZW51ZSBzb3VyY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQgQWQgcmV2ZW51ZSBKU09OIHN0cmluZyBwYXlsb2FkXG4gICAqL1xuICB0cmFja0FkUmV2ZW51ZShzb3VyY2U6IEFkanVzdEFkUmV2ZW51ZVNvdXJjZSwgcGF5bG9hZDogc3RyaW5nKTogdm9pZDtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFkIHJldmVudWUgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge0FkanVzdEFkUmV2ZW51ZX0gYWRSZXZlbnVlIEFkanVzdCBhZCByZXZlbnVlIG9iamVjdFxuICAgKi9cbiAgdHJhY2tBZFJldmVudWUoYWRSZXZlbnVlOiBBZGp1c3RBZFJldmVudWUpOiB2b2lkO1xuXG4gIC8vIEFuZCB0eXBlc2NyaXB0IGhpZGVzIHRoaXMsIHNvIHRoZSBjbGllbnQgd2lsbCBiZSBhYmxlIGNhbGwgb25seSBtZXRob2RzIGFib3ZlXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0cmFja0FkUmV2ZW51ZShzb3VyY2VPckFkUmV2ZW51ZTogYW55LCBwYXlsb2FkPzogYW55KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgbWVhc3VyZW1lbnQgY29uc2VudCBjaG9pY2VcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBtZWFzdXJlbWVudENvbnNlbnQgc2V0IG1lYXN1cmVtZW50IGNvbnNlbnQgdG8gdHJ1ZSBvciBmYWxzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYWNrTWVhc3VyZW1lbnRDb25zZW50KG1lYXN1cmVtZW50Q29uc2VudDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBvZmZsaW5lIG1vZGUgb24gb3Igb2ZmXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBzZXQgdG8gdHJ1ZSBmb3Igb2ZmbGluZSBtb2RlIG9uXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T2ZmbGluZU1vZGUoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogQnkgbWFraW5nIHRoaXMgY2FsbCwgdGhlIEFkanVzdCBTREsgd2lsbCB0cnkgdG8gZmluZCBpZiB0aGVyZSBpcyBhbnkgbmV3IGF0dHJpYnV0aW9uIGluZm8gaW5zaWRlIG9mIHRoZSBkZWVwIGxpbmsgYW5kIGlmIGFueSwgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBBZGp1c3QgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgb2YgdGhlIGRlZXBsaW5rXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYXBwV2lsbE9wZW5VcmwodXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gZGlzYWJsZS9lbmFibGUgdGhlIEFkanVzdCBTREsgZnJvbSB0cmFja2luZyBieSBpbnZva2luZyB0aGlzIG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgc2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgU0RLXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUbyBzZW5kIHVzIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiB0b2tlbiwgYWRkIHRoZSBmb2xsb3dpbmcgY2FsbCB0byBBZGp1c3Qgd2hlbmV2ZXIgeW91IGdldCB5b3VyIHRva2VuIGluIHRoZSBhcHAgb3Igd2hlbiBpdCBnZXRzIHVwZGF0ZWQuXG4gICAqIFB1c2ggdG9rZW5zIGFyZSB1c2VkIGZvciBBdWRpZW5jZSBCdWlsZGVyIGFuZCBjbGllbnQgY2FsbGJhY2tzLCBhbmQgdGhleSBhcmUgcmVxdWlyZWQgZm9yIHRoZSB1cGNvbWluZyB1bmluc3RhbGwgdHJhY2tpbmcgZmVhdHVyZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHB1c2hUb2tlbiBwdXNoIHRva2VuIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UHVzaFRva2VuKHB1c2hUb2tlbjogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgQWRqdXN0IFNESyBpcyBjdXJyZW50bHkgZW5hYmxlZCBieSBjYWxsaW5nIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW4gYWNjb3JkYW5jZSB3aXRoIGFydGljbGUgMTcgb2YgdGhlIEVVJ3MgR2VuZXJhbCBEYXRhIFByb3RlY3Rpb24gUmVndWxhdGlvbiAoR0RQUiksIHlvdSBjYW4gbm90aWZ5IEFkanVzdCB3aGVuIGEgdXNlciBoYXMgZXhlcmNpc2VkIHRoZWlyIHJpZ2h0IHRvIGJlIGZvcmdvdHRlbi5cbiAgICogQ2FsbGluZyB0aGUgZm9sbG93aW5nIG1ldGhvZCB3aWxsIGluc3RydWN0IHRoZSBBZGp1c3QgU0RLIHRvIGNvbW11bmljYXRlIHRoZSB1c2VyJ3MgY2hvaWNlIHRvIGJlIGZvcmdvdHRlbiB0byB0aGUgQWRqdXN0IGJhY2tlbmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZHByRm9yZ2V0TWUoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIG5vdyBub3RpZnkgQWRqdXN0IHdoZW4gYSB1c2VyIGhhcyBleGVyY2lzZWQgdGhlaXIgcmlnaHQgdG8gc3RvcCBzaGFyaW5nIHRoZWlyIGRhdGEgd2l0aCBwYXJ0bmVycyBmb3IgbWFya2V0aW5nIHB1cnBvc2VzLCBidXQgaGFzIGFsbG93ZWQgaXQgdG8gYmUgc2hhcmVkIGZvciBzdGF0aXN0aWNzIHB1cnBvc2VzLiBcbiAgICogQ2FsbGluZyB0aGUgZm9sbG93aW5nIG1ldGhvZCB3aWxsIGluc3RydWN0IHRoZSBBZGp1c3QgU0RLIHRvIGNvbW11bmljYXRlIHRoZSB1c2VyJ3MgY2hvaWNlIHRvIGRpc2FibGUgZGF0YSBzaGFyaW5nIHRvIHRoZSBBZGp1c3QgYmFja2VuZFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRpc2FibGVUaGlyZFBhcnR5U2hhcmluZygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZ2V0IEdvb2dsZSBBZElkXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggZ29vZ2xlIEFkSWQgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0R29vZ2xlQWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB5b3UgbmVlZCB0byBvYnRhaW4gdGhlIEFtYXpvbiBBZHZlcnRpc2luZyBJRCwgeW91IGNhbiBtYWtlIGEgY2FsbCB0byB0aGlzIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuYXppYiBhZHYuIElEXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFtYXpvbkFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVG8gb2J0YWluIHRoZSBJREZBLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBJREZBIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJZGZhKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBldmVyeSBkZXZpY2Ugd2l0aCB5b3VyIGFwcCBpbnN0YWxsZWQgb24gaXQsIHRoZSBBZGp1c3QgYmFja2VuZCBnZW5lcmF0ZXMgYSB1bmlxdWUgQWRqdXN0IGRldmljZSBpZGVudGlmaWVyIChhZGlkKS5cbiAgICogSW4gb3JkZXIgdG8gb2J0YWluIHRoaXMgaWRlbnRpZmllciwgY2FsbCB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYWRpZCB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBZGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3RydWN0IHRvIEFkanVzdCBTREsgdG8gY2hlY2sgY3VycmVudCBzdGF0ZSBvZiBhdHRfc3RhdHVzXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2hlY2tGb3JOZXdBdHRTdGF0dXMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJZiB5b3Ugd2FudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgYSB1c2VyJ3MgY3VycmVudCBhdHRyaWJ1dGlvbiB3aGVuZXZlciB5b3UgbmVlZCBpdCwgeW91IGNhbiBtYWtlIGEgY2FsbCB0byB0aGlzIGZ1bmN0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFkanVzdEF0dHJpYnV0aW9uPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBBZGp1c3RBdHRyaWJ1dGlvbiBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXR0cmlidXRpb24oKTogUHJvbWlzZTxBZGp1c3RBdHRyaWJ1dGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluZm9ybWF0aW9uIGFib3V0IHZlcnNpb24gb2YgdGhlIFNESyB1c2VkXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggc2RrIHZlcnNpb24gaW5mb3JtYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdXNlZCB0byBhZGQgc2Vzc2lvbiBjYWxsYmFjayBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZFNlc3Npb25DYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVtb3ZlIGEgc3BlY2lmaWMgc2Vzc2lvbiBjYWxsYmFjayBwYXJhbWV0ZXIgYnkgcGFzc2luZyB0aGUgZGVzaXJpbmcga2V5IHRvIHRoaXMgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlU2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJZiBhbGwga2V5cyBhbmQgdmFsdWVzIGZyb20gdGhlIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVycyBoYXZlIHRvIGJlIHJlbW92ZWQsIGNhbGwgdGhpcyBtZXRob2RcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZXNldFNlc3Npb25DYWxsYmFja1BhcmFtZXRlcnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdXNlZCB0byBhZGQgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIGtleSBrZXlcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkU2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXIgYnkgcGFzc2luZyB0aGUgZGVzaXJpbmcga2V5IHRvIHRoaXMgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSBrZXkga2V5XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlU2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIGFsbCBrZXlzIGFuZCB2YWx1ZXMgZnJvbSB0aGUgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlcnMgaGF2ZSB0byBiZSByZW1vdmVkLCBjYWxsIHRoaXMgbWV0aG9kXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVzZXRTZXNzaW9uUGFydG5lclBhcmFtZXRlcnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjYWxsIHdpbGwgbWFrZSB0aGUgQWRqdXN0IFNESyBzZW5kIHRoZSBpbml0aWFsIGluc3RhbGwgc2Vzc2lvbiBhbmQgYW55IGV2ZW50cyBjcmVhdGVkLCBpZiB0aGV5IHdlcmUgbm90IHNlbnQgYWZ0ZXIgZGVsYXkgc3RhcnQgd2FzIHNldCBhbmQgaXQncyBkZWxheSBleHBpcmVkLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNlbmRGaXJzdFBhY2thZ2VzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVxdWVzdCBBZGp1c3QgU0RLIHRvIHNob3cgcG9wIHVwIGRpYWxvZyBmb3IgYXNraW5nIHVzZXIncyBjb25zZW50IHRvIGJlIHRyYWNrZWQuXG4gICAqIEluIG9yZGVyIHRvIGRvIHRoaXMsIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHVzZXIncyBjb25zZW50IHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RUcmFja2luZ0F1dGhvcml6YXRpb25XaXRoQ29tcGxldGlvbkhhbmRsZXIoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiB1cGRhdGUgU0tBZE5ldHdvcmsgY29udmVyc2lvbiB2YWx1ZSB3aXRoIGNhbGxpbmcgdGhpcyBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnZlcnNpb25WYWx1ZSBjb252ZXJzaW9uIHZhbHVlIGZvciB0aGUgdXNlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVwZGF0ZUNvbnZlcnNpb25WYWx1ZShjb252ZXJzaW9uVmFsdWU6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogVG8gb2J0YWluIHRoZSBhcHAgdHJhY2tpbmcgYXV0aG9yaXphdGlvbiBzdGF0dXMgaW4gaU9TLCBjYWxsIHRoaXMgZnVuY3Rpb25cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhcHAgdHJhY2tpbmcgYXV0aG9yaXphdGlvbiBzdGF0dXNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwVHJhY2tpbmdBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIG9idGFpbiB0aGUgbGFzdCBkZWVwIGxpbmsgd2hpY2ggaGFzIG9wZW5lZCB5b3VyIGlPUyBhcHAsIGNhbGwgdGhpcyBmdW5jdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGlPUyBkZWVwIGxpbmsgc3RyaW5nIHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldExhc3REZWVwbGluaygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufSJdfQ==