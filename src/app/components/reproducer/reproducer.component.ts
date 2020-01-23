import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../song';

@Component({
  selector: 'app-reproducer',
  templateUrl: './reproducer.component.html',
  styleUrls: ['./reproducer.component.css']
})
export class ReproducerComponent implements OnInit {
  
  @Input() song: Song;
  audio: HTMLAudioElement;
  interval: NodeJS.Timer;
  
  constructor() { }

  ngOnInit() {
    this.audio = new Audio();
  }

  ngOnChanges() {
    this.audio.src = this.song.audio_url;
  }

  onPlay() {
    this.audio.play();
    this.interval = setInterval(function () { this.audio.play() }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
    this.audio.pause();
  }

  onStop() {
    clearInterval(this.interval);
    this.audio.src = this.song.audio_url;
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
