package PracticalThree.QuestionSix;

public class TestEmployee {
    public static void main(String[] args) {
        Employee[] employees = new Employee[3];
        employees[0] = new CasualEmployee("John", 10.0, 30);
        employees[1] = new CasualEmployee("Mary", 5.0, 50);
        employees[2] = new Manager("Peter", 3000.0, 5000.0);

        for(Employee employee : employees){
            displaySalary(employee);
        }
    }

    public static void displaySalary(Employee employee){
        System.out.println("Name: " + employee.getName());
        System.out.println(String.format("Salary: $%.1f",  employee.calcSalary()));
        System.out.println("");
    }
}
