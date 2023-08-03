class Point {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
}

const pt = new Point();
pt.x = 5;
pt.y = 0;

console.log(pt);
