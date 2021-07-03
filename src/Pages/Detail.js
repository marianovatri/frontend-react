import { useEffect, useState } from 'react'
import {
    Container, Row, Col,
} from 'react-bootstrap'
import {useParams} from 'react-router-dom'



function Detail() {

    let {id} = useParams()
    

    let [data, setData] = useState({})


    let url = "https://jsonplaceholder.typicode.com/users/" + id


    useEffect(function() {
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
    }, [])



    return (


        <Container>
              <Row>
                  <Col>
                   <h1>{data.name}</h1> 
                  </Col>
              </Row>
          </Container>



    )
}

export default Detail