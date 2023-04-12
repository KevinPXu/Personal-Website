import React, { useState } from 'react';

const Mail = () => {
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');
  const email = 'kevinpxu21@gmail.com';

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setHeader(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedEmail = encodeURIComponent(email);
    const encodedSubject = encodeURIComponent(header);
    const encodedBody = encodeURIComponent(body);

    const mailtoLink = `mailto:${encodedEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        position: 'absolute',
        bottom: '-200%',
        transform: 'TranslateX(-50%)',
        left: '25%',
      }}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={header}
          onChange={handleSubjectChange}
          style={{ color: 'white' }}
          className='question'
          id='subject'
          required
          autoComplete='off'
        />
        <label htmlFor='nme'>
          <span>Email Subject</span>
        </label>
        <textarea
          name='message'
          rows='2'
          className='question'
          value={body}
          onChange={handleBodyChange}
          style={{ color: 'white' }}
          id='msg'
          required
          autoComplete='off'></textarea>
        <label htmlFor='msg'>
          <span>What&apos;s your message?</span>
        </label>
        <input
          type='submit'
          value='Send Email!'
        />
      </form>
    </div>
  );
};

export default Mail;
