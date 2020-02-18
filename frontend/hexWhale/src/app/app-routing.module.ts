import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { DashBoardComponent } from './view/dash-board/dash-board.component';
import { AdminComponent } from './view/admin/admin.component';
import { RegisterComponent } from './view/register/register.component';
import { UserComponent } from './view/user/user.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:DashBoardComponent,
          children: [
          { path: 'admin', component: AdminComponent },
          {path:'user',component:UserComponent}
  
        ]
      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
