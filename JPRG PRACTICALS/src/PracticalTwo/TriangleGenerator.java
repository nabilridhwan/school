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

            StringBuilder topTriangle = new StringBuilder();

            for(int k = 0; k < i; k++){
                topTriangle.append(character);
            }

            System.out.println(topTriangle);

        }

//        For the bottom half of the triangle
        for(int j = trianglePeak-1; j > 0; j--){

            StringBuilder bottomTriangle = new StringBuilder();

            for(int k = 0; k < j; k++){
                bottomTriangle.append(character);
            }
            System.out.println(bottomTriangle);
        }

    }

}
