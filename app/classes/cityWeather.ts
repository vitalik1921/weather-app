
function timeConverter(timestamp: number){
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
    private legend: Array<string>;
    private _temperatures: Array<string>;
    private _conditions: Array<string>;
    private _humidities: Array<string>;
    private _windSpeed: Array<string>;

    get windSpeed(): Object {
        return this._windSpeed;
    }
    get humidities(): Object {
        return this._humidities;
    }
    get conditions(): Object {
        return this._conditions;
    }
    get temperatures(): Object {
        return this._temperatures;
    }

    constructor(data: Object) {
        console.log(data);
        for (let item of data['list']) {
            console.log(item);
        }
        this.data = data;
    }
}