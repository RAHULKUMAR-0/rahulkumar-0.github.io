import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei'; // documentation to explain Points, sphere and random threejs

import * as random from 'maath/random/dist/maath-random.esm'; // special math utility for stars

const Stars = (props) => {
  const ref = useRef();  

  const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2 })
  
  useFrame((state, delta ) => {  // for enabling motion effect on stars
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/18;
  })
  return (
    <group rotation={[ 0, 0, Math.PI/4 ]}> 
     <Points ref={ref} positions={sphere}  stride={3} frustumCulled {...props} >
     <PointMaterial 
       transparent
       color="#f272c8"
       size={0.002}
       sizeAttenuation = {true}
       depthWrite = {false}

     />   
     </Points>  
    </group>
  )
}

const StarCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera= {{position: [0, 0, 1, ]}}>  
        <Suspense fallback = {null}>
         <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}
export default StarCanvas