import styles from '@/styles/aboutme.module.css';
import * as PIXI from 'pixi.js';
import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react';
import { aboutmetext } from './text';
import { indexContext } from '@/pages/index.tsx';


export function AboutMe()
{
        let valContext = useContext(indexContext)
        let langSrc = useRef(aboutmetext.FR);
     
        if(valContext.lang =='FR')
        {
            langSrc.current = aboutmetext.FR
        }
        else
        {
            langSrc.current = aboutmetext.EN
        }
        return      <div id="anchor_1" className={styles.aboutmeContainer}>
                               <div className={styles.title}>{langSrc.current.title}</div>
                               <div className={styles.content}>
                                      <div className={styles.content_pic} >
                                                {/* <div id="picGLass" className={styles.pic_glass}>
                                                        
                                                </div> */}
                                                <img  className={styles.content_pic_img} src='ppic2.jpg' alt='pic'></img>
                                      </div>
                                      <div className={styles.content_text} >
                                                <div className={`text-[#616161] `}>
                                                            {langSrc.current.txt_1}
                                                </div>
                                                <div className={styles.content_text_2}>
                                                        <span className={` text-[rgb(0,142,198)] font-bold`} > Email :</span> zbio234@gmail.com
                                                </div>
                                                <div className={styles.content_text_3}>
                                                        <span className={styles.content_text_special}>{langSrc.current.txt_2}</span> Cotonou | Benin
                                                </div>
                                      </div>
                               </div>

                               <div className={styles.title_2}>{langSrc.current.txt_3}</div>
                               <div className={styles.content_2}>
                                        <SkillElem imglink={'logo-html5-col.png'} link={false} desc={'Html5'} />
                                        <SkillElem imglink={'logo-js-col1.png'} link={false}  desc={'Javascript'}/>
                                        <SkillElem imglink={'logo-react-col.png'}  link={false} desc={'ReactJs'} />
                                        <SkillElem imglink={'next-js-logo.svg'} link={false} desc={'NextJs'} />
                                        <SkillElem imglink={'logo-laravel-col.png'} link={false} desc={'Laravel'} />
                                        <SkillElem imglink={'logo-nodejs.png'} link={false} desc={'Nodejs'} />
                                        <SkillElem imglink={'logofigma.png'} link={false} desc={'Figma'} />
                                        
                                        {/* <img className={styles.content_2_img} src='logohtml5.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logojs.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logoreact.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logolaravel.png' alt='logo'></img> */}

                               </div>


                    </div>
         
}

export function SkillElem(props)
{
        let content = useRef(null);
        let openLink = ()=>
        {
            window.open(props.linkUrl,'_blank')
        }
        if(props.link)
        {
            content.current = <div className={`${styles.skillContainer} ${styles.skillContainerClick} `}>
                                <div className={styles.skillElemDesc}>
                                    {props.desc}       
                                </div>
                                <div onClick={openLink} className={styles.skillElem}>
                                    <img className={styles.skillContainerimg} src={props.imglink} ></img>
                                </div>
                                
                              </div>;
        }
        else
        {
            content.current = <div className={styles.skillContainer}>
                                <div className={styles.skillElemDesc}>
                                    {props.desc}       
                                </div>
                                <div className={styles.skillElem}>
                                    <img className={styles.skillContainerimg} src={props.imglink} ></img>
                                    
                                </div>
                                
                              </div>;
        }
        return content.current;
            
            
        
}

function PixiApp()
{
const app = new PIXI.Application({ resizeTo: document.querySelector('#picGLass') });

document.querySelector('#picGLass').appendChild(app.view);

// prepare circle texture, that will be our brush
const brush = new PIXI.Graphics()
    .beginFill(0xffffff)
    .drawCircle(0, 0, 25);

// Create a line that will interpolate the drawn points
const line = new PIXI.Graphics();

PIXI.Assets.add('t1', 'grat.png');
PIXI.Assets.add('t2', 'ppic2.jpg');
PIXI.Assets.load(['t1', 't2']).then(setup);

function setup()
{
    const { width, height } = app.screen;
    const stageSize = { width, height };

    const background = Object.assign(PIXI.Sprite.from('t1'), stageSize);
    const imageToReveal = Object.assign(PIXI.Sprite.from('t2'), stageSize);
    const renderTexture = PIXI.RenderTexture.create(stageSize);
    const renderTextureSprite = new PIXI.Sprite(renderTexture);

    imageToReveal.mask = renderTextureSprite;

    app.stage.addChild(
        background,
        imageToReveal,
        renderTextureSprite,
    );

    app.stage.eventMode = 'static';
    app.stage.hitArea = app.screen;
    app.stage
        .on('pointerdown', pointerDown)
        .on('pointerup', pointerUp)
        .on('pointerupoutside', pointerUp)
        .on('pointermove', pointerMove);

    let dragging = false;
    let lastDrawnPoint = null;

    function pointerMove({ global: { x, y } })
    {
        if (dragging)
        {
            brush.position.set(x, y);
            app.renderer.render(brush, {
                renderTexture,
                clear: false,
                skipUpdateTransform: false,
            });
            // Smooth out the drawing a little bit to make it look nicer
            // this connects the previous drawn point to the current one
            // using a line
            if (lastDrawnPoint)
            {
                line
                    .clear()
                    .lineStyle({ width: 10, color: 0xffffff })
                    .moveTo(lastDrawnPoint.x, lastDrawnPoint.y)
                    .lineTo(x, y);
                app.renderer.render(line, {
                    renderTexture,
                    clear: false,
                    skipUpdateTransform: false,
                });
            }
            lastDrawnPoint = lastDrawnPoint || new PIXI.Point();
            lastDrawnPoint.set(x, y);
        }
    }

    function pointerDown(event)
    {
        dragging = true;
        pointerMove(event);
    }

    function pointerUp(event)
    {
        dragging = false;
        lastDrawnPoint = null;
    }
}
}