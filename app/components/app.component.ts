import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from '../services/data.service';

@Component({
    selector: 'weather-app',
    templateUrl: 'app/assets/html/app.component.html',
    styleUrls: ['app/assets/css/app.component.css'],
    providers: [ WeatherProvider ]
})
export class AppComponent implements OnInit {
    // lineChart
    public data:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40]},
    ];
    public labels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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

    public randomize():void {
        let _data:Array<any> = new Array(this.data.length);
        for (let i = 0; i < this.data.length; i++) {
            _data[i] = {data: new Array(this.data[i].data.length), label: this.data[i].label};
            for (let j = 0; j < this.data[i].data.length; j++) {
                _data[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.data = _data;
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
        console.log(this.weatherProvider.getData);
    }
}