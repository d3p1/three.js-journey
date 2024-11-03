#define PI 3.1415926538

varying vec2 vUv;

void main() {
    float clipX     = mod(vUv.x * 10.0, 1.0);
    float strengthX = step(0.8, clipX);
    float clipY     = mod(vUv.y * 10.0, 1.0);
    float strengthY = step(0.8, clipY);

    float barX = step(0.4, clipY);
    float barY = step(0.4, clipX);

    float strength = (strengthX * barX) + (strengthY * barY);

    gl_FragColor = vec4(vec3(strength), 1.0);
}