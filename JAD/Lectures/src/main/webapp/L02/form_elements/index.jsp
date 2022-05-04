<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Insert title here</title>

	<style>
		.debugBox{
			border: 1px solid red;
			padding: 1em;
		}
	</style>
</head>
<body>

	<div class="debugBox">
		<form action="uiradio_action.jsp" name="form1" method="post">
	        <input type="radio" name="radio1" value="circle">circle<br>
	        <input type="radio" name="radio1" value="square">square<br>
	        <input type="radio" name="radio1" value="rectangle">rectangle<br>
	        <input type="radio" name="radio1" value="oval">oval<br>
	        <input type="submit" name="submit" value="Button1">
	        <input type="submit" name="submit" value="Button2">
	        <input type="submit" name="submit" value="Button3">
	        <input type="Reset" value="Clear">
	    </form>
	</div>
	


	<div class="debugBox">
	    <form action="uiselect_action.jsp" name="form1" method="post">
		        <select  name="list1" size="5">
		            <option value="apple" selected>apple</option>
		            <option value="orange">orange</option>
		            <option value="banana">banana</option>
		            <option value="papaya">papaya</option>
		            <option value="lemon">durian</option>
		            <option value="watermelon">watermelon</option>
		        </select><br>
		        <input type="submit" name="submit" value="Button1">
		        <input type="submit" name="submit" value="Button2">
		        <input type="submit" name="submit" value="Button3">
		        <input type="Reset" value="Clear">
		</form>
	</div>
	
	<div class="debugBox">
		<form action="uiradio_action.jsp" name="form1" method="post">
	        <input type="radio" name="radio1" value="circle">circle<br>
	        <input type="radio" name="radio1" value="square">square<br>
	        <input type="radio" name="radio1" value="rectangle">rectangle<br>
	        <input type="radio" name="radio1" value="oval">oval<br>
	        <input type="submit" name="submit" value="Button1">
	        <input type="submit" name="submit" value="Button2">
	        <input type="submit" name="submit" value="Button3">
	        <input type="Reset" value="Clear">
	    </form>
	</div>
	
	<div class="debugBox">
	    <form action="uicheckbox_action.jsp" name="form1" method="post">
	       <input type="checkbox" name="checkbox1" value="circle" checked>circle<br>
	       <input type="checkbox" name="checkbox1" value="square">square<br>
	       <input type="checkbox" name="checkbox1" value="rectangle">rectangle<br>
	       <input type="checkbox" name="checkbox1" value="oval">oval<br>
	       <input type="submit" name="submit" value="Button1">
	       <input type="submit" name="submit" value="Button2">
	       <input type="submit" name="submit" value="Button3">
	       <input type="Reset" value="Clear">
	    </form>			
	</div>
	
	
	<div class="debugBox">
	
		    <form action="uimultiselect_action.jsp" name="form1" method="post">
		        <select  name="mlist1" size="4" multiple>
		            <option value="ICT" selected>ICT</option>
		            <option value="CLS">CLS</option>
		            <option value="EEE" selected>EEE</option>
		            <option value="BEM">BEM</option>
		        </select><br>
		        <input type="submit" name="submit" value="Button1">
		        <input type="submit" name="submit" value="Button2">
		        <input type="submit" name="submit" value="Button3">
		        <input type="Reset" value="Clear">
		    </form>
		
	</div>

	

</body>
</html>