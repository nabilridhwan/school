package LessonsInClass;

public class PersonTest {

    public static void main(String[] args) {
        Person p1 = new Person("Nabil", 18);
        Student s1 = new Student("Nabil", 18, "Singapore Polytechnic");
        p1.greetings();
        s1.greetings();
    }
}
