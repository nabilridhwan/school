<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@page import="java.text.SimpleDateFormat" %>
<%@page import="java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pract3-part5</title>
</head>
<body>

	<%
		Date date = new Date();  
	    SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy HH:mm:ss");  
	    String strDate= formatter.format(date);  
	%>
	
	<h1>
		Pract3-part5-display date
	</h1>

	<p>
		The date now is: <%=strDate %>
	</p>

</body>
</html>