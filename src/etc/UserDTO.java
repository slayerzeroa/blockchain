package user;

public class UserDTO {
	
	    private String id;
	    private String pass1;
	    private String email;
	    private String tel;
	    private String stid;
	    private String maj;
	    private String na;
	    public UserDTO(String id, String pass1, String email, String tel, String stid, String maj, String na) {
	        this.id = id;
	        this.pass1 = pass1;
	        this.email = email;
	        this.tel = tel;
	        this.stid = stid;
	        this.maj = maj;
	        this.na = na;
	    }
	    public void setId(String id) {
	        this.id = id;
	    }

	    public void setPass1(String pass1) {
	        this.pass1 = pass1;
	    }

	    public void setEmail(String email) {
	        this.email = email;
	    }

	    public void setTel(String tel) {
	        this.tel = tel;
	    }

	    public void setStid(String stid) {
	        this.stid = stid;
	    }

	    public void setMaj(String maj) {
	        this.maj = maj;
	    }

	    public void setNa(String na) {
	        this.na = na;
	    }
	    public String getId() {
	        return id;
	    }

	    public String getPass1() {
	        return pass1;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public String getTel() {
	        return tel;
	    }

	    public String getStid() {
	        return stid;
	    }

	    public String getMaj() {
	        return maj;
	    }

	    public String getNa() {
	        return na;
	    }

}
