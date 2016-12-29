import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from '../services/data.service';

@Component({
    selector: 'weather-app',
    templateUrl: 'app/assets/html/app.component.html',
    styleUrls: ['app/assets/css/app.component.css'],
    providers: [ WeatherProvider ]
})
export class AppComponent implements OnInit {

    public data:Array<any> = [
        {data: []},
    ];

    public labels:Array<any> = [];

    public options:any = {
        animation: false,
        responsive: true
    };

    public colors:Array<any> = [
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];
    public legend:boolean = true;
    public chartType:string = 'bar';

    /**
     * Constructor
     * @param weatherProvider
     */
    constructor(private weatherProvider: WeatherProvider) {

    }

    onChange(deviceValue) {
        console.log(deviceValue);
    }

    /**
     * On Component Init
     */
    ngOnInit() {
        let data:Object = this.weatherProvider.getData;
    }
}