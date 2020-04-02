import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from '../apis/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    onInputTextSubmit = async inputText => {
        const response = await youtube.get('/search', {
            params: {
                q: inputText
            }
        });

        this.setState({ videos: response.data.items });
    };

    // video in parameter is video fetched from Youtube API when click on it, in children component
    onVideoSelectInComponent = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchBarFormSubmit={this.onInputTextSubmit} />

                {/* passing selected video to VideoDetail component */}
                <VideoDetail video={this.state.selectedVideo} />

                {/* Give to the VideoList the list of videos */}
                <VideoList onVideoSelect={this.onVideoSelectInComponent} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;