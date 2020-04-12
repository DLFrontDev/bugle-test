import { Component } from '@angular/core';
import { Course } from '../../data/course'
import { SlideshowComponent } from '../slideshow/slideshow.component'
import { TraineesComponent } from '../trainees/trainees.component'

@Component({
  selector: 'course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.css']
})

export class CourseMaterialComponent {
  course = Course
  slideshow = SlideshowComponent
  trainees = TraineesComponent
}
