import { Component, OnInit, ViewChild } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { CountryReport } from './../../model/countryReport';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  disableBtn = false;

  searchCountry: string;

  ELEMENT_DATA: CountryReport[];

  columnNames: string[] = ['country', 'cases', 'todayCases', 'todayDeaths', 'recovered', 'todayRecovered', 'active', 'critical', 'tests'];
  dataSource = new MatTableDataSource<CountryReport>(this.ELEMENT_DATA);

  constructor(private service: Covid19Service) { }

  ngOnInit(): void {
    this.getAllReports();
  }

  public getAllReports() {
    let resp = this.service.covid19Report();
    resp.subscribe(report => this.dataSource.data = report as CountryReport[]);
  }

  onSubmit() {
    let country: string = this.searchCountry;
    let resp = this.service.covid19Country(country);
    console.log(resp);
    resp.subscribe(
      repo => this.dataSource.data = repo as CountryReport[]
    );
    console.log(country);
    this.searchCountry="";
  }

}
