<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@page import="java.sql.*" %>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%
    try {
        // Step1: Load JDBC Driver
		Class.forName("com.mysql.jdbc.Driver");  //can be omitted for newer version of drivers

        // Step 2: Define Connection URL
        String connURL = "jdbc:mysql://localhost/db1?user=root&password=root&serverTimezone=UTC";
		
		int id = -1;
		String name = "";
		String password = "";	

        // Step 3: Establish connection to URL
        Connection conn = DriverManager.getConnection(connURL); 
        // Step 4: Create Statement object
        Statement stmt = conn.createStatement();
        
     // Step 5: Execute SQL Command
        PreparedStatement ps = conn.prepareStatement("INSERT INTO member(name, password) VALUES(?,?)");      
     	ps.setString(1, "name");
     	ps.setString(2, "password");
     	
        int affectedRows = ps.executeUpdate();

        // Do whateveer you want to do with the int
	      
	        // Step 7: Close connection
	        conn.close();
	        
	        
	   } catch (Exception e) {
	      out.println("Error :" + e);
	   }


	%>

</body>
</html>

</body>
</html>