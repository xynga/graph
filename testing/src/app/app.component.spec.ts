import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GraphDonutComponent } from 'xynga-graph';
describe('Graph-Donut', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GraphDonutComponent
      ],
    }).compileComponents();
  }));
  it(`should have the correct percentage as a whole number`, async(() => {
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;
    myComponent.percentage = .65;
    fixture.detectChanges();
    expect(myComponent.numPercent).toEqual(65);
  }));
  it(`should have a RED color when less than or equal to 50%`, async( () => {
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;
    myComponent.percentage = .50;
    fixture.detectChanges();
    expect(myComponent.color).toEqual('red');

  }));
  it(`should have a YELLOW color when greater than 50% and less than or equal to 75%`, async( () => {
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;


    myComponent.percentage = .74;
    fixture.detectChanges();
    expect(myComponent.color).toEqual('yellow');

  }));
  it(`should have a GREEN color when greater than 75%`, async( () => {
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;


    myComponent.percentage = .96;
    fixture.detectChanges();
    expect(myComponent.color).toEqual('green');

  }));
  it(`should have the sideFlag set correctly to 0 if less than 50%`, async ( () => {
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;

    myComponent.percentage = .14;
    fixture.detectChanges();
    expect(myComponent.sideFlag).toEqual(0);
  }));
  it(`should have the sideFlag set correctly to 1 if greater than 50%`, async ( () => {
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;

    myComponent.percentage = .76;
    fixture.detectChanges();
    expect(myComponent.sideFlag).toEqual(1);
  }));
  it(`should have coords in the top right quadrent if less than 25%`, async ( () =>{
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;

    myComponent.percentage = .14;
    fixture.detectChanges();
    expect(myComponent.coords[0]).toBeGreaterThan(0);
    expect(myComponent.coords[1]).toBeLessThan(50);
  }));
  it(`should have coords in the bottom right quadrent if greater than 25% and less than 50%`, async ( () =>{
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;

    myComponent.percentage = .35;
    fixture.detectChanges();
    expect(myComponent.coords[0]).toBeGreaterThan(0);
    expect(myComponent.coords[1]).toBeGreaterThan(50);
  }));
  it(`should have coords in the bottom left quadrent if greater than 50% and less than 75%`, async ( () =>{
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;

    myComponent.percentage = .65;
    fixture.detectChanges();
    expect(myComponent.coords[0]).toBeLessThan(0);
    expect(myComponent.coords[1]).toBeGreaterThan(50);
  }));
  it(`should have coords in the top left quadrent if greater than 75% and less than 100%`, async ( () =>{
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;

    myComponent.percentage = .85;
    fixture.detectChanges();
    expect(myComponent.coords[0]).toBeLessThan(0);
    expect(myComponent.coords[1]).toBeLessThan(50);
  }));
  it(`should display a circle with no ring and 0%` async ( () => {
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;

    myComponent.percentage = 0;
    fixture.detectChanges();
    expect(myComponent.numPercent).toEqual(0);
  }));
  it(`should display a full green ring when the graph is at 100%` async ( () => {
    const fixture = TestBed.createComponent(GraphDonutComponent);
    const myComponent = fixture.debugElement.componentInstance;

    myComponent.percentage = 1;
    fixture.detectChanges();
    expect(myComponent.color).toEqual('green');
    expect(myComponent.numPercent).toEqual(100);
  }));
});
