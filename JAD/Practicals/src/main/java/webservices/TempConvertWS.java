package webservices;

import javax.ws.rs.*;

@Path("/TempConvertWS")
public class TempConvertWS {
	
	@GET
	@Path("/CtoF")
	@Produces("application/json")
	public double CtoF(@QueryParam("cel") double celsius) {
		double fahrenheit;
		fahrenheit = ((celsius * 9) / 5) + 32;
		return fahrenheit;
	}
	
	@POST
	@Path("/FtoC")
	@Produces("application/json")
	public double FtoC(@QueryParam("fah") double fahrenheit) {
		double celsius = 0.0;
		celsius = (fahrenheit - 32.0) * 5 / 9;
		System.out.println("...FtoC-fahrenheit:" + fahrenheit);
		System.out.println("...FtoC-celsius:" + celsius);
		return celsius;
	}

}
