package rank;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import login.logindto;

public class rankdao {
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	public rankdao() {
		try {
			String dbURL = "jdbc:mariadb://kbgame01.cafe24.com:3306/kbgame01";
			String dbID = "kbgame01";
			String dbPassword = "kbgameftp!";
			Class.forName("org.mariadb.jdbc.Driver");
			conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
		}catch (Exception e){
			e.printStackTrace();
		}
	}
	
	public int totalrank(String rid) {
		String sql = "SELECT r_id, my_score, @RANK := @RANK + 1 AS total_rank FROM rank,\r\n"
				+ "(SELECT @RANK := 0) R\r\n"
				+ "ORDER BY total_rank DESC; ";
		
		try {
			pstmt = conn.prepareStatement(sql); //쿼리문을 대기 시킴
			pstmt.setString(1, rid); //첫번째 '?'에 매개변수로 받아온 id를 대입함
			rs = pstmt.executeQuery();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -1; // 데이터베이스 오류
	}
	
	public int myscore(rankdto user) {
		String sql = "INSERT INTO rank(my_score) VALUES (?)";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, user.getMyrank());
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
}
