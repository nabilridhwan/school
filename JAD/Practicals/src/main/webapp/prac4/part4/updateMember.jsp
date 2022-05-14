<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@page import="java.sql.*" %>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<style>

	h1{
		text-align: center;
	}
	
	table{
		border: 1px solid black;
	}
	
	td,th{
		border: 1px solid black;
	}
</style>
</head>
<body>

	<%@ include file = "header.html" %>

	<%
	
	String uId = request.getParameter("uId");
	String uName = request.getParameter("uName");
	
    try {
        // Step1: Load JDBC Driver
		Class.forName("com.mysql.jdbc.Driver");  //can be omitted for newer version of drivers

        // Step 2: Define Connection URL
        String connURL = "jdbc:mysql://localhost/db1?user=root&password=root&serverTimezone=UTC";

        // Step 3: Establish connection to URL
        Connection conn = DriverManager.getConnection(connURL); 
        
        // Create prepared statement
        PreparedStatement pstmt = conn.prepareStatement("UPDATE member SET name = ? WHERE id = ?");
        pstmt.setString(1, uName);
        pstmt.setInt(2, Integer.parseInt(uId));
        
        // Execute the update which returns the number of rows affected
		int count = pstmt.executeUpdate();
        
        // Success in updating
        if(count > 0){%>
        	<p>
        		uId is.. <%=uId %>..uName is..<%=uName %>
        	</p>
        	
        	<p>
        		Number of row(s) affected:... <%=count %>
        	</p>
        	
        	<button onclick="window.location = 'listMembers.jsp'">
        		Back to List Members
        	</button>
        <%}%>
        
			
		<%
		// Close the connection
		conn.close();
	   } catch (Exception e) {
	      out.println("Error :" + e);
	   }%>
	   
	   <%@ include file = "footer.html" %>

</body>
</html>

</body>
</html>