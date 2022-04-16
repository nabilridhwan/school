<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<script>
/* 
 * 
 Author: Nabil Ridhwanshah Bin Rosli (P2007421)
 Date: 16/4/2022
 Description: ST0510/JAD week 1 submission 
 */
let studentID = prompt("Enter Student ID:")
let name = prompt("Enter your Name:")

if(name.length > 0 && studentID.length > 0){
	alert("Good Morning!.. " + name + " ("+ studentID + ")");	
}
</script>
</body>
</html>