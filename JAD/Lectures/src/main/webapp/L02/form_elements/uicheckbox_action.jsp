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
	
		// getParameter gets the first item of the array, even with the array
	    String chkbox1 = request.getParameter("checkbox1");
		
		// Since it is a checkbox, to get the whole array, use getParameterValues
	    String[] checkbox1 = request.getParameterValues("checkbox1");
	%>

    Submit Button pressed is: <%= buttonpressed %> <br>
    First Selected item is: <%= chkbox1 %> <br>
    Selected Items are:<br>
    
    
    <p>Checkbox values:</p>
    <%if(checkbox1 != null){ %>
        <% for(int i=0;i<checkbox1.length;i++) { %>
	    	<%= checkbox1[i] %><br>
	    <% } %>
    <%}else{ %>
    	You have not selected any checkboxes!
    <% }%>



</body>
</html>