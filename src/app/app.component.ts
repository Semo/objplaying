import { Component, OnInit } from '@angular/core';
import { Person } from './interface/person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'store';
  private randomJoe: Person = {
    name: 'abc',
    surname: 'def'
  };
  
  constructor(person: Person) {
    this.randomJoe = person;
  }
  
  ngOnInit(): void {
    this.randomJoe;
    const rollo = new Person("Rollo", "Ragnarök");
    console.log(rollo);
  }

}
