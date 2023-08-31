import React from 'react';
import ReactDOM from 'react-dom/client';

import "./style.css"
import ColorSchemesExample from './comp/Nabar';
import Baner from './comp/baner';
import BasicExample from './comp/Card';
import Bott from './comp/footer';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <ColorSchemesExample/>
   <Baner/>
   <div className='abc'>
   <BasicExample/>
   <BasicExample/>
   <BasicExample/>
   <BasicExample/>
   <BasicExample/>
   <BasicExample/></div>
   <div className='foot'><Bott/></div>
      

  </React.StrictMode>
);



