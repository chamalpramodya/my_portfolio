export default function Projects() {
  return (
    <section className="glass p-6 rounded-lg">
      <h2 className="text-2xl font-bold border-b border-accent mb-4">Projects</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-accent">PulseMate</h3>
          <p>A biomedical pulse monitoring device using ESP32 with real-time waveform display, BPM calculator, and custom PCB. Built with ESP-IDF and LVGL.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">Hybrid Inverter</h3>
          <p>MATLAB/Simulink-based hybrid solar inverter with MPPT, battery integration, and grid/off-grid switching. Achieved 0.3s MPPT response time.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">Pulse Detection Sensor</h3>
          <p>Hall-effect based waveform sensor with signal filtering and calibration techniques to reduce noise and improve clarity.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-accent">Security System</h3>
          <p>Fire detection with Arduino and Python, including temperature readout and buzzer alert. Real-time display and safe hardware integration.</p>
        </div>
      </div>
    </section>
  )
}

