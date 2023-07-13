package pep3.pruebaservice.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pep3.pruebaservice.Entities.PruebaEntity;

@Repository
public interface PruebaRepository extends JpaRepository<PruebaEntity, Integer> {
    public PruebaEntity findByIdPrueba(int id);
}
