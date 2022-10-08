import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState("")

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue("")
            onHide()
        })
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавление бренда</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                        <Form.Control
                            type="name"
                            placeholder="Название"
                            autoFocus
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={addBrand}>
                    Добавить бренд
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
