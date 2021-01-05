/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const Slide = ({ content }) => (
  <div
    css={css`
      height: 85%;
      width: 85%;
      margin-left: -35vh;
      background-image: url('${content}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default Slide