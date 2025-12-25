import axios from "axios";

const BASE_URL = "https://blynk.cloud/external/api";

export const getBlynkData = async () => {
  const BLYNK_TOKEN = process.env.BLYNK_AUTH_TOKEN;
  console.log("➡️ getBlynkData() CALLED. Token:", BLYNK_TOKEN ? "Found" : "Missing");

  try {
    const url = `${BASE_URL}/getAll?token=${BLYNK_TOKEN}`;
    console.log("🌐 Calling Blynk URL:", url);

    const response = await axios.get(url, { timeout: 5000 });

    console.log("✅ Blynk raw response:", response.data);

    return response.data;
  } catch (error) {
    console.error("❌ Blynk API Error:", error.message);
    return null;
  }
};
