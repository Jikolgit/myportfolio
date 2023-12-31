import styles from '@/styles/banner.module.css';
import Link from 'next/link';

import { Color, AdditiveBlending } from 'three';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Stage, Container, Sprite, Text, useTick } from '@pixi/react';
import { indexContext } from '@/pages/index.tsx';
import { bannertext } from './text';
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

     useEffect(()=>
     {
        
        typeText()
        if(!activateOnce.current)
        {
           activateOnce.current = true;
           setpixiApp(c=> c =<PixiApp containerRef = {pixiAppRef} />  )
        }
        

     },[textToshow.current])
        return      <div className={styles.bannercontainer}>
                          
                                <div className={styles.glasscontainer}>
                                        <div className={styles.glassText}>
                                                {textToType}
                                        </div>
                                </div>
                                <div ref={pixiAppRef} className={styles.pixiContainer}>
                                        {/* <PixiApp /> */}
                                        {pixiApp}
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
// Faire une boite cadeau ouvrable avec un code et à l'intérieur mettre une surprise un lien vers mes realisations 3d