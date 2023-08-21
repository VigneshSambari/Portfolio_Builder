const SignUpForm = () => {
    return (
        <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        for="first-name"
                >
                    First Name
                </label>
                <input class="appearance-none block w-full bg-primary-light-color bg-opacity-40 text-gray-700 border 
                    rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                    focus:border-dark-purple focus:border-1" id="first-name" type="text" placeholder="Naruto" 
                />
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
                    Last Name
                </label>
                <input class="appearance-none block w-full bg-primary-light-color bg-opacity-40 text-gray-700 border 
                    rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white 
                    focus:border-dark-purple focus:border-1" id="last-name" type="text" placeholder="Uzumaki" 
                />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full px-3">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                    Email
                </label>
                <input class="appearance-none block w-full bg-primary-light-color bg-opacity-40 text-gray-700 border 
                rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                 focus:border-dark-purple focus:border-1" id="email" type="email" placeholder="naruto@gmail.com"
                />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-3">
                <div class="w-full px-3">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
                    Password
                </label>
                <input class="appearance-none block w-full bg-primary-light-color bg-opacity-40 text-gray-700 border 
                rounded-lg py-3 px-4  leading-tight focus:outline-none focus:bg-white
                 focus:border-dark-purple focus:border-1" id="password" type="password" placeholder="*********"
                />
                </div>
            </div>
            
        </form>
    );
}

export default SignUpForm;