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
    audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
  };

navigator.mediaDevices.getUserMedia(constraints);

navigator.mediaDevices.enumerateDevices()
    .then(function (devices) {
        let deviceIds = devices.filter(device => device.kind === "videoinput");
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
            });
        }
    });