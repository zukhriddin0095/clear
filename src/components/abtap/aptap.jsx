import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./abtap.scss";

export class Aptap extends Component {
  render() {
    return (
      <section className="tab">
        <div className="container">
          <h3>
            Наша <span>продукция</span>
          </h3>
          <Tabs>
            <TabList>
              <Tab>
                <a href="#ssas">Ламинатные тубы</a>
              </Tab>
              <Tab>
                <a href="#ssas">Экструзионные тубы</a>
              </Tab>
              <Tab>
                <a href="#ssas">Другая упаковка</a>
              </Tab>
            </TabList>

            <TabPanel>
              <img src="/1 (1).png" alt="product" />
              <img src="/1 (2).png" alt="product" />
              <img src="/1 (3).png" alt="product" />
              <img src="/1 (4).png" alt="product" />
              <img src="/1 (5).png" alt="product" />
            </TabPanel>
            <TabPanel>
              <img src="/1 (5).png" alt="product" />
              <img src="/1 (4).png" alt="product" />
              <img src="/1 (3).png" alt="product" />
              <img src="/1 (2).png" alt="product" />
              <img src="/1 (1).png" alt="product" />
            </TabPanel>
            <TabPanel>
              <img src="/1 (1).png" alt="product" />
              <img src="/1 (2).png" alt="product" />
              <img src="/1 (3).png" alt="product" />
              <img src="/1 (4).png" alt="product" />
              <img src="/1 (5).png" alt="product" />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default Aptap;
