// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import ProgramOption from './ProgramOption';
import PageHeader from 'components/PageHeader';
import pageData from './OurProgramsPageData';
import './OurProgramsPage.scss';

type PropsType = {};

export default class OurProgramsPage extends React.Component<PropsType> {
  render() {
    const { header, ourPrograms } = pageData;

    const getProgramRoute = program => (
      `/programs/${program.title.toLowerCase().split(' ').join('-')}`
    );

    return (
      <div className='our_programs_page page'>
        <PageHeader image={header.image} title={header.title} callToAction={header.callToAction}/>
        <div className='page_contents'>
          <div className='program_options'>
            {
              ourPrograms.map(program => (
                <ProgramOption
                  key={program.title}
                  icon={<program.icon fill='white'/>}
                  image={program.image}
                  title={program.title}
                  caption={program.subtitle}
                  link={getProgramRoute(program)}
                />
              ))
            }
          </div>
          <div className='selected_program_option'>
            {
              ourPrograms.map(program => (
                <Route
                  key={program.title}
                  exact path={getProgramRoute(program)}
                  component={program.view}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
