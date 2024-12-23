/**
 * @description Particle vertex shader
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;
uniform vec2      uResolution;

attribute float aDisplacementRandomFactor;
attribute float aDisplacementRandomAngle;

varying vec3 vColor;

void main() {
    vec3  newPosition        = position;
    float displacementFactor = texture(uDisplacementTexture, uv).r;
    displacementFactor       = smoothstep(0.1, 0.3, displacementFactor);
    float radius             = 0.2;
    vec3  displacementDir    = vec3(
        sin(aDisplacementRandomAngle) * radius,
        cos(aDisplacementRandomAngle) * radius,
        1.0
    );
    displacementDir  = normalize(displacementDir);
    newPosition     +=
        aDisplacementRandomFactor * displacementFactor * displacementDir;

    vec4 modelPosition      = modelMatrix      * vec4(newPosition, 1.0);
    vec4 viewPosition       = viewMatrix       * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    float sizeFactor = texture(uPictureTexture, uv).r;

    gl_Position   = projectionPosition;
    gl_PointSize  = 0.15 * sizeFactor;
    gl_PointSize *= uResolution.y;
    gl_PointSize *= -1.0 / viewPosition.z;

    vColor = vec3(pow(sizeFactor, 2.0));
}