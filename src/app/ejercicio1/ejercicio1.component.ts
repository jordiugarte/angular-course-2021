import { Component, Input, OnInit } from '@angular/core';
import { Api } from './services/api.service';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  vaccinated: any;
  notVaccinated: any;

  update(event: any) {
    //console.log('item', event);
    //let index = this.data.findIndex(item => item.name === event.name);
    //this.data[index] = event;
    //this.ngOnInit();
  }

  constructor(private service: Api) {
    this.vaccinated = this.service
      .getVaccinated()
      .subscribe(s => console.log(s));
    this.notVaccinated = this.service
      .getUnvaccinated()
      .subscribe(s => console.log(s));
  }

  ngOnInit() {
    
  }
}
