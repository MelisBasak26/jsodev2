console.log("----*Asal mıdır, değil midir?*----")

function isPrime(...numbers) {
    
    for (let i=0; i<numbers.length;i++) {
        
        for (let b = 2; b<numbers[i]; b++) {
          if (numbers[i]%b ==0) {
            let c=1;
            break;
            }
            break;
        }
    
            if(c==1) {
        console.log(numbers[i] + ": Asal sayı değildir.");
        }
            else{
        console.log(numbers[i] +": asal bir sayıdır.")
        }
        }
    }
    isPrime(2,5,7,9,13,3,16,32);
    
    
    console.log("----*Arkadaş sayıları bulmak*----")
    
    function friendnumbers(number1,number2) {
        let total1=0
        let total2=0
        for (let i=1;i<number1; i++) {
            
            if (number1%i==0) {
            total1=total1+i
            }
        }
        for (let j=1;j<number2; j++){
            
            if(number2%j==0){
           total2=total2+j        
            }
        }
    
            if (number1==total2 && number2==total1){
            console.log(number1 + " ve " + number2 +" Arkadaş sayılardır.");
        } 
            else {
            console.log(number1 + " ve "+ number2+ " Arkadaş sayı değildirler.");
        }
    }
    
    friendnumbers(1184, 1210);
    
    
    console.log("----*1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.*----")
    
    function perfectNumbers() {
        for (let number = 1; number<1000; number++) {
            let tplmBln=0
           for (let i = 1; i<number; i++) {
               if (number % i==0){
                   tplmBln=tplmBln+i
               }
    
               if(number==tplmBln) {
                console.log(number + " Müko sayıdır.");
            }  
           } 
        }
        
    }
    perfectNumbers();
    
    
    console.log("----*1000'e kadarki tüm asal sayıları listeleyen programı yazınız.*----")
     
     function primeNumber(number) { 
        for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    return false
                }
            }
        return true
    }
    
    function primeNumber2() {
        for (let i = 2; i < 1000; i++) {
            if (primeNumber(i) == true) {
                console.log(i + " Asal Sayıdır")
            }
     
        }
    }
    primeNumber2()