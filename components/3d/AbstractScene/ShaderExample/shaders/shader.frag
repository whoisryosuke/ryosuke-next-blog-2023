uniform float time;
uniform float offset;
uniform vec3 color;
varying vec2 vUv;
uniform float stop;

void main() {
  // gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + (cos(time) - 0.5) + sin(offset)) + color, 1.0);
  float brightness = 0.3;
  float intensity = 0.1;
  vec3 animation = sin(vUv.xyx + (cos(time * stop) - 0.5) + sin(offset));
  gl_FragColor.rgba = vec4(brightness + intensity * animation + color, 1.0);
  // gl_FragColor.rgba = vec4(vec3(0.), 1.);
}
