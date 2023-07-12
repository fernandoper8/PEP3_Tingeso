package tingeso.pep3backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tingeso.pep3backend.Services.PruebaService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/prueba")
public class PruebaController {

    @Autowired
    PruebaService pruebaService;

    @PostMapping("/crear")
    public ResponseEntity<PruebaController> crearPrueba(@RequestParam("archivo1") MultipartFile archivo1, String respuesta1,
                                                        @RequestParam("archivo2") MultipartFile archivo2, String respuesta2,
                                                        @RequestParam("archivo3") MultipartFile archivo3, String respuesta3,
                                                        @RequestParam("archivo4") MultipartFile archivo4, String respuesta4){
        List<MultipartFile> fileList = new ArrayList<MultipartFile>();
        fileList.add(archivo1);
        fileList.add(archivo2);
        fileList.add(archivo3);
        fileList.add(archivo4);

        List<String> respuestaList = new ArrayList<String>();
        respuestaList.add(respuesta1);
        respuestaList.add(respuesta2);
        respuestaList.add(respuesta3);
        respuestaList.add(respuesta4);

        //return pruebaService.crearPrueba();
        return null;
    }
}
