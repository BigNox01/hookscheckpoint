import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YoutubePlayer from "./videoplayer"
import { useState } from "react";

function MoviePopUp({ show, onHide, movie,trailer }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const openPlayer = () => {
    setShowPlayer(true);
  };
  return (
    // the previous error was an extra model tag  blocking the entirety of the code
    <div
      className="modal show"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Modal.Dialog
        show={show}
        onHide={onHide}
        centered
        onClick={(e) => e.stopPropagation()}
      >
        <Modal.Header>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{movie.description}</p>
          {showPlayer && <YoutubePlayer trailer={trailer} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" on onClick={openPlayer}>
            see trailer
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
export default MoviePopUp;
