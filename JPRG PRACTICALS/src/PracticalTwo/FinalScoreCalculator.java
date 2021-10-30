package PracticalTwo;

import java.util.Scanner;

public class FinalScoreCalculator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter MST Scores : ");
        int mst_score = input.nextInt();

        System.out.print("Enter Assignment 1 Scores : ");
        int assignment_one_score = input.nextInt();

        System.out.print("Enter Assignment 2 Scores : ");
        int assignment_two_score = input.nextInt();

        System.out.print("Enter General Performance Scores : ");
        int general_performance_score = input.nextInt();

        final double weightage_mst = 0.2;
        final double weightage_assignment_one = 0.25;
        final double weightage_assignment_two = 0.35;
        final double weightage_general_performance = 0.20;

        double final_score = (mst_score * weightage_mst) + (assignment_one_score * weightage_assignment_one) + (assignment_two_score * weightage_assignment_two) + (general_performance_score * weightage_general_performance);

        System.out.printf("Your final scores: %.2f%n", final_score);
    }
}
