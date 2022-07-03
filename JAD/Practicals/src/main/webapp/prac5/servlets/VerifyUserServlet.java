package servlets;

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class VerifyUserServlet
 */
@WebServlet("/verifyUserServlet")
public class VerifyUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public VerifyUserServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String loginid = request.getParameter("loginid");
		String password = request.getParameter("password");
		String userRole = "adminUser";
		
		if(loginid == null || password == null){
			response.sendRedirect("/Practicals/prac5/part4/login.jsp?errCode=invalidBody");
			return;
		}

//		Get the class for the jdbc Driver
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		// Define Connection URL
        String connURL = "jdbc:mysql://localhost/db1?user=root&password=root&serverTimezone=UTC";

        // Establish connection to URL
        try {
			Connection conn = DriverManager.getConnection(connURL);
			
			PreparedStatement sqlStr = conn.prepareStatement("SELECT * FROM member WHERE name = ? AND password = ?");
	        sqlStr.setString(1, loginid);
	        sqlStr.setString(2, password);
	        
	        // Get the result by executing the query
	        ResultSet rs = sqlStr.executeQuery(); 
	        
	     // rs.next() will return true if there is a result, false if none
	        if(rs.next()){
	        	
	        	// A new HttpSession can be obtained by the following line of code:
	        	HttpSession session = request.getSession(true);
	        	
	        	// Set session attributes
	        	session.setAttribute("sessUserID", loginid);
	        	session.setAttribute("sessUserRole", userRole);
	        	
	        	// Redirect
	        	response.sendRedirect("/Practicals/prac5/part4/displayMember.jsp");
				
	        }else{
	        	

				// If there is no user found, redirect them to the login page with an error
	        	response.sendRedirect("/Practicals/prac5/part4/login.jsp?errCode=invalidLogin");
				
	        }
	        
	        conn.close();
	        
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
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
