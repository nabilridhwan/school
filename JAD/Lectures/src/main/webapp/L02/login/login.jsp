<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>

	<style>
		.debugBox{
			border: 1px solid red;
			padding: 1em;
		}
	</style>
</head>
<body>

</body>

	<div class="debugBox">
		<form action="checkme.jsp" method="post">
             User Name: <input name="user" type='text'> <br>
             Password: <input name="pwd" type='password'> <br>
             <input type="submit" value="ok">
        </form>
	</div>

	<%@ include file="footer.jsp" %>
</html>	