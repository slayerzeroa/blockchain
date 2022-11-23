package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Test {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		  try {
		         Class.forName("com.mysql.jdbc.Driver");   
		      } catch (ClassNotFoundException ex) {
		         ex.printStackTrace();
		      }   
		   
		   
		   Connection conn = null;
		   String url = "jdbc:mysql://localhost:3306/parandb";      
		   String user = "jihyun";
		   String passwd = "password";

		      // DBMS와의 연결 생성
		      try {
		         conn = DriverManager.getConnection(url, user, passwd);
		         System.out.println("성공");
		      } catch (SQLException e) {
		         e.printStackTrace();
		      }    
		      
		   }

}


// 재코밋 eclipse랑 mysql 연동할 때 eclipse안에 있는 pom.xml에 
<dependency>   

		  	<groupId>mysql</groupId>   
		
		    	<artifactId>mysql-connector-java</artifactId>
		
		    	<version>5.1.45</version>

    </dependency>
 //이 코드 추가해야해요
