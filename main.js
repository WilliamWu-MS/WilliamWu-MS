/* const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2')

function gotDevices(mediaDevices) {
  select.innerHTML = '';
  select.appendChild(document.createElement('option'));
  let count = 1;
  mediaDevices.forEach(mediaDevice => {
    if (mediaDevice.kind === 'videoinput') {
      const option = document.createElement('option');
      option.value = mediaDevice.deviceId;
      const label = mediaDevice.label || `Camera ${count++}`;
      const textNode = document.createTextNode(label);
      option.appendChild(textNode);
      select.appendChild(option);
    }
  });
}

navigator.mediaDevices.enumerateDevices().then(gotDevices);
 */
function onResults(results) {
  
  if (results.detections.length > 0) {
    console("detect face");
  }

}

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
let devices = [];
const constraints = {
    audio: {undefined},
    video: {undefined}
};



navigator.mediaDevices.getUserMedia(constraints).then(navigator.mediaDevices.enumerateDevices().then(function (devices) {
        let deviceIds = devices.filter(device => device.kind === "videoinput" && !device.label.includes('NewTek NDI Video'));
        deviceIds = deviceIds.map(device => device.deviceId);

        if (deviceIds.length >= 2) {
            navigator.mediaDevices.getUserMedia({ 
                video: { deviceId: { exact: deviceIds[0] } } 
            })
            .then(function (stream) {
                video1.srcObject = stream;
            });
            navigator.mediaDevices.getUserMedia({ 
                video: { deviceId: { exact: deviceIds[1] } } 
            })
            .then(function (stream) {
                video2.srcObject = stream;
            })
            .then(function (video1){
              const faceDetection = new FaceDetection({locateFile: (file) => {
              return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.0/${file}`;
            }});
            faceDetection.setOptions({
              model: 'short',
              minDetectionConfidence: 0.5
            });
            faceDetection.onResults(onResults);
            const camera = new Camera(video1, {
              onFrame: async () => {
                await faceDetection.send({image: video1});
              },
              width: 640,
              height: 480
            });
            camera.start();
            });
        }
    }));

