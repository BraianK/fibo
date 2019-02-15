

function oblicz()
{
    var x = document.getElementById("tak").value;
    var start = Date.now();
    fib(x);
    
    var stop = Date.now();
    var czas = stop - start;
    document.getElementById("czas").innerHTML = "Czas : "+czas;
    
}


function fib(x)
{
    var n = 1;
    var m = 1;
    var t = 0;
        if(x<0)
        {
            return document.getElementById("wartosc").innerHTML = "Nr wyrazu ciagu nie moze byc ujemny! ";
        }
        else if(x==0)
        {
            return document.getElementById("wartosc").innerHTML = "Wartosc wynosi: "+t;
        }
        else if(x==1 || x==2)
        {
            t = 1;
            return document.getElementById("wartosc").innerHTML = "Wartosc wynosi: "+t;
        }
        else if(x>2)
        {           
            for(i=1;i<=x-2;i++)
            {
                t = n + m;
                n = m;
                m = t
            }
            return document.getElementById("wartosc").innerHTML = "Wartosc wynosi: "+t;
        }
        else
        {
            return document.getElementById("wartosc").innerHTML = "Nieznany blad";
        }
}