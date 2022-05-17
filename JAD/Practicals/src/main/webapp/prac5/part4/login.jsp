<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pract3-Part4</title>

<style>
	.error{
		padding: 1em;
		background-color: red;
		color: white;
	}
</style>
</head>
<body>

	<%@ include file = "header.html" %>

	<!-- 
	  - Author(s): Nabil Ridhwanshah Bin Rosli
	  - Admin No: P2007421
	  - Date: 25/4/2022
	  - Description: ST0510 JAD Practical 2
	 -->
	 
	 <% if(request.getParameter("errCode") != null){
		 if (request.getParameter("errCode").equals("invalidLogin")){%>
	 		<p class="error">
	 			You have entered an invalid ID/Password
	 		</p>
	 	<%}else if(request.getParameter("errCode").equals("invalidBody")){%>
			 <p class="error">
	 			Your request body was invalid
	 		</p>
		 <%}%>
		 
	 <% } %>
	 
	<form action="/Practicals/verifyUserServlet" method="get">
		<label for="loginid">Login ID:</label>
		<input type="text" name="loginid" />
		
		<br />
		
		<label for="password">Password:</label>
		<input type="password" name="password" />
		
		<br />
		
		<input type="submit" name="btnSubmit" value="Login" />
		<input type="reset" name="btnReset" value="Reset" />
	</form>
	
	<%@ include file = "footer.html" %>
</body>
</html>