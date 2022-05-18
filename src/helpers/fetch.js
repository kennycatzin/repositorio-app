import axios from 'axios';


const baseUrl = 'http://172.18.4.205:8080/repositorio-api/public/api';
// const baseUrl = 'http://172.18.3.7/repositorio-api/public/api';

const precioBaseUrl = 'http://172.18.4.205:8080/server_connections/public/api';
// const precioBaseUrl = 'http://172.18.3.7/server_connections/public/api';


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
const fetchSinexportRecordToExceloken = (endpoint, data, method = 'GET') => {
    const url = `${ precioBaseUrl }/${ endpoint }`;
    fetch(url, {
        method: 'POST',
       })
    .then((res) => {
        console.log(res)
        return res.blob();
    })
    .then((blob) => {
        console.log(blob)

        const href = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', 'config.xlsx'); //or any other extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
    .catch((err) => {
        console.log(err)
        return Promise.reject({ Error: 'Something Went Wrong', err });
    })    
}
const fetchPrecioMetal = (endpoint, data, method = 'GET') => {
    const url = `${ precioBaseUrl }/${ endpoint }`;
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
    fetchFormImagen,
    fetchPrecioMetal,
    fetchSinexportRecordToExceloken
}