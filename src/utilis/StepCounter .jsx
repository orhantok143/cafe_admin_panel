import React, { useState, useEffect } from 'react';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [isStepDetected, setIsStepDetected] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [lastZ, setLastZ] = useState(0);
  const [threshold] = useState(15); // İvme eşik değeri (adım algılama hassasiyeti)
  
  // Cihazın ivmesini izleme
  useEffect(() => {
    if (window.DeviceMotionEvent) {
      const handleMotion = (event) => {
        const x = event.acceleration.x;
        const y = event.acceleration.y;
        const z = event.acceleration.z;
        
        // İvme değişimlerini hesaplama
        const diffX = Math.abs(x - lastX);
        const diffY = Math.abs(y - lastY);
        const diffZ = Math.abs(z - lastZ);
        
        // Eşik değerini aşan bir ivme değişimi olursa, adım algılanır
        if (diffX + diffY + diffZ > threshold && !isStepDetected) {
          setSteps((prevSteps) => prevSteps + 1);
          setIsStepDetected(true);
        }

        // Eğer ivme değişimi eşik değerini aşmazsa, adım bitmiş kabul edilir
        if (diffX + diffY + diffZ < threshold) {
          setIsStepDetected(false);
        }

        // Son ivme değerlerini güncelle
        setLastX(x);
        setLastY(y);
        setLastZ(z);
      };

      // DeviceMotion event listener'ını başlat
      window.addEventListener('devicemotion', handleMotion);

      // Cleanup: Component unmount olduğunda event listener'ı temizle
      return () => {
        window.removeEventListener('devicemotion', handleMotion);
      };
    } else {
      alert('Cihazınızın hareket sensörleri desteklenmiyor!');
    }
  }, [lastX, lastY, lastZ, isStepDetected, threshold]);

  return (
    <div style={styles.container}>
      <h1>Web Adım Ölçer</h1>
      <p>Adım Sayısı: {steps}</p>
      <p>Telefonunuzu hareket ettirin!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default StepCounter;
