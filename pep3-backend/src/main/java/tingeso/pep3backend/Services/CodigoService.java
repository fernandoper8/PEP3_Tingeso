package tingeso.pep3backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tingeso.pep3backend.Entities.CodigoEntity;
import tingeso.pep3backend.Repositories.CodigoRepository;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class CodigoService {

    @Autowired
    CodigoRepository codigoRepository;

    // Create
    public ResponseEntity<String> subirCodigo(MultipartFile codigo, String respuesta){
        if(codigo.isEmpty()){
            return ResponseEntity.badRequest().body("Archivo vacío");
        }
        try{
            String contenido = new String(codigo.getBytes(), StandardCharsets.UTF_8);
            CodigoEntity nuevoCodigo = new CodigoEntity();
            nuevoCodigo.setContenido(contenido);
            nuevoCodigo.setRespuesta(respuesta);
            save(nuevoCodigo);

            System.out.println("El id del codigo almacenado es: " + nuevoCodigo.getIdCodigo());

            return ResponseEntity.ok("Archivo leido exitosamente");
        }catch(IOException error){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en la lectura del codigo proporcionado");
        }
    }

    public CodigoEntity crearCodigo(MultipartFile codigo, String respuesta){
        try{
            String contenido = new String(codigo.getBytes(), StandardCharsets.UTF_8);
            CodigoEntity nuevoCodigo = new CodigoEntity();
            nuevoCodigo.setContenido(contenido);
            nuevoCodigo.setRespuesta(respuesta);
            save(nuevoCodigo);
            System.out.println("El id del codigo creado es: " + nuevoCodigo.getIdCodigo());
            return nuevoCodigo;
        }catch(IOException error){
            return null;
        }
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
