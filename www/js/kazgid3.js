      function proverka(input) {

    input.value = input.value.replace(/[^\d,]/g, '');}

        
        function splitCode(){
    var data =document.getElementById("Code").value;
    data.trim(); 
    var mass=[];
    var post=data.substring(0,5);
    var data1=data.substring(5,10);
    var LevelOfWaterAt8=data.substring(10,15);
    var changes=data.substring(15,20);
    var LevelOfWaterAt20=data.substring(20,25);
    var temperatures=data.substring(25,30);
    if(data.length>30){
        var intensity=data.substring(30,35);
        return mass=[post,data1,LevelOfWaterAt8,changes,LevelOfWaterAt20,temperatures,intensity] ;
         
     }
      else{       
     return mass=[post,data1,LevelOfWaterAt8,changes,LevelOfWaterAt20,temperatures];}
   
        }
      
        function decodeSection0() {
    var mass1 = [];
    var mass2 = [];
    var mass1=splitCode();
   
       
    var Nriver = mass1[0].substring(0, 2);
    var Npools = mass1[0].substring(2, 5);
    var term1 = mass1[1].substring(0, 2);
    var term2 = mass1[1].substring(2,4);
    var term3 = mass1[1].substring(4, 5);
    return mass2=[Nriver,Npools,term1,term2,term3];
    }
    
     function decodeSection1(){
         var mass3=[];
         var mass4 = [];
         var mass3=splitCode();
         
         var H8ID=mass3[2].substring(0, 1);
         var H8=mass3[2].substring(2, 5);
         var ChangeID = mass3[3].substring(0, 1);
         var Change1 = mass3[3].substring(2, 4);
         var Change2 = mass3[3].substring(4, 5);
         var H20ID=mass3[4].substring(0, 1);
         var H20=mass3[4].substring(2,5);
        var TempOfWaterID=mass3[5].substring(0,1);
         var TempOfWater=mass3[5].substring(1,2);
         var TempOfAir=mass3[5].substring(3,5);
         
         
         if(mass3.length>6){
        var TheStateOfThePondID=mass3[6].substring(1,5);      
        var TheStateOfThePond=mass3[6].substring(1,5);
        return mass4=[H8,Change1,Change2,H20,TempOfWater,TempOfAir,TheStateOfThePond];}
        else
        { 
         return mass4=[H8,Change1,Change2,H20,TempOfWater,TempOfAir];}
        }
        
         
         
         
     
        
        function put1(){
            var decodeSec0=[];
            var decodeSec1=[];
            decodeSec0 = decodeSection0();
            decodeSec1 = decodeSection1();
            var a=[decodeSec0[2],decodeSec0[3],"AM"];
            var a1=[decodeSec0[2],decodeSec0[3],"PM"];
            var a5="Данных нет";
            var a2=["+", decodeSec1[1]];
            var a3=["-",decodeSec1[1]];
         
            
            document.all.id_0.innerHTML=decodeSec0[0]
            document.all.id_1.innerHTML=decodeSec0[1]
            
            document.all.id_3.innerHTML=decodeSec1[0]
            document.all.id_5.innerHTML=decodeSec1[3]
            document.all.id_6.innerHTML=decodeSec1[4]
            document.all.id_7.innerHTML=decodeSec1[5]
            
            if(decodeSec1.length>6){
            document.all.id_8.innerHTML=decodeSec1[6]}
            if(decodeSec1.length==6){
             document.all.id_8.innerHTML=a5}
                
            if(decodeSec0[4]==1){
            document.all.id_2.innerHTML=a}
            if(decodeSec0[4]==2){
            document.all.id_2.innerHTML=a1}
            
            if(decodeSec1[2]==1){
            document.all.id_4.innerHTML=a2}
            if(decodeSec1[2]==2){
            document.all.id_4.innerHTML=a3}
            
            
            
           
        }