import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { CourseMaterialComponent } from '../course-material/course-material.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { TraineesComponent } from '../trainees/trainees.component';
import { TraineeDetailsComponent } from '../trainee-details/trainee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SidebarComponent,
    CourseMaterialComponent,
    SlideshowComponent,
    TraineesComponent,
    TraineeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
