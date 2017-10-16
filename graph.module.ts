import { NgModule } from '@angular/core';
import { GraphDonutComponent } from "./graph-donut/graph-donut";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    GraphDonutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GraphDonutComponent
  ]
})
export class GraphModule{ }
