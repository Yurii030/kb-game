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
		<p>�� ���� �Է�</p><input type="text" placeholder="����" name="my_score"><br>
	</form>
	<p>�� ��ũ <%=myrank%></p>
	<p>��ü ��ũ <%=totalrank %></p>
</body>
</html>