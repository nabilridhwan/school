package PracticalTwo;

import java.util.Scanner;

public class HighestElementModified {
    public static void main(String[] args) {
        int[] intArray = enterValues();

        System.out.print("Elements of intArray: ");

        for(int i = 0; i < intArray.length; i++){
            System.out.print(intArray[i] + " ");
        }

        System.out.println("\nHighest Element: " + findHighestValue(intArray));
    }

    private static int findHighestValue(int[] intArray){
        int largestValue = Integer.MIN_VALUE;

//        Loop through the array
        for(int i = 0; i < intArray.length; i++){
            if(intArray[i] > largestValue){
                largestValue = intArray[i];
            }
        }

        return largestValue;
    }

    private static int[] enterValues(){
        int[] intArray = new int[5];
        for(int i = 0; i < intArray.length; i++){
            System.out.print("Enter value for intArray[" + i + "] -> ");
            Scanner input = new Scanner(System.in);
            intArray[i] = input.nextInt();
        }

        return intArray;
    }
}
