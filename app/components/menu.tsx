import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/cursos">Cursos</Link>
                </li>
                 <li>
                    <Link href="/sobre">Sobre</Link>
                </li>
                </ul>
        </nav>
    )
}