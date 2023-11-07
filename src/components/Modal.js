import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MoviePopUp({show,onHide,movie}) {
  return (

    <div
      className="modal show"
      style={{ display: 'flex', alignItems:'center' }}
    >
      <Modal show={show} onHide={onHide} centered ></Modal>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{movie.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} >Close</Button>
          <Button variant="primary" href={movie.link} target='_blank' rel='noopener noreferrer' >See Trailer</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>


  );
}

export default MoviePopUp;