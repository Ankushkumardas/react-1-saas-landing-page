
import Milestone from './Milestone'

const roadmap=[
    {
        id:1,
        name:'Project KickOff',
        description:' Lorem ipsum dolor sit.'

    },
    {
        id:2,
        name:'Deployment',
        description:' Lorem ipsum dolor sit.'

    },
    {
        id:3,
        name:'Deployment',
        description:' Lorem ipsum dolor sit.'

    },
    {
        id:4,
        name:'Deployment',
        description:' Lorem ipsum dolor sit.'

    },
    {
        id:5,
        name:'Maintanence',
        description:' Lorem ipsum dolor sit.'

    },
];

const Roadmapsection =()=>{
    return (
        <section className='mx-auto max-w-80 '>
            <h1 className='mb-16 text-3xl font-bold text-center'>Roadmap</h1>
            {
                roadmap.map((roadmapitem,index)=>(
                    <Milestone
                    key={index}
                    title={roadmapitem.name}
                    description={roadmapitem.description}
                    lastitem={index === roadmap.length-1}/>
                ))
            }
        </section>
    )
}

export default Roadmapsection;