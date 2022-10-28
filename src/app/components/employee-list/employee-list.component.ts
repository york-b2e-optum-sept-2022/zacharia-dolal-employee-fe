import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../interfaces/IEmployee";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList!: IEmployee[];

  constructor(private state: StateService) {
    this.state.getEmployeeList().subscribe(employees =>{
      this.employeeList = [...employees]
    })
  }
  ngOnInit(): void {
  }


}
