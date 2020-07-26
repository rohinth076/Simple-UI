function isPalindrome()
{
    var n =  document.getElementById('n').value;
    n= n + "";
    m = n ;
    m = m.split("").reverse().join("");
    result = "";
    if(m.localeCompare(n)==0)
        result += n+" is Palindrome Number"+"</p>";
    else
        result += n+" is not Palindrome Number"+"</p>";
    document.getElementById('div2').innerHTML = result;

}