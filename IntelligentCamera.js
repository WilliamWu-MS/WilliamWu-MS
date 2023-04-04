const Form = JSONSchemaForm.default;
const schema = {
  "type": "object",
  "title": "Intelligent Camera Certification Form",
  "properties": {
    "physicalCameras": {
      "type": "array",
      "title": "Physical Cameras",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Camera Name",
            "enum": [
              "camera 1",
              "camera 2",
              "camera 3",
              "camera 4",
              "camera 5",
              "camera 6",
              "camera 7"
            ]
          },
          "FoV": {
            "type": "number",
            "title": "FoV(in degree)"
          },
          "Center": {
            "type": "number",
            "title": "Center Position(in degree)"
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
          "title": "number of people feed"
        },
        "peopleFeedType": {
          "type": "string",
          "title": "People Feed Type",
          "enum": [
            "single source",
            "overlap",
            "stithcing"
          ]
        },
        "physicalCamera": {
          "type": "array",
          "title": "Physical Cameras",
          "items": {
            "type": "string",
            "title": "name",
            "enum": [
              "camera 1",
              "camera 2",
              "camera 3",
              "camera 4",
              "camera 5",
              "camera 6",
              "camera 7"
            ]
          }
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
