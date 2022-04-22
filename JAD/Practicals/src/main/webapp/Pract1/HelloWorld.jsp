<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>


</head>
<body>



<%
out.println("Hello world");
%>

<script>

/*
 * Author: Nabil Ridhwanshah Bin Rosli (P2007421)
 * Date: 21/4/2022
 Description: ST0510/JAD Week 1 submission
 */
 
let studentID = prompt("Enter your Student ID:");
let name = prompt("Enter your Name:");

let greeting = "Good morning"

if(new Date().getHours() >= 12){
	greeting = "Good Afternoon"
}

if(studentID && name){
	alert(greeting + "!.. " + name + " (p"+studentID+")")
}

</script>

</body>
</html>