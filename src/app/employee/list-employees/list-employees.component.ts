import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../../Models/Employee';
import { EmployeeService } from '../../service/employee-service.service';



@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employee: Employee ;
  constructor(public EmployeesService : EmployeeService,private route:Router) 
  {
    this.EmployeesService.refreshList();
  }

  ngOnInit(): void {
  }
getEmployee(id:number):void
{
  this.EmployeesService.GetEmployeeByID(id);
  // this.route.navigate(['/edit']);
}
DeleteEmployee(id:number):void
{
  this.EmployeesService.DeleteEmployeeByID(id).subscribe(res=>{this.EmployeesService.refreshList()});
}
}
