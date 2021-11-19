public class Circle{
    private double radius;

    public Circle(double innerRadius){
        radius = innerRadius;
    }

    public Circle(){
        this(1.0);
    }

    public double getRadius() {
        return radius;
    }

    public double getArea(){
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        Circle c = new Circle();
        System.out.println(c.getArea());
    }
}