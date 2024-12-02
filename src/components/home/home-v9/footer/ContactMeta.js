import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Total Free Customer Care",
      phone: "+(0) 123 050 945 02",
      phoneLink: "tel:+012305094502", // Use "tel" URI scheme for phone
    },
    {
      title: "Need Live Support?",
      mail: "hi@homez.com",
      mailLink: "mailto:ibthemes21@gmail.com",
    },
  ];

  return (
    <div className="row mb-4">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="text">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
