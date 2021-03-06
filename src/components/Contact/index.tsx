import React from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';

import { db } from 'config/Firebase';

import { useContactShow } from 'contexts/contact';

import styles from './styles.module.scss';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { contactShow, setContactShow } = useContactShow();
  const nodeRef = React.useRef(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactData>();

  const onSubmit = async (values: ContactData) => {
    if (await saveContact(values)) {
      if (setContactShow) setContactShow(false);
      toast.success(t('toast.success.attempt'));
    } else {
      toast.error(t('toast.fail.attempt'));
    }
  };

  const saveContact = async (data: ContactData) => {
    try {
      await db.collection('contacts').doc().set(data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={contactShow}
      timeout={400}
      classNames="modal-contact"
      unmountOnExit
    >
      <div className={`${styles.modalContainer} modal-container`}>
        <div ref={nodeRef} className="container modal-contact">
          <div className="highlight">
            <div>
              <h3>{t('about.title')}</h3>
              <p>{t('contact.about.desc')}</p>
            </div>
          </div>
          <div className="form">
            <div>
              <div
                className="close-modal"
                onClick={() => {
                  if (setContactShow) setContactShow(false);
                }}
              >
                <span></span>
                <span></span>
              </div>
              <h3>{t('contact.title')}</h3>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="input ">
                  <input
                    id="name"
                    className={errors.name && 'invalid'}
                    type="text"
                    {...register('name', { required: true, maxLength: 80 })}
                  />
                  <label htmlFor="name">{t('name')}</label>
                </div>
                <div className="input ">
                  <input
                    id="email"
                    className={errors.email && 'invalid'}
                    type="email"
                    {...register('email', {
                      required: 'Required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                      },
                    })}
                  />
                  <label htmlFor="email">{t('email')}</label>
                </div>
                <div className="input ">
                  <textarea
                    id="message"
                    className={errors.message && 'invalid'}
                    {...register('message', { required: true })}
                  />
                  <label htmlFor="message">{t('message')}</label>
                </div>
                <button className="btn" type="submit">
                  {t('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Contact;
