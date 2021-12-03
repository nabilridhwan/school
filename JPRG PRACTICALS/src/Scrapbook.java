import javax.swing.*;
import java.util.Scanner;

public class Scrapbook {
    public static void main(String[] args) {
        String [] names = {"John", "Mary", "Alice",
                "Jack", "Sue"};
        String [] contacts = {"9123456", "8123999", "68701111",
                "9889887", "8889990"};

        String userInput = JOptionPane.showInputDialog(
                "Enter Name to search:");


        int foundIndex = -1;

        for(int i = 0; i < names.length; i++){
            String searchName = names[i];

            if(searchName.equalsIgnoreCase(userInput)){
                foundIndex = i;
            }
        }

        if(foundIndex != -1){
            String name = names[foundIndex];
            String contact = contacts[foundIndex];

            String stringFormat = String.format("%s contact number is %s", name, contact);
            JOptionPane.showMessageDialog(null, stringFormat, "Result", JOptionPane.INFORMATION_MESSAGE);
        }else{
            JOptionPane.showMessageDialog(null, "Cannot find the contact of " + userInput);
        }

    }
}
