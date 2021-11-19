import java.util.Scanner;

public class Scrapbook {
    public static void main(String[] args) {
        Circle c1 = new Circle(2.0);

        System.out.println(c1.getRadius());

//        Does not work! because radius is private
//        System.out.println(c1.radius);
    }
}
