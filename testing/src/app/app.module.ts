import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GraphModule} from 'xynga-graph';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
