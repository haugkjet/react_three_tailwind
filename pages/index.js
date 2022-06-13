import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "../components/Box";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next, ThreeJS test</title>
        <meta name="description" content="Next, ThreeJS test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <Box />
          <ambientLight intensity={0.5}></ambientLight>;
          <directionalLight position={[-2, 5, 2]} intensity={1} />
        </Canvas>
      </div>
    </div>
  );
}
