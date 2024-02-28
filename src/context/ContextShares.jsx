import React, { createContext, useState } from 'react'

export const deleteDetailResponseContext = createContext()

function ContextShares({children}) {
    const [deleteDetailResponse, setDeleteDetailResponse] = useState({})
  return (
    <>
    <deleteDetailResponseContext.Provider value={{ deleteDetailResponse, setDeleteDetailResponse }}>
       
        {children}
        
    </deleteDetailResponseContext.Provider>
</>
  )
}

export default ContextShares

