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

  isUpdating: boolean = false;

  constructor(private state: StateService) { }

  ngOnInit(): void {
  }

  onDelete() : void {
    this.state.deleteEmployeeById(this.employee?.id)
  }

  onUpdate(): void{
    this.employeeCopy = {...this.employee};
    this.isUpdating = !this.isUpdating;
  }

  onCancel(){
    this.isUpdating = !this.isUpdating;
  }
  onSave(){
    this.state.updateEmployeeById(this.employeeCopy?.id, this.employeeCopy)
  }

}
