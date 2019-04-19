import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsData: any;

  constructor(
    private mainService: MainServiceService
  ) { }

  ngOnInit() {
    this.mainService.getData()
      .subscribe(res => {
        console.log(res);
        this.newsData = res;
      })

  }

}
