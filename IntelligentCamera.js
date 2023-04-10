const Form = JSONSchemaForm.default;
const schema = {
  "type": "object",
  "title": "Intelligent Camera Certification Form",
  "properties": {
    "phyCameras": {
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
    "multiStreamIntelliFrameCamera": {
      "type": "object",
      "title": "Multi Stream IntelliFrame Cameras",
      "properties": {
        "num": {
          "type": "number",
          "title": "number of people feed",
          "default": 4
        },
        "type": {
          "type": "string",
          "title": "People Feed Crop Type",
          "enum": [
            "stitching",
            "single source",
            "overlap"
          ],
          "default": "stitching"
        },
        "source": {
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
        }
      }
    },
    "panoRoomViewCamera": {
      "type": "object",
      "title": "Pano or Room View Camera",
      "properties": {
        "type": {
          "type": "string",
          "title": "Pano or Room View Camera Type",
          "enum": [
            "stitching",
            "single source",
            "overlap"
          ],
          "default": "stitching"
        },
        "source": {
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
        "FoV": {
          "type": "number",
          "title": "Pano or Room View Camera FoV(in degree)",
          "default": 180
        }
      }
    }
  }
};

const uiSchema = {
  "type": "VerticalLayout"
}

const onSubmit = ({ formData }, e) => console.log("Data submitted: ", formData);

ReactDOM.render(
  <Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit} />,
  document.getElementById("app")
);
