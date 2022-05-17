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
	Cookie cookie1 = new Cookie("myFavColor", "white");
	
	cookie1.setMaxAge(60 * 60 *24);
	
	response.addCookie(cookie1);
	response.sendRedirect("readCookie.jsp");
	
	%>

</body>
</html>