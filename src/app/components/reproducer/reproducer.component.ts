import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Song } from '../../song';
import { TrackSongComponent } from "../track-song/track-song.component";

@Component({
  selector: 'app-reproducer',
  templateUrl: './reproducer.component.html',
  styleUrls: ['./reproducer.component.css']
})
export class ReproducerComponent implements OnInit {

  @ViewChild(TrackSongComponent, {static: false}) tracksong:TrackSongComponent ;
  
  @Input() song: Song;

  audio: HTMLAudioElement;
  interval: NodeJS.Timer;

  currentAudio = this.audio;
  stop = true;
  
  
  constructor() { }

  ngOnInit() {
    this.audio = new Audio();
    durationTrackbar: this.audio.duration;
  }

  

  ngOnChanges() {
    this.audio.src = this.song.audio_url;
    this.onPlay();
  }

  onPlay() {
    this.audio.play();
    this.interval = setInterval(function () { this.audio.play() }, 1000);
    this.stop = false;
  }

  playSong (){
    this.onPlay();
  }

  onPause() {
    clearInterval(this.interval);
    this.audio.pause();
    this.stop = true;
  }

  onStop() {
    clearInterval(this.interval);
    this.audio.src = this.song.audio_url;
    this.tracksong.trackbarDuration(0);
    this.stop = true;
  }

  toHumanTime(length) {
    var minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_int < 10 ? seconds_str.substr(0, 1) : seconds_str.substr(0, 2),
      time = (minutes < 10 ? "0" + minutes : minutes) + ':' + (seconds_int < 10 ? "0" + seconds : seconds)
    return time;
  }
  
}
