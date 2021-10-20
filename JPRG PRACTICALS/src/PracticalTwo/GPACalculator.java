package PracticalTwo;

import java.util.Scanner;

public class GPACalculator {
    public static void main(String[] args) {
        int moduleNumber = 0;
        String gradeInput = "";
        int creditInput = 0;

        int totalCredits = 0;
        int totalGrade = 0;
        Scanner input = new Scanner(System.in);

        do{
            System.out.print("Enter grade for module #" + (moduleNumber+1) + " (or enter 0 to stop) : ");
            gradeInput = input.next();

            if(!gradeInput.equals("0")){
                System.out.print("\nEnter credit units for module #" + (moduleNumber+1) + " : ");
                creditInput = input.nextInt();
            }

//            Fix GPA Calculation
            switch (gradeInput){
                case "A":
                    totalGrade += 4;
                    break;
                case "B":
                    totalGrade += 3;
                    break;
                case "C":
                    totalGrade += 2;
                    break;
                case "D":
                    totalGrade += 1;
                    break;
            }

            totalCredits += creditInput;
            moduleNumber++;
        }while (!gradeInput.equals("0"));

        System.out.println("totalGrade = " + totalGrade);
        System.out.println("totalCredits = " + totalCredits);

        System.out.println("Your GPA is " + (double) ((double) totalGrade / (double) totalCredits));
    }
}
