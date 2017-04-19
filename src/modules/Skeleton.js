import React, { Component } from 'react';
import { Link } from 'react-router'
import '../scss/App.scss';
import '../scss/Skeleton.scss';

const pages = [
  { path: "about", text: "About Us" },
  { path: "team", text: "Our Team" },
  { path: "sign-up", text: "Sign Up" }
];

export class Skeleton extends Component {
   render() {
      return (
         <div>
            <Navbar name="The Coding School" items={pages}/>
            {this.props.children}
            <Footer/>
         </div>
      );
   }
}

class Navbar extends Component {
  render() {
    var items = this.props.items;
    var navItems = items.map((i) => {
      return (
        <Link key={i.path} to={"/" + i.path}>
            {i.text.toUpperCase()}
        </Link>
      );
    });

    return (
      <nav className="flex" id="navbar">
        <div className="navbar_logo btn btn_inflate">
          <div className="logo_box">
            <h1 id="long_nav_logo"><Link to="/">THE CODING SCHOOL</Link></h1>
            <h1 id="short_nav_logo"><Link to="/">TCS</Link></h1>
          </div>
        </div>
        <div className="navbar_tabs flex">{navItems}</div>
      </nav>
    );
  }
}

export class PageHeader extends Component {
  render() {
    const p = this.props;
    return (
      <div className="page_header">
        <div className="header_background">
          <div className="shadow"></div>
          <img src={p.image} alt="header"/>
        </div>
        <div className="header_contents">
          <div className="header_text">
            <div className="container">
              <h1>{p.title}</h1>
              <p>{p.description}</p>
            </div>
          </div>
          {(p.appendDOM)}
        </div>
      </div>
    );
  }
}

class Footer extends Component {

  // should contain
  // * contact information
  // * resource websites

  render() {
    const resourceLinks = [
      {
        name: "Code.org",
        href: "http://www.code.org"
      },
      {
        name: "Codecademy",
        href: "http://www.codecademy.com"
      },
      {
        name: "Python Tutorial",
        href: "https://docs.python.org/3/tutorial/index.html"
      },
      {
        name: "Python Documentation",
        href: "https://docs.python.org/3/"
      },
      {
        name: "AP Computer Science",
        href: "https://apstudent.collegeboard.org/apcourse/ap-computer-science-a"
      }
    ]
    const linkedInLink = "https://www.linkedin.com/company/the-coding-school";
    return (
        <footer>

          <div className="footer_top">
            <div className="int_links col-md-4">
              <h2>Links</h2>
              {
                pages.map((i) => {
                  return (
                    <div key={i.path}>
                      <Link to={"/" + i.path}>
                          {i.text}
                      </Link>
                    </div>
                  );
                })
              }
            </div>

            <div className="ext_resources col-md-4">
              <div>
                <h2>Resources</h2>
                {
                  resourceLinks.map((item) => {
                    return (
                      <div key={item.href}>
                        <a href={item.href}>{item.name}</a>
                      </div>
                    );
                  })
                }
              </div>
            </div>

            <div className="contact_info col-md-4">

              <h2>Contact</h2>
              <a href={linkedInLink}>
                <div className="font_awesome">
                  <i className="fa fa-linkedin-square"/> <span className="icon_name">LinkedIn</span>
                </div>
              </a>

              <div className="main_font">
                <i className="fa fa-envelope"/> info.thecodingschool@gmail.com
              </div>

              <div className="main_font">
                <i className="fa fa-phone"/> (323)-790-9992
              </div>

              <p><strong>The Coding School</strong>
              <br/>3940 Laurel Cyn Blvd
              <br/>Los Angeles, CA 91604</p>
            </div>
          </div>

          <hr/>

          <div className="footer_bottom">
            <p>The Coding School © 2017</p>
          </div>


        </footer>
    );
  }
}

export class FontAwesomeLink extends Component {
  render() {
    const link = this.props.link;
    const classNames = this.props.classNames;
    if (this.props.link) {
      return (
        <a href={link}><i className={classNames}></i></a>
      );
    }
  }
}

export class TextBlock extends Component {
  render() {
    let paragraphs = this.props.paragraphs.map(function(p) {
      return <p key={p.substr(0, 10)}>{p}</p>
    });

    return (<div className="paragraphs"> {paragraphs} </div>);
  }
}

export class TitledParagraphs extends Component {
  render() {
    const title = this.props.title;
    const paragraphs = <TextBlock paragraphs={this.props.paragraphs} />;
    return (
      <TitledContent title={title} content={paragraphs} />
    );
  }
}

export class TitledContent extends Component {
  render() {
    const title = this.props.title;
    const content = this.props.content;
    return (
      <div className="paragraph titled" key={title}>
        <h1 className="title">{title}</h1>
        {content}
      </div>
    );
  }
}

export class HoverFadeImage extends Component {
  render() {
    const root = process.env.PUBLIC_URL + "/images/team/";
    const funImage = root + this.props.funImage;
    const regImage = root + this.props.regImage;
    return (
      <div className="hover_fade_image">
        <img className="fun" src={funImage} alt="fun" />
        <img className="reg" src={regImage} alt="regular" />
      </div>
    );
  }
}

export class LinkButton extends Component {
  render() {
    return (
      <div className="flex_center btn btn_inflate wow bounceIn">
        <a href={this.props.link}>
          <button className="action_button">{this.props.text}</button>
        </a>
      </div>
    );
  }
}
