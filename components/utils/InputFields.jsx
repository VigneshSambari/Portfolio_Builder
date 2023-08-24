export const SimpleInputField = ({id, type, placeholder, title, onChange, value}) => {
    return(
        <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                    {title}
            </label>
            <input className="appearance-none block w-full bg-primary-light-color bg-opacity-40 text-gray-700 border 
                rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                 focus:border-dark-purple focus:border-1" id={id} type={type} placeholder={placeholder} value={value??""}
                  onChange={(e)=>onChange({name:id, value:e.target.value})}
            />
            </div>
        </div>
    );
}

export const ParallelInputFields = ({id, title, type, placeholder, onChange}) => {
    return (
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" 
                    htmlFor={id}
            >
                {title}
            </label>
            <input className="appearance-none block w-full bg-primary-light-color bg-opacity-40 text-gray-700 border 
                rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                focus:border-dark-purple focus:border-1" id={id} type={type} placeholder={placeholder} 
                onChange={(e)=>onChange({name:id, value:e.target.value})}
            />
        </div>
    );
}