import * as THREE from 'three'
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import _maptxt from '../public/maptxt.jpg';
import statxt from '../public/stattxt.jpg';

// import { LoaderManager } from './loader_template';


export class ModelLoading_2{

    constructor(scene,renderer,orbit,camera){
        this.camera = camera;
        this.orbit = orbit;
        this.shopOut = new URL('../public/satmodel.glb',import.meta.url);
        this.loadedModel,this.modelAnimation;
        this.assetLoad = new GLTFLoader();
        // this.loadingManager = new LoaderManager(this.assetLoad)
        this.modelArrayName = ["world", //0
                                "sat", //1
                              ];
        this.textureSrcArray = [new URL('../public/maptxt.jpg',import.meta.url),
                                new URL('../public/stattxt.jpg',import.meta.url)
];
        this.textureArray = [];
        this.loadedModelArray = [];
        this.nightObjectArray=[];
        this.scene = scene;
        this.axisHelp = new THREE.AxesHelper(5)
        this.scene.add(this.axisHelp)
        this.mixer,this.clip,this.action,this.animationStart=false;
        this.clock = new THREE.Clock();

        this.rgbLoad = new RGBELoader();
        this.renderer = renderer;
        this.txt;


    }



    init()
    {
        
        this.camera.position.set(50,90,75);
        this.orbit.target.set(0,20,0)
        // this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
       

      
        this.loadmodel();

    }

    setTexture()
    {
        for(let i =0;i<this.textureSrcArray.length;i++)
        {
            let textureObj = new THREE.TextureLoader().load(this.textureSrcArray[i]);
            textureObj.flipY = false;
            textureObj.colorSpace = THREE.SRGBColorSpace; 
            textureObj.minFilter = THREE.LinearFilter;
            textureObj.magFilter = THREE.LinearFilter;
            this.textureArray[i] = textureObj;
            
        }

        this.loadedModelArray[0].material = new THREE.MeshBasicMaterial({map:this.textureArray[0]});
        this.loadedModelArray[1].material = new THREE.MeshBasicMaterial({map:this.textureArray[1]});
            



    }



    addMOdel(loadedModel)
    {
        for(let i =0;i<this.modelArrayName.length;i++)
        {
            
            this.loadedModelArray[i] = loadedModel.getObjectByName(this.modelArrayName[i])
            this.scene.add(this.loadedModelArray[i])
        }

        this.loadedModelArray[2] = this.loadedModelArray[0].clone();
        this.loadedModelArray[2].material = new THREE.MeshBasicMaterial({color:'red',side:THREE.BackSide});
        this.loadedModelArray[2].scale.set(1.05,1.05,1.05);
        
        this.scene.add(this.loadedModelArray[2]);
        this.setTexture();
        this.setEvent();
    }


    forUpdate(){
        if(this.animationStart)
        {
            // this.loadedModelArray[0].rotation.y -= 0.005;

            // this.mixer.update(this.clock.getDelta());
        }
    }
    loadAnimation(){
        /*
        this.mixer = new THREE.AnimationMixer(this.loadedModel);
        this.clip =  THREE.AnimationClip.findByName(this.modelAnimation,"climON");
        this.action = this.mixer.clipAction(this.clip)
        this.action.play();
        */
    }


    loadmodel(){
        // this.loadingManager.init();
        this.assetLoad.load(this.shopOut.href,(gltf)=>{

           
            this.loadedModel = gltf.scene
            this.modelAnimation = gltf.animations;

            
            this.addMOdel(this.loadedModel)       
            // this.scene.add(this.loadedModel)

            // this.loadAnimation();
            this.animationStart=true;
       

            
        })
    }
    setEvent()
    {

    }
}