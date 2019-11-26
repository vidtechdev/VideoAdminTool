import React, { Component } from 'react';

class VideoCard extends Component {


    render() {
        const posterURL = 'https://cdn.careeronestop.org/OccVids/Thumbnails/';
        const videoURL = 'https://cdn.careeronestop.org/OccVids/OccupationVideos/';
        // const videoPage = 'https://www.careeronestop.org/videos/careeronestop-videos.aspx?videocode=';
        const captionsURL = 'https://cdn.careeronestop.org/CaptionsFiles/';

        return(
            <video 
                poster={posterURL+this.props.parent+'.jpg'} 
                width='100%' controls controlsList='nodownload'>
                <source src={videoURL + this.props.parent +'.mp4'}></source>
                <track label="English" kind="subtitles" srcLang="en" src={captionsURL+this.props.parent+'.vtt'} default></track>
                <track label="Español" kind="subtitles" srcLang="es" src={captionsURL+this.props.parent+'_es.vtt'}></track>
            </video>
        );
        // return(
        //     <div className="video-card">
        //         <a href={videoPage + this.props.videocode} title={this.props.title}>
        //             <img src={posterURL + this.props.onet + '.jpg'} alt={this.props.title} aria-label="" />
        //             <p>{this.props.title}</p>
        //         </a>
        //     </div>
        // );
    }

}

export default VideoCard;