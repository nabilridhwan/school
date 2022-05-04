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
		    String sel1 = request.getParameter("mlist1");
		    String[] mlist1 = request.getParameterValues("mlist1");
		%>

	
	    Submit Button pressed is: <%= buttonpressed %><br>
	    First Selected item is: <%= sel1 %><br>
	    Selected Items are:<br>
	    
	    <% if(mlist1 != null){%>
		    <% for(int i=0;i<mlist1.length;i++) { %>
		    <%= mlist1[i] %><br>
		    <% } %>
	    <% }else{ %>
	    	You have selected nothing!
	    <% } %>



</body>
</html>