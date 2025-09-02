import React from 'react'
import { FaDribbble, FaInstagram, FaRegEnvelope, FaTwitter, FaHome } from "react-icons/fa";
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";


const TopNavbar = () => {
  return (
   <>
    <div className="row mycolor sticky-top">
          <div className="col-sm-6 py-1 mycolor">
            <div className="row">
              <div className="col-6 py-1 text-end">
                <FaRegEnvelope className="btncolor" />
                &nbsp; <b className="text-light"> nsingh.63590@gmail.com</b>
              </div>
              <div className="col-6 py-1">
                <FaLocationDot className="btncolor" />
                &nbsp; <b className="text-light"> Bakshi ka talab, Lucknow</b>
              </div>
            </div>
          </div>
          <div className="col-sm-6 py-1 text-center text-light mycolor ps-5">
            <FaFacebookF />
            &nbsp;&nbsp; <FaTwitter />
            &nbsp;&nbsp;
            <FaInstagram />
            &nbsp;&nbsp;
            <FaDribbble />
            
         
          </div>
        </div>
   </>
  )
}

export default TopNavbar
