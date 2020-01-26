import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NewdataService {
  constructor(private http: HttpClient){

  }
  getAllSongs() {
    const url_song = "http://localhost:4200/app";
    return this.http.get(url_song);
  } 
}
