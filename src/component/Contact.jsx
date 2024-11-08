import React, { useEffect, useRef, useState } from 'react'

export const Contact = () => {
  const inputRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)

  const placeholderHighlight = ["one", "two", "three"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = () => {
      setIndex(prevIndex => {
        if (prevIndex === placeholderHighlight.length-1) {
          return 0;
        }
        return prevIndex + 1;
      })

    };
    setInterval(timer, 3000);
    return () => { clearInterval(timer); }
  }, [])

console.log(index)


  return (
    <div className='contact-container' id='contact'>
      <div className='contact-wrap'>
        <div className='contact-header'>Contact Our Team</div>
        <div className='contact-desc'>Whether you're a marketing pro looking for a smarter way to manage campaign expenses or someone seeking a more efficient way to handle personal purchases, our cards provide the flexibility, control, and security you need.</div>
        <div className='contact-team'>
          <div className='team'>
            <div className='team-desc'>
              <div className='desc-wrap'>
                <div className='team-num'>
                  <div className='t-1' id={index == 0 ? 'bg' : null}>1</div>
                </div>
                <div className='team-text'>

                  <div className='t-header' id={index == 0  ? 'active-h' : null}>Contact Our Team</div>
                  <div className='t-desc' id={index == 0  ? 'active-desc' : null}>We're here for you! Whether you're starting out or need support, our team is ready to assist. Reach out for personalized guidance and get quick answers to your questions.</div>
                </div>
                <div className="side-margin"></div>
              </div>
            </div>

            <div className='team-desc'>
              <div className='desc-wrap'>
                <div className='team-num'>
                  <div className='t-1' id={index == 1  ? 'bg' : null}>2</div>
                </div>
                <div className='team-text'>
                  <div className='t-header' id={index == 1  ? 'active-h' : null}>Your Card Solution</div>
                  <div className='t-desc' id={index == 1 ? 'active-desc' : null}>Get the card that fits your needs—whether for personal or business use. Our solutions offer security, flexibility, and global access.</div>
                </div>
              </div>
            </div>

            <div className='team-desc'>
              <div className='desc-wrap'>
                <div className='team-num'>
                  <div className='t-1' id={index == 2 ? 'bg' : null}>3</div>
                </div>
                <div className='team-text'>
                  <div className='t-header' id={index == 2 ? 'active-h' : null}>Complete Verification and Activate Solution</div>
                  <div className='t-desc' id={index == 2 ? 'active-h' : null}>Quick and easy setup! Complete your verification and activate your card in just a few steps.
                    <div className='t-step' id={index == 2 ? 'active-desc' : null}>
                      <ul><li>Step 1: Submit your details.</li></ul>
                      <ul><li>Step 2: Securely verify your identity.</li></ul>
                      <ul><li>Step 3: Activate and start using your card immediately!</li></ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='contact-form'>
            <div className='form-1'>
              <div className='f-name' onClick={() => inputRef.current.focus()}>
                <div className='f-name-label'>Full Name</div>
                <div className='f-name-input'><input type="text" ref={inputRef} /></div>
              </div>

              <div className='f-name' onClick={() => emailRef.current.focus()}>
                <div className='f-name-label'>Email</div>
                <div className='f-name-input'><input type="text" ref={emailRef} /></div>
              </div>

              <div className='f-name' onClick={() => phoneRef.current.focus()}>
                <div className='f-name-label'>Phone Number</div>
                <div className='f-name-input'><input type="text" ref={phoneRef} /></div>
              </div>

              <div className='f-message' onClick={() => messageRef.current.focus()}>
                <div className='f-name-label'>Message</div>
                <div className='f-name-input'><textarea type="text" ref={messageRef} maxLength={530} /></div>
              </div>

              <div className='contact-btn-wrap'>
                <div className='contact-btn'>Send</div>
              </div>
            </div>
            <div className='form-2'></div>
          </div>
        </div>

      </div>
    </div>
  )
}
