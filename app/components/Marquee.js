// components/HorizontalScroller.js
import React from 'react';
import styles from './Marquee.module.css';

function Marquee() {
  return (
    <>
    
    <div className={styles.wrapper}>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 1) * -1)' }}>
      <img src='./2844381_bitoin_btc_coin_crypto_icon.png'/></div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 2) * -1)' }}>
      <img src='./2844381_bitoin_btc_coin_crypto_icon.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 3) * -1)' }}>
      <img src='./2785485_blockchain_ethereum_icon.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 4) * -1)' }}>
      <img src='./728973_credit card_mastercard_payment_card_pay_icon.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 5) * -1)' }}>
      <img src='./coin.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 6) * -1)' }}>
      <img src='./solana.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 7) * -1)' }}>
      <img src='./tron.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 8) * -1)' }}>
      <img src='./polygon.png'/>
      </div>
         
    </div>

    <div className={styles.wrapper}>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 1) * -1)' }}>
      <img src='./2844381_bitoin_btc_coin_crypto_icon.png'/></div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 2) * -1)' }}>
      <img src='./2844381_bitoin_btc_coin_crypto_icon.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 3) * -1)' }}>
      <img src='./2785485_blockchain_ethereum_icon.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 4) * -1)' }}>
      <img src='./728973_credit card_mastercard_payment_card_pay_icon.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 5) * -1)' }}>
      <img src='./coin.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 6) * -1)' }}>
      <img src='./solana.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 7) * -1)' }}>
      <img src='./tron.png'/>
      </div>
      <div className={styles.item} style={{ animationDelay: 'calc(30s / 8 * (8 - 8) * -1)' }}>
      <img src='./polygon.png'/>
      </div>
         
    </div>
    </>
    
  );
}

export default Marquee;