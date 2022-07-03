<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<%
		String message = request.getParameter("message") != null ? request.getParameter("message") : "";
	%>
	
	<i><%=message %></i>

	<form action="${pageContext.request.contextPath}/ObtainUserDetailsServlet">
		<label>User ID</label>
		<input type="text" name="userid" />
		
		<button>Submit</button>
	</form>
	
</body>
</html>