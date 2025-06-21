import { Link } from "react-router-dom";

function NotFound() {
    return ( <div className="flex flex-col items-center justify-center mx-auto- w-full min-h-screen">
        <h1 className="text-red-500 text-6xl font-extrabold">Page is not founds</h1>
        <Link to={"/"} className="p-5 text-blue-700 font-extrabold hover:underline">Go to home page</Link>
    </div> );
}

export default NotFound;