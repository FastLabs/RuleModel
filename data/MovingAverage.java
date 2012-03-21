package com.sample;

import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import org.drools.KnowledgeBase;
import org.drools.KnowledgeBaseConfiguration;
import org.drools.KnowledgeBaseFactory;
import org.drools.builder.KnowledgeBuilder;
import org.drools.builder.KnowledgeBuilderError;
import org.drools.builder.KnowledgeBuilderErrors;
import org.drools.builder.KnowledgeBuilderFactory;
import org.drools.builder.ResourceType;
import org.drools.conf.EventProcessingOption;
import org.drools.definition.type.FactType;
import org.drools.io.ResourceFactory;
import org.drools.logger.KnowledgeRuntimeLogger;
import org.drools.logger.KnowledgeRuntimeLoggerFactory;
import org.drools.runtime.StatefulKnowledgeSession;
import org.drools.runtime.rule.QueryResults;
import org.drools.runtime.rule.QueryResultsRow;

/**
 * This is a sample class to launch a rule.
 */
public class DroolsTest {

    public static final void main(String[] args) {
        try {
            // load up the knowledge base
            KnowledgeBase kbase = readKnowledgeBase();
            StatefulKnowledgeSession ksession = kbase.newStatefulKnowledgeSession();
            KnowledgeRuntimeLogger logger = KnowledgeRuntimeLoggerFactory.newFileLogger(ksession, "test");
            // go !
            FactType thresholdType = kbase.getFactType("com.sample", "TemperatureThreshold");
            FactType sensorReadingType = kbase.getFactType("com.sample", "SensorReading");
            Object first = thresholdType.newInstance();
            thresholdType.set(first, "max", 10);
            ksession.insert(first);
            Timer timer = new Timer();
            SensorTask task = new SensorTask(ksession, sensorReadingType);
            QueryTask queryTask = new QueryTask(ksession);
           // QueryAverage averageTask = new QueryAverage(ksession);
            timer.schedule(task, 0, 5000);
           // timer.schedule(averageTask, 1000, 15000);
            timer.schedule(queryTask, 0, 25000);
            ksession.fireAllRules();
            logger.close();
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }
    
    public static class SensorTask extends TimerTask {
        private StatefulKnowledgeSession session;
    	private FactType factType;
    	private Random random = new Random();
    	public SensorTask(StatefulKnowledgeSession session, FactType sensorType) {
    		this.session = session;
    		this.factType = sensorType;
    	}
    	public void run() {
    		Object instance = getInstance();
    		if(instance != null) {
    			session.insert(instance);
    			session.fireAllRules();
    		}
    	}
    	
    	private Object getInstance() {
    		Object instance = null;;
			try {
				instance = factType.newInstance();
				
				factType.set(instance, "temperature", random.nextInt(10) );
			} catch (InstantiationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    		return instance;
    	}
    }
    
    public static class QueryTask extends TimerTask{
    	private StatefulKnowledgeSession session;
    	
    	public QueryTask(StatefulKnowledgeSession session) {
    		this.session = session;
    	}
    	
    	public void run() {
    		QueryResults results = session.getQueryResults("select all readings");
    		System.out.println(" *** number of records : " + results.size());
    	}
    }
    
    public static class QueryAverage extends TimerTask {
    	private StatefulKnowledgeSession session;
    	
    	public QueryAverage(StatefulKnowledgeSession session) {
    		this.session = session;
    	}
    	
    	public void run() {
    		QueryResults results = session.getQueryResults("30 s average");
    		for(QueryResultsRow  row : results) {
    			System.out.println(" ***** " + row.get("$average") + " ****");
    		}
    	}
    }

    private static KnowledgeBase readKnowledgeBase() throws Exception {
    	KnowledgeBaseConfiguration config = KnowledgeBaseFactory.newKnowledgeBaseConfiguration();
    	config.setOption( EventProcessingOption.STREAM );
        KnowledgeBuilder kbuilder = KnowledgeBuilderFactory.newKnowledgeBuilder();
        kbuilder.add(ResourceFactory.newClassPathResource("Sample.drl"), ResourceType.DRL);
        KnowledgeBuilderErrors errors = kbuilder.getErrors();
        if (errors.size() > 0) {
            for (KnowledgeBuilderError error: errors) {
                System.err.println(error);
            }
            throw new IllegalArgumentException("Could not parse knowledge.");
        }
        KnowledgeBase kbase = KnowledgeBaseFactory.newKnowledgeBase(config);
        kbase.addKnowledgePackages(kbuilder.getKnowledgePackages());
        return kbase;
    }
}
