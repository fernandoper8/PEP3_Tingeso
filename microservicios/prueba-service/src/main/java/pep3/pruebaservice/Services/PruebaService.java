package pep3.pruebaservice.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pep3.pruebaservice.Entities.PruebaEntity;
import pep3.pruebaservice.Models.CodigoModel;
import pep3.pruebaservice.Repositories.PruebaRepository;
import pep3.pruebaservice.web.client.RestTemplate;

import java.util.List;

@Service
public class PruebaService {
    @Autowired
    PruebaRepository pruebaRepository;
    @Autowired
    CodigoService codigoService;

    // Create
    public ResponseEntity<String> crearPrueba(List<MultipartFile> archivos, List<String> respuestas, String dificultad){
        try {
            PruebaEntity nuevaPrueba = new PruebaEntity();

            CodigoModel codigo1 = crearCodigo(archivos.get(0), respuestas.get(0));
            CodigoModel codigo2 = crearCodigo(archivos.get(1), respuestas.get(1));
            CodigoModel codigo3 = crearCodigo(archivos.get(2), respuestas.get(2));
            CodigoModel codigo4 = crearCodigo(archivos.get(3), respuestas.get(3));

            int idCodigo1 = codigo1.getIdCodigo();
            int idCodigo2 = codigo2.getIdCodigo();
            int idCodigo3 = codigo3.getIdCodigo();
            int idCodigo4 = codigo4.getIdCodigo();

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
    public CodigoModel crearCodigo(MultipartFile archivo, String respuesta){
        CodigoModel.exchange("http://codigo-service/codigo/crear")
    }

    // Read
    public List<PruebaEntity> obtenerPruebas(){
        return pruebaRepository.findAll();
    }
    public PruebaEntity obtenerPruebaPorId(int id){
        return pruebaRepository.findByIdPrueba(id);
    }
}