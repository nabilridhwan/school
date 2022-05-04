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

        // Step 3: Establish connection to URL
        Connection conn = DriverManager.getConnection(connURL); 
        // Step 4: Create Statement object
        Statement stmt = conn.createStatement();
     // Step 5: Execute SQL Command
        String sqlStr = "SELECT * FROM member";         
        ResultSet rs = stmt.executeQuery(sqlStr);

        // Step 6: Process Result
        while (rs.next()) {
            int id = rs.getInt("id");
            String name = rs.getString("name");
	        out.println ("id:" + id + ", name: " + name +"<br>");
        }
	      
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