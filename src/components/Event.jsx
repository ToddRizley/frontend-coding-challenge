import React from 'react';
import { formatDate } from '../utils';

const Event = props => (
  <div className="row col-xs-12">
    {props.eventInfo.title}&nbsp;
        |  From: {formatDate(props.eventInfo.start_time)}
        To: {formatDate(props.eventInfo.end_time)}
  </div>
);

Event.propTypes = {
  eventInfo: React.PropTypes.object,
};

export default Event;
