"use client";

import { CatImageData } from "@/types/types";
import { fetchCat } from "@/utils/api";
import { useEffect, useState } from "react";
import CatImage from "../CatImage/CatImage";
import Controls from "../Controls/Controls";
import styles from "./CatApp.module.css";

const CatApp = () => {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [catData, setCatData] = useState<CatImageData | null>(null);

  const loadCatImage = async () => {
    try {
      setLoading(true);
      const data = await fetchCat();
      setCatData(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch cat image:", error);
    }
  };

  useEffect(() => {
    if (autoRefresh && enabled) {
      const intervalId = setInterval(loadCatImage, 5000);
      return () => clearInterval(intervalId);
    }
  }, [autoRefresh, enabled]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Random Cat Generator 🐱</h1>
      <Controls
        loading={loading}
        enabled={enabled}
        autoRefresh={autoRefresh}
        onToggleEnabled={() => setEnabled(!enabled)}
        onToggleAutoRefresh={() => setAutoRefresh(!autoRefresh)}
        onGetCat={loadCatImage}
      />
      <CatImage loading={loading} data={catData} />
    </div>
  );
};

export default CatApp;
