import React from 'react'
import Autocomplete from 'react-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getEquipoAsignadoAdmin } from '../../../../actions/asignaciones';
import { getBusquedaUsuarios } from '../../../../actions/user';

export const AcUsuario = () => {
    const [name, setName] = React.useState("");
    const {userUsuarios} = useSelector(state => state.usuarios);
    const dispatch = useDispatch();
    const getNombres = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
        const obj = {
            busqueda: e.target.value
        }
        dispatch(getBusquedaUsuarios(obj));
    }
    const handleSelectUser = (item) => {
        // TODO: agregar a usuario activo
        console.log(item);
        console.log(userUsuarios);
        var result = userUsuarios.filter(obj => {
            return obj.nombre === item
        });
        console.log(result);
        dispatch( getEquipoAsignadoAdmin(result[0].id, 'INDIVIDUAL') );
        setName(item);
    }

    return (
        <div className="App">
            <Autocomplete
                getItemValue={(item) => item.nombre}
                items={userUsuarios.filter((member) => member.nombre.includes(name))}
                renderItem={(item, isHighlighted) => (
                    <div key={item.id}
                        style={{
                            verticalAlign: "middle",
                            background: isHighlighted ? "#1d8cf8" : "#1e1e2f",
                            color: "white",
                            paddingLeft: 10,
                            paddingRight: 10

                        }}
                    >

                        <div style={{ display: "inline-block", minWidth: 200 }}>
                            {item.nombre}
                        </div>
                    </div>
                )}
                wrapperStyle={{
                    position: "relative",
                    borderRadius: 20
                }}
                menuStyle={{
                    zIndex: 2,
                    position: "absolute",
                    top: 30,
                    left: 0,
                    overflow: "auto",
                    maxHeight: 100
                }}
                value={name || ""}
                inputProps={{
                    placeholder: "Ingrese el nombre...",
                    style: { 
                        fontSize: 14, width: "100%",
                        backgroundColor: '#27293d',
                        color: 'white',
                        borderRadius: 5,
                        padding: 5

                    }
                }}
                onChange={getNombres}
                onSelect={(member) => handleSelectUser(member)}
            />
        </div>

    )
}
