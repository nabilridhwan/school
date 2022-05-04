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
    	
        // Step1: Load JDBC Driver
		Class.forName("com.mysql.jdbc.Driver");  //can be omitted for newer version of drivers

        // Step 2: Define Connection URL
        String connURL = "jdbc:mysql://localhost/db1?user=root&password=root&serverTimezone=UTC";
		
		String simpleProc = "{call getUser(?, ?)}";

        // Step 3: Establish connection to URL
        Connection conn = DriverManager.getConnection(connURL); 
        
        // Call the stored routine
        CallableStatement cs = conn.prepareCall(simpleProc);
        
		cs.setString(1, "nabil");
		cs.setString(2, "secret");
		
		ResultSet rs=cs.executeQuery();   

		while(rs.next()){
		out.print(rs.getString("name")+",");
		out.println(rs.getString("password")+"<br>");
		}

		
    	}catch(Exception e){
    		out.println(e);
		}

	%>

</body>
</html>