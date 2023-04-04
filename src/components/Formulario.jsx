import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import { useState } from "react"
import useBebidas from "../hooks/useBebidas"
const Formulario = () => {
    const [alerta, setAlerta]=useState("")
    const { categorias } = useCategorias()
    const [busqueda, setBusqueda] = useState({
        nombreBebida: '',
        categoria: ''
    })
    const {consultarBebida} =useBebidas()
    const handleSubmit = (e) => {
        e.preventDefault()
    if(Object.values(busqueda).includes("")){
        setAlerta("Todos los campos son obligatorios")
        return
    }
    setAlerta("")
    consultarBebida(busqueda)

    }
    return (
        <Form onSubmit={handleSubmit} >
            {alerta && <Alert
                variant="danger"
                className="text-center"
                >{alerta}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label
                            htmlFor="nombreBebida"
                        >Nombre Bebida </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: Tequila, Vodka, Etc."
                            name="nombreBebida"
                            id="nombreBebida"
                            value={busqueda.nombreBebida}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="categoria">Categoria Bebida </Form.Label>

                        <Form.Select
                            id="categoria"
                            nombre="categoria"
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}>
                            <option value="">--Seleccione--</option>
                            {categorias.map(categoria =>
                            (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}>{categoria.strCategory}</option>
                            ) 
                             )}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                        variant="danger"
                        className=" p-2 mt-3 text-uppercase w-100"
                        type="submit"
                    >Buscar Bebidas</Button>
                </Col>
            </Row>

        </Form>

    )
}

export default Formulario