package PracticalTwo;

import java.util.Scanner;

public class ScoreSumCalc {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double scoreInput;
        double totalScore = 0;
        int scoreNumber = 0;

        do {
            System.out.print("Enter score# " + (scoreNumber + 1) + " (or enter -1 to stop) : ");
            scoreInput = input.nextDouble();

//            Fix score number not dividing properly
            if(scoreInput != -1){
                totalScore += scoreInput;
                scoreNumber++;
            }
        }while (scoreInput != -1);

        double averageScore = totalScore / (double) scoreNumber;

//        Fix average score is not having proper decimals at the back
        System.out.println("Average Scores = " + String.format("%.2f", averageScore) + " Grade = " + getGrade(averageScore));
    }

    private static String getGrade(double score){
        if(score >= 80){
            return "A";
        }else if(score >= 70){
            return "B";
        }else if(score >= 60){
            return "C";
        }else if(score >= 50){
            return "D";
        }else{
            return "F";
        }
    }
}
