import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//import blog from '../Assets/images/blog.jpg'

function Card({ title, url, description, imageURL }) {
  return (
    <div className='card'>
      <div className='image'>
        <img src={imageURL} />
      </div>
      <div className='details'>
        <div className='center'>
          <h1 className='cardHeader'>{title}</h1>
          <p className='cardDescription'>{description}</p>
          <ul className='cardUl'>
            <li className='cardLi'>
              <a
                className='cardBtn'
                href={url}>
                Continue to App <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
