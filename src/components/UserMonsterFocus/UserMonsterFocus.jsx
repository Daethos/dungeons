import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import * as monstersAPI from '../../utils/monsterApi';
import * as deepAPI from '../../utils/deepApi';
import './UserMonsterFocus.css';



// BROWSER RESULT RENDERING
// This code will render the result of the API call into an existing HTML element, 
// such as a div, with the id "yourResultContainerId".
// The result will fit itself inside your container, so be sure to set a size on it.



export default function UserMonsterFocus({ monster }) {

    const [imageState, setImageState] = useState('')
    const [image, setImage] = useState([])

    // const result = await deepai.callStandardApi("content-moderation", {
    //     image: "https://YOUR_IMAGE_URL",
    // });

    //     await deepai.renderResultIntoElement(
    //         result,
    //         document.getElementById("yourResultContainerId")
    // );

    async function deepAI(imageState) {
        const result = await deepai.callStandardApi("content-moderation", {
            image: "https://YOUR_IMAGE_URL",
        });
        try {
            await deepai.renderResultIntoElement(
                result,
                document.getElementById("yourResultContainerId"),
                setImage(result)
        );
        } catch (err) {
            console.log(err.message, '<- Error handling Deep AI')
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        setImageState(e.target.value)
    }


    useEffect(() => {
        deepAI()
    }, [setImageState])

    return (
        <React.Fragment>
        <div id="yourResultContainerId">

        </div>
        <div>
            <input type="text" value={imageState} />
            <button type="submit" onSubmit={handleSubmit}>Submit!</button>
        </div>
        </React.Fragment>
    )
}