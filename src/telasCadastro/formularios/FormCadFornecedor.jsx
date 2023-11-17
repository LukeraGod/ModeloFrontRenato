import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch} from 'react-redux';
import { adicionar,atualizar } from "../../redux/fornecedorReducer";
export default function FormCadFornecedor(props) {
    const fornecedorVazio = {
        nomeFornecedor:'',
        telefone:'',
        fax:'',
        email:'',
        cidade:'',
        uf:'SP',
        cod:'',
    }
    const estadoInicialFornecedor = props.FornecedorParaEdicao;
    const [fornecedor, setfornecedor] = useState(estadoInicialFornecedor);
    const [formValidado, setFormValidado] = useState(false);
    const {status,mensagem,listaFornecedors} = useSelector((state)=>state.fornecedor);
    const dispatch = useDispatch();

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setfornecedor({...fornecedor,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            if(!props.modoEdicao){
                dispatch(adicionar(fornecedor))
                props.setMensagem('fornecedor cadastrado com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            }
            else{
                dispatch(atualizar(fornecedor));
                props.setModoEdicao(false);
                props.setFornecedorParaEdicao(fornecedorVazio);             
            }
            setfornecedor(fornecedorVazio);
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }
    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <br />
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome do Fornecedor:"
                                className="mb-3"
                            >
                            <Form.Control type="text"  id="nomeFornecedor" name="nomeFornecedor" onChange={manipularMudancas} value={fornecedor.nomeFornecedor}  required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome do Fornecedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel

                                label="Telefone:"
                                className="mb-3"
                            >
                                <Form.Control type="number" placeholder="Informe seu telefone" id="telefone" name="telefone"  onChange={manipularMudancas}value={fornecedor.telefone} required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o telefone!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <FloatingLabel
                               
                                label="Fax:"
                                className="mb-3"
                            >
                                <Form.Control type="number"  id="fax" name="fax" onChange={manipularMudancas}value={fornecedor.fax}  required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Digite pelo Fax</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <FloatingLabel
                               
                                label="E-mail do Fornecedor"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="mathblaz167@gmail.com" id="email" name="email"onChange={manipularMudancas}  value={fornecedor.email} required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Digite o e-mail!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>   
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                               
                                label="Cidade"  
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Rio de Janeiro" id="cidade" name="cidade"  onChange={manipularMudancas} value={fornecedor.cidade} required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select aria-label="Unidades Federativas brasileiras" id="uf" name="uf" onChange={manipularMudancas}  value={fornecedor.uf}required>
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                               
                                label="Codigo do produto:"
                                className="mb-3"
                            >

                                <Form.Control type="text"  id="cod" name="cod"  onChange={manipularMudancas} value={fornecedor.cod} required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o codigo do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                        }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}