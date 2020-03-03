
import React from 'react';
import { useSelector } from "react-redux"
import { SteckLogSign } from "../navigation/AppSteck"

import { TabSecondSteck } from "../navigation/SecondSteck"



export const  Stecks = () => {
    const user  = useSelector(state => state.authReducer)
    return  (user? <TabSecondSteck/>: <SteckLogSign/>)
}
