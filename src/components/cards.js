import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MovieCards({movieData}) {
  return (
    <div className='movieCard'>
     {movieData.map((card)=>(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.poster} />
            <Card.Body>
              <Card.Title> {card.title} </Card.Title>
              <Card.Text>
                {card.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item> {card.rating} </ListGroup.Item>
            </ListGroup>
          </Card>
     ))}
    </div>
  );
}

export default MovieCards;