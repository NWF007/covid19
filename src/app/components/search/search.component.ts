import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchCountry: string;
  

  constructor(private service : Covid19Service) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const country: string = this.searchCountry;
    this.service.covid19Country(country).subscribe
    console.log(country);
    this.searchCountry="";
  }

}
