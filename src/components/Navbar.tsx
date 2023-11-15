import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="flex justify-end bg-blue-400 p-4 pr-10 fixed top-0 z-10 w-full">
      <ul className="flex flex-row space-x-10">
        <li>
          <Link to={`/tournaments`}>Find Tournaments</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
        <li>
          <Link to={`/registration`}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}
