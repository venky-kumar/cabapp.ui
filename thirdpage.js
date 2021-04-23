function bill() {
    //alert ("working");
    event.preventDefault();
    let km = document.getElementById("kilometer").value;
    let select = document.querySelector("#cars").value;
    let calculate = document.querySelector("#calculate").value;
    //alert(km+select+calculate);
    let type = "";
    let amt = 0;
    let result = 0;
    let gstprice = "";

    switch (select) {
        case "micro":
            //alert("micro")
            type = "micro";
            
            amt = 10;
            result = km * amt;
            gstprice = gst(result);
            pricedetails(type, result, gstprice);
            break;

        case "macro":
            type = "macro";
            amt = 15;
            result = km * amt;
            gstprice = gst(result);
            pricedetails(type, result, gstprice);
            break;

        case "prime":
            type = "prime";
            amt = 20;
            result = km * amt;
            gstprice = gst(result);
            pricedetails(type, result, gstprice);
            break;
    }
    localStorage.setItem("type",type);
    localStorage.setItem("gst",results);
}


function pricedetails(type, results) {
    document.getElementById('bill').innerHTML
        = 'the price for travelling in ' + type + " is " + results + ".Rs";
        localStorage.setItem("gst",results);
}
localStorage.setItem("gst",results);
function gst(result) {
    let gstprice = (result * 0.07) + result;
    document.getElementById('gst').innerHTML
        = 'the price including GST is ' + gstprice + ".RS";
    localStorage.setItem("price", gstprice);
    console.log(gstprice);

}

















