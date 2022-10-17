import React from 'react';
import Header from '../../containers/header';
import LayoutComponent from '../../components/layout-component';
import { ComponentStyles } from '../../utils/const';

function PageNotFound(): JSX.Element {
  return (
    <LayoutComponent styles={ComponentStyles.FullHeight}>
      <Header />
      <LayoutComponent styles={ComponentStyles.Main}>
        <LayoutComponent styles={ComponentStyles.Centre}>
          <h1>404 - страница не найдена</h1>
        </LayoutComponent>
      </LayoutComponent>
    </LayoutComponent>
  );
}

export default PageNotFound;
