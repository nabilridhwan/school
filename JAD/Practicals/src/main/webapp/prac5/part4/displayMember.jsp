<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="ISO-8859-1" />
        <title>Pract3-Part4</title>
    </head>
    <body>
        <%@ include file = "header.html" %> <% String loginid = (String)
        session.getAttribute("sessUserID");; String userRole = (String)
        session.getAttribute("sessUserRole");; %> <% if(loginid == null){
        response.sendRedirect("login.jsp?errCode=invalidLogin"); } %>

        <h1>pract3-part3-displayMember.jsp</h1>

        <p>Welcome!.. <%=loginid %></p>

        <p>Your user role is: <%=userRole%></p>

        <button onclick="window.location = 'login.jsp'">Home</button>

        <%@ include file = "footer.html" %>
    </body>
</html>
cfc
