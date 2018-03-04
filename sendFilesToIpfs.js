import ipfs from '../constants/initIpfs'

export const sendFilesToIPFS = files => new Promise((resolve, reject) => (
  ipfs.add(files, (error, hash) => (
    error ? reject(error) : resolve(hash)
  )
)))
