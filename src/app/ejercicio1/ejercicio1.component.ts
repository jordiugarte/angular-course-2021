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
    this.ngOnInit();
  }

  constructor(private service: Api) {
    this.vaccinated = [];
    this.notVaccinated = [];
  }

  ngOnInit() {
    this.service.getVaccinated().subscribe(s => {
      let array = [];
      let index = 0;
      for (let key in s) {
        let item = Object.values(s)[index];
        console.log(item);
        array.push({
          key: key,
          age: item['age'],
          date: item['date'],
          disease: item['disease'],
          doses: item['doses'],
          name: item['name'],
          vaccineType: item['vaccineType'],
          vaccined: item['vaccined']
        });
        index++;
      }
      this.vaccinated = array;
    });
    this.service.getUnvaccinated().subscribe(s => {
      let array = [];
      let index = 0;
      for (let key in s) {
        let item = Object.values(s)[index];
        console.log(item);
        array.push({
          key: key,
          age: item['age'],
          date: item['date'],
          disease: item['disease'],
          doses: item['doses'],
          name: item['name'],
          vaccineType: item['vaccineType'],
          vaccined: item['vaccined']
        });
        index++;
      }
      this.notVaccinated = array;
    });
  }
}
