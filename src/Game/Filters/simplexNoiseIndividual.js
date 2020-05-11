//https://thebookofshaders.com/edit.php#11/2d-snoise-clear.frag
import * as PIXI from "pixi.js";

export const simpleNoiseIndividual = `
#ifdef GL_ES
precision mediump float;
#endif

void setupColors(out vec3 colors[16]) {
    colors[0] = vec3(0.030,0.003,0.045);
    colors[1] = vec3(0.676,0.685,0.421); 
    colors[2] = vec3(0.720,0.671,0.387); 
    colors[3] = vec3(0.525,0.503,0.306); 
    colors[4] = vec3(0.69, 0.58, 0.27); 
    colors[5] = vec3(0.42, 0.51, 0.20); 
    colors[6] = vec3(0.137,0.530,0.000);
    colors[7] = vec3(0.129,0.430,0.150); 
    colors[8] = vec3(0.016,0.305,0.043); 
    colors[9] = vec3(0.510,0.642,0.655); 
    colors[10] = vec3(0.397,0.535,0.504);
    colors[11] = vec3(0.658,0.775,0.820);
    colors[12] = vec3(0.058,0.514,0.770);
    colors[13] = vec3(0.019,0.049,0.905);
    colors[14] = vec3(0.006,0.061,0.645);
    colors[15] = vec3(0.012,0.125,0.490);
}
// Some useful functions
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

uniform vec2 position;
uniform vec2 res;

float isHundo(float x, float y) {
    
    if ((x - y) <= 10.) {
        return 1.0;
    } 
        return 0.0;
    }

float detail = 64.;

float resolution = res.x;

vec2 getPos(vec2 x) {
    return (gl_FragCoord.xy + position * 12.5 * resolution)/resolution;
}

//
// Description : GLSL 2D simplex noise function
//      Author : Ian McEwan, Ashima Arts
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License :
//  Copyright (C) 2011 Ashima Arts. All rights reserved.
//  Distributed under the MIT License. See LICENSE file.
//  https://github.com/ashima/webgl-noise
//
float snoise(vec2 v) {
    // Precompute values for skewed triangular grid
    const vec4 C = vec4(0.211324865405187,
        // (3.0-sqrt(3.0))/6.0
        0.366025403784439,
        // 0.5*(sqrt(3.0)-1.0)
        -0.577350269189626,
        // -1.0 + 2.0 * C.x
        0.024390243902439);
    // 1.0 / 41.0

    // First corner (x0)
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);

    // Other two corners (x1, x2)
    vec2 i1 = vec2(0.0);
    i1 = (x0.x > x0.y)? vec2(1.0, 0.0):vec2(0.0, 1.0);
    vec2 x1 = x0.xy + C.xx - i1;
    vec2 x2 = x0.xy + C.zz;

    // Do some permutations to avoid
    // truncation effects in permutation
    i = mod289(i);
    vec3 p = permute(
        permute( i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(
        dot(x0,x0),
        dot(x1,x1),
        dot(x2,x2)
    ), 0.0);

    m = m*m ;
    m = m*m ;

    // Gradients:
    //  41 pts uniformly over a line, mapped onto a diamond
    //  The ring size 17*17 = 289 is close to a multiple
    //      of 41 (41*7 = 287)

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    // Normalise gradients implicitly by scaling m
    // Approximation of: m *= inversesqrt(a0*a0 + h*h);
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0+h*h);

    // Compute final noise value at P
    vec3 g = vec3(0.0);
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * vec2(x1.x,x2.x) + h.yz * vec2(x1.y,x2.y);
    return 130.0 * dot(m, g);
}

void main() {
    vec2 pos = getPos(gl_FragCoord.xy);
    vec2 stt = floor(pos)/ detail;
    vec3 color = vec3(0.0);

    //color = vec3(floor((snoise(stt)*.5 + .5)+ .5));
    color = vec3((snoise(stt)*.5 + .5));
    //color.x += isHundo(pos.x, 0.);
    //color.y += isHundo(pos.y, 0.);
    float n = color.x;
    vec3 colors[16];
    setupColors(colors);

    color = colors[12]; // default white
    if (n < .95) color = colors[11]; // snow
    if (n < .825) color = colors[10]; // snowy rock
    if (n < .789) color = colors[9]; // mountain side
    if (n < .75) color = colors[8]; // moutain rocks
    if (n < .7) color = colors[7]; // forest
    if (n < .55) color = colors[6]; // grass
    if (n < .48) color = colors[5]; // marshy grass
    if (n < .47) color = colors[4]; // dry sand
    if (n < .45) color = colors[3]; // wet sand
    if (n < .43) color = colors[2]; // coral
    if (n < .4) color = colors[1]; // shallow water
    if (n < .38) color = colors[12]; // deep water
    if (n < .28) color = colors[13]; // deep water
    if (n < .18) color = colors[14]; // deep water
    if (n < .08) color = colors[15]; // deep water
    
    gl_FragColor = vec4(color,1.0);
}
`;

export const simplexFilterIndividual = (uniforms) => {
    return new PIXI.Filter(null, simpleNoiseIndividual, uniforms);
};