<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@page import="java.sql.*" %>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<style>
	table{
		border: 1px solid black;
	}
	
	td,th{
		border: 1px solid black;
	}
</style>
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
        ResultSet rs = stmt.executeQuery(sqlStr);%>

        <table>
        	<tr>
        		<th>id</th>
        		<th>name</th>
        	</tr>
        		
        
        <%while (rs.next()) {
            int id = rs.getInt("id");
            String name = rs.getString("name");%>
	        <tr>
		        <td><%=id %></td>
		        <td><%=name %></td>
	        </tr>
        <%}%>
        </table>
	      
	        <%
	        // Close connection
	        conn.close();
	        %>
	   <%
	   } catch (Exception e) {
	      out.println("Error :" + e);
	   }%>

</body>
</html>

</body>
</html>