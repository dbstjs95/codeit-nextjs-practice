import DropDown from "@/components/DropDown";
import { useTheme } from "@/lib/ThemeContext";
import styles from "@/styles/Setting.module.css";

export default function setting() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1 className={styles.title}>설정</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>테마 설정</h2>
        <DropDown />
      </section>
    </div>
  );
}
