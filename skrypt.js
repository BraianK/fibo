function oblicz()
{
    var start = Date.now();
    var x = document.getElementById("wyraz").value;
   
    var memofib = function(fibo)
    {       
        
        var n = 1;
        var m = 1;
        var t = 0;
            if(!memofib.cachedResults[fibo])
                {           
                    if(x<0)
                    {
                        memofib.cachedResults[fibo] = document.getElementById("wartosc").innerHTML = "Nr wyrazu ciagu nie moze byc ujemny! ";
                    }
                    else if(x==0)
                    {
                        memofib.cachedResults[fibo] = document.getElementById("wartosc").innerHTML = "Wartosc wynosi: "+t;
                    }
                    else if(x==1 || x==2)
                    {
                        t = 1;
                        memofib.cachedResults[fibo] = document.getElementById("wartosc").innerHTML = "Wartosc wynosi: "+t;
                        
                    }
                    else if(x>2)
                    {           
                        for(i=1;i<=x-2;i++)
                        {
                            t = n + m;
                            n = m;
                            m = t
                        }
                        memofib.cachedResults[fibo] = document.getElementById("wartosc").innerHTML = "Wartosc wynosi: "+t;                                               
                    }
                    else
                    {
                        memofib.cachedResults[fibo] = document.getElementById("wartosc").innerHTML = "Nieznany blad";
                    }                                                    
                }   
                         
        return memofib.cachedResults[fibo];
    }
    memofib.cachedResults = {};
    
   memofib(x); 
   var start1 = Date.now();
   memofib(x); 
   var stop1 = Date.now();
   var czas1 = stop1 - start1; 
   
   var stop = Date.now();
   var czas = stop - start; 
   document.getElementById("czas").innerHTML = czas;
   document.getElementById("czas1").innerHTML = czas1;
    
}




