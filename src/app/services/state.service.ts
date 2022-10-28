import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {IEmployee} from "../interfaces/IEmployee";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class StateService {


  // getEmployeeList(): Observable<IEmployee[]>{
  //   return this.e
  //   // this.http.getEmployees().subscribe( employee =>{
  //   //
  //   // })
  // }
  // public employees: IEmployee[] = [
  //   {
  //     name: "Max",
  //     role: "Supreme Leader"
  //   },
  //   {
  //     name: "Dav",
  //     role: "Peasant"
  //   }
  // ]
  public $creating : Subject<boolean> = new Subject
  creating: boolean = false;

  isCreating(){
    this.creating = !this.creating;
    this.$creating.next(this.creating);
  }

  onCreate(employee: IEmployee){
    this.http.createEmployee(employee).subscribe(newEmployee =>{
      console.log(newEmployee);
      this.http.getAllEmployees().subscribe(employees =>
        this.employeesSubject.next(employees)
      )
    })
    this.isCreating();
  }

  private employeesSubject : Subject<IEmployee[]> = new Subject

  constructor(private http: HttpService) {
    this.http.getAllEmployees().subscribe(employees =>
      this.employeesSubject.next(employees)
    )
  }

  getEmployeeList() : Observable<IEmployee[]> {
    return this.employeesSubject;
  }

  deleteEmployeeById(id: number | undefined) : void {
    if (id === undefined) return;

    this.http.deleteEmployeeById(id).subscribe(message =>
      this.http.getAllEmployees().subscribe(employees =>
        this.employeesSubject.next(employees)
      )
    )
  }

  updateEmployeeById(id: number | undefined, employee: IEmployee) : void {
    if (id === undefined) return;

    this.http.updateById(id, employee).subscribe(message => {
        console.log(message);
        this.http.getAllEmployees().subscribe(employees =>
          this.employeesSubject.next(employees)
        )
      }
    )
  }
}
