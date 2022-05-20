function preload(){
}

function setup(){
  canvas=createCanvas(500,400)
  canvas.position(110,250)
  video=createCapture(VIDEO)
  video.hide()
 
}

function draw(){
  image (video,0,0,500,500)
}

function take_snapshot(){
    save('my_image.png')
}

