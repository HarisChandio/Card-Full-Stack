import "./card.css";
const Card = (props) => {

    const { name, description, interests, socialLinks } = props.data;
    return (
        <div className="">
            <div className="card-container">
            <h1 className="name">{name}</h1>
            <h3 className="description">{description}</h3>
            <div className="interests-container">
                <h3 className="interest">Interests</h3>
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </div>
            <div className="social-links-container">
                {Object.entries(socialLinks).map(([platform, link], index) => (
                    <button className="link-button" key={index}>
                        <a href={link}>{platform}</a>
                    </button>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Card;