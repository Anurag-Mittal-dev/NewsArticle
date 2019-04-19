import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../service/main-service.service';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsData: any;
  allArticles: any;
  p: number = 1;
  articleDate: Array<any> = [];
  publisher: Array<String> = [];
  category: Array<String> = [];

  // sort by date
  propertyName = 'TIMESTAMP';
  reverse = true;

  constructor(
    private mainService: MainServiceService
  ) { }

  ngOnInit() {
    // get news article data from service
    this.mainService.getData()
      .subscribe(res => {
        console.log(res);
        this.newsData = res;
        this.allArticles = res;

        // this.publisher = this.newsData.filter(e => {
        //   return e.PUBLISHER;
        // })

        // console.log(this.publisher);
      })

  }

  // function to toggle like and unline of article
  articleLiked(articleTitle) {
    for (var i = 0; i <= this.newsData.length; i++) {
      if (articleTitle == this.newsData[i]['TITLE']) {
        if (this.newsData[i]['like'] == undefined || this.newsData[i]['like'] == false) {
          this.newsData[i]['like'] = true;
        }
        else
          this.newsData[i]['like'] = false;
        console.log(this.newsData[i]);

      }
    }
  }

  getLikedArticles() {
    this.newsData = this.newsData.filter(e => {
      return e.like == true;
    })
  }

  home() {
    this.newsData = this.allArticles;
  }

  sortBy(propertyName) {
    this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    this.propertyName = propertyName;
  };
}
