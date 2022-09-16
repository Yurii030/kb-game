<%@page import="comment.commentdto"%>
<%@page import="java.util.ArrayList"%>
<%@page import="comment.commentdao"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
</head>
<body>
	<%
		String c_id = null;
		if(session.getAttribute("id") != null){
			c_id = (String)session.getAttribute("id");
		}
	%>
	
	<table class="table table-striped" style="text-align: center; border: 1px solid #dddddd">
		<form method="post" action="commentInsert.jsp">
			<tr>
				<td style="border-bottom:none;" valign="middle"><input type="hidden" name="cid" value="<%=c_id%>"><br><br><%=c_id%></td>
				<td><input type="text" style="height:100px;" class="form-control" placeholder="상대방을 존중하는 댓글을 남깁시다." name = "comment"></td>
				<td><br><br><input type="submit" class="btn-primary pull" value="댓글 작성"></td>
			</tr>
		</form>
	</table>
</body>
</html>