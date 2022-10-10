package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

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
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import dbaccess.UserDetails;

/**
 * Servlet implementation class GetUserList
 */
@WebServlet("/GetUserList")
public class GetUserList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetUserList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		Client client = ClientBuilder.newClient();
		
		String restUrl = "http://localhost:8080/Practicals/UserService/listAllUsers";
		
		WebTarget target = client.target(restUrl);
		
		Invocation.Builder invocationBuilder = target.request(MediaType.APPLICATION_JSON);
		
		Response resp = invocationBuilder.get();
		
		System.out.println("status: " + resp.getStatus());
		
		// Check if the response made is OK
		if(resp.getStatus() == Response.Status.OK.getStatusCode()) {
			ArrayList<UserDetails> al = resp.readEntity(new GenericType<ArrayList<UserDetails>>() {});
			
//			Loop through to get details
//			for(UserDetails user : al) {
//				
//			}
			
			request.setAttribute("userArray", al);
			String url = "/prac8/testweb.jsp";
			
			RequestDispatcher dispatch = request.getRequestDispatcher(url);
			dispatch.forward(request, response);
		}else {
			request.setAttribute("err", "NotFound");
			String url = "/prac8/testweb.jsp";
			
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
