package tingeso.pep3backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import tingeso.pep3backend.Entities.CodigoEntity;

@Repository
public interface CodigoRepository extends JpaRepository<CodigoEntity, Integer> {
    @Transactional(readOnly = true)
    public CodigoEntity findByIdCodigo(int id);
}
