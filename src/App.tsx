import "./App.css";
import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./useRouteElement";
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const telCall = () => {
    window.location.href = "tel:0971559971";
  };

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      {showButton && (
        <button
          className={` fixed p-2 rounded-md bottom-5 right-5 bg-red-600`}
          onClick={() => goTop()}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#f1f1f1f1"
            transform="matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 6V18M12 6L7 11M12 6L17 11"
                stroke="#f1f1f1f1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
      )}
      {
        <a
          className={`fixed p-2 bottom-3 left-40`}
          href="https://zalo.me/0971559971"
          style={{ left: "9rem" }}
        >
          <img
            src="https://lh3.googleusercontent.com/X7JUHmDCeT845_MgAttYi_F8RsiHQr9ufnRqk2SiyiJZ1KBZgZek9wFOMuOwDuy4leA=w47"
            alt="0906215668"
            style={{ borderRadius: "50%" }}
          />
        </a>
      }
      {
        <button
          className={` fixed p-2 rounded-md bottom-5 ml-10 bg-green-500 text-white hover:bg-green-600`}
          onClick={() => telCall()}
          style={{ borderRadius: "25px" }}
        >
          <div
            className="fixed p-2 rounded-md bottom-5 ml-10 bg-green-500 text-white hover:bg-green-600"
            style={{ borderRadius: "50%" }}
          ></div>
          <a href="tel:0971559971" className="font-semibold">
            0971559971
          </a>
        </button>
      }
    </React.StrictMode>
  );
}

export default App;
