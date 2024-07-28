export const Footer = () => {
  return (
    <>
        <div className="flex mt-8 text-left border-b border-t p-4 border-slate-700">
            <div className="font-Raleway font-thin text-slate-300 ml-0 sm:ml-8 flex flex-col">
            <h4 className="font-semibold text-slate-100">Company</h4>
            <h4>About</h4>
            <h4>Jobs</h4>
            <h4>For the Record</h4>
            </div>
            <div className="font-Raleway font-thin text-slate-300 ml-0 sm:ml-8">
            <h4 className="font-semibold text-slate-100">Communities</h4>
            <h4>For Artists</h4>
            <h4>Developers</h4>
            <h4>Advertising</h4>
            <h4>Investors</h4>
            <h4>Vendors</h4>
            </div>
            <div className="font-Raleway font-thin text-slate-300 ml-0 sm:ml-8">
            <h4 className="font-semibold text-slate-100">Useful links</h4>
            <h4>Support</h4>
            <h4>Free Mobile App</h4>
            </div>
            <div className="font-Raleway font-thin text-slate-300 ml-0 sm:ml-8">
            <h4 className="font-semibold text-slate-100">Spotify Plans</h4>
            <h4>Premium Individual</h4>
            <h4>Premium Duo</h4>
            <h4>Premium Family</h4>
            <h4>Premium Student</h4>
            <h4>Spotify Free</h4>
            </div>
            <div className="flex flex-col sm:flex-row sm:h-12 sm:ml-4"> 
                <button className="rounded-full bg-slate-800 mx-4 sm:ml-8 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </button>
                <button className="rounded-full bg-slate-800 mx-4 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>        </button>
                <button className="rounded-full bg-slate-800 mx-4 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>            </button>
            </div>
        </div>
        <div className="flex mt-4 ml-0 sm:ml-8 text-left font-thin text-slate-300">
        Legal &nbsp;
        Safety & Privacy Center&nbsp;
        Privacy Policy&nbsp;
        Cookies&nbsp;
        About Ads&nbsp;
        Accessibility&nbsp;
        <div className="ml-4 sm:ml-16">© 2024 Spotify AB</div>
        </div>
    </>
  )
}
