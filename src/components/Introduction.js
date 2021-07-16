import { UserIcon } from '@heroicons/react/outline'

export const Introduction = ({data}) => {
    const intro = data.introduction;
    return (
        <section id="about" className=" mt-16 py-2 pb-3 md:pb-10 lg:pb-20 space-y-10 js-show-on-scroll" data-show="left">
            <div className="container mx-auto rounded-2xl bg-gray-100 shadow-2xl transform scale-95">
                <div className="container mx-auto rounded-2xl py-7 bg-blue-500 shadow-2xl
                                origin-center transform rotate-0 md:-rotate-1
                                transition-transform ease-in duration-200
                                hover:rotate-0">
                    <div className="scale-95 container transform origin-center rotate-0 md:rotate-2 
                                    transition-transform ease-in duration-200
                                    hover:rotate-0
                                    bg-white rounded-2xl shadow-2xl">
                        <div className="font-sans text-4xl flex font-bold rounded-t-2xl p-10 bg-blue-200 shadow text-blue-900">
                            <UserIcon className="h-9 w-auto mb-1 mr-4" />
                            <p className="js-show-on-scroll" data-show="right">About Me</p>
                        </div>
                        <div className="container  py-5 px-10 text-xl leading-10 shadow-inner js-show-on-scroll" data-show="right">
                            {intro.map((value, key) => {
                                return <p key={key} className="pb-3">&ensp; &ensp; &ensp; &ensp; {value}<br/></p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}