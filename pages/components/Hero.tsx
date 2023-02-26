import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-blue-300">
      <div className="flex flex-col items-center justify-center h-screen space-y-8">
        <div className="flex items-center justify-center">
          <Image src={imageSrc} alt={imageAlt} width={300} height={300} />
          
        </div>
        <div className="flex items-center justify-center">
         
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white ml-4 tracking-wide">
            {title}
          </h1>
        </div>
        <p className="text-lg md:text-xl text-white max-w-md text-center font-medium leading-7">
          {subtitle}
        </p>
        <a href={buttonLink}>
          <button className="px-8 py-3 rounded-full bg-white text-blue-500 font-bold hover:bg-blue-50 transition-colors duration-200">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
