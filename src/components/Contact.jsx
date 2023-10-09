import {useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';  //to setup email services for people to contact with us

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion'; 


// emailjs details are below:
// email template - template_4f7lojo 
// service template - service_uxroldf
// public key - kS4lxUtrv5X8Dk6Pz

const Contact = () => {
  const formRef = useRef(); 
  const [ form, setForm ] = useState ({
    name: '',
    email: '',
    message: '',
  });

  const [ loading, setLoading] = useState(false); 
  
  const handleChange = (e) => {   // allows to the update the field in the form with values in the field
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})

  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent refreshing of the browser back to default 
    setLoading(true);  // to send the email message 
    
    // copy the service id, template id and the public key from emailjs service
    // it comprises of 4 parameters service id, template id, from_name to_name from_email to_email message, public key
    emailjs.send('service_uxroldf', 'template_4f7lojo', 
     {
        from_name: form.name,
        to_name: 'Rahul Kumar',
        from_email: form.email,
        to_email: 'reachout.RK1@gmail.com',
        message: form.message,
     },
     'kS4lxUtrv5X8Dk6Pz'
    ) 
    .then(() =>{
      setLoading(false);
      alert('Thanks for reaching out to me, I will get back to you as soon as possible!');
      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (error) => {  // error message if the user fails while submitting! 
      setLoading(false)
      console.log(error);
      alert('Something unexpected happend.')
    })   
  
  }
  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
       variants={slideIn('left','tween', 1, 1.2)}
       className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
         ref={formRef}
         onSubmit={handleSubmit}
         className="mt-12 flex flex-col gap-8"
         >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Convey your message here.... :)"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button 
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
           {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
       variants={slideIn('right','tween', 0.7, 1.1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      > 

      <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");