import { NgModule } from '@angular/core';
import { GraphDonutComponent } from "./graph-donut/graph-donut";
import { CommonModule } from "@angular/common";
var GraphModule = (function () {
    function GraphModule() {
    }
    GraphModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        GraphDonutComponent
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        GraphDonutComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    GraphModule.ctorParameters = function () { return []; };
    return GraphModule;
}());
export { GraphModule };
//# sourceMappingURL=graph.module.js.map