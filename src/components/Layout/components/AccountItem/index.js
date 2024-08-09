import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/85c738859e36962d89579bd5d039da50.jpeg?lk3s=a5d48078&nonce=18419&refresh_token=61b98f414eabcc88c33bb1d634c51191&x-expires=1722708000&x-signature=V15flFf%2BhkgnyUAgUhKcXtdHjE4%3D&shp=a5d48078&shcp=81f88b70"
                alt="AN"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hứa an</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>huana</span>
            </div>
        </div>
    );
}

export default AccountItem;
