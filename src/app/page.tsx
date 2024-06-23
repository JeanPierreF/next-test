import Image from "next/image";
import trone from '../../public/assets/image/background/salledutrone.jpg'

export default function Home() {
  return (
    <>
    <span>
      <h1 className="text-5xl text-center">Salle du Trône</h1>
    </span>
    <Image
      className="bg-scroll bg-my-bg-image h-[1080px]"
      src={trone} 
      alt="salle du trone"
    />
    </>
  );
}
