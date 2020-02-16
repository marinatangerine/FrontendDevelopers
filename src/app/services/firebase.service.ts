import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(public db: AngularFirestore) {}

  getSongs(){
    return this.db.collection('/songs').valueChanges()
  }

  searchSongs(searchValue){
    ///return this.db.collection('/songs',ref => ref.where('title', '>=', searchValue).snapshotChanges()
    return this.db.collection('/songs',ref => ref.where('title', 'array-contains', searchValue))
  }
}