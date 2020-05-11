import * as PIXI from "pixi.js";
import {simpleNoise} from "./simplexNoise";

export const transparent = `
            precision highp float;
            
            varying vec2 vTextureCoord;
            uniform float amount;
            
            float rand(vec2 co) {
                return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
            }
            
            void main() {
              vec4 color = vec4(1, 1, 1, 1);
                gl_FragColor = color;
            }
            `;

const transparentFilter = (uniforms) => {
    return new PIXI.Filter(null, transparent, uniforms);
};

export default transparentFilter;
