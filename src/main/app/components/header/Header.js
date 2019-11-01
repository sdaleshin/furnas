import React from 'react';
import './header.scss';
import classNames from 'classnames';
import {bool, func, string} from 'prop-types';
import {Button} from '../button/Button';
import {MediumText} from '../medium-text/MediumText';
import {UniversalLink} from '../universal-link/UniversalLink';

export class Header extends React.Component {

  static propTypes = {
    className: string,
    onContactClick: func,
    contactPopupShown: bool
  };

  static defaultProps = {
    onContactClick() {
    }
  };

  state = {
    scrollY: 0
  };

  handleScroll = event => {
    this.setState({scrollY: window.scrollY});
  };

  componentDidMount() {
    this.setState({scrollY: window.scrollY});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {scrollY} = this.state;
    const {className, onContactClick, contactPopupShown} = this.props;
    return (
      <div className={classNames('header', {'header_header-without-shadow': scrollY === 0 || contactPopupShown, 'header_contact-popup-shown': contactPopupShown}, className)}>
        <div className="header__container">
          <UniversalLink noStyle={true} href="/">
            <div className="header__title-with-logo">
              <div className="header__logo-image">
              </div>
              <MediumText className="header__title">
                Furnas
              </MediumText>
            </div>
          </UniversalLink>
          <div>
            {contactPopupShown &&
            <div className="header__close-contact-popup-button"
                 onClick={onContactClick}>
            </div>}
            {!contactPopupShown &&
            <Button onClick={onContactClick}>
              Связаться
            </Button>}
          </div>
        </div>
      </div>
    );
  }

}
