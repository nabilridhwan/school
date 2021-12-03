public class Tax {

    private String name;
    private String nric;

    public Tax(String inName, String inNric){
        name = inName;
        nric = inNric;
    }

    public String getName() {
        return name;
    }

    public String getNric() {
        return nric;
    }
}
