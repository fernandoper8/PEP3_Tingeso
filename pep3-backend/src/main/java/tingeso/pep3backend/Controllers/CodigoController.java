package tingeso.pep3backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tingeso.pep3backend.Entities.CodigoEntity;
import tingeso.pep3backend.Services.CodigoService;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/codigo")
public class CodigoController {

    @Autowired
    CodigoService codigoService;

    // Create
    @PostMapping("/subir")
    public ResponseEntity<String> subirCodigo(@RequestParam("codigo")MultipartFile codigo, String respuesta) {
        return codigoService.subirCodigo(codigo, respuesta);
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
