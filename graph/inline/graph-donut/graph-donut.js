//const CountUp = require('countUp.js');
import { Component, Input } from '@angular/core';
var SELECTOR = 'graph-donut';
var GraphDonutComponent = (function () {
    function GraphDonutComponent() {
        this.coords = [0, 0];
        this.outerRadius = 50;
        this.color = "red";
    }
    GraphDonutComponent.prototype.findArcAngle = function () {
        return 360 * this.percentage;
    };
    GraphDonutComponent.prototype.findColor = function () {
        if (this.percentage > .75) {
            this.color = "green";
        }
        else if (this.percentage > .50) {
            this.color = "yellow";
        }
        else {
            this.color = "red";
        }
    };
    GraphDonutComponent.prototype.findRelativeCoordinates = function () {
        var alpha = this.findArcAngle();
        this.findColor();
        if (this.percentage <= .25) {
            this.coords[0] = this.outerRadius * Math.cos((90 - alpha) * Math.PI / 180);
            this.coords[1] = 50 - (this.outerRadius * Math.sin((90 - alpha) * Math.PI / 180));
            this.sideFlag = 0;
        }
        else if (this.percentage <= .5) {
            this.coords[0] = this.outerRadius * Math.cos((alpha - 90) * Math.PI / 180);
            this.coords[1] = 50 + (this.outerRadius * Math.sin((alpha - 90) * Math.PI / 180));
            this.sideFlag = 0;
        }
        else if (this.percentage <= .75) {
            this.coords[0] = -this.outerRadius * Math.cos((270 - alpha) * Math.PI / 180);
            this.coords[1] = 50 + (this.outerRadius * Math.sin((270 - alpha) * Math.PI / 180));
            this.sideFlag = 1;
        }
        else {
            this.coords[0] = -this.outerRadius * Math.cos((alpha - 270) * Math.PI / 180);
            this.coords[1] = 50 - (this.outerRadius * Math.sin((alpha - 270) * Math.PI / 180));
            this.sideFlag = 1;
        }
    };
    GraphDonutComponent.prototype.ngOnInit = function () {
        this.numPercent = Math.round(this.percentage * 100);
        this.findRelativeCoordinates();
    };
    GraphDonutComponent.decorators = [
        { type: Component, args: [{
                    selector: SELECTOR,
                    template: "\n    <svg width=\"120\" height=\"120\" >\n\n      <defs>\n        <mask id=\"circleMask\" x=\"0\" y=\"0\" width=\"120\" height=\"120\">\n          <circle cx=\"60\" cy=\"60\" [attr.r]=\"outerRadius\" style=\"fill:#ffffff;\" />\n          <circle cx=\"60\" cy=\"60\" [attr.r]=\"outerRadius - 10\" style=\"fill:#000000;\" />\n        </mask>\n      </defs>\n\n\n      <circle cx=\"60\" cy=\"60\" [attr.r]=\"outerRadius - 5\" style=\"fill:#DDDDDD;\"></circle>\n      <path *ngIf=\"percentage < 1\" id=\"Ring\" [attr.d]=\"'M 60 60 l 0 -'+ outerRadius +' a ' + outerRadius + ' ' + outerRadius +  ' 0 '+ sideFlag +' 1 ' + coords[0] + ' ' + coords[1] + ' z'\"\n            [attr.fill]=\"color\" style=\"mask: url(#circleMask);\"/>\n      <circle *ngIf=\"percentage >= 1\" cx=\"60\" cy=\"60\" [attr.r]=\"outerRadius\" [attr.fill]=\"color\" style=\"mask: url(#circleMask);\"/>\n      <text x=\"60\" y=\"63\" text-anchor=\"middle\" alignment-baseline=\"middle\" style=\"font-family: Arial; font-size: 180%\">{{numPercent}}%</text>\n\n    </svg>\n  ",
                },] },
    ];
    /** @nocollapse */
    GraphDonutComponent.ctorParameters = function () { return []; };
    GraphDonutComponent.propDecorators = {
        'percentage': [{ type: Input },],
    };
    return GraphDonutComponent;
}());
export { GraphDonutComponent };
//# sourceMappingURL=graph-donut.js.map