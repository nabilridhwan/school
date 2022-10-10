package servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;

import dbaccess.UserDetails;

/**
 * Servlet implementation class CreateUser
 */
@WebServlet("/CreateUser")
public class CreateUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uid = request.getParameter("uid");
		Integer age = Integer.parseInt(request.getParameter("age"));
		String gender = request.getParameter("gender");
		
		UserDetails user = new UserDetails();
		
		user.setUserId(uid);
		user.setAge(age);
		user.setGender(gender);
		
		Client client = ClientBuilder.newClient();
		String restUrl = "http://localhost:8080/Practicals/UserService";
		
		WebTarget target = client.target(restUrl).path("/createUser");
		Invocation.Builder invocationBuilder = target.request();
		Response resp = invocationBuilder.put(Entity.json(user));
		
		if(resp.getStatus() == Response.Status.OK.getStatusCode()) {
			Integer affectedRows = resp.readEntity(Integer.class);
			
			request.setAttribute("rowsAffected", affectedRows);
			String url = "prac8/testweb.jsp";
			
			RequestDispatcher dispatch = request.getRequestDispatcher(url);
			dispatch.forward(request, response);
		}else {
			request.setAttribute("err", "NotFound");
			String url = "prac8/testweb.jsp";
			
			RequestDispatcher dispatch = request.getRequestDispatcher(url);
			dispatch.forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
