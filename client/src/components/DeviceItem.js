import React, {useEffect, useState} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../asets/star.png"
import {useNavigate} from "react-router";
import {DEVICE_ROUTE} from "../utils/consts";
import {fetchOneBrand, fetchOneDevice, fetchOneType, fetchTypes} from "../http/deviceAPI";


const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")
    const typeId = device.typeId
    const brandId = device.brandId


    useEffect(() => {
        fetchOneType(typeId).then(data => setType(data.name))
        fetchOneBrand(brandId).then(data => setBrand(data.name))
    }, [])

    return (
        <Col md={3} className={"mt-2"} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{width: 150, cursor: "pointer", margin: "0 5px"}} border="light">
                <Image width="150" height="150" src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="mt-1 d-flex align-items-center justify-content-between">
                    <div>
                        {type} {brand}
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <div> 5</div>
                        <Image src={star} width="20%" height="20%"/>
                    </div>
                </div>
                <div style={{marginTop: 15}}>{device.name}</div>
                <div>

                </div>
            </Card>
        </Col>
    )
};

export default DeviceItem;
