import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from '../services/data.service';

@Component({
    selector: 'weather-app',
    templateUrl: 'app/assets/html/app.component.html',
    styleUrls: ['app/assets/css/app.component.css'],
    providers: [ WeatherProvider ]
})
export class AppComponent implements OnInit {

    private currentDataSource: any;

    public conditions: Object;
    public humidity: Object;
    public windSpeed: Object;

    private data:Array<any> = [
        {data: []},
    ];

    private labels:Array<any> = [];

    private options:any = {
        animation: false,
        responsive: true
    };

    private colors:Array<any> = [
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];
    private legend:boolean = true;
    private chartType:string = 'bar';

    /**
     * Constructor
     * @param weatherProvider
     */
    constructor(private weatherProvider: WeatherProvider) {

    }

    /**
     * On Change
     * @param deviceValue
     */
    onChange(deviceValue) {
        let _this = this;
        this.currentDataSource.unsubscribe();
        this.currentDataSource = this.weatherProvider.getCityWeather(deviceValue)
            .subscribe((data) => {
                _this.subscribeData(data)
            });
    }

    /**
     * On Component Init
     */
    ngOnInit() {
        let _this = this;
        this.currentDataSource = this.weatherProvider.getCityWeather('Kiev')
            .subscribe((data) => {
                _this.subscribeData(data)
            });
    }

    /**
     * Subscrib data
     * @param data
     */
    subscribeData(data) {
        this.data = [
            { data: data.temperatures },
        ];
        this.labels = data.legend;
        this.conditions = data.conditions;
        this.humidity = data.humidities;
        this.windSpeed = data.windSpeed;
    }
}