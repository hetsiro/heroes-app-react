import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Navbar } from '../../ui/';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {

  const path = useLocation();
  localStorage.setItem( 'lastPath', path.pathname + path.search )

  return (
    <>
        <Navbar />
            <div className='container'>
                <Routes>
                        <Route path="/" element={<Navigate to={ "/marvel" } />} />
                        <Route path="marvel" element={<MarvelPage />} />
                        <Route path="dc" element={<DcPage />} />
                        <Route path="search" element={<SearchPage />} />
                        <Route path="hero/:id" element={<HeroPage />} />
                </Routes>
            </div>
    </>
  )
}