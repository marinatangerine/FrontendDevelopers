import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { ReproducerComponent } from './components/reproducer/reproducer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongDetailComponent,
    ReproducerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
