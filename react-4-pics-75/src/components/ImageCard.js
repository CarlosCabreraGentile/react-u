import React from 'react';

class ImageCard extends React.Component {
    render() {

        // Destructuring array, variables come from this.props.image
        const { description, urls } = this.props.image;

        return (
            <div>
                <img
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
