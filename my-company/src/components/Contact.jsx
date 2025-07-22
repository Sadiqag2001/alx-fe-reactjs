import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ display:'inline-block', justifyContent:'center', padding: '20px', margin:'10px auto'}}>
         <h1 style={{listStyle:'none', fontFamily:'poppins, sans-serif', fontSize:'30px', marginLeft:'20px'}}>Contact Us</h1>
         <form onSubmit={handleSubmit} style={{paddingLeft:'25px'}}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0', border:'none', borderBottom: '#888 solid 1px', fontWeight: '300', fontFamily: 'poppins, sans-serif', padding: '.7rem 0', opacity: '.5',
                        }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0', border:'none', borderBottom: '#888 solid 1px', fontWeight: '300', fontFamily: 'poppins, sans-serif', padding: '.7rem 0', opacity: '.5',
                        }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0', border:'none', borderBottom: '#888 solid 1px', fontWeight: '300', fontFamily: 'poppins, sans-serif', padding: '.7rem 0', opacity: '.5',
                        }}
           />
           <button type="submit"
           style={{
                    fontSize: '14px',
                    backgroundColor: '#f8ddccff',
                    color: '#333333',
                    fontFamily: 'poppins, sans-serif',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: '500'
           }}>Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;