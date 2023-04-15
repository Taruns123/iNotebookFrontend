import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {

    const context = useContext(noteContext);
    const {deleteNote} = context;
   

    const {note,updateNote} = props;
  return (
    <div>
        <div className="card my-3 mx-2" style={{ width: "18rem" }}>
  <div className="card-body">
    <div className='d-flex align-items-center'>
    <h5 className="card-title">{note.title}</h5>
    <i className="mx-2 fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id)}} />
    <i className="mx-2 fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}/></div>
    <p className="card-text">{note.description}</p>
    
  </div>
</div>
    </div>
  )
}

export default Noteitem