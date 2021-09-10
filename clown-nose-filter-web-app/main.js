Nose_x=0;
Nose_y=0;
RIGHT_Ayex=0;
RIGHT_Ayey=0;
function preload(){


    clown_NOSY=loadImage("https://i.postimg.cc/nzYhXD45/red-nose-day-2016-by-jmk-prime-da3yrkm.png");
    gogels=loadImage("https://i.postimg.cc/ZRDDFfxy/goggles-png-24.png");
    Beard=loadImage("https://i.postimg.cc/TYGfy1hM/th-2-removebg-preview.png");

}

function setup(){
    canvas=createCanvas(500,400);
    //Single line comment
    //canvas.center();

    //multi-line comment
    /*canvas.center();
    canvas.center();*/
    canvas.position(395,150);

    chimera=createCapture(VIDEO);
    chimera.size(500, 400);
    chimera.hide();

    posinet=ml5.poseNet(chimera, MODALLODAD);
    posinet.on('pose', GOTDAPOSES);
}

function GOTDAPOSES(results){
if(results.length>0){
    console.log(results);
    console.log("NOSY X="+results[0].pose.nose.x);
    console.log("NOSY Y="+results[0].pose.nose.y);
    console.log("WriteAye X="+results[0].pose.rightEye.x);
    console.log("WriteAye Y="+results[0].pose.rightEye.y);
    Nose_x=results[0].pose.nose.x;
    Nose_y=results[0].pose.nose.y;
    RIGHT_Ayex=results[0].pose.rightEye.x;
    RIGHT_Ayey=results[0].pose.rightEye.y;
}
}

 function MODALLODAD(){
     console.log("THE ML5 FOR THE MESSAGE THAT THE POSENET IS LODED: "+ml5.version);
 }

function Take_Snapshot(){
    save("CLOWN_NOSE_FILTER_PICTURE_THING_IN_THIS_WORLD.png");
}

function draw(){
    image(chimera, 0, 0, 500, 400);
    image(Beard,Nose_x-85,Nose_y-70,170,220);
    image(clown_NOSY,Nose_x-25,Nose_y-25,50,50);
    image(gogels,RIGHT_Ayex-70, RIGHT_Ayey-65,200,80);
}