import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const fornecedorSlice = createSlice({
    name: 'fornecedor',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaFornecedors:[]
    },
    reducers:{
        adicionar:(state, action)=>{
            state.listaFornecedors.push(action.payload);
        },
        remover:(state, action) => {
            state.listaFornecedors = state.listaFornecedors.filter(fornecedor => fornecedor.cod !== action.payload.cod);
        },
        atualizar: (state, action) => {
            const fornecedorAtualizada = action.payload;
            state.listaFornecedors = state.listaFornecedors.map(fornecedor => {
                if (fornecedor.cod === fornecedorAtualizada.cod) {
                    return fornecedorAtualizada;
                }
                return fornecedor;
            });
        },
    }
});

export const { adicionar, remover, atualizar } = fornecedorSlice.actions;
export default fornecedorSlice.reducer;
