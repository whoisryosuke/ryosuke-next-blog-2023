varying vec2 vUv;
uniform float time;
uniform float offset;
uniform float stop;
void main() {
  vUv = uv;
  vec4 animation = vec4(0, sin((time * stop) - offset), 0, 0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0) + animation;
}

