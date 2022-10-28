import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IEmployee} from "../interfaces/IEmployee";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  getAllEmployees() : Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>('http://localhost:8080/api/employee')
  }

  deleteEmployeeById(id: number) : Observable<string> {
    return this.http.delete<string>(`http://localhost:8080/api/employee/${id}`)
  }

  updateById(id: number, employee: IEmployee) : Observable<string> {
    return this.http.put<string>(`http://localhost:8080/api/employee/${id}`, employee)
  }
}
