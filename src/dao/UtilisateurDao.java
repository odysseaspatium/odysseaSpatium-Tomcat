package dao;

import java.io.IOException;

import models.Utilisateur;

public interface UtilisateurDao {
	void creer( Utilisateur utilisateur ) throws DAOException,IOException ;
	Utilisateur trouver( String email ) throws DAOException;
	Utilisateur verifier_MDP_Connexion(String email, String mdp);
}
