"use client";


import {useEffect,useState} from "react";


export default function CursorGlow(){


const [pos,setPos]=useState({
x:0,
y:0
});


useEffect(()=>{


const move=(e:MouseEvent)=>{

setPos({
x:e.clientX,
y:e.clientY
});

};


window.addEventListener(
"mousemove",
move
);


return()=>window.removeEventListener(
"mousemove",
move
);


},[]);



return(

<div

style={{
left:pos.x,
top:pos.y
}}

className="
fixed
pointer-events-none
z-40
w-40
h-40
rounded-full
bg-cyan-400/10
blur-3xl
-translate-x-1/2
-translate-y-1/2
"

/>


)

}