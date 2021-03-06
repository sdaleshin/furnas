import React from 'react';
import './tea-portfolio.scss';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {Picture} from '../../../components/picture/Picture';
import {PortfolioColors, PortfolioType} from '../components/portfolio-colors/PortfolioColors';
import {AbstractPortfolioPage, PortfolioCode} from '../abstract-portfolio-page/AbstractPortfolioPage';

export class TeaPortfolioPage extends React.Component {

  render() {
    return (
      <AbstractPortfolioPage code={PortfolioCode.TEA_SHOP}>
        <div className="tea-portfolio" ref={this.props.refProp}>
          <div className="tea-portfolio__main-screen">
            <PortfolioContainer className="tea-portfolio__title-container">
              <PortfolioTitle additionalText="проект" className="tea-portfolio__title">Tea Shop</PortfolioTitle>
            </PortfolioContainer>
            <PortfolioContainer className="tea-portfolio__idea-container">
              <div className="tea-portfolio__idea-image-block">
                <Picture imgClassName="tea-portfolio__idea-image-img"
                         forPhoneOnly={[require('./images/teashop-main_mob_2x.png')]}
                         forTabletPortraitUp={[require('./images/teashop-main_2x.png')]}/>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer>
            <div className="tea-portfolio__task-image-block">
              <Picture className="tea-portfolio__task-picture"
                       imgClassName="tea-portfolio__task-image-img"
                       forPhoneOnly={[require('./images/teashop-iphone-1_mob_2x.png')]}
                       forTabletPortraitUp={[require('./images/teashop-iphone-1_2x.png')]}/>
            </div>
            <div className="tea-portfolio__task-block">
              <PortfolioSubtitle>Задача проекта</PortfolioSubtitle>
              <PortfolioText className="tea-portfolio__task-text">
                <p className="tea-portfolio__paragraph">
                  Разработать дизайн онлайн-магазина с блоком для новых поступлений.</p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
          <PortfolioContainer className="tea-portfolio__mood-block-container">
            <div className="code-fighter__mood-block">
              <PortfolioSubtitle>Дизайн сайта</PortfolioSubtitle>
              <PortfolioText>
                <p>Два основных цвета — белый и бирюховый. Так как дизайн должен быть строгим, добавляем мягкий красный цвет как акцентный.
                  Серый — дополнительный, нейтральный цвет.</p>
              </PortfolioText>
            </div>
            <div className="tea-portfolio__colors-block">
              <PortfolioColors portfolioType={PortfolioType.TEA}/>
            </div>
          </PortfolioContainer>
          <div className="tea-portfolio__structure-container">
            <PortfolioContainer>
              <div className="tea-portfolio__structure-image-block">
                <Picture className="tea-portfolio__structure-picture"
                         imgClassName="tea-portfolio__structure-image-img"
                         forPhoneOnly={[require('./images/teashop-screen-1_mob_2x.png')]}
                         forTabletPortraitUp={[require('./images/teashop-screen-1_2x.png')]}/>
              </div>
              <div className="tea-portfolio__structure-block">
                <PortfolioSubtitle>Тексты</PortfolioSubtitle>
                <PortfolioText className="tea-portfolio__structure-text">
                  <p className="tea-portfolio__paragraph">
                    Для чайного онлайн-магазина очень важны тексты, чтобы максимально «вкусно» описать вкус чая. Уделяем этому достаточно времени.</p>
                </PortfolioText>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer>
            <div className="tea-portfolio__prepare-block">
              <PortfolioSubtitle>Фотографии</PortfolioSubtitle>
              <PortfolioText className="tea-portfolio__prepare-text">
                <p className="tea-portfolio__paragraph">
                  Магазин не смог предоставить красивые фотографии чая, поэтому на фотостоках покупаем красивую серию фотографий.</p>
              </PortfolioText>
            </div>
            <div className="tea-portfolio__prepare-image-block">
              <Picture className="tea-portfolio__prepare-picture"
                       imgClassName="tea-portfolio__prepare-image-img"
                forPhoneOnly={[require('./images/teashop-ipad_mob_2x.png')]}
                forTabletPortraitUp={[require('./images/teashop-ipad_2x.png')]} />
            </div>
          </PortfolioContainer>
          <PortfolioContainer className="tea-portfolio__result-container">
            <Picture className="tea-portfolio__big-tablet-picture"
              imgClassName="tea-portfolio__big-tablet-img"
              forPhoneOnly={[require('./images/teashop-laptop_mob_2x.png')]}
              forTabletPortraitUp={[require('./images/teashop-laptop_2x.png')]} />
          </PortfolioContainer>
        </div>
      </AbstractPortfolioPage>
    );
  }
}