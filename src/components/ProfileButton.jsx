

export const Profile = () => {
  const styleButton = "font-semibold mx-2 rounded-full bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800";
  return (
    <div><button className={styleButton}><svg xmlns="http://www.w3.org/2000/svg" color="white" height="32" width="32" viewBox="0 0 24 24" fill="none" stroke="#93a2b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg></button></div>
  )
}
