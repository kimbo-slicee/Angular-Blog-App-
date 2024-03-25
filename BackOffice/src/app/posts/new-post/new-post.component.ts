import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../models/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/Post";


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent implements OnInit{
  permalink:string;
  imgsrc:any="../assets/imagePlaceholeder.png";
  selectedImage:any;
  categorys:any;
  postFrom:FormGroup
constructor(private categoryService:CategoriesService , private fb:FormBuilder) {
  this.postFrom=this.fb.group(
    {
      title:['',Validators.required, Validators.minLength(10)],
      permalink:['',Validators.required],
      excerpt:['',[Validators.required , Validators.minLength(50)]],
      category:['',Validators.required],
      postImg:['',Validators.required],
      content:['',Validators.required]
    }


  )
}

  ngOnInit(): void {
  this.categoryService.loadData().subscribe(res=>{
    this.categorys=res;
  })
  }
  onTitleChanged($event:any){
  const title=$event.target.value;
  this.permalink=title.replace(/\s/g,'-');
  }
  showPreview($event){
  const reader=new FileReader();
  reader.onload=(e=>{
    this.imgsrc=e.target.result
  })
    reader.readAsDataURL($event.target.file[0])
    this.selectedImage=$event.target.files[0]
  }
  onSubmit(){
    console.log(this.postFrom.value)
    const postDate:Post={
      title:this.postFrom.value.title,
      permaLink:this.postFrom.value.permaLink,
      category:{
        categoryId:'',
        category:''
      },
      postImgPath:'',
      excerpt:this.postFrom.value.excerpt,
      content:this.postFrom.value.content,
      isFeatured:false,
      views:0,
      status:'new',
      createAt:new Date()
    }
  }


}
