function oblicz()
{
    var x = document.getElementById("wyraz").value;  
    var start = Date.now(); 
    var fun = memofib(x)
    var stop = Date.now();
    var czas = stop - start;
    document.getElementById("wartosc").innerHTML = "Wynik: "+ fun;
    document.getElementById("czas").innerHTML = " Czas: "+czas;   
}

var memofib = function fibo(x)
{
    
    var n = 1;
    var m = 1;
    var t = 0;
        if(!memofib.cachedResults[x])
        {                 
                if(x<0)
                {
                    memofib.cachedResults[x] = "Nr wyrazu ciagu nie moze byc ujemny! ";
                }
                else if(x==0)
                {
                    memofib.cachedResults[x] = t;
                }
                else if(x==1 || x==2)
                {
                    t = 1;
                    memofib.cachedResults[x] = t;
                    
                }
                else if(x>2)
                {           
                    for(i=1;i<=x-2;i++)
                    {
                        t = n + m;
                        n = m;
                        m = t
                    }
                    memofib.cachedResults[x] = t;                                               
                }
                else
                {
                    memofib.cachedResults[x] = "Nieznany blad";
                }                                                    
        }   
                   
    return memofib.cachedResults[x];
}

