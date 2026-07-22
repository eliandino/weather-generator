window.createParticleSystem = function (
  maximumCount,
  color,
  size
) {
  const positions = new Float32Array(maximumCount * 3);
  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  const material = new THREE.PointsMaterial({
    color,
    size,
    transparent: true
  });

  return new THREE.Points(geometry, material);
};
