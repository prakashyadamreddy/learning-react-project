import TabButton from "./TabButton.jsx";
import { EXAMPLES } from  "../data.js";
import { useState, Fragment } from 'react';
import Section from "./Section.jsx";
import Tab from "./Tab.jsx";

export default function Examples () {
    const [selectedTopic, setSelectedTopic] = useState();
    function selectHandler (selectedButton) { 
      setSelectedTopic(selectedButton);
    }
    let tabContent = <p>please select a topic</p>;

    if(selectedTopic) {
      tabContent =
      (<div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
          </pre>
      </div>);
    }
    return (
        <Section id="examples" title="Example">
            <Tab  ButtonsContainer = "menu" buttons = {<>
                                <TabButton isSelected= {selectedTopic === 'components'} onClick={() => selectHandler('components')}>Components</TabButton>
                                <TabButton isSelected= {selectedTopic === 'jsx'} onClick={() => selectHandler('jsx')}>Jsx</TabButton>
                                <TabButton isSelected= {selectedTopic === 'props'} onClick={() => selectHandler('props')}>Props</TabButton>
                                <TabButton isSelected= {selectedTopic === 'state'} onClick={() => selectHandler('state')}>State</TabButton>                
                            </>
            }>
            {tabContent}
            </Tab>
        </Section> 
    );
}
