/** @format */

import React from 'react';
import classNames from 'classnames';

import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
import Dropdown from '../elements/Dropdown';
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
    title: 'Contact Us',
    paragraph: 'Lets Connect Instantly : +91 9082671865',
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
                <div className='cta-action' id='ct'>
                  <form
                    className='form'
                    action='https://docs.google.com/forms/d/e/1FAIpQLScyHnNuvaBdlwSyx_cFG1zmF0F5iZtJB7R-tfBCPDR0sLc4yA/formResponse'>
                    <Input
                      id='name'
                      type='text'
                      label='Name'
                      name='entry.1807595019'
                      placeholder='Name'></Input>

                    <Input
                      id='phone number'
                      type='number'
                      label='Phone Number'
                      placeholder='Phone Number'
                      name='entry.598174878'></Input>

                    <Input
                      id='restaurant name'
                      type='text'
                      label='Restaurant Name'
                      placeholder='Resturant Name'
                      name='entry.699471327'></Input>
                    <br />
                    <br />

                    <ButtonGroup>
                      <Button
                        color='primary'
                        wideMobile
                        type='submit'
                        value='Send'>
                        Submit
                      </Button>
                      
                      {/* <Button
                        tag='a'
                        color='dark'
                        wideMobile
                        href='https://github.com/cruip/open-react-template/'>
                        View Samples
                      </Button> */}

                      {/* <select>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
      </select> */}
                    </ButtonGroup>
                  </form>
                  <br />
                      <br />
                      <Dropdown />
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
