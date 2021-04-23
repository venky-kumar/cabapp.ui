let type = localStorage.getItem("type");
document.getElementById('cabType').innerHTML=type;
let name = localStorage.getItem("username");
document.getElementById('name').innerHTML=name;
let age1 = localStorage.getItem("age");
document.getElementById("age").innerHTML = age1;
let journeydate= localStorage.getItem("jd");
document.getElementById('journeydate').innerHTML=journeydate;
let journeytime= localStorage.getItem("jt");
document.getElementById('journeytime').innerHTML=journeytime;
let cost= localStorage.getItem("gst");
alert(cost);
document.getElementById('price').innerHTML= cost;
let gstprice= localStorage.getItem("price");
document.getElementById('gstprice').innerHTML=gstprice;
let senior= localStorage.getItem("seniorprice");
alert(senior);
document.getElementById('senior').innerHTML=senior;













/*

<label>Name :</label><span id='name'></span><br>
<label>Age :</label><span id='name'></span><br>
<label>Cab Type :</label><span id='name'></span><br>
<label>Distance of Travel :</label><span id='name'></span><br>
<label>Journey Date :</label><span id='name'></span><br>
<label>Journey Time :</label><span id='name'></span><br>
<label>peak Hour :</label><span id='name'></span><br>
<label>price Excluding GST :</label><span id='name'></span><br>
<label>rice including 7% of GST  :</label><span id='name'></span><br>
<label>Eligible for Seniority Discount:</label><span id='name'></span><br>*/