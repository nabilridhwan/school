<%@page import="dbaccess.UserDetails"%>
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
		UserDetails user = (UserDetails) request.getAttribute("user");
	
		if(user == null){
			// Redirect to getuserdetails
			response.sendRedirect(request.getContextPath() + "/prac6/part2/getuserdetails.jsp?message=User not found!");
			return;
		}
	%>
	
	<h3>User ID</h3>
	<%=user.getUserId() %>
	
	<h3>Age</h3>
	<%=user.getAge() %>
	
	<h3>Gender</h3>
	<%=user.getGender() %>

</body>
</html>