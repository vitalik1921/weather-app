
function timeConverter(timestamp: number): string {
    let a = new Date(timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    return date + ' ' + month + ' ' + hour + ':' + min;
}

export class CityWeather {
    private data: Object;
    private _legend: Array<string> = [];
    private _temperatures: Array<string> = [];
    private _conditions: Array<Object> = [];
    private _humidities: Array<Object> = [];
    private _windSpeed: Array<Object> = [];

    get legend(): Array<string> {
        return this._legend;
    }
    get temperatures(): Array<string> {
        return this._temperatures;
    }
    get windSpeed(): Object {
        return this._windSpeed;
    }
    get humidities(): Object {
        return this._humidities;
    }
    get conditions(): Object {
        return this._conditions;
    }

    constructor(data: Object) {
        for (let item of data['list']) {
            let timeStr = timeConverter(item['dt']);
            this._legend.push(timeStr);
            this._temperatures.push(item['main']['temp'].toFixed(0));
            this._windSpeed.push( { caption: timeStr, value: item['wind']['speed'].toString() + ' m/s' } );
            this._humidities.push( { caption: timeStr, value: item['main']['humidity'].toString() } );
            let weatherString:string = '';
            for (let str of item['weather']) {
                console.log(str['description']);
                weatherString += str['description'] + ' ';
            }
            this._conditions.push( { caption: timeStr, value: weatherString } );
        }
        console.log(this._conditions);
    }
}