import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../interfaces/IEmployee";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee!: IEmployee;

  employeeCopy!: IEmployee;

  // name: string = this.employee.name;
  // role: string = this.employee.role;

  isUpdating: boolean = false;

  constructor(private state: StateService) { }

  ngOnInit(): void {
  }

  onDelete() : void {
    this.state.deleteEmployeeById(this.employee?.id)
  }

  onUpdate(): void{
    this.employeeCopy = {...this.employee}; //shallow copy of employee
    this.isUpdating = !this.isUpdating;
  }

  onCancel(){
    this.isUpdating = !this.isUpdating;
  }
  onSave(){
    // this.employee = this.employeeCopy
    this.state.updateEmployeeById(this.employeeCopy?.id, this.employeeCopy)
  }

}
