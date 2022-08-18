<%@page import="Comment.commentdao"%>
<%@page import="java.io.PrintWriter"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
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
	
	// 3. 결과 후 처리
	if (c_id == null) {
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('로그인을 하세요')");
		script.println("location.href='login.jsp'");
		script.println("</script>");
	} else {
		commentdao DAO = new commentdao();
		int result = DAO.commDelete(num, c_id);
		PrintWriter script = response.getWriter();
		script.println("<script>");
		script.println("alert('삭제 성공')");
		script.println("location.href='bbs.jsp'");
		script.println("</script>");	
	}
	%>
</body>
</html>