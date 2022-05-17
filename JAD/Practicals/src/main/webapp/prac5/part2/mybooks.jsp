<%@page import="java.util.ArrayList"%>
<%@page import="books.Book"%>
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
	Book bookOne = new Book("0670074934", "Diary of a Wimpy Kid: Rodrick Rules", "Jeff Kinney", "Viking", 3, 26);
	Book bookTwo = new Book("0670074935", "Diary of a Wimpy Kid: Rodrick Does Not Rule", "Jeff Kinney", "Viking", 6, 23);
	Book bookThree = new Book("0670074936", "Diary of a Wimpy Kid: Jeff Rules", "Jeff Kinney", "Viking", 10, 10);
	Book bookFour = new Book("0670074937", "Diary of a Wimpy Kid: Jeff Does Not Rule!", "Jeff Kinney", "Viking", 12, 15);
	Book bookFive = new Book("0670074938", "Diary of a Wimpy Kid: The End", "Jeff Kinney", "Viking", 4, 9);
	
	ArrayList<Book> bookArrayList = new ArrayList<Book>();
	
	bookArrayList.add(bookOne);
	bookArrayList.add(bookTwo);
	bookArrayList.add(bookThree);
	bookArrayList.add(bookFour);
	bookArrayList.add(bookFive);
%>

	<%for(Book b : bookArrayList){%>
		<div class="book">
			<h1><%=b.getTitle() %></h1>
			<h2><%=b.getAuthor()%></h2>
			<h3><%=b.getPublisher()%></h3>
			<p><%=b.getISBN()%></p>
			<p><%=b.getQuantity()%></p>
			<p><%=b.getPrice()%></p>
		</div>
	<%}%>

</body>
</html>