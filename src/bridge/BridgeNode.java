package bridge;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class BridgeNode {
	private static final String URL="http://localhost:3000";
	
	public static StringBuffer creerPanier() throws IOException {
		URL obj = new URL(URL+"/creerPanier");
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setRequestMethod("GET");
		return new StringBuffer();
		
	}
}
