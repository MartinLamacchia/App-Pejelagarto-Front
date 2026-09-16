import React, { useEffect, useState } from 'react'
import { LuFish } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import {getUserById } from '../../store/features/users/getUserByIdSlice.js'

const Fish = ({species, weight, length, nameFiscal, lastnameFiscal}) => {

  
    return (
    <div>
      <LuFish />
      <h3>{species}</h3>
      <h3>{length}</h3>
      <h3>{weight}</h3>
      <h3>{nameFiscal} {lastnameFiscal}</h3>
    </div>
  )
}

export default Fish