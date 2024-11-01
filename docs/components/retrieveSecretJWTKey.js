/**
 * Retrieves the Sequence project access key from local storage.
 * If not found, sets and returns a default access key.
 * @returns {string} The project access key.
 */
export function retrieveSecretJWTKey() {
  // const defaultAccessKey = 'AQAAAAAAADVH8R2AGuQhwQ1y8NaEf1T7PJM'

  if (typeof window !== 'undefined' && window.localStorage) {
    let jwtSecretKey = localStorage.getItem('sequenceJWT')
    console.log(jwtSecretKey)

    // if (accessKey === null) {
    //   localStorage.setItem('sequenceJWT', defaultAccessKey)
    //   accessKey = defaultAccessKey
    // }
    // console.log(accessKey)
    return jwtSecretKey
  }
  // return defaultAccessKey
}
