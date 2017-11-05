import { TweenMax } from 'gsap';
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { Link } from 'react-router-dom';
import pages from 'pages';
import './NavbarDropdown.scss';

class Dropdown extends React.Component {

  componentWillEnter (callback) {
    TweenMax.fromTo(
      this.container,
      0.3,
      {
        y: -this.container.offsetHeight
      },
      {
        y: 0,
        onComplete: callback
      }
    );
  }

  componentWillLeave (callback) {
    TweenMax.fromTo(
      this.container,
      0.3,
      {
        y: 0
      },
      {
        y: -this.container.offsetHeight,
        onComplete: callback
      }
    );
  }

  render() {
    return (
      <div
        ref={c => this.container = c}
        className='navbar_dropdown'
        key='dropdown'
      >
        { this.props.children }
      </div>
    );
  }
}

export default function NavbarDropdown(props) {

  const {
    dropdownData,
    setHoverState
  } = props;

  // Looks into the 'sections' property exported by each page component to see
  // what anchor-links that page makes available
  //Polyfill for Array.prototype.find (method is not compatible with Internet Explorer)
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function(predicate) {
       // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }

        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];

        // 5. Let k be 0.
        var k = 0;

        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          // e. Increase k by 1.
          k++;
        }

        // 7. Return undefined.
        return undefined;
      }
    });
  }
  const relevantPage = pages.find(page => page.path === dropdownData.pagePath);
  const sections = relevantPage && relevantPage.sections;

  return (
    <ReactTransitionGroup
      className='navbar_dropdown_group'
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      { sections && (
        <Dropdown>
          { sections.map(section => (
            <div key={section.name} className='dropdown_option'>
              <Link to={`${dropdownData.pagePath}/${section.link}`} >
                {section.name}
              </Link>
            </div>
          ))}
        </Dropdown>
      )}
    </ReactTransitionGroup>
  );
}
