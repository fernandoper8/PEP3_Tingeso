package pep3.pruebaservice.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import pep3.pruebaservice.Entities.PruebaEntity;
import pep3.pruebaservice.Models.CodigoModel;
import pep3.pruebaservice.Repositories.PruebaRepository;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class PruebaService {
    @Autowired
    PruebaRepository pruebaRepository;
    @Autowired
    RestTemplate restTemplate;


    // Create
    public ResponseEntity<String> crearPrueba(List<MultipartFile> archivos, List<String> respuestas, String dificultad, List<String> preguntas){
        try {
            PruebaEntity nuevaPrueba = new PruebaEntity();

            int idCodigo1 = crearCodigo(archivos.get(0), respuestas.get(0), preguntas.get(0));
            int idCodigo2 = crearCodigo(archivos.get(1), respuestas.get(1), preguntas.get(1));
            int idCodigo3 = crearCodigo(archivos.get(2), respuestas.get(2), preguntas.get(2));
            int idCodigo4 = crearCodigo(archivos.get(3), respuestas.get(3), preguntas.get(3));

            nuevaPrueba.setDificultad(dificultad);
            nuevaPrueba.setIdCodigo1(idCodigo1);
            nuevaPrueba.setIdCodigo2(idCodigo2);
            nuevaPrueba.setIdCodigo3(idCodigo3);
            nuevaPrueba.setIdCodigo4(idCodigo4);

            save(nuevaPrueba);

            System.out.println("Id de la prueba creada: " + nuevaPrueba.getIdPrueba());
            return ResponseEntity.ok("Prueba creada exitosamente");
        }catch(Exception error){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al crear la prueba: \n" + error.getMessage());
        }
    }
    public void save(PruebaEntity prueba){
        pruebaRepository.save(prueba);
    }

    // peticion a codigo-service/codigo/crear
    public int crearCodigo(MultipartFile archivo, String respuesta, String pregunta) {
        try {

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.MULTIPART_FORM_DATA);

            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
            body.add("codigo", archivo.getResource());
            body.add("respuesta", respuesta);
            body.add("pregunta", pregunta);

            HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

            String url = "http://codigo-service/codigo/crear";
            ResponseEntity<Integer> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, Integer.class);
            System.out.println("ID del codigo creado: " + response);

            if (response.getStatusCode() == HttpStatus.OK) {
                return response.getBody();
            } else {
                return -1;
            }
        } catch (Exception error) {
            return -1;
        }
    }

    // Read
    public List<PruebaEntity> obtenerPruebas(){
        return pruebaRepository.findAll();
    }
    public PruebaEntity obtenerPruebaPorId(int id){
        return pruebaRepository.findByIdPrueba(id);
    }
}