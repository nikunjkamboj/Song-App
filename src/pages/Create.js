import React,{useState} from 'react'
import "./style.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Create() {
  let navigate=useNavigate()
  let [song,setsong]=useState([])
  let [title,settitle]=useState([])
  let [singer,setsinger]=useState([])
  let [lyrics,setlyrics]=useState([])
  let [music,setmusic]=useState([])

  let submitUser=(e)=>
  {
    e.preventDefault()
    axios.post("http://localhost:3000/Songs/",{
      song,title,singer,lyrics,music
    }).then((res)=>{
      // console.log(res.data);
      navigate('/read')
    })
  }

  return (
   <>

<div className='mx-auto col-5 m-5 data p-3'>
   <form onSubmit={submitUser}>
   <div className="mb-3">
  <label  className="form-label">Song</label>

  

  <input type="file" name='name' className="form-control"  placeholder="Upload Song"
  onChange={(e)=>{setsong(e.target.value)}}/>
</div>
<div className="mb-3">
  <label  className="form-label">Song Name</label>
  <input type="text" name='age' className="form-control"  placeholder="Enter Song name"
  onChange={(e)=>{settitle(e.target.value)}}/>
</div>
<div className="mb-3">
  <label  className="form-label">Song Singer</label>
  <input type="text" name='email' className="form-control" placeholder="Enter Song Singer"
  onChange={(e)=>{setsinger(e.target.value)}}/>
</div>
<div className="mb-3">
  <label  className="form-label">Song Lyrics</label>
  <input type="text" name='roll' className="form-control" placeholder="Enter Song Lyrics"
  onChange={(e)=>{setlyrics(e.target.value)}}/>
</div>
<div className="mb-3">
  <label  className="form-label">Song Music</label>
  <input type="text" name='roll' className="form-control" placeholder="Enter Song Music"
  onChange={(e)=>{setmusic(e.target.value)}}/>
</div>
<div className="mb-3 ">
 
  <input type="Submit" name='sub' className="form-control createBtn"/>
</div>
   </form>
   </div>
   </>
  )
}

export default Create