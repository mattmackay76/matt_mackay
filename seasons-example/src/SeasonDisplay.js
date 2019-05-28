import './SeasonDisplay.css';
import React from 'react'


const seasonConfig = {
  summer: {
    text: 'lets hit the beach',
    icon: 'sun'
  },
  winter: {
    text:'baby its cold outside',
    icon:'snowflake'
  }
};

const getSeason = (lat, month) => {
  if( month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const a = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={'icon-left massive icon ' + a.icon} />
      <h1>
        {a.text}
      </h1>
      <i className={'icon-right massive icon ' + a.icon} />
    </div>
  );
};

export default SeasonDisplay;
