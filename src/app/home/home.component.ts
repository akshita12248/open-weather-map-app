import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import * as dialogs from "tns-core-modules/ui/dialogs";
@Component({
    moduleId: module.id,
    selector: "Home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    private appId: string;
    private appCode: string;

    public weather: any;
    public weather1: any;
    public weather2:any;
    public data: any;
    public latitude: any;
    public longitude: any;
    public city: string;
    public city2: string;
    public city3: string;
    public value:boolean = true; 
    public value1:boolean = true; 
    public value2:boolean = true; 
    
    constructor(private http: HttpClient) {
        this.appId = "6liZkbVhtvrKAtFblVkb";
        this.appCode = "Y2qdRqKL35uByTqQ4dfW-Q";
    }

    ngOnInit(): void {
        console.log(this.city);
        
    }
    submit() {
      
        console.log(this.city);
        
        if (this.city === undefined) {
            dialogs
                .alert({
                    title: "Pls enter a city name",
                    okButtonText: "Try Again",
                })
                .then(() => {
                    console.log("Dialog closed!");
                });
        }
        else {
            this.value = false;
            this.http
                .get(
                    "https://us1.locationiq.com/v1/search.php?key=ed224b09a6e956&q=" +
                        this.city +
                        "&format=json"
                )
                .subscribe(
                    (hehe) => {
                        //  console.log(hehe);
                        this.data = hehe;
                        console.log(this.data);
                        this.latitude = this.data[1].lat;
                        this.longitude = this.data[1].lon;
                        console.log(this.latitude, this.longitude);
                        this.getWeather({
                            latitude: this.latitude,
                            longitude: this.longitude,
                        });
                    },
                    (error) => {
                        this.value = true;
                        console.log(error);
                        if (error.status === 404) {
                            dialogs
                                .alert({
                                    title: "Invalid city name",
                                    message: "Pls enter a valid city name",
                                    okButtonText: "Try Again",
                                })
                                .then(() => {
                                    console.log("Dialog closed!");
                                });
                        }
                    }
                );
                }
    }

    submit1() {
       
        console.log(this.city2);
        if (this.city2 === undefined) {
            dialogs
                .alert({
                    title: "Pls enter a city name",
                    okButtonText: "Try Again",
                })
                .then(() => {
                    console.log("Dialog closed!");
                });
        }
       else {
        this.value1 = false;
            this.http
                .get(
                    "https://us1.locationiq.com/v1/search.php?key=ed224b09a6e956&q=" +
                        this.city2 +
                        "&format=json"
                )
                .subscribe(
                    (hehe) => {
                        //  console.log(hehe);
                        this.data = hehe;
                        this.latitude = this.data[1].lat;
                        this.longitude = this.data[1].lon;
                        console.log(this.latitude, this.longitude);
                        this.getWeather1({
                            latitude: this.latitude,
                            longitude: this.longitude,
                        });
                    },
                    (error) => {
                        this.value1 = true;
                        console.log(error);
                        if (error.status === 404) {
                            dialogs
                                .alert({
                                    title: "Invalid city name",
                                    message: "Pls enter a valid city name",
                                    okButtonText: "Try Again",
                                })
                                .then(() => {
                                    console.log("Dialog closed!");
                                });
                        }
                    }
                );
        }
    }
    submit2() {
        
        console.log(this.city3);
        if (this.city3 === undefined) {
            dialogs
                .alert({
                    title: "Pls enter a city name",
                    okButtonText: "Try Again",
                })
                .then(() => {
                    console.log("Dialog closed!");
                });
        }
       else {
        this.value2 = false;
            this.http
                .get(
                    "https://us1.locationiq.com/v1/search.php?key=ed224b09a6e956&q=" +
                        this.city3 +
                        "&format=json"
                )
                .subscribe(
                    (hehe) => {
                        //  console.log(hehe);
                        this.data = hehe;
                        this.latitude = this.data[1].lat;
                        this.longitude = this.data[1].lon;
                        console.log(this.latitude, this.longitude);
                        this.getWeather2({
                            latitude: this.latitude,
                            longitude: this.longitude,
                        });
                    },
                    (error) => {
                        this.value2 = true;
                        console.log(error);
                        if (error.status === 404) {
                            dialogs
                                .alert({
                                    title: "Invalid city name",
                                    message: "Pls enter a valid city name",
                                    okButtonText: "Try Again",
                                })
                                .then(() => {
                                    console.log("Dialog closed!");
                                });
                        }
                    }
                );
        }
    }
    public getWeather(coordinates: any) {
        let params = new HttpParams({
            fromObject: {
                product: "forecast_7days_simple",
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                app_id: this.appId,
                app_code: this.appCode,
            },
        });
        this.http
            .get("https://weather.cit.api.here.com/weather/1.0/report.json", {
                params: params,
            })
            .pipe(
                map((result) => (<any>result).dailyForecasts.forecastLocation)
            )
            .subscribe(
                (result) => {
                    this.weather = result.forecast;
                },
                (error) => {
                    console.error(error);
                }
            );
    }
    public getWeather1(coordinates: any) {
        let params = new HttpParams({
            fromObject: {
                product: "forecast_7days_simple",
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                app_id: this.appId,
                app_code: this.appCode,
            },
        });
        this.http
            .get("https://weather.cit.api.here.com/weather/1.0/report.json", {
                params: params,
            })
            .pipe(
                map((result) => (<any>result).dailyForecasts.forecastLocation)
            )
            .subscribe(
                (result) => {
                    this.weather1 = result.forecast;
                },
                (error) => {
                    console.error(error);
                }
            );
    }
    public getWeather2(coordinates: any) {
        let params = new HttpParams({
            fromObject: {
                product: "forecast_7days_simple",
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                app_id: this.appId,
                app_code: this.appCode,
            },
        });
        this.http
            .get("https://weather.cit.api.here.com/weather/1.0/report.json", {
                params: params,
            })
            .pipe(
                map((result) => (<any>result).dailyForecasts.forecastLocation)
            )
            .subscribe(
                (result) => {
                    this.weather2 = result.forecast;
                },
                (error) => {
                    console.error(error);
                }
            );
    }
}
