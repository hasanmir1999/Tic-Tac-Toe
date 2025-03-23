import { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { Toaster } from 'react-hot-toast';
import './App.css'

import Cel from './components/cel/Cel';

function App() {

    const celObjects = [
        {
            id: 1,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
        {
            id: 2,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
        {
            id: 3,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
        {
            id: 4,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
        {
            id: 5,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
        {
            id: 6,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
        {
            id: 7,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
        {
            id: 8,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
        {
            id: 9,
            info: <CgClose />,
            status: 'empty',
            xORo: ''
        },
    ]

    const [cels , setCels] = useState(celObjects)

    const [celInfo , setCelInfo] = useState(false)

  return (
    <>
      <Toaster />
      <div className="cel-container">
        {
            cels.map(cel => <Cel celInfo={celInfo} setCelInfo={setCelInfo} cels={cels} setCels={setCels} key={cel.id} {...cel} celObjects={celObjects}/>)
        }
      </div>
    </>
  )
}

export default App
