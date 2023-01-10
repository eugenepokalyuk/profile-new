import './App.css';
import React from 'react';

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'

import Scene from './Scene.js'

import tgIcon from './Images/git.png'
import gitIcon from './Images/git-2.png'

function App(props) {

  const styles = {
    "fillRule":"evenodd", 
    "clipRule":"evenodd", 
    "strokeLinejoin":"round",
    "strokeMiterlimit":"1.41421"
  }
  return (
    <div className="App uk-animation-fade">

      <div className="uk-child-width-expand@s uk-text-center uk-visible@l" data-uk-height-viewport="expand: true" data-uk-grid>
        
        <div className='uk-width-auto@m uk-flex uk-flex-between uk-flex-column'>
          
          <div className="uk-card uk-card-body uk-grid-margin uk-visible@s">
            <div className='profile-photo uk-animation-slide-top'></div>
          </div>

          <div className="uk-card uk-card-body uk-grid-margin uk-visible@s">
            <div>

              <div className='profile-logo uk-margin uk-animation-slide-top gh-logo'>
                <a href="https://t.me/papercranejs">
                  <svg width="80px" height="80px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" space="preserve" serif="http://www.serif.com/" style={styles} className='colorizeSVG'>
                    <path id="telegram-4" d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"/>
                  </svg>
                </a>
              </div>

              <div className='profile-logo uk-animation-slide-top tg-logo'>
                <a href="https://github.com/eugenepokalyuk">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className='colorizeSVG'>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>

        <div className='uk-width-expand@m uk-padding uk-padding-remove-top profile-flex profile-flex-col profile-flex-between uk-padding-remove-bottom'>
          
          <div className="uk-card uk-card-body uk-grid-margin uk-text-left">
            <h1 className='profile-font-header uk-animation-slide-top'>Привет! Меня зовут Евгений. Я занимаюсь фронтенд разработкой</h1> 
            
            <div className='badge-menu'>
              <span className="CSS3">CSS3</span>
              <span className="RestAPI">RestAPI</span>
              <span className="Tabulator">Tabulator</span>
              <span className="HTML5">HTML5</span>
              <span className="Nunjucks">Nunjucks</span>
              <span className="PostgreSQL">PostgreSQL</span>
              <span className="SQL">SQL</span>
              <span className="JavaScript">JavaScript</span>
              <span className="NodeJS">NodeJS</span>
              <span className="Bootstrap">Bootstrap</span>
              <span className="SQLite3">SQLite3</span>
              <span className="ExpressJS">ExpressJS</span>
            </div>
          </div>
            {/* <Scene /> */}


          {/* <div className="uk-card uk-text-left uk-visible@s uk-height-1-1" id="phaser-example"> */}
          {/* </div> */}

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
                      <a href="https://www.freecodecamp.org/certification/eugene.pokalyuk/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web Design</a>
                    </div>
                    <div className="uk-card">
                      <a href="https://www.freecodecamp.org/certification/eugene.pokalyuk/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures</a>
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
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Старт во фронтенде»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Погружение в вёрстку»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Погружение в JavaScript»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Продвинутые техники и инструменты вёрстки»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Знакомство с бэкендом»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Ретровёрстка»</a>
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
                      <a href="#example">Веб-верстка «Базовый уровень», «Продвинутый уровень»</a>
                    </div>
                    <div className="uk-card">
                      <a href="#example">JavaScript «Базовый уровень», «Продвинутый уровень»</a>
                    </div>
                    <div className="uk-card">
                      <a href="#example">Node.js</a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="uk-card uk-text-left uk-animation-slide-top uk-margin-top">
              <div className='uk-card uk-padding-small profile-border-rounded profile-card profile-font'>
                <p className='uk-text-center profile-font-white'>Написал проекты</p>
                
                <hr />
                
                <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                  <div className='uk-width-1-3@m'>
                    <div className="uk-card uk-text-left">React</div>
                  </div>

                  <div className='uk-text-left'>
                    <div className="uk-card">
                      <a href="https://eugenepokalyuk.github.io/todo-list/" target="_blank" rel="noopener noreferrer">Todo list</a>
                    </div>
                    <div className="uk-card">
                      <a href="https://eugenepokalyuk.github.io/magic-cube/" target="_blank" rel="noopener noreferrer">Magic Ball</a>
                    </div>
                    <div className="uk-card">
                      <a href="https://eugenepokalyuk.github.io/calc/" target="_blank" rel="noopener noreferrer">Calculator</a>
                    </div>
                    <div className="uk-card">
                      <a href="https://eugenepokalyuk.github.io/Tic-tac-toe/" target="_blank" rel="noopener noreferrer">Tic-tac-toe</a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

        </div>

      </div>

      <div className='uk-container uk-section uk-hidden@s'>
        <div className="uk-flex uk-flex-center">
          <div>
            <div className='profile-photo uk-animation-slide-top'></div>
          </div>
          <div className='uk-margin-medium-left text-header'>
            <h1>Привет! Меня<br />зовут Евгений. <br />Я занимаюсь<br />фронтенд<br />разработкой</h1>
            <a href="https://github.com/eugenepokalyuk" className='linkToGit'>
                <img src={tgIcon} alt=""/>
            </a>
            <a href="https://t.me/papercranejs" className='linkToTg'>
              <img src={gitIcon} alt="" className='uk-margin-small-top'/>
            </a>
          </div>
        </div>

        <div className='uk-width-1-3@m uk-margin uk-margin-medium-right'>
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
                      <a href="https://www.freecodecamp.org/certification/eugene.pokalyuk/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web Design</a>
                    </div>
                    <div className="uk-card">
                      <a href="https://www.freecodecamp.org/certification/eugene.pokalyuk/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures</a>
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
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Старт во фронтенде»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Погружение в вёрстку»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Погружение в JavaScript»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Продвинутые техники и инструменты вёрстки»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Знакомство с бэкендом»</a>
                    </div>

                    <div className="uk-card">
                      <a href="https://htmlacademy.ru/profile/id137373" target="_blank" rel="noopener noreferrer">«Ретровёрстка»</a>
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
                      <a href="#example">Веб-верстка «Базовый уровень», «Продвинутый уровень»</a>
                    </div>
                    <div className="uk-card">
                      <a href="#example">JavaScript «Базовый уровень», «Продвинутый уровень»</a>
                    </div>
                    <div className="uk-card">
                      <a href="#example">Node.js</a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="uk-card uk-text-left uk-animation-slide-top uk-margin-top">
              <div className='uk-card uk-padding-small profile-border-rounded profile-card profile-font'>
                <p className='uk-text-center profile-font-white'>Написал проекты</p>
                
                <hr />
                
                <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                  <div className='uk-width-1-3@m'>
                    <div className="uk-card uk-text-left">React</div>
                  </div>

                  <div className='uk-text-left'>
                    <div className="uk-card">
                      <a href="https://eugenepokalyuk.github.io/todo-list/" target="_blank" rel="noopener noreferrer">Todo list</a>
                    </div>
                    <div className="uk-card">
                      <a href="https://eugenepokalyuk.github.io/magic-cube/" target="_blank" rel="noopener noreferrer">Magic Ball</a>
                    </div>
                    <div className="uk-card">
                      <a href="https://eugenepokalyuk.github.io/calc/" target="_blank" rel="noopener noreferrer">Calculator</a>
                    </div>
                    <div className="uk-card">
                      <a href="https://eugenepokalyuk.github.io/Tic-tac-toe/" target="_blank" rel="noopener noreferrer">Tic-tac-toe</a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className='badge-menu-mobile uk-margin-top'>
              <span className="CSS3">CSS3</span>
              <span className="RestAPI">RestAPI</span>
              <span className="Tabulator">Tabulator</span>
              <span className="HTML5">HTML5</span>
              <span className="Nunjucks">Nunjucks</span>
              <span className="PostgreSQL">PostgreSQL</span>
              <span className="SQL">SQL</span>
              <span className="JavaScript">JavaScript</span>
              <span className="NodeJS">NodeJS</span>
              <span className="Bootstrap">Bootstrap</span>
              <span className="SQLite3">SQLite3</span>
              <span className="ExpressJS">ExpressJS</span>
            </div>
        </div>
        
      </div>
      
    </div>
  );
}
export default App;
