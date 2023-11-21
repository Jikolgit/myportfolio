import styles from '@/styles/banner.module.css';
import Link from 'next/link';
import { Color, AdditiveBlending } from 'three';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { DirectionalLightHelper, PointLightHelper, HemisphereLightHelper } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { ModelLoading_2 } from './banner_loadmodel';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useGLTF, CameraControls, useTexture, shaderMaterial, useAnimations, useVideoTexture, Stage, Backdrop, useHelper, Fisheye } from '@react-three/drei';
export function Banner()
{
     
     let texte = " Donnez une nouvelle dimension à votre présence en ligne ";
     let letterIndex = useRef(0);
     let textToshow = useRef("");
     let containerDimension = useRef({width:110,height:0});
     let [textToType,settextToType] = useState("");
     let renderer,scene,camera,orbit,_model

     let _animate = ()=>
     {
         
         _model.forUpdate();
         orbit.update();
         renderer.render(scene,camera)
        
     }
     
     let typeText = ()=>
     {
        if(textToshow.current.length < texte.length-1 )
        {
                window.setTimeout(()=>
                {
                        
                        letterIndex.current ++;
                        textToshow.current += texte[letterIndex.current] ;
                        settextToType(c => c= textToshow.current)
                        
                },100);
                
        }
        else
        {

        }
     }

     useEffect(()=>
     {
        
        typeText()


     },[textToshow.current])
        return      <div className={styles.bannercontainer}>
                          
                                <div className={styles.glasscontainer}>
                                        <div className={styles.glassText}>
                                                {textToType}
                                        </div>
                                </div>
                                <Canvas shadows >
                                        
                                        
                                <color attach="background" args={['#3f7b9d']} />
                                                
                                                <LightCompo />
                                                <CameraCompo />
                                                
                                                <AddDesktop />
                                        
                                </Canvas>
                    </div>
         
}
function CameraCompo()
{
        let camref = useRef()
        useEffect(()=>
        {
                
                // camref.current.setPosition(7,7,7);
                camref.current.setPosition(10,17,15);
                camref.current.setTarget(0,0,0)

         
        },[])
        return  <>
                   {/* <fog attach="fog" color="white" near={2} far={50} /> */}
                   <CameraControls  ref={camref}/>
                   <PerspectiveCamera makeDefault position={[10,17,15]} />

                </>

}
function LightCompo()
{
        let lightref = useRef()
        // useHelper(lightref,DirectionalLightHelper);

        return  <>
                        <hemisphereLight   intensity={2.5} />
                        <directionalLight castShadow ref={lightref}  intensity={2.5} position={[0,15,0]} />

                </>


}
function AddDesktop(props)
{
        const { nodes, animations } = useGLTF('/workmodel.glb');
        const { ref, names, actions} = useAnimations(animations);
        let chairRef = useRef(null);
        let [desktoptxt,wifitxt,pctxt,chairtxt,groundtxt,climtxt,bigscreentxt] = useTexture(['desktoptxt.jpg','wifitxt.jpg','pctxt.jpg','chairtxt.jpg','ground.jpg','climtxt.jpg','bigscreentxt.png']);
        const videoTexture = useVideoTexture('/windowStart.mp4')

        
        desktoptxt.flipY = wifitxt.flipY 
        = pctxt.flipY = chairtxt.flipY = groundtxt.flipY = climtxt.flipY = bigscreentxt.flipY = false; 
        

        desktoptxt.colorSpace = wifitxt.colorSpace 
        = pctxt.colorSpace = chairtxt.colorSpace = groundtxt.colorSpace = climtxt.colorSpace = bigscreentxt.colorSpace = THREE.SRGBColorSpace; 

        desktoptxt.minFilter = wifitxt.minFilter 
        = pctxt.minFilter = chairtxt.minFilter = groundtxt.minFilter = climtxt.minFilter = bigscreentxt.colorSpace = THREE.LinearFilter; 

        desktoptxt.magFilter = wifitxt.magFilter 
        = pctxt.magFilter = chairtxt.magFilter = groundtxt.magFilter = climtxt.magFilter = bigscreentxt.magFilter =  THREE.LinearFilter; 

        
        
        useFrame((state,delta)=>
        {
            //objRef.current.rotation.y -=0.005
        //     chairRef.current.rotation.y -= Math.sin(delta)
            
        })
        useEffect(()=>
        {
           actions?.chairrotate.play();
         
        },[])
        return( 
                
                <group ref={ref} >
                        <mesh castShadow receiveShadow name={nodes.table.name} {...props} geometry={nodes.table.geometry} position = {nodes.table.position}  >
                        <meshBasicMaterial map={desktoptxt} />
                        </mesh>
                        <mesh {...props} geometry={nodes.book.geometry} position = {nodes.book.position} >
                        <meshBasicMaterial map={desktoptxt} />
                        </mesh>
                        <mesh {...props} geometry={nodes.mouse.geometry} position = {nodes.mouse.position} >
                        <meshBasicMaterial map={desktoptxt} />
                        </mesh>
                        <mesh {...props} geometry={nodes.mousetapis.geometry} position = {nodes.mousetapis.position} >
                        <meshBasicMaterial map={desktoptxt} />
                        </mesh>
                        <mesh {...props} geometry={nodes.wifi.geometry} position = {nodes.wifi.position} >
                        <meshBasicMaterial map={wifitxt} />
                        </mesh>
                        <mesh {...props} geometry={nodes.pc.geometry} position = {nodes.pc.position} >
                        <meshBasicMaterial map={pctxt} />
                        </mesh>
                        <mesh {...props} geometry={nodes.pc_screen.geometry} position = {nodes.pc_screen.position} >
                        <meshBasicMaterial map={videoTexture} toneMapped={false} />
                        </mesh>
                        <mesh {...props} castShadow name={nodes.chair.name}   geometry={nodes.chair.geometry} position = {nodes.chair.position} >
                        <meshBasicMaterial map={chairtxt} />
                        </mesh>
                        <mesh {...props} geometry={nodes.chairfoot.geometry} position = {nodes.chairfoot.position} >
                        <meshBasicMaterial map={chairtxt} />
                        </mesh>
                        <mesh {...props} receiveShadow geometry={nodes.ground.geometry} scale={nodes.ground.scale} position = {nodes.ground.position} >
                        <meshStandardMaterial map={groundtxt} />
                        </mesh>
                        <mesh {...props} receiveShadow geometry={nodes.clim.geometry} scale={nodes.clim.scale} rotation={nodes.clim.rotation} position = {nodes.clim.position} >
                        <meshBasicMaterial map={climtxt} />
                        </mesh>
                        <mesh {...props} receiveShadow geometry={nodes.bigpc.geometry} scale={nodes.bigpc.scale} rotation={nodes.bigpc.rotation} position = {nodes.bigpc.position} >
                        <meshBasicMaterial map={pctxt} />
                        </mesh>
                        <mesh {...props} receiveShadow geometry={nodes.bigpcscreen.geometry} scale={nodes.bigpcscreen.scale} rotation={nodes.bigpcscreen.rotation} position = {nodes.bigpcscreen.position} >
                        <meshBasicMaterial map={bigscreentxt} />
                        </mesh>
                </group>
                
                
              )
}
function AddBook(props)
{
        let texture = useTexture('desktoptxt.jpg')
        texture.flipY = false;
        let objRef = useRef()
        
        texture.colorSpace = THREE.SRGBColorSpace; 
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        //const mat = new THREE.MeshBasicMaterial({map:texture})
        const { nodes } = useGLTF('/workmodel.glb')
        useFrame((state,delta)=>
        {
            //objRef.current.rotation.y -=0.005
        })
        
        return( 
                
                                
                                <mesh {...props} geometry={nodes.book.geometry} position = {nodes.book.position} >
                                                <meshBasicMaterial map={texture} />
                                </mesh>
                
              )
}
function AddWorldHalo()
{

        const mat = new THREE.MeshStandardMaterial({color:"red",side:THREE.BackSide});
        const { nodes } = useGLTF('/satmodel.glb')
    
        return <mesh scale={1.1} geometry={nodes.world.geometry} material={mat}  position={[0,0,0]}></mesh> 
}
function AddSat(props)
{
        let objRef = useRef()

        let texture = useTexture('stattxt.jpg')
        texture.flipY = false
       
        // texture.colorSpace = THREE.SRGBColorSpace; 
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        const mat = new THREE.MeshStandardMaterial({map:texture})
        const { nodes } = useGLTF('/satmodel.glb')
        useFrame((state,delta)=>
        {
            objRef.current.rotation.z -=0.005
            objRef.current.rotation.x -=0.005
        })
        return <mesh ref={objRef} {...props} rotation={[0,Math.PI,0]} geometry={nodes.sat.geometry} material={mat} >
                        
                        
                </mesh>
}

// Faire une boite cadeau ouvrable avec un code et à l'intérieur mettre une surprise un lien vers mes realisations 3d