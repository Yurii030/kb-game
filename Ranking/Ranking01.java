import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
 
public class Ranking01 {
	
	private Connection conn; //�ڹٿ� DB ����
	private PreparedStatement pstmt; //������ ��� �� ����
	private ResultSet rs; //����� �޾ƿ���
	
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
			pstmt = conn.prepareStatement(sql); //�������� ��� ��Ŵ
			pstmt.setString(1, id); //ù��° '?'�� �Ű������� �޾ƿ� id�� ������
			rs = pstmt.executeQuery();
			if (rs.next()) {
				if(rs.getString(1).equals(pw)) {
					return 1; // �α��� ����
				}
				else
					return 0; // ��й�ȣ ����ġ 
			}
			return -1;	// ���̵� ����
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // �����ͺ��̽� ����
	}
	
}