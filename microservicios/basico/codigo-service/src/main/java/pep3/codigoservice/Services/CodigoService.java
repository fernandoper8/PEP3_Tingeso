package pep3.codigoservice.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pep3.codigoservice.Entities.CodigoEntity;
import pep3.codigoservice.Repositories.CodigoRepository;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class CodigoService {

    @Autowired
    CodigoRepository codigoRepository;

    // Create
    public ResponseEntity<String> subirCodigo(String codigo, String respuesta, String pregunta){
        if(codigo.isEmpty()){
            return ResponseEntity.badRequest().body("Archivo vacío");
        }
        CodigoEntity nuevoCodigo = new CodigoEntity();
        nuevoCodigo.setContenido(codigo);
        nuevoCodigo.setRespuesta(respuesta);
        nuevoCodigo.setPregunta(pregunta);
        save(nuevoCodigo);

        System.out.println("El id del codigo almacenado es: " + nuevoCodigo.getIdCodigo());

        return ResponseEntity.ok("Archivo leido exitosamente");
    }

    public int crearCodigo(String codigo, String respuesta, String pregunta) {
        CodigoEntity nuevoCodigo = new CodigoEntity();
        nuevoCodigo.setContenido(codigo);
        nuevoCodigo.setRespuesta(respuesta);
        nuevoCodigo.setPregunta(pregunta);
        save(nuevoCodigo);
        System.out.println("El id del código creado es: " + nuevoCodigo.getIdCodigo());
        return nuevoCodigo.getIdCodigo();

    }
    public void save(CodigoEntity codigo){
        codigoRepository.save(codigo);
    }
    // Read
    public List<CodigoEntity> obtenerCodigos(){
        return codigoRepository.findAll();
    }
    public CodigoEntity obtenerCodigoPorId(int id){
        return codigoRepository.findByIdCodigo(id);
    }
}
