import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Employee } from '../../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly BaseUrl="https://localhost:44310/" ;
  listEmployees: Employee[];
  formData: Employee = new Employee();
  constructor(private http: HttpClient ,private route:Router) { }


  GetEmployeeByID(id : number ) 
  {
  return this.http.get<Employee>(this.BaseUrl+"home/EmployeeDetails/"+ id).toPromise()
  .then(res=>{
    this.formData=res as Employee;
    this.route.navigate(['/edit']);
  });
  }
 DeleteEmployeeByID(id : number ) 
  {
  return this.http.delete<Employee>(this.BaseUrl+"home/DeleteEmployee/"+ id);
  }
  CreateEmployee() {
            return this.http.post(this.BaseUrl+"home/CreateEmployee", this.formData);
  }

    UpdateEmployee() {
      return this.http.put(this.BaseUrl+"home/UpdateEmployee", this.formData);
}
    refreshList() {
      this.http.get(this.BaseUrl+"home/GetEmployees")
        .toPromise()
        .then(res =>this.listEmployees = res as Employee[]);
    }
}



