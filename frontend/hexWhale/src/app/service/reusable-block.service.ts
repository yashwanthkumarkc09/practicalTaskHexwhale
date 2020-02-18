import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpModelService} from './http-model.service';

@Injectable({
  providedIn: 'root'
})
export class ReusableBlockService {

  constructor(private httpService:HttpModelService,private http:HttpClient) { }

  


  login(data:any){
    const request = {
      'params':data,
      'method':'get',
      'path':'/api/login/userLogin'
    }
    return this.httpService.httpCaller(request);
    
  }

  request(data:any){
    const request = {
      'params':data,
      'method':'post',
      'path':'/api/login/pilotRequest'
    }
    return this.httpService.httpCaller(request);

  }

  getCategoryServiceCall(){
    const request = {
      'params':{},
      'method':'get',
      'path':'/api/login/getCategoryServiceCall'
    }
    return this.httpService.httpCaller(request);

  }
  deleteCategoryServiceCall(deleteReq:any){
    console.log(deleteReq)
    const request = {
      'params':deleteReq,
      'method':'post',
      'path':'/api/login/deleteCategory'
    }
    return this.httpService.httpCaller(request);
  }
  addCategoryServiceCall(data:any){
    const request = {
      'params':data,
      'method':'post',
      'path':'/api/login/addCategoryServiceCall'
    }
    return this.httpService.httpCaller(request);
  }

  getRegisteredUserServiceCall(){

    const request = {
      'params':{},
      'method':'get',
      'path':'/api/login/getRegisteredUserServiceCall'
    }
    return this.httpService.httpCaller(request);

  }
  disableUserLogin(name,disable){
    let obj = {
      name:name,
      disable:disable
    }
    const request = {
      'params':obj,
      'method':'put',
      'path':'/api/login/disableUserLogin'
    }
    return this.httpService.httpCaller(request);
  }

  editeServiceCall(editedData){

    const request = {
      'params':editedData,
      'method':'put',
      'path':'/api/login/editCall'
    }
    return this.httpService.httpCaller(request);

  }

  register(registerData){

    const request = {
      'params':registerData,
      'method':'post',
      'path':'/api/login/registerData'
    }
    return this.httpService.httpCaller(request);

  }
}
