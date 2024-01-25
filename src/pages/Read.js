import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Read() {

const [user, setuser] = useState([])
let navigate=useNavigate()
useEffect (()=>
{
  axios.get("http://localhost:3000/Songs/").then((res)=>
  {
    //  console.log(res.data);
    setuser(res.data)
  })
})

let deleteuser=(sno)=>[
  axios.delete("http://localhost:3000/Songs/"+sno).then((res)=>
  {
    navigate('/read')
  })
]
return (
   <>
   <table className="table table-hover text-center">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Song</th>
      <th scope="col">Title</th>
      <th scope="col">Singer</th>
      <th scope="col">Lyrics</th>
      <th scope="col">Music</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {user?<tbody>
{user.map((item)=>
{
return(
  <tr>
    <td>{item.id}</td>
    <td><audio controls src={item.song}> </audio></td>
    <td>{item.title}</td>
    <td>{item.singer}</td>
    <td>{item.lyrics}</td>
    <td>{item.music}</td>
    <td><Link to={'/update/'+item.id}>
        <MdEdit size={30}/></Link>
    </td>
    <td>
      <MdDelete color='#cc0000' size={30} onClick={()=>{deleteuser(item.id)}}/></td>
  </tr>
)}
)}

  </tbody>:<p>no data</p>}
  
</table>


   </>
  )
}

export default Read