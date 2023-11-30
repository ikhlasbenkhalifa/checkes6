function reste(a,b){
    if (a<b){
        return a % b
    }
    
}

function numero(tab){
    if (typeof tab == Number )
{
    console.log ("le premier est:",tab[0]) 
}
    else
    {
        console.log("undefined")
    }
}

function somme (n){
    var s = 0

    for( var i=1 ; i <= n;i++){
        s =s + i
    }
    return s
}

function minmax(array){
var min = array[0]
var max = 0
for (var i=0; i<array.length; i++){
    if (max < array[i]) {
        max = array[i]
     }
     if(min>array[i]){
        min=array[i]
     }
     
  }
return {"min" : min, "max": max}
}



function valabsolue(v){
    if (v>0){
        console.log("le valeur est:", v)
    }
    else {
        console.log("le valeur est:", v * (-1))   
    }
}

function ouinon(tab1,tab2){
    var min1 = tab1[0]
    var max1 = tab2[0]
    var min2 = tab1[0]
    var max2 = tab2[0]
    for (var i=0; i<tab1.length; i++){
        if (max1 < tab1[i]) {
            max1 = tab1[i]
         }
         if(min1 > tab1[i]){
            min1 = tab1[i]
         }
         
      }
      for (var j=0; j<tab2.length; j++){
        if (max2 < tab2[j]) {
            max2 = tab2[j]
         }
         if(min2 > tab2[j]){
            min2 = tab2[j]
         }
         
      }

      if(min2 < min1 && max2 > max1){
        console.log("true")

      }
      else{
        console.log("false")
      }


}


function calcul(n){
    var s = 0
    for (var i=0 ; i<n.toString.length ; i++){
        s = s+1
    }
}

function charcount  (str1, str2) {
    var a = 0
    for (var j = 0; j < str2.length; j++) {
      if (str1 === str2[j]){
        a = a + 1
      }

    }
    return a
  }

  function intstr(tab){
    var arr=[]
  
        for (var i=0; i<tab.length ; i++){
            if (typeof tab[i] == 'number')  {
                arr.push(tab[i])
                
            }
           
            

    }return arr
  }

  function cubes(tab){
    var sum=0
    for (var i=0; i<tab.length; i++){
      sum = sum + tab[i] ** 3
    }
return sum
    
  }