import TabButton from "../components/Header/TabButton.jsx";
import { EXAMPLES } from  "../data.js";
import { useState, Fragment } from 'react';

export default function Examples () {
    const [selectedTopic, setSelectedTopic] = useState();
    function selectHandler (selectedButton) { 
      setSelectedTopic(selectedButton);
    }
    return (
        <section id="examples">
            <h2>Example</h2>
            <menu>
                <TabButton isSelected= {selectedTopic === 'components'} onSelect={() => selectHandler('components')}>Components</TabButton>
                <TabButton isSelected= {selectedTopic === 'jsx'} onSelect={() => selectHandler('jsx')}>Jsx</TabButton>
                <TabButton isSelected= {selectedTopic === 'props'} onSelect={() => selectHandler('props')}>Props</TabButton>
                <TabButton isSelected= {selectedTopic === 'state'} onSelect={() => selectHandler('state')}>State</TabButton>
            </menu>
            {!selectedTopic ? <p>please select a topic</p> : 
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
            </div>}
        </section> 
    );
}
