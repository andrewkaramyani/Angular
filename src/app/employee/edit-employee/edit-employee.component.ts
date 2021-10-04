import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../service/employee-service.service';
import { Employee } from 'src/Models/Employee';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(public EmployeesService : EmployeeService,private route:Router) { }

  ngOnInit(): void {
  }
  UpdateRecord(form: NgForm) {
    this.EmployeesService.UpdateEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.EmployeesService.refreshList();
        this.route.navigate(['/list']);
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.EmployeesService.formData = new Employee();
  }
}
