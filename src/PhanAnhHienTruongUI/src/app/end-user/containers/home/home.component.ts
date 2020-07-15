import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  isColumn: boolean = false;
  isFilterExpand: boolean = false

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {}

  submitPost()
  {
    this.feedbackService.sendFeedback();
  }
}
