import styles from '@/styles/aboutme.module.css';
import * as PIXI from 'pixi.js';
import Link from 'next/link'
import { useEffect } from 'react';

export function AboutMe()
{
     
        useEffect(()=>
        {
                //PixiApp()
        },[])
        return      <div id="anchor_1" className={styles.aboutmeContainer}>
                               <div className={styles.title}>Qui suis je ? 👋</div>
                               <div className={styles.content}>
                                      <div className={styles.content_pic} >
                                                {/* <div id="picGLass" className={styles.pic_glass}>
                                                        
                                                </div> */}
                                                <img  className={styles.content_pic_img} src='ppic2.jpg' alt='pic'></img>
                                      </div>
                                      <div className={styles.content_text} >
                                                <div className={styles.content_text_1}>
                                                        Moi c'est Abdel BIO, fondateur de Muséedu229. Je designe et développe 
                                                        des sites web. Artisan du web depuis 5 ans.
                                                </div>
                                                <div className={styles.content_text_2}>
                                                        <span className={styles.content_text_special} >Email :</span> zbio234@gmail.com
                                                </div>
                                                <div className={styles.content_text_3}>
                                                        <span className={styles.content_text_special}>Résidence :</span> Cotonou
                                                </div>
                                      </div>
                               </div>

                               <div className={styles.title_2}>Compétences 👩‍💻</div>
                               <div className={styles.content_2}>
                                        <SkillElem imglink={'logo-html5-col.png'} />
                                        <SkillElem imglink={'logo-js-col1.png'} />
                                        <SkillElem imglink={'logo-react-col.png'} />
                                        <SkillElem imglink={'logo-laravel-col.png'} />
                                        <SkillElem imglink={'logo-nodejs.png'} />
                                        
                                        {/* <img className={styles.content_2_img} src='logohtml5.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logojs.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logoreact.png' alt='logo'></img>
                                        <img className={styles.content_2_img} src='logolaravel.png' alt='logo'></img> */}

                               </div>


                    </div>
         
}

function SkillElem(props)
{
        return(
            <div className={styles.skillContainer}>
                <div className={styles.skillElem}>
                    <img className={styles.skillContainerimg} src={props.imglink} ></img>
                </div>
            </div>
            
        )
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