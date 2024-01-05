uniform sampler2D baseTexture;
uniform sampler2D introTexture;
uniform sampler2D uiTexture;
uniform sampler2D welcomeToroTexture;
uniform sampler2D welcomeTextTexture;
uniform sampler2D heartTexture;
uniform int screenIndex;
uniform float time;
uniform float offset;
uniform vec3 color;
varying vec2 vUv;
uniform float stop;

void main() {
  float brightness = 0.1;
  float intensity = 0.1;
  
  vec4 baseImage = texture2D(baseTexture, vUv); 

  vec4 currentScreen = vec4(0);
  vec4 currentScreenAnimated = vec4(0);
  float duration = 0.0;

  // Render the welcome screen
  if(screenIndex == 0) {
    duration = 3.0;
    float yAnimation = mix(0.5, 0.0, sin(time / duration));
    vec2 animation = vec2(0, yAnimation);
    currentScreen = texture2D(introTexture, vUv - animation); 
    currentScreenAnimated = vec4(currentScreen.rgb, sin(time / duration));
    // vec4 combinedColor = adjustedColor * welcomeImage;
  }
  if(screenIndex == 1) {
    // We want time to start from 0 for animation, 
    // so we offset by prev duration * 2 (since it loops)
    float animationTime = time - (3.0 * 2.0);
    duration = 3.0;
    vec4 toro = texture2D(welcomeToroTexture, vUv);
    vec4 text = vec4(1.0); 
    if(animationTime > duration) {
      text = texture2D(welcomeTextTexture, vUv); 
      text = vec4(text.rgb, min(animationTime, duration) / duration);
    } 
    currentScreen = toro * text; 
    currentScreenAnimated = vec4(currentScreen.rgb, min(animationTime, duration) / duration);
    // vec4 combinedColor = adjustedColor * welcomeImage;
  }

  // Combine all the screens
  // We `pow()` the alpha to help white aliasing on some screens
  vec4 adjustedColor = vec4(baseImage.rgb + brightness + intensity, baseImage.a);
  vec4 combinedColor = mix(adjustedColor, currentScreenAnimated, pow(currentScreen.a, 1.4));
  gl_FragColor.rgba = combinedColor;
  // gl_FragColor.rgba = vec4(0.0, 0.0, 1.0, 1.0);
  // gl_FragColor.rgba = vec4(vec3(0.), 1.);
}
