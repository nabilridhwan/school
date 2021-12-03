public class IncomeTax extends Tax{
    private double annualIncome;
    private int personalReliefs;

    public IncomeTax(String name, String nric, double inAnnualIncome, int inPersonalReliefs){
        super(name, nric);
        annualIncome = inAnnualIncome;
        personalReliefs = inPersonalReliefs;
    }

    public String computeTax(){
        double incT = (annualIncome - personalReliefs) * 0.03;
        return "Income Tax for " + getName() + " (" + getNric() + ") is $ " + String.format("%.2f", incT);
    }

    public static void main(String[] args) {
        IncomeTax johnIncomeTax = new IncomeTax("John Tan", "S1234567A", 90000.99, 40000);
        System.out.println(johnIncomeTax.computeTax());
    }
}
