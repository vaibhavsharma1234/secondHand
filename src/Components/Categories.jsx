import { Button, Tabs } from 'flowbite-react'

const Categories = ({ handleClick }) => {
  const [tab, setTab] = useState('ALL')
  const handleTabChange = (event, newValue) => {
    console.log(newValue)
    setTab(newValue)
  }
  return (
    <div>
      <Tabs.Group
        aria-label="Default tabs"
        style="default"
        className="flex justify-evenly"
        onChange={handleTabChange}
      >
        <Tabs.Item id="ALL" value="ALL" title="ALL" selected={tab === 'ALL'}>
          {/* <p className="text-sm text-gray-500 dark:text-gray-400">
            <p>
              This is some placeholder content the
              <span className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </p> */}
          {/* <Cards ads={ads} /> */}
        </Tabs.Item>
        <Tabs.Item id="LAF" title="LAF" value="LAF" selected={tab === 'LAF'}>
          {/* <Cards ads={ads} /> */}
        </Tabs.Item>
        <Tabs.Item id="ELE" value="ELE" title="ELE" selected={tab === 'ELE'}>
          {/* <Cards ads={ads} /> */}
        </Tabs.Item>
        <Tabs.Item id="STD" value="STD" title="STD" selected={tab === 'STD'}>
          {/* <Cards ads={ads} /> */}
        </Tabs.Item>
        <Tabs.Item id="OT" value="OT" title="OT" selected={tab === 'OT'}>
          {/* <Cards ads={ads} /> */}
        </Tabs.Item>
      </Tabs.Group>
    </div>
  )
}
export default Categories
