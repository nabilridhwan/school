<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%
    try {
    	
    	// Get the parameters of name and password
    	String name = request.getParameter("name");
    	String password = request.getParameter("password");
    	
    	if(name == null || password == null){
    		response.sendRedirect("insertData.jsp?error=invalid parameters");
    	}
    	
        // Step1: Load JDBC Driver
		Class.forName("com.mysql.jdbc.Driver");  //can be omitted for newer version of drivers

        // Step 2: Define Connection URL
        String connURL = "jdbc:mysql://localhost/db1?user=root&password=root&serverTimezone=UTC";

        // Step 3: Establish connection to URL
        Connection conn = DriverManager.getConnection(connURL); 
        
        // Create prepared statement
        PreparedStatement pstmt = conn.prepareStatement("INSERT INTO member(name, password) VALUES(?, ?)");
        pstmt.setString(1, name);
        pstmt.setString(2, password);
        
        // Execute the update which returns the number of rows affected
		int count = pstmt.executeUpdate();
		
		// Close the connection
		conn.close();
		response.sendRedirect("insertData.jsp?success=true");
		
    	}catch(Exception e){
    		response.sendRedirect("insertData.jsp?error=" + e);
		}

	%>

</body>
</html>