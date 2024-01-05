uniform sampler2D baseTexture;
uniform sampler2D welcomeTexture;
uniform sampler2D uiTexture;
uniform float time;
uniform float offset;
uniform vec3 color;
varying vec2 vUv;
uniform float stop;

void main() {
  // gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + (cos(time) - 0.5) + sin(offset)) + color, 1.0);
  float brightness = 0.1;
  float intensity = 0.1;
  // vec3 animation = sin(vUv.xyx + (cos(time * stop) - 0.5) + sin(offset));
  vec4 image = texture2D(baseTexture, vUv); 
  vec4 adjustedColor = vec4(image.rgb + brightness + intensity, image.a);
  gl_FragColor.rgba = adjustedColor;
  // gl_FragColor.rgba = vec4(0.0, 0.0, 1.0, 1.0);
  // gl_FragColor.rgba = vec4(vec3(0.), 1.);
}
