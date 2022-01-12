package PracticalThree.InLesson;

public class Triangle extends Shape{
    double base;
    double height;

    public Triangle(){
        this(0,0);
    }

    public Triangle(double base, double height) {
       this.base = base;
       this.height = height;
    }
    public double calculateArea() {
        return 0.5 * base * height;
    }
}
