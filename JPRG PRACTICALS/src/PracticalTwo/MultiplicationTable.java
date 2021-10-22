package PracticalTwo;

import java.util.Scanner;

public class MultiplicationTable {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        StringBuilder outputString = new StringBuilder();

        System.out.print("Enter the beginning value : ");
        int startValue = input.nextInt();

        System.out.print("Enter the ending value : ");
        int endValue = input.nextInt();

        for(int i = 0; i < 25; i++){
//            outputString.append(i + 1).append("\t");
            for(int j = startValue; j < endValue+1; j++){
                outputString.append((i + 1) * j).append("\t");
            }
            outputString.append("\n");
        }

        System.out.println(outputString.toString());
    }
}
