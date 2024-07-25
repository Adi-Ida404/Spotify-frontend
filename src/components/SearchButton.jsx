
export const SearchButton = () => {
  const styleButton = "font-semibold mx-2 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800";
  return (
    <div><button className={styleButton} style={{marginTop:'10px', marginRight:'10px', marginLeft:'100px', marginBottom:'10px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#93a2b8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
</button></div>
  )
}

