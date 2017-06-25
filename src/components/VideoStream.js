import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, getContext } from 'recompose'
import Hls from 'hls.js'

import { updateTime } from '../reducers/videoStreams'
import { context } from '../VideoView'

export const styles = {
  video: {
    backgroundColor:'#222222',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}

const enhance = compose(
  connect(),
  getContext(context),
)

class VideoStream extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <video
          ref={(video) => {this.video=video}}
          style={styles.video}
          height={`${Math.round(this.props.scaleWidth * this.props.scale / this.props.aspectRatio)}px`}
          width={`${Math.round(this.props.scaleWidth * this.props.scale)}px`}
          onTimeUpdate={(event) => this.props.dispatch(updateTime(event.target.currentTime))}
          >
        </video>
      </div>
    )
  }
  componentDidMount() {
    if(Hls.isSupported()) {
      this.hls = new Hls()
      this.hls.attachMedia(this.video)
      this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log("video and hls.js are now bound together !")
      })
      this.hls.loadSource('https://us-central1-iotv-1e541.cloudfunctions.net/videos/-KlU31hQDsaXUvL4PUM4/index.m3u8')
      this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          console.log("manifest loaded, found " + data.levels.length + " quality level")
      })
      console.log(this.hls)
    }
    console.log(`Hls is supported: ${Hls.isSupported()}`)
  }
}

VideoStream.defaultProps = {
    aspectRatio: 16/9,
    scale: 1.0,
    scaleWidth: 1920
  }

VideoStream.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default enhance(VideoStream);
