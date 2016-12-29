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
var data_service_1 = require("../services/data.service");
var AppComponent = (function () {
    /**
     * Constructor
     * @param weatherProvider
     */
    function AppComponent(weatherProvider) {
        this.weatherProvider = weatherProvider;
        // lineChart
        this.data = [
            { data: [65, 59, 80, 81, 56, 55, 40] },
        ];
        this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.options = {
            animation: false,
            responsive: true
        };
        this.colors = [
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }
        ];
        this.legend = true;
        this.chartType = 'bar';
    }
    AppComponent.prototype.randomize = function () {
        var _data = new Array(this.data.length);
        for (var i = 0; i < this.data.length; i++) {
            _data[i] = { data: new Array(this.data[i].data.length), label: this.data[i].label };
            for (var j = 0; j < this.data[i].data.length; j++) {
                _data[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.data = _data;
    };
    /**
     * On Component Init
     */
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.weatherProvider.getData);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'weather-app',
        templateUrl: 'app/assets/html/app.component.html',
        styleUrls: ['app/assets/css/app.component.css'],
        providers: [data_service_1.WeatherProvider]
    }),
    __metadata("design:paramtypes", [data_service_1.WeatherProvider])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map