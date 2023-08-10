import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { mergeUniforms } from "three/src/renderers/shaders/UniformsUtils.js";
import { UniformsLib } from "three/src/renderers/shaders/UniformsLib.js";

class WaveMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      transparent: true,
      fog: true,
      lights: true,
      dithering: true,
      // wireframe: true,
      uniforms: mergeUniforms([
        {
          time: { value: 1 },
          offset: { value: 0 },
          color: {
            value: new THREE.Color({
              r: 0.95,
              g: 0.95,
              b: 0.95,
            }),
          },
        },
        UniformsLib.lights,
        UniformsLib.fog,
      ]),
      vertexShader: `
      
    #include <common>
    #include <fog_pars_vertex>
    #include <shadowmap_pars_vertex>
      
      uniform float time;
      uniform float offset;
      attribute float size;
      void main() {
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = normalMatrix * objectNormal;
        #include <begin_vertex>
        #include <project_vertex>
        #include <worldpos_vertex>
        #include <shadowmap_vertex>
        #include <fog_vertex>

        float x = sin(position.x);
        float y = position.y;
        float id = position.z;
        float z = position.z + sin(position.y + time + offset);
        vec3 pos = vec3(position.x, position.y, z);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0 );
        gl_PointSize = size;
      }`,
      fragmentShader: `
      
      #include <common>
      #include <packing>
      #include <fog_pars_fragment>
      #include <bsdfs>
      #include <lights_pars_begin>
      #include <shadowmap_pars_fragment>
      #include <shadowmask_pars_fragment>
      #include <dithering_pars_fragment>
      
      uniform float time;
      uniform vec3 color;
      void main() {
        // CHANGE THAT TO YOUR NEEDS
        // ------------------------------
        vec3 finalColor = color;
        vec3 shadowColor = vec3(0, 0, 0);
        float shadowPower = 0.5;
        // ------------------------------
        
        // it just mixes the shadow color with the frag color
        gl_FragColor = vec4( mix(finalColor, shadowColor, (1.0 - getShadowMask() ) * shadowPower), 1.0);
        #include <fog_fragment>
        #include <dithering_fragment>
      }`,
    });
  }
}

extend({ WaveMaterial });
function Color() {
  throw new Error("Function not implemented.");
}
