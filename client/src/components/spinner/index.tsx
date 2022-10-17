import React, { useEffect } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import LayoutComponent from '../layout-component';
import { ComponentStyles } from '../../utils/const';

function Spinner(): JSX.Element {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <LayoutComponent styles={ComponentStyles.Modal}>
      <LayoutComponent styles={ComponentStyles.Centre}>
        <ClockLoader size={150} color="#ffffff" />
      </LayoutComponent>
    </LayoutComponent>
  );
}

export default React.memo(Spinner);
