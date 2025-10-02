import HeroText from "../components/HeroText"
import { Lego } from "../components/Lego"
import { Canvas } from "@react-three/fiber"
import ParallaxBackground from "../components/parallaxBackground"

const Hero = () => {
  return (
  <section id="home" className="flex flex-col md:flex-row items-center justify-center
  md:items-start md:justify-start min-h-screen overflow-hidden
  c-space"> 
    <div className="flex flex-col md:flex-row items-center md:items-start w-full">
      {/* Texto del Hero */}
      <div className="w-full md:w-1/2 z-10">
        <HeroText />
      </div>
      
      {/* Modelo 3D */}
      {/* <div className="w-full md:w-1/2 h-80 md:h-screen relative z-10 flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, 5, 5]} intensity={0.8} />
          <pointLight position={[0, 5, 5]} color="#ffffff" intensity={0.5} />
          <Lego />
        </Canvas>
      </div> */}
    </div>
    
    <ParallaxBackground />
  </section >
  )
}

export default Hero
