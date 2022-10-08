import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className="d-flex p-3 mb-3" style={{flexDirection: "row"}}>
            {device.brands.map(brand =>
                <Card
                    className="p-3"
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    style={{cursor: "pointer"}}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;

