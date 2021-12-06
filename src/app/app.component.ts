import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISTandardMessageInterface } from './core/model/istandard-message-interface';
import { OneTypedMessage, OneTypedMessageInterface } from './core/model/one-typed-message-interface';
import { Point } from "geojson";
import { TwoTypedMessage, TwoTypedMessageInterface } from './core/model/two-typed-message-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'store';

  stdMess!: ISTandardMessageInterface<OneTypedMessageInterface>;
  sepMess!: ISTandardMessageInterface<TwoTypedMessageInterface>;

  subjectStdMess = new BehaviorSubject(this.stdMess);
  subjectSepMess = new BehaviorSubject(this.sepMess);

  constructor() {}
  
  ngOnInit(): void {
    this.subjectStdMess.next({'type': 'otm', 'message': [new OneTypedMessage("1", "ein Poi", {"type": "Point", "coordinates": [7.0069, 51.1623]}, new Date())]});


    this.subjectStdMess.subscribe(message => {
      console.log('Access some Message Object at constructor -->', message.message[0]);
    });

    this.subjectSepMess.next({'type': 'sep', 'message': [new TwoTypedMessage("1", "Olaf", "Scholz")]});


    this.subjectSepMess.subscribe(message => {
      console.log('Access some Message Object at constructor -->', message.message[0]);
    });

    console.log("Helloo");
  }

}
