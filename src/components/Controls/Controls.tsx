import styles from "./Controls.module.css";

type Props = {
  loading: boolean;
  enabled: boolean;
  autoRefresh: boolean;
  onToggleEnabled: () => void;
  onToggleAutoRefresh: () => void;
  onGetCat: () => void;
};

const Controls = ({
  loading,
  enabled,
  autoRefresh,
  onToggleEnabled,
  onToggleAutoRefresh,
  onGetCat,
}: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGetCat();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={enabled}
          onChange={onToggleEnabled}
        />
        <span className={styles.customCheckbox}></span>
        Enabled
      </label>
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={autoRefresh}
          onChange={onToggleAutoRefresh}
          disabled={!enabled}
        />
        <span className={styles.customCheckbox}></span>
        <span>Auto-refresh every 5 second</span>
      </label>
      <button
        className={styles.button}
        type="submit"
        disabled={!enabled || autoRefresh || loading}
      >
        Get cat
      </button>
    </form>
  );
};

export default Controls;
