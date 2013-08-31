var SCROLLING_TEXT_ID = "scrolling_text";
var SLOWER_ID = "scrolling_text_slower";
var FASTER_ID = "scrolling_text_faster";
var CHANGE_DIRECTION_ID = "scrolling_text_change_direction";
var fullText = "";
var remainIngText = "";
var scroller;

(function()
{
  if (window.addEventListener)
  {
    window.addEventListener("load", setup, false);
  }
  else
  {
    window.attachEvent("onload", setup);
  }

  function setup()
  {	  
    //The controls should all be input elements (type="button") so that they can be disabled
    scroller = new Scroller(SCROLLING_TEXT_ID, SLOWER_ID, FASTER_ID, CHANGE_DIRECTION_ID);
  }
})();

//Scroller class
function Scroller(id, sid, fid, cdid)
{
 // this.sid = sid;	//Remember to disable/enable the input element later on
  //this.fid = fid;	//Remember to disable/enable the input element later on
  
  this.scrolling_text = document.getElementById(id);
  var obj = this;
  //this.scrolling_text.onmouseover = function(){obj.stop_scroll();};
  //this.scrolling_text.onmouseout = function(){obj.scroll();};
  
  //document.getElementById(sid).onclick = function(){obj.slower();};
  //document.getElementById(fid).onclick = function(){obj.faster();};
  //document.getElementById(cdid).onclick = function(){obj.change_direction();};
       
  this.timer = null;
  this.speed = 200;	//1000 = 1 second
  this.right_to_left = true;
  remainIngText = this.scrolling_text.firstChild.nodeValue;
 // this.update_speed_controls();      
  this.scroll();
}

Scroller.prototype.scroll = function()
{
  var text = remainIngText;
  var obj = this;
  this.scrolling_text.className = "scrollTempStyleRight";
  if (text.length > 0)
  {
    //Remove the first character and add it to the end
    if (this.right_to_left)
    {
      fullText = fullText + text.substring(0, 1);
      remainIngText = text.substring(1, text.length);
    }
    else
    {
      text = text.substring(text.length - 1, text.length) + text.substring(0, text.length - 1);
    }
    this.scrolling_text.firstChild.nodeValue = fullText;
    this.timer = setTimeout(function(){obj.scroll();}, this.speed);
  }else{
	  remainIngText = fullText;
	  fullText = "";
	  this.scroll_otherway();
  }
  
}

Scroller.prototype.scroll_otherway = function()
{
	  var text = remainIngText;
	  var obj = this;
	  this.scrolling_text.className = "scrollTempStyleLeft";
	  if (text.length > 0)
	  {
	    //Remove the first character and add it to the end
	    if (this.right_to_left)
	    {
	      fullText = fullText + text.substring(0, 1);
	      remainIngText = text.substring(1, text.length);
	    }
	    else
	    {
	      text = text.substring(text.length - 1, text.length) + text.substring(0, text.length - 1);
	    }
	    this.scrolling_text.firstChild.nodeValue = remainIngText;
	    this.timer = setTimeout(function(){obj.scroll_otherway();}, this.speed);
	  }else{
		  this.scrolling_text.firstChild.nodeValue = "";
		  remainIngText = fullText;
		  fullText = "";
		  this.scroll();
	  }
}

Scroller.prototype.stop_scroll = function()
{
  if (this.timer)
  {
    clearTimeout(this.timer);
  }
}

Scroller.prototype.slower = function()
{
  if (this.speed < 451)
  {
    this.speed += 50;            
  }
  
  this.update_speed_controls();
}

Scroller.prototype.faster = function()
{
  if (this.speed > 49)
  {
    this.speed -= 50;
  }
  
  this.update_speed_controls();
}

Scroller.prototype.change_direction = function()
{
  this.right_to_left = !this.right_to_left;
}

Scroller.prototype.update_speed_controls = function()
{
 // document.getElementById(this.sid).removeAttribute("disabled");
 // document.getElementById(this.fid).removeAttribute("disabled");
  
  if (this.speed < 50)	//Disable the faster button
  {      
    document.getElementById(this.fid).setAttribute("disabled", "disabled");
  }
  else if (this.speed > 450)	//Disable the slower button
  {      
    document.getElementById(this.sid).setAttribute("disabled", "disabled");      
  }
}