<!-- 회원가입 백엔드 페이지 href 수정해야함 -->

<%@page import="login.logindto"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="login.logindao"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<jsp:useBean id="user" class="login.logindto" scope="page" >
<jsp:setProperty name="user" property="name" /> 
<jsp:setProperty name="user" property="id" /> 
<jsp:setProperty name="user" property="pw" />
<jsp:setProperty name="user" property="email" />
</jsp:useBean>

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>LOGIN</title>
</head>
<body>
	<%
		String userid = null;
		if(session.getAttribute("id") != null){
			userid = (String) session.getAttribute("id");
		}
			
		if(userid != null){
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('이미 로그인 되어있습니다')");
			script.println("location.href='index.html'");
			script.println("</script>");
		}
		if(user.getName()==null || user.getId() == null || user.getPw() == null || user.getEmail() == null){
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('입력 안된 정보가 있습니다')");
			script.println("history.back()");
			script.println("</script>");
		}else {
			login.logindao DAO = new login.logindao();
			int result = DAO.join(user);
			if(result == -1){
				PrintWriter script = response.getWriter();
				script.println("<script>");
				script.println("alert('이미 존재하는 아이디입니다')");
				script.println("history.back()");
				script.println("</script>");
			}
			else{
				PrintWriter script = response.getWriter();
				script.println("<script>");
				script.println("alert('회원가입 성공')");
				script.println("location.href='login-page.html'");
				script.println("</script>");
			}
		}
	%>
</body>
</html>