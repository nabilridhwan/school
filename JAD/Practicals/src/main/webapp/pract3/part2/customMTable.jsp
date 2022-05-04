<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pract3-Part2</title>
</head>
<body>

	<%-- 
	  - Author(s): Nabil Ridhwanshah Bin Rosli
	  - Admin No: P2007421
	  - Date: 25/4/2022
	  - Description: ST0510 JAD Practical 2
	  --%>

	 <% if(request.getParameter("errCode") != null && request.getParameter("errCode").equals("not_a_number")){
		 out.println("You did not enter a number");
	 } %>

	<form action="./displayMTable.jsp">
		<label for="number">Enter number:</label>
		<input type="number" name="number">
		
		<br>
		
		<label for="number">Number of rows to display</label>
		<input type="number" name="rows">
		
		<button>Submit</button>
	</form>

</body>
</html>