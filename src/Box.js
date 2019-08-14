/** @jsx jsx */
import {css, jsx} from '@emotion/core'

const Box = ({text}) => {
  return (
    <div
      css={css`
        background-color: blue;
        height: 80%;
        color: white;
      `}>
      {text}
    </div>
  )
}
export default Box
