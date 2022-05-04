<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pract3-Part3</title>

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
	%>
	
	
		<%-- Checks if login and password is null along with if the loginid and password is correct --%> 
		<%if(loginid == null || password == null){
			response.sendRedirect("login.jsp?errCode=invalidBody&loginid=" + loginid);
			
			}else{%>
			<%if(loginid.equals("Lincoln") && password.equals("abc123")){
				response.sendRedirect("displayMember.jsp?loginid=" + loginid + "&userRole=" + userRole);
			}else{
				response.sendRedirect("login.jsp?errCode=invalidLogin&loginid=" + loginid);
			}%>
		<%}%>

</body>
</html>