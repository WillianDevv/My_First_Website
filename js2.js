


window.onload = function () {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    var decor3 = new Image(); 
    decor3.src = "img/bg3.png";

    var decor2 = new Image(); 
    decor2.src = "img/bg2.png";

    var decor = new Image(); 
    decor.src = "img/bg1.png";


    var perso = new Image();
    perso.src = "img/wolf.png";

    var clavier = new Clavier();      
    
    var pnj2 = new Image();
    pnj2.src = "img/pnj1.png"
    var pnja = new Image();
    pnja.src = "img/pnj11.png";
    var pnjax = 230;

    var pnj3 = new Image();
    pnj3.src = "img/pnj31.png"
   
     

    var pnj22 = new Obstacle(decorX + distpnj, 280,40,50);
    var visible = false;
    var distpnj = 1430;
    var pnjdirec = true;


    
    var pnj33 = new Obstacle(decorX + distpnj3, 300,40,50);
    var visible2 = false;
    var distpnj3 = 1700;  // 1790
    var pnjdirec2 = true;  // a changer



    var distcoll = 990; //990


    var os = new Image();
    os.src = "img/os.png"
    var os1 = new Obstacle(decorX + distos,280,50,50);
    var distos = 1300;
    var oss = false;


// Collision


var x = 150;
var y = 284;

var timer = 0;
var jump = false;
var pas2=0;

var decorX = 0;  
var decorX2 = 0;  
var decorX3 = 0;  
var pnjX = 0; 
var yinit = 30;
 

var vitessePersonnage = 8;  
var vitesseDecor = 4;  
var vitesseDecor2 = 2; 
var vitesseDecor3 = 1;  
var vitessePnj = 4;  
var vitessePnja = 4;

var direction = true; 

    var x2 = 10;
    var y2= 284;
    

   
    
    setInterval(()=> {      
        ctx.clearRect(0, 0, c.width, c.height); // Efface le canvas à chaque frame
        ctx.drawImage(decor3, decorX3, 0, 2500, 400);
        ctx.drawImage(decor2, decorX2, 0, 2500, 400);
        ctx.drawImage(decor, decorX, 0, 2500, 400);
        
        let o = new Obstacle(decorX+distcoll,280,100,70);
        // ctx.fillRect(decorX + distcoll,280,60,50);
    
        ctx.save();

        if (pas2>1200) {
            pas2=0;
        }

       if(clavier.droite){
        if(!o.collision(x2 + 5,y2,120,64)){
        x2 =x2+vitessePersonnage;
         pas2 = (pas2+300);
         


         
         if (c.width - x2 <= 500 && decorX > -(2500 - c.width)) {
            decorX -= vitesseDecor;
            decorX2 -= vitesseDecor2; 
            decorX3 -= vitesseDecor3; 
            pnjX -= vitessePnj;
            vitessePersonnage = 0;
            direction = true;
            vitessePnja = 4;
        }
        else {
            vitessePersonnage = 4;
            direction = true;
            vitessePnja = 4;
                }
            }
        }


        if(clavier.gauche){
    
            if(!o.collision(x2+5,y2,120,64)){
                x2 =x2-vitessePersonnage;
                 pas2= (pas2+300);
                 
                } 

                if (x2 <= 500 && decorX < 0) {
                    decorX += vitesseDecor;  
                    decorX2 += vitesseDecor2; 
                    decorX3 += vitesseDecor3; 
                    pnjX += vitessePnj;
                    vitessePersonnage = 0;
                    direction = false;
                    vitessePnja = 4;
                }
                else {
                    direction = false;
                    vitessePersonnage = 4;
                    vitessePnja = 4;
                }
        }

        if (clavier.haut && timer <= 0 ){
            timer = 40;
            yinit = y2;	
        }

        if (timer > 0){
            y2 = 94 + 100 + (timer - 20) * (timer - 20) / 4;
            timer--;
        }




        // PNJ 1
        pnj22.x = decorX + distpnj;
        pnj33.x = decorX + distpnj3 ;
        os1.x = decorX + distos ;

        if (pnj22.collision(x+30, y, 32, 64)) {
            visible = true;
        }

         if (visible==true){
            pnjdirec = false;
         }

        if (pnjdirec==false){
             pnjax = pnjax +vitessePnja  ;
        }



        if (visible==false){
        
            ctx.drawImage(pnj2,pnjX+distpnj,285,40,50);
        
        }
           
        if (pnjdirec==false){
           ctx.drawImage(pnja,pnjax,255,40,80);
        }

        // PNJ 2

        if (pnj33.collision(x, y, 32, 64) ) {
            visible2 = true;
        }
        if (visible2==true){
        
            ctx.drawImage(pnj3,pnjX+distpnj3,240,80,100);
        }

        // OSS
        ctx.drawImage(os,pnjX+distos,280,50,50); //os
        
        if (os1.collision(x,y,32,64)) {
                oss = true;
        
        }
 



        ctx.save();

        
  
    

        if (oss === false) {     
            if (direction === false) {
                ctx.translate(x2 + 120, y2);
                ctx.scale(-1, 1);
                ctx.drawImage(perso, pas2, 0, 300, 160, -60, 0, 120, 64);
            } else {
                ctx.drawImage(perso, pas2, 0, 300, 160, x2, y2, 120, 64);
            }
        }




        else {
            if (direction === false) {
                y2=284;
                ctx.translate(x2 + 120, y2);
                ctx.scale(-1, 1);
                ctx.drawImage(perso, pas2, 0, 300, 160, -60, -40, 180, 96);
                
            } else {
                y2=250;
                ctx.drawImage(perso, pas2, 0, 300, 160, x2, y2, 180, 96);
            }
           
        }
        


        ctx.restore();
},30);
};
