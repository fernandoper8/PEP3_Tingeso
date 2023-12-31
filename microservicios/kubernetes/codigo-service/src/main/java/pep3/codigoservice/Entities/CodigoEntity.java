package pep3.codigoservice.Entities;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

@Entity
@Table(name="Codigos")
@Data
@NoArgsConstructor
public class CodigoEntity {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCodigo;
    private String pregunta;
    private String respuesta;
    @Lob
    private String contenido;
}
