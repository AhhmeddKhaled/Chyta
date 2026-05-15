import style from "./sectionTitle.module.css";

export default function SectionTitle({ children }) {
    return <h2 className={style.sectionTitle}>{children}</h2>;
}