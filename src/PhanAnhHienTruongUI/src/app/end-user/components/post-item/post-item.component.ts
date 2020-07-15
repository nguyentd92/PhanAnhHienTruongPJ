import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.sass']
})
export class PostItemComponent implements OnInit {
  isLandscape = false;
  
  ngOnInit(): void {
  }
}
