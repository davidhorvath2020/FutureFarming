import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CropsData from "../../../CropsData";

const CropsDetails = () => {

    const params = useParams()
    const [crop, setCrop] = useState(null)

    useEffect(() => {
        setCrop(CropsData)
    }, [params.id])

    return (
        <div>
            <h1>CropsDetails</h1>
            {/*{JSON.stringify(params.id)} */}
            {CropsData
                .filter((x) => x.id == params.id)
                .map((x) => (
                    <div key={x.id} >
                        <div>id: {x.id}</div>
                        <h1>Crop: {x.MainCrop}</h1>
                        <img src={`../assets/images/${x.img}.png`} />
                    </div>
                ))

            }
        </div>
    )
}

export default CropsDetails;

// JSON.stringify(params.id)