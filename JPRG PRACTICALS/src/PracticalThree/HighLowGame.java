package PracticalThree;

import javax.swing.*;

public class HighLowGame {
    private int randomNumber;
    private int guess;
    private boolean gameEnded = false;

    public void generateRandomNumber(){
        randomNumber = (int) (Math.random() * 99);
    }

    public void getUserInput(){
        guess = Integer.parseInt(JOptionPane.showInputDialog("Enter your guess."));
    }

    public int getRandomNumber() {
        return randomNumber;
    }

    public String getResult(){

        String showMessage = "Unknown error";
        if(guess > randomNumber){
            showMessage = String.format("%d is higher than the Magic Number", guess);
        }else if(guess < randomNumber){
            showMessage = String.format("%d is lower than the Magic Number", guess);
        }else if (guess == randomNumber){
            showMessage = String.format("%d is the Magic Number", guess);
            setGameEnded(true);
        }
        JOptionPane.showMessageDialog(null, showMessage);
        return showMessage;
    }

    public void setGameEnded(boolean gameEnded) {
        this.gameEnded = gameEnded;
    }

    public boolean gameEnded(){
        return gameEnded;
    }


}
