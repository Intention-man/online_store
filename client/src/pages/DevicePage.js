import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from "../asets/star.png"
import {useParams} from "react-router";
import {fetchOneDevice} from "../http/deviceAPI";


const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    console.log(device)

    return (
        <Container className="mt-3">
            <Row className="d-flex">
                <Col md={4}>
                    <div className="d-flex align-items-center flex-column">
                        <h2>{device.name}</h2>
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="d-flex align-items-center flex-column">
                        <h2>Рейтинг</h2>
                        <Row className="d-flex align-items-center justify-content-center" style={{background: `no-repeat center center url(${star})`, backgroundSize: "cover", fontSize: 64, width: 240, height: 240}}>
                            {device.rating}
                        </Row>
                    </div>
                </Col>
                <Col md={4}>
                    <Card className="d-flex justify-content-around align-items-center"
                    style={{width: 300, height: 300, fontSize: 32, border: "5px solid rgb(170 170 255)"}}
                    >
                        <h3>{device.price}</h3>
                        <Button variant="outline-info" style={{color: "darkslateblue"}}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h3 style={{margin:"10 0 25 0"}}>Характеристики</h3>
                {device.info.map((el, index) =>
                    <Row key={el.id} className="d-flex flex-column justify-content-center" style={{background: index % 2 === 0 ? "lightskyblue" : "floralwhite", padding: 10}}>
                        {el.title}
                        {".".repeat(130 - 2 * el.title.length - 2 * el.description.length)}
                        {el.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
