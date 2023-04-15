import React, {useContext,useEffect,useRef,useState} from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  useNavigate } from 'react-router-dom';


const Notes = () => {
    const context = useContext(noteContext);
  const {notes,getNotes, editNote} = context;
  let navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      getNotes();
      console.log(localStorage.getItem('token'));
    }else{
      navigate('/login')

    }
    // eslint-disable-next-line
  },[]);
  const ref = useRef(null);

  const updateNote = (currentNote)=>{
    ref.current.click();
    setNote({id : currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  }

  const [show, setShow] = useState(false);
  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:'default'});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (e)=>{

    console.log("updating the note");
    editNote(note.id, note.etitle, note.edescription,note.etag);
    setShow(false);
    // addNote(note.title, note.description,note.tag);
}
const onChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value});
}


  return (
    <div>
    <AddNote/>
    <>
      <Button className='d-none' ref={ref} variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
<div className="form-group">
  <label htmlFor="title">Title</label>
  <input minLength={5} required onChange={onChange} value = {note.etitle} id="etitle" name="etitle" type="text" className="form-control"  aria-describedby="emailHelp"  />
</div>
<div className="form-group">
  <label htmlFor="description">Description</label>
  <input minLength={5} required name ="edescription" value = {note.edescription} onChange={onChange} type="text" className="form-control" id="edescription" />
</div>
<div className="form-group">
  <label htmlFor="tag">Tag</label>
  <input  name ="etag" onChange={onChange} value={note.etag} type="text" className="form-control" id="etag" />
</div>

</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} variant="primary" >
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <h2 className='my-3'>Your notes</h2>
    <div className=' row my-3'>
        <div className="container">
        {notes.length===0 && 'no notes to display'}
        </div>
    {notes.map((note, addNote)=>{
        return <Noteitem key={note._id} updateNote={updateNote} note={note}/>
    })}</div>
    </div>
  )
}

export default Notes