<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%String name = request.getParameter("userName"); %>
	
	<h1>
		name = <%=name %>
	</h1>

</body>
</html>