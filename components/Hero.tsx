
import React, { Suspense, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import ExtinguisherModel from './ExtinguisherModel';
import { ShieldCheck, Zap, RefreshCw, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  const [isSpraying, setIsSpraying] = useState(false);
  const [isExtinguished, setIsExtinguished] = useState(false);
  const [simulationStatus, setSimulationStatus] = useState<'IDLE' | 'ACTIVE' | 'SUPPRESSED'>('IDLE');

  const handleInteraction = useCallback(() => {
    if (isExtinguished || isSpraying) return;
    
    setSimulationStatus('ACTIVE');
    setIsSpraying(true);
    
    // Suppression sequence
    setTimeout(() => {
      setIsSpraying(false);
      setIsExtinguished(true);
      setSimulationStatus('SUPPRESSED');
    }, 2800);
  }, [isExtinguished, isSpraying]);

  const resetSimulation = () => {
    setIsExtinguished(false);
    setIsSpraying(false);
    setSimulationStatus('IDLE');
  };

  return (
    <div className="relative bg-[#0d1117] text-white overflow-hidden min-h-[95vh] flex items-center">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="h-full w-full" 
          style={{ 
            backgroundImage: `linear-gradient(#4f4f4f 1px, transparent 1px), linear-gradient(90deg, #4f4f4f 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-[#0d1117]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
          
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-red-600/10 border-l-4 border-red-600 text-red-500 mb-8 font-bold text-[10px] tracking-[0.3em] uppercase">
              <ShieldCheck className="w-4 h-4" />
              B2B Industrial Compliance
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
              CONTROL THE <br />
              <span className="text-red-600">ELEMENTS.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              Precision-engineered fire suppression for high-value industrial assets. Trusted by factories, hospitals, and critical infrastructure nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#quote"
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-sm font-display text-xl font-bold transition-all shadow-2xl shadow-red-600/20 flex items-center justify-center gap-3 group"
              >
                REQUEST QUOTE
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
              </a>
              <button
                onClick={resetSimulation}
                className="bg-transparent border border-white/20 hover:border-yellow-500 hover:text-yellow-500 text-white px-12 py-5 rounded-sm font-display text-xl font-bold transition-all flex items-center justify-center gap-3"
              >
                RE-RUN SIMULATION
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-10 border-t border-white/5 pt-12 max-w-md mx-auto lg:mx-0">
              <div className="group cursor-help">
                <div className="text-4xl font-display font-bold text-white group-hover:text-red-600 transition-colors">IS:15683</div>
                <div className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em] mt-2">BIS Certified</div>
              </div>
              <div className="group cursor-help">
                <div className="text-4xl font-display font-bold text-white group-hover:text-red-600 transition-colors">99.9%</div>
                <div className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em] mt-2">Active Uptime</div>
              </div>
              <div className="group cursor-help">
                <div className="text-4xl font-display font-bold text-white group-hover:text-red-600 transition-colors">24/7</div>
                <div className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em] mt-2">AMC Support</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[550px] lg:h-[750px] relative">
            {/* Technical HUD Overlay */}
            <div className="absolute top-0 right-0 z-20 p-6 space-y-4 pointer-events-none">
              <div className="bg-[#161b22]/90 backdrop-blur-xl rounded-sm border-l-2 border-white/10 p-5 shadow-2xl min-w-[200px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-black text-gray-500 tracking-[0.3em] uppercase">Telemetry</span>
                  <div className={`w-2 h-2 rounded-full ${simulationStatus === 'SUPPRESSED' ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-300">Hazard Level:</span>
                    <span className={`text-[10px] font-black ${simulationStatus === 'SUPPRESSED' ? 'text-green-500' : 'text-red-500'}`}>
                      {simulationStatus === 'SUPPRESSED' ? '0.0%' : '84.2%'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${simulationStatus === 'SUPPRESSED' ? 'w-0 bg-green-500' : 'w-[84%] bg-red-600'}`}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-300">Status:</span>
                    <span className="text-[10px] font-black text-white">{simulationStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className={`absolute inset-0 z-30 flex items-center justify-center pointer-events-none transition-all duration-700 ${isExtinguished ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-10'}`}>
              <div className="flex flex-col items-center">
                <div className="bg-green-600/20 backdrop-blur-md border border-green-500/30 px-12 py-5 rounded-sm shadow-[0_0_80px_rgba(22,163,74,0.4)]">
                  <h4 className="text-4xl font-display font-black text-green-400 tracking-[0.2em] uppercase">Hazard Suppressed</h4>
                </div>
                <p className="mt-4 text-[10px] font-black text-green-500/60 uppercase tracking-[0.5em]">Simulation Complete</p>
              </div>
            </div>
            
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
              <Suspense fallback={null}>
                <Stage environment="warehouse" intensity={0.4} contactShadow={false}>
                  <ExtinguisherModel 
                    isSpraying={isSpraying} 
                    isExtinguished={isExtinguished}
                    onClick={handleInteraction} 
                  />
                </Stage>
                <Environment preset="night" />
                <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={15} blur={1.5} far={4.5} />
              </Suspense>
              
              <OrbitControls 
                enableZoom={false} 
                minPolarAngle={Math.PI / 2.5} 
                maxPolarAngle={Math.PI / 1.7} 
                autoRotate={!isSpraying && !isExtinguished} 
                autoRotateSpeed={1.2} 
              />
            </Canvas>

            {!isExtinguished && !isSpraying && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center">
                 <div className="bg-red-600/20 p-2 rounded-full mb-4 animate-bounce">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                 </div>
                 <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.5em] text-center">
                   Click Cylinder to Engage Suppression
                 </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
