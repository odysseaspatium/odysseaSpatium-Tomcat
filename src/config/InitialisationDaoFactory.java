package config;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import dao.DAOFactory;

/**
 * Application Lifecycle Listener implementation class InitialisationDaoFactory
 *
 */
@WebListener
public class InitialisationDaoFactory implements ServletContextListener {
	
	private static final String ATT_DAO_FACTORY = "daofactory";
	private DAOFactory          daoFactory;
	
    /**
     * Default constructor. 
     */
    public InitialisationDaoFactory() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent sce)  { 
         // TODO Auto-generated method stub
    	
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent sce)  { 
         // TODO Auto-generated method stub
    	ServletContext context = sce.getServletContext();
    	this.daoFactory = DAOFactory.getInstance();
    	context.setAttribute(ATT_DAO_FACTORY, this.daoFactory);
    }
	
}
