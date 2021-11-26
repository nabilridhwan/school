package LessonsInClass;

public class Lecturer extends Person{
    private double salary;

    public Lecturer(){
        salary = 0;
    }

    public Lecturer(String n, int a, double s){
        super(n, a);
        salary = s;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}
