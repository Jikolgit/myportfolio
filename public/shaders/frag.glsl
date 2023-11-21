uniform float u_time;
uniform vec2 u_resolution;
varying vec2 vUv;




  void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    float timee = abs(sin(u_time*1.0));
    gl_FragColor = vec4(vUv,1.0,1.0);
  }




    