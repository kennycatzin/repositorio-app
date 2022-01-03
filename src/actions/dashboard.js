import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const getDataDashboard = (uid) => {
    return async(dispatch)=>{
        console.log('Entro');
        if(uid != null){        
            console.log('no entro');
            const resp = await fetchSinToken( 'user/get-dashboard/' + uid);
            const body = await resp.json();
            if( body.ok ) {
              console.log(body)
              dispatch(getTablero(body.data))
            } else {
            }
        }else{
        }
    }
}
const getTablero = ( data ) => ({
    type: types.dashGetTablero,
    payload: data
});