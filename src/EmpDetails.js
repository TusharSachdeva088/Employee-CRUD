import React,{useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

export default function EmpDetails() {

    const {id} = useParams();

    // const data = {id,name,email,phone,active};
    const [api, setapi] = useState()
    // const [uid, setid] = useState("")

    // const mid = () =>{
    //   const x = localStorage.getItem('id')
    //       setid(x)
    // }

    const loadRemove = () =>{
          fetch("http://localhost:3000/employee/"+id)
          .then((res) => res.json())
          .then((json) => {
              setapi(json);
              // mid();
              console.log(json);
              console.log("this is ", id);
          })
  }

  useEffect(()=>{
    loadRemove()
  },[])

    // useEffect(()=>{
    //     fetch("http://localhost:3000/employee/"+aid).then((res) => {
    //         return res.json();
    //     }).then((Resp) => {
    //         setapi(Resp);
    //         console.log(Resp);
    //     }).catch((err)=>{
    //         console.log(err.message);
    //     })
    // },[])

  return (
    <div className='card' style={{"textAlign":"left"}}>
     <div className='card-title'>
             <h2>Creating New Employee</h2>
           </div>
    {api &&
         <div className='card-body'>
         <h2>The Employee name is :{api.name}  </h2>
         <h3>Contact Details: </h3>
         <h4>Email:{api.email} </h4>
         <h4>Phone:{api.phone} </h4>
         <Link to={"/"} className='btn btn-danger' >Back</Link>
     </div>
    }
    </div>
  )
}


// {/* <div className='card' style={{"textAlign":"left"}}>
//           <div className='card-title'>
//             <h2>Creating New Employee</h2>
//           </div>
//           <div className='card-body'>
//         <h1>The Employee name is :{detail.name}  </h1>
//         <h2>Contact Details: </h2>
//         <h3>Email: </h3>
//         <h4>Phone: </h4>
//         <Link to={"/"} className='btn btn-danger' >Back</Link>
//     </div>
//     </div> */}