package PracticalTwo;

public class NumberArray {
    public static void main(String[] args) {
        int[] numberArray = new int[100];

        for(int i = 0; i < numberArray.length; i++){

//            Check if the number is even
            if(i % 2 == 0){
                numberArray[i] = 1;
            }else{
                numberArray[i] = 2;
            }
        }

//        Printing
        for(int i = 0; i < numberArray.length; i++){
            System.out.println("numberArray[" + i + "] = " + numberArray[i]);
        }
    }
}
