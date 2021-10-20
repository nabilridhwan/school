package PracticalTwo;

import javax.swing.*;

public class RectangleCalc {
    public static void main(String[] args) {
        float height = enterHeight();
        float width = enterWidth();

        float area = calculateArea(height, width);
        float perimeter = calculatePerimeter(height, width);

        printResults(height, width, area, perimeter);
    }

    private static float enterHeight(){
        return Float.parseFloat(JOptionPane.showInputDialog("Enter the Height"));
    }

    private static float enterWidth(){
        return Float.parseFloat(JOptionPane.showInputDialog("Enter the Width"));
    }

    private static float calculateArea(float height, float width){
        return height*width;
    }

    private static float calculatePerimeter(float height, float width){
        return (height*2) + (width*2);
    }

    private static void printResults(float height, float width, float area, float perimeter){
        String finalMessage = String.format("Summary of Rectangle Measurements\nHeight: %.1f\nWidth: %.1f\nArea: %.1f\nPerimeter: %.1f", height, width, area, perimeter);
        JOptionPane.showMessageDialog(null, finalMessage);
    }
}
