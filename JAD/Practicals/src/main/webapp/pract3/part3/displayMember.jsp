<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pract3-Part3</title>
</head>
<body>

	<%
		String loginid =  request.getParameter("loginid");
		String userRole = request.getParameter("userRole");
	%>
	
	<h1>
		pract3-part3-displayMember.jsp
	</h1>
	
	<p>
		Welcome!.. <%=loginid %>
	</p>
	
	<p>
		Your user role is: <%=userRole%>
	</p>
	
	<button onclick="window.location = 'login.jsp'">
		Home
	</button>

</body>
</html>