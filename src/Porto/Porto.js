import "./App.css";

function Porto() {

  document.title = "Portoku"
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-10  shadow-2xl	">
        <div className="">
          <ul className="flex justify-center gap-20 text-lg items-center h-16 px-4 bg-[#0A2647] text-white">
            <li className="">Home</li>
            <li>Qualifications</li>
            <li>Projects</li>
            <li>Certifications</li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="w-full  relative h-[470px] grid grid-cols-6 ">
          <div className="h-[470px]  col-start-2 col-end-6 px-5 ">
            <div className="grid grid-cols-4  h-full bg-[#]">
              <div className="col-span-2 flex items-center  w-full h-full">
                <div className="bg-fixed">
                  <h1 className=" float-left text-[84px]   mr-12">hai</h1>
                  <p className="mt-[50px]">
                    adalah seorang junior developer yang memiliki beberapa skill
                    programming, walaupun dengan beberapa skill tersebut saya
                    harus tetap belajar dengan sesuatu hal yang baru dalam ranah
                    programming lah seorang junior developer yang memiliki
                    beberapa skill programming, walaupun dengan beberapa skill
                    tersebut saya harus tetap belajar dengan sesuatu hal yang
                    baru dalam ranah programm
                  </p>
                </div>
              </div>
              <div className="col-span-2 relative flex items-center  w-full h-full">
                <img alt="ini"
                  className="top-0 right-0  	 absolute max-w-max h-96"
                  src="to.png"
                ></img>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
        <div className=" bg-[#0A2647] w-full h-full  grid grid-cols-6">
          <div className=" mt-[80px] col-start-2 col-end-6 px-5 ">
            <div className="col-span-4 flex items-center gap-7 ">
              <h1 className="text-white text-[30px] ">Qualifications</h1>
              <div className="w-full rounded-md bg-white h-3"></div>
            </div>
            <div className=" px-24 gap-[100px] flex my-[80px] justify-between flex-wrap col-span-4 ">
              <div className="h-[100px] w-[100px]   bg-[#D9D9D9] rounded-md"></div>
              <div className="h-[100px] w-[100px]  bg-[#D9D9D9] rounded-md"></div>
              <div className="h-[100px] w-[100px]  bg-[#D9D9D9] rounded-md"></div>
              <div className="h-[100px] w-[100px]  bg-[#D9D9D9] rounded-md"></div>
            </div>
            <div className="col-span-4 text-center text-white">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the{" "}
              </p>
            </div>

            <div className="col-span-4  mt-[80px] flex items-center gap-7 ">
              <h1 className="text-white text-[30px] ">Project</h1>
              <div className="w-full rounded-md bg-white h-3"></div>
            </div>
            <div className="col-span-4  justify-center  flex items-center  my-[80px] ">
           
                <div className="w-7 h-7">prev</div>
                <div className="w-[430px] mx-[70px] rounded-md h-[269px] bg-[#D9D9D9]"></div>
                <div className="w-7 h-7">next</div>
      
            </div>

            <div className="col-span-4 text-center text-white">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Porto;
