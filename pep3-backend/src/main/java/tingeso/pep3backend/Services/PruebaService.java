package tingeso.pep3backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tingeso.pep3backend.Repositories.PruebaRepository;

@Service
public class PruebaService {
    @Autowired
    PruebaRepository pruebaRepository;


}
