package PracticalTwo;

import javax.swing.*;

public class PHCalc {
    public static void main(String[] args) {
//        Get the dialog box to input and cast it to an int

        String inputBox = JOptionPane.showInputDialog("Enter PH Levels");

        try{
            int phLevel = Integer.parseInt(inputBox);

            if(phLevel < 0 || phLevel > 14){
//                Show dialog box that PH levels are between 0 to 14
                JOptionPane.showMessageDialog(null, "Enter a value between 0 to 14!");
            }else{
                if(phLevel < 7){
//                    Acidic
                    JOptionPane.showMessageDialog(null, "Your aquarium water is acidic");

                }else if(phLevel == 7){
                    JOptionPane.showMessageDialog(null, "Your aquarium water is neutral");
                }
                else{
//                    Alkaline
                    JOptionPane.showMessageDialog(null, "Your aquarium water is alkaline");
                }
            }
            System.out.println(phLevel);
        }catch (Exception e){
            JOptionPane.showMessageDialog(null, e.toString());
        }
    }
}
