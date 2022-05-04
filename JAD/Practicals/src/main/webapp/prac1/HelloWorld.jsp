<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>


</head>
<body>

	<%-- 
	  - Author(s): Nabil Ridhwanshah Bin Rosli
	  - Admin No: P2007421
	  - Date: 28/4/2022
	  - Description: ST0510 JAD Practical 2
	  --%>
		
	<script>
	
				 let studentID = prompt("Enter your Student ID:");
					let name = prompt("Enter your Name:");
					
					let greeting = "Good Morning"
					
					if(new Date().getHours() >= 12){
						greeting = "Good Afternoon"
					}
					
					if(studentID && name){
						alert(greeting + "!.. " + name + " (P"+studentID+")")
					}
	
	
	</script>
	
	<%out.println("<script>document.write(greeting + '!.. ' + name + ' (P'+studentID+')')</script>"); %>

</body>
</html>