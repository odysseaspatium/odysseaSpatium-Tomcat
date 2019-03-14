package models;

import java.sql.Timestamp;

import org.jasypt.util.password.ConfigurablePasswordEncryptor;


public class Utilisateur {
	
	private static final String ALGO_CHIFFREMENT = "SHA-256";

    private Long      id;
    private String    email;
    private String    motdepasse;
    private String    nom;
    private String    prenom;
    
    /*public Utilisateur(String email, String motdepasse, String nom, String prenom) {
    	this.email = email;
    	this.motdepasse = motdepasse;
    	this.nom = nom;
    	this.prenom = prenom;
    }*/
    
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMotdepasse() {
		return motdepasse;
	}
	public void setMotDePasse(String motdepasse) {
		this.motdepasse = motdepasse;
	}
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getId() {
		return id;
	}
	
	@Override
	public String toString() {
		return "Utilisateur [id=" + id + ", email=" + email + ", motdepasse=" + motdepasse + ", nom=" + nom
				+ ", prenom=" + prenom + "]";
	}


}