import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      }}
    >
      <CircularProgress disableShrink />
    </div>
  );
};

export default Loader;
