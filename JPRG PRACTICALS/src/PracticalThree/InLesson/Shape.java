package PracticalThree.InLesson;

public abstract class Shape {

//    Can put in the arguments but needed in the extended class, can name the argument anything

//    The reason why we dont use override is because overriding is optional in subclasses and you are not guaranteed that the subclasses have the
//    method calculateArea but abstract forces it to be there
    public abstract double calculateArea();

    public void display(){
        System.out.println("I am a shape!");
    }
}
