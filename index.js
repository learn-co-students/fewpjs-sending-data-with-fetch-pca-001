const append = (json) => {
  document.body.innerHTML = json.id.toString();
}

const submitData = (name, email) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  };
  return fetch("http://localhost:3000/users", config).
    then(res => res.json()).
    then(json => append(json)).
    catch( err => append({id: err.message}));
}