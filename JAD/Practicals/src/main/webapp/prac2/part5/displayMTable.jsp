<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<style>

	table{
		border: 1px solid black;
	}
	
	td{
		text-align: center;
		border: 1px solid black;
	}
</style>
</head>
<body>

	<%-- 
	  - Author(s): Nabil Ridhwanshah Bin Rosli
	  - Admin No: P2007421
	  - Date: 25/4/2022
	  - Description: ST0510 JAD Practical 2
	  --%>

	<%
		int number = 0;
		try{
			number = Integer.parseInt(request.getParameter("number"));
		}catch(NumberFormatException exception){
			response.sendRedirect("customMTable.jsp?errCode=not_a_number");
		}
	%>
	
	<h1>
		Multiply by <%= number %>
	</h1>

	<table>
		<%for(int i = 1; i <=10; i++){%>
			<tr>
				<td><%=i%>x<%=number%></td>
				<td><%=i*number%></td>
			</tr>
		<%}%>
	</table>
	
	<a href="customMTable.jsp">
		Back
	</a>
</body>
</html>