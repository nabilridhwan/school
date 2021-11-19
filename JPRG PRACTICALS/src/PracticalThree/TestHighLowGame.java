package PracticalThree;

import javax.swing.*;

public class TestHighLowGame {

    public static void main(String[] args) {

        JOptionPane.showMessageDialog(null, "Welcome to The High Low Number Game");
        HighLowGame game = new HighLowGame();
        game.generateRandomNumber();

        do{
            game.getUserInput();
            game.getResult();
        }while(game.gameEnded() == false);
    }
}
