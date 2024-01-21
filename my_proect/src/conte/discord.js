import React from 'react';
import './discord.css';
import discord from './img/discord.svg'

const Discord = () => {
  return (
    <div>
        <div className="">
            <section className="header ">
                <header className="discordlarHeader contene">
                    <div className='bag col'>
                        <div className="discordHeaderText col">
                            <div className="discordHeaderTextHorizon">

                            </div>
                            <div className="discordHeaderText">
                                <h1><span>Discord </span>Serverga Xush Kelibsiz !</h1>
                                <p>O'rta Osiyo Va O'zbekiston Bo'ylab 5,000 Ga Yaqin 
                                    Traderlarni O'z Ichiga Jamlagan Discord Trading Community!</p>
                            </div>
                        </div>
                        <div className="discordHeaderImg">
                            <img src={discord} alt="" />
                        </div>
                    </div>
                    <div className="centerJust">
                        <div className="centerheaderVideo">
                            
                        </div>
                    </div>
                </header>
            </section>
            
            <section className="mainText col contene">
                <div className="sectionMainTextAndButtons columFlex">
                    <div className="sectionMainTextAndLine col">
                        <div className="sectionMainTextLine">

                        </div>
                        <div className="sectionMainTexts">
                            <div className='sectionMainTextsDiv'><span>DISCORD</span> HAQIDA</div>
                            <p>Bu dastur orqali NoxonFX katta oilasiga 
                                qo'shilasiz va siz kabi maqsad sari 
                                intiladigan, doimiy analizlar bilan fikr
                                almashadigan, kun davomida savdo bitimlarini amalga
                                oshirib daromad qiladigan 2500 dan oshiq traderlar safida
                                bo'lasiz
                            </p>
                        </div>
                    </div>
                    <div className="sectionMainButtons">
                        <div className="mainButton Green startJust ">-Kunlik Sessiyalar + Savdo Recap videolar</div>
                        <div className="mainButton Red startJust ">-Kunlik Analizlar</div>
                        <div className="mainButton Green startJust ">-Savdo g'oyalaringizni Pro Treyderlar bilan almashishi</div>
                        <div className="mainButton Red startJust ">-24/7 Mentorlar qo'llab-quvvatlashi</div>
                    </div>
                </div>
                <div className="sectionMainTextImgs col">
                    <div className="sectionMainTextImgDiv ">
                        <div className="sectionMainTextImgDivInImg">Img</div>
                        <div className="sectionMainTextImgDivInImg">Img</div>
                        <div className="sectionMainTextImgDivInImg">Img</div>
                    </div>
                    <div className="div">
                        <div className="sectionMainTextImgData columFlex">
                            <p>-Online darslar</p>
                            <p>-Signallar</p>
                            <p>-Kunlik analiz</p>
                            <p>-Haftalik analiz</p>
                            <p>-Premium - Chat</p>
                            <p>-Mentor support</p>
                            <p>-Live Uchrashuv</p>
                        </div>
                    </div>                    
                </div>
            </section>
            <section className="usersSection ">
                <main className="users speasearound contene">
                    <div className="usersDiv ceJust top">
                        <h1>6 ta</h1>
                        <p>Bo'limda Kunlik Analizlar</p>
                    </div>
                    <div className="usersDiv ceJust ">
                        <h1>10 ta</h1>
                        <p>Bo'limda Online Darslar</p>
                    </div>
                    <div className="usersDiv ceJust ">
                        <h1>2500+</h1>
                        <p>Foydalanuvchi Traderlar</p>
                    </div>
                </main>
            </section>
            <section className="Discord">
                <div className="Text ceJust contene">
                    <span>DISCORD SERVER</span>
                    <span className='greeennnnn'>NARXLAR</span>
                </div>
            </section>
            
            <section className="priceDiscord ">
                <div className="contene grid-container">
                    <div className="priceDiscordBoxDeta  ">
                        <div className="boxss ceJust ">
                            <h1>1 Oylik</h1>
                            <h3>TARIF</h3>
                        </div>
                        <div className="colum3 blueBg">
                            <p className='middle'>Haftalik Analizlar</p>
                            <p><span>-</span> EUR/USD</p>
                            <p><span>-</span>AUD/USD</p>
                            <p><span>-</span>GBP/USD</p>
                            <p><span>-</span>XAU/USD</p>
                            <p><span>-</span>Fundamental News</p>
                            <p><span>-</span>Signal</p>
                            <p><span>-</span>Trade Reap</p>
                            <p><span>-</span>Team Setup</p>
                            <p className='middle'>Darsliklar</p>
                            <p><span>-</span>Struktura</p>
                            <p><span>-</span>Supply & Demand</p>
                            <p><span>-</span>OrderFlow</p>
                            <p><span>-</span>Likvidnost</p>
                            <p><span>-</span>Entry</p>
                            <p><span>-</span>PAT</p>
                            <p><span>-</span>Savol & Javob</p>
                            <p className='middle'>Community</p>
                            <p><span>-</span>Boshqalar</p>
                            <p><span>-</span>Premium Chat</p>
                            <p><span>-</span>Team Recap</p>
                            <p><span>-</span>Psixologiya</p>
                            <p><span>-</span>Live Trade</p>
                            <p className='middle'>Strategiyalar</p>
                            <p><span>-</span>Terminlar</p>
                            <p><span>-</span>Killzonalar</p>
                            <p><span>-</span>Likvidnost</p>
                            <p><span>-</span>Asosiy LQD</p>
                            <p><span>-</span>Premium & Discount</p>
                            <p><span>-</span>OTE</p>
                            <p><span>-</span>Silver Bullet</p>
                            <p className='middle'>Trade Floor</p>
                            <p><span>-</span>Winning Trades</p>
                            <p><span>-</span>Losing Trades</p>
                            <p><span>-</span>Session Markups</p>
                        </div>
                        {/* <div className="botom_line bgCLayer ceJust"></div> */}
                        <div className="boxss ceJust">
                            <h1>$150</h1>
                            <button>Boshlash</button>
                        </div>
                    </div>
                    <div className="priceDiscordBoxDeta oy3">
                        <div className="boxss ceJust ">
                            <h1>3 Oylik</h1>
                            <h3>TARIF</h3>
                        </div>
                        <div className="colum3 whiteBg">
                            <p className='middle'>Haftalik Analizlar</p>
                            <p><span>-</span> EUR/USD</p>
                            <p><span>-</span>AUD/USD</p>
                            <p><span>-</span>GBP/USD</p>
                            <p><span>-</span>XAU/USD</p>
                            <p><span>-</span>Fundamental News</p>
                            <p><span>-</span>Signal</p>
                            <p><span>-</span>Trade Reap</p>
                            <p><span>-</span>Team Setup</p>
                            <p className='middle'>Darsliklar</p>
                            <p><span>-</span>Struktura</p>
                            <p><span>-</span>Supply & Demand</p>
                            <p><span>-</span>OrderFlow</p>
                            <p><span>-</span>Likvidnost</p>
                            <p><span>-</span>Entry</p>
                            <p><span>-</span>PAT</p>
                            <p><span>-</span>Savol & Javob</p>
                            <p className='middle'>Community</p>
                            <p><span>-</span>Boshqalar</p>
                            <p><span>-</span>Premium Chat</p>
                            <p><span>-</span>Team Recap</p>
                            <p><span>-</span>Psixologiya</p>
                            <p><span>-</span>Live Trade</p>
                            <p className='middle'>Strategiyalar</p>
                            <p><span>-</span>Terminlar</p>
                            <p><span>-</span>Killzonalar</p>
                            <p><span>-</span>Likvidnost</p>
                            <p><span>-</span>Asosiy LQD</p>
                            <p><span>-</span>Premium & Discount</p>
                            <p><span>-</span>OTE</p>
                            <p><span>-</span>Silver Bullet</p>
                            <p className='middle'>Trade Floor</p>
                            <p><span>-</span>Winning Trades</p>
                            <p><span>-</span>Losing Trades</p>
                            <p><span>-</span>Session Markups</p>
                        </div>
                        {/* <div className="botom_line bgCLayer ceJust"></div> */}
                        <div className="boxss ceJust">
                            <h4>$450</h4>
                            <h1>$300</h1>
                            <button>Boshlash</button>
                        </div>
                    </div>
                    <div className="priceDiscordBoxDeta oy6 ">
                        <div className="boxss ceJust ">
                            <h1>6 Oylik</h1>
                            <h3>TARIF</h3>
                        </div>
                        <div className="colum3 blueBg">
                            <p className='middle'>Haftalik Analizlar</p>
                            <p><span>-</span> EUR/USD</p>
                            <p><span>-</span>AUD/USD</p>
                            <p><span>-</span>GBP/USD</p>
                            <p><span>-</span>XAU/USD</p>
                            <p><span>-</span>Fundamental News</p>
                            <p><span>-</span>Signal</p>
                            <p><span>-</span>Trade Reap</p>
                            <p><span>-</span>Team Setup</p>
                            <p className='middle'>Darsliklar</p>
                            <p><span>-</span>Struktura</p>
                            <p><span>-</span>Supply & Demand</p>
                            <p><span>-</span>OrderFlow</p>
                            <p><span>-</span>Likvidnost</p>
                            <p><span>-</span>Entry</p>
                            <p><span>-</span>PAT</p>
                            <p><span>-</span>Savol & Javob</p>
                            <p className='middle'>Community</p>
                            <p><span>-</span>Boshqalar</p>
                            <p><span>-</span>Premium Chat</p>
                            <p><span>-</span>Team Recap</p>
                            <p><span>-</span>Psixologiya</p>
                            <p><span>-</span>Live Trade</p>
                            <p className='middle'>Strategiyalar</p>
                            <p><span>-</span>Terminlar</p>
                            <p><span>-</span>Killzonalar</p>
                            <p><span>-</span>Likvidnost</p>
                            <p><span>-</span>Asosiy LQD</p>
                            <p><span>-</span>Premium & Discount</p>
                            <p><span>-</span>OTE</p>
                            <p><span>-</span>Silver Bullet</p>
                            <p className='middle'>Trade Floor</p>
                            <p><span>-</span>Winning Trades</p>
                            <p><span>-</span>Losing Trades</p>
                            <p><span>-</span>Session Markups</p>
                        </div>
                        {/* <div className="botom_line bgCLayer ceJust"></div> */}
                        <div className="boxss ceJust">
                            <h4>$900</h4>
                            <h1>$500</h1>
                            <button>Boshlash</button>
                        </div>
                    </div>
                    <div className="priceDiscordBoxDeta  oy12">
                        <div className="boxss ceJust ">
                            <h1>12 Oylik</h1>
                            <h3>TARIF</h3>
                        </div>
                        <div className="colum3 whiteBg">
                            <p className='middle'>Haftalik Analizlar</p>
                            <p><span>-</span> EUR/USD</p>
                            <p><span>-</span>AUD/USD</p>
                            <p><span>-</span>GBP/USD</p>
                            <p><span>-</span>XAU/USD</p>
                            <p><span>-</span>Fundamental News</p>
                            <p><span>-</span>Signal</p>
                            <p><span>-</span>Trade Reap</p>
                            <p><span>-</span>Team Setup</p>
                            <p className='middle'>Darsliklar</p>
                            <p><span>-</span>Struktura</p>
                            <p><span>-</span>Supply & Demand</p>
                            <p><span>-</span>OrderFlow</p>
                            <p><span>-</span>Likvidnost</p>
                            <p><span>-</span>Entry</p>
                            <p><span>-</span>PAT</p>
                            <p><span>-</span>Savol & Javob</p>
                            <p className='middle'>Community</p>
                            <p><span>-</span>Boshqalar</p>
                            <p><span>-</span>Premium Chat</p>
                            <p><span>-</span>Team Recap</p>
                            <p><span>-</span>Psixologiya</p>
                            <p><span>-</span>Live Trade</p>
                            <p className='middle'>Strategiyalar</p>
                            <p><span>-</span>Terminlar</p>
                            <p><span>-</span>Killzonalar</p>
                            <p><span>-</span>Likvidnost</p>
                            <p><span>-</span>Asosiy LQD</p>
                            <p><span>-</span>Premium & Discount</p>
                            <p><span>-</span>OTE</p>
                            <p><span>-</span>Silver Bullet</p>
                            <p className='middle'>Trade Floor</p>
                            <p><span>-</span>Winning Trades</p>
                            <p><span>-</span>Losing Trades</p>
                            <p><span>-</span>Session Markups</p>
                        </div>
                        {/* <div className="botom_line bgCLayer ceJust"></div> */}
                        <div className="boxss ceJust">
                            <h4>$1800</h4>
                            <h1>$900</h1>
                            <button>Boshlash</button>
                        </div>
                    </div>
                </div>
                
            </section>
            <div className="NoxonAcademy01 ceJust contene">
                <h1>Noxon Academy 1.0 </h1>
                <h1>Telegram Yopiq Darslar</h1>
                <div className="lineHorizontal"></div>
            </div>
        </div>
    </div>
  )
}

export default Discord
