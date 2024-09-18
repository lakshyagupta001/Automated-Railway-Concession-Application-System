import React from 'react'
import AdminNav from '@/components/own/AdminNav'
import Welcome from '@/components/own/welcome'
const page = () => {
  return (
    <div>
        <div>
            <AdminNav></AdminNav>

        </div>
        <div>
           <Welcome name={'Laksh gupta'}/>
        </div>
    </div>
  )
}

export default page