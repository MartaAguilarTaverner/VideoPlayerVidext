export default function Footer () {
  return(
    <div className="bg-slate-50 w-full">
      <div className="flex w-full justify-evenly py-4 font-sans">
        <div className="font-bold">Video Player website</div>
        <div className="flex flex-row ">
          <div className="mx-10 font-semibold">Technologies used:</div>
          <div className="mx-5 text-base">
              <li>React</li>
              <li>Next.js</li>
              <li>Typescript</li>
          </div>
          <div className="mx-5 text-base ">
              <li>Tailwind</li>
              <li>Shadcn</li>
              <li>tRPC</li>
          </div>
        </div>
        <div className="mx-10 right-1 font-light font-sans text-sm font italic">
          <div>Marta Aguilar Taverner</div>
          <div>martaaguilartaverner@gmail.com</div>
          <div>Tlf: 679795822</div>
        </div>
      </div>
    </div>
  )
}
