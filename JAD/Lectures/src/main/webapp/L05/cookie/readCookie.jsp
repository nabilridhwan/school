<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>

<%
    Cookie[] mycookies = request.getCookies();
%>

<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

    <table border="1">
        <% for(int i=0;i<mycookies.length;i++) { %>
             <tr>
                 <td><%= mycookies[i].getName() %></td>
                 <td><%= mycookies[i].getValue() %></td>
                 <td><%= mycookies[i].getMaxAge() %></td>
                 <td><%= mycookies[i].getPath() %></td>
             </tr>
       <% } %>
    </table>


</body>
</html>