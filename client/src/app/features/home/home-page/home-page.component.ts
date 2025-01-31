import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user = 'Guest';
  message: any;
  staticContent: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getStaticContent(this.user).subscribe(
      data => {
        this.message = data.message;
        this.staticContent = data.staticContent;
      },
      error => {
        console.error('Error fetching static content', error);
      }
    );
  }
}