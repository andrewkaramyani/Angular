import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from '../../service/employee-service.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(public EmployeesService : EmployeeService,private route:Router) { }
  // @ViewChild('form', {static: false}) form: NgForm;

  ngOnInit(): void {
    // this.form.reset();
    this.EmployeesService.formData=new Employee();
  }


  insertRecord(form: NgForm) {
    this.EmployeesService.CreateEmployee().subscribe(
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
