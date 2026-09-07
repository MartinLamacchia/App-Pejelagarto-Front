import { useTranslation } from "react-i18next";
import FlagArgentina from '../../assets/Argentina.png'
import FlagBrasil from '../../assets/Brasil.png'
import FlagUSA from '../../assets/United_States.png'
import styles from './SelectorLenguage.module.css'

const SelectorLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      <img src={FlagArgentina} onClick={() => changeLanguage("es")}/>
      <img src={FlagBrasil} onClick={() => changeLanguage("pt-BR")}/>
      <img src={FlagUSA} onClick={() => changeLanguage("en")}/>
    </div>
  );
};

export default SelectorLanguage;
