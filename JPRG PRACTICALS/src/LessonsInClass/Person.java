package LessonsInClass;

public class Person {
    private String name;
    private int age;

    public Person(){
        this(null, 0);
    }

    public Person(String inName, int inAge){
        name = inName;
        age = inAge;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int inAge) {
        age = inAge;
    }

    public void setName(String inName) {
        name = inName;
    }

    public void greetings(){
        System.out.println("Hello my name is " + name + " and I am " + age + " years old.");
//        Alternative using getters
//        System.out.println("Hello my name is " + getName() + " and I am " + getAge() + " years old.");
    }
}
