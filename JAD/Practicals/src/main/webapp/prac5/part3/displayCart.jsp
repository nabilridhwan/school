<%@page import="books.Book"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<link rel="stylesheet" type="text/css" href="../static/main.css" />
</head>
<body>

	<%
		String test = "testing";
		// Get books
		ArrayList<Book> books = new ArrayList<Book>();
		if(session.getAttribute("book") != null){
			
			books = (ArrayList<Book>) session.getAttribute("book");
		}
	%>

	
	<%for(Book b : books){%>
		<div class="book">
			<h1><%=b.getTitle() %></h1>
			<h2><%=b.getAuthor()%></h2>
			<h3><%=b.getPublisher()%></h3>
			<p><%=b.getISBN()%></p>
			<p><%=b.getQuantity()%></p>
			<p><%=b.getPrice()%></p>
		</div>
	<%}%>
	

	<a href="buybook.jsp">Buy More Books</a>

</body>
</html>