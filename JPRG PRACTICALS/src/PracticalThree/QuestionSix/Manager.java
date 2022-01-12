package PracticalThree.QuestionSix;

public class Manager extends Employee {
    private double profit;

    public Manager(String name, double salary, double profit) {
        super(name, salary);
        this.profit = profit;
    }

    public double calcSalary() {
        return getBaseSalary() + (0.1 * profit);
    }
}
