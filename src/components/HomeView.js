import React, { Component } from 'react'
import { connect } from 'react-redux'

import database from '../database'
import { updateVideos } from '../actions/videos' 

import MenuLayout from '../components/MenuLayout'
import VideoPreviewsList from '../containers/VideoPreviewsList'


const mapStateToProps = ({ videos }) => ({
  videos
})


class HomeView extends Component {
  componentDidMount() {
    this.firebaseListener = database.ref("videos").on("value", (snapshot) => (
      this.props.dispatch(updateVideos(snapshot.val()))
    ))
  }

  render() {
    return (
      <MenuLayout>
        <div>
          {this.props.videos === {} ? //FIXME: make this check work and provide a sensible default
            <div>No videos found</div> :
            <VideoPreviewsList videoPreviews={this.props.videos}/>
          }
        </div>
      </MenuLayout>
    )
  }
}

export default connect(mapStateToProps)(HomeView)