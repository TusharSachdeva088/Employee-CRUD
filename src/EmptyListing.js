import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EmptyListing() {
    
    const [api, setapi] = useState([])
    // const [item, setItem] = useState("")
    const navigate = useNavigate();
    
    const loadDetails = (id) =>{
        navigate("/EmpDetails/"+id)
        localStorage.setItem('id',id)
    }

    const loadEdit = (id) =>{
        navigate("/EmpEdit/"+id)
    }

    const loadRemove = (id) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:3000/employee/"+id,{
                method: "DELETE"
            }).then((res)=>{
                alert("Removed Succefully")
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message);
            })
        }
    }

    const fcapi = async() =>{
        try{
        const response = await fetch("http://localhost:3000/employee")
        // const data = await response.json()
        setapi(await response.json())
        // console.log(data);
    }
    catch(error){
        console.log("my error is" + error);
    }
}

    useEffect(() =>{
        fcapi()
    },[])

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee Listing</h2>
                </div>
            <div className='card-body'>
            <Link to = '/EmpCreate' target="_blank" className='btn btn-success'>Add New(+)</Link>
                <table className='table table-bordered p-3'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                        {
                            api.map((data) => (
                                <tr> 
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <a className='btn btn-success' target="_blank" onClick={() => {loadEdit(data.id)}}>Edit</a>
                                    <a className='btn btn-danger' onClick={() => {loadRemove(data.id)}}>Remove</a>
                                    <a className='btn btn-dark' onClick={() => {loadDetails(data.id)}}>Details</a>
                                </td>
                                </tr>
                            )
                            )
                        }
                </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}