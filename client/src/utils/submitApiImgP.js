import ApiCalls from "./ApiCalls";


export function submitToAgatha(incomingValues, image, cb) {
    var reader = new FileReader();
    reader.onload = () => {
        var api = new ApiCalls();
        api.PostImage(api.personPictureEndPoint(incomingValues.personGroupId, incomingValues.person.personId), reader.result)
            .then(cb)


    };
    reader.readAsArrayBuffer(image);
};





