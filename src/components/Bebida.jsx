import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({ bebida }) => {

    const { handleModalClick, handleBebidaID } = useBebidas()


    return (
        <Col md={3} lg={3}>
            <Card className='mb-4 max' >
                <Card.Img variant="top" src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrinkThumb}`}

                />
                <Card.Body>
                    <Card.Title>{bebida.strDrink}</Card.Title>
                    <Card.Text>
                        Algo más...
                    </Card.Text>
                    <Button variant="warning"
                        className='w-100 text-uppercase mt-2'
                        onClick={() => {
                            handleModalClick()
                            handleBebidaID(bebida.idDrink)

                        }}
                    >Ver receta</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida