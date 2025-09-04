
import "../App.css";

export const Contact = () => {




    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
        
    };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">

      
      <form action={handleFormSubmit} >
        <input
          type="text"
          required
          autoComplete="Off"
          placeholder="Enter Your Name"
          name="username"
        ></input>

        <input
          type="email"
          className="form-control"
          placeholder="Enter Your email"
          name="email"
          required
          autoComplete="false"
        />

        <textarea name="message" id=""
        className="form-control"
        rows="10"
        placeholder="Enter your message"
        required
        autoComplete="false"
        
        
        ></textarea>
        <button type="submit" value="send" >Send</button>

      </form>
      </div>
    </section>
  );
};
