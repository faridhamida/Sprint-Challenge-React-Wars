import React from "react";
import styled from "styled-components";
import { Card, CardText, CardTitle, CardBody, } from "reactstrap";

const CardStyle = styled.div`
   color: purple;
   width: 100%;
   transition: transform 0.2s ease-in;   

&:hover {
    transform: translate(-5px) scale(1.4); 
}
`;


const BackColors = styled.div`
background: yellow;
`;

const CardBodyColor = styled.div`
background: black;
`;

const CardTitleSize = styled.h2`
font-size:40px;
`;
const StarWarsCard = props => {

    return (
        
        <CardStyle>
                <Card>
                    <CardBodyColor>
                    <CardBody>
                        <BackColors>
                            <CardTitleSize>
                            <CardTitle>{props.name}</CardTitle>
                            </CardTitleSize>
                            <CardText>Height:{props.height}</CardText>
                            <CardText>Mass:{props.mass}</CardText>
                        </BackColors>
                    </CardBody>
                    </CardBodyColor>
                </Card>
          
        </CardStyle>
        
    );

}

export default StarWarsCard;