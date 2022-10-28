import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StateService} from "../../services/state.service";
import {IEmployee} from "../../interfaces/IEmployee";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: IEmployee ={
    name: "",
    role: ""
  };

  constructor(public state: StateService) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.state.isCreating();
  }
  onCreate(){
    this.state.onCreate(this.employee)
  }

}
