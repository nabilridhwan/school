package servlets;

import java.io.IOException;
import javax.ws.rs.core.Response;

import dbaccess.UserDetails;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;


/**
 * Servlet implementation class FindUser
 */
@WebServlet("/FindUser")
public class FindUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FindUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uid = request.getParameter("uid");
		Client client = ClientBuilder.newClient();
		
		String dispatchUrl = "prac8/testweb.jsp";
		
		String restUrl = "http://localhost:8080/Practicals/UserService";
		WebTarget target = client.target(restUrl).path("/findUser").queryParam("uid", uid);
		
		Invocation.Builder invocationBuilder = target.request(MediaType.APPLICATION_JSON);
		Response resp = invocationBuilder.get();
		
		if(resp.getStatus() == javax.ws.rs.core.Response.Status.OK.getStatusCode()) {
			UserDetails user  = resp.readEntity(UserDetails.class);
			
			request.setAttribute("user", user);
			
			RequestDispatcher dispatch = request.getRequestDispatcher(dispatchUrl);
			dispatch.forward(request, response);
			
		}else {
			request.setAttribute("err", "NotFound");
			RequestDispatcher dispatch = request.getRequestDispatcher(dispatchUrl);
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
