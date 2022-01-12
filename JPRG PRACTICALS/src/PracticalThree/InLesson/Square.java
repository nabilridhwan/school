package PracticalThree.InLesson;

public class Square implements ShapeInterface{
    private double length;

    public Square(double length){
        this.length = length;
    }

    public double calculateArea(){
        System.out.println("The area of the square is: " + length * length);
        return length * length;
    }

    public void computePerimeter(){
        System.out.println("The perimeter of the square is: " + length * 4);
    }
}
