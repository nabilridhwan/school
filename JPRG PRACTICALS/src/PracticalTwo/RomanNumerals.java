package PracticalTwo;

import javax.swing.*;

public class RomanNumerals {
    public static void main(String[] args) {
//        Switch Statement
        String input = JOptionPane.showInputDialog("Enter a numeric value");
        switch (input){
            case "1":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = I");
                break;


            case "2":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = II");

                break;

            case "3":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = III");

                break;

            case "4":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = IV");

                break;

            case "5":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = V");

                break;

            case "6":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = VI");

                break;

            case "7":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = VII");

                break;

            case "8":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = VIII");

                break;

            case "9":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = IX");

                break;

            case "10":
                JOptionPane.showMessageDialog(null, "Roman Numeral Value = X");

                break;

            default:
                JOptionPane.showMessageDialog(null, "Out of Range! Please enter a number between 1 and 10!", "Message", JOptionPane.ERROR_MESSAGE);
                break;
        }
    }
}
