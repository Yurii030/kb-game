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
			pstmt = conn.prepareStatement(sql); //�������� ��� ��Ŵ
			pstmt.setString(1, rid); //ù��° '?'�� �Ű������� �޾ƿ� id�� ������
			rs = pstmt.executeQuery();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -1; // �����ͺ��̽� ����
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
