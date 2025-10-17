const SmallClockIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16' className='h-4 w-4'>
    <g
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.333'
      clipPath='url(#clock_svg__a)'
    >
      <path d='M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334'></path>
      <path d='M8 4v4l2.667 1.333'></path>
    </g>
    <defs>
      <clipPath id='clock_svg__a'>
        <path fill='#fff' d='M0 0h16v16H0z'></path>
      </clipPath>
    </defs>
  </svg>
)
export default SmallClockIcon
