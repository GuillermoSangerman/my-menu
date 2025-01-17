
function Navegador({ onClick, category }) {
  return (
    <nav className="bg-yellow-600 p-3  flex justify-between w-full">

      <button onClick={onClick} className=" text-4xl" type="onClick">
        &#9776;
      </button>
      <h1 className=" font-black text-4xl" type="text">
        {category}
      </h1>
    </nav>
  )
}
export { Navegador }