const https = require('https'); 

const options = { 
    host: 'jsonplaceholder.typicode.com', 

    path: '/users', 

    method: 'POST', 

    headers: { 

     'Accept': 'application/json', 

     'Content-Type': 'application/json; charset=UTF-8' 

    }  
  }; 

  const requestData = { 
        id: 1,
        name: 'Maysa Graham',
        username: 'Orash',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: [Object]
        },
        phone: '1-770-736-8031 x56442',
        website: 'softinnovas.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      }

let request = https.request(options, (res) => { 
    if (res.statusCode !== 201) { 

        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`); 
    
        res.resume(); 
    
        return; 
    
      }  
      let data = ''; 

     res.on('data', (chunk) => { 

    data += chunk; 

  }); 

  res.on('close', () => { 

    console.log('Retrieved all data'); 

    console.log(JSON.parse(data)); 
}); 
}); 
request.write(JSON.stringify(requestData)); 
request.end();
request.on('error', (err) => { 
 console.error(`Encountered an error trying to make a request: ${err.message}`); 
 });