#define PI 3.1415926538

varying vec2 vUv;

void main() {
    float x = vUv.x * 10.0;
    float y = vUv.y * 10.0;

    float clipX     = mod(x + 0.2, 1.0);
    float strengthX = step(0.8, clipX);
    float clipY     = mod(y + 0.2, 1.0);
    float strengthY = step(0.8, clipY);

    float barX = step(0.4, mod(y, 1.0));
    float barY = step(0.4, mod(x, 1.0));

    float strength = (strengthX * barX) + (strengthY * barY);

    gl_FragColor = vec4(vec3(strength), 1.0);
}