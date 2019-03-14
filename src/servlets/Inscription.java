package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import dao.DAOFactory;
import dao.UtilisateurDao;
import forms.InscriptionForm;
import models.Utilisateur;
import dao.DAOUtilitaire;
/**
 * Servlet implementation class Inscription
 */
@WebServlet("/Inscription")
public class Inscription extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static final String CONF_DAO_FACTORY = "daofactory";
	
	private UtilisateurDao     utilisateurDao;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Inscription() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		//config.getServletContext().getAttribute(CONF_DAO_FACTORY)
		this.utilisateurDao = ( (DAOFactory) config.getServletContext().getAttribute( CONF_DAO_FACTORY ) ).getUtilisateurDao();
		System.out.println(config.getServletContext().getAttribute( CONF_DAO_FACTORY ) );
		//this.utilisateurDao = DAOFactory.getInstance().getUtilisateurDao();
	}
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("doGet");
    }
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Content-Type", "application/json");
		System.out.println("DoPost");
		//System.out.println(request.getParameter("data"));
		PrintWriter out = response.getWriter();
	    ObjectMapper mapper = new ObjectMapper();
		//InscriptionForm form = new InscriptionForm( utilisateurDao );
        /* Traitement de la requête et récupération du bean en résultant */
        //Utilisateur utilisateur = form.inscrireUtilisateur( request );
		Utilisateur utilisateur = mapper.readValue(request.getReader(), Utilisateur.class);
		System.out.println("utilisateur : "+utilisateur);
		if(this.utilisateurDao.trouver(utilisateur.getEmail()) != null) {
			mapper.writeValueAsString(null);
		}else {
			utilisateur.setMotDePasse(DAOUtilitaire.Hashage(utilisateur.getMotdepasse()));
			System.out.println("utilisateur : "+utilisateur);
			this.utilisateurDao.creer(utilisateur);
			//Utilisateur utilisateur2 = form.inscrireUtilisateur( request );
	        try {
	            out.println(mapper.writeValueAsString(utilisateur));
	          } catch (JsonGenerationException e) {
	        	  e.printStackTrace();
	          } catch (JsonMappingException e) {
	        	  e.printStackTrace();
	          } catch (IOException e) {
	        	  e.printStackTrace();
	          }
		}
          out.close();
	}

}
