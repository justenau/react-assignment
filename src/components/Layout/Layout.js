import React, {Fragment} from 'react';
import styles from './Layout.module.css';

const layout = (props) => {
    return (
    <Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Fragment>)
}

export default layout;