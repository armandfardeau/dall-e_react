import {Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href={`/image-generator`}>Image Generator</a>
                    </li>
                    <li>
                        <a href={`/text-generator`}>Text generator</a>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
}