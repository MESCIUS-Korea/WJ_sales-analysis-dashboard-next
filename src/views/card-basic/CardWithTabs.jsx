'use client';

// MUI Imports
import Card from '@mui/material/Card';
// Wijmo
import '@mescius/wijmo.styles/wijmo.css';
import { TabPanel, Tab } from '@mescius/wijmo.react.nav';

const CardWithTabs = () => {
  // ** State
  // const [value, setValue] = useState('1')

  const clickBtn = (event, index) => {
    alert(index + ' 을 클릭하셨습니다!');
  };

  return (
    <Card>
      <TabPanel selectedIndex={1}>
        <Tab>
          <a>항목 1</a>
          <div>
            <p className="tab-content-title">헤더2</p>
            <p className="tab-content">
              Pudding tiramisu caramels. Gingerbread gummies danish chocolate
              bar toffee marzipan. Wafer wafer cake powder danish oat cake.
            </p>
            <button
              onClick={(e) => clickBtn(e, 'button1')}
              className="tab-content-btn"
            >
              버튼 1
            </button>
          </div>
        </Tab>
        <Tab>
          <a>항목 2</a>
          <div>
            <p className="tab-content-title">헤더더 2</p>
            <p className="tab-content">
              Dragée chupa chups soufflé cheesecake jelly tootsie roll cupcake
              marzipan. Carrot cake sweet roll gummi bears caramels jelly beans.
            </p>
            <button
              onClick={(e) => clickBtn(e, 'button2')}
              className="tab-content-btn"
            >
              버튼 2
            </button>
          </div>
        </Tab>
        <Tab>
          <a>항목 3</a>
          <div>
            <p className="tab-content-title">헤더더 3</p>
            <p className="tab-content">
              Icing cake macaroon macaroon jelly chocolate bar. Chupa chups
              dessert dessert soufflé chocolate bar jujubes gummi bears
              lollipop.
            </p>
            <button
              onClick={(e) => clickBtn(e, 'button3')}
              className="tab-content-btn"
            >
              버튼 3
            </button>
          </div>
        </Tab>
      </TabPanel>
    </Card>
  );
};

export default CardWithTabs;
