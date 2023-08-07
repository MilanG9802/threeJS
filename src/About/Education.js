import React from "react";

const Education = ({ font }) => {
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[40, 0.5, 90]}>
        <textBufferGeometry
          attach="geometry"
          args={["Education", { font, size: 3, height: 1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[34, 0.1, 84]}
        >
          <textBufferGeometry
            attach="geometry"
            args={["SCET - 042 - GTU", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>

        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[40, 0.1, 81]}>
          <textBufferGeometry
            attach="geometry"
            args={[
              "B.Tech -  Computer Science Engineering ",
              { font, size: 1, height: 0.1 },
            ]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[34, 0.1, 78]}>
          <textBufferGeometry
            attach="geometry"
            args={[" July 2019-2023", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[36, 0.1, 72]}
        >
          <textBufferGeometry
            attach="geometry"
            args={["Ashadeep Science Bhavan", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[34, 0.1, 69]}>
          <textBufferGeometry
            attach="geometry"
            args={["Surat, Gujarat, India", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[33, 0.1, 66]}>
          <textBufferGeometry
            attach="geometry"
            args={["Class XI and XII ", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Education;
