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
        this._legend = [];
        this._temperatures = [];
        this._conditions = {};
        this._humidities = {};
        this._windSpeed = {};
        for (var _i = 0, _a = data['list']; _i < _a.length; _i++) {
            var item = _a[_i];
            var timeStr = timeConverter(item['dt']);
            this._legend.push(timeStr);
            this._temperatures.push(item['main']['temp'].toFixed(0));
            this._windSpeed[timeStr] = item['wind']['speed'].toString() + ' m/s';
            this._humidities[timeStr] = item['main']['humidity'].toString() + ' m/s';
            var weatherString = '';
            for (var _b = 0, _c = item['weather']; _b < _c.length; _b++) {
                var str = _c[_b];
                weatherString = +' ' + str['description'];
            }
            this._conditions[timeStr] = weatherString;
        }
    }
    Object.defineProperty(CityWeather.prototype, "legend", {
        get: function () {
            return this._legend;
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
    return CityWeather;
}());
exports.CityWeather = CityWeather;
//# sourceMappingURL=cityWeather.js.map