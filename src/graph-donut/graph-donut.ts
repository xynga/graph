//const CountUp = require('countUp.js');

import {Component, Input, OnInit} from '@angular/core';


const SELECTOR: string = 'graph-donut';



@Component({
  selector: SELECTOR,
  templateUrl: './graph-donut.html',
})
export class GraphDonutComponent implements OnInit{
  @Input() percentage: number;

  numPercent: number;

  sideFlag: number;

  coords: number[] = [0,0];
  outerRadius = 50;

  color: string = "red";

  findArcAngle(): number{
    return 360 * this.percentage;
  }

  findColor(){
    if (this.percentage > .75){
      this.color = "green";
    }else if(this.percentage > .50){
     this.color = "yellow";
    }else{
      this.color = "red";
    }
  }

  findRelativeCoordinates(){

    const alpha = this.findArcAngle();
    this.findColor();


    if(this.percentage <= .25){
      this.coords[0] = this.outerRadius * Math.cos((90 - alpha)*Math.PI/180);
      this.coords[1] = 50 - (this.outerRadius * Math.sin((90 - alpha)*Math.PI/180));
      this.sideFlag = 0;
    }else if(this.percentage <= .5){
      this.coords[0] = this.outerRadius * Math.cos((alpha - 90)*Math.PI/180);
      this.coords[1] = 50 + (this.outerRadius * Math.sin((alpha - 90)*Math.PI/180));
      this.sideFlag = 0;
    }else if(this.percentage <= .75){
      this.coords[0] = -this.outerRadius * Math.cos((270 - alpha)*Math.PI/180);
      this.coords[1] = 50 + (this.outerRadius * Math.sin((270 - alpha)*Math.PI/180));
      this.sideFlag = 1;
    }else{
      this.coords[0] = -this.outerRadius * Math.cos((alpha - 270)*Math.PI/180);
      this.coords[1] = 50 - (this.outerRadius * Math.sin((alpha - 270)*Math.PI/180));
      this.sideFlag = 1;
    }

  }

  ngOnInit(){
    this.numPercent = Math.round(this.percentage * 100);
    this.findRelativeCoordinates();
  }



}
