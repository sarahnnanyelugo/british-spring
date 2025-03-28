import React from "react";
import "./junior.scss";
import JuniorGirl from "../../../assets/images/court.jpg";
import Img2 from "../../../assets/images/lib.jpg";
import Img3 from "../../../assets/images/happy-students.jpeg";
import Img1 from "../../../assets/images/lab.jpg";
import Img4 from "../../../assets/images/academicHero.jpg";
import Hero from "../../../assets/images/classGirl.jpg";
import Event from "../../../components/Calendar/Calendar";
import SubjectTab from "../SubjectTab/SubjectTab";
import CalModal from "../CalModal";

export const JuniorSecondary = () => {
  return (
    <>
      <div className="junior-div">
        <div className="banner">
          <img src={Hero} width="100%" />
        </div>

        <div className="col-md-8 offset-md-2 d-md-flex main-body">
          <div className="col-md-6">
            <h4>British Spring Junior Secondary</h4>

            <h3>Excellence in Education, Strength in Character !</h3>
          </div>
          <div className="col-md-6 ">
            <img src={JuniorGirl} width="100%" />
          </div>
        </div>
        <div className="col-md-12 profile">
          <center>
            <h1>British Spring College; Junior Category</h1>
            <p>1, British Spring Estate Road, Nkwelle Awka, Anambra State</p>
            <hr className="col-md-1" />
            <h5>Ages: 11 - 13</h5>
            <h4>Andrew John, Head of Academics </h4>
          </center>
        </div>
        <div className="col-md-8 offset-md-2 d-md-flex general">
          <div className="col-md-3  img-div">
            <img src={Img1} width="100%" />
            <img src={Img2} width="100%" />
            <img src={Img3} width="100%" />
            <img src={Img4} width="100%" />
          </div>
          <div className="col-md-9">
            <h2> SETTING THE FOUNDATION IN JUNIOR SCHOOL: JSS 1-3</h2>
            <p>
              UP Middle welcomes students as early as the fifth grade and works
              in partnership with their families over three or four years to
              build their lives as inquisitive scholars, joyous and able
              readers, and active citizens of both the school community and the
              larger community of neighborhood and city around them. Students at
              UP Middle join a committed fellowship of teachers, counselors and
              staff members who come together each day to teach, guide, and
              provide students with an array of opportunities to defend their
              thinking, express themselves, and learn from others.{" "}
            </p>

            <h4>British Spring Junior - Facts You Need to Know</h4>
            <div class="card">
              <details class="warning">
                <summary>
                  <h1>A focus learning and content in all subject areas</h1>
                </summary>
                <p>
                  UP Middle school features a knowledge-led, content-rich,
                  cumulative curriculum that takes seriously the question, “What
                  should students learn?” Teachers at the school work together
                  to outline the specific content that every child should learn
                  in literature, history, geography, mathematics, science, and
                  visual arts over all four years. We identify the content and
                  skills that comprise the foundational knowledge that all
                  students need in order to master content, think and read
                  critically, and solve problems.
                </p>
                <p>
                  Our students spend roughly an hour a day in all classes, and
                  we give students the time to dive deeply into all subjects,
                  not just math and English. In science, we conduct experiments
                  and pose questions about the material world. In history, we
                  explore over the course of four years the origins of the
                  United States through contemporary times. And students
                  complete major projects with unit-concluding performances,
                  presentations, or papers in all their courses.
                </p>
              </details>
              <details class="info" open>
                <summary>
                  <h1>A focus on structured homework</h1>
                </summary>
                <p>
                  Students at British Spring Junior School complete homework on
                  a regular schedule, and the work done is designed to prepare
                  them for learning that will take place in subsequent classes.
                  In this way, UPrep teachers can extend the time we have with
                  students in class. Parents also know exactly what work
                  students have each night and check more easily check it for
                  completion and quality.
                </p>
              </details>{" "}
              <details class="cutomize" open>
                <summary>
                  <h1>We gather together each morning for Homebase</h1>
                </summary>
                <p>
                  Students spend their first hour each day in their Homebase,
                  which is the place for morning celebrations, announcements and
                  shout-outs, homework planning, student check-ins, and
                  independent reading. Each Homebase advisor is responsible for
                  tracking students’ independent reading progress in school and
                  at home and for goal-planning with them. Our advisors are also
                  the first line when it comes to contacting parents and holding
                  them accountable for work done at home.
                </p>
              </details>
              <details class="alert">
                <summary>
                  <h1>
                    Classes beyond math, science, history and English matter
                  </h1>
                </summary>
                <p>
                  It’s important for students to learn broadly and to express
                  themselves through the arts. All our students take Visual Arts
                  and chess at least three times over the four years they are at
                  UP. Students not only draw, paint, perform, and rehearse in
                  these classes—they also learn the fundamentals about each,
                  allowing them to expand and broaden an existing passion or
                  begin to develop a new one. Movement and health are essential
                  for students as they enhance focus, energy, and overall
                  well-being, cultivating positive habits which support mental
                  clarity, resilience, and productivity.
                </p>
              </details>{" "}
              <details class="cutomize2">
                <summary>
                  <h1>
                    Parents and families are an equal—and essential—partner in
                    our work
                  </h1>
                </summary>
                <p>
                  We spend a lot of time communicating with parents and families
                  because we know they’re essential to the success of our
                  students—both in school and out. All our teachers communicate
                  consistently via ParentSqaure, a messaging system, and they
                  return calls and emails within 24 hours. Our teachers also
                  give parents family-friendly calendars in all their classes so
                  families know exactly what their children are studying and
                  when they’re going to be assessed on their work. And you’ll
                  know what your child is reading—and has read—through access to
                  our on-line book tracker. .
                </p>
                <p>
                  And there’s a lot going on in our school—events, performances,
                  meetings, programs—and we make sure our families are always
                  connected through ParentSqaure. It’s a one-stop shop that
                  provides families a place to connect school staff, check
                  what’s for homework, catch up on events, news, and
                  celebrations, and see their child’s current grades in real
                  time via PowerSchool. Our website also provides families with
                  a comprehensive calendar of all events—check it out.
                </p>
              </details>{" "}
              <details class="alert">
                <summary>
                  <h1>Our students are mentored by older grade students</h1>
                </summary>
                <p>
                  Outstanding 8th grade students join our Peer Group Committee
                  (PGC), a mentoring program for our younger middle school
                  students. They occasionally meet as a group and with our
                  students designed to foster community, support, and leadership
                  among students. This committee serves as a platform where
                  students can collaborate in small-group settings on becoming
                  better citizens, school initiatives, and create a welcoming
                  environment for their peers. Our high school students are also
                  extensively trained in how to speak to adolescents and work
                  with them in small teams to solve problems and strengthen
                  connections.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div className="col-md-10 offset-md-1 d-md-flex mt-5">
          <div className="col-md-4 mt-5 ">
            <h4>Junio School Calendar</h4>
            <CalModal />
          </div>

          <div className="col-md-7 offset-md-1">
            {" "}
            <SubjectTab />
          </div>
        </div>
      </div>
    </>
  );
};
