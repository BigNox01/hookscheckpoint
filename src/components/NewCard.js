import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
function NewCards({onAddMovie}) {
  const [formData,setFormData]= useState({
    title:'',
    description:'',
    rating:'',
    poster:'',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  };
  const handleAddMovie=()=>{
    const movie={
      id:null,
      ...formData,
    }
    onAddMovie(movie)
  }

  return (
    <div>
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={formData.poster} />
            <Card.Body>
              <Card.Title> <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              ></input> </Card.Title>
              <Card.Text>
                <input
                type='text'
                name='description'
                value={formData.description}
                onChange={handleChange}
                ></input>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item> <input
              type='text'
              name='rating'
              value={formData.rating}
              onChange={handleChange}
              ></input> </ListGroup.Item>
            </ListGroup>
            <button onClick={handleAddMovie}>Add Movie</button>
          </Card>
    </div>
  );
}

export default NewCards;