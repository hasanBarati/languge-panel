import { SvgSpriteType } from '../types'

export const SvgIcon= ({ icon, color, height, width }: SvgSpriteType) => (
  <svg
    viewBox='0 0 28.3 28.3'
    className='App-icon'
    fill={color}
    width={width}
    height={height}
  >
    <use xlinkHref={`/sprite.svg#${icon}`} />
    {/* <use xlinkHref='/sprite.svg#square' /> */}
  </svg>
)
