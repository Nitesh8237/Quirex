import React from 'react'

const Testimonial = () => {
  return (
   
      <>

<div className="row py-5 background ">
  <div className="text-center ">
      <div className="tagline ">Our Testimonial</div>
      <h2 className="section-title">Clients Feedback</h2>
    </div>
     <div className="col-sm-10 mx-auto ">
        <div className="row py-3">
           <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>"Quirex is a game-changer! The platform is user-friendly, and the property listings are accurate and up-to-date. I found my dream home quickly and efficiently. The customer support team is responsive and helpful. I'm impressed with the overall experience and would highly recommend Quirex to anyone looking for a hassle-free property search."</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Shivam Yadav</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>"I'm blown away by Quirex's innovative approach to real estate! The virtual tours and 360-degree views gave me a realistic feel for properties without having to physically visit. The platform's AI-powered recommendations also helped me discover hidden gems that fit my preferences. Quirex is redefining the property search experience!"</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Praveen Yadav</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        <div className='col-sm-4 '>
            <div className='card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3'>
              <span className='feedtop'><img src='/img/testimonial1.png'/></span>
              <p className='px-3 feedtext'>"Quirex made selling my property a breeze! The platform's intuitive interface and proactive support team ensured a smooth transaction. I appreciated the detailed analytics and insights, which helped me price my property competitively. I'm grateful for the Quirex experience and will definitely use it again for future transactions!"</p>
              <div className='row g-0'>
                <div className='col-4'>
                  <img src='' className='img-fluid feedimg' />
                </div>
                <div className='col-8'>
                  <span>
                    <b>Nitesh Singh</b><br/>
                    <p className='color1'>SELLING AGENTS</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
 
  



    </>

  )
}

export default Testimonial
