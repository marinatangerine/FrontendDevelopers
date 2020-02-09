import { Component } from '@angular/core';
//para fire base
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebMusicApp';
  
 //constructor para firebase
  songs: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.songs = db.collection('songs').valueChanges();
  }
}
