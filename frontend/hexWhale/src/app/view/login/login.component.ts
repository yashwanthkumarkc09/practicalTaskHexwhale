import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roleInfo:any;
  invalidCredential:string;
  userForm:FormGroup;
  forGotPassword:FormGroup;
  updateInfo;
  constructor( private fb:FormBuilder,private loginServiceKey:LoginService,private router:Router) { 
    this.userForm = fb.group({
      'userEmail':[null,Validators.required],
      'userPassword':[null,Validators.required]
    })
    this.forGotPassword = fb.group({
      'userEmail':[null,Validators.required],
      'newPassword':[null,Validators.required]
    })
  }

  ngOnInit() {
  }

  login(){
this.loginServiceKey.login(this.userForm.value).
subscribe((res)=>{
  this.roleInfo = res;
  sessionStorage.setItem('userData', JSON.stringify(this.roleInfo.message.userInfo));
  this.invalidCredential = this.roleInfo.message;
 if(this.roleInfo.message.userInfo[0].role === `Admin`)
  this.router.navigate(['dashboard/admin'])
  else if(this.roleInfo.message.userInfo[0].role === `user`)
  this.router.navigate(['dashboard/user'])
  else   this.router.navigate([''])
})
  }

  updatePassword(){
    this.loginServiceKey.updatePasswordServiceCall(this.forGotPassword.value)
    .subscribe(res=>{
      this.updateInfo = res;
     if(this.updateInfo.message === `unAuthorized`) alert('Email is Not Registered')
     else alert('Password Updated Successfully')
    })
  }


}
