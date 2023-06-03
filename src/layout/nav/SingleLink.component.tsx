import { Link } from "react-router-dom";
import styles from '../Layout.module.scss';
interface Props {
    path: string,
    text: string,
}
const SingleLinkComponent = ({path, text}: Props) => <Link data-testid='link' to={path} className={styles.link}>{text}</Link>

export default SingleLinkComponent;