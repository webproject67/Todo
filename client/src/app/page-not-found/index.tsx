import React from 'react';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../containers/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';

function PageNotFound(): JSX.Element {
  return (
    <LayoutFullHeight>
      <Header />
      <LayoutMain>
        <LayoutCentering>
          <h1>404 - страница не найдена</h1>
        </LayoutCentering>
      </LayoutMain>
    </LayoutFullHeight>
  );
}

export default PageNotFound;
