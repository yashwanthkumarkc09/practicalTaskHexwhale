import { Component, OnInit } from '@angular/core';
import { ReusableBlockService } from 'src/app/service/reusable-block.service';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  categoryData:any;
  registeredUser:any;
  searchGlobal:any;
  categoryForm:FormGroup;
  // subCategory:[]
  subCategory: any [] = []
  update={
    'categoryType':'',
    'categoryName':'',
    'subCategory':''
  }
 
  constructor(private common:ReusableBlockService,private fb:FormBuilder) { 

    this.categoryForm = fb.group({
      'categoryName':[null,Validators.required],
      'categoryType':[null,Validators.required],
      'subCategory':[null,Validators.required]
    })

  }

  ngOnInit() {
    this.getCategory();
    this.getRegisteredUser();
   
    
  }
  

  getCategory(){
    this.common.getCategoryServiceCall()
    .subscribe(res=>{
      console.log(res)
    this.categoryData = res;
    })
  }
  getRegisteredUser(){
    this.common.getRegisteredUserServiceCall()
    .subscribe((result)=>{
      this.registeredUser = result;
      console.log(this.registeredUser)
    })
  }
  disableUser(event,name){
      this.common.disableUserLogin(name,event.target.checked)
      .subscribe((res)=>{
      })
  }
  addCategory(){
    var obj={}  
    obj['label'] =  this.categoryForm.value.subCategory;
   this.subCategory.push(obj)
this.categoryForm.value.subCategory = this.subCategory;
    this.common.addCategoryServiceCall(this.categoryForm.value)
    .subscribe((res)=>{
      this.getCategory();
      this.categoryForm.reset()
    })
  }

  deleteCategory(deleteReq){
    this.common.deleteCategoryServiceCall(deleteReq)
    .subscribe((res)=>{
      this.getCategory();
      this.getRegisteredUser();
    })
  }
  editCategory(edit){
    console.log(edit.subCategory[0].label)
    this.update = edit;
    this.update.subCategory = edit.subCategory[0].label;
    document.getElementById('editdata').click()
  }
  editCategoryData(editedData){
    var obj={}  
    obj['label'] = editedData.subCategory
   this.subCategory.push(obj)
  editedData.subCategory =  this.subCategory
    this.common.editeServiceCall(editedData)
    .subscribe(res=>{
      console.log(res)
    })
  }
  
  multiselect(selected){
this.searchGlobal = selected.value;
  }

}
