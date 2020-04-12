import { Component, Input } from '@angular/core';
import { TraineeDetailsComponent } from '../trainee-details/trainee-details.component';
import { Trainee } from '../../interfaces/index'

@Component({
  selector: 'trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.css']
})

export class TraineesComponent {
  _trainees = [];
  isExpanded = false;
  attended = 0;
  absent = 0;
  passed = 0;
  failed = 0;

  // Data input, sort slides according to sort values
  @Input()
  set trainees(trainees: Array<Trainee>) {
    this._trainees = trainees
    this.attended = trainees.filter(trainee => trainee.attended).length
    this.absent = trainees.filter(trainee => !trainee.attended).length
    this.passed = trainees.filter(trainee => trainee.attended && trainee.passed).length
    this.failed = trainees.filter(trainee => trainee.attended && !trainee.passed).length
  }

  get trainees(): Array<Trainee> { return this._trainees }



  expandList() {
    this.isExpanded = true;
  }
}
