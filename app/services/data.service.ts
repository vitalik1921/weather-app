import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CityWeather } from '../classes/cityWeather';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider{
    /**
     * API Key
     * @type {string}
     */
    apiKey:string = '4a0f3ef3df4ebaf5c54e354d73505e90';

    /**
     * City IDs
     * @type {{Kiev: string; Lviv: string; Odessa: string}}
     */
    cityIDs: Object = {
        'Kiev': '703448',
        'Lviv': '702550',
        'Odessa': '4166787'
    };

    /**
     * City Data
     */
    private _data:Object = {};

    /**
     * Get Data
     * @returns {Object[]}
     */
    get getData(): Object {
        return this._data;
    }

    /**
     * Constructor
     * @param http
     */
    constructor(private http: Http) {
        this.getCityWeather('Kiev');
        this.getCityWeather('Lviv');
        this.getCityWeather('Odessa');
    }

    /**
     * Get Weather for a City
     * @param name
     * @returns {Observable<R>}
     */
    public getCityWeather(name: string) {
        let cityID:string = this.cityIDs[name];
        this.http.get(`http://api.openweathermap.org/data/2.5/forecast?cnt=10&units=metric&appid=${this.apiKey}&id=${cityID}`)
            .map((resp:Response) => {
                return new CityWeather(resp.json());
            })
            .subscribe((data) => { this._data[name] = data });
    }
}