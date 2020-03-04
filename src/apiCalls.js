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
              return res.json()})
}

export const deleteUrl = id => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
    
    return fetch(`http://localhost:3001/api/v1/urls/${id}`, options)
}