package PracticalTwo;


import java.sql.Array;
import java.util.Scanner;

public class TimeCalculator {
    public static void main(String[] args) {

        int seconds = enterSeconds();
        int[] calculatedTime = calculateTime(seconds);

        printResults(seconds, calculatedTime[0], calculatedTime[1], calculatedTime[2]);
    }

    private static int enterSeconds(){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the total seconds: ");
        return input.nextInt();
    }

    private static int[] calculateTime(int sec){
        int hours = sec / 3600;
        int minutes = (sec - (3600 * hours)) / 60;
        int seconds = sec - (60 * minutes) - (3600 * hours);

        int[] returnValue = new int[3];

        returnValue[0] = hours;
        returnValue[1] = minutes;
        returnValue[2] = seconds;

        return returnValue;
    }

    private static void printResults(int initalSeconds, int hours, int minutes, int seconds){
        System.out.println("\tTime Converter");
        System.out.println("Total Seconds:\t" + initalSeconds);
        System.out.println("Hours:\t" + hours);
        System.out.println("Minutes:\t" + minutes);
        System.out.println("Seconds:\t" + seconds);
    }


}
