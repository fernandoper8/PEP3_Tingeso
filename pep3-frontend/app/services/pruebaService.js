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

    agregarElemento(elemento, lista, formData){
        for(var i = 0; i < lista.length; i++){
            indice = i + 1;
            formData.append(elemento+indice, lista[i]);
        }
        return formData;
    }


    crearPrueba(preguntas, respuestas, archivos, dificultad){
        const formData = new FormData();

        formData = agregarElemento ("pregunta", preguntas, formData);
        formData = agregarElemento ("respuesta", respuestas, formData);
        formData = agregarElemento ("archivo", archivos, formData);
        formData.append("dificultad", dificultad);	
        console.log("post!");
        return axios.post(PRUEBA_API_URL + '/crear', prueba);
    }
}
const instance = new pruebaService();
export default instance;