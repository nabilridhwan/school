package PracticalThree;

public class TrapeziumUser {
    public static void main(String[] args) {
        Trapezium t = new Trapezium(6, 5, 4);
        float tArea = t.calculateArea();

        System.out.printf("This trapezium has base value %.1f%n", t.getBase());
        System.out.printf("This trapezium has top value %.1f%n", t.getTop());
        System.out.printf("This trapezium has height value %.1f%n", t.getHeight());

        System.out.printf("The area of the trapezium is %.1f%n", tArea);

        System.out.println("Trapezium class program terminated");
    }
}
