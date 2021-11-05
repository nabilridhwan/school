package PracticalTwo;

import java.util.Scanner;

public class GPACalculator {
    public static void main(String[] args) {
        int moduleNumber = 0;
        String gradeInput = "";

        int creditInput = 0;
        int totalCredits = 0;
        int numerator = 0;
        Scanner input = new Scanner(System.in);

        do{
            System.out.print("Enter grade for module #" + (moduleNumber+1) + " (or enter 0 to stop) : ");
            gradeInput = input.next();

            if(!gradeInput.equals("0")){
                System.out.print("\nEnter credit units for module #" + (moduleNumber+1) + " : ");
                creditInput = input.nextInt();
                totalCredits += creditInput;
            }

//            Fix GPA Calculation
            switch (gradeInput){
                case "A":
                    numerator += (4 * creditInput);
                    break;
                case "B":
                    numerator += (3 * creditInput);
                    break;
                case "C":
                    numerator += (2 * creditInput);
                    break;
                case "D":
//                    numerator = (D) * creditInput == 1*creditInput == creditInput
                    numerator += creditInput;
                    break;
            }

            moduleNumber++;
        }while (!gradeInput.equals("0"));

        double gpa = (double) numerator / (double) totalCredits;
        System.out.println(String.format("Your GPA is %.2f", gpa));
    }
}
