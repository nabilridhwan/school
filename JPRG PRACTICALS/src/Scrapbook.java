import java.util.Scanner;

public class Scrapbook {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a string without space: ");
        String inputString = input.next();

//        If you enter with a space, then it will only capture the first word before the first space.
//        this is awesome -> this
//        test 1 2 3 -> test
        System.out.println("You have entered: " + inputString);
    }
}
