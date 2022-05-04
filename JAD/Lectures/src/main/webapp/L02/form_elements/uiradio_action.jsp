<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>UI TextArea</title>
</head>
<body>

	<%
	    String buttonpressed = request.getParameter("submit");
	    String text1 = request.getParameter("text1");
	    String textarea1 = request.getParameter("textarea1");
	%>

	
    Submit Button pressed is: <%= buttonpressed %> <br>
    text1 is: <%= text1 %> <br>
    textarea1 is:<br>
    <p><%= textarea1 %></p>



</body>
</html>