import React from 'react';

function Card({ title, url, description }) {
  return (
    <div className='card'>
      <div className='image'>
        <img src='#' />
      </div>
      <div className='details'>
        <div className='center'>
          <h1>{title}</h1>
          <p>
            {description}
          </p>
          <ul>
            <li>
              <a href={url}>
                <i
                  className='fa fa-facebook'
                  aria-hidden='true'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
