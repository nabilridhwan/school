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
			String errorMessage = request.getParameter("error");
			String success = request.getParameter("success");
		%>

	
		<%if( errorMessage != null){%>
			<div class="error">
				<%=errorMessage %>
			</div>
		<%}%>
		
		<%if( success != null){%>
			<div class="success">
				Updated: <%=success %>
			</div>
		<%}%>
	

	<form action="./preparedStatement.jsp" method="POST">
		<input type="text" name="name" placeholder="Person's Name" />
		<input type="text" name="password" placeholder="Password" />
		
		<button>Submit</button>
	</form>

</body>
</html>