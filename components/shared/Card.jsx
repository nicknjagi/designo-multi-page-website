import Image from "next/image"

const Card = ({img, title, content}) => {
  return (
    <article className="w-full max-w-[327px] md:max-w-4xl lg:max-w-[327px] xl:max-w-[350px] md:grid md:grid-cols-2 lg:flex lg:flex-col md:h-[310px] lg:h-auto hover:cursor-pointer">
      <Image
        src={img}
        width={320}
        height={320}
        className='h-[320px] md:h-[310px] w-full object-cover object-top rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none lg:rounded-bl-none lg:rounded-t-2xl'
        aria-hidden={true}
        alt={`${title} website`}
      />
      <div className="md:flex md:flex-col md:justify-center bg-light-peach p-8 w-full rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl lg:rounded-tr-none lg:rounded-b-2xl">
        <h3 className="text-peach-primary text-xl font-medium uppercase mb-4">{title}</h3>
        <p>{content}</p>
      </div>
    </article>
  )
}
export default Card