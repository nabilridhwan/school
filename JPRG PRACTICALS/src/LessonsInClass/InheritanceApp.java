package LessonsInClass;

public class InheritanceApp {
    public static void main(String[] args) {
        Person p1 = new Person("Jack", 20);
        p1.greetings();

        Student s1 = new Student("Jmaes", 99, "SoC");
        s1.greetings();

        Lecturer theLecturer = new Lecturer("Alvin", 99, 50);
        theLecturer.greetings();
    }
}
