import React, { useState, useEffect } from "react";
import StarWarsCard from "./StarWarsCard";
import axios from "axios";
import { Col, Row, Container } from "reactstrap";

function StarWarsList() {

    const [StarWarsData, setStarWarsData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response.data.results)
            setStarWarsData(response.data.results)
        })
        .catch(error => {
            console.log('sorry', error)
        })
    }, [])

    return (
        <Container max-width="100%">
            <div >
                <Row>
            {StarWarsData.map(stars => {
                return (
                    <Col xs="4" md="6" xl="6" >
                    <StarWarsCard
                        key={stars.id}
                        name={stars.name}
                        height={stars.height}
                        mass={stars.mass}  
                    />
                    </Col>
                )
            })}
                </Row>
        </div>
            
        </Container>
    );

}


export default StarWarsList;
