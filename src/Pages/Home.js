import {
    Container, Row, Col,
} from 'react-bootstrap'
import { connect } from 'react-redux'



function Home(props) {
    props:dispatch ({
        action : "",
        payload : e.target
    })

    function searchWithText(e) {
        console.log(e.target.value)
    }

    return (


        <Container>
              <Row>
                  <Col>
                   <h1>Home</h1> 

                    {
                        props.searching ? <p>Buscando...</p> : ''
                    }
                    <div>
                    Total {props.posts.length}
                    </div>


                        <hr/>

                        <input className="form-control" onimput={searchWithText} />



                    {
                        props.posts.map(post =>  {
                            return (<div className="text-primary" key={post.id}>{ post.title}</div>)
                        })
                    }

                   
                  </Col>
              </Row>
          </Container>



    )
}

function mapStatetoProps(state) {

    return {
        searching : state.searching,

        posts : state.posts,

        results : state.searching ? state.results : state.posts 
    }
}



export default connect(mapStatetoProps) (Home)