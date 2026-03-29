import Container from "./Container";

export default function DownloadApp() {
  return (
    <div className="bg-[#FFEDE6] ">
      <Container>
        <div className="flex flex-col gap-20 mt-20 text-black ">
          <div className="flex flex-row  justify-between     ">
            {/* Header Text */}
            <div className="w-full flex flex-col gap-24.75">
              <div className=" flex flex-col gap-4  w-[70%] ">
                <h3 className="text-[18px] text-[#2B74BD] leading-5.75 ">
                  GET THE APP
                </h3>
                <h3 className="text-[50px] leading-15.75 text-black">
                  Ready to simplify your life?
                </h3>
                <p className="text-zinc-600">Grab the app and explore all the features <br /> today.</p>
              </div>
              <div className="flex gap-14">
                <img src="/images/app-store.svg" alt="App store" />
                <img src="/images/play-store.svg" alt="Play store" />
              </div>

              {/* Links */}
            </div>
            {/* Header button */}
            <div className=" flex flex-col gap-8 justify-end  w-full">
              <img src="/images/download-app.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
