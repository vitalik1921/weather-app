"use strict";
function timeConverter(timestamp) {
    var a = new Date(timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    return date + ' ' + month + ' ' + hour + ':' + min;
}
var CityWeather = (function () {
    function CityWeather(data) {
        console.log(data);
        for (var _i = 0, _a = data['list']; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
        this.data = data;
    }
    Object.defineProperty(CityWeather.prototype, "windSpeed", {
        get: function () {
            return this._windSpeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityWeather.prototype, "humidities", {
        get: function () {
            return this._humidities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityWeather.prototype, "conditions", {
        get: function () {
            return this._conditions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityWeather.prototype, "temperatures", {
        get: function () {
            return this._temperatures;
        },
        enumerable: true,
        configurable: true
    });
    return CityWeather;
}());
exports.CityWeather = CityWeather;
//# sourceMappingURL=cityWeather.js.map