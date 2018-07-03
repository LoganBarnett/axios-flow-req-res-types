// @flow

import axios, { type $AxiosXHR } from 'axios'

axios({
  method: 'POST',
  data: 'bar',
  url: '/foo'
  // The then callback fails typecheck here because it is mixed and not string
  // per the data property above.
}).then((res: $AxiosXHR<mixed>) => {
  if(typeof res.data == 'number') {
    return res.data + 1
  } else {
    throw new Error('it blowed up')
  }
})
