import React from 'react'
import { provider } from 'react-ioc'
import Navbar from '../components/nav'
import Panel from '../components/panel'
import Layout from '../components/layout'
import Filter from '../components/filter'
import ToggleType from '../components/toggle-type'
import TicketList from '../components/ticket-list'
import Root from '../components/root'

const Page = () => (
  <Root>
    <Navbar/>

    <Layout>
      <Panel className="filter-block">
        <Filter/>
      </Panel>
      <div className="ticket-list-block">
        <ToggleType/>
        <TicketList/>
      </div>
    </Layout>

    <style jsx global>{`
      .filter-block {
        width: 232px;
      }

      .ticket-list-block {
        width: 504px;
      }

      @media (max-width: 766px) {
        .filter-block, .ticket-list-block {
          width: 100%;
        }
      }
    `}</style>
  </Root>
);

export default provider()(Page);