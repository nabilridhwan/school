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
	
	String uId = request.getParameter("id");
	
    try {
        // Step1: Load JDBC Driver
		Class.forName("com.mysql.jdbc.Driver");  //can be omitted for newer version of drivers

        // Step 2: Define Connection URL
        String connURL = "jdbc:mysql://localhost/db1?user=root&password=root&serverTimezone=UTC";

        // Step 3: Establish connection to URL
        Connection conn = DriverManager.getConnection(connURL); 

     // Step 5: Execute SQL Command
        PreparedStatement ps = conn.prepareStatement("SELECT * FROM member WHERE id = ?");
     	ps.setString(1, uId);
     	
     	
        ResultSet rs = ps.executeQuery();%>
        
        <%if(rs.next()) {
            int id = rs.getInt("id");
            String name = rs.getString("name");%>
            
            <p>id: <%=id %>, name: <%=name %></p>
            
            <h1>Edit Member Form</h1>
            
            <form action="updateMember.jsp" method="POST">
	            <table style="margin: auto;">
		            <tr>
		        		<td>id</td>
		        		<td>
			        		<input type="text" readonly name="uId" value="<%=id %>" />
		        		</td>
		        	</tr>
		        	
		        	<tr>
		        		<td>name</td>
		        		<td>
		        			<input type="text" name="uName" value="<%=name %>" />
		        			
		        		</td>
		        	</tr>
		        	
			        <tr>
				        <td style="text-align: center;" colspan="2">
					        <button>
					        	Submit
					        </button>
				        </td>
			        </tr>
		        </table>
            </form>
        <%}%>
        
	      
	        <%
	        // Close connection
	        conn.close();
	        %>
	   <%
	   } catch (Exception e) {
	      out.println("Error :" + e);
	   }%>
	   
	   <%@ include file = "footer.html" %>

</body>
</html>

</body>
</html>