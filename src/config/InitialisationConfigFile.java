package config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import dao.DAOConfigurationException;

/**
 * Application Lifecycle Listener implementation class InitialisationConfigFile
 *
 */
@WebListener
public class InitialisationConfigFile implements ServletContextAttributeListener, ServletContextListener {
	private static final String FICHIER_PROPERTIES       = "config/config.properties";
	private static final String PROPERTY_URL = "URL";
	private static final String PROPERTY_URL_TOMCAT = "URL_TOMCAT";
	
    /**
     * Default constructor. 
     */
    public InitialisationConfigFile() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent sce)  { 
         // TODO Auto-generated method stub
    	Properties properties = new Properties();
    	ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        InputStream fichierProperties = classLoader.getResourceAsStream( FICHIER_PROPERTIES );
        ServletContext context = sce.getServletContext();
        try {
            properties.load( fichierProperties );
            context.setAttribute(PROPERTY_URL, properties.getProperty(PROPERTY_URL));
            context.setAttribute(PROPERTY_URL_TOMCAT, properties.getProperty(PROPERTY_URL_TOMCAT));
            System.out.println(properties.getProperty(PROPERTY_URL_TOMCAT));
        } catch ( IOException e ) {
            throw new DAOConfigurationException( "Impossible de charger le fichier properties " + FICHIER_PROPERTIES, e );
        }
        System.out.println("success");
    }
	
}
