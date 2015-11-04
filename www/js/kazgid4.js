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
        var IcePhenomena=data.substring(30,35);
        var riverevents=data.substring(35,40);
        mass=[post,data1,LevelOfWaterAt8,changes,LevelOfWaterAt20,temperatures,IcePhenomena,riverevents]}
        else
        {mass=[post,data1,LevelOfWaterAt8,changes,LevelOfWaterAt20,temperatures]}
      
        return mass;    
            
        }
      
        function decodeSection0() {
        var mass1 = [];
        var mass2 = [];
        var massH8= [];
        var mass1=splitCode();
        var mass3=["Бассейн Карского моря ( Ертис, Есил)","Тобол","Центральный Казахстан","Бассейн озера Балхаш, Заилийского Алатау ","Шу-Таласский бассейн"," Бассейн Аральского моря","Бассейн Каспийского моря"];
        
        var Nriver = mass1[0].substring(0, 2);
        var Npools = mass1[0].substring(2, 5);
        var term1 = mass1[1].substring(0, 2);
        var term2 = mass1[1].substring(2,4);
        var term3 = mass1[1].substring(4, 5);
        if( Nriver==11){
        Pool=mass3[0];}
        if( Nriver==12){
        Pool=mass3[1];}
        if( Nriver==13){
        Pool=mass3[2];}
        if( Nriver==14){
        Pool=mass3[3];}
        if( Nriver==15){
        Pool=mass3[4];}
        if( Nriver==16){
        Pool=mass3[5];}
        if( Nriver==19){
        Pool=mass3[6];}
            
        return mass2=[Pool,Npools,term1,term2,term3];
        }

        function decodeSection1(){
      
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
        var TempOfWater1=mass3[5].substring(1,2);
        var TempOfWater2=mass3[5].substring(2,3);
        var TempOfAir1=mass3[5].substring(3,4);
        var TempOfAir2=mass3[5].substring(4,5);
        
        if(mass3.length>6){
        var IdIcePhenomena=mass3[6].substring(0,1);
        var IcePhenomena1=mass3[6].substring(1,3);
        var IcePhenomena2=mass3[6].substring(3,5);
        var rivereventsid=mass3[7].substring(0,1);
        var riverevents2=mass3[7].substring(1,5);
        
            
        var mass5=["Сало","Снежура","Забереги (первичные, наносные); припай шириной менее 100 м —дляозер,вод","Припай шириной более 100 м — для озер, водохранилищ","Забереги нависшие","Ледоход; для озер, водохранилищ — дрейф льда"," Ледоход; лед из притока, озера, водохранилища ","Ледоход поверх ледяного покрова"," Шугоход"," Внутриводный лед (донный, глубинный)"," Пятры","Осевший лед (на береговой отмели после понижения уровня)","Навалы льда на берегах (ледяные валы)"," Ледяная перемычка в створе поста ","Ледяная перемычка выше поста ","Ледяная перемычка ниже поста "," Затор льда выше поста ","Затор льда ниже поста","Затор льда искусственно разрушается"," Зажор льда выше поста 35-Зажор льда ниже поста ","Зажор льда искусственно разрушается ","Вода на льду","Вода течет поверх льда (после промерзания реки, при нали¬чии воды подо льдом)","Закраины","Лед потемнел ","Снежница","Лед подняло (вспучило)","Подвижка льда","Разводья","Лед тает на месте "," Забереги остаточные","Наслуд","Битый лед — для озер, водохранилищ, устьевых участков рек","Блинчатый лед","Ледяные поля—для озер, водохранилищ, устьевых участков рек","Ледяная каша — для озер, водохранилищ, устьевых участков рек","Стамуха","Лед относит (отнесло) от берега — для озер, водохранилищ ","Лед прижимает (прижало) к берегу — для озер, водохрани¬лищ","Ледостав неполный","Ледяной покров с полыньями (промоинами, пропаринами)","Ледостав, ровный ледяной покров","Ледостав, ледяной покров с торосами","Ледяной покров с грядами торосов — для водохранилищ","Шуговая дорожка ","Начало навигации","Конец навигации","Забор воды выше поста","Забор воды ниже поста"," Забор воды выше поста прекратился","Забор воды ниже поста прекратился","Забор воды ниже поста прекратился","Сброс воды выше поста","Сброс воды ниже поста","Сброс воды выше поста прекратился","Сброс воды ниже поста прекратился","Плотина (перемычка, запруда, дамба) выше поста","Плотина (перемычка, запруда, дамба) ниже поста","Разрушена плотина (перемычка, запруда, дамба) выше поста","Разрушена плотина (перемычка, запруда, дамба) ниже поста","Подпор от засорения русла","Подпор от мостовых переправ","Попуски воды из озера, водохранилища"];
           
        var IdIcePhenomena=mass3[6].substring(0,1);
        var IcePhenomena0=mass3[6].substring(1,3);
        var IcePhenomena1=mass3[6].substring(3,5);
        var IcePhenomena2;
        var IcePhenomena3;
        if(IcePhenomena0==11)
        {IcePhenomena2=mass5[0];}
        if(IcePhenomena0==12)
        {IcePhenomena2=mass5[1];}
        if(IcePhenomena0==13)
        {IcePhenomena2=mass5[2];}
        if(IcePhenomena0==14)
        {IcePhenomena2=mass5[3];}
        if(IcePhenomena0==15)
        {IcePhenomena2=mass5[4];}
        if(IcePhenomena0==16)
        {IcePhenomena2=mass5[5];}
        if(IcePhenomena0==17)
        {IcePhenomena2=mass5[6];}
        if(IcePhenomena0==18)
        {IcePhenomena2=mass5[7];}
        if(IcePhenomena0==19)
        {IcePhenomena2=mass5[8];}
        if(IcePhenomena0==20)
        {IcePhenomena2=mass5[9];}
        if(IcePhenomena0==21)
        {IcePhenomena2=mass5[10];}
        if(IcePhenomena0==22)
        {IcePhenomena2=mass5[11];}
        if(IcePhenomena0==23)
        {IcePhenomena2=mass5[12];}
        if(IcePhenomena0==24)
        {IcePhenomena2=mass5[13];}
        if(IcePhenomena0==25)
        {IcePhenomena2=mass5[14];}
        if(IcePhenomena0==30)
        {IcePhenomena2=mass5[15];}
        if(IcePhenomena0==31)
        {IcePhenomena2=mass5[16];}
        if(IcePhenomena0==32)
        {IcePhenomena2=mass5[17];}
        if(IcePhenomena0==33)
        {IcePhenomena2=mass5[18];}
        if(IcePhenomena0==34)
        {IcePhenomena2=mass5[19];}
        if(IcePhenomena0==35)
        {IcePhenomena2=mass5[20];}
        if(IcePhenomena0==36)
        {IcePhenomena2=mass5[21];}
        if(IcePhenomena0==37)
        {IcePhenomena2=mass5[22];}
        if(IcePhenomena0==38)
        {IcePhenomena2=mass5[23];}
        if(IcePhenomena0==39)
        {IcePhenomena2=mass5[24];}
        if(IcePhenomena0==40)
        {IcePhenomena2=mass5[25];}
        if(IcePhenomena0==41)
        {IcePhenomena2=mass5[26];}
        if(IcePhenomena0==42)
        {IcePhenomena2=mass5[27];}
        if(IcePhenomena0==43)
        {IcePhenomena2=mass5[28];}
        if(IcePhenomena0==44)
        {IcePhenomena2=mass5[29];}
        if(IcePhenomena0==45)
        {IcePhenomena2=mass5[30];}
        if(IcePhenomena0==46)
        {IcePhenomena2=mass5[31];}
        if(IcePhenomena0==47)
        {IcePhenomena2=mass5[32];}
        if(IcePhenomena0==48)
        {IcePhenomena2=mass5[33];}
        if(IcePhenomena0==49)
        {IcePhenomena2=mass5[34];}
        if(IcePhenomena0==50)
        {IcePhenomena2=mass5[35];}
        if(IcePhenomena0==51)
        {IcePhenomena2=mass5[36];}
        if(IcePhenomena0==52)
        {IcePhenomena2=mass5[37];}
        if(IcePhenomena0==53)
        {IcePhenomena2=mass5[38];}
        if(IcePhenomena0==54)
        {IcePhenomena2=mass5[39];}
        if(IcePhenomena0==63)
        {IcePhenomena2=mass5[40];}
        if(IcePhenomena0==64)
        {IcePhenomena2=mass5[41];}
        if(IcePhenomena0==65)
        {IcePhenomena2=mass5[42];}
        if(IcePhenomena0==66)
        {IcePhenomena2=mass5[43];}
        if(IcePhenomena0==67)
        {IcePhenomena2=mass5[44];}
        if(IcePhenomena0==68)
        {IcePhenomena2=mass5[45];}
        if(IcePhenomena0==73)
        {IcePhenomena2=mass5[46];}
        if(IcePhenomena0==74)
        {IcePhenomena2=mass5[47];}
        if(IcePhenomena0==77)
        {IcePhenomena2=mass5[48];}
        if(IcePhenomena0==78)
        {IcePhenomena2=mass5[49];}
        if(IcePhenomena0==79)
        {IcePhenomena2=mass5[50];}
        if(IcePhenomena0==80)
        {IcePhenomena2=mass5[51];}
        if(IcePhenomena0==81)
        {IcePhenomena2=mass5[52];}
        if(IcePhenomena0==82)
        {IcePhenomena2=mass5[53];}
        if(IcePhenomena0==83)
        {IcePhenomena2=mass5[54];}
        if(IcePhenomena0==84)
        {IcePhenomena2=mass5[55];}
        if(IcePhenomena0==85)
        {IcePhenomena2=mass5[56];}
        if(IcePhenomena0==86)
        {IcePhenomena2=mass5[57];}
        if(IcePhenomena0==87)
        {IcePhenomena2=mass5[58];}
        if(IcePhenomena0==88)
        {IcePhenomena2=mass5[59];}
        if(IcePhenomena0==89)
        {IcePhenomena2=mass5[60];}
        if(IcePhenomena0==90)
        {IcePhenomena2=mass5[61];}
        if(IcePhenomena0==91)
        {IcePhenomena2=mass5[62];}
        
        if(IcePhenomena1==00)
        {IcePhenomena3=0;}
        if(IcePhenomena1==01)
        {IcePhenomena3=10;}
        if(IcePhenomena1==02)
        {IcePhenomena3=20;}
        if(IcePhenomena1==03)
        {IcePhenomena3=30;}
        if(IcePhenomena1==04)
        {IcePhenomena3=40;}
        if(IcePhenomena1==05)
        {IcePhenomena3=50;}
        if(IcePhenomena1==06)
        {IcePhenomena3=60;}
        if(IcePhenomena1==07)
        {IcePhenomena3=70;}
        if(IcePhenomena1==08)
        {IcePhenomena3=80;}
        if(IcePhenomena1==09)
        {IcePhenomena3=90;}
        if(IcePhenomena1==10)
        {IcePhenomena3=100;}
        return mass4=[H8ID,H8,ChangeID,Change1,Change2,H20ID,H20,TempOfWaterID,TempOfWater1,TempOfWater2,TempOfAir1,TempOfAir2,IdIcePhenomena,IcePhenomena2,IcePhenomena3,rivereventsid,riverevents2];}
        else
        { 
         return mass4=[H8ID,H8,ChangeID,Change1,Change2,H20ID,H20,TempOfWaterID,TempOfWater1,TempOfWater2,TempOfAir1,TempOfAir2];}
        }
        
         
         
         
         
     
        
        function put1(){
         var decodeSec0=[];
         var decodeSec1=[];
         
         decodeSec0 = decodeSection0();
         decodeSec1 = decodeSection1();
         
         var a1=[decodeSec0[2],decodeSec0[3]];
         var a2=[decodeSec0[2],decodeSec0[3]];
         var a3=["+",decodeSec1[3]];
         var a4=["-",decodeSec1[3]];
         var a5="Данных нет";
         var a6=[decodeSec1[8],decodeSec1[9]];
         var a7=[decodeSec1[10],decodeSec1[11]];
         var a8=[decodeSec1[13],decodeSec1[14]];
         var a9="0";
          
            
         document.all.id_0.innerHTML=decodeSec0[0]
         document.all.id_1.innerHTML=decodeSec0[1]
          if(decodeSec0[4]==1){
         document.all.id_2.innerHTML=a1}
          if(decodeSec0[4]==2){
         document.all.id_2.innerHTML=a2}
         
       
         document.all.id_3.innerHTML=decodeSec1[1]
              
         if(decodeSec1[4]==1){
         document.all.id_4.innerHTML=a3}
         if(decodeSec1[4]==2){
         document.all.id_4.innerHTML=a4}
         
         document.all.id_5.innerHTML=decodeSec1[6]
         
         document.all.id_6.innerHTML=a6
         
         if(decodeSec1[10]==0 && decodeSec1[11]==0 ){
         document.all.id_7.innerHTML=a9}
         else
         {
         if(decodeSec1[10]==0)
         {document.all.id_7.innerHTML=decodeSec1[11]}
         else
         {document.all.id_7.innerHTML=a7}
         }
 
         document.all.id_8.innerHTML=a8
         
         
            
         if(decodeSec1.length>6){
         document.all.id_9.innerHTML=decodeSec1[16]}
         if(decodeSec1.length==6){
         document.all.id_9.innerHTML=a5}
            }