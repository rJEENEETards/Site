export default function NavBar() {
    return (
      <div className="z-10 items-center justify-between w-full max-w-7xl font-mono text-md lg:flex">
        <h2 className="fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          r/JEENEETards
        </h2>
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            href="https://reddit.com/r/JEENEETards"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Reddit</p> 
          </a>
        </div>
      </div>    
)
}