package dao;

import models.Utilisateur;

public interface UtilisateurDao {
	void creer( Utilisateur utilisateur ) throws DAOException;
	Utilisateur trouver( String email ) throws DAOException;
    Utilisateur trouver( String email, String mdp ) throws DAOException;
}
