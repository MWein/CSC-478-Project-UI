import os from 'os'
const hostname = os.hostname()

const getServerURL = () => {
  console.log('HOSTNAME', hostname)
}

export default getServerURL
