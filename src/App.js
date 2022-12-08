import './App.css';
import React from 'react';

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'
import Scene from './Scene.js'

function App(props) {
  return (
    <div className="App uk-animation-fade">

      <div className="uk-child-width-expand@s uk-text-center" data-uk-height-viewport="expand: true" data-uk-grid>
        
        <div className='uk-width-auto@m uk-flex uk-flex-between uk-flex-column'>
          
          <div className="uk-card uk-card-body uk-grid-margin uk-visible@s">
            <div className='profile-photo uk-animation-slide-top'></div>
          </div>

          <div className="uk-card uk-card-body uk-grid-margin uk-visible@s">
            <div>

              <div className='profile-logo uk-margin uk-animation-slide-top gh-logo'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_26_844)">
                  <rect width="80" height="80" rx="40" fill="#454545"/>
                  <path d="M39 79C61.0967 79 79 61.0967 79 39C79 16.9033 61.0967 -1 39 -1C16.9033 -1 -1 16.9033 -1 39C-1 61.0967 16.9033 79 39 79ZM17.3033 38.1333L55.87 23.2633C57.66 22.6167 59.2233 23.7 58.6433 26.4067L58.6467 26.4033L52.08 57.34C51.5933 59.5333 50.29 60.0667 48.4667 59.0333L38.4667 51.6633L33.6433 56.31C33.11 56.8433 32.66 57.2933 31.6267 57.2933L32.3367 47.1167L50.87 30.3733C51.6767 29.6633 50.69 29.2633 49.6267 29.97L26.7233 44.39L16.85 41.31C14.7067 40.63 14.66 39.1667 17.3033 38.1333V38.1333Z" fill="#222222"/>
                  <rect x="1" y="1" width="78" height="78" rx="39" stroke="#454545" strokeWidth="2"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_26_844">
                  <rect width="80" height="80" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>

              <div className='profile-logo uk-animation-slide-top tg-logo'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_26_849)">
                  <rect width="80" height="80" rx="40" fill="white" fillOpacity="0.16"/>
                  <path d="M39.9953 2C19.0145 2 2.00002 18.9851 2.00002 39.9377C1.99145 47.8897 4.49621 55.6432 9.16032 62.1026C13.8244 68.5619 20.412 73.4004 27.992 75.9342C29.892 76.2837 30.5855 75.1123 30.5855 74.1063C30.5855 73.2041 30.5523 70.8188 30.5333 67.6542C19.9645 69.945 17.732 62.5672 17.732 62.5672C16.0078 58.1839 13.514 57.0173 13.514 57.0173C10.0608 54.6651 13.7705 54.7123 13.7705 54.7123C17.5848 54.9815 19.5893 58.6232 19.5893 58.6232C22.9808 64.4187 28.486 62.7467 30.652 61.7737C30.994 59.3223 31.9773 57.6502 33.065 56.7008C24.629 55.742 15.756 52.4876 15.756 37.9539C15.756 33.8116 17.238 30.425 19.67 27.7705C19.2758 26.8116 17.9743 22.9527 20.0405 17.7334C20.0405 17.7334 23.2325 16.7132 30.4905 21.6207C33.5911 20.7781 36.7905 20.3493 40.0048 20.3454C43.2191 20.3517 46.4185 20.7822 49.519 21.6254C56.7722 16.7179 59.9595 17.7381 59.9595 17.7381C62.0305 22.9621 60.729 26.8163 60.3395 27.7752C62.7762 30.4297 64.244 33.8163 64.244 37.9587C64.244 52.5301 55.3615 55.7373 46.897 56.6772C48.2602 57.8486 49.4762 60.163 49.4762 63.7008C49.4762 68.7736 49.4287 72.864 49.4287 74.1063C49.4287 75.1218 50.1127 76.3026 52.0412 75.9295C59.6139 73.3897 66.1933 68.5493 70.8509 62.0916C75.5085 55.6338 78.0092 47.8846 78 39.9377C78 18.9851 60.9855 2 39.9953 2Z" fill="#222222"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_26_849">
                  <rect width="80" height="80" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>

            </div>
          </div>

        </div>

        <div className='uk-width-expand@m uk-padding uk-padding-remove-top profile-flex profile-flex-col profile-flex-between uk-padding-remove-bottom'>
          <div className="uk-card uk-card-body uk-grid-margin uk-text-left">
            <h1 className='profile-font-header uk-animation-slide-top'>Привет! Меня зовут Евгений. Я занимаюсь фронтенд разработкой</h1> 
          </div>
          <div className="uk-card uk-text-left uk-visible@s" id="phaser-example">
          {/* <div className="uk-card uk-text-left uk-hidden@s" id="phaser-example"> */}
            <Scene />
          </div>
        </div>

        <div className='uk-width-1-3@m uk-margin uk-margin-medium-right profile-scroll'>
            <div className="uk-card uk-text-left uk-animation-slide-top">
              <div className='uk-card uk-padding-small profile-border-rounded profile-card profile-font'>
                <p className='uk-text-center profile-font-white'>Прошёл курсы</p>
              
                <hr />
                
                <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                  <div className='uk-width-1-3@m'>
                    <div className="uk-card uk-text-left">FreeCodeCamp</div>
                  </div>

                  <div className='uk-text-left'>
                    <div className="uk-card">
                      <a href="#test">Responsive Web Design</a>
                    </div>
                    <div className="uk-card">
                      <a href="#test">JavaScript Algorithms and Data Structures</a>
                    </div>
                  </div>
                </div>

                <hr />
                
                <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                  <div className='uk-width-1-3@m'>
                    <div className="uk-card uk-text-left">HTML Academy</div>
                  </div>

                  <div className='uk-text-left'>
                    <div className="uk-card">
                      <a href="#test">«Старт во фронтенде»</a>
                    </div>

                    <div className="uk-card">
                      <a href="#test">«Погружение в вёрстку»</a>
                    </div>

                    <div className="uk-card">
                      <a href="#test">«Погружение в JavaScript»</a>
                    </div>

                    <div className="uk-card">
                      <a href="#test">«Продвинутые техники и инструменты вёрстки»</a>
                    </div>

                    <div className="uk-card">
                      <a href="#test">«Знакомство с бэкендом»</a>
                    </div>

                    <div className="uk-card">
                      <a href="#test">«Ретровёрстка»</a>
                    </div>
                  </div>
                </div>

                <hr />
                
                <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                  <div className='uk-width-1-3@m'>
                    <div className="uk-card uk-text-left">Skillbox</div>
                  </div>
                  <div className='uk-text-left'>
                    <div className="uk-card">
                      <a href="#test">Веб-верстка «Базовый уровень», «Продвинутый уровень»</a>
                    </div>
                    <div className="uk-card">
                      <a href="#test">JavaScript «Базовый уровень», «Продвинутый уровень»</a>
                    </div>
                    <div className="uk-card">
                      <a href="#test">Node.js</a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

        </div>

      </div>
      
    </div>
  );
}
export default App;