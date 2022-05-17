<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%
		String favColor = request.getParameter("favColor");
	
		// Set the session
		session.setAttribute("favColor", favColor);
		
		// Redirect to displayinmyjsp1
		response.sendRedirect("displayinmyjsp1.jsp");
	%>

</body>
</html>