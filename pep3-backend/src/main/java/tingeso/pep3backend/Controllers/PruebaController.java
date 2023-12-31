package tingeso.pep3backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tingeso.pep3backend.Entities.PruebaEntity;
import tingeso.pep3backend.Services.PruebaService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/prueba")
public class PruebaController {

    @Autowired
    PruebaService pruebaService;

    // Create
    @PostMapping("/crear")
    public ResponseEntity<String> crearPrueba(@RequestParam("archivo1") MultipartFile archivo1, @RequestParam("respuesta1")String respuesta1,
                                              @RequestParam("archivo2") MultipartFile archivo2, @RequestParam("respuesta2")String respuesta2,
                                              @RequestParam("archivo3") MultipartFile archivo3, @RequestParam("respuesta3")String respuesta3,
                                              @RequestParam("archivo4") MultipartFile archivo4, @RequestParam("respuesta4")String respuesta4,
                                              @RequestParam("dificultad") String dificultad){
        List<MultipartFile> archivos = new ArrayList<MultipartFile>();
        archivos.add(archivo1);
        archivos.add(archivo2);
        archivos.add(archivo3);
        archivos.add(archivo4);

        List<String> respuestas = new ArrayList<String>();
        respuestas.add(respuesta1);
        respuestas.add(respuesta2);
        respuestas.add(respuesta3);
        respuestas.add(respuesta4);

        return pruebaService.crearPrueba(archivos, respuestas, dificultad);
    }

    // Read
    @GetMapping
    public List<PruebaEntity> obtenerPruebas(){
        return pruebaService.obtenerPruebas();
    }
    @GetMapping("/{id}")
    public PruebaEntity obtenerPruebaPorId(@PathVariable("id") int id){
        return pruebaService.obtenerPruebaPorId(id);
    }

}
