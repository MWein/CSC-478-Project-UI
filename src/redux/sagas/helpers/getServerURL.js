import os from 'os'
const hostname = os.hostname()

const getServerURL = () =>
  hostname === 'localhost' ? 'csc478team301.uisad.uis.edu' : hostname

export default getServerURL
