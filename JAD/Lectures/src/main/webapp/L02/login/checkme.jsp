<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>checkme</title>

</head>
<body>

</body>

		<%-- Best practices to declare your variables there --%>
		<%! boolean loginStatus = false; %>

		<%
		
		String user = request.getParameter("user");
		String pwd = request.getParameter("pwd");
		
		// out.println(String.format("user: %s\npwd: %s", user, pwd));
		
		if ( user.equals("me") && pwd.equals("secret") ) { 
		    response.sendRedirect("login_okay.jsp");   // Brings user to another webpage
		}  else { 
		    response.sendRedirect("login_bad.jsp"); // Brings user to another webpage
		}
		
		%>
		
		
		<p>
			User is <%=user %> and password is <%=pwd %>
			</p>


</html>	