import { CatImageData } from "@/types/types";
import Image from "next/image";
import styles from "./CatImage.module.css";

type Props = {
  data: CatImageData | null;
  loading: boolean;
};

const CatImage = ({ data, loading }: Props) => {
  if (!data) return null;
  return (
    <>
      {loading ? (
        <div className={styles.spinnerWrapper}>
          <Image
            className={styles.spinner}
            src="/spinner.svg"
            alt="spinner"
            width={24}
            height={24}
          />
        </div>
      ) : (
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={data.url} alt="Cat" fill />
        </div>
      )}
    </>
  );
};

export default CatImage;
