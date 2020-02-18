import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInformation: any;
  updateInfo: any;
  userInfo = {
    'name': '',
    'email': '',
    'mobile': '',
    'city': ''
  }

  constructor(private loginServiceKey: LoginService) { }

  ngOnInit() {
    this.userInformation = JSON.parse(sessionStorage.getItem('userData'));
    this.userInfo = this.userInformation[0]
  }

  updateUserInfo(userInfo) {
    this.loginServiceKey.updateUserInfo(userInfo)
      .subscribe(res => {
        this.updateInfo = res;
        sessionStorage.setItem('userData', JSON.stringify(this.updateInfo.message));
        alert(`Information Updated Successfully`)

      })

  }

}
