import React, { useState } from 'react';
import firebase from '../database/Firebase';

function Contact() {


  // Function for Contact

  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [buttonMessage, setButtonMessage] = useState("Send Message")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(phone && message && email && name){
      try {
        const contactRef = firebase.firestore().collection('contacts');
        await contactRef.add({
          name,
          email,
          phone,
          message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });


        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setButtonMessage("Message sent, we will contact you shortly.")
        console.log('Query Send');
      } catch (error) {
        console.error('Error occurred while sending messagem, try again!', error);
      }

      setTimeout(()=>{
        setButtonMessage("Send Message");
      },2000);
  }

  };








  return (
    <>
<div class="container mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section>
    <div class="flex flex-wrap">
      <div class="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <h2 class="mb-6 text-xl md:text-3xl font-bold">Contact us</h2>
        <p class="mb-6 text-sm md:text-base text-neutral-500 dark:text-neutral-300">
        Our team is eager to collaborate, answer your inquiries.
        </p>
        <p class="mb-2 text-sm md:text-base text-neutral-500 dark:text-neutral-300">
          IIIT Una, Himachal Pradesh, India
        </p>
        <p class="mb-2 text-sm md:text-base text-neutral-500 dark:text-neutral-300">
          21310@iiitu.ac.in
        </p>
      </div>
      <div class="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 text-sm md:text-base lg:px-6">
        <form onSubmit={handleSubmit}>
          <div class="relative mb-4 md:mb-6" data-te-input-wrapper-init>
            <input type="text"
              class="block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none"
              id="exampleInput90" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div class="relative mb-4 md:mb-6" data-te-input-wrapper-init>
            <input type="email"
              class="block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none"
              id="exampleInput91" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            
          </div>
          <div class="relative mb-4 md:mb-6" data-te-input-wrapper-init>
            <input type="tel"
              class="block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none"
              id="exampleInput91" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
    
          </div>
          <div class="relative mb-4 md:mb-6" data-te-input-wrapper-init>
            <textarea
              class="block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none"
              id="exampleFormControlTextarea1" rows="3" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit" data-te-ripple-init data-te-ripple-color="light"
            class="mb-6 inline-block w-full rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-semibold leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            {buttonMessage}
          </button>
        </form>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>

</>
  )
}

export default Contact