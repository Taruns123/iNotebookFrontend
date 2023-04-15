import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:''});

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description,note.tag);
        setNote({title:"",description:"",tag:""})
    }
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }


  return (
    <div>      <h2>Add a note</h2>
    <form>
<div className="form-group">
  <label htmlFor="title">Title</label>
  <input value={note.title} onChange={onChange} id="title" name="title" type="text" className="form-control"  aria-describedby="emailHelp"  />
</div>
<div className="form-group">
  <label htmlFor="description">Description</label>
  <input value={note.description} name ="description" onChange={onChange} type="text" className="form-control" id="description" />
</div>
<div className="form-group">
  <label htmlFor="tag">Tag</label>
  <input value={note.tag} name ="tag" onChange={onChange} type="text" className="form-control" id="tag" />
</div>

<button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form></div>
  )
}

export default AddNote