uniform float uTime;
uniform float uAmplitude;
uniform float uThickness;
uniform vec2 uFrequency;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
  vNormal = normal;
  vec3 newPosition = position + normal * uThickness;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  vUv = uv;
}