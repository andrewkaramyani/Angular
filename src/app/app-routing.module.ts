import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';


const routes: Routes = [
  {path:"", redirectTo: "/list", pathMatch:'full'},
 {path:"list" , component : ListEmployeesComponent},
 {path:"edit" , component : EditEmployeeComponent },
 {path:"create", component : CreateEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
