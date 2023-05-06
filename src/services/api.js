
// const PROJECT_TOKEN=`6452c9f3a2860c9ed41522df`
// const BASE_URL=`https://${PROJECT_TOKEN}.mockapi.io/api/v1/contacts`

// export async function getPhoneBook(){
// return await fetch(BASE_URL, {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(res => {
//   console.log('res', res)
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(data => {
//   // Do something with the list of tasks
//   console.log('contacts', data)
//   return data
// }).catch(error => {
//   // handle error
//   console.log('error', error)
// })
// }



// -----------Создайте новую задачу 
// const addContact = {
//   content: 'Check out mockapi.io',
//   completed: false,
// };

// fetch(BASE_URL, {
//   method: 'POST',
//   headers: {'content-type':'application/json'},
//   // Send your data in the request body as JSON
//   body: JSON.stringify(addContact)
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(contacts => {
//   // do something with the new contacts
// }).catch(error => {
//   // handle error
// })

// ---------Отмечайте задачи как выполненные
// fetch(BASE_URL/1, {
//   method: 'PUT', // or PATCH
//   headers: {'content-type':'application/json'},
//   body: JSON.stringify({createdAt: ''})
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(data => {
//   // Do something with updated data
// }).catch(error => {
//   // handle error
// })

// ---------Удалить задачи
// const deleteContact = {
//   content: 'Check out mockapi.io',
//   completed: false,
// };

// fetch(BASE_URL/1, {
//   method: 'DELETE',
//   headers: {'content-type':'application/json'},
//   body: JSON.stringify({deleteContact: ''})  
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(data => {
//   // Do something with deleted data
// }).catch(error => {
//   // handle error
// })