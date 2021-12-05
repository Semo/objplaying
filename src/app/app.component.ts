import { Component, OnInit } from '@angular/core';
import { ISTandardMessageInterface } from './core/model/istandard-message-interface';
import { OneTypedMessageInterface } from './core/model/one-typed-message-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'store';

  watch!: ISTandardMessageInterface<OneTypedMessageInterface>;

  
  constructor() {}
  
  ngOnInit(): void {
    
    console.log("Heloo");
  }

}
