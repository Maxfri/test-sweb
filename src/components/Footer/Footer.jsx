import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left-side">
        © 2001– 2021 ООО <a href="https://sweb.ru/">«СпейсВэб»</a>
        Все права защищены.
        Лицензия <a href="https://sweb.ru/documents/#%D1%81ertificates">№163230</a>
      </div>
      <div className="footer-right-side">
        <a href="tel:+78123341222">+7 (812) 334-12-22</a> (в Санкт-Петербурге)
        <a href="tel:+74956631612">+7 (495) 663-16-12</a> (в Москве)
        <a href="tel:8001001615">(800) 100-16-15</a> (бесплатно по России)
      </div>
    </footer>
  )
}

export default Footer
