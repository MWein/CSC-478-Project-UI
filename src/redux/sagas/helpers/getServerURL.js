import os from 'os'
const hostname = os.hostname()

const getServerURL = () =>
  hostname === 'localhost' ? 'http://csc478team301.uisad.uis.edu:8080' : `http://${hostname}:8080`

export default getServerURL
