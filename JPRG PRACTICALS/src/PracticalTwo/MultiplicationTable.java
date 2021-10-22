package PracticalTwo;

import java.util.Scanner;

public class MultiplicationTable {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String outputString = "";

        System.out.print("Enter the beginning value : ");
        int startValue = input.nextInt();

        System.out.print("Enter the ending value : ");
        int endValue = input.nextInt();

        for(int i = 1; i < 26; i++){
            outputString += (i + "\t");
            for(int j = startValue; j < endValue+1; j++){
                outputString += ((i*j) + "\t");
            }
            outputString += "\n";
        }

        System.out.println(outputString);
    }
}
