package servlets;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Servlet implementation class Bridge
 */
@WebServlet("/Bridge")
public class Bridge extends HttpServlet {
	private static final String URL="http://localhost:4000";
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Bridge() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		ObjectMapper mapper = new ObjectMapper();
		
		JsonNode jsonIn = mapper.readTree(request.getReader());
		System.out.println(jsonIn.get("route").toString());
		//creation de la route
		URL obj = new URL(URL+"/"+jsonIn.get("route").toString());
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setDoOutput(true);
		con.setRequestMethod("POST");
		
		OutputStreamWriter writer = new OutputStreamWriter(con.getOutputStream());
		writer.write(jsonIn.toString());
		
		writer.close();
		
		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		JsonNode jsonOut = mapper.readTree(in);
		String dossier = jsonOut.get("").toString();
		if(dossier != null) {
	        File directory = new File(dossier);
	        List<String> listeFile = new ArrayList<String>();
	        //get all the files from a directory

	        File[] fList = directory.listFiles();

	        for (File file : fList){
	            if (file.isFile()){
	            	listeFile.add(file.getName());
	            }
	        }
	        ArrayNode array = mapper.valueToTree(listeFile);
	        ((ObjectNode) jsonOut).putArray("fichiers").addAll(array);
	        System.out.println(jsonOut.toString());
		}
		PrintWriter out = response.getWriter();
		out.write(jsonOut.toString());
		
	}

}
