import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../song';

@Component({
  selector: 'app-reproducer',
  templateUrl: './reproducer.component.html',
  styleUrls: ['./reproducer.component.css']
})
export class ReproducerComponent implements OnInit {
  
  @Input() song: Song;
  
  constructor() { }

  ngOnInit() {
  }

}
