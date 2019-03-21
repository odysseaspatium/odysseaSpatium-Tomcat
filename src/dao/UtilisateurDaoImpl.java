package dao;

import static dao.DAOUtilitaire.fermeturesSilencieuses;
import static dao.DAOUtilitaire.initialisationRequetePreparee;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.jasypt.util.password.ConfigurablePasswordEncryptor;

import com.fasterxml.jackson.databind.JsonNode;

import models.Utilisateur;

import org.jasypt.util.password.ConfigurablePasswordEncryptor;

public class UtilisateurDaoImpl implements UtilisateurDao {

	private static final String ALGO_CHIFFREMENT = "SHA-256";
	ConfigurablePasswordEncryptor passwordEncryptor = new ConfigurablePasswordEncryptor();
    
	private static final String REQ_INSERT = "INSERT INTO t_utilisateur (nom_user,prenom_user,mail_user,mdp_user,id_panier_user) VALUES (?, ?, ?, ?, ?);";
	private static final String REQ_SELECT_BY_MAIL = "SELECT * from t_utilisateur WHERE mail_user = ?";

	private DAOFactory daoFactory;
	
	UtilisateurDaoImpl(DAOFactory factory){
		this.daoFactory = factory;
		try {
			passwordEncryptor.setAlgorithm( ALGO_CHIFFREMENT );
			passwordEncryptor.setPlainDigest( false );
		}catch(Exception e) {
			
		}
	}
	/* Implémentation de la méthode définie dans l'interface UtilisateurDao */
    @Override
    public Utilisateur verifier_MDP_Connexion( String email , String mdp ) throws DAOException {
    	Utilisateur u = trouver(email);
    	try {
    	System.out.println("mdp : "+mdp);
    	System.out.println("crypt : "+u.getMotdepasse());
    	if(passwordEncryptor.checkPassword(mdp.toString(), u.getMotdepasse().toString())) return u;
    	
    	}catch(Exception e) {
            return null;
    	}
        return null;
    }
    
    public Utilisateur trouver( String email) {
    	return trouver(REQ_SELECT_BY_MAIL, email);
    }
    
    /* Implémentation de la méthode définie dans l'interface UtilisateurDao */
    @Override
    public void creer( Utilisateur utilisateur ) throws DAOException,IOException {
        Connection connexion = null;
        PreparedStatement preparedStatement = null;
        ResultSet valeursAutoGenerees = null;

        try {
            connexion = daoFactory.getConnection();
            
            URL obj = new URL("http://localhost:4000/Panier/creerPanier");
    		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
    		con.setDoOutput(true);
    		con.setRequestMethod("POST");
    		con.setRequestProperty("Content-Type", "application/json");
    		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
    		String panier = in.readLine();
    		System.out.println(panier);
            preparedStatement = initialisationRequetePreparee( connexion, REQ_INSERT, true, utilisateur.getNom(), utilisateur.getPrenom(), utilisateur.getEmail(), utilisateur.getMotdepasse(), panier );
            int statut = preparedStatement.executeUpdate();
            if ( statut == 0 ) {
                throw new DAOException( "Échec de la création de l'utilisateur, aucune ligne ajoutée dans la table." );
            }
            valeursAutoGenerees = preparedStatement.getGeneratedKeys();
            if ( valeursAutoGenerees.next() ) {
                utilisateur.setId( valeursAutoGenerees.getLong( 1 ) );
            } else {
                throw new DAOException( "Échec de la création de l'utilisateur en base, aucun ID auto-généré retourné." );
            }
        } catch ( SQLException e ) {
            throw new DAOException( e );
        } finally {
            fermeturesSilencieuses( valeursAutoGenerees, preparedStatement, connexion );
        }
    }

    /*
     * Méthode générique utilisée pour retourner un utilisateur depuis la base
     * de données, correspondant à la requête SQL donnée prenant en paramètres
     * les objets passés en argument.
     */
    private Utilisateur trouver( String sql, Object... objets ) throws DAOException {
        Connection connexion = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        Utilisateur utilisateur = null;

        try {
            /* Récupération d'une connexion depuis la Factory */
            connexion = daoFactory.getConnection();
            /*
             * Préparation de la requête avec les objets passés en arguments
             * (ici, uniquement une adresse email) et exécution.
             */
            preparedStatement = initialisationRequetePreparee( connexion, sql, false, objets );
            resultSet = preparedStatement.executeQuery();
            /* Parcours de la ligne de données retournée dans le ResultSet */
            if ( resultSet.next() ) {
                utilisateur = map( resultSet );
            }
        } catch ( SQLException e ) {
            throw new DAOException( e );
        } finally {
            fermeturesSilencieuses( resultSet, preparedStatement, connexion );
        }

        return utilisateur;
    }

    /*
     * Simple méthode utilitaire permettant de faire la correspondance (le
     * mapping) entre une ligne issue de la table des utilisateurs (un
     * ResultSet) et un Utilisateur.
     */
    private static Utilisateur map( ResultSet resultSet ) throws SQLException {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setId( resultSet.getLong( "id_user" ) );
        utilisateur.setEmail( resultSet.getString( "mail_user" ) );
        utilisateur.setMotDePasse( resultSet.getString( "mdp_user" ) );
        utilisateur.setNom( resultSet.getString( "nom_user" ) );
        utilisateur.setPrenom( resultSet.getString( "prenom_user" ) );
        return utilisateur;
    }

}
