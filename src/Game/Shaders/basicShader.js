export const noiseFrag = `
            precision highp float;
            
            varying vec2 vTextureCoord;
            uniform float amount;
            
            float rand(vec2 co) {
                return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
            }
            
            void main() {
              vec4 color = vec4(1.0, 1.0, 1.0, 1);
                float diff = (rand(vTextureCoord) - 0.5) * amount;
                color.r += diff;
                color.g += diff;
                color.b += diff;
                gl_FragColor = color;
            }
            `;