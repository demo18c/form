import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { OrbitControls, Html, Sky } from '@react-three/drei';

import Model from './RadioModel';
import Button from '@material-ui/core/Button';

const Radio = () => {
	return (
		<Canvas pixelRatio={[1, 2]} camera={{ fov: 60, position: [5, 0, 0] }}>
			{/* <color attach="background" args={['#101010']} /> */}

			<OrbitControls
				// minPolarAngle={Math.PI / 2}
				maxPolarAngle={Math.PI / 2}
				enableZoom={false}
				enablePan={false}
			/>
			{/* <Environment path={'/public/royal_esplanade_1k.hdr'} files="royal_esplanade_1k.hdr" /> */}
			<ambientLight intensity={3} />
			<pointLight intensity={3} position={[10, 10, 5]} />
			<pointLight intensity={3} position={[-10, 0, -10]} />
			<pointLight intensity={3} position={[5, 0, 0]} />
			<directionalLight intensity={3} position={[0, 5, 0]} />

			<axesHelper />
			<Suspense fallback={null}>
				<Html position={[0, 0.5, -0.5]} className="modelhtml">
					On Switch
				</Html>
				<Html className="modelhtml" position={[0, 2, -0.5]}>
					Antennae
				</Html>

				<Model position={[0, -2.5, 0]} />
			</Suspense>
			{/* <Sky sunPosition={[0, 0, 0]} /> */}
		</Canvas>
		//<Button component={Link} to="/radiotrouble" variant="contained">
		//	Next
		//</Button>
	);
};

export default Radio;
