import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private authService: AuthenticationService, private router: Router) { }

  // Submit event sent feedback
  sendFeedback()
  {
    // Check if user is not authenticated yet, redirect to login page


    this.authService.isAuth.subscribe(auth => {
      if(!auth) {
        let msg: string = "Bạn chưa đăng nhập, vui lòng đăng nhập để gửi phản ánh";
        this.router.navigateByUrl(`/login?msg=${msg}`)
      } else {
        this.postFeedback();
      }
    })
  }

  // Execute send request data to server
  postFeedback() {
    timer(3000).subscribe(() => alert("Sent"))
  }
}
