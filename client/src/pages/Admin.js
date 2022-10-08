import React, {useContext, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";


const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    console.log("ADMIN")


    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-info"} className="mt-2 p-2" onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button variant={"outline-info"} className="mt-2 p-2" onClick={() => setBrandVisible(true)}>
                Добавить бренд
            </Button>
            <Button variant={"outline-info"} className="mt-2 p-2" onClick={() => setDeviceVisible(true)}>
                Добавить устройство
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;
