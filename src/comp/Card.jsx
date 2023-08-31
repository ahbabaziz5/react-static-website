import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYNp8LnXofrTBeXtxZ8Ey8VMQQRHgIYH85vW_CbXy&s" />
      <Card.Body>
        <Card.Title>iphone</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero et architecto eos consequatur nostrum reiciendis autem mollitia magnam corporis expedita necessitatibus 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;