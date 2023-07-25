package pep3.codigoservice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pep3.codigoservice.Entities.CodigoEntity;
import pep3.codigoservice.Services.CodigoService;

import java.util.List;

@RestController
@RequestMapping("/codigo")
@CrossOrigin
public class CodigoController {

    @Autowired
    CodigoService codigoService;

    // Create
    @PostMapping("/subir")
    public ResponseEntity<String> subirCodigo(@RequestParam("codigo") String codigo, String respuesta, String pregunta) {
        return codigoService.subirCodigo(codigo, respuesta, pregunta);
    }
    @PostMapping("/crear")
    public int crearCodigo(@RequestParam("codigo") String codigo, @RequestParam("respuesta") String respuesta, @RequestParam("pregunta") String pregunta){
        System.out.println("entrada depeticion exchange");
        return codigoService.crearCodigo(codigo, respuesta, pregunta);
    }

    // Read
    @GetMapping
    public List<CodigoEntity> obtenerCodigos(){
        return codigoService.obtenerCodigos();
    }
    @GetMapping("/{id}")
    public CodigoEntity obtenerCodigoPorId(@PathVariable("id") int id){
        return codigoService.obtenerCodigoPorId(id);
    }

}