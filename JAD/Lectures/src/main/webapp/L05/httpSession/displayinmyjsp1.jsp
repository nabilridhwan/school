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
		String favColorSession = (String) session.getAttribute("favColor");
	%>
	
	<h1>displalyinmyjsp1</h1>
	<p>
		Your Favourite Color = <%= favColorSession %>
	</p>

</body>
</html>