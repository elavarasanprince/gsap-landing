import React from 'react'
import eampimg from '../assets/images/exampleimg.jpg'

const exmpimg = [
    {id:1, src:eampimg, alt:"Exmple Image"},
    {id:2, src:eampimg, alt:"Exmple Image"},
    {id:3, src:eampimg, alt:"Exmple Image"},
    {id:4, src:eampimg, alt:"Exmple Image"},
    {id:5, src:eampimg, alt:"Exmple Image"},
    {id:6, src:eampimg, alt:"Exmple Image"},
    {id:7, src:eampimg, alt:"Exmple Image"},
    {id:8, src:eampimg, alt:"Exmple Image"}
]

function Example() {
  return (
   <>
   <div className="example-sec mb-5">
    <div className="container">
    <div className="text-center mb-5">
          <h2 className="section-title">Real Examples</h2>
          <p className="section-subtitle">For purposes of confidentiality, client details are obscured.</p>
          <i>*real engagement metrics</i>
        </div>
        <div className="row">
           
                { 
                exmpimg.map(eximg=>(
                    <div className="col-lg-3" key={eximg.id}>

                    <div className="exmp-img mb-4">
                    <img className='img-fluid' src={eximg.src} alt={eximg.alt} />
                </div>
                </div>
                ))
                }
            
               
           
        </div>
    </div>
   </div>
   </>
  )
}

export default Example