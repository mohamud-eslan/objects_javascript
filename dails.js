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

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);

if(queryString == shoe1.shoesId){
    document.getElementById("myHeading").innerHTML = shoe1.shoesName;
}
if(queryString == shoe2.shoesId){
    document.getElementById("myHeading").innerHTML = shoe2.shoesName;
}