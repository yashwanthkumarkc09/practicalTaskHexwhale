import { Component, OnInit } from '@angular/core';
import { ReusableBlockService } from '../../service/reusable-block.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  categoryResp: any;
  displayCategory: any;
  subCategoryList: any;
  appitems = []
  config = {
    fontSize: `10px`,
    fontColor: `green`,
    selectedListFontColor: `green`,
  };

  constructor(private common: ReusableBlockService) { }

  ngOnInit() {
  }
  hide() {
    return this.appitems = []
  }
  getCategory(e) {
    this.appitems = []
    this.common.getCategoryServiceCall()
      .subscribe(res => {
        this.categoryResp = res;
        this.displayCategory = this.categoryResp.message;
        this.displayCategory.forEach(ele => {
          var obj = {}
          obj['label'] = ele.categoryName;
          obj['items'] = ele.subCategory;
          this.appitems.push(obj)
        });


      })
  }
  subCategory(subName) {
    this.displayCategory.forEach(ele => {
      if (ele.categoryName = subName) {
        this.subCategoryList = ele.subCategory;
      }


    });
  }
  clearSession(){
    sessionStorage.removeItem("userData");
  }
}
