package PracticalThree;

import javax.swing.*;

public class SphereTest {
    public static void main(String[] args) {
        String input = JOptionPane.showInputDialog("Enter the radius of the sphere");
        while(input.isEmpty()){
            JOptionPane.showMessageDialog(null, "No Value entered. Please enter again");
            input = JOptionPane.showInputDialog("Enter the radius of the sphere");
        }

        Sphere s = new Sphere(Double.parseDouble(input));

        JOptionPane.showMessageDialog(null, String.format("The area of the sphere is: %f%nThe volume of the sphere is: %f", s.calculateArea(), s.calculateVolume()));
    }

}
