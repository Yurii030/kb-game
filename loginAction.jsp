<!-- 로그인 백엔드 파일 href 수정해야함 -->

<%@page import="login.logindto"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="login.logindao"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<jsp:useBean id="user" class="login.logindto" scope="page">
<jsp:setProperty name="user" property="id" /> 
<jsp:setProperty name="user" property="pw" />
</jsp:useBean>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<%
		// 현재 세션 상태를 체크
		String userid = null;
		if(session.getAttribute("id") != null){
			userid = (String)session.getAttribute("id");
		}
		// 이미 로그인했으면 다시 로그인을 할 수 없게 함
		if(userid != null){
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('이미 로그인이 되어 있습니다')");
			script.println("location.href='index.html'");
			script.println("</script>");
		}
		logindao DAO = new logindao();
		int result = DAO.login(user.getId(), user.getPw());
		if(result == 1){
			// 로그인에 성공하면 세션을 부여
			session.setAttribute("id", user.getId());
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('로그인 성공')");
			script.println("location.href='maingame.js'");
			script.println("</script>");
		}else if(result == 0){
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('비밀번호가 틀립니다')");
			script.println("history.back()");
			script.println("</script>");
		}else if(result == -1){
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('존재하지 않는 아이디입니다')");
			script.println("history.back()");
			script.println("</script>");
		}else if(result == -2){
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('데이터베이스 오류입니다')");
			script.println("history.back()");
			script.println("</script>");
		}
	%>
</body>
</html>