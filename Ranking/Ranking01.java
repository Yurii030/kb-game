import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
 
public class Ranking01 {
	
	private Connection conn; //자바와 DB 연결
	private PreparedStatement pstmt; //쿼리문 대기 및 설정
	private ResultSet rs; //결과값 받아오기
	
	public void Ranking() {
		try {
			String dbURL = "jdbc:mariadb://kbgame01.cafe24.com:3306/kbgame01";
			String dbID  = "kbgame01";
			String dbPassword = "kbgameftp!";
			Class.forName("org.mariadb.jdbc.Driver");
			conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
		}catch (Exception e){
			e.printStackTrace();
		}
	}
	
	public int Ranking(String id, String pw) {
		
		String sql = "SELECT r_id, my_score, @RANK := @RANK + 1 AS total_rank FROM ranking,\r\n"
				+ "(SELECT @RANK := 0) R\r\n"
				+ "ORDER BY total_rank DESC; ";
		
		try {
			pstmt = conn.prepareStatement(sql); //쿼리문을 대기 시킴
			pstmt.setString(1, id); //첫번째 '?'에 매개변수로 받아온 id를 대입함
			rs = pstmt.executeQuery();
			if (rs.next()) {
				if(rs.getString(1).equals(pw)) {
					return 1; // 로그인 성공
				}
				else
					return 0; // 비밀번호 불일치 
			}
			return -1;	// 아이디가 없음
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // 데이터베이스 오류
	}
	
}