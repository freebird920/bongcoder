'use client'
export default function CompNavbar(){
  return(
    <ul className="flex flex-row space-x-3 justify-center py-1 border-b-2 mb-2">
      <li className="li-navbar">
        <a href="/">Home</a>
      </li>
      <li className="li-navbar">
        <a href="/hello">Hello</a>
        </li>
    </ul>
  )
}