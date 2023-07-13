package pep3.pruebaservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PruebaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PruebaServiceApplication.class, args);
	}

}
