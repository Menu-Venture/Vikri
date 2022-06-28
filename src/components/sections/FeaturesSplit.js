/** @format */

import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'How it Works',
    paragraph:
      'Vikri QR menu is the perfect tool for restaurants, cafes, shops, canteens and other business types to provide their customers with an attractive QR menu, digital menu/catalog, and help them select items, search, optionout veg & etc. Amplify your reach, inspire your audience, cut costs and save time all by using single tool.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={splitClasses}>
            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  Scan QR code from your phone
                </div>
                <h3 className='mt-0 mb-12'>Scan QR code from your phone</h3>
                <p className='m-0'>
                  Guest Scan's QR code placed on the table with the mobile
                  phone. This Qr code will take you to your browser
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt='Features split 01'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-right'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  Check the menu directly on your smartphone
                </div>
                <h3 className='mt-0 mb-12'>Guest Browses Menu</h3>
                <p className='m-0'>
                  Guest browses the menu without downloading any app. It's
                  absolutely responsive. View the menu and add items to list
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt='Features split 02'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  Select items and give orders to waiters
                </div>
                <h3 className='mt-0 mb-12'>
                  Select items and give orders to waiters
                </h3>
                <p className='m-0'>
                  Once all the items are added. The staff takes the order from
                  you. Where you can dictate your selected menu items.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'>
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
