package PracticalOne;

import javax.swing.*;

public class MyLoveMessage {
    public static void main(String[] args) {
//        Print out a dialog message box with the message "I love Java!"
        String message = "I love Java!";
        String titlebar = "Practical 1";

//           Icon is type int
        int icon = JOptionPane.INFORMATION_MESSAGE;

        JOptionPane.showMessageDialog(null, message, titlebar, icon);
    }
}
