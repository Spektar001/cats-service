import { CatImageData } from "@/types/types";

export const fetchCat = async (): Promise<CatImageData | null> => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": process.env.API_KEY!,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: CatImageData[] = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error("Failed to fetch cat image:", error);
    return null;
  }
};
