import React from 'react'
import {Container,Card, Button} from 'react-bootstrap';
import image from '../images/image.jpg';

function Blog() {
  return (
      <>
   <style type="text/css">
   {`
   .flat {
     background-color: purple;
     color: #b31111;
   }

   `}
 </style>


     <Container  className="mt-0" >
         <Card >
           <Card.Header  >"Le nom de Garage"  Featured FeaturedFeatured Featured FeaturedFeaturedFeaturedFeaturedFeatured FeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeatured</Card.Header>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                 With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
     </Container>
     </>
  )
  
}

export default Blog
