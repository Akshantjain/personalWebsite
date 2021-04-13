import { UserIcon } from '@heroicons/react/outline'

export const Introduction = () => {
    return (
        <section id="aboutMe" className="mt-2 py-2 pb-20 space-y-5">
            <div className="container mx-auto rounded-2xl bg-gray-100 shadow-2xl">
                <div className="container mx-auto rounded-2xl py-7 bg-blue-500 shadow-lg 
                                origin-center transform -rotate-1
                                transition-transform ease-in duration-200
                                hover:rotate-0">
                    <div className="scale-90 container transform scale-90 origin-center rotate-2 
                                    transition-transform ease-in duration-200
                                    hover:rotate-0
                                    bg-white rounded-2xl shadow-lg">
                        <div className="text-4xl flex font-bold rounded-t-2xl p-10 bg-blue-200 shadow-inner">
                            <UserIcon className="h-9 w-auto my-1 mr-4" />
                            <p>About Me</p>
                        </div>
                        <div className="container py-5 px-10 text-xl leading-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed rhoncus augue. Nullam eu ipsum pharetra risus imperdiet facilisis. Nullam eget leo ex. Nunc finibus massa et lectus posuere pellentesque. Nam quis nulla quis eros tempus malesuada. Morbi fermentum massa non diam vestibulum, et imperdiet odio pellentesque. Morbi feugiat sollicitudin sem, id aliquam erat lobortis in. Cras eget odio odio. Suspendisse quis odio rhoncus, luctus mi vel, consectetur magna. Sed aliquam metus porta sapien commodo, sed consectetur est lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales leo pharetra sapien pharetra condimentum a non mi. Sed erat sem, aliquam at ex porttitor, tincidunt sodales neque. Vivamus diam nunc, dictum ut ultricies id, maximus vel leo. Nunc viverra porta odio, id vestibulum orci pharetra sed. Nulla sit amet sem nibh.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed rhoncus augue. Nullam eu ipsum pharetra risus imperdiet facilisis. Nullam eget leo ex. Nunc finibus massa et lectus posuere pellentesque. Nam quis nulla quis eros tempus malesuada. Morbi fermentum massa non diam vestibulum, et imperdiet odio pellentesque. Morbi feugiat sollicitudin sem, id aliquam erat lobortis in. Cras eget odio odio. Suspendisse quis odio rhoncus, luctus mi vel, consectetur magna. Sed aliquam metus porta sapien commodo, sed consectetur est lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales leo pharetra sapien pharetra condimentum a non mi. Sed erat sem, aliquam at ex porttitor, tincidunt sodales neque. Vivamus diam nunc, dictum ut ultricies id, maximus vel leo. Nunc viverra porta odio, id vestibulum orci pharetra sed. Nulla sit amet sem nibh.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}