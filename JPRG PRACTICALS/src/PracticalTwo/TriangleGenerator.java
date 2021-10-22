package PracticalTwo;

import java.util.Scanner;

public class TriangleGenerator {


    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Please enter the peak number: ");
        int trianglePeak = input.nextInt();

        System.out.print("Please enter the character: ");
        char character = input.next().charAt(0);

        if(trianglePeak < 1 || trianglePeak > 10){
            trianglePeak = 3;
        }

//      TODO: Think of invalid characters and replace them with asterisk
        for(int i = 0; i < trianglePeak+1; i++){

            String tempStringTwo = "";

            for(int k = 0; k < i; k++){
                tempStringTwo += character;
            }

            System.out.println(tempStringTwo);

        }

//        For the bottom half of the triangle
        for(int j = trianglePeak-1; j > 0; j--){

            String tempStringTwo = "";

            for(int k = 0; k < j; k++){
                tempStringTwo += character;
            }
            System.out.println(tempStringTwo);
        }

    }

}
