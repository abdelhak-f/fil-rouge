import React from 'react'
import './css/style.css';
import { NavLink } from 'react-router-dom';
import { Container, Card, Button, Badge } from 'react-bootstrap';
import image from '../images/image.jpg';



function Blog() {
  return (

     <Container  className="Blog" >
         {/* first blog */}
         <Card >
           <Card.Header  >"Le nom de Garage"  </Card.Header>
            <Card.Img 
            style={{ height: '400px', weiht: '500px' }}
             src={image} />
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
                 With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button  className="badge" variant="info">
              <NavLink to="/FormGarage" >take an appointment</NavLink> 
            </Button>  
           </Card.Body>
        </Card>

        <Card className="Blog">
           <Card.Header  >"Le nom de Garage"  </Card.Header>
            <Card.Img  
             style={{ height: '350px', weiht: '500px' }}
            src={image} />
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button className="badge" variant="info">take an appointment</Button>
           </Card.Body>
        </Card>

        {/* second blog */}
        
     </Container>




<Router>

     <Navbar />
     
    

     
    <Switch>
    <Route  path="/" exact component={Body} />
    <Route  path="/Blog" component={Blog} />
    {/* <Route  path="/Blog" component={FormGarage} /> */}
    </Switch>

    <Footer/>
</Router>


     
  )
  
}

export default Blog