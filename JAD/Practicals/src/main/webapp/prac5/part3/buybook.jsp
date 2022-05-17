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

	<%if(request.getParameter("error") != null && request.getParameter("error").equals("invalidNumber")){%>
		<div class="error">
			<p>The value you entered are not numbers</p>
		</div>
	<%}%>

	<form action="add2Cart.jsp" method="POST">
		<label for="isbn">ISBN</label>
		<input type="text" name="isbn" />
		
		<br />
		
		<label for="title">Title</label>
		<input type="text" name="title" />
		
		<br />
		
		<label for="author">Author</label>
		<input type="text" name="author" />
		
		<br />
		
		<label for="publisher">Publisher</label>
		<input type="text" name="publisher" />
		
		<br />
		
		<label for="quantity">Quantity</label>
		<input type="text" name="quantity" />
		
		<br />
		
		<label for="price">Price: $</label>
		<input type="text" name="price" />
		
		<br />
		
		<button>Submit</button>
	</form>

</body>
</html>