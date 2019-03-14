package servlets;

import java.io.Console;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import dao.DAOFactory;
import dao.UtilisateurDao;
import models.Utilisateur;
import dao.DAOUtilitaire;
/**
 * Servlet implementation class Connexion
 */
@WebServlet("/Connexion")
public class Connexion extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static final String CONF_DAO_FACTORY = "daofactory";

	private UtilisateurDao     utilisateurDao;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Connexion() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		this.utilisateurDao = ( (DAOFactory) config.getServletContext().getAttribute( CONF_DAO_FACTORY ) ).getUtilisateurDao();

    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Content-Type", "application/json");
		System.out.println("DoPost");
		PrintWriter out = response.getWriter();
		ObjectMapper mapper = new ObjectMapper();
		Map<String, String> map = mapper.readValue(request.getReader(), new TypeReference<Map<String, String>>(){});
		String email = map.get("email");
		String mdp = map.get("motdepasse");
		System.out.println("email :" + email);
		System.out.println("mdp :" + mdp);
		Utilisateur utilisateur = utilisateurDao.verifier_MDP_Connexion(email, mdp);
		System.out.println("YOUPI :" + utilisateur);
        try {
            out.println(mapper.writeValueAsString(utilisateur));
          } catch (JsonGenerationException e) {
        	  e.printStackTrace();
          } catch (JsonMappingException e) {
        	  e.printStackTrace();
          } catch (IOException e) {
        	  e.printStackTrace();
          }
          out.close();
	}

}
