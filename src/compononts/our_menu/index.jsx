import React from 'react'
import line from "../../assets/Line 3.png"
import insta from "../../assets/insta.png"
import twit from "../../assets/twit.png"
import { Hole, Salad } from './style'

const Menu = () => {
  return (
    <div class="bg-[#C4C4C4]">



<div class="flex justify-center items-end text-center p-[50px]"><p class=" font-serif not-italic font-normal text-[96px] leading-[111px] text-[#000000]  ">Our Menu</p></div>

<div class="flex justify-center items-center text-center"><p class="font-mono not-italic font-bold text-[60px] leading-[73px] text-[#000000]">Breakfast | Lunch | Dinner | Drinks</p></div>




<div class="flex justify-center items-center pt-[100px]">

<div class="grid justify-center items-center gap-[50px] p-[50px]">
<div class="grid gap-[50px] ">
   <div class="flex gap-[50px]"> <p class="font-serif not-italic font-normal text-[48px] leading-[55px] "> Buttermilk Flapjacks </p>    
      <p class="text-[#9E1E1E] font-serif not-italic font-normal text-[48px] leading-[55px] "> $16</p></div>

<p class="font-serif not-italic font-normal text-[36px] leading-[41px]"> Two flapjacks served with molasses and
our signature sassafras-infused whipped cream. </p>
 </div>
 <div class="flex"><img src={line} alt="" /></div>

 <div class="grid gap-[50px] ">
  <div class="flex gap-[20px]"> <p class="font-serif not-italic font-normal text-[48px] leading-[55px]"> Buckwheat Cakes Honey</p>  
  <p class="text-[#9E1E1E] font-serif not-italic font-normal text-[48px] leading-[55px]"> $17</p>  </div>

<p class="font-serif not-italic font-normal text-[36px] leading-[41px]"> Two thick buckwheat cakes served with honey and our
   signature sassafras-infused whipped cream. </p> 
</div>
</div>


<div class="grid justify-center items-center gap-[50px] p-[50px]">
<div class="grid gap-[50px] "> 
<div class="flex gap-[40px]"> <p class="font-serif not-italic font-normal text-[48px] leading-[55px]"> Hotcakes & Sausage </p>   
    <p class="text-[#9E1E1E] font-serif not-italic font-normal text-[48px] leading-[55px]"> $12</p></div>

 <p class="font-serif not-italic font-normal text-[36px] leading-[41px]"> Cornmeal and molasses hotcakes served with sweet fennel pork sausage. </p>
 </div> 
 <div class="flex pt-[35px]"><img src={line} alt="" /></div>

 <div class="grid gap-[50px] ">
  <div class="flex gap-[50px]"> <p class="font-serif not-italic font-normal text-[48px] leading-[55px]"> Grits & Strawberries</p>   
      <p class="text-[#9E1E1E] font-serif not-italic font-normal text-[48px] leading-[55px] ">$16</p>  </div>

 <p class="font-serif not-italic font-normal text-[36px] leading-[41px]"> Corn grits and local beans known as
Arizona Strawberries. Served with onion, garlic,
poblano, and ham gravy.</p>
</div>

</div>

</div>


<div class="flex justify-center items-center pt-[40px] "><button class="w-[351px] h-[75px] bg-[#3B3131] rounded-[12px] text-white  not-italic font-bold font-mono text-[43px] leading-[64px]">FULL MENU</button></div>




<div class="flex justify-center items-center p-[80px]">
<div class="flex flex-1">
<div class="flex justify-center items-center w-[657px] h-[473px] bg-[#E9E9E9] static" style={{border:"1px solid red"}}>card</div>
<div class="grid justify-center items-center w-[657px] h-[473px] bg-[#E9E9E9] absolute" style={{border:"1px solid black"}}> <p>"When your eggs are accompanied by the long-lost cowboy fry bread, you know you’re in for a treat. The cocktails are expertly crafted and the meals at Baratier are simple yet decadent. The only thing you’ll regret is not having a nap pod to jump into afterwards."</p> <p>-Monkey D. Luffy</p></div>
</div>

<div class="felx flex-1">
<Salad/></div>
</div>






<Hole>
  <div class="grid justify-center items-centr pt-[100px]">
  <div class="flex justify-center "><p class="font-sans not-italic font-bold text-8xl leading-[142px] text-[#FFFFFF]">EAT TOGETHER</p></div>
  <div class="flex justify-center items-centr text-center pl-[70px] pr-[70px]"><p class="font-sans not-italic font-medium text-4xl leading-[53px] text-[#FFFFFF]">Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour– 
   dessert.</p></div>
  <div class="flex justify-center items-centr  pt-[30px]"><button class="w-[427px] h-[90px] bg-[#383737] rounded-[44px] text-[#E9E9E9]  not-italic font-medium  text-[40px] leading-[59px] underline">MAKE RESERVATION</button> </div>
  </div>
</Hole>


<div class="flex h-[175px]">

<div class="grid flex-1 justify-center items-center text-center h-[125px] pt-[26px]">    <p class="font-sans not-italic font-bold text-[36px] leading-[53px]"> CONTACT</p>
     <div class="font-sans not-italic font-bold text-[24px] leading-[35px]"> Sambas Region</div>
     <div class="font-sans not-italic font-bold text-[24px] leading-[35px]">East Blue Near Grand Line</div>
</div>




<div class="grid flex-1 justify-center items-center text-center"> <p class="font-sans not-italic font-bold text-[48px] leading-[71px]">BARATIE</p>
<div class="flex justify-evenly"><img src={insta} alt="" />
<img src={twit} alt="" /></div>
<div class="font-sans not-italic font-bold text-[24px] leading-[35px]">email@example.com</div>
<div class="font-sans not-italic font-bold text-[24px] leading-[35px]"> (555) 888-9999</div>
</div>



<div class="grid flex-1 justify-center items-center text-center h-[123px] pt-[26px]">
  <div class="font-sans not-italic font-bold text-[36px] leading-[53px]">HOURS</div>
  <div class="font-sans not-italic font-bold text-[24px] leading-[35px]">Monday - Sunday </div>
  <div class="font-sans not-italic font-bold text-[24px] leading-[35px]"> 10am - 10pm</div>
</div>
</div>













    </div>
  )
}

export default Menu