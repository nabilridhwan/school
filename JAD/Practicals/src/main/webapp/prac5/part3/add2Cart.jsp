<%@page import="books.Book"%>
<%@page import="java.util.ArrayList"%>
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
	ArrayList<Book> book = new ArrayList<Book>();

	if(session.getAttribute("book") != null){
		book = (ArrayList<Book>) session.getAttribute("book");
	}

	String isbn = request.getParameter("isbn");
	String title = request.getParameter("title");
	String author = request.getParameter("author");
	String publisher = request.getParameter("publisher");
	String quantity = request.getParameter("quantity");
	String price = request.getParameter("price");
	
	int quantityInt = 0;
	int priceInt = 0;
	
	try{
		quantityInt = Integer.parseInt(quantity);
		priceInt = Integer.parseInt(price);
	}catch(NumberFormatException nfe){
		response.sendRedirect("buybook.jsp?error=invalidNumber");
		return;
	}
	
	// Add to the ArrayList
	book.add(new Book(isbn, title, author, publisher, quantityInt, priceInt));
	
	// Store it in session
	session.setAttribute("book", book);
	
	// Redirect
	response.sendRedirect("displayCart.jsp");
	
%>

</body>
</html>