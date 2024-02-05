import React, { useState } from 'react'

const CreateArea = () => {
    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const {name,value}=event.target;

        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            };
        })
    }

  return (
    <div>
        <form>
        <input name="title" value={note.title} onChange={} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default CreateArea