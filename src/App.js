/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div
      css={css`
        height: 900px;
        background-color: hotpink;
      `}>
      <Button variant='contained' color='primary'>
        Primary
      </Button>
    </div>
  )
}

export default App
