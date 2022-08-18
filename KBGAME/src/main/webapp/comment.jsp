<%@page import="Comment.commentdto"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Comment.commentdao"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
 request.setCharacterEncoding("utf-8");
 %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<%
		String c_id = null;
		if(session.getAttribute("id") != null){
			c_id = (String)session.getAttribute("id");
		}
	%>
	<form action="commentInsert.jsp" method="post">	
		<input type="hidden" name="c_id" value="${commentdto.c_id}"/>
		<input type="text" name="comment" required placeholder="댓글을 작성하세요. "/>
		<input type="hidden" name="date_time" value="${commentdto.date_time}"/>
		<input type="submit" value="등록">
	</form>
	
	<table>
		<tr>
			<c:forEach items="${ commRead }" var="cdto">
				<td>
					${ cdto.comment }
					<span>${ cdto.c_id }. ${ cdto.date_time }</span>
					<span>${ cdto.like }</span>
				</td>
				<td>
					<input type="button" value="삭제하기" class="btn btn-default" onclick="Location.href='./commentDelete.jsp'"/>
				</td>
			</c:forEach>
		</tr>
	</table>
</body>
</html>