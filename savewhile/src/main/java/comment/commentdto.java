package comment;

import comment.commentdto;

public class commentdto {
	public static int num;
	public static String cid;
	private String comment;
	private int like;
	public static String date_time;
	
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		commentdto.num = num;
	}
	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		commentdto.cid = cid;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public int getLike() {
		return like;
	}
	public void setLike(int like) {
		this.like = like;
	}
	public String getDate_time() {
		return date_time;
	}
	public void setDate_time(String date_time) {
		commentdto.date_time = date_time;
	}
}
