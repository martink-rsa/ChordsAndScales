import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

function PlayControls(props) {
  return (
    <ButtonGroup color="primary" aria-label="play controls">
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<PlayArrowIcon />}
      >
        Play
      </Button>
      <Button variant="outlined" color="secondary" startIcon={<StopIcon />}>
        Stop
      </Button>
    </ButtonGroup>
  );
}

export default PlayControls;
