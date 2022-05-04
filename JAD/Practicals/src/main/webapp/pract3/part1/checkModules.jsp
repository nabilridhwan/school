<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pract3-Part1</title>
</head>
<body>

	<%-- 
	  - Author(s): Nabil Ridhwanshah Bin Rosli
	  - Admin No: P2007421
	  - Date: 4/5/2022
	  - Description: ST0510 JAD Practical 3
	  --%>

	<%
		// Get parameter of modules
		String[] modules = request.getParameterValues("modules");
	%>
	
	<% if(modules == null){%>
		<p>You have no modules this semester</p>
	<%}else{%>
		<p>You are taking:</p>
		
		<ul>
		<% for(int i = 0; i < modules.length; i++){%>
			<li><%=modules[i] %></li>
		<%}%>
		</ul>
	<%}%>

</body>
</html>