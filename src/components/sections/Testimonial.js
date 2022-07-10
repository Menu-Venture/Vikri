/** @format */

import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Build for Service Professionals, By Service Professionals. ',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'>
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>
                    — Using digital menu is so simple, it's just few clicks and
                    from the customer's standpoint it's very intuitive. Anytime
                    and anywhere.
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Gopal Verma
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#'>Digital Menu</a>
                  </span>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>
                    — We're a really busy restaurant, and Vikri gives our
                    customers digital experience for viewing menu and listing
                    selected menu items.
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Natasha B
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#'>Digital Menu</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-left'
              data-reveal-delay='200'>
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <p className='text-sm mb-0'>
                    — We have increased our productivity and reduced our turn
                    around time by atleast 30%. Customers are scanning and using
                    digital medium.
                  </p>
                </div>
                <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Vishnu K.L.
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#'>Digital Menu</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
