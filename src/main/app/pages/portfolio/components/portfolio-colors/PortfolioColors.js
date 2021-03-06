import React from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';
import './portfolio-colors.scss';

export const PortfolioType = {
  WORK: 'WORK',
  OLD_FURNAS: 'OLD_FURNAS',
  FURNAS: 'FURNAS',
  FINANSIST: 'FINANSIST',
  CODE_FIGHTER: 'CODE_FIGHTER',
  LIVENHOUSE:'LIVENHOUSE',
  SARAGH:'SARAGH',
  TEA: 'TEA',
};

export const PortfolioClassNameByType = {
  [PortfolioType.WORK]: 'portfolio-colors__work',
  [PortfolioType.OLD_FURNAS]: 'portfolio-colors__old-furnas',
  [PortfolioType.FURNAS]: 'portfolio-colors__furnas',
  [PortfolioType.FINANSIST]: 'portfolio-colors__finansist',
  [PortfolioType.CODE_FIGHTER]: 'portfolio-colors__code-fighter',
  [PortfolioType.LIVENHOUSE]: 'portfolio-colors__livenhouse',
  [PortfolioType.SARAGH]: 'portfolio-colors__saragh',
  [PortfolioType.TEA]: 'portfolio-colors__tea'
};

export class PortfolioColors extends React.Component {

  static propTypes = {
    className: string,
    portfolioType: string
  };


  render() {
    const {className, portfolioType} = this.props;
    return (
      <div className={classNames('portfolio-colors', PortfolioClassNameByType[portfolioType], className)}>
        <p className="portfolio-colors__label">Цветовая гамма</p>
        <div className="portfolio-colors__row">
          <div className="portfolio-colors__square portfolio-colors__1"></div>
          <div className="portfolio-colors__square portfolio-colors__2"></div>
        </div>
        <div className="portfolio-colors__row">
          <div className="portfolio-colors__square portfolio-colors__3"></div>
          <div className="portfolio-colors__square portfolio-colors__4"></div>
        </div>
      </div>
    );
  }

}
