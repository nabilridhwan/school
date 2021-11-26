package PracticalThree;

public class PartTimeLecturer extends Lecturer{
    private double hourlyRate;
    private double monthlyHours;
    public PartTimeLecturer(String n, int s_id, double hourlyRate, double monthlyHours){
        super(n ,s_id);
        this.hourlyRate = hourlyRate;
        this.monthlyHours = monthlyHours;
    }

    @Override
    public double calcMonthlyPay() {
        return monthlyHours * hourlyRate;
    }
}
