import ApiCalls from "./ApiCalls";
import IdentificationHelper from "./IdentificationHelper";



// athenticate faces with incoming value 
export async function letsSeeYourFace(GID, helperD, PID, con, idCompleted) {
    var reader = new FileReader();
    var renderOnload = reader.onload = async () => {
        let idHelper = new IdentificationHelper();
        let facesDetected = await idHelper.Detect(helperD)
        console.log(facesDetected, "dot then")
        if (facesDetected.length > 0) {


            let facesIdentified = await idHelper.Identify("5595", facesDetected)
            console.log(facesIdentified, "ajidface")
            await facesIdentified.forEach(async function (con) {
                // console.log(facesDetected, 'FD1')
                let face = await con.candidates
                console.log(face, 'FACE')
                // let InPID = await con.candidates.confidence.personId
                // console.log(InPID, "incoming pid")
                await face.forEach(async function (idCompleted) {
                    // async Authentify(personGroupId, personId, confidence)
                    // let complete = idCompleted.confidence
                    // console.log(idCompleted, 'we got the confidence ')

                    var allCalls = idHelper.Authentify("5595", "0b571036-08c5-43b0-9855-f308cd649d52", idCompleted.confidence)
                    console.log(idCompleted.personId, 'candidates')

                    console.log(allCalls, 'candidates')
                    return allCalls
                })

            })
        }
    }




    await renderOnload()

};


//     .then(allCalls.candidate)
// return idCompleted(
    //     {
        //         ok: true,
        //         message: "I have found the following candidates: ",
        //         candidates: allCalls[1]
        //     }
        // );

        //         let faceFour = facesId
        //         let facesId = DOTTHEN2

        //         //For each faceId found in the picture
            //             // For each candidates, get the name
            //             var allCalls = []
            //             var foreach = faceFour.forEach()
            //             var candidate = idHelper.Authentify("5595", "fa704750-0b81-43d0-a3a4-3e025f3eb2ba", c.confidence);
            //             const canidateR = this.foreach.candidate
            //             console.log(candidateR, "canidatedata and confidence")
            //         };
            //         // allCalls.push(candidateR);


            //         Promise.all(foreach.allCalls.canidateR)
            //             .then(value => {
                //                 idCompleted(
                    //         const candidate = idHelper.Authentify("5595", "3300f642-91db-4165-b27d-270559430b26", face);


                    // facesIdentified is the face id from above 
                    //     await allCalls.forEach(async function (face) {
                        //         // this will be hard coded for now +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                        //         // need the if statment hear to pass or not
                        //         // this will works as .Authentify(GID, pid, face); and will be un hard coded
                        //         var allCalls = []
                        //         console.log(candidate, 'this is your canidate')
                        //         allCalls.push(candidate);
                        // in my hopes and deams this will be the the canidate... as of right now i belive it is and that is 7:44 1/7/2021
                        // })
                        // Promise.all(
                            //     allCalls.map(async (allCalls) => {
                //         const confidence = await allCalls.candidate.confidence
                //         console.log(confidence, 'this is canadate.......')

                //         return confidence
                //     })
                // )
                // if (facesIdentified.length > 0) {

                // let candidate = await idHelper.Authentify(con.facesIdentified)


                // console.log(mapped, 'this is mappy')
                // console.log(mapped, 'nice')
                // let confid = Faces.map([0])
                // }
                // async Authentify(personGroupId, personId, confidence)
                // console.log(candidates, 'candidate')
                //     let conFid = candidates.length
                //     console.log(conFid, 'allCalls 1')
                // }
                // let mappy = mapped.map("5595", "bb66d74a-acab-4d3c-9cbf-1428680f878a", candidates.confidence)