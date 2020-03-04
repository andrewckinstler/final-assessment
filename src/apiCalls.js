export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const shortenUrl = urlObj => {
  const options = {
    method: 'POST',
        body: JSON.stringify(
          urlObj
        ),
        headers: {
          'Content-Type': 'application/json'  
        }
      }
    
    return fetch('http://localhost:3001/api/v1/urls', options)
            .then(res => {
              if(!res.ok) {
                throw Error('failed to shorten url')
              }
              console.log(res)
              return res.json()})
}
