package Login;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class logindao {
	private Connection conn; //�ڹٿ� DB ����
	private PreparedStatement pstmt; //������ ��� �� ����
	private ResultSet rs; //����� �޾ƿ���
	
	
	//�⺻ ������
	//DAO�� ����Ǹ� �ڵ����� �����Ǵ� �κ�
	//�޼ҵ帶�� �ݺ��Ǵ� �ڵ带 �̰��� ������	�ڵ尡 ����ȭ��
	
	public logindao() {
		try {
			String dbURL = "jdbc:mariadb://kbgame02.cigkxpiogstc.ap-northeast-2.rds.amazonaws.com:3306/kbgame";
			String dbID = "admin";
			String dbPassword = "25802580";
			Class.forName("org.mariadb.jdbc.Driver");
			conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
		}catch (Exception e){
			e.printStackTrace();
		}
	}
	
	public int login(String id, String pw) {
		String sql = "SELECT password FROM login where id = ?";
		
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
	
	public int join(logindto user) {
		String sql = "INSERT INTO login(name, id, password, email) VALUES (?, ?, ?, ?)";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, user.getName());
			pstmt.setString(2, user.getId());
			pstmt.setString(3, user.getPw());
			pstmt.setString(4, user.getEmail());
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
}
