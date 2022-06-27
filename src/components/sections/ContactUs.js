/** @format */

import React from 'react';
import classNames from 'classnames';

import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
const ContactUs = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Form',
    paragraph: 'Connect Instantly :  +91 9082671865',
  };
  return (
    <>
      <br />
      <br />
      <SectionHeader data={sectionHeader} className='center-content' />

      <section {...props} className={outerClasses}>
        <div className='container-sm'>
          <div className={innerClasses}>
            <div className='reveal-from-bottom' data-reveal-delay='600'>
              <div className='container'>
                <div className='cta-action'>
                  <Input
                    id='name'
                    type='text'
                    label='Name'
                    placeholder='Please Insert Your Name'></Input>

                  <Input
                    id='phone number'
                    type='number'
                    label='Phone Number'
                    placeholder='Please Insert Your Phone Number'></Input>

                  <Input
                    id='restaurant name'
                    type='text'
                    label='Restaurant Name'
                    placeholder='Please Insert Your Resturant Name'></Input>
                  <br />
                  <br />
                  <ButtonGroup>
                    <Button
                      color='primary'
                      wideMobile
                      href='https://cruip.com/'>
                      Submit
                    </Button>
                    <Button
                      tag='a'
                      color='dark'
                      wideMobile
                      href='https://github.com/cruip/open-react-template/'>
                      View Samples
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
