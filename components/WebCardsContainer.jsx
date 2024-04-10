import WebDesignCard from "./WebDesignCard"

const WebCardsContainer = () => {
    const data = [
        {
            title: 'express',
            content:'A multi-carrier shipping website for ecommerce businesses',
            img:'/assets/web-design/desktop/image-express.jpg'
        },
        {
            title: 'transfer',
            content:'Site for low-cost money transfers and sending money within seconds',
            img:'/assets/web-design/desktop/image-transfer.jpg'
        },
        {
            title: 'photon',
            content:'A state-of-the-art music player with high-resolution audio and DSP effects',
            img:'/assets/web-design/desktop/image-photon.jpg'
        },
        {
            title: 'builder',
            content:'Connects users with local contractors based on their location',
            img:'/assets/web-design/desktop/image-builder.jpg'
        },
        {
            title: 'blogr',
            content:'Blogr is a platform for creating an online blog or publication',
            img:'/assets/web-design/desktop/image-blogr.jpg'
        },
        {
            title: 'camp',
            content:'Get expert training in coding, data, design, and digital marketing',
            img:'/assets/web-design/desktop/image-camp.jpg'
        },
    ]
  return (
    <section className="flex flex-wrap justify-center gap-10 md:gap-[30px] pt-24 px-4 md:px-0">
        {data.map((card, index) => {
            return <WebDesignCard key={index} {...card}/>
        })}
    </section>
  )
}
export default WebCardsContainer