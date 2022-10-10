package servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dbaccess.UserDetails;
import dbaccess.UserDetailsDB;

/**
 * Servlet implementation class ObtainUserDetailsServlet
 */
@WebServlet("/ObtainUserDetailsServlet")
public class ObtainUserDetailsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ObtainUserDetailsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String userid = request.getParameter("userid");
		
		if(userid.isEmpty()) {
			response.sendRedirect(request.getContextPath() + "/prac6/part2/getuserdetails.jsp?message=Enter a user id!");
			return;
		}
		
		UserDetailsDB db = new UserDetailsDB();
		
		UserDetails user = db.getUserDetails(userid);
		
		// Set the attribute
		request.setAttribute("user", user);
		
		// Forward the request using dispatcher
		RequestDispatcher dispatch = request.getRequestDispatcher("/prac6/part2/displaydetails.jsp");
		dispatch.forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
