function isPrime()
{
    var n =  document.getElementById('n').value;
    var f = true;
    for(var i=2;i<=Math.sqrt(n);i++)
    if(n%i==0)
    {
        f = false;
        break;
    }
    result = "<p>";
    if(f)
        result += n+" is Prime Number"+"</p>";
    else
        result += n+" is not Prime Number"+"</p>";
    document.getElementById('div1').innerHTML = result;
}