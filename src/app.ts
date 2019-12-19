import { Point } from "./models/point.model";
import fs from "fs";

const greeting: string = 'Hello World!!';
const numbers: number[] = [1, 2, 3];

const point1 = new Point(2, 4);
console.log(point1.toCoordinates());