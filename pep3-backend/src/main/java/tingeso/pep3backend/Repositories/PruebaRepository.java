package tingeso.pep3backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tingeso.pep3backend.Entities.PruebaEntity;

@Repository
public interface PruebaRepository extends JpaRepository<PruebaEntity, Integer> {
}
