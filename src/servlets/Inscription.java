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
		// TODO Auto-generated method stub
		this.utilisateurDao = ( (DAOFactory) getServletContext().getAttribute( CONF_DAO_FACTORY ) ).getUtilisateurDao();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
	    ObjectMapper mapper = new ObjectMapper();
		InscriptionForm form = new InscriptionForm( utilisateurDao );
        /* Traitement de la requête et récupération du bean en résultant */
        Utilisateur utilisateur = form.inscrireUtilisateur( request );
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
