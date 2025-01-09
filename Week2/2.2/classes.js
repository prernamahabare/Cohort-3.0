class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        console.log(area);  
    }

    paint(){
        console.log(`the color will be ${this.color}`);
    }
}

let rect = new Rectangle(3, 5, "red");
rect.area();
rect.paint();