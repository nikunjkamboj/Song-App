import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import './style.css'
import axios from 'axios'

function Update() {
  let {id} =useParams()
   let navigate  = useNavigate()
  let [song,setsong] =useState()
  let [title,settitle] =useState() 
  let [singer,setsinger] =useState()
  let [lyrics,setlyrics] =useState()
  let [music,setmusic] =useState()


  useEffect(()=>{
    axios.get("http://localhost:3000/Songs/"+id).then((res)=>{
    console.log(res.data);
     setsong(res.data.song)
    //  console.log(song);
     settitle(res.data.title)
      setsinger(res.data.singer)
      setlyrics(res.data.lyrics)
      setmusic(res.data.music)
    })
    },[id])

  let updateUser=(e)=>
  {
    e.preventDefault()
    axios.put("http://localhost:3000/Songs/"+id,{ 
      title,singer,lyrics,music
    }).then((res)=>
    {
      navigate('/read')
    })
  }
  return (
    <>

<div className='mx-auto col-5 m-5 dataUpdate p-3'>
   <form onSubmit={updateUser}>
   {/* <div className="mb-3">
  <label  className="form-label">Song</label>
  <input type="file" name='name' className="form-control"  placeholder="Upload Song" 
   value={song} onChange={(e)=>{setsong(e.target.value)}} />
</div> */}

<div className="mb-3">
<audio className="form-control"  controls src={song} />
</div>

<div className="mb-3">
  <label  className="form-label">Song Name</label>
  <input type="text" name='age' className="form-control"  placeholder="Enter Song name"
   value={title} onChange={(e)=>{settitle(e.target.value)}} />
</div>
<div className="mb-3">
  <label  className="form-label">Song Singer</label>
  <input type="text" name='email' className="form-control" placeholder="Enter Song Singer"
   value={singer} onChange={(e)=>{setsinger(e.target.value)}} />
</div>
<div className="mb-3">
  <label  className="form-label">Song Lyrics</label>
  <input type="text" name='roll' className="form-control" placeholder="Enter Song Lyrics"
   value={lyrics} onChange={(e)=>{setlyrics(e.target.value)}} />
</div>
<div className="mb-3">
  <label  className="form-label">Song Music</label>
  <input type="text" name='roll' className="form-control" placeholder="Enter Song Music"
   value={music} onChange={(e)=>{setmusic(e.target.value)}} />
</div>
<div className="mb-3 ">
 
  <input type="Submit" name='sub' className="form-control btn btn-success" value="Update"/>
</div>
   </form>
   </div>


    </>  
    )
}

export default Update