package tingeso.pep3backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tingeso.pep3backend.Entities.CodigoEntity;
import tingeso.pep3backend.Entities.PruebaEntity;
import tingeso.pep3backend.Repositories.PruebaRepository;

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

            CodigoEntity codigo1 = codigoService.crearCodigo(archivos.get(0), respuestas.get(0));
            CodigoEntity codigo2 = codigoService.crearCodigo(archivos.get(1), respuestas.get(1));
            CodigoEntity codigo3 = codigoService.crearCodigo(archivos.get(2), respuestas.get(2));
            CodigoEntity codigo4 = codigoService.crearCodigo(archivos.get(3), respuestas.get(3));

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

    // Read
    public List<PruebaEntity> obtenerPruebas(){
        return pruebaRepository.findAll();
    }
    public PruebaEntity obtenerPruebaPorId(int id){
        return pruebaRepository.findByIdPrueba(id);
    }
}
