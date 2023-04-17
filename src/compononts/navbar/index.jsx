import React from 'react'
import { Bgphoto } from './style'
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/Instagram.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<Bgphoto>
  <div class= "flex justify-center items-center h-16 fixed t-0 w-[100%]"> 
  <div class="flex flex-1 pl-8 items-center"><p class="text-white not-italic font-bold text-5xl leading-16 font-serif cursor-pointer">BARATIE</p></div>


  <div class= "flex flex-1 justify-evenly items-center" >
    <Link to="/" class="text-white cursor-pointer not-italic font-normal text-2xl underline decoration-solid font-serif">HOME</Link>
    <Link to="/menu" class="text-white cursor-pointer not-italic font-normal text-2xl font-serif">MENU</Link>
    <div> <p class="text-white cursor-pointer not-italic font-normal text-2xl font-serif">GALLARY</p></div>
    <div><p class="text-white cursor-pointer not-italic font-normal text-2xl font-serif">VISIT</p></div>

    <div><img src={twitter} alt="" class="cursor-pointer" /></div>
    <div><img src={instagram} alt="" class="cursor-pointer" /></div>
  </div>
  </div>
  <div class= "flex justify-evenly items-center text-center underline decoration-solid font-normal text-9xl text-white pt-96">
     <div class= "flex justify-center items-center text-center underline decoration-solid font-normal text-9xl text-white font-serif">EAT</div>
      <div class= "flex justify-center items-center text-center underline decoration-solid font-normal text-9xl text-white font-serif">DRINK</div>
      <div class= "flex justify-center items-center text-center underline decoration-solid font-normal text-9xl text-white font-serif"> VISIT</div>
      </div>
</Bgphoto>


   </div>
  )
}

export default Navbar