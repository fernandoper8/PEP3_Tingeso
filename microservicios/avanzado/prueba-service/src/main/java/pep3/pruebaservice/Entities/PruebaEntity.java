package pep3.pruebaservice.Entities;

import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

@Entity
@Table(name = "Pruebas")
@Data
@NoArgsConstructor
public class PruebaEntity {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPrueba;
    private String dificultad;
    private int idCodigo1;
    private int idCodigo2;
    private int idCodigo3;
    private int idCodigo4;
}
