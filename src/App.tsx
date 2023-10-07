import './App.css'
import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './useRouteElement'
function App() {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const goTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      {showButton && (
        <button className={` fixed p-2 rounded-md bottom-5 right-5 bg-red-600`} onClick={() => goTop()}>
          <svg
            width='30px'
            height='30px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#f1f1f1f1'
            transform='matrix(1, 0, 0, 1, 0, 0)'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0' />

            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' />

            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path
                d='M12 6V18M12 6L7 11M12 6L17 11'
                stroke='#f1f1f1f1'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />{' '}
            </g>
          </svg>
        </button>
      )}
    </React.StrictMode>
  )
}

export default App
