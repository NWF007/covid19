import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient) { }

  public covid19Report() {
    return this.http.get("https://corona.lmao.ninja/v3/covid-19/countries");
  }

  covid19Country(country: string){
    return this.http.get(`https://corona.lmao.ninja/v3/covid-19/countries/${country}`)
  }

}
