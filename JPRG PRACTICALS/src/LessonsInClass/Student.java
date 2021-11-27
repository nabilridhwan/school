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
        super.greetings();
        System.out.println("Hello, I am a student from " + school);
    }
}
