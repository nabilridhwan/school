package dbaccess;

public class UserDetails {
	String userid;
	int age;
	String gender;
	
	public void setUserId(String inUserId) {
		userid = inUserId;
	}
	
	public void setAge(int inAge) {
		age = inAge;
	}
	
	public void setGender(String inGender) {
		gender = inGender;
	}
	
	public String getUserId() {
		return userid;
	}
	
	public int getAge() {
		return age;
	}
	
	public String getGender() {
		return gender;
	}
}
