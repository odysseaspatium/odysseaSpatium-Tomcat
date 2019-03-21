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

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import dao.DAOFactory;

/**
 * Servlet implementation class Bridge
 */
@WebServlet("/Bridge")
public class Bridge extends HttpServlet {
	private String URL;
	private static final long serialVersionUID = 1L;
	private String  URL_TOMCAT;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Bridge() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    public void init(ServletConfig config) throws ServletException {
		this.URL = ( (String) config.getServletContext().getAttribute( "URL" ) );
		this.URL_TOMCAT = ( (String) config.getServletContext().getAttribute( "URL_TOMCAT" ) );
	}
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Content-Type", "application/json");
		ObjectMapper mapper = new ObjectMapper();
		
		JsonNode jsonIn = mapper.readTree(request.getReader());
		//creation de la route
		URL obj = new URL(URL+"/"+jsonIn.get("route").asText());
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setDoOutput(true);
		con.setRequestMethod("POST");
		con.setRequestProperty("Content-Type", "application/json");
		
		OutputStreamWriter writer = new OutputStreamWriter(con.getOutputStream());
		writer.write(jsonIn.toString());
		
		writer.close();
		
		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		JsonNode jsonOut = mapper.readTree(in);
		String dossier_voyage= null,dossier_annonce=null;
			for(int index=0;index<jsonOut.size();index++) {
				try {
					if(jsonOut.get(index).get("lien_photos_voyage") != null) {
						dossier_voyage=jsonOut.get(index).get("lien_photos_voyage").toString();
						ajoutArray(dossier_voyage,"lien_photos_voyage",mapper,jsonOut,index);
					}
					if(jsonOut.get(index).get("lien_photo_annonce") != null) {
						dossier_annonce = jsonOut.get(index).get("lien_photo_annonce").toString();
						ajoutArray(dossier_annonce,"lien_photo_annonce",mapper,jsonOut,index);
					}
				}catch(Exception e) {
					
				}
			}
				
		
		PrintWriter out = response.getWriter();
		out.write(jsonOut.toString());
		out.close();
		
	}
	public void ajoutArray(String dossier,String tableau, ObjectMapper mapper, JsonNode jsonOut, int index) {
	
		if(dossier != null) {
        	List<String> listeFile = new ArrayList<String>();
	        File directory = new File(dossier.replace("\"", ""));
	        File[] fList = directory.listFiles();

	        for (File file : fList){
	            if (file.isFile()){
	           	if(tableau.contains("annonce")) {
	            		listeFile.add(URL_TOMCAT+"/voyages/"+jsonOut.get(index).findValue("id_voyage").toString()+"/annonce/"+file.getName().toString());
	            	}
	            	else {
		            	if(tableau.contains("voyage")) {
		            		listeFile.add(URL_TOMCAT+"/voyages/"+jsonOut.get(index).findValue("id_voyage").toString()+"/"+file.getName().toString());
		            	}
	            	}
	            }
	        }

	        ArrayNode array = mapper.valueToTree(listeFile);
	        ((ObjectNode) jsonOut.get(index)).putArray(tableau).addAll(array);	
		}
	}
}
