import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EmpCreate() {

  const [id, setID] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [active, setActive] = useState("")
  const navigate = useNavigate();

     const handleSubmit = (e) =>{
      e.preventDefault();
      console.log({id,name,phone,active});

      const data = {id,name,email,phone,active};
      fetch("http://localhost:3000/employee",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(data)
      })
      .then((res)=>{
        alert("data is submited")
        navigate("/")
      }).catch((err)=>
        alert("some error in server" + err)
      )
}

  return (
    <div>
    <p>this is new one</p>
      <div  className='row'>
      <div className='offset-lg-3 col-lg-6'>
      <form className='container' onSubmit={handleSubmit}>
        <div className='card' style={{"textAlign":"left"}}>
          <div className='card-title'>
            <h2>Creating New Employee</h2>
          </div>
          <div className='card-body'>

            <div className='row'>
              <div className="col-lg-12">
                <div className='form-group'>
                  <label>ID</label>
                  <input value={id} disabled="disabled" className='form-control'></input>
                  
                </div>
              </div>
              <div className="col-lg-12">
                <div className='form-group'>
                  <label>Name</label>
                  <input value={name} required onChange={e => setName(e.target.value)} className='form-control'></input>
                  
                  {name.length <= 3 && <span className='text-danger'>Name is must be 3 letters</span>}
                </div>
              </div>
              <div className="col-lg-12">
                <div className='form-group'>
                  <label>Email</label>
                  <input value={email} type="email" required onChange={e => setEmail(e.target.value)} className='form-control'></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className='form-group'>
                  <label>Phone</label>
                  <input value={phone} type="number" onChange={e => setPhone(e.target.value)} className='form-control'></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className='form-check'>
                <input checked={active} onChange={e => setActive(e.target.checked)} type= "checkbox" className='form-check-input'></input>
                  <label className='form-check-label'>Is Active</label>
                
                </div>
              </div>
              <div className="col-lg-12">
                <div className='form-group'>
                  <button className='btn btn-success' type='submit '>Submit</button>
                  <Link to="/" className='btn btn-danger'>Back</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        </form>
      </div>

      </div>
    </div>
  )
}