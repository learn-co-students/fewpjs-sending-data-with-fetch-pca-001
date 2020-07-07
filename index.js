function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(resp => {
      return resp.json()
    })
    .then(json => {
      let newId = document.createTextNode(json['id'])
      document.body.appendChild(newId)
      console.log(json)
    })
    .catch(errors => {
      let error = document.createTextNode(errors)
      document.body.appendChild(error)
      console.log(errors)
    })

}

document.addEventListener('DOMContentLoaded', function(){
  submitData("pat","pat@gmail.com")
})