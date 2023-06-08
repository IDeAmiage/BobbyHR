
const AlertSuccess = (props) => {
  return (
    <div className="-mx-8 flex justify-between rounded bg-[#34D399] bg-opacity-[15%] px-8 py-4 text-black">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-6 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
          />
        </svg>
        <p>{props.title}</p>
      </div>
      <button className="hover:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  );
}
export const AlertInfo = (props) => {
  return (
    <div className="-mx-8 flex justify-between rounded bg-[#348ED3] bg-opacity-[15%] px-8 py-4 text-black">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-6 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <p>{props.title}</p>
      </div>
      <button className="hover:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
export const AlertWarning = (props) => {
  return (
    <div className="bg-warning -mx-8 flex justify-between rounded bg-opacity-[15%] px-8 py-4 text-black">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-6 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <p>{props.title}</p>
      </div>
      <button className="hover:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
export const AlertError = (props) => {
  return (
    <div className="-mx-8 flex justify-between rounded bg-[#F87171] bg-opacity-[15%] px-8 py-4 text-black">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-6 h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <p>{props.title}</p>
      </div>
      <button className="hover:text-gray-500" onClick={() => props.setOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default AlertSuccess;