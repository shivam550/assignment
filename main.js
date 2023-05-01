 const dest = new Date (" may 10, 2023 10:00:00 ").getTime();


 const x = setInterval(function () {

 const now = new Date().getTime();


 const diff = dest-now;

 const days = Math.floor(diff / (1000*60*60*24));


 const hrs = Math.floor((diff % (1000*60*60*24)) / (1000* 60*60));

 
 const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
 
 const seconds = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById("day").innerHTML = days + " : " 
  document.getElementById("hours").innerHTML =  hrs + " : " 
  document.getElementById("min").innerHTML =  minutes + " : " 
  document.getElementById("seconds").innerHTML =  seconds

  


}, 1000);
 
 
 
 

 