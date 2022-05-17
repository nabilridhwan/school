<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@page import="java.sql.*" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pract3-Part4</title>

<style>
	table{
		border-spacing: 0;
	}
	td{
		text-align: center;
		border: 1px solid black;
		padding: 0 40px;
	}
</style>
</head>
<body>

	<%-- 
	  - Author(s): Nabil Ridhwanshah Bin Rosli
	  - Admin No: P2007421
	  - Date: 25/4/2022
	  - Description: ST0510 JAD Practical 2
	  --%>
	  
	  	<%
	  	
	  	String loginid =  request.getParameter("loginid");
		String password = request.getParameter("password");
		String userRole = "adminUser";
		
		if(loginid == null || password == null){
			response.sendRedirect("login.jsp?errCode=invalidBody&loginid=" + loginid);
		}
		
    try {
        // Step1: Load JDBC Driver
		Class.forName("com.mysql.jdbc.Driver");  //can be omitted for newer version of drivers

        // Step 2: Define Connection URL
        String connURL = "jdbc:mysql://localhost/db1?user=root&password=root&serverTimezone=UTC";

        // Step 3: Establish connection to URL
        Connection conn = DriverManager.getConnection(connURL); 
        
     // Create PreparedStatemtn
        PreparedStatement sqlStr = conn.prepareStatement("SELECT * FROM member WHERE name = ? AND password = ?");
        sqlStr.setString(1, loginid);
        sqlStr.setString(2, password);
        
        // Get the result
        ResultSet rs = sqlStr.executeQuery();    
        
        // rs.next() will return true if there is a result, false if none
        if(rs.next()){
        	
        	// Set session attributes
        	session.setAttribute("sessUserID", loginid);
        	session.setAttribute("sessUserRole", userRole);
        	
        	// Redirect
        	response.sendRedirect("displayMember.jsp");
        }else{
        	response.sendRedirect("login.jsp?errCode=invalidLogin");
        }
        
        conn.close();
	        
	   } catch (Exception e) {
	      out.println("Error :" + e);
	   }%>

</body>
</html>