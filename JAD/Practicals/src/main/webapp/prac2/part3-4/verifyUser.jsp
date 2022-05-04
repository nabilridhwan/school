<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

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
		boolean successfulLogin = false;
	%>
	
	
		<%-- Checks if login and password is null along with if the loginid and password is correct --%> 
		<%if(loginid == null || password == null){
			response.sendRedirect("login.jsp?errCode=invalidBody&loginid=" + loginid);
			
			}else{%>
			<%if(loginid.equals("Lincoln") && password.equals("abc123")){%>
				<p>Welcome, <%=loginid %></p>
			<%}else{
				response.sendRedirect("login.jsp?errCode=invalidLogin&loginid=" + loginid);
			}%>
		<%}%>
	
	
	<table>
		<%
			for(int i = 1; i <=5; i++){%>
				<tr>
					<td>
						<%=i%> x 5
						</td>
						
					<td>
						<%= i*5 %>
					</td>
				</tr>
			<%}%>
		
	</table>

</body>
</html>