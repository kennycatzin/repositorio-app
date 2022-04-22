import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const getTiposEquiposAdmin = (pagina = 0) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('tipo_equipo/get-item-paginado/' + pagina);
        const body = await resp.json();
        if (body.ok) {
            dispatch(getTiposEquipos(body))
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Datos incorrectos',
                confirmButtonColor: "#1d8cf8",
                icon: 'error',
            })
        }

    }
}
const getTiposEquipos = (data) => ({
    type: types.tipoEGetObjetos,
    payload: {
        data: data.data,
        registros: data.mensaje,
        paginas: data.paginas
    }
});




