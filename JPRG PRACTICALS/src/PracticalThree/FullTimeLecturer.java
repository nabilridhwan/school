package PracticalThree;

public class FullTimeLecturer extends Lecturer{

    private String[] PTClass;
    private int[] classSize;
    private double salary;

    public FullTimeLecturer(String n, int s_id, String[] PTClass, int[] classSize, double salary){
        super(n, s_id);
        this.PTClass = PTClass;
        this.classSize = classSize;
        this.salary = salary;
    }

    public double calcMonthlyPay(){
        return salary;
    }

    public double calcPTLunchSubsidy(){
        int totalClassSize = 0;
        for(int i = 0; i < classSize.length; i++){
            totalClassSize += classSize[i];
        }

        return totalClassSize * 10;
    }
}
