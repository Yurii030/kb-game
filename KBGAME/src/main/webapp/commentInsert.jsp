<%@page import="Comment.commentdto"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="Comment.commentdao"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%> 
<%
 request.setCharacterEncoding("utf-8");
 %> 
<jsp:useBean id="write" class="Comment.commentdto" scope="page">
<jsp:setProperty name="write" property="c_id" /> 
<jsp:setProperty name="write" property="comment" />
<jsp:setProperty name="write" property="date_time" />
</jsp:useBean>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<%
		// 현재 세션 상태를 체크한다
		String c_id = null;
		if(session.getAttribute("id") != null){
			c_id = (String)session.getAttribute("id");
		}
		// 로그인을 한 사람만 글을 쓸 수 있도록 코드를 수정
		if(c_id == null){
			PrintWriter script = response.getWriter();
			script.println("<script>");
			script.println("alert('로그인을 하세요')");
			script.println("location.href='login.jsp'");
			script.println("</script>");
		}else{
			// 입력이 안 된 부분이 있는지 체크
			if(write.getComment() == null){
				PrintWriter script = response.getWriter();
				script.println("<script>");
				script.println("alert('입력이 안 된 사항이 있습니다')");
				script.println("history.back()");
				script.println("</script>");
			}else{
				// 정상적으로 입력이 되었다면 글쓰기 로직을 수행
				commentdao DAO = new commentdao(); 
				int result = DAO.commWrite(write);
				// 데이터베이스 오류인 경우
				if(result == -1){
					PrintWriter script = response.getWriter();
					script.println("<script>");
					script.println("alert('글쓰기에 실패했습니다')");
					script.println("history.back()");
					script.println("</script>");
				// 글쓰기가 정상적으로 실행되면 알림창을 띄우고 게시판 메인으로 이동
				}else {
					PrintWriter script = response.getWriter();
					script.println("<script>");
					script.println("alert('글쓰기 성공')");
					script.println("location.href='comment.jsp'");
					script.println("</script>");
				}
			}
		}
	
	%>

</body>
</html>