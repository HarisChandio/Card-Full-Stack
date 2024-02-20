
import React, { useState } from 'react';
import './cardform.css'
const CardForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [interests, setInterests] = useState(["", "", ""]);
    const [socialLinks, setSocialLinks] = useState({
        linkedIn: "",
        twitter: "",
        github: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cardData = {
            name, description, interests, socialLinks
        };

        try {
            const response = await fetch("http://localhost:3000/api/card",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(cardData)
                }
            )
            if (response.ok) {
                alert("Card added successfully")
                console.log("Card data sent successfully")

            }
            else {
                alert("Failed to add card")
                console.log("Failed to send card data!")

            }
        } catch (error) {
            console.log('Error occurred while sending card data:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <label className='title'>
                Name:
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
            </label> <br />
            <label className='title'>
                Descripton
                <input type="text" value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </label> <br />
            <label className='title'>
                Interests:
                <ul>
                    {interests.map((interest, index) => (
                        <li key={index}>
                            <input type="text" value={interest} onChange={(e) => {
                                const newInterests = [...interests];
                                newInterests[index] = e.target.value;
                                setInterests(newInterests)
                            }} />
                        </li>
                    ))}
                </ul>
            </label>
            <br />
            <label className='title'>
                LinkedIn
                <input type="text" value={socialLinks.linkedIn} onChange={(e) => {
                    setSocialLinks({
                        ...socialLinks,
                        linkedIn: e.target.value
                    })
                }} />
            </label>
            <br />
            <label className='title'>Github
                <input type="text" value={socialLinks.github} onChange={(e) => {
                    setSocialLinks({
                        ...socialLinks, github: e.target.value
                    })
                }} />
            </label>
            <br />
            <label className='title'>
                Twitter
                <input type="text" value={socialLinks.twitter} onChange={(e) => {
                    setSocialLinks({
                        ...socialLinks, twitter: e.target.value
                    })
                }} />
            </label>
            <br />
            <button className='submit' type='submit'>
                Submit

            </button>
        </form>

    )
};

export default CardForm;
