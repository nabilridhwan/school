/**
 * 
 */
package webservices;

import java.util.ArrayList;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import dbaccess.UserDetails;
import dbaccess.UserDetailsDB;

/**
 * @author Nabil Ridhwanshah
 *
 */

@Path("/UserService")
public class UserService {
	
	@GET
	@Path("/listAllUsers")
	@Produces(MediaType.APPLICATION_JSON)
	
	public Response listAllUsers() {
		ArrayList<UserDetails> list = new ArrayList<UserDetails>();
		
		try {
			UserDetailsDB db = new UserDetailsDB();
			
			list = db.getAllUsers();
		}catch(Exception e) {
			System.out.println("Error: " + e);
		}
		
		return Response
				.status(Response.Status.OK)
				.entity(list)
				.build();
	}
	
	@GET
	@Path("/findUser")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getOneUser(@QueryParam("uid") String uid) {
		UserDetails user = new UserDetails();
		
		try {
			UserDetailsDB db = new UserDetailsDB();
			user = db.getUserDetails(uid);
		}catch(Exception e) {
			System.out.println("Error: " + e);
		}
		
		return Response
				.status(Response.Status.OK)
				.entity(user)
				.build();
	}
	
	@PUT
	@Path("/createUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN) // Because the item returned is only an integer
	
	public Response createUser(UserDetails user) {
		int affectedRows = 0;
		try {
			UserDetailsDB db = new UserDetailsDB();
			affectedRows = db.insertUser(user.getUserId(), user.getAge(), user.getGender());
		}catch(Exception e) {
			System.out.println(e.toString());
		}
		
		return Response
				.status(Response.Status.OK)
				.entity(affectedRows)
				.build();
	}

}
