import axios from 'axios';

const url = 'http://localhost:3000/credits';

export const fetchCredits = () => axios.get(url);
export const createCredit = (newCredit) => axios.post(url, newCredit);
export const updateCreditByAdding = (id, updatedCredit) => axios.patch(`${url}/${id}/add`, updatedCredit);
export const updateCreditBySubstracting = (id, updatedCredit) => axios.patch(`${url}/${id}/sub`, updatedCredit);
export const deleteCredit=(id)=>axios.delete(`${url}/${id}`)