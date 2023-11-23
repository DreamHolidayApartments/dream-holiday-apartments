import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <div className="container" >
      <div className=" text-center mt-5 ">
        <h2> Contact Maya & Vidisha</h2>
        <p style={{ fontSize: "18px" }}>
          We would love to hear from you! Whether you have a question, feedback,
          or just want to say hello, feel free to reach out to us !!
        </p>
      </div>

      <div className="row ">
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form id="contact-form" role="form">
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_name">Firstname *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Firstname"
                            required="required"
                            data-error="Firstname is required."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_lastname">Lastname *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            className="form-control"
                            placeholder="Lastname"
                            required="required"
                            data-error="Lastname is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Please enter your email *"
                            required="required"
                            data-error="Valid email is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <br />
                        <input
                          id="btn-contact"
                          type="submit"
                          className="btn btn-success btn-send  pt-2 btn-block
                            "
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
