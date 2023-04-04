import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
const ModalBebida = () => {
    const { handleModalClick, modal, receta, cargando } = useBebidas()
   

    const ingredientes = () => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li> {receta[`strIngredient${i}`]}{receta[`strMeasure${i}`]}</li>
                )
            }
        } return ingredientes

    }


    return (
        !cargando && (<Modal show={modal} onHide={handleModalClick}>
            <Image src={receta.strDrinkThumb || "null"}
                alt={`Imagen receta ${receta.strDrinkThumb || "null"}`}
            />
            <Modal.Header>
                <Modal.Title>
                    {receta.strDrink || "null"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                    <h2>Instrucciones</h2>
                    {receta.strInstructions || "It does not have yet"}
                    <h2>Ingredientes y Cantidades</h2>
                    {ingredientes()}
                </div>
            </Modal.Body>
        </Modal>)
    )
}

export default ModalBebida