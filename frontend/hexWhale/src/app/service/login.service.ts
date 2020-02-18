import { Injectable } from '@angular/core';
import {HttpModelService} from './http-model.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService:HttpModelService) { }

  login(data:any){
    const request = {
      'params':data,
      'method':'get',
      'path':'/api/login/userLogin'
    }
    return this.httpService.httpCaller(request);
  }

  updatePasswordServiceCall(userInfo){

    const request = {
      'params':userInfo,
      'method':'put',
      'path':'/api/login/updatePassword'
    }
    return this.httpService.httpCaller(request);
  }

  updateUserInfo(userData){
    const request = {
      'params':userData,
      'method':'put',
      'path':'/api/login/updateUserInfo'
    }
    return this.httpService.httpCaller(request);
  

  }
}
