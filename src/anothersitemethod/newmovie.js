import newMovie from "../DataBases/newmovieDataBase"
import NewCards from "../components/NewCard"

function AddaMovie() {
    return(
        <div>
        <NewCards newmovie={newMovie} >
        </NewCards>
        </div>
    )
}
export default AddaMovie