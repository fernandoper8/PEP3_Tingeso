package pep3.codigoservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CodigoServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodigoServiceApplication.class, args);
	}

}
