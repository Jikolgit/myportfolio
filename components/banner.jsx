import styles from '@/styles/banner.module.css';
import Link from 'next/link';
import { Color, AdditiveBlending } from 'three';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {Model} from 'components/Stickmod.jsx';
import { Stage, Container, Sprite, Text, useTick } from '@pixi/react';
import { indexContext } from '@/pages/index.tsx';
import { bannertext } from './text';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
export function Banner()
{
     let valContext = useContext(indexContext);
     let langSrc = useRef(bannertext.EN);
     let texte = " Je suis Abdel BIO, développeur web Full Stack, passionné des nouvelles technologies. ";
     if(valContext.lang == 'EN')
        {
                
                langSrc.current = bannertext.EN;
        }
        else
        {
                langSrc.current = bannertext.FR;
        }
     let activateOnce = useRef(false);
     texte = langSrc.current.txt_1;
     let letterIndex = useRef(0);
     let textToshow = useRef(""); 
     let pixiAppRef = useRef(null);
     let [textToType,settextToType] = useState("");
     let [pixiApp,setpixiApp] = useState(null); 
     


     
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

     let scrollSmooth = function (evt,to)
        {
                evt.preventDefault()
                document.querySelector(to).scrollIntoView({behavior: "smooth"});
                
                
        }
     useEffect(()=>
     {
        
        // typeText()
        // if(!activateOnce.current)
        // {
        //    activateOnce.current = true;
        //    setpixiApp(c=> c =<PixiApp containerRef = {pixiAppRef} />  )
        // }
        

     },[textToshow.current])
        return      <div className={styles.bannercontainer}>
                          
                                <div className={styles.glasscontainer}>
                                        
                                        
                                      <div >
                                        Je suis <span style={{color:'#e31b6d'}}>Abdel</span>, <br /> développeur fullstack <br />
                                        <div onClick={(evt)=>{scrollSmooth(evt,'#anchor_2')}} className={styles.folioButton} >
                                                <span className={styles.folioTextButton}>Mes travaux</span>
                                                <svg className={styles.folioIconButton} width={40} height={40} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m9 18 6-6-6-6" />
                                                </svg>
                                        </div>
                                      </div>  
                                </div>
                                <div ref={pixiAppRef} className={styles.pixiContainer}>
                                        <Canvas>
                                                {/* <axesHelper args={[5]} /> */}
                                                <Model />
                                                <CameraCompo />
                                        </Canvas>
                                        {/* {pixiApp} */}
                                </div>
                    </div>
         
}

function PixiApp(props)
{
        let _width = props.containerRef.current.clientWidth;
        let _height = props.containerRef.current.clientHeight;
       
        
        return (
                <Stage width={_width} height={_height} options={{ backgroundAlpha: 0 }}>
                        <PixiIcon x={10} y={10} direction={'RIGHT-UP'} logo={"logo-js-svg2.svg"} width={_width} height={_height} />
                        <PixiIcon x={_width-70} y={50} direction={'LEFT-UP'} logo={"logo-react-svg.svg"} width={_width} height={_height} />
                        <PixiIcon x={10} y={200} direction={'RIGHT-DOWN'} logo={"logo-laravel-svg.svg"} width={_width} height={_height} />
                        <PixiIcon x={_width-70} y={200} direction={'LEFT-DOWN'} logo={"logo-html5-svg.svg"} width={_width} height={_height} />
            
                  
                </Stage>
              );
}
function PixiIcon(props)
{
        let xDirection = (2 + Math.random() * 2) * 0.2;
        let yDirection = (2 + Math.random() * 2) * 0.2;
        if(props.direction == 'RIGHT-DOWN')
        {
                xDirection = (2 + Math.random() * 2) * 0.2;
                yDirection = (2 + Math.random() * 2) * 0.2;
        }
        
        if(props.direction == 'RIGHT-UP')
        {
                xDirection = (2 + Math.random() * 2) * 0.2;
                yDirection = -(2 + Math.random() * 2) * 0.2;
        }
        if(props.direction == 'LEFT-UP')
        {
                xDirection = (2 + Math.random() * 2) * 0.2;
                yDirection = (2 + Math.random() * 2) * 0.2;
        }
        let jsiconref = useRef(null);
        let jscontainerRef = useRef(null);


        let moveIcon = (delta,icon,icon2)=>
        {
        icon2.rotation += 0.02;
        
        if(props.direction == 'RIGHT-DOWN')
        {       
                if(icon.x <= props.width)
                {
                        icon.x += (xDirection*delta);
                        
                }
                else if((icon.x) >= (props.width))
                {
                       
                icon.x -= (props.width+icon.width);
                }
                if(icon.y <= props.height)
                {
                        icon.y += (yDirection*delta);
                }
                
                else if(icon.y >= (props.height))
                {
                icon.y -= (props.height+icon.height);
                }
        }
        else if(props.direction == 'LEFT-DOWN')
        {       
                if((icon.x+icon.width) >= 0)
                {
                        icon.x -= (xDirection*delta);
                        
                }
                else if((icon.x+icon.width) <= (0))
                {
                       
                icon.x += (props.width+icon.width);
                }
                if(icon.y <= props.height)
                {
                        icon.y += (yDirection*delta);
                }
                
                else if(icon.y >= (props.height))
                {
                icon.y -= (props.height+icon.height);
                }
        }
        else if(props.direction == 'RIGHT-UP')
        {
                if(icon.x <= props.width)
                {
                        icon.x += (xDirection*delta);
                        
                }
                else if((icon.x) >= (props.width))
                {
                       
                icon.x -= (props.width+icon.width);
                }
                if((icon.y+icon.height) >= 0)
                {
                        icon.y += (yDirection*delta);
                }
                
                else if(icon.y <= (-icon.height))
                {
                icon.y += (props.height+icon.height);
                }
        }
        else if(props.direction == 'LEFT-UP')
        {       
                if((icon.x+icon.width) >= 0)
                {
                        icon.x -= (xDirection*delta);
                        
                }
                else if((icon.x+icon.width) <= (0))
                {
                       
                icon.x += (props.width+icon.width);
                }
                if((icon.y+icon.height) >= 0)
                {
                        icon.y -= (yDirection*delta);
                }
                
                else if(icon.y <= (-icon.height))
                {
                        icon.y += (props.height+icon.height);
                }
        }

        }
        useTick(delta=>
                {
                        
                  moveIcon(delta,jscontainerRef.current,jsiconref.current)
                })
        useEffect(()=>
        {
               
        },[])
        return(
                  <Container ref={jscontainerRef} position={[props.x, props.y]} width={80} height={80}>
                  <Sprite
                    ref = {jsiconref}
                    image= {props.logo}
                    x={40}
                    y={40}
                    width={80}
                    height={80}
                    anchor={0.5}
                  />
                  </Container>
        )
}

export function CameraCompo(props)
{
        
        let camref = useRef(null);
        let orbitref = useRef(null);
        let activateOnce = useRef(false);
        // let cameraPosition =[{x:-35.7,y:25.7,z:-15},{x:-14,y:5.7,z:-5},{x:12,y:5.7,z:5}];
        let cameraPosition =[{x:-35.7,y:25.7,z:-15},{x:12,y:5.7,z:5}];
        let cameraLook=[{x:-40.7,y:5,z:-26},{x:12,y:5,z:-20}];
        // let cameraLook=[{x:-40.7,y:5,z:-26},{x:-14,y:5,z:-25},{x:12,y:5,z:-20}];
        let actualCamIndex = useRef(0);
        let actualCamPos = [cameraPosition[0].x,cameraPosition[0].y,cameraPosition[0].z];


        
        useEffect(()=>
        {
                
                console.log(camref.current)
                camref.current.lookAt(0,0,0);
                camref.current.position.set(-55,0,0)
        }),[]
        return  <>
                   
                   
                   {/* <PerspectiveCamera ref={camref} position={actualCamPos}   makeDefault   />
                   <OrbitControls ref={orbitref} maxDistance={20} minDistance={8} 
                   maxAzimuthAngle ={ Math.PI*(1.4)+4} minAzimuthAngle = {Math.PI*(0.6)+3} 
                   maxPolarAngle={1.7} target={[-40.7,5,-26]} /> */}
                   {/* <PerspectiveCamera ref={camref} position={[-55,0,0]} makeDefault /> */}
                   <PerspectiveCamera ref={camref}   makeDefault position={[-55,0,0]} />
                   {/* <OrbitControls /> */}
                   

                </>

}
// Faire une boite cadeau ouvrable avec un code et à l'intérieur mettre une surprise un lien vers mes realisations 3d