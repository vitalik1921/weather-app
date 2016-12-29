import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from '../services/data.service';

@Component({
    selector: 'weather-app',
    templateUrl: 'app/assets/html/app.component.html',
    styleUrls: ['app/assets/css/app.component.css'],
    providers: [ WeatherProvider ]
})
export class AppComponent implements OnInit {
    data: any;

    /**
     * Constructor
     * @param weatherProvider
     */
    constructor(private weatherProvider: WeatherProvider) {

    }

    /**
     * On Component Init
     */
    ngOnInit() {
        this.weatherProvider.getCityWeather('Kiev').subscribe((data) => { this.data = data });
        console.log(this.data);
    }
}