import { Link } from "react-router-dom"

export const SingUpBar = () => {
  return (
    <div className="h-16 text-left flex p-4 text-white">
            <div>
            <h4 className="font-semibold">Preview of spotify</h4>
            <h4 className="font-thin">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed</h4>
            </div>
            <div style={{marginLeft: '500px'}}>
                <Link to="/SignUp" className="bg-white text-slate-900 font-semibold drop-shadow-lg p-2.5 px-4 rounded-full">
                    Sign Up free
                </Link>
            </div>

    </div>
  )
}
