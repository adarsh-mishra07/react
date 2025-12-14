import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Make sure each component file has a default export
import App from './components/conditional.jsx';
import Uiface from './components/Uiface.jsx';
import Pro from './components/Pro.jsx';
import RouterDom from './RouterDom.jsx';
import UseStat from './components/UseStat.jsx';
import EventH from './components/EventH.jsx';
import FormH from './components/FormH.jsx';
import MapList from './components/MapList.jsx';
import Filter from './components/Filter.jsx';
import UseEffec from './components/UseEffec.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Uncomment whichever component you want to test */}
    {/* <App /> */}
    {/* <Uiface /> */}
    {/* <Pro /> */}
    {/* <RouterDom /> */}
    {/* <UseStat /> */}
    {/* <EventH /> */}
    {/* <FormH /> */}
    {/* <MapList /> */}
    {/* <Filter /> */}
    <UseEffec />
  </StrictMode>,
);