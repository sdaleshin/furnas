import React from 'react';
import './footer.scss';
import classNames from 'classnames';
import {string, bool} from 'prop-types';
import {Link} from '../link/Link';

export class Footer extends React.Component {

  static propTypes = {
    className: string,
    portfolioMode: bool
  };

  render() {
    const {className, portfolioMode} = this.props;
    return (
      <div className={classNames('footer', portfolioMode ? 'footer_portfolio-mode' : '', className)}>
        <div className="footer__container">
          <div className="footer__contacts-block">
            <div className="footer__title">
              Контакты
            </div>
            <div>
              <Link className="footer__link">
                +7(915) 682-19-55
              </Link>
            </div>
            <div>
              <Link className="footer__link">
                furnasteam@gmail.com
              </Link>
            </div>
          </div>
          <div className="footer__links-block">
            <div className="footer__title">
              Ссылки
            </div>
            <div>
              <Link href="https://visa.furnas.ru/"
                    className="footer__link">
                visa.furnas.ru
              </Link>
            </div>
            <Link href="/policy"
                  className="footer__link">
              Политика конфиденциальности
            </Link>
          </div>
          <div className="footer__social-block">
            {/*<div className="footer__title">*/}
            {/*Social*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    );
  }

}
