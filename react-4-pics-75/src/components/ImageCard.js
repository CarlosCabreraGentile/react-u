import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            span: 0
        };

        // Create a React Ref
        this.imageRef = React.createRef();
    }
    
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });
    }
    
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    render() {

        // Destructuring array, variables come from this.props.image
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                {/* ref is a JSX tag, not a HTML tag */}
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
