// Rounded corner image shader with distortion effects

export const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uTime;
  uniform float uBlur;
  uniform vec2 uResolution;
  uniform float uRadius;
  uniform float uVelocity;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  
  // Rounded rectangle SDF
  float roundedBoxSDF(vec2 center, vec2 size, float radius) {
    return length(max(abs(center) - size + radius, 0.0)) - radius;
  }
  
  // Smooth step for anti-aliasing
  float smoothedge(float edge, float x) {
    return smoothstep(0.0, edge, x);
  }
  
  // Ripple distortion
  vec2 rippleDistortion(vec2 uv, vec2 center, float time) {
    vec2 diff = uv - center;
    float dist = length(diff);
    float ripple = sin(dist * 30.0 - time * 5.0) * 0.015;
    ripple *= smoothstep(0.5, 0.0, dist);
    return uv + normalize(diff) * ripple * uHover;
  }
  
  // Chromatic aberration
  vec3 chromaticAberration(sampler2D tex, vec2 uv, float amount) {
    vec2 direction = uv - 0.5;
    float r = texture2D(tex, uv - direction * amount * 0.01).r;
    float g = texture2D(tex, uv).g;
    float b = texture2D(tex, uv + direction * amount * 0.01).b;
    return vec3(r, g, b);
  }
  
  // Blur function
  vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, float strength) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.3846153846) * strength;
    vec2 off2 = vec2(3.2307692308) * strength;
    color += texture2D(image, uv) * 0.2270270270;
    color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
    color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
    color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
    color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
    return color;
  }
  
  void main() {
    // Rounded corner mask
    vec2 center = vUv - 0.5;
    float radius = uRadius;
    float dist = roundedBoxSDF(center, vec2(0.5), radius);
    float alpha = 1.0 - smoothedge(0.01, dist);
    
    if (alpha < 0.01) discard;
    
    // Apply ripple distortion
    vec2 distortedUV = rippleDistortion(vUv, uMouse, uTime);
    
    // Velocity-based distortion
    vec2 velocityOffset = vec2(sin(vUv.y * 10.0 + uTime) * uVelocity * 0.02, 0.0);
    distortedUV += velocityOffset * uHover;
    
    // Clamp UV to prevent edge artifacts
    distortedUV = clamp(distortedUV, 0.0, 1.0);
    
    // Sample texture with optional blur
    vec4 color;
    if (uBlur > 0.1) {
      color = blur9(uTexture, distortedUV, uResolution, uBlur * 5.0);
    } else {
      color = texture2D(uTexture, distortedUV);
    }
    
    // Chromatic aberration on hover
    if (uHover > 0.01) {
      vec3 ca = chromaticAberration(uTexture, distortedUV, uHover * uVelocity);
      color.rgb = mix(color.rgb, ca, uHover * 0.5);
    }
    
    // Apply alpha from rounded corner
    color.a *= alpha;
    
    // Slight brightness boost on hover
    color.rgb += uHover * 0.05;
    
    gl_FragColor = color;
  }
`;
