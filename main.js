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
                video1.setVideoSize(640, 480);
            });
            navigator.mediaDevices.getUserMedia({ 
                video: { deviceId: { exact: deviceIds[1] } } 
            })
            .then(function (stream) {
                video2.srcObject = stream;
                video2.setVideoSize(640, 480);
            });
        }
    }));
