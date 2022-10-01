import React, { CSSProperties } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import LayoutModal from '../layout-modal';

const override: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

interface ISpinner {
  isLoaded: boolean;
}

function Spinner({ isLoaded }: ISpinner): JSX.Element {
  return (
    <LayoutModal>
      <ClockLoader
        loading={isLoaded}
        cssOverride={override}
        size={150}
        color="#ffffff"
      />
    </LayoutModal>
  );
}

export default Spinner;
