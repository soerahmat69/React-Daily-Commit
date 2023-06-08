import React from 'react'

export const Nav = () => {

document.title = "REDC MainStart"

  return (
    <>  <navbar className="flex rounded-md  mx-6 my-7 bg-[#1F1D36]  justify-between px-12  min-h-max text-white">
    <ul className="flex flex-row justify-between">
      <li className=" font-extrabold text-[40px]">MainStart</li>
    </ul>
    <ul className="flex items-center  gap-7">
      <li className=" font-semibold text-[20px] flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0,0,256,256"
          Style={"fill:#000000;"}
        >
          <g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            Style="mix-blend-mode: normal"
          >
            <g transform="scale(10.66667,10.66667)">
              <path d="M6,2c-0.52222,0 -1.05461,0.19133 -1.43164,0.56836c-0.37703,0.37703 -0.56836,0.90942 -0.56836,1.43164v16c0,0.52222 0.19133,1.05461 0.56836,1.43164c0.37703,0.37703 0.90942,0.56836 1.43164,0.56836h12c0.52222,0 1.05461,-0.19133 1.43164,-0.56836c0.37703,-0.37703 0.56836,-0.90942 0.56836,-1.43164v-12.01367l-5.98633,-5.98633zM6,4h7v5h5v11h-12zM8,12v2h8v-2zM8,16v2h8v-2z"></path>
            </g>
          </g>
        </svg>
        <span>Docs</span>{" "}
      </li>
      <li className=" font-semibold flex gap-2 items-center text-[20px]">

      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
Style="fill:#000000;">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" Style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M19,3c-1.64501,0 -3,1.35499 -3,3c0,0.45986 0.11423,0.89194 0.30273,1.2832l-3.7168,3.7168h-4.77344c-0.41736,-1.15733 -1.51934,-2 -2.8125,-2c-1.64501,0 -3,1.35499 -3,3c0,1.64501 1.35499,3 3,3c1.29316,0 2.39514,-0.84267 2.8125,-2h4.77344l3.7168,3.7168c-0.18851,0.39126 -0.30273,0.82335 -0.30273,1.2832c0,1.64501 1.35499,3 3,3c1.64501,0 3,-1.35499 3,-3c0,-1.64501 -1.35499,-3 -3,-3c-0.45986,0 -0.89194,0.11422 -1.2832,0.30273l-3.30273,-3.30273l3.30274,-3.30273c0.39126,0.18851 0.82335,0.30273 1.2832,0.30273c1.64501,0 3,-1.35499 3,-3c0,-1.64501 -1.35499,-3 -3,-3zM19,5c0.56413,0 1,0.43587 1,1c0,0.56413 -0.43587,1 -1,1c-0.56413,0 -1,-0.43587 -1,-1c0,-0.56413 0.43587,-1 1,-1zM5,11c0.56413,0 1,0.43587 1,1c0,0.56413 -0.43587,1 -1,1c-0.56413,0 -1,-0.43587 -1,-1c0,-0.56413 0.43587,-1 1,-1zM19,17c0.56413,0 1,0.43587 1,1c0,0.56413 -0.43587,1 -1,1c-0.56413,0 -1,-0.43587 -1,-1c0,-0.56413 0.43587,-1 1,-1z"></path></g></g>
</svg>
       <span>Try Api</span></li>
    </ul>
  </navbar></>
  )
}
