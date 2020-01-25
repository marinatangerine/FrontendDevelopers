import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../song';

@Component({
  selector: 'app-track-song',
  templateUrl: './track-song.component.html',
  styleUrls: ['./track-song.component.css']
})
export class TrackSongComponent implements OnInit {
  
  @Input() song:Song;
  @Input() audio:HTMLAudioElement;
  resetTrack = true;

  constructor() { }

  ngOnInit() {
    console.log(`audio: ${this.audio.currentTime}`)
  }

  trackbarDuration(time){
      let played = this.audio.currentTime,
      percent = played * 100 / this.audio.duration;
      if(time != undefined) {
        this.resetTrack = true;
        return time;
      }else{
        this.resetTrack = false;
        return percent;
      }
  }
}
