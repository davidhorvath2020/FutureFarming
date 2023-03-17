import React from "react";
import styled from "styled-components";
import CropsCard from "../../components/CropsCard";

import CropsData from "../../../CropsData";

// CropsData.js

const StyledCropsCard = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
`;

const Crops = () => {

    const CropsElements = CropsData.map(x => {
        return <CropsCard
            key={x.id}
            id={x.id}
            MainCrop={x.MainCrop}
            BesPreCrop={x.BesPreCrop}
            img={x.img}
        />
    })

    return (
        <div>
            <h1>
                Crops
            </h1>
            <StyledCropsCard>
                {CropsElements}
            </StyledCropsCard>
        </div>
    )
}

export default Crops;