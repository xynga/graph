import { OnInit } from '@angular/core';
export declare class GraphDonutComponent implements OnInit {
    percentage: number;
    numPercent: number;
    sideFlag: number;
    coords: number[];
    outerRadius: number;
    color: string;
    findArcAngle(): number;
    findColor(): void;
    findRelativeCoordinates(): void;
    ngOnInit(): void;
}
