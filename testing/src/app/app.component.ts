import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  percentages: string[] = [];

  ngOnInit() {
    for(let i = 1; i < 100; i++) {
      let prefix: string = '.';
      if(i < 10) { prefix += '0';}
      this.percentages.push(prefix + i);
    }
    this.percentages.push('1');
  }
}
