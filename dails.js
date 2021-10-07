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
    shoesPrice: 3000,
    shoesColor: "maroon",
    shoesId: 7712,
    shoesDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);

if(queryString == shoe1.shoesId){
    document.getElementById("sawir1").innerHTML = shoe1.shoesImage;
    document.getElementById("productName").innerHTML = shoe1.shoesName;
    document.getElementById("productPrice").innerHTML = shoe1.shoesPrice;
    document.getElementById("productDesc").innerHTML = shoe1.shoesDesc;
    document.getElementById("quantityValue").onchange = function(){
        var quantityValue = document.getElementById("quantityValue").value;
        var quantInt = parseInt(quantityValue);
        var totalQuant = quantInt * shoe1.shoesPrice;
         
         //delivery address
         document.getElementById("deliveryAddress").onchange = function(){
             var deliveryAddress = document.getElementById("deliveryAddress").value;
             var livingtown = "livingtown";
             var kilimani = "kilimani";
             var westLand = "westLand";
             if(deliveryAddress == livingtown){
                 var totalPlus = totalQuant + 200;
                 document.getElementById("finalPrice").innerHTML = `The total price for ${quantityValue} shoes is ${totalPlus}`


             }
             if(deliveryAddress == kilimani){
                var totalPlus = totalQuant + 350;
                document.getElementById("finalPrice").innerHTML = `The total price for ${quantityValue} shoes is ${totalPlus}`
               

            }
            if(deliveryAddress == westLand){
                var totalPlus = totalQuant + 275;
                document.getElementById("finalPrice").innerHTML = `The total price for ${quantityValue} shoes is ${totalPlus}`

            }
         }
}


}
if(queryString == shoe2.shoesId){
    document.getElementById("finalPrice").innerHTML = shoe2.shoesPrice;
    
}


