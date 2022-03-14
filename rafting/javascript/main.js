// Declare and define function named totalPrice that computes the total group price
function totalPrice(adult, child)
{
    return adult + child;
}

// Declare and define function named adultPrice that computes the price for the amount of adults in the group
function adultPrice(priceAdults)
{
    return priceAdults * 100;
}

// Declare and define function named childrenPrice that computes the price for the amount of children in the group
function childrenPrice(priceChildren)
{
    return priceChildren * 50;
}

// Declare and define function named getPrice that calls other functions to compute the total tip
function getPrice()
{
    const priceValues =
    {
        priceAdults: parseFloat(document.querySelector('#adults').value),
        priceChildren: parseFloat(document.querySelector('#children').value),
    };
    if (priceValues.priceAdults < 1 || priceValues.priceAdults > 10){
        alert ('Invalid Entry!')
        document.querySelector('#adults').value = 1;
    }
    else if (priceValues.priceChildren < 0 || priceValues.priceChildren > 10)
    {
        alert ('Invalid Entry!')
        document.querySelector('#children').value = 0;
    }
    else
    {
        let result = totalPrice(adultPrice(priceValues.priceAdults),childrenPrice(priceValues.priceChildren));
        document.querySelector('#price').value = "$" + result.toFixed(2);
    }
}

// Add a timer event to the HTML document that calls the getPrice function
window.setInterval(getPrice, 5000);