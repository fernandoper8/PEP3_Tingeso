import axios from 'axios';
const apiURL = require('./apiUrl.js');
const urlObject = new apiURL();
const url = urlObject.getUrl();

const CODIGO_API_URL = url + '/codigo';

class codigoService {

    getCodigos(){
        return axios.get(CODIGO_API_URL);
    }
    getCodigoById(idCodigo){
        return axios.get(CODIGO_API_URL + '/' + idCodigo);
    }
    createCodigo(codigo){
        return axios.post(CODIGO_API_URL + '/subir', codigo);
    }
}
const instance = new codigoService();
export default instance;