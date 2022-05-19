const Form = JSONSchemaForm.default;
const schema = {
  "type":"object",
    "title":"Intelligent Camera Certification Form",
    "properties":{
        "physicalCameras":{
            "type":"array",
            "title":"Physical Cameras",
            "items":{
                "type":"object",
                "properties":{
                    "name":{
                        "type":"string",
                        "title":"Camera Name",
                        "enum":["camera 1","camera 2","camera 3","camera 4","camera 5","camera 6","camera 7"]
                    },
                    "FoV":{
                        "type":"number",
                        "title":"FoV(in degree)"
                    },
                    "Center":{
                        "type":"number",
                        "title":"Center Position(in degree)"
                    }
                }
            }
        },
        "logicalCameras":{
            "type":"array",
            "title":"Logcial Cameras",
            "items":{
                "type":"object",
                "properties":{
                    "name":{
                        "type":"string",
                        "title":"Camera Name"
                    },
                    "cameraType":{
                        "type":"string",
                        "title":"Type",
                        "enum":[
                            "panoramic",
                            "people feed",
                            "composite feed",
                            "content",
                            "test 1",
                            "test 2",
                            "test 3"
                        ]
                    },
                    "FoV":{
                        "type":"number",
                        "title":"FoV"
                    },
                    "physicalCamera":{
                        "type":"array",
                        "title":"Physical Cameras",
                        "items":{
                            "type":"string",
                            "title":"name",
                            "enum":["camera 1","camera 2","camera 3","camera 4","camera 5","camera 6","camera 7"]
                        }
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
