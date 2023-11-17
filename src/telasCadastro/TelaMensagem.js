import Pagina from "../templates/Pagina";
import { Alert } from "react-bootstrap";
import { useEffect } from "react";

export default function TelaMensagem(props){
    useEffect(()=>{
        setTimeout(()=>{
            props.setMostrarMensagem(false);
        },1000);
    },[]); 

    return (
        <Pagina>
            <Alert variant={props.tipo}>
                <p>{props.mensagem}</p>
            </Alert>
        </Pagina>
    );
}