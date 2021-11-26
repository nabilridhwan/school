package LessonsInClass;

public class Student extends Person{
    private String school;

    public Student(String n, int a, String inSchool){
        super(n, a);
        school = inSchool;
    }

//    Overriden greetings method
//    Once you override greetings, it will 'hide' the parent method of greetings
    public void greetings(){
        System.out.println("Hello, I am a student from " + school);
        System.out.println("My name is " + getName() + " and I am " + getAge() + " years old.");
    }
}
