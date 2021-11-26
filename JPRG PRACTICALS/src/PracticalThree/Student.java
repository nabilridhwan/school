package PracticalThree;

public class Student extends Person{
    private char stdYear;

    public Student(String n, char stdYear){
        super(n);
        this.stdYear = stdYear;
    }

    public char getYear() {
        return stdYear;
    }

    public void introduce(){
        System.out.println("My name is " + getName() + "\nI am a year " + getYear() + " student");
    }
}
