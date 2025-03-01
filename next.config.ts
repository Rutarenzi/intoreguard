import { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.sstatic.net',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}
 
export default config