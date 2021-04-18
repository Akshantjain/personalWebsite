import { UserIcon } from '@heroicons/react/outline'

export const Introduction = ({data}) => {
    const intro = data.introduction;
    return (
        <section id="aboutMe" className="mt-2 py-2 pb-20 space-y-10">
            <div className="container mx-auto rounded-2xl bg-gray-100 shadow-2xl transform scale-95">
                <div className="container mx-auto rounded-2xl py-7 bg-blue-500 shadow-2xl
                                origin-center transform -rotate-1
                                transition-transform ease-in duration-200
                                hover:rotate-0">
                    <div className="scale-95 container transform origin-center rotate-2 
                                    transition-transform ease-in duration-200
                                    hover:rotate-0
                                    bg-white rounded-2xl shadow-2xl">
                        <div className="text-4xl flex font-bold rounded-t-2xl p-10 bg-blue-200 shadow text-blue-900">
                            <UserIcon className="h-9 w-auto mb-1 mr-4" />
                            <p>About Me</p>
                        </div>
                        <div className="container py-5 px-10 text-xl text-justify leading-10 shadow-inner">
                            {/* &ensp; &ensp; &ensp; &ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed rhoncus augue. Nullam eu ipsum pharetra risus imperdiet facilisis. Nullam eget leo ex. Nunc finibus massa et lectus posuere pellentesque. Nam quis nulla quis eros tempus malesuada. Morbi fermentum massa non diam vestibulum, et imperdiet odio pellentesque. Morbi feugiat sollicitudin sem, id aliquam erat lobortis in. Cras eget odio odio. Suspendisse quis odio rhoncus, luctus mi vel, consectetur magna. Sed aliquam metus porta sapien commodo, sed consectetur est lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales leo pharetra sapien pharetra condimentum a non mi. Sed erat sem, aliquam at ex porttitor, tincidunt sodales neque. Vivamus diam nunc, dictum ut ultricies id, maximus vel leo. Nunc viverra porta odio, id vestibulum orci pharetra sed. Nulla sit amet sem nibh. <br/> */}
                            {/* &ensp; &ensp; &ensp; &ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed rhoncus augue. Nullam eu ipsum pharetra risus imperdiet facilisis. Nullam eget leo ex. Nunc finibus massa et lectus posuere pellentesque. Nam quis nulla quis eros tempus malesuada. Morbi fermentum massa non diam vestibulum, et imperdiet odio pellentesque. Morbi feugiat sollicitudin sem, id aliquam erat lobortis in. Cras eget odio odio. Suspendisse quis odio rhoncus, luctus mi vel, consectetur magna. Sed aliquam metus porta sapien commodo, sed consectetur est lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales leo pharetra sapien pharetra condimentum a non mi. Sed erat sem, aliquam at ex porttitor, tincidunt sodales neque. Vivamus diam nunc, dictum ut ultricies id, maximus vel leo. Nunc viverra porta odio, id vestibulum orci pharetra sed. Nulla sit amet sem nibh. */}
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