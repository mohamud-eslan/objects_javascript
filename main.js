var shoe1 = {
    shoesName: "safaari boots",
    shoesImage: "shoe2.jpg",
    shoesPrice: "2000",
    shoesColor: "red",
    shoesId: "1412",
    shoesDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}
var shoe2 = {
    shoesName: "sport shoes",
    shoesImage: "shoes3.jpg",
    shoesPrice: "2000",
    shoesColor: "maroon",
    shoesId: "7712",
    shoesDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}
document.getElementById("shoe1title").innerHTML = shoe1.shoesName;
document.getElementById("shoe1Desc").innerHTML = shoe1.shoesDesc;
document.getElementById("shoes2").src = shoe1.shoesImage;

document.getElementById("shoe2title").innerHTML = shoe2.shoesName;
document.getElementById("shoe2Desc").innerHTML = shoe2.shoesDesc;
document.getElementById("shoes3").scr = shoe2.shoesImage;

document.getElementById("item1").onclick = function(){
    window.location.href="dails.html" + "?" + shoe1.shoesId;
}

document.getElementById("item2").onclick = function(){
    window.location.href="dails.html" + "?" + shoe2.shoesId;
}


