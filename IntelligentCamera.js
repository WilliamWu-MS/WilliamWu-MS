const Form = JSONSchemaForm.default;
const schema = {
  "type": "object",
  "title": "Intelligent Camera Certification Form",
  "properties": {
    "physicalCameras": {
      "type": "array",
      "title": "Physical Camera",
      "items": {
        "type": "object",
        "properties": {
          "FoV": {
            "type": "number",
            "title": "FoV(in degree)",
            "default": 90
          },
          "Center": {
            "type": "number",
            "title": "Center Position(in degree)",
            "default": 0
          }
        }
      }
    },
    "logicalCameras": {
      "type": "object",
      "title": "Logcial Cameras",
      "properties": {
        "numPeopleFeed": {
          "type": "number",
          "title": "number of people feed",
          "default": 4
        },
        "peopleFeedType": {
          "type": "string",
          "title": "People Feed Type",
          "enum": [
            "stitching",
            "single source",
            "overlap"
          ],
          "default": "stitching"
        },
        "physicalCameraPeopleFeed": {
          "type": "array",
          "title": "Source of People Feed Camera",
          "items": {
            "type": "string",
            "title": "name",
            "enum": [
              "physicalCameras-0",
              "physicalCameras-1",
              "physicalCameras-2",
              "physicalCameras-3",
              "physicalCameras-4",
              "physicalCameras-7",
              "physicalCameras-8"
            ],
            "default": ""
          }
        },
        "physicalCameraPanoRoomView": {
          "type": "array",
          "title": "Source of Pano or Room View Camera",
          "items": {
            "type": "string",
            "title": "name",
            "enum": [
              "physicalCameras-0",
              "physicalCameras-1",
              "physicalCameras-2",
              "physicalCameras-3",
              "physicalCameras-4",
              "physicalCameras-7",
              "physicalCameras-8"
            ],
            "default": ""
          }
        },
        "FoVPanoRoomView": {
          "type": "number",
          "title": "Pano or Room View Camera FoV(in degree)",
          "default": 180
        }
      }
    }
  }
};

const onSubmit = ({ formData }, e) => console.log("Data submitted: ", formData);

ReactDOM.render(
  <Form schema={schema} onSubmit={onSubmit} />,
  document.getElementById("app")
);
