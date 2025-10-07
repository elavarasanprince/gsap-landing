import React from 'react'

const exmpimg = [
    {id:1, src:"./src/assets/images/exampleimg.jpg", alt:"Exmple Image"},
    {id:2, src:"./src/assets/images/exampleimg.jpg", alt:"Exmple Image"},
    {id:3, src:"./src/assets/images/exampleimg.jpg", alt:"Exmple Image"},
    {id:4, src:"./src/assets/images/exampleimg.jpg", alt:"Exmple Image"},
    {id:5, src:"./src/assets/images/exampleimg.jpg", alt:"Exmple Image"},
    {id:6, src:"./src/assets/images/exampleimg.jpg", alt:"Exmple Image"},
    {id:7, src:"./src/assets/images/exampleimg.jpg", alt:"Exmple Image"},
    {id:8, src:"./src/assets/images/exampleimg.jpg", alt:"Exmple Image"}
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
                    <div className="col-lg-3">

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