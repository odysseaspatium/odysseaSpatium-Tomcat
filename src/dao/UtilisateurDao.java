package dao;

import models.Utilisateur;

public interface UtilisateurDao {
	void creer( Utilisateur utilisateur ) throws DAOException;
	Utilisateur trouver( String email ) throws DAOException;
	Utilisateur verifier_MDP_Connexion(String email, String mdp);
}
