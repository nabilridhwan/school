package PracticalThree.QuestionSix;

public class CasualEmployee extends Employee {
    private double hourlyRate;
    private double hoursWorked;

    public CasualEmployee(String name, double hourlyRate, double hoursWorked) {
        super(name, 0);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    public double calcSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
