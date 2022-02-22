import axios from 'axios';

//const baseUrl = 'http://localhost:8000/api';
//const baseUrlPruebas = 'http://172.18.4.205:8080/repositorio-api/public/api';
//const baseUrl = 'http://172.18.3.7/repositorio-api/public/api';
const baseUrl = 'http://172.18.4.205:8080/repositorio-api/public/api';

const fetchSinToken = (endpoint, data, method = 'GET') => {
    const url = `${ baseUrl }/${ endpoint }`;
    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

// const fetchFormImagen = ( endpoint, data, method = 'GET' ) => {
//     const url = `${ baseUrl }/${ endpoint }`;
//     if ( method === 'GET' ) {
//         return fetch( url, {
//             method,
//             headers: {
//                 'Content-type': 'multipart/form-data'
//             }
//         });
//     } else {
//         return fetch( url, {
//             method,
//             headers: {
//                 'Content-type': 'multipart/form-data'
//             },
//             body: data
//         });
//     }
// }
const fetchFormImagen = async(endpoint, data, method = 'GET') => {
    const url = `${ baseUrl }/${ endpoint }`;
    let body;
    const header = {
        headers: {
            'Content-Type': undefined,
        }
    };
    await axios.post(url, data, header)
        .then(res => {
            body = res;
        });
    return body;
}

const fetchConToken = (endpoint, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';
    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    }
}


export {
    fetchSinToken,
    fetchConToken,
    fetchFormImagen
}