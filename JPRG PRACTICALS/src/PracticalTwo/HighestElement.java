package PracticalTwo;

public class HighestElement {
    public static void main(String[] args) {
        int[] intArray = {11,0,10,2,2};
        System.out.println(findHighestValue(intArray));
    }

    public static int findHighestValue(int[] intArray){
        int largestValue = Integer.MIN_VALUE;

//        Loop through the array
        for(int i = 0; i < intArray.length; i++){
            if(intArray[i] > largestValue){
                largestValue = intArray[i];
            }
        }

        return largestValue;
    }
}
