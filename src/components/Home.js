import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";
import Notes from "../components/Notes";
import AddNote from './AddNote';
const Home = (props) => {
  const {showAlert} = props;
   return (
    <div className='container my-3'>
     <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home