/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import Button from '@material-ui/core/Button'
import Box from './Box'
import {getBitcoinPrice} from './RequestUtil'
import {useState} from 'react'

const makeRequest = async () => {
  const response = await getBitcoinPrice()

  switch (response.status) {
    case 200:
      const text = await response.json()
      return text
    case 404:
      return 'not Found 404'
    default:
      return 'error'
  }
}
function App() {
  const [text, setText] = useState('init')
  return (
    <div
      css={css`
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
      `}>
      <div
        css={css`
          background-color: aqua;
          height: 20%;
          width: 100%;
          align-items: center;
          justify-content: center;
          display: flex;
        `}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            makeRequest().then(data => setText(JSON.stringify(data.bpi)))
            console.log('same time')
          }}>
          GET
        </Button>
      </div>
      <Box text={text} />
    </div>
  )
}

export default App
