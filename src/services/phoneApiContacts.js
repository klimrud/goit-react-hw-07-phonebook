import axios from "axios"

const PROJECT_TOKEN=`6452c9f3a2860c9ed41522df`
// const BASE_URL=`https://${PROJECT_TOKEN}.mockapi.io/api/v1/contacts`
axios.defaults.baseURL = `https://${PROJECT_TOKEN}.mockapi.io/api/v1/`


export const fetchContacts  = async()=> {
  // const data = await fetch(`${BASE_URL}/contacts`)
  
  const {data} = await axios.get('/contacts')
  console.log('get', data)
  // return await data.json()
  return data;
}

export const addContact  = async(contact)=> {
  // const res = await fetch(`${BASE_URL}/contacts/`, {
  //   body: JSON.stringify(data),
  // })
  //  console.log('add', data)
  // return await res.json()

  // return console.log('first', axios.post('/contacts', data));
  // return axios.post('/contacts', data);

  const { data } = await axios.post(`contacts`, contact);
  console.log('add', data)
  return data;


}


export const deleteContact = async(id)=> {
  // const res = await fetch(`${BASE_URL}/contacts/${id}`)
  //  console.log('delete', id)
  // return await res.json()

  // return  axios.delete(`/contacts/${id}`)

  const { data } = await axios.delete(`/contacts/${id}`)
  console.log('delete', data)
  return data;
}