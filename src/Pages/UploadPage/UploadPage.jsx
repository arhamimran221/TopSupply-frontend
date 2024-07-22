import React from 'react'
import UploadFile from '../../Components/Upload/Upload'

const UploadPage = ({setVisible}) => {
  return (
    <div>
      <UploadFile setVisible={setVisible} />
    </div>
  )
}

export default UploadPage
