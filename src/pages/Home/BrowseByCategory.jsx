import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../pages/Home/styles.css";

const BrowseByCategory = () => {
  return (
    <div className='my-20 mx-auto'>
      <div className='text-start my-10 space-y-5'>
        <h3 className='text-5xl font-bold'>Browse by category</h3>
        <p>Explore your career opportunity through with us</p>
      </div>
      <Tabs>
        <TabList className='flex justify-center space-x-4 '>
          <Tab>
            <div className='flex flex-col items-center gap-5 border p-3 hover:bg-base-300 rounded-lg overflow-hidden'>
              <div className='bg-base-200 rounded-full '>
                <img
                  className='p-3'
                  src='https://i.ibb.co/K2Vb6Wv/code-868786.png'
                  alt=''
                />
              </div>
              <p className='text-lg font-bold'>Web Development</p>
            </div>
          </Tab>
          <Tab>
            <div className='flex flex-col items-center gap-5 border p-3 hover:bg-base-300 rounded-lg overflow-hidden'>
              <div className='bg-base-200 rounded-full '>
                <img
                  className='p-3'
                  src='https://i.ibb.co/K6ZfJ0N/digital-marketing-4297725-1.png'
                  alt=''
                />
              </div>
              <p className='text-lg font-bold'>Digital Marketing</p>
            </div>
          </Tab>
          <Tab>
            <div className='flex flex-col items-center gap-5 border p-3 hover:bg-base-300 rounded-lg overflow-hidden'>
              <div className='bg-base-200 rounded-full '>
                <img
                  className='p-3'
                  src='https://i.ibb.co/Jm7fdzj/delete-anchor-7632555.png'
                  alt=''
                />
              </div>

              <p className='text-lg font-bold'>Graphics Design</p>
            </div>
          </Tab>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BrowseByCategory;
