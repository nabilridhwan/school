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
	%>
	
	<h1>These are the values you have entered:</h1>
	<p>loginid: <%=loginid %></p>
	<p>password: <%=password %></p>

</body>
</html>