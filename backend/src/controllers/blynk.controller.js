import { getBlynkData } from "../utils/blynkService.js";

export const fetchSensorData = async (req, res) => {
  console.log("🚀 /api/blynk/sensors HIT");

  const data = await getBlynkData();

  console.log("📦 Data returned to controller:", data);

  if (!data) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Blynk data"
    });
  }

  const mappedData = {
    success: true,
    data: {
      // Vitals & Environment
      temperature: data.v2 || 0,
      humidity: data.v4 || 0,
      weight: data.v3 || 0,
      // Alerts & Status
      isCrying: data.v10 || 0,
      isWet: data.v5 || 0,
      swingStatus: data.v6 || 0,
      tiltStatus: data.v7 || 0,
      deviceMode: data.v8 || 0,
      babyMood: data.v9 || "Detecting...",
      heartRate: data.v1 || 0,
      // Disease Detection
      jaundice: data.v11 || "Normal",
      hypothermia: data.v12 || "Normal",
      fever: data.v13 || "Normal",
      // Mechanics
      swingAngle: data.v14 || 0,
      musicStatus: data.v15 || 0
    }
  };

  console.log("📤 Sending to Frontend:", mappedData.data);
  res.json(mappedData);
};
