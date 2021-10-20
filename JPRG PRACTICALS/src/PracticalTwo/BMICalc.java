package PracticalTwo;

import java.util.Scanner;

public class BMICalc {
    public static void main(String[] args) {
//        Ask the user
        Scanner input = new Scanner(System.in);

        System.out.print("Enter your option\n1) Metric Imperial\n2) Imperial\n>> ");
        int choice = input.nextInt();

        int weight;
        double height;
        double bmi = -1;

        if(choice == 1){
            System.out.println("Enter your weight in kilograms : ");
            weight = input.nextInt();
            System.out.println("Enter your weight in metres : ");
            height = input.nextDouble();

            bmi = weight/(height*height);
            statementBmi(bmi);

        }else if(choice == 2){
            System.out.println("Enter your weight in pounds : ");
            weight = input.nextInt();
            System.out.println("Enter your weight in inches : ");
            height = input.nextDouble();

            bmi = (weight * 703)/(height*height);
            statementBmi(bmi);
        }else{
//            Prompt to enter a valid number
            System.out.println("Please enter a valid choice");
        }



    }

    private static void statementBmi(double bmi){
        //        Check for BMI
        if(bmi < 18.5){
            System.out.println("Your BMI is " + bmi + " and you are underweight");
        }else if(bmi >= 18.5 && bmi <= 24.9){
            System.out.println("Your BMI is " + bmi + " and you are normal");
        }else if(bmi >= 25 && bmi <= 29.9){
            System.out.println("Your BMI is " + bmi + " and you are overweight");
        }else if(bmi == -1){
            System.out.println("Something went wrong!");
        }
    }
}
