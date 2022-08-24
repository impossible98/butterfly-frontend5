// import third-party modules
import React, { lazy, type ReactNode, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import local modules
import Base from '@/layouts/Base';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

const lazyLoad = (children: ReactNode) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      {children}
    </Suspense>
  );
};

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Base />}>
        <Route index element={lazyLoad(<Home />)} />
        <Route path='about' element={lazyLoad(<About />)} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default Router;
