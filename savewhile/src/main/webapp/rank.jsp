<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="rank.rankdto"%>
<%@ page import="rank.rankdao"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<form action="rankAction.jsp" method="POST">
		<p>내 점수 입력</p><input type="text" placeholder="점수" name="my_score"><br>
	</form>
	<p>내 랭크 <%=myrank%></p>
	<p>전체 랭크 <%=totalrank %></p>
</body>
</html>