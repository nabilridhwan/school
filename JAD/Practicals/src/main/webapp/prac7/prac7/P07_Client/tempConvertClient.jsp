<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String tcc_fah = "";
		String tcc_res = "";
		
		Double result = (Double) request.getAttribute("req_res");
		String fah = (String) request.getAttribute("req_fah");
		
		if(result != null && fah != null){
			tcc_fah = fah;
			tcc_res = result.toString();
		}
	%>
	
	<h3>Temperature Conversion App</h3>
	
	<form action="<%=request.getContextPath()%>/FtoCservlet">
		Fahrenheit: <input type="text" name="fah" value="<%=tcc_fah %>" />
		
		<button>Submit</button>
	</form>
	
	<h3>
		Conversion Result: <input type="text" name="result" value="<%=tcc_res %>"> degree celsius
	</h3>
</body>
</html>