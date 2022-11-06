import React from 'react'
import { GeneralPage } from '../../components/GeneralPage/GeneralPage'
import {useSelector} from "react-redux"
function IndexPage() {
  const user = useSelector((state) => state.auth)
  console.log(user)
  return (
    <GeneralPage>Index</GeneralPage>
  )
}

export default IndexPage