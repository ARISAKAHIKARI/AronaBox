'use strict';
function petLayout(old,area,expanded,wasExpanded=true,previousSide='left'){
 const petWidth=Math.min(260,area.width),petX=old.x+(wasExpanded&&previousSide==='left'?old.width-petWidth:0),bottom=old.y+old.height;
 const left=Math.max(0,petX-area.x),right=Math.max(0,area.x+area.width-petX-petWidth);
 const side=expanded?(left>=380?'left':right>=380?'right':left>=right?'left':'right'):previousSide;
 const width=expanded?Math.min(640,area.width,petWidth+Math.max(230,side==='left'?left:right)):petWidth;
 const height=Math.min(expanded?470:350,area.height);
 const x=expanded&&side==='left'?petX+petWidth-width:petX;
 return {bounds:{x:Math.max(area.x,Math.min(x,area.x+area.width-width)),y:Math.max(area.y,Math.min(bottom-height,area.y+area.height-height)),width,height},side,chatWidth:Math.max(1,width-270)};
}
module.exports={petLayout};
