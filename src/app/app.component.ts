import {Component, OnInit} from '@angular/core';
import {StateService} from "./services/state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'company-fe';


  // creating: boolean = false;

  constructor(private state: StateService) {
  }
}
