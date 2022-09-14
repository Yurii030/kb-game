package login;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import login.logindto;

public class logindao {
	private Connection conn; //�ڹٿ� DB ����
	private PreparedStatement pstmt; //������ ��� �� ����
	private ResultSet rs; //����� �޾ƿ���
	
	//�⺻ ������
	//DAO�� ����Ǹ� �ڵ����� �����Ǵ� �κ�
	//�޼ҵ帶�� �ݺ��Ǵ� �ڵ带 �̰��� ������	�ڵ尡 ����ȭ��
	
	public logindao() {
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
	
	public int login(String id, String pw) {
		String sql = "SELECT pw FROM user where id = ?";
		
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
		String sql = "INSERT INTO user(id, pw, name, email) VALUES (?, ?, ?, ?)";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, user.getId());
			pstmt.setString(2, user.getPw());
			pstmt.setString(3, user.getName());
			pstmt.setString(4, user.getEmail());
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
}
