import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../services/categories.service";
import {Category} from "../models/category";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categoyArray!:Array<any>;
  formCategory!:string;
  fromStatus:string='Add';
  categoryId!:string;

  constructor(private categoriService:CategoriesService) {
  }
  ngOnInit(): void {
    this.categoriService.loadData().subscribe(val=>{
      console.log(val)
      this.categoyArray=val;
    })
  }
  public onsubmit(formData:any):void{
    let categoryData:Category={
      category:formData.value.category
    }
    this.categoriService.addCatecorieName(categoryData)
    formData.reset();
    if(this.fromStatus=='Add'){
      this.categoriService.addCatecorieName(categoryData)
    }else if(this.fromStatus =='Edit'){
      this.categoriService.updateData(this.categoryId,categoryData);
      formData.reset();
      this.fromStatus='Add'
    }
  }
  onEdite(id:string,category:string){
    this.formCategory=category;
    this.fromStatus='edit';
    this.categoryId=id
  }
  onDelete(id:string){
    this.categoriService.deleteData(id);
  }



}
