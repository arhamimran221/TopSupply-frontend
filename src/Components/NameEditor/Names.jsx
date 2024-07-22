import React, { useState } from 'react'
import PanelEditorHeader from '../Panel/PanelEditorHeader'
import { CloseOutlined } from '@ant-design/icons'
import Name from "../../assets/NamesNumber.jpeg"
import NamesEditor from './NamesEditor'

const Names = ({front, setFront,setVisible}) => {
    const [editorVisible , setEditVisible]= useState(false);
  return (
    <div className="bg-[#FBFBFB]">
   {!editorVisible ?<div className="h-[490px] overflow-y-auto p-4">
        <div className="editor-header relative">
          <PanelEditorHeader
            TagLine="NAMES & NUMBERS"
            Title="Add Names & Numbers"
            SubTitle="Use personalized Names & Numbers for projects like team jerseys where you need a unique name and/or number for each item."
          />
          <div className="absolute right-1 top-5 close-icon cursor-pointer" onClick={()=>setVisible(false)}>
            <CloseOutlined />
          </div>
        </div>
        <div className='py-[6px] border-b-[1px] border-b-[#cccfd6]'>
            <img src={Name} alt="" />
        </div>
        <button className='w-[100%] py-2 bg-[#27a6ff] mt-[10px] text-[#fff] font-poppins rounded-full text-[14px] products-btn hover:bg-[#008ff3] ease-in-out duration-300' onClick={() => setEditVisible(true)}>Add Names & Numbers</button>
    </div> : <NamesEditor front={front} setFront={setFront}/>}      
    </div>
  )
}

export default Names
