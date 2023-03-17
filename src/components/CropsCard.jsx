import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCropsCard = styled.div`
    color: black;
    margin: 20px;
    border: 3px solid #0ac470;
    border-radius: 5px;
    height: 200px;
    width: 150px;
    padding: 10px;
    transition: all .2s ease-in-out;
    &:hover{
        transform: scale(1.1);
        color:red;
    }
`;

const CropsCard = (props) => {
    return (
        <StyledCropsCard>
            <div className="StyledCropsCard">
                Kultúrnövények ide
                <div>{props.MainCrop}</div>
                <div>Best previous crop: {props.BesPreCrop}</div>
                <Link to={`/Crops/${props.id}`}>
                    <img src={`../assets/images/${props.img}.png`} alt="cover image" />
                </Link>
            </div>
        </StyledCropsCard>
    )
}

export default CropsCard;