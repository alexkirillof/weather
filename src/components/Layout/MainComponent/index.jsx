import React, { useContext, useState } from 'react';
import { CustomContext } from '../../../hooks/Context';
import Loader from '../../Loader';
import ProgressBar from '../../ProgressBar';
import WindAngle from '../../WindAngle';
import Tabs from '../Tabs';
import TabsBar from '../TabsBar';
import './style.css';

export default function MainComponent() {
  const [toggleState, setToggleState] = useState('on week');
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { isLoading, actualCity } = useContext(CustomContext);
  return (
    <main className='main-block'>
      {/* !-- СЕКЦИЯ "ПРОГНОЗ НА НЕДЕЛЮ И ДЕНЬ " -- */}

      <section className='forecast'>
        <TabsBar toggleState={toggleState} toggleTab={toggleTab} />

        {/* !-- ТАБЫ -- */}
        <Tabs toggleState={toggleState} />
      </section>

      {/* -- СЕКЦИЯ "ПОДРОБНО НА СЕГОДНЯ " -- */}

      <section className='details main-block-wrapper'>
        <h2 className='main-title'>Подробно на сегодня</h2>

        <div className='details-cards'>
          <div className='details-cards__card-detail card-datail wind-speed'>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <h4 className='card-datail__header first-header'>Скорость ветра</h4>
                <div className='card-detail__main-content'>
                  <span>{actualCity?.wind?.speed.toFixed(0)}</span>
                  <span>м/с</span>
                </div>
                <div className='card-detail__footer'>
                  <WindAngle />
                </div>
              </>
            )}
          </div>

          <div className='details-cards__card-detail card-datail humidity'>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <h4 className='card-datail__header first-header'>Влажность</h4>
                <div className='card-detail__main-content'>
                  <span>{actualCity?.main?.humidity}</span>
                  <span>%</span>
                </div>
                <ProgressBar completed={actualCity?.main?.humidity} />
              </>
            )}
          </div>

          <div className='details-cards__card-detail card-datail visibility'>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <h4 className='card-datail__header'>Видимость</h4>
                <div className='card-detail__main-content'>
                  <span>{actualCity?.visibility / 1000}</span>
                  <span>км</span>
                </div>
              </>
            )}
          </div>

          <div className='details-cards__card-detail card-datail pressure'>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <h4 className='card-datail__header'>Давление</h4>
                <div className='card-detail__main-content'>
                  <span>{(actualCity?.main?.pressure * 0.750064).toFixed()}</span>
                  <span className='secondary-content'>мм рт. ст.</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
