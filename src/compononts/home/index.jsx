import React from 'react'
import photo_1 from "../../assets/photo-1.png"
import photo_2 from "../../assets/photo-2.png"
import photo_3 from "../../assets/photo-3.png"
import photo_4 from "../../assets/photo-4.png"
import photo_5 from "../../assets/photo-5.png"
import photo_6 from "../../assets/photo-6.png"
import photo_7 from "../../assets/photo-7.png"
import photo_8 from "../../assets/photo-8.png"
import photo_9 from "../../assets/photo-9.png"
const Home_h = () => {
  return (
    <div class="bg-stone-300">
        <div class="bg-stone-200 flex justify-center items-center  rounded-xl"><p class="not-italic font-normal text-7xl leading-[83px] font-serif w-[630px] h-[166px] flex justify-center items-center text-center">
            Time, dedication, and darn good eats.</p></div>
        <div class="flex justify-center items-center pt-[50px]"><p class="not-italic font-normal text-4xl leading-[42px] font-serif w-[1238px] h-[128px] flex justify-center items-center text-center">If breakfast is the most important meal of the day, then brunch is the most important 
  meal of the week. We treat it with the pomp and ceremony it deserves, using farm-
       fresh ingredients to craft food you’ll spend the next six days dreaming about.

</p></div>
        <div class="flex justify-center items-center pt-[40px] "><button class="w-[351px] h-[75px] bg-[#3B3131] rounded-[12px] text-white  not-italic font-bold font-semibold text-[40px] leading-[59px]">OUR   STORY</button></div>

<div class="flex justify-center items-center pt-[100px]">
<div class="flex flex-1 h-[591px]"> <img src={photo_1} class="w-[100%]" alt="" /></div>
<div class="flex flex-1 h-[591px]"> <img src={photo_2} class="w-[100%]" alt="" /></div>
<div class="flex flex-1 h-[591px]"> <img src={photo_3} class="w-[100%]" alt="" /></div>
</div>
<div class="flex justify-center items-center">
<div class="flex flex-1 h-[591px]"> <img src={photo_4} alt="" class="w-[100%]" /></div>
<div class="flex flex-1 h-[591px]"> <img src={photo_5} alt="" class="w-[100%]" /></div>
<div class="flex flex-1 h-[591px]"> <img src={photo_6} alt="" class="w-[100%] h-[596px]" /></div>
</div>
<div class="flex justify-center items-center">
<div class="flex flex-1 h-[591px]"> <img src={photo_7} alt=""class="w-[100%]" /></div>
<div class="flex flex-1 h-[591px]"> <img src={photo_8} alt=""class="w-[100%]" /></div>
<div class="flex flex-1 h-[591px]"> <img src={photo_9} alt=""class="w-[100%]" /></div>
</div>


    </div>
  )
}

export default Home_h