import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import CommentStream from './CommentStream';
import StreamingPoll from './StreamingPoll';


const mapStateToProps = ({videoStreamsContainer}) => {
  return {
    addOns: videoStreamsContainer.addOns.map((addOn) => addOn.type)
  };
}

const VideoAddOns = ({addOns}) => (
  <div className="VideoAddOns">
    {addOns.map((addOn, index) => {
      switch (addOn) {
        case "CommentStream":
          return (<CommentStream key={index}/>)
        case "StreamingPoll":
          return (<StreamingPoll key={index}/>)
        default:
          return null;
    }})}
  </div>
);

VideoAddOns.propTypes = {
  addOns: PropTypes.arrayOf(
    PropTypes.string.isRequired).isRequired,
}

export default connect(mapStateToProps)(VideoAddOns);
