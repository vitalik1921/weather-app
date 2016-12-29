"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var cityWeather_1 = require("../classes/cityWeather");
require("rxjs/add/operator/map");
var WeatherProvider = (function () {
    /**
     * Constructor
     * @param http
     */
    function WeatherProvider(http) {
        this.http = http;
        /**
         * API Key
         * @type {string}
         */
        this.apiKey = '4a0f3ef3df4ebaf5c54e354d73505e90';
        /**
         * City IDs
         * @type {{Kiev: string; Lviv: string; Odessa: string}}
         */
        this.cityIDs = {
            'Kiev': '703448',
            'Lviv': '702550',
            'Odessa': '4166787'
        };
    }
    /**
     * Get Weather for a City
     * @param name
     * @returns {Observable<R>}
     */
    WeatherProvider.prototype.getCityWeather = function (name) {
        var cityID = this.cityIDs[name];
        return this.http.get("http://api.openweathermap.org/data/2.5/forecast?cnt=10&units=metric&appid=" + this.apiKey + "&id=" + cityID)
            .map(function (resp) {
            return new cityWeather_1.CityWeather(resp.json());
        });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherProvider);
exports.WeatherProvider = WeatherProvider;
//# sourceMappingURL=data.service.js.map