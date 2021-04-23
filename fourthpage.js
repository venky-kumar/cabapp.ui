
function date() {

    event.preventDefault();
    let name = document.getElementById("username").value;
    alert(name);
    localStorage.setItem("username",name);
    let date = new Date();
    let tdate = date.getDate();
    let tmonth = date.getMonth();
    let tyear = date.getFullYear();
    let journeydate = document.getElementById("journeydate").value;
    localStorage.setItem("jd",journeydate);
    let jyear = journeydate.substr(0, 4);
    let jmonth = journeydate.substr(5, 2);
    let jdate1 = journeydate.substr(8, 2);



    if (tyear <= jyear) {
        window.location.href = "fifthpage.html";
        if (tmonth <= jmonth) {
            window.location.href = "fifthpage.html";
            if (tdate <= jdate1) {
                alert("The entered date is valid")
                window.location.href = "fifthpage.html";

            } else {
                alert("The entered date is invalid")
            }
        }
        else {
            alert("The entered date is invalid")
        }
    }
    else {
        alert("The entered date is invalid")

    }
    return date();
}



function peak() {
    event.preventDefault();
    let time = document.getElementById("journeytime").value;
    localStorage.setItem("jt",time);
    var bday = document.getElementById("bday").value;
    console.log("bday")
    var yearp = bday.substr(0, 4);
    let date = new Date();
    let tyear = date.getFullYear();
    // console.log(ybday);
    let peakhour;
    let cost = localStorage.getItem("price");
    alert(cost);

    var hour = time.substr(0, 2);
    // var year = date.substr(6, 4);

    if ((hour >= 17 && hour <= 19)) {
        alert("The Time entered is Peak Hour ");
        // alert(cost);

        let tax = cost * 0.025;
        // alert(tax);
        peakhour = parseInt(cost) + (tax);
        //alert(peakhour);
        charge.innerHTML = peakhour;

    } else {
        alert("The time entered is not peak hour");
        peakhour = cost;
        charge.innerHTML = peakhour;
    }
    var age = tyear - yearp;
    localStorage.setItem("age",age);
    alert(age);
    if (age >= 70) {
        alert("Senior Citizen Discount is applied")
        disprice = (peakhour * 50) / 100;
        dprice.innerHTML = disprice;
        localStorage.setItem("seniorprice",disprice);
    }
    else {
        alert("Senior Citizen Discount is Not applicable");
        disprice = peakhour;
        dprice.innerHTML = disprice;
    }
 

}






