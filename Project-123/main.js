left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 400);
    canvas.position(600, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#ff0000');
    textSize(difference);
    fill('#FF8000');
    text('Keshav', 50, 400);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);

        left_wrist_x = results[0].pose.left_wrist;
        right_wrist_x = results[0].pose.right_wrist;
        difference = floor(left_wrist_x - right_wrist_x)
    }
}