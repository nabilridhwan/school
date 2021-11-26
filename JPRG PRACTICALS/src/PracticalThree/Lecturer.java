package PracticalThree;

public class Lecturer {
    private String name;
    private int staffID;

    public Lecturer(String inName, int inStaffID){
        name = inName;
        staffID = inStaffID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double calcMonthlyPay(){
        return 0;
    }
}
