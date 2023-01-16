'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var PlayInstallReferrer = /** @class */ (function (_super) {
    tslib.__extends(PlayInstallReferrer, _super);
    function PlayInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayInstallReferrer.prototype.getReferrer = function () { return core.cordova(this, "getReferrer", {}, arguments); };
    PlayInstallReferrer.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PlayInstallReferrer, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PlayInstallReferrer.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PlayInstallReferrer });
    PlayInstallReferrer.pluginName = "PlayInstallReferrer";
    PlayInstallReferrer.plugin = "cordova-plugin-play-installreferrer";
    PlayInstallReferrer.pluginRef = "installReferrer";
    PlayInstallReferrer.repo = "https://github.com/swayangjit/cordova-plugin-play-installreferrer";
    PlayInstallReferrer.platforms = ["Android"];
    PlayInstallReferrer = tslib.__decorate([], PlayInstallReferrer);
    return PlayInstallReferrer;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PlayInstallReferrer, decorators: [{
            type: i0.Injectable
        }], propDecorators: { getReferrer: [] } });

exports.PlayInstallReferrer = PlayInstallReferrer;
