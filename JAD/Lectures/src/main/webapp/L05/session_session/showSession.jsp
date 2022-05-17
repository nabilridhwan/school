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

    <%
    	// Retrieve name session
    	String sessionName = (String) session.getAttribute("name");
    %>
    
    <%if(sessionName == null){%>
    	<p>
	    	Session not found? Did you invalidate it?
	    </p>

		<%--Forces to go back to the index.jsp file --%>
	    <button onclick="window.location = 'index.jsp'">
	    	Go back
	    </button>
    <%}else{%>
    	<p>
	    	From session: <%= sessionName %>
	    </p>
	    
	    <p>
	    	*Try refreshing this page, it will still stay (for 10 mins because as defined in web.xml in WEB-INF folder) because its part of the session.
	    </p>
	    
	    <h1>
	    	Invalidate Session
	    </h1>
	    
	    <form method="GET" action="invalidateSession.jsp">
	    	<button>Invalidate this session</button>
	    </form>
    <%}%>

</body>
</html>