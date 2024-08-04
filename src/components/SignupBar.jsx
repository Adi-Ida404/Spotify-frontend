import { Link } from "react-router-dom";

export const SingUpBar = () => {
  return (
    <div className="text-left flex p-4 text-slate-900 bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-between">
      <div>
        <h4 className="font-bold">Preview of Spotify</h4>
        <h4 className="font-thin">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed</h4>
      </div>
      <div className="flex-grow flex justify-end">
        <Link to="/SignUp" className="bg-white text-slate-900 font-semibold drop-shadow-lg p-2.5 px-4 rounded-full">
          Sign Up Free
        </Link>
      </div>
    </div>
  );
}
