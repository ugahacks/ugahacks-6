import React from 'react';
import './FAQ.css';

function FAQ(props) {
  return (
    <>
      <section className="section faq-section">
        <div className="faq-container">

            <h1>FAQ</h1>

            <button className="faq-question">Where will the event be held this year?</button>
            <div className="faq-answer">
              <p>The event will be held at UGA's <a href="https://goo.gl/maps/rMa5f99XiaW39a8e6" className="textlink">Zell
                B. Miller Learning Center.</a></p>
            </div>

            <button className="faq-question">Who can sign up?</button>
            <div className="faq-answer">
              <p>All university students! We welcome all undergraduates and graduate students of all skill levels to
                attend.
                Professionals and other guests are welcome to attend as mentors or volunteers.</p>
            </div>

            <button className="faq-question">How much does it cost to sign up?</button>
            <div className="faq-answer">
              <p>Nothing! The entire event and its amazing perks are free for all participants, including meals and snacks
                to keep you powered throughout the weekend, as well as workshops to help you get started and sharpen your
                hacking skills.</p>
            </div>

            <div className="collapse" id="hidden-questions">
              <button className="faq-question">What if I don't have a team or idea?</button>
              <div className="faq-answer">
                <p>Don't sweat it! You're free to join any existing team or form a new one when you get there. We'll also
                  provide ample opportunities for hackers to meet each other and brainstorm some amazing ideas</p>
              </div>

              <button className="faq-question">Can I start working on my project before the event?</button>
              <div className="faq-answer">
                <p>No. All UGAHacks projects must begin at the hackathon. You are not permitted to begin a hackathon project
                  before this event. Feel free to bring ideas, but no code!</p>
              </div>

              <button className="faq-question">What should I bring?</button>
              <div className="faq-answer">
                <p>Enthusiasm! Laptops, phones, chargers, and other tools you might need for your project are also
                  important!
                  If you're staying overnight, be sure to bring the necessary toiletries and a sleeping bag. Additionally,
                  please bring your official student ID or government ID (no photocopies allowed).</p>
              </div>

              <button className="faq-question">Will you be offering travel reimbursements?</button>
              <div className="faq-answer">
                <p>Yes, we will be offering travel reimbursements! Please make sure to note it on your registration and we
                  will reach out to you upon acceptance. University of Georgia students are not eligible to receive travel
                  reimbursements.</p>
              </div>

              <button className="faq-question">Can I volunteer/mentor at UGAHacks?</button>
              <div className="faq-answer">
                <p>We love your enthusiasm! Volunteers and mentors can apply via the registration form above! If you
                  have any
                  questions regarding the position, please contact us at <a href="mailto:hello@ugahacks.com"
                    className="textlink">hello@ugahacks.com</a> - Be sure to mention the specific position in the subject of
                  the
                  email. See you at the event!</p>
              </div>

              <button className="faq-question">How many people can I have on my team?</button>
              <div className="faq-answer">
                <p>There is no hard limit, but we recommend teams be at most 4 people, as we only have prizes for 4
                  people per
                  team.</p>
              </div>

              <button className="faq-question">Where will I sleep?</button>
              <div className="faq-answer">
                <p>We'll have designated sleeping areas for hackers, but they will be on a first-come-first-serve
                  basis.
                  You're welcome and even encouraged to bring a sleeping bag!</p>
              </div>

              <button className="faq-question">What are the rules all attendees must abide by?</button>
              <div className="faq-answer">
                <p>UGAHacks will be following the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="textlink">
                    MLH Code of Conduct</a>. By participating in UGAHacks, you are agreeing to
                  follow the
                  Code of Conduct throughout the duration of the event.</p>
              </div>

              <button className="faq-question">Who do I reach out to if I have more questions?</button>
              <div className="faq-answer">
                <p>Reach out to <a href="mailto:hello@ugahacks.com" className="textlink">hello@ugahacks.com</a> and
                  we'll be happy
                  to answer it!</p>
              </div>


            </div>
            <button className="show-more" type="button" data-toggle="collapse" data-target="#hidden-questions" aria-expanded="false" aria-controls="hidden-questions">
              Show More
            </button>
        </div>

      </section>
    </>

  );
}

export default FAQ;
