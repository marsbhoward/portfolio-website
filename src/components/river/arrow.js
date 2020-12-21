/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'


const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? <img src={'https://raw.githubusercontent.com/DZuz14/react-hooks-image-slider/b56e85722dee611a34ed378cd5906d27e18b9e3c/src/img/right-arrow.svg'} /> : <img src={'https://raw.githubusercontent.com/DZuz14/react-hooks-image-slider/b56e85722dee611a34ed378cd5906d27e18b9e3c/src/img/left-arrow.svg'} />}
  </div>
)

export default Arrow