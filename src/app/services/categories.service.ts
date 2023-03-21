import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../models/category';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}
  saveData(data: Category) {
    this.afs
      .collection('categories')
      .add(data)
      .then((docRef) => {
        console.log(docRef);
        this.toastr.success('Data Inserted Successfully ..!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  loadData() {
    return this.afs
      .collection('categories')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }
  updateData(id: string, EditData: Category) {
    this.afs
      .doc(`categories/${id}`)
      .update(EditData)
      .then((docRef) => {
        this.toastr.success('Data Updated Successfully ..!');
      });
  }
  deleteData(id:string){
    this.afs.doc(`categories/${id}`).delete().then(docRef =>{
      this.toastr.success('Data Deleted Successfully ..!');

    })
  }
}
