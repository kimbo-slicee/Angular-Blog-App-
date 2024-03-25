import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ToastrService} from "ngx-toastr";
import {activate} from "@angular/fire/remote-config";
import {map} from "rxjs";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs:AngularFirestore ,private toaster:ToastrService) { }
  addCatecorieName(data:any){
    this.afs.collection('categories').add(data).then(
      (docRef)=>this.toaster.success("wa Hassan","Hello world !")
    ).catch(err=>console.log(err))
  }
  loadData(){
    return  this.afs.collection('categories').snapshotChanges().pipe(
      map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data();
        const id=a.payload.doc.id;
        return {id,data}

      })
      })
    )
  }
  /*Update Methode */
  updateData(id:string,editData:Category ){
  this.afs.collection('categories').doc(id).update(editData).then(ref=>
  {
    this.toaster.success(`${editData} Has Updated Successfully`)
  }).catch(err=>this.toaster.error(` error message ${err}`))
  }
  deleteData(id:string){
    this.afs.collection('categories').doc(id).delete().then(e=>this.toaster.error("category deleted ","Delete"));
  }


}
