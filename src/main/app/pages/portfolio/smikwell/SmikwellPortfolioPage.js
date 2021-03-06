import React from 'react';
import './smikwell-portfolio.scss';
import {PortfolioContainer} from '../components/portfolio-container/PortfolioContainer';
import {PortfolioTitle} from '../components/portfolio-title/PortfolioTitle';
import {PortfolioSubtitle} from '../components/portfolio-subtitle/PortfolioSubtitle';
import {Picture} from '../../../components/picture/Picture';
import {PortfolioText} from '../components/portfolio-text/PortfolioText';
import {AbstractPortfolioPage, PortfolioCode} from '../abstract-portfolio-page/AbstractPortfolioPage';

export class SmikwellPortfolioPage extends React.Component {

  render() {
    return (
      <AbstractPortfolioPage code={PortfolioCode.SMIKWELL}>
        <div className="smikwell-portfolio" ref={this.props.refProp}>
          <PortfolioContainer className="smikwell-portfolio__title-container">
            <PortfolioTitle additionalText="проект">Шкаф-кровати Smikwell</PortfolioTitle>
          </PortfolioContainer>
          <PortfolioContainer className="smikwell-portfolio__task-container">
            <div className="smikwell-portfolio__task-text-block">
              <PortfolioSubtitle>Задача</PortfolioSubtitle>
              <PortfolioText>
                <p className="furnas-portfolio__paragraph">Создать дизайн и разработать сайт для компании собирающей шкаф-кровать. </p>
                <p>Компания новая, мало фотографий для сайта.</p>
              </PortfolioText>
            </div>
            <div className="smikwell-portfolio__task-image-block">
              <Picture imgClassName="smikwell-portfolio__task-image-img"
                       forPhoneOnly={[require('./images/smikwell-macbook_mob.png')]}
                       forTabletPortraitUp={[require('./images/smikwell-macbook.png')]}/>
            </div>
          </PortfolioContainer>
          <PortfolioContainer>
            <div className="smikwell-portfolio__idea-image-block">
              <Picture className="smikwell-portfolio__idea-picture"
                       imgClassName="smikwell-portfolio__idea-image-img"
                       forPhoneOnly={[require('./images/smikwell-iphone-text_mob.png')]}
                       forTabletPortraitUp={[require('./images/smikwell-iphone-text_mob.png')]}/>
            </div>
            <div className="smikwell-portfolio__idea-block">
              <PortfolioSubtitle>Идея</PortfolioSubtitle>
              <PortfolioText>
                <p>Фотогорафий мало, поэтому большой сайт с примерами работ сделать не выйдет. Решаем сделать сайт в стиле рекламного буклета, где указываем все плюсы данных шкаф-кроватей. Учитываем
                  пожелания заказчика разместить все имеющиеся фотографии. </p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
          <div className="smikwell-portfolio__design-block">
            <PortfolioContainer>
              <div className="smikwell-portfolio__design-text-block">
                <PortfolioSubtitle>Дизайн</PortfolioSubtitle>
                <PortfolioText className="smikwell-portfolio__design-text">
                  <p>
                    Дизайн делаем незаметным. Белый фон и фоторгафии кроватей. Весь акцент делаем на кровати, чтобы ничего не отвлекало
                  </p>
                </PortfolioText>
              </div>
              <div className="smikwell-portfolio__design-image-block">
                <Picture imgClassName="smikwell-portfolio__design-image"
                         forPhoneOnly={[require('./images/smikwell-ipad_mob.png')]}
                         forTabletPortraitUp={[require('./images/smikwell-ipad.png')]}/>
              </div>
            </PortfolioContainer>
          </div>
          <PortfolioContainer>
            <div className="smikwell-portfolio__instagram-image-block">
              <Picture className="smikwell-portfolio__instagram-picture"
                       imgClassName="smikwell-portfolio__instagram-image-img"
                       forPhoneOnly={[require('./images/smikwell-iphone-instagram_mob.png')]}
                       forTabletPortraitUp={[require('./images/smikwell-iphone-instagram.png')]}/>
            </div>
            <div className="smikwell-portfolio__instagram-block">
              <PortfolioSubtitle>Реклама и разработка</PortfolioSubtitle>
              <PortfolioText>
                <p className="furnas-portfolio__paragraph">Рекламу запускали в инстаграме с одним баннером. Пользователи хорошо реагировали и задавали много вопросов.</p>
                <p>Сайт разрабатывали адаптивным для телефона и десктопа</p>
              </PortfolioText>
            </div>
          </PortfolioContainer>
        </div>
      </AbstractPortfolioPage>
    );
  }


}
