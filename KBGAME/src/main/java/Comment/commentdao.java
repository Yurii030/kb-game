package Comment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class commentdao {
	private Connection conn; 
	private PreparedStatement pstmt; 
	private ResultSet rs; 
	
	public commentdao(){
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
	
	public ArrayList<commentdto> commRead(int num){
		ArrayList<commentdto> cdto = new ArrayList<>();
		String sql = "SELECT * FROM comment WHERE num =" + num;
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				commentdto c_dto = new commentdto();
				c_dto.setC_id(rs.getString("c_id"));
				c_dto.setComment(rs.getString("comment"));
				c_dto.setLike(rs.getInt("like"));
				c_dto.setDate_time(rs.getString("date_time"));
				cdto.add(c_dto);
			}
		}catch (Exception e){
			e.printStackTrace();
		} 
		return cdto;
	}
	
	public int commWrite(commentdto write) {
		String sql = "INSERT INTO comment(c_id, comment, date_time) VALUES (?, ?, now())";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, write.getC_id());
			pstmt.setString(2, write.getComment());
			pstmt.setString(3, write.getDate_time());
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
	
	public void commLike(commentdto num) {
		String sql = "UPDATE comment SET like = like+1 where num"+num;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.executeUpdate();
			conn.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void commDelete(int num, String c_id) {
		String sql = "DELETE FROM comment WHERE num = ? AND c_id = ?";
		try {
			pstmt = conn.prepareStatement(sql);                                                  
			pstmt.setInt(1, num);
			pstmt.setString(2, c_id);
			pstmt.executeUpdate();
			conn.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
}
