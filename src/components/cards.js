import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MoviePopUp from './Modal';

function MovieCards({movieData}) {
  const [selectedMovie,setSelectedMovie]= useState(null);
  const openModal=(movie)=>{
    setSelectedMovie(movie)
  }
  return (
    <div className='movieCard'>
     {movieData.map((card)=>( 
            <Card  key={card.id} style={{ width: '18rem' }}>
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
            <Button variant="primary" onClick={()=>openModal(card)}>See Description</Button>
          </Card>
     ))}
            
                 {/* render the movie modal component with the selected movie detail*/}
     {
      selectedMovie && (<MoviePopUp 
      key={selectedMovie? selectedMovie.id:null}
      show={selectedMovie!==null}
      onHide={()=>setSelectedMovie(null)}
      movie={selectedMovie}
      /*added the trailer prop to handle the links */
      trailer={selectedMovie.link}/>
      )}
    </div>
  );
}

export default MovieCards;