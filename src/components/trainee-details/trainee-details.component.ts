import { Component, Input } from '@angular/core';
import { Trainee } from '../../interfaces/index'

@Component({
  selector: 'trainee-details',
  templateUrl: './trainee-details.component.html',
  styleUrls: ['./trainee-details.component.css']
})

export class TraineeDetailsComponent {
  @Input() trainee: Trainee;
}
