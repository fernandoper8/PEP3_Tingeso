import axios from 'axios';
const apiURL = require('./apiUrl.js');
const urlObject = new apiURL();
const url = urlObject.getUrl();

const PRUEBA_API_URL = url + '/prueba';

class pruebaService {

    getPruebas(){
        return axios.get(PRUEBA_API_URL);
    }
    getPruebaById(idPrueba){
        return axios.get(PRUEBA_API_URL + '/' + idPrueba);
    }

    crearPrueba(preguntas, respuestas, codigos, dificultad){
        const formData = new FormData();

        formData.append("pregunta1", preguntas[0]);
        formData.append("pregunta2", preguntas[1]);
        formData.append("pregunta3", preguntas[2]);
        formData.append("pregunta4", preguntas[3]);

        formData.append("respuesta1", respuestas[0]);
        formData.append("respuesta2", respuestas[1]);
        formData.append("respuesta3", respuestas[2]);
        formData.append("respuesta4", respuestas[3]);

        formData.append("codigo1", codigos[0]);
        formData.append("codigo2", codigos[1]);
        formData.append("codigo3", codigos[2]);
        formData.append("codigo4", codigos[3]);

        formData.append("dificultad", dificultad);	

        console.log(formData);
        console.log("post!");
        return axios.post(PRUEBA_API_URL + '/crear', formData);
    }
}
const instance = new pruebaService();
export default instance;