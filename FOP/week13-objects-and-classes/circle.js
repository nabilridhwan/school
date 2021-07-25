class Circle{
    constructor(radius){
        this.radius = radius;
    }

    getArea(){
        return Math.PI * (radius ** 2)
    }
}

var c1 = new Circle(76)