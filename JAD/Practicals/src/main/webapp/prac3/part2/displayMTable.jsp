<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pract3-Part2</title>

<style>

	table{
		border: 1px solid black;
	}
	
	td{
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
		int rows = 0;
		try{
			number = Integer.parseInt(request.getParameter("number"));
			rows = Integer.parseInt(request.getParameter("rows"));
		}catch(NumberFormatException exception){
			response.sendRedirect("customMTable.jsp?errCode=not_a_number");
		}
	%>
	
	<table>
		<tr>
		
			<td>
				<h1>
					Using out.print
				</h1>
			
				<table>
					<%for(int i = 1; i <=rows; i++){
						out.print("<tr><td>" + i + "x" + number + "</td><td>" + i*number+"</td></tr>");
					}%>
				</table>
			</td>
		
			<td>
				<h1>
					Using JSP expression tag
				</h1>
			
				<table>
					<%for(int i = 1; i <=rows; i++){%>
						<tr>
							<td><%=i%>x<%=number%></td>
							<td><%=i*number%></td>
						</tr>
					<%}%>
				</table>
			</td>
		
		</tr>
	</table>
	
</body>
</html>