<%@page import="dbaccess.UserDetails"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<h5><%=request.getRequestURI() %></h5>
	<h2>List All Users</h2>
	
	<form action="<%=request.getContextPath() %>/GetUserList">
		<button>List All Users</button>
	</form>
	
	<%
	
		String error = (String) request.getAttribute("err");
		if(error != null && error.equals("NotFound")){
			out.print("ERROR: Users not found!");
		}
		
		ArrayList<UserDetails> uAL = (ArrayList<UserDetails>) request.getAttribute("userArray");
		
		if(uAL != null){
			for(UserDetails user : uAL){
				out.println("Userid: " + user.getUserId());
				out.println("Age: " + user.getUserId());
				out.print("Gender: " + user.getGender() + "<br>");
			}
		}
	%>
	
	<h2>Get User by User ID</h2>
	
	<form action="<%=request.getContextPath() %>/FindUser">
		<label>Enter User ID</label>
		<input type="text" name="uid" />
		
		<button>Submit</button>
	</form>
	
	<%
		
		UserDetails user = (UserDetails) request.getAttribute("user");
		
		if(user != null){
			out.println("Userid: " + user.getUserId());
			out.println("Age: " + user.getUserId());
			out.print("Gender: " + user.getGender() + "<br>");
		}
		%>
		
		<h2>Create New User</h2>
	
	<form action="<%=request.getContextPath() %>/CreateUser">
		<label>Enter User ID</label>
		<input type="text" name="uid" />
		
		<label>Enter User Age</label>
		<input type="number" name="age" />
		
		<label>Enter User Gender</label>
		<input type="text" name="gender" />
		
		<button>Submit</button>
	</form>
	
	<%
		
		Integer affectedRows = (Integer) request.getAttribute("rowsAffected");
		
		if(affectedRows != null){
			out.println("record affected: " + affectedRows);

		}
		%>

</body>
</html>