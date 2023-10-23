function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        return response.json();
      })
      .then(data => {
        document.body.innerHTML = data.id;
      })
      .catch(error => {
        document.body.innerHTML = error.message;
      });
  }
 

