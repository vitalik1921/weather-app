import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from '../services/data.service';

@Component({
    selector: 'weather-app',
    templateUrl: 'app/assets/html/app.component.html',
    styleUrls: ['app/assets/css/app.component.css'],
    providers: [ WeatherProvider ]
})
export class AppComponent implements OnInit {
    public data: any;

    // lineChart
    public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40]},
    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions:any = {
        animation: false,
        responsive: true
    };
    public lineChartColors:Array<any> = [
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'bar';

    public randomize():void {
        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }

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